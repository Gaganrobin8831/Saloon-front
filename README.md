# 💇‍♀️ Glamour Saloon — Full Stack Booking & E-Commerce Platform

A modern, full-featured **Saloon Management Web Application** that lets customers book beauty services online, shop for salon products, manage their profile, and track all their orders — while giving admins complete control over the business through a dedicated admin panel.

---

## 🌟 Live Screenshots

### 🏠 Home Page
![Home Page](<Screenshot from 2026-04-28 23-46-06.png>)

### 💆 Services
![Services Page](<Screenshot from 2026-04-28 23-47-07.png>)

### 🛍️ Products Shop
![Products Page](<Screenshot from 2026-04-28 23-47-43.png>)

### 📅 My Bookings (Cancel & Delete)
![My Bookings](<Screenshot from 2026-04-28 23-48-38.png>)

### 👤 User Profile
![User Profile](<Screenshot from 2026-04-28 23-49-27.png>)

### 🔐 Admin Panel
![Admin Panel](<Screenshot from 2026-04-28 23-49-37.png>)

---

## 📌 About This Project

**Glamour Saloon** is a complete full-stack web application built for a professional beauty salon. It allows customers to:

- Browse and book salon **services** (haircut, facial, bridal, spa, etc.)
- Shop for salon **products** with a cart & checkout system
- View, **cancel**, and **delete** their bookings
- Get a **refund notice** automatically when a booking is cancelled
- Manage their personal **profile**
- Submit **feedback** and reviews

Admins get a powerful dashboard to manage:

- All **users**, **services**, **products**, **orders**, **payments**, and **feedback**
- Add / update / delete services and products from a dedicated admin CRUD interface

---

## ✨ Features

### 👥 User Side
| Feature | Description |
|---|---|
| 🔐 Register / Login | Secure authentication stored via localStorage token |
| 🏠 Hero Home Page | Attractive landing page with slider banners |
| 💆 Browse Services | View all saloon services with category filtering |
| 📅 Book Appointment | Fill a form to book any service with date, time & phone |
| 🛍️ Browse Products | Shop salon products with detail view |
| 🛒 Cart & Checkout | Add products to cart and proceed to checkout |
| 📦 My Orders | View product orders and service bookings in one place |
| ✖️ Cancel Booking | Cancel any active service booking with one click |
| 🗑️ Delete Booking | Remove cancelled bookings permanently |
| 💰 Refund Notice | Auto-displayed message after cancellation: *"Your payment will be refunded soon"* |
| 👤 Profile | View and manage personal profile details |
| 💬 Feedback | Submit reviews and feedback for services |
| 📞 Contact | Contact form for queries and support |
| ℹ️ About | Information page about the salon |

### 🔧 Admin Side
| Panel | Description |
|---|---|
| 👥 Users | View and manage all registered users |
| 💆 Services | Add, edit, delete salon services |
| 🛍️ Products | Add, edit, delete salon products |
| 📦 Orders | View all service bookings (booked / waiting / cancelled) |
| 💳 Payments | View all product payment records |
| 💬 Feedback | View all customer feedback and reviews |

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| **React 19** | UI Framework |
| **Vite** | Lightning-fast build tool & dev server |
| **React Router DOM v7** | Client-side routing & navigation |
| **Axios** | HTTP requests to the backend API |
| **React Icons** | Icon library |
| **Lucide React** | Additional modern icons |
| **React Toastify** | Toast notifications |
| **React Use Cart** | Cart state management |
| **Swiper.js** | Touch slider / carousel for banners |
| **Vanilla CSS** | Custom styling with gradients & animations |

### Backend
| Technology | Purpose |
|---|---|
| **Node.js** | Runtime environment |
| **Express.js v5** | REST API framework |
| **MongoDB** | NoSQL database |
| **Mongoose** | ODM for MongoDB schema & queries |
| **CORS** | Cross-origin request support |
| **Nodemon** | Auto-restart during development |

---

## 📁 Project Structure

