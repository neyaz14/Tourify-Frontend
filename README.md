

# 🌍 Tourify Frontend

A modern, scalable **Tour Management System Frontend- Tourify** built with **React, TypeScript, Redux Toolkit, and RTK Query**.
This application provides a seamless user experience for browsing tours, booking trips, and managing travel activities.

---

## 🚀 Live Demo

👉 Add your live link here

---

## 📌 Project Overview

This frontend consumes the backend APIs to deliver a complete tour booking platform where users can:

* Browse and explore tours across Bangladesh
* Filter and search tours dynamically
* Book tours and make secure payments
* Manage bookings and user profile
* Access role-based dashboard (User/Admin)

---

## ⚙️ Tech Stack

### 🖥️ Frontend

* React
* TypeScript
* Redux Toolkit
* RTK Query
* React Router
* Tailwind CSS / ShadCN UI

### 🌐 API Communication

* RTK Query (fetchBaseQuery)
* JWT Authentication (Access + Refresh Token)

---

## 🧠 Architecture Overview

* **State Management**

  * Redux Toolkit → UI state (auth, filters, UI)
  * RTK Query → API calls, caching, mutations

* **Routing**

  * Public routes (Home, Tours, Login)
  * Protected routes (Dashboard, Booking)

* **Component Structure**

  * Reusable UI components
  * Feature-based modular structure

---

## 👥 User Roles

* **Visitor**

  * Browse tours
  * View tour details

* **User**

  * Register / Login
  * Book tours
  * View bookings

* **Admin**

  * Manage tours
  * Manage users
  * Manage bookings

---

## ✨ Core Features

### 🔐 Authentication

* Email/password login
* Google login
* OTP verification
* JWT-based session handling

### 🧳 Tour Browsing

* View all tours
* Search by keyword
* Filter by division, price
* View detailed tour information

### 📅 Booking System

* Create booking
* Select date & guest count
* View booking history

### 💳 Payment Integration

* SSLCommerz integration
* Payment status handling
* Booking confirmation after payment

### 📊 Dashboard

* Role-based dashboard (User/Admin)
* Manage bookings, tours, users
* Dynamic sidebar navigation

---

## 📁 Project Structure

```bash
src/
├── app/                # Redux store setup
├── components/         # Reusable components
├── features/           # Redux slices (auth, UI)
├── pages/              # Page components
├── routes/             # Routing configuration
├── services/           # RTK Query APIs
├── hooks/              # Custom hooks
├── utils/              # Helper functions
```

---

## 🔗 API Integration

All API calls are handled using **RTK Query**.

### Example:

```ts
getTours: builder.query({
  query: () => "/tour",
}),
```

### Key Features:

* Auto caching
* Auto refetching
* Loading & error handling
* Token-based authorization

---

## 🔄 Data Flow

```text
UI → RTK Query Hook → API Request
        ↓
   Response cached in Redux Store
        ↓
   UI automatically updates
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone <your-frontend-repo-link>
cd frontend
```

### 2️⃣ Install dependencies

```bash
pnpm install
```

### 3️⃣ Setup environment variables

Create `.env` file:

```env
VITE_API_BASE_URL=http://localhost:5000/api/v1
```

### 4️⃣ Run the project

```bash
pnpm run dev
```

---

## 🔐 Authentication Flow

1. User registers
2. OTP verification required
3. User logs in → receives JWT
4. Token stored in client (cookie/localStorage)
5. Protected routes accessible

---

## 💳 Booking & Payment Flow

1. User selects a tour
2. Creates booking (status: pending)
3. Redirect to SSLCommerz
4. Payment success → backend verifies
5. Booking status updated → UI reflects

---

## ⚡ Performance Optimizations

* Lazy loading (React.lazy)
* Code splitting
* RTK Query caching
* Optimized re-renders

---

## 🧪 Scripts

```bash
pnpm run dev       # start development
pnpm run build     # production build
pnpm run preview   # preview build
```

