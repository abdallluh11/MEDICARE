import React, { useState, useRef, useEffect } from "react";
import { doctorDetailStyles as s } from "../assets/dummyStyles";
import {
  User, XCircle, Calendar, Plus,
  Trash2, CheckCircle, Eye, EyeClosed,
} from "lucide-react";

// بتحول الوقت "10:30 AM" لدقائق (630) عشان نقدر نقارن وقتين مع بعض
function timeStringToMinutes(t) {
  if (!t) return 0;
  const [hhmm, ampm] = t.split(" ");
  let [h, m] = hhmm.split(":").map(Number);
  if (ampm === "PM" && h !== 12) h += 12;
  if (ampm === "AM" && h === 12) h = 0;
  return h * 60 + m;
}

// بتحول "2026-06-23" لـ "23 June 2026" عشان يبان بشكل أحسن للمستخدم
function formatDateISO(iso) {
  if (!iso) return "";
  const [y, m, d] = iso.split("-");
  const dateObj = new Date(Number(y), Number(m) - 1, Number(d));
  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "June",
    "July", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  return `${Number(d)} ${monthNames[dateObj.getMonth()]} ${y}`;
}

export const AddPage = () => {
  // قائمة الدكاترة اللي اتضافوا (بتتعرض أسفل الفورم)
  const [doctorList, setDoctorList] = useState([]);
  
  // ref للـ file input عشان نقدر نعمله reset بعد الـ submit
  const fileInputRef = useRef(null);

  // كل بيانات الفورم في object واحد عشان إدارته أسهل
  const [form, setForm] = useState({
    name: "", specialization: "", imageFile: null, imagePreview: "",
    experience: "", qualifications: "", location: "", about: "",
    fee: "", success: "", patients: "", rating: "",
    schedule: {}, availability: "Available", email: "", password: "",
  });

  // بيانات الـ slot اللي بيضيفه الدكتور (تاريخ + وقت)
  const [slotDate, setSlotDate] = useState("");
  const [slotHour, setSlotHour] = useState("");
  const [slotMinute, setSlotMinute] = useState("00");
  const [slotAmpm, setSlotAmpm] = useState("AM");

  // الـ toast notification (رسالة النجاح أو الخطأ)
  const [toast, setToast] = useState({ show: false, type: "success", message: "" });
  
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  
  // تحسين: عداد حروف الـ About
  const [aboutCharCount, setAboutCharCount] = useState(0);
  const ABOUT_MAX = 500;

  // بنحسب تاريخ النهارده مرة واحدة بس عشان منسمحش بإضافة slot في الماضي
  const [today] = useState(() => {
    const d = new Date();
    const local = new Date(d.getTime() - d.getTimezoneOffset() * 60000);
    return local.toISOString().split("T")[0];
  });

  // الـ toast بيختفي تلقائي بعد 4 ثواني
  useEffect(() => {
    if (!toast.show) return;
    const t = setTimeout(
      () => setToast((prev) => ({ ...prev, show: false })),
      4000
    );
    return () => clearTimeout(t);
  }, [toast.show]);

  const showToast = (type, message) => setToast({ show: true, type, message });

  // بترجع الفورم لحالتها الأصلية بعد الـ submit أو لو المستخدم عايز يبدأ من أول
  function resetForm() {
    setForm({
      name: "", specialization: "", imageFile: null, imagePreview: "",
      experience: "", qualifications: "", location: "", about: "",
      fee: "", success: "", patients: "", rating: "",
      schedule: {}, availability: "Available", email: "", password: "",
    });
    setSlotDate("");
    setSlotHour("");
    setSlotMinute("00");
    setShowPassword(false);
    setAboutCharCount(0); // تحسين: reset عداد الحروف
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  // لما المستخدم يختار صورة، بنعمل preview ليها محلياً قبل الرفع
  function handleImage(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    // بنمسح الـ URL القديم من الميموري عشان منحصلش memory leak
    if (form.imagePreview && form.imageFile) {
      URL.revokeObjectURL(form.imagePreview);
    }
    setForm((p) => ({
      ...p,
      imageFile: file,
      imagePreview: URL.createObjectURL(file),
    }));
  }

  // لما المستخدم يمسح الصورة
  function removeImage() {
    if (form.imagePreview && form.imageFile) {
      URL.revokeObjectURL(form.imagePreview);
    }
    setForm((p) => ({ ...p, imageFile: null, imagePreview: "" }));
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  // بتضيف slot جديد للجدول مع validation
  function addSlotToForm() {
    if (!slotDate || !slotHour) {
      showToast("error", "Select date + time");
      return;
    }
    // منسمحش بإضافة slot في الماضي
    if (slotDate < today) {
      showToast("error", "Cannot add a slot in the past");
      return;
    }
    const time = `${slotHour}:${slotMinute} ${slotAmpm}`;

    // لو التاريخ النهارده، نتأكد إن الوقت مش فات
    if (slotDate === today) {
      const now = new Date();
      const nowMinutes = now.getHours() * 60 + now.getMinutes();
      if (timeStringToMinutes(time) <= nowMinutes) {
        showToast("error", "Cannot add a time that has already passed today");
        return;
      }
    }

    setForm((f) => {
      const sched = { ...f.schedule };
      if (!sched[slotDate]) sched[slotDate] = [];
      // منضيفش نفس الـ slot مرتين
      if (!sched[slotDate].includes(time)) sched[slotDate].push(time);
      // بنرتب الـ slots من الأصغر للأكبر
      sched[slotDate].sort(
        (a, b) => timeStringToMinutes(a) - timeStringToMinutes(b)
      );
      return { ...f, schedule: sched };
    });
    setSlotHour("");
    setSlotMinute("00");
  }

  // بتمسح slot معين
  function removeSlot(date, time) {
    setForm((f) => {
      const sched = { ...f.schedule };
      sched[date] = sched[date].filter((t) => t !== time);
      // لو التاريخ ملوش slots خالص، بنمسحه كمان
      if (!sched[date].length) delete sched[date];
      return { ...f, schedule: sched };
    });
  }

  // بتحول الـ schedule object لـ array بسيط عشان نعرضه
  // { "2026-06-23": ["10:00 AM", "11:00 AM"] }
  // → [{ date: "2026-06-23", time: "10:00 AM" }, ...]
  function getFlatSlots(schedule) {
    const arr = [];
    Object.keys(schedule).sort().forEach((d) => {
      schedule[d].forEach((t) => arr.push({ date: d, time: t }));
    });
    return arr;
  }

  // بتتأكد إن كل الحقول المطلوبة متملوءة قبل الـ submit
  function validate(f) {
    const required = [
      "name", "specialization", "experience", "qualifications",
      "location", "about", "fee", "success", "patients",
      "rating", "email", "password",
    ];
    for (let k of required) {
      if (!f[k]) return false;
    }
    if (!f.imageFile) return false;
    if (!Object.keys(f.schedule).length) return false;
    return true;
  }

  // الـ function الرئيسية اللي بتتنفذ لما المستخدم يضغط "Add Doctor"
  async function handleAdd(e) {
    e.preventDefault(); // بنمنع الـ browser من إنه يعمل refresh
    
    if (!validate(form)) {
      showToast("error", "Fill all fields + upload image + add slot");
      return;
    }
    const r = Number(form.rating);
    if (Number.isNaN(r) || r < 1 || r > 5) {
      showToast("error", "Rating must be between 1 and 5");
      return;
    }

    setLoading(true);
    try {
      // بنستخدم FormData عشان نبعت صورة مع البيانات
      const fd = new FormData();
      fd.append("name", form.name);
      fd.append("specialization", form.specialization);
      fd.append("experience", form.experience);
      fd.append("qualifications", form.qualifications);
      fd.append("location", form.location);
      fd.append("about", form.about);
      fd.append("fee", form.fee || "0");
      fd.append("success", form.success);
      fd.append("patients", form.patients);
      fd.append("rating", form.rating || "0");
      fd.append("availability", form.availability);
      fd.append("email", form.email);
      fd.append("password", form.password);
      fd.append("schedule", JSON.stringify(form.schedule));
      if (form.imageFile) fd.append("image", form.imageFile);

      const res = await fetch("http://localhost:4000/api/doctors", {
        method: "POST",
        body: fd,
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        showToast("error", data?.message || `Server error (${res.status})`);
        return;
      }

      showToast("success", "Doctor Added Successfully!");
      
      // بنضيف الدكتور الجديد لقائمة المعروضة فوراً من غير ما ننتظر fetch جديد
      const newDoctor = data?.data ?? { id: Date.now(), ...form, imageUrl: form.imagePreview };
      setDoctorList((old) => [newDoctor, ...old]);
      
      resetForm(); // تحسين: بنعمل reset في مكان واحد بس
    } catch (err) {
      console.error("submit error:", err);
      showToast("error", "Network or server error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={s.pageContainer}>
      {/* Header */}
      <div className={s.maxWidthContainerLg + " " + s.headerContainer}>
        <div className={s.headerFlexContainer}>
          <div className={s.headerIconContainer}>
            <User className="text-white" size={32} />
          </div>
          <h1 className={s.headerTitle}>Add New Doctor</h1>
        </div>
      </div>

      {/* Toast - بيظهر بس لو toast.show = true */}
      {toast.show && (
        <div className={s.toastContainer + " " + (toast.type === "success" ? s.toastSuccess : s.toastError)}>
          {toast.type === "success" ? <CheckCircle size={22} /> : <XCircle size={22} />}
          <span>{toast.message}</span>
        </div>
      )}

      {/* Form */}
      <div className={s.maxWidthContainer + " " + s.formContainer}>
        <form onSubmit={handleAdd} className={s.formGrid}>
          
          {/* Upload Image */}
          <div className="md:col-span-2">
            <label className={s.label}>Upload Profile Image</label>
            <div className="flex flex-wrap items-center gap-4">
              <input type="file" ref={fileInputRef} accept="image/*"
                onChange={handleImage} className={s.fileInput} />
              {form.imagePreview && (
                <div className="relative group">
                  <img src={form.imagePreview} alt="preview" className={s.imagePreview} />
                  <button type="button" onClick={removeImage}
                    className={s.removeImageButton + " " + s.cursorPointer}>
                    <XCircle size={14} />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Basic Info */}
          <input className={s.inputBase} placeholder="Full Name"
            value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />

          <input className={s.inputBase} placeholder="Specialization"
            value={form.specialization} onChange={(e) => setForm({ ...form, specialization: e.target.value })} />

          <input className={s.inputBase} placeholder="Location"
            value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} />

          <input className={s.inputBase} placeholder="Experience (e.g. 5 years)"
            value={form.experience} onChange={(e) => setForm({ ...form, experience: e.target.value })} />

          <input className={s.inputBase} placeholder="Qualifications (e.g. MBBS)"
            value={form.qualifications} onChange={(e) => setForm({ ...form, qualifications: e.target.value })} />

          <input className={s.inputBase} placeholder="Consultation Fee"
            value={form.fee} onChange={(e) => setForm({ ...form, fee: e.target.value })} />

          {/* تحسين: About مع عداد حروف */}
          <div className="md:col-span-2">
            <textarea
              className={s.inputBase + " w-full"}
              placeholder="About the doctor (bio)"
              value={form.about}
              maxLength={ABOUT_MAX}
              onChange={(e) => {
                setForm({ ...form, about: e.target.value });
                setAboutCharCount(e.target.value.length);
              }}
              rows={3}
            />
            {/* عداد الحروف */}
            <p className={"text-xs text-right mt-1 " + (aboutCharCount >= ABOUT_MAX ? "text-rose-500" : "text-gray-400")}>
              {aboutCharCount}/{ABOUT_MAX}
            </p>
          </div>

          <input className={s.inputBase} placeholder="Rating (1.0 - 5.0)"
            type="number" min={1} max={5} step={0.1} value={form.rating}
            onChange={(e) => {
              const v = e.target.value;
              if (v === "") { setForm((p) => ({ ...p, rating: "" })); return; }
              const n = Number(v);
              if (Number.isNaN(n)) return;
              const fixed = Math.round(Math.max(1, Math.min(5, n)) * 10) / 10;
              setForm((p) => ({ ...p, rating: fixed.toString() }));
            }}
            onBlur={() => {
              setForm((p) => {
                if (!p.rating) return p;
                const n = Number(p.rating);
                if (Number.isNaN(n)) return { ...p, rating: "" };
                return { ...p, rating: Math.max(1, Math.min(5, n)).toFixed(1) };
              });
            }}
          />

          <input className={s.inputBase} placeholder="Patients"
            value={form.patients} onChange={(e) => setForm({ ...form, patients: e.target.value })} />

          <input className={s.inputBase} placeholder="Success Rate (%)"
            value={form.success} onChange={(e) => setForm({ ...form, success: e.target.value })} />

          <input className={s.inputBase} placeholder="Doctor Email"
            type="email" value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })} />

          {/* Password مع زرار إظهار/إخفاء */}
          <div className="relative">
            <input
              className={s.inputBase + " " + s.inputWithIcon}
              placeholder="Doctor Password"
              type={showPassword ? "text" : "password"}
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            <button type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className={s.passwordToggleButton + " " + s.cursorPointer}>
              {showPassword ? <Eye size={18} /> : <EyeClosed size={18} />}
            </button>
          </div>

          <select className={s.inputBase} value={form.availability}
            onChange={(e) => setForm({ ...form, availability: e.target.value })}>
            <option value="Available">Available</option>
            <option value="Unavailable">Unavailable</option>
          </select>

          {/* Schedule Slots */}
          <div className={s.scheduleContainer + " md:col-span-2"}>
            <div className={s.scheduleHeader}>
              <Calendar className="text-emerald-600" />
              <p className={s.scheduleTitle}>Add Schedule Slots</p>
            </div>

            <div className={s.scheduleInputsContainer}>
              <input type="date" value={slotDate} min={today}
                onChange={(e) => setSlotDate(e.target.value)}
                className={s.scheduleDateInput} />

              <select value={slotHour} onChange={(e) => setSlotHour(e.target.value)}
                className={s.scheduleTimeSelect}>
                <option value="">Hour</option>
                {Array.from({ length: 12 }).map((_, i) => (
                  <option key={i} value={String(i + 1)}>{i + 1}</option>
                ))}
              </select>

              <select value={slotMinute} onChange={(e) => setSlotMinute(e.target.value)}
                className={s.scheduleTimeSelect}>
                {Array.from({ length: 60 }).map((_, i) => (
                  <option key={i} value={String(i).padStart(2, "0")}>
                    {String(i).padStart(2, "0")}
                  </option>
                ))}
              </select>

              <select value={slotAmpm} onChange={(e) => setSlotAmpm(e.target.value)}
                className={s.scheduleTimeSelect}>
                <option>AM</option>
                <option>PM</option>
              </select>

              <button type="button" onClick={addSlotToForm}
                className={s.addSlotButton + " " + s.cursorPointer}>
                <Plus size={18} /> Add Slot
              </button>
            </div>

            {/* عرض الـ slots المضافة */}
            <div className={s.slotsGrid}>
              {getFlatSlots(form.schedule).map(({ date, time }) => (
                <div key={date + time} className={s.slotItem + " " + s.cursorPointer}>
                  <span>{formatDateISO(date)} — {time}</span>
                  {/* تحسين: confirmation قبل المسح */}
                  <button
                    onClick={() => {
                      if (window.confirm(`Remove slot: ${formatDateISO(date)} — ${time}?`)) {
                        removeSlot(date, time);
                      }
                    }}
                    className="text-rose-500"
                    aria-label={`Remove slot ${date} ${time}`}>
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Submit */}
          <div className="md:col-span-2 flex justify-end mt-4">
            <button type="submit" disabled={loading}
              className={loading ? s.buttonLoading : s.button}>
              {loading ? "Adding..." : "Add Doctor"}
            </button>
          </div>
        </form>
      </div>

      {/* قائمة الدكاترة اللي اتضافوا */}
      <div className={s.doctorListContainer}>
        {doctorList.length ? (
          <div className={s.doctorListGrid}>
            {doctorList.map((d) => (
              <div key={d.id || d._id} className={s.doctorCard}>
                <div className={s.doctorCardContent}>
                  <img src={d.imageUrl || d.imagePreview} alt={d.name} className={s.doctorImage} />
                  <div>
                    <div className={s.doctorName}>{d.name}</div>
                    <div className={s.doctorSpecialization}>{d.specialization}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className={s.emptyState}>No Doctor Yet</p>
        )}
      </div>
    </div>
  );
};

export default AddPage;