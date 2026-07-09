# MEDICARE 🏥

<img width="1910" height="942" alt="{70A2C44C-BC48-49ED-A6CF-726B158E2B8A}" src="https://github.com/user-attachments/assets/77bffa88-8204-495e-bfaa-097633c15a81" />
<img width="1719" height="941" alt="{A912704D-8ECA-4B52-B33D-983D0234F4EA}" src="https://github.com/user-attachments/assets/a12f387e-45f2-478b-9687-ebeac3b40b13" />
<img width="1694" height="854" alt="{3FEDC2C5-5147-40B0-9857-9614C86F3CD3}" src="https://github.com/user-attachments/assets/27be9644-f9a3-489a-ab6b-78ef904eb037" />
<img width="1858" height="963" alt="{EEF9E396-7A53-4597-A6A1-F05BDF5FD324}" src="https://github.com/user-attachments/assets/76543493-002c-4116-bc7f-56adc8bc23a6" />  
<img width="1849" height="906" alt="{81FFE810-BE9E-4302-BA0A-8D8E19395338}" src="https://github.com/user-attachments/assets/fd705bb0-830c-4671-97c3-3bda23747a5b" />
<img width="1811" height="856" alt="{E456A852-8434-4126-BBB6-19262BAF2DBB}" src="https://github.com/user-attachments/assets/ea783b68-949a-4c2d-93c7-0576f6829389" />
<img width="1439" height="944" alt="{77BE3065-86E3-477A-89A2-A9FF340CF839}" src="https://github.com/user-attachments/assets/b58ea2a1-4867-4759-9523-8958338cfda9" />
<img width="1720" height="940" alt="{AF62235C-8322-4EDE-8DEF-223312C76516}" src="https://github.com/user-attachments/assets/d1a978ca-a6ec-4888-a6fb-a072504e6b81" />
<img width="1373" height="856" alt="{4720C04F-09C7-4E73-9F8A-8B7194C1D56A}" src="https://github.com/user-attachments/assets/85e90dec-90ac-4d43-b0b4-34b58fa322c2" />
<img width="1587" height="880" alt="{43970BAD-076C-488E-84A4-BC4F798FB310}" src="https://github.com/user-attachments/assets/83bdc8db-1f95-4d22-b5af-b37c6cbb8976" />
<img width="1766" height="858" alt="{18E77D79-964E-4187-9905-3D99E0AB09D8}" src="https://github.com/user-attachments/assets/b59ceded-ff19-419e-91c6-c4fad1b6cda4" />
<img width="1560" height="811" alt="{18E0165E-44AD-4E53-9093-8E42A0A164F4}" src="https://github.com/user-attachments/assets/882fbea6-e155-4a8d-85a4-89730402aa41" />
<img width="1431" height="876" alt="{6B07F640-8069-4AA3-919C-8077D697F89C}" src="https://github.com/user-attachments/assets/f15bbd87-aaac-4e0d-8a1f-160eb4a7f9e9" />
<img width="1387" height="818" alt="{079558BB-4E6E-4F91-9406-4804F3D262EC}" src="https://github.com/user-attachments/assets/31c3b14c-9b55-49aa-8797-8481bcf3b9ea" />
<img width="1898" height="930" alt="{7F64399D-CAC6-4918-BE44-26B65406F8D7}" src="https://github.com/user-attachments/assets/dbdaf02e-ee86-4b8b-b3c7-f6df713873ce" />




A full-stack **MERN** healthcare platform that connects patients with doctors and clinical services — supporting online appointment booking, doctor management, service bookings, and secure payments, with a dedicated admin dashboard for full platform control.

---

## 🌐 Overview

MEDICARE is built as three independent applications working together:

| App | Description |
|---|---|
| **Frontend** | Patient-facing web app — browse doctors & services, book appointments, manage bookings |
| **Admin** | Admin dashboard — manage doctors, services, and appointments platform-wide |
| **Backend** | REST API powering both apps — authentication, business logic, and database operations |

---

## ✨ Key Features

- 🔐 **Secure Authentication** using [Clerk](https://clerk.com/) for patient sign-up/login
- 👨‍⚕️ **Doctor Management** — profiles with specialization, experience, qualifications, availability, and weekly schedule
- 🩺 **Medical Services** — browsable services with pricing, available time slots, and instructions
- 📅 **Appointment Booking System** — book, reschedule, or cancel appointments for both doctors and services
- 💳 **Online & Cash Payments** — integrated with [Stripe](https://stripe.com/) for online payments, alongside cash-on-visit option
- 📊 **Admin Dashboard** — real-time stats on appointments, registered patients, and platform activity
- 🖼️ **Image Uploads** — doctor and service images handled via [Cloudinary](https://cloudinary.com/) and Multer
- 🔎 **Search** — full-text search on doctors and services (by name/specialization)
- 📱 **Responsive UI** — built with React 19, Tailwind CSS, and Vite for a fast, modern experience

---

## 🛠️ Tech Stack

**Frontend & Admin**
- React 19, React Router DOM, Vite
- Tailwind CSS
- Clerk (authentication)
- React Toastify / React Hot Toast

**Backend**
- Node.js, Express.js
- MongoDB with Mongoose (schema design, validation, text indexes)
- Clerk Express (auth middleware)
- Stripe (payments)
- Cloudinary + Multer (image uploads)
- JWT, Validator.js

---

## 📁 Project Structure

```
MEDICARE/
├── frontend/       # Patient-facing React app
│   └── src/
│       ├── pages/       # Home, Doctors, Services, Appointments, Login, Contact...
│       ├── doctor/      # Doctor-side dashboard within the patient app
│       └── components/
├── admin/          # Admin dashboard (React)
│   └── src/
│       └── pages/       # Doctor management, Service management, Appointments
└── backend/        # REST API (Node.js + Express)
    ├── controllers/
    ├── models/          # Doctor, Service, Appointment, ServiceAppointment
    ├── routes/
    ├── middleware/
    ├── config/
    └── server.js
```

---

## 🔌 API Overview

| Endpoint | Description |
|---|---|
| `/api/doctors` | Doctor CRUD, listing, and search |
| `/api/services` | Medical services CRUD and listing |
| `/api/appointments` | Book, confirm, update, cancel doctor appointments + stats |
| `/api/service-appointments` | Book and manage service-based appointments |

Authentication-protected routes use Clerk middleware (`clerkMiddleware`, `requireAuth`) to ensure only signed-in users can create or access their own appointments.

---

## ⚙️ Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB instance (local or Atlas)
- Clerk account (for auth keys)
- Stripe account (for payment keys)
- Cloudinary account (for image uploads)

### 1. Clone the repository
```bash
git clone https://github.com/abdallluh11/MEDICARE.git
cd MEDICARE
```

### 2. Backend Setup
```bash
cd backend
npm install
```
Create a `.env` file in `backend/`:
```env
MONGODB_URI=your_mongodb_connection_string
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```
Run the server:
```bash
npm start
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```

### 4. Admin Setup
```bash
cd ../admin
npm install
npm run dev
```

---

## 📌 Roadmap

- [ ] Doctor-side appointment notifications
- [ ] Patient medical history tracking
- [ ] Ratings & reviews for doctors
- [ ] Deployment (Frontend/Admin on Vercel, Backend on Render, DB on MongoDB Atlas)

---

## 👤 Author

**Abdallah** — [GitHub](https://github.com/abdallluh11)

---

## 📄 License

This project is open for educational and portfolio purposes.
