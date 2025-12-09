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
- MongoDB (optional, for backend)

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:3000`

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

The backend API will be available at `http://localhost:5000`

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
- ✅ Responsive Navbar with mobile drawer
- ✅ Footer with quick links
- ✅ Global theme and styling system
- ✅ Placeholder pages for future features

### Planned Features

- 🔲 User Authentication (Login/Signup)
- 🔲 Protected Routes
- 🔲 Explore Page with categories (Food, Parks, Culture, etc.)
- 🔲 Top Spots showcase
- 🔲 Visual Gallery
- 🔲 Contact & Support form

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

This project is part of a university course assignment.

---

© 2025 CitySphere. All rights reserved.
