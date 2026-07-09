# MEDICARE 🏥

<img width="1910" height="942" alt="{70A2C44C-BC48-49ED-A6CF-726B158E2B8A}" src="https://github.com/user-attachments/assets/77bffa88-8204-495e-bfaa-097633c15a81" />
<img width="1719" height="941" alt="{A912704D-8ECA-4B52-B33D-983D0234F4EA}" src="https://github.com/user-attachments/assets/a12f387e-45f2-478b-9687-ebeac3b40b13" />

<img width="333" height="867" alt="{2DFBD849-037C-4C97-B80F-E4A5981E95D3}" src="https://github.com/user-attachments/assets/fad03e80-4d56-4a34-b518-6e8a8e17152b" />

![Uploading {1226F602-7F5E-4E36-95F9-40A61BFA8AFB}.png…]()

  
<img width="1849" height="906" alt="{81FFE810-BE9E-4302-BA0A-8D8E19395338}" src="https://github.com/user-attachments/assets/fd705bb0-830c-4671-97c3-3bda23747a5b" />
<img width="1811" height="856" alt="{E456A852-8434-4126-BBB6-19262BAF2DBB}" src="https://github.com/user-attachments/assets/ea783b68-949a-4c2d-93c7-0576f6829389" />
<img width="1439" height="944" alt="{77BE3065-86E3-477A-89A2-A9FF340CF839}" src="https://github.com/user-attachments/assets/b58ea2a1-4867-4759-9523-8958338cfda9" />
<img width="1720" height="940" alt="{AF62235C-8322-4EDE-8DEF-223312C76516}" src="https://github.com/user-attachments/assets/d1a978ca-a6ec-4888-a6fb-a072504e6b81" />



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
