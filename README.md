<div align="center">

# 🎓 VectraLern – Online Learning Platform

### A modern, fully-responsive e-learning ecosystem built with Next.js. Explore skill-based courses, manage interactive profiles, securely purchase courses, and track your learning journey through specialized dashboards.

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-0F172A?style=for-the-badge&logo=tailwind-css&logoColor=38B2AC)
![HeroUI](https://img.shields.io/badge/HeroUI-000000?style=for-the-badge&logo=vercel&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-001E2B?style=for-the-badge&logo=mongodb&logoColor=4DB33D)
![BetterAuth](https://img.shields.io/badge/BetterAuth-121212?style=for-the-badge&logo=auth0&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Motion-000000?style=for-the-badge&logo=framer&logoColor=white)

<br/>

<a href="https://skill-sphere-ecru-ten.vercel.app/" target="_blank">
  <strong>🌐 Live Demo</strong>
</a>
•
<a href="https://github.com/toufiqweb/vectraLearn" target="_blank">
  <strong>💻 GitHub Repo</strong>
</a>

</div>

---

## 🎯 Project Purpose

VectraLern empowers learners and educators by providing a centralized hub for modern education. The platform prioritizes user experience with a polished interface, seamless and secure authentication, role-based dashboards, and protected payment routes—ensuring a reliable and scalable environment for online courses.

## ✨ Main Features

- **Robust Authentication**: Secure login and registration using BetterAuth (Email & Google).
- **Role-Based Access Control (RBAC)**: Distinct dashboards and permissions for Students, Instructors, and Admins.
- **Course Marketplace**: Dynamic course listings, advanced search filtering, and detailed course pages.
- **Secure Payments**: Fully integrated Stripe checkout for purchasing courses.
- **Interactive Dashboards**:
  - _Students_: My Learning, Wishlist, and Profile management.
  - _Instructors/Admins_: Course creation, content management, and analytics.
- **Community Engagement**: Leave ratings and reviews on purchased courses.
- **Image Hosting**: Integrated with ImgBB for seamless avatar and cover photo uploads.
- **Responsive & Animated UI**: Designed mobile-first with Tailwind CSS, HeroUI, and Framer Motion.

## 🛠 Tech Stack

### Frontend & Core

- **Framework**: [Next.js (App Router)](https://nextjs.org/)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & [HeroUI](https://heroui.com/)
- **Animations**: [Framer Motion](https://motion.dev/) & [Lottie React](https://lottiereact.com/)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)

### Backend & Integrations

- **Authentication**: [BetterAuth](https://better-auth.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) (with Native Driver/Mongoose)
- **Payments**: [Stripe](https://stripe.com/)
- **Image Hosting**: [ImgBB API](https://api.imgbb.com/)

---

## 🚀 Installation & Setup

Follow these steps to run the client application locally.

### Prerequisites

- Node.js (v18 or higher recommended)
- npm, yarn, or pnpm
- A MongoDB cluster
- Stripe and ImgBB developer accounts

### 1. Clone the Repository

```bash
git clone https://github.com/toufiqweb/skill-sphere.git
cd skill-sphere/vectraLearn-client # Or your specific client folder name
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env` file in the root of your client directory and add the following configuration. **Do not expose your actual secrets in public repositories.**

```env
# Authentication (BetterAuth)
BETTER_AUTH_SECRET=your_super_secret_string_here
BETTER_AUTH_URL=http://localhost:3000

# Database
MONGO_URI=mongodb+srv://<username>:<password>@cluster0...
DB_NAME=skill-sphere

# Google OAuth (Optional, for Google Login)
GOOGLE_CLIENT_ID=your_google_client_id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your_google_client_secret

# External APIs
NEXT_PUBLIC_IMGBB_API_KEY=your_imgbb_api_key
NEXT_PUBLIC_BASE_URL=http://localhost:5000 # Your Express backend URL if applicable

# Admin Privileges
NEXT_PUBLIC_SUPER_ADMIN_EMAIL=admin@example.com

# Stripe Payments
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key
STRIPE_SECRET_KEY=sk_test_your_secret_key
# STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret (Optional for webhooks)
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📜 Available Scripts

- `npm run dev` - Starts the Next.js development server.
- `npm run build` - Builds the application for production.
- `npm run start` - Starts the production server (after building).
- `npm run lint` - Runs ESLint to check for code quality issues.

---

## 📁 Project Structure

```bash
src/
├── app/                  # Next.js App Router (Pages, Layouts, API Routes)
│   ├── (main)/           # Public-facing routes (Home, Courses, Course Details)
│   ├── dashboard/        # Protected role-based dashboards
│   ├── api/              # Next.js Serverless API endpoints
│   ├── signin/ & signup/ # Auth pages
│   └── globals.css       # Global styles & Tailwind directives
│
├── components/           # Reusable UI Components
│   ├── ui/               # Buttons, Modals, Cards, Forms
│   └── layout/           # Navbar, Footer, Sidebar
│
├── lib/                  # Utilities, Actions, and Configurations
│   ├── actions/          # Next.js Server Actions (Auth, Wishlist, etc.)
│   ├── api/              # API Client fetchers (Data fetching logic)
│   └── core/             # Core setups (DB connection, auth configs)
│
├── assets/               # Static images, SVGs, and Lottie JSON files
└── proxy.js              # Reverse proxy configuration (if applicable)
```

---

## 🔐 Core Modules

### Authentication (BetterAuth)

VectraLern utilizes **BetterAuth** coupled with a **MongoDB adapter** for a seamless, secure login experience. It supports credential (email/password) and OAuth (Google) providers. Sessions are handled securely, guarding protected routes (like the Dashboard) from unauthorized access.

### Payments (Stripe)

Course enrollments are processed via **Stripe**. When a user opts to buy a course, a server action generates a Stripe Checkout Session. Upon successful payment, the transaction and enrollment records are securely updated in the database.

### Role-Based Architecture

The platform dynamically renders navigation and dashboard modules based on the user's role (`student`, `instructor`, `admin`), utilizing Server Actions to verify permissions at the server level before returning sensitive data.

---

## 🌍 Deployment

This project is optimized for deployment on [Vercel](https://vercel.com).

1. Push your code to a GitHub repository.
2. Log in to Vercel and click **Add New Project**.
3. Import your GitHub repository.
4. Add all your Environment Variables in the Vercel dashboard.
5. Click **Deploy**.

_Ensure that your `BETTER_AUTH_URL` matches your production domain (e.g., `https://your-domain.vercel.app`)._

---

<div align="center">
  <p>Designed and Developed with ❤️ by <strong>Taj Ahmed</strong></p>
</div>
