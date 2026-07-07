markdown
# 🏥 MEDICARE — Hospital Management System

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-6-yellow?logo=vite)
![Node.js](https://img.shields.io/badge/Node.js-22-green?logo=nodedotjs)
![Express](https://img.shields.io/badge/Express-4.21-lightgrey?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-7-green?logo=mongodb)
![Tailwind](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss)
![Clerk](https://img.shields.io/badge/Clerk-5-6C47FF?logo=clerk)
![Stripe](https://img.shields.io/badge/Stripe-17-635BFF?logo=stripe)
![License](https://img.shields.io/badge/License-MIT-blue)

---

## 📋 Overview

**MEDICARE** is a full-stack Hospital Management System built with the MERN stack. It enables patients to book appointments with doctors, schedule medical services, and make online payments. Doctors can manage their schedules and appointments, while admins have full control over the system.

### 🎯 Problem It Solves

- ❌ Manual appointment booking → ✅ Digital booking system
- ❌ Unclear doctor availability → ✅ Real-time availability status
- ❌ Payment tracking issues → ✅ Online payment via Stripe
- ❌ Disorganized doctor/service management → ✅ Centralized admin panel

### 👥 Target Users

| User Type | Role |
|-----------|------|
| **Patients** | Browse doctors/services, book appointments, make payments, view booking history |
| **Doctors** | Login, view appointments, manage availability, update profile |
| **Admin** | Manage all doctors, services, appointments, and view analytics |

---

## 🚀 Live Demo

| Environment | URL |
|-------------|-----|
| **Frontend** | `http://localhost:5173` |
| **Admin Panel** | `http://localhost:5173` |
| **API** | `http://localhost:4000/api` |

---

## Key Highlights

- Full Stack MERN Application
- Clerk Authentication
- Stripe Payment Integration
- Cloudinary Image Management
- Doctor Appointment Booking System
- Admin Dashboard
- Responsive Design

````
## ✨ Features

### 👤 Patient Features
- Browse doctors with specialization, experience, rating, and availability
- Browse medical services (X-Ray, Blood Tests, Checkups, etc.)
- View detailed doctor profiles with schedules and fees
- Book appointments with date/time selection
- Book medical services
- Secure online payment via Stripe
- View all bookings in personal dashboard
- Cancel appointments
- Reschedule appointments

### 👨‍⚕️ Doctor Features
- Secure login with Clerk authentication
- View personal appointment list
- Update profile information
- Manage schedule and availability
- Track earnings and completed appointments

### 🛠️ Admin Features
- Doctor Management (Add, Edit, Delete, Search)
- Service Management (Add, Edit, Delete, Search)
- Appointment Management (View, Cancel, Filter)
- Dashboard Analytics:
  - Total Doctors
  - Total Appointments
  - Completed Appointments
  - Total Earnings
  - Registered Users Count
- Advanced Search & Filter (by name, specialization, status, date)

---

## 📸 Screenshots

> 📌 *Screenshots are placeholders — replace with actual screenshots.*

| Section | Screenshot |
|---------|------------|
| Home Page | ![Home](screenshots/home.png) |
| Doctors List | ![Doctors](screenshots/doctors.png) |
| Doctor Detail | ![Doctor Detail](screenshots/doctor-detail.png) |
| Appointment Booking | ![Booking](screenshots/booking.png) |
| Admin Dashboard | ![Dashboard](screenshots/dashboard.png) |
| Appointments List | ![Appointments](screenshots/appointments.png) |
| Login Page | ![Login](screenshots/login.png) |
| Service Detail | ![Service](screenshots/service.png) |

---

## 🛠️ Tech Stack

### Frontend

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19 | UI Library |
| React Router DOM | 7 | Routing |
| Vite | 6 | Build Tool |
| Tailwind CSS | 4 | Styling |
| Clerk | 5 | Authentication |
| Axios | 1.7 | HTTP Client |
| Lucide React | 0.507 | Icons |
| React Hot Toast | 2.4 | Notifications |

### Backend

| Technology | Version | Purpose |
|------------|---------|---------|
| Node.js | 22 | Runtime |
| Express.js | 4.21 | Web Framework |
| Mongoose | 8.8 | ODM |
| JSON Web Token | 9.0 | Authentication |
| Clerk Express | 1.3 | Auth Middleware |
| Stripe | 17.7 | Payment Processing |
| Cloudinary | 2.5 | Image Upload |
| Bcrypt | 5.1 | Password Hashing |
| Multer | 1.4 | File Uploads |
| CORS | 2.8 | Cross-Origin |

### Database

| Technology | Version | Purpose |
|------------|---------|---------|
| MongoDB Atlas | 7 | Primary Database |
| Mongoose Aggregation | - | Data Analytics |

---

## 🏗️ System Architecture
┌─────────────────────────────────────────────────────────────────────┐
│ │
│ ┌─────────────────┐ ┌─────────────────────────────────┐ │
│ │ Frontend │ │ Backend │ │
│ │ (React) │ │ (Node.js + Express) │ │
│ │ │ │ │ │
│ │ ┌───────────┐ │ HTTP │ ┌─────────────────────────┐ │ │
│ │ │ Pages │ │ ──────▶ │ │ Routes │ │ │
│ │ │ - Home │ │ │ │ - /doctors │ │ │
│ │ │ - Doctor │ │ ◀────── │ │ - /services │ │ │
│ │ │ - Service│ │ JSON │ │ - /appointments │ │ │
│ │ └───────────┘ │ │ └─────────────────────────┘ │ │
│ │ │ │ │ │ │ │
│ │ ┌───────────┐ │ │ ┌─────────────────────────┐ │ │
│ │ │Components │ │ │ │ Controllers │ │ │
│ │ │- Navbar │ │ │ │ - createDoctor │ │ │
│ │ │- Banner │ │ │ │ - createAppointment │ │ │
│ │ │- Footer │ │ │ │ - getDoctors │ │ │
│ │ └───────────┘ │ │ └─────────────────────────┘ │ │
│ │ │ │ │ │ │ │
│ │ ┌───────────┐ │ │ ┌─────────────────────────┐ │ │
│ │ │ Clerk │ │ │ │ Models (Mongoose) │ │ │
│ │ │ Auth │ │ │ │ - Doctor │ │ │
│ │ └───────────┘ │ │ │ - Service │ │ │
│ │ │ │ │ │ - Appointment │ │ │
│ └─────────────────┘ │ └─────────────────────────┘ │ │
│ │ │ │ │
│ │ ┌─────────────────────────┐ │ │
│ │ │ Middleware │ │ │
│ │ │ - doctorAuth (JWT) │ │ │
│ │ │ - clerkMiddleware │ │ │
│ │ └─────────────────────────┘ │ │
│ │ │ │ │
│ └─────────────────────────────────┘ │
│ │ │
│ ┌─────────▼─────────┐ │
│ │ MongoDB │ │
│ │ - doctors │ │
│ │ - services │ │
│ │ - appointments │ │
│ └───────────────────┘ │
│ │
│ ┌─────────────────┐ ┌─────────────────────────────────┐ │
│ │ Clerk (Auth) │ │ Stripe (Payment) │ │
│ └─────────────────┘ └─────────────────────────────────┘ │
│ │
│ ┌─────────────────┐ ┌─────────────────────────────────┐ │
│ │ Cloudinary │ │ GitHub (Repo) │ │
│ │ (Image Storage) │ └─────────────────────────────────┘ │
│ └─────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘

text

---

## 📊 Database Design

### ERD (Entity Relationship Diagram)
┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│ Doctors │ │ Appointments │ │ Patients │
│ │ │ │ │ │
│ _id │◄─────────│ doctorId │ │ _id │
│ name │ │ patientName │ │ name │
│ email │ │ mobile │ │ email │
│ password │ │ date │ │ mobile │
│ specialization │ │ time │ │ age │
│ fee │ │ fees │ │ gender │
│ availability │ │ status │ │ │
│ schedule │ │ payment │ │ │
│ imageUrl │ │ createdBy │ │ │
│ experience │ └─────────────────┘ └─────────────────┘
│ qualifications │ │
│ location │ │
│ about │ │
│ rating │ │
│ patients │ │
└─────────────────┘ │
│
┌─────────▼─────────┐
│ Services │
│ │
│ _id │
│ name │
│ price │
│ available │
│ instructions │
│ slots │
│ imageUrl │
└───────────────────┘
│
┌─────────▼─────────┐
│ServiceAppointments│
│ │
│ _id │
│ serviceId │
│ patientName │
│ mobile │
│ date │
│ hour/min/ampm │
│ status │
│ payment │
│ createdBy │
└───────────────────┘

text

### Collections

#### `doctors`
| Field | Type | Description |
|-------|------|-------------|
| `_id` | ObjectId | Primary Key |
| `email` | String | Unique, indexed |
| `password` | String | Hashed, select: false |
| `name` | String | Required |
| `specialization` | String | Doctor's specialty |
| `fee` | Number | Consultation fee |
| `availability` | String | "Available"/"Unavailable" |
| `schedule` | Map | `{ "2026-07-07": ["10:00 AM"] }` |
| `imageUrl` | String | Cloudinary URL |
| `imagePublicId` | String | Cloudinary ID |
| `experience` | String | Years of experience |
| `qualifications` | String | Medical qualifications |
| `location` | String | Clinic location |
| `about` | String | Doctor bio |
| `rating` | Number | Rating out of 5 |
| `patients` | String | Patient count |

#### `services`
| Field | Type | Description |
|-------|------|-------------|
| `_id` | ObjectId | Primary Key |
| `name` | String | Service name |
| `price` | Number | Service fee |
| `available` | Boolean | Is available |
| `instructions` | Array | Pre-test instructions |
| `slots` | Array | ["22 Jun 2026 • 10:30 AM"] |
| `imageUrl` | String | Cloudinary URL |

#### `appointments`
| Field | Type | Description |
|-------|------|-------------|
| `_id` | ObjectId | Primary Key |
| `doctorId` | ObjectId | Reference to Doctor |
| `patientName` | String | Patient name |
| `mobile` | String | 10-digit phone |
| `age` | Number | Patient age |
| `gender` | String | Male/Female/Other |
| `date` | String | Appointment date |
| `time` | String | Appointment time |
| `fees` | Number | Fee amount |
| `status` | String | Pending/Confirmed/Completed/Canceled |
| `payment.method` | String | Cash/Online |
| `payment.status` | String | Pending/Paid/Failed |
| `sessionId` | String | Stripe session ID |
| `createdBy` | String | Clerk User ID |
| `rescheduledTo` | Object | Reschedule details |

#### `serviceappointments`
| Field | Type | Description |
|-------|------|-------------|
| `_id` | ObjectId | Primary Key |
| `serviceId` | ObjectId | Reference to Service |
| `patientName` | String | Patient name |
| `mobile` | String | 10-digit phone |
| `date` | String | Appointment date |
| `hour` | Number | 1-12 |
| `minute` | Number | 00-59 |
| `ampm` | String | AM/PM |
| `status` | String | Pending/Confirmed/Completed/Canceled |
| `payment` | Object | Payment details |
| `createdBy` | String | Clerk User ID |

---

## 🔐 Authentication & Authorization

### Clerk Authentication Flow
┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│ User │ │ Clerk │ │ Backend │
│ (Frontend) │ │ (Auth) │ │ (Express) │
└─────────────┘ └─────────────┘ └─────────────┘
│ │ │
│ 1. Sign In │ │
│──────────────────▶│ │
│ │ │
│ 2. Return Token │ │
│◀──────────────────│ │
│ │ │
│ 3. Request + Token│ │
│────────────────────────────────────────▶│
│ │ │
│ │ 4. Verify Token │
│ │◀───────────────────│
│ │ │
│ │ 5. Token Valid │
│ │───────────────────▶│
│ │ │
│ 6. API Response │ │
│◀────────────────────────────────────────│

text

### Protected Routes

| Route | Authentication | Role |
|-------|----------------|------|
| `/api/doctors/:id` (PUT) | `doctorAuth` | Doctor only |
| `/api/doctors/:id` (DELETE) | `doctorAuth` | Doctor only |
| `/api/appointments` (POST) | `clerkMiddleware` | Logged-in user |
| `/api/appointments/me` (GET) | `clerkMiddleware` | Logged-in user |

---

## 📅 Appointment Booking Flow
┌─────────────────────────────────────────────────────────────────────────┐
│ BOOKING FLOW │
└─────────────────────────────────────────────────────────────────────────┘

┌──────────────┐
│ User visits │
│ Doctor Page │
└──────┬───────┘
│
▼
┌──────────────┐
│ Select Date │
│ & Time Slot │
└──────┬───────┘
│
▼
┌──────────────┐
│ Fill Patient │
│ Details │
└──────┬───────┘
│
▼
┌──────────────┐ ┌──────────────┐
│ Choose │────▶│ Cash │
│ Payment │ │ Booking │
└──────┬───────┘ └──────┬───────┘
│ │
▼ ▼
┌──────────────┐ ┌──────────────┐
│ Online │ │ Save to DB │
│ Payment │ │ Status: │
└──────┬───────┘ │ "Pending" │
│ └──────────────┘
▼
┌──────────────┐
│ Stripe │
│ Checkout │
└──────┬───────┘
│
▼
┌──────────────┐
│ Payment │
│ Success │
└──────┬───────┘
│
▼
┌──────────────┐
│ Confirm │
│ Payment │
│ Endpoint │
└──────┬───────┘
│
▼
┌──────────────┐
│ Update DB: │
│ Status: │
│ "Confirmed" │
└──────────────┘

text

---

## 💳 Payment Flow
┌─────────────────────────────────────────────────────────────────────────┐
│ PAYMENT FLOW │
└─────────────────────────────────────────────────────────────────────────┘

┌──────────────┐
│ User books │
│ appointment │
└──────┬───────┘
│
▼
┌──────────────┐
│ Frontend │
│ POST /api/ │
│ appointments│
└──────┬───────┘
│
▼
┌──────────────┐
│ Backend │
│ createAppt │
└──────┬───────┘
│
▼
┌──────────────┐
│ Stripe │
│ Create │
│ Checkout │
│ Session │
└──────┬───────┘
│
▼
┌──────────────┐
│ Return │
│ checkoutUrl │
└──────┬───────┘
│
▼
┌──────────────┐
│ Redirect │
│ to Stripe │
└──────┬───────┘
│
▼
┌──────────────┐
│ User pays │
└──────┬───────┘
│
▼
┌──────────────┐
│ Stripe │
│ Redirects │
│ to /success │
└──────┬───────┘
│
▼
┌──────────────┐
│ Frontend │
│ Verify │
│ Payment │
│ Page │
└──────┬───────┘
│
▼
┌──────────────┐
│ Backend │
│ GET /confirm│
│ ?session_id │
└──────┬───────┘
│
▼
┌──────────────┐
│ Update DB: │
│ status: │
│ "Confirmed" │
└──────────────┘

text

---

## 📁 Folder Structure
MEDICARE/
│
├── backend/
│ ├── config/
│ │ └── db.js # MongoDB connection
│ ├── models/
│ │ ├── Doctor.js # Doctor schema
│ │ ├── Service.js # Service schema
│ │ ├── Appointment.js # Appointment schema
│ │ └── ServiceAppointment.js # Service appointment schema
│ ├── controllers/
│ │ ├── doctorController.js # Doctor CRUD + login
│ │ ├── serviceController.js # Service CRUD
│ │ └── appointmentController.js # Appointment CRUD + payment
│ ├── routes/
│ │ ├── doctorRouter.js # Doctor routes
│ │ ├── serviceRouter.js # Service routes
│ │ └── appointmentRouter.js # Appointment routes
│ ├── middleware/
│ │ └── doctorAuth.js # JWT authentication middleware
│ ├── utils/
│ │ └── cloudinary.js # Cloudinary upload/delete
│ ├── server.js # Entry point
│ ├── package.json
│ └── .env
│
└── admin/ (Frontend)
├── src/
│ ├── pages/
│ │ ├── Home.jsx # Landing page
│ │ ├── Doctors.jsx # Doctor list
│ │ ├── DoctorDetail.jsx # Doctor details + booking
│ │ ├── Service.jsx # Service list
│ │ ├── ServiceDetailPage.jsx# Service details + booking
│ │ ├── Appointments.jsx # User appointments
│ │ ├── Contact.jsx # Contact page
│ │ ├── Login.jsx # Doctor login
│ │ └── VerifyPaymentPage.jsx# Payment confirmation
│ ├── components/
│ │ ├── Navbar.jsx # Navigation
│ │ ├── Banner.jsx # Hero banner
│ │ ├── Certification.jsx # Certifications
│ │ ├── HomeDoctors.jsx # Doctors on home page
│ │ ├── Testimonial.jsx # Testimonials
│ │ └── Footer.jsx # Footer
│ ├── doctor/
│ │ ├── DHome.jsx # Doctor dashboard
│ │ ├── List.jsx # Doctor appointments list
│ │ └── EditProfile.jsx # Edit doctor profile
│ ├── assets/
│ │ ├── dummyStyles.js # Tailwind styles
│ │ └── images/ # Static images
│ ├── App.jsx # Main component + routing
│ ├── main.jsx # Entry point
│ └── index.css # Global styles
├── package.json
└── .env

text

---

## 📡 API Documentation

### 🏥 Doctors API

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/api/doctors` | ❌ | Get all doctors |
| GET | `/api/doctors/:id` | ❌ | Get single doctor |
| POST | `/api/doctors` | ❌ | Create doctor (image upload) |
| POST | `/api/doctors/login` | ❌ | Doctor login |
| PUT | `/api/doctors/:id` | ✅ `doctorAuth` | Update doctor |
| DELETE | `/api/doctors/:id` | ✅ `doctorAuth` | Delete doctor |
| PATCH | `/api/doctors/:id/availability` | ✅ `doctorAuth` | Toggle availability |

### 💼 Services API

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/api/services` | ❌ | Get all services |
| GET | `/api/services/:id` | ❌ | Get single service |
| POST | `/api/services` | ❌ | Create service (image upload) |
| PUT | `/api/services/:id` | ✅ `doctorAuth` | Update service |
| DELETE | `/api/services/:id` | ✅ `doctorAuth` | Delete service |

### 📅 Appointments API

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/api/appointments/me` | ✅ `clerkMiddleware` | Get user appointments |
| GET | `/api/appointments/doctor/:id` | ❌ | Get doctor appointments |
| POST | `/api/appointments` | ✅ `clerkMiddleware` | Create appointment |
| POST | `/api/appointments/:id/cancel` | ✅ `clerkMiddleware` | Cancel appointment |
| GET | `/api/appointments/confirm` | ❌ | Confirm payment |
| PUT | `/api/appointments/:id` | ✅ `clerkMiddleware` | Update appointment |

### 📊 Statistics API

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/api/appointments/patients/count` | ❌ | Get patient count |
| GET | `/api/service-appointments/stats/summary` | ❌ | Service statistics |

---

## 🔧 Environment Variables

### Backend `.env`

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port | `4000` |
| `MONGO_URI` | MongoDB connection string | `mongodb+srv://user:pass@cluster.mongodb.net/db` |
| `JWT_SECRET` | JWT signing key | `your_super_secret_key` |
| `CLERK_SECRET_KEY` | Clerk secret key | `sk_test_xxxxx` |
| `STRIPE_SECRET_KEY` | Stripe secret key | `sk_test_xxxxx` |
| `FRONTEND_URL` | Frontend URL | `http://localhost:5173` |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name | `your_cloud_name` |
| `CLOUDINARY_API_KEY` | Cloudinary API key | `1234567890` |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret | `your_api_secret` |

### Frontend `.env`

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_CLERK_PUBLISHABLE_KEY` | Clerk publishable key | `pk_test_xxxxx` |

---

## 🚀 Installation Guide

### Prerequisites

- Node.js (v22+)
- MongoDB Atlas account
- Clerk account
- Stripe account
- Cloudinary account

### Backend Setup

```bash
# Clone repository
git clone https://github.com/yourusername/medicare.git
cd medicare/backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env
# Edit .env with your credentials

# Start development server
npm run dev
Frontend Setup
bash
cd admin

# Install dependencies
npm install

# Create .env file
echo "VITE_CLERK_PUBLISHABLE_KEY=pk_test_xxxxx" > .env

# Start development server
npm run dev
🚢 Deployment Guide
Backend Deployment (Render/Heroku)
bash
# Add these environment variables in your hosting provider
MONGO_URI
JWT_SECRET
CLERK_SECRET_KEY
STRIPE_SECRET_KEY
FRONTEND_URL
CLOUDINARY_CLOUD_NAME
CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET

# Deploy
git push origin main
Frontend Deployment (Vercel/Netlify)
bash
# Build
npm run build

# Deploy
# Upload dist folder to Vercel/Netlify

# Environment variables
VITE_CLERK_PUBLISHABLE_KEY=pk_test_xxxxx
🔒 Security Features
✅ Clerk Authentication: Secure user management

✅ JWT Tokens: Stateless authentication for APIs

✅ Password Hashing: Bcrypt for password storage

✅ Protected Routes: doctorAuth middleware

✅ CORS Configuration: Restrict allowed origins

✅ Input Validation: Schema-level validation

✅ Duplicate Prevention: No duplicate appointments

✅ Environment Variables: Secrets kept out of code

✅ Error Handling: No sensitive data in error responses

✅ Role-Based Access: Doctor/Admin separation

⚡ Performance Optimizations
✅ React.memo: Component memoization

✅ useMemo: Computed values caching

✅ useCallback: Function memoization

✅ Lazy Loading: Images and components

✅ MongoDB Indexes: Optimized queries

✅ Debounced Search: Reduces API calls

✅ Skeleton Loading: Prevents layout shifts

✅ Responsive Images: srcSet for different screens

🧩 Challenges Solved
Challenge	Solution
Duplicate Appointments	Check for existing booking before creation
Payment Verification	Stripe webhook + session verification
Real-time Availability	Doctor can toggle availability instantly
Image Upload	Cloudinary integration with multer
Aggregation Analytics	MongoDB aggregation pipeline for stats
Responsive UI	Tailwind CSS responsive design
Authentication Flow	Clerk + JWT hybrid approach
Error Handling	Centralized error handling with toasts
📖 Lessons Learned
Authentication is complex: Using Clerk simplified user management significantly.

Payment integration requires careful testing: Stripe test mode is essential.

Data normalization matters: Consistent field names prevent bugs.

Error handling saves time: Good error messages speed up debugging.

Responsive design is non-negotiable: Users access from all devices.

API versioning helps: Future-proof endpoints.

Code organization pays off: Separation of concerns makes maintenance easier.

🚀 Future Improvements
🔐 Email Notifications: Send appointment reminders

📱 Mobile App: React Native version

📊 Advanced Analytics: Charts and reports

🗣️ Telemedicine: Video consultation integration

💬 Chat: Patient-doctor messaging

📅 Calendar Sync: Google Calendar integration

🌍 Multi-language: i18n support

🧪 Testing: Unit and integration tests (Jest)

🐳 Docker: Containerization

🔄 CI/CD: GitHub Actions automated deployment

📈 Monitoring: Performance tracking

## Recruiter Notes

This project demonstrates:

- REST API Development
- MongoDB Data Modeling
- Authentication & Authorization
- Stripe Payment Integration
- Cloudinary Media Management
- Frontend State Management
- Full Stack Architecture Design

👤 Author
Abdullah Elsawy

Full Stack Developer passionate about building scalable web applications with modern technologies.

GitHub: @AbdullahElsawy

LinkedIn: Abdullah Elsawy

Email: elsawyabdullah@gmail.com

📄 License
MIT © 2026 Abdullah Elsawy

⭐ Support
If you find this project useful, please give it a ⭐ on GitHub!

Built with ❤️ using the MERN Stack
