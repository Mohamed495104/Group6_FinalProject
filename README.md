# CitySphere - City Exploration Platform

**"Step into the city — explore more than just maps."**

CitySphere is a modern, mobile-first city exploration web application designed to provide an immersive and user-friendly experience for travelers, students, and residents who want to discover top attractions, explore themed categories, browse visual galleries, and access support.

## 🎯 Project Overview

- **Project Type**: Single Page Application (SPA)
- **Frontend**: Next.js 14+ (React + TypeScript), Material UI
- **Backend**: Node.js, Express, MongoDB (minimal API)
- **Authentication**: Firebase Authentication
- **Team Size**: 4 Members

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- MongoDB (local installation or MongoDB Atlas account)
- Firebase project (for authentication)

### Step 1: Clone the Repository

```bash
git clone <repository-url>
cd Group6_FinalProject
```

### Step 2: Firebase Setup

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable **Email/Password** authentication in Firebase Authentication
3. Go to Project Settings → General → Your apps
4. Copy your Firebase configuration values

### Step 3: Environment Configuration

#### Frontend Environment Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Create `.env.local` from the example file:
```bash
cp .env.local.example .env.local
```

3. Edit `.env.local` and fill in your Firebase credentials:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_actual_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_actual_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_actual_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_actual_app_id
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

#### Backend Environment Setup

1. Navigate to the backend directory:
```bash
cd ../backend
```

2. Create `.env` from the example file:
```bash
cp .env.example .env
```

3. Edit `.env` and configure your MongoDB connection:
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/citysphere
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/citysphere
```

### Step 4: Install Dependencies

#### Install Frontend Dependencies
```bash
cd frontend
npm install
```

#### Install Backend Dependencies
```bash
cd ../backend
npm install
```

### Step 5: Run the Application

#### Start the Backend Server
```bash
cd backend
npm run dev
```
The backend API will be available at `http://localhost:5000`

#### Start the Frontend Server (in a new terminal)
```bash
cd frontend
npm run dev
```
The frontend will be available at `http://localhost:3000

## 📁 Project Structure

```
citysphere/
├── frontend/           # Next.js React application
│   ├── src/
│   │   ├── app/       # Next.js pages & routes
│   │   ├── components/ # Reusable UI components
│   │   ├── theme/     # MUI theme configuration
│   │   ├── context/   # React contexts
│   │   └── services/  # API & Firebase services
│   └── public/        # Static assets
│
└── backend/           # Express API server
    └── src/
        ├── config/    # Database configuration
        ├── models/    # MongoDB models
        ├── routes/    # API routes
        ├── controllers/ # Route handlers
        └── middleware/ # Custom middleware
```

## 🎨 Design System

### Theme Colors

- **Primary**: `#1A73E8` (City Blue)
- **Secondary**: `#FF7043` (Sunset Orange)
- **Background**: `#F8F9FA` (Light Gray)
- **Text Primary**: `#1E1E1E`
- **Text Secondary**: `#4A4A4A`

### Typography

- **Font Family**: Inter, Roboto, sans-serif
- **Responsive**: Mobile-first design
- **Components**: Clean, modern MUI components

## 🔑 Key Features

### Current Implementation

- ✅ Landing Page with modern gradient hero section
- ✅ Responsive Navbar with mobile drawer and authentication state
- ✅ Footer with quick links
- ✅ Global theme and styling system
- ✅ **Firebase Authentication (Login/Signup)**
- ✅ **Protected Routes for authenticated users**
- ✅ **Public Explore page with limited guest access**
- ✅ **User profile management with MongoDB**
- ✅ AuthContext for global authentication state

### Authentication Features

- 🔐 Email/Password authentication via Firebase
- 🔐 User registration with name, email, and password
- 🔐 Secure login with password visibility toggle
- 🔐 User data stored in MongoDB (Firebase UID, email, name)
- 🔐 Protected routes redirect to login if not authenticated
- 🔐 Public explore page with sign-in prompts for locked features
- 🔐 User avatar and logout in navbar when authenticated

### Planned Features

- 🔲 Explore Page with full category functionality (Food, Parks, Culture, etc.)
- 🔲 Top Spots showcase
- 🔲 Visual Gallery
- 🔲 Contact & Support form with backend integration

## 🛠 Available Scripts

### Frontend

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Backend

- `npm run dev` - Start development server with auto-reload
- `npm run build` - Compile TypeScript
- `npm run start` - Start production server

## 📝 License

This project is part of a college assignment.

---

© 2025 CitySphere. All rights reserved.