```
saloon2/
├── saloon-frontend/          # React + Vite frontend
│   ├── src/
│   │   ├── components/       # Navbar, AdminNav, Context
│   │   └── pages/
│   │       ├── userPanel/    # All user-facing pages
│   │       │   ├── Home/
│   │       │   ├── Services/
│   │       │   ├── ServiceDetail/
│   │       │   ├── BookAppointment/
│   │       │   ├── Products/
│   │       │   ├── ProductDetail/
│   │       │   ├── Cart/
│   │       │   ├── Checkout/
│   │       │   ├── Orders/         ← Cancel & Delete booking here
│   │       │   ├── Profile/
│   │       │   ├── Feedback/
│   │       │   ├── About/
│   │       │   ├── Contact/
│   │       │   ├── Register/
│   │       │   └── login/
│   │       └── AdminPanel/   # All admin-facing pages
│   │           ├── adminuser.jsx
│   │           ├── adminservice.jsx
│   │           ├── adminproduct.jsx
│   │           ├── adminorder.jsx
│   │           ├── adminpayment.jsx
│   │           ├── adminfeedback.jsx
│   │           ├── Service/        ← Add/Edit services
│   │           └── Product/        ← Add/Edit products
│   └── package.json
│
└── backend/                  # Node.js + Express backend
    ├── index.js              # Server entry point
    └── src/
        ├── Models/           # Mongoose schemas
        │   ├── userModel.js
        │   ├── orderModel.js
        │   ├── serviceModel.js
        │   ├── productModel.js
        │   ├── paymentModel.js
        │   └── feedbackModel.js
        ├── Controller/       # Business logic
        │   ├── userController.js
        │   ├── orderController.js
        │   ├── serviceController.js
        │   ├── productController.js
        │   ├── paymentController.js
        │   └── feedbackController.js
        ├── Routes/           # Express routers
        │   ├── userRouter.js
        │   ├── orderrouter.js
        │   ├── servicerouter.js
        │   ├── productrouter.js
        │   ├── paymentrouter.js
        │   └── feedbackrouter.js
        └── DB/               # MongoDB connection
```

---

## 🔗 API Endpoints

### Orders (`/order`)
| Method | Endpoint | Description |
|---|---|---|
| POST | `/` | Create a new booking |
| GET | `/orders` | Get all orders (Admin) |
| GET | `/one/:id` | Get a single order |
| GET | `/GetUserOrders/:id` | Get all bookings of a user |
| PUT | `/update/:id` | Update order details |
| PUT | `/cancel/:id` | **Cancel a booking** |
| DELETE | `/del/:id` | **Delete a booking** |

### Users (`/user`)
| Method | Endpoint | Description |
|---|---|---|
| POST | `/register` | Register new user |
| POST | `/login` | Login user |
| GET | `/` | Get all users (Admin) |

### Services (`/service`)
| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Get all services |
| POST | `/` | Create service (Admin) |
| PUT | `/:id` | Update service (Admin) |
| DELETE | `/:id` | Delete service (Admin) |

### Products (`/product`)
| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Get all products |
| POST | `/` | Create product (Admin) |
| PUT | `/:id` | Update product (Admin) |
| DELETE | `/:id` | Delete product (Admin) |

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** v18+
- **MongoDB** (local or MongoDB Atlas)
- **npm**

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Gaganrobin8831/sloon-Backend.git
cd saloon2
```

### 2️⃣ Setup Backend
```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` folder:
```env
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

Start the backend server:
```bash
npm run dev
```
> Backend runs on **http://localhost:3000**

### 3️⃣ Setup Frontend
```bash
cd ../saloon-frontend
npm install
npm run dev
```
> Frontend runs on **http://localhost:5173**

---

## 📦 Order Status Flow

```
booked  ──→  waiting  ──→  cancelled
                               ↓
                         (Delete available)
                         💰 Refund Notice shown
```

When a user **cancels** a booking:
- Status changes to `cancelled` (shown with a **red badge**)
- A **yellow refund notice** appears: *"Your payment will be refunded soon. Thank you for your patience!"*
- A **Delete** button replaces the Cancel button to allow permanent removal

---

## 👨‍💻 Author

**Gagandeep Robin**
- GitHub: [@Gaganrobin8831](https://github.com/Gaganrobin8831)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).# Saloon-front
