<div align="center">

# 🎓 VectraLern

<!-- Placeholder Badges -->

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?style=for-the-badge)
![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg?style=for-the-badge)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)

### A modern, fully-responsive e-learning ecosystem built with Next.js. Explore skill-based courses, manage interactive profiles, securely purchase courses, and track your learning journey through specialized dashboards.

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-0F172A?style=for-the-badge&logo=tailwind-css&logoColor=38B2AC)
![HeroUI](https://img.shields.io/badge/HeroUI-000000?style=for-the-badge&logo=vercel&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-001E2B?style=for-the-badge&logo=mongodb&logoColor=4DB33D)
![BetterAuth](https://img.shields.io/badge/BetterAuth-121212?style=for-the-badge&logo=auth0&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white)

<br/>

<a href="https://vectralern.vercel.app" target="_blank"><strong>🌐 Live Demo</strong></a> • <a href="https://github.com/toufiqweb/vectraLearn" target="_blank"><strong>💻 GitHub Repo</strong></a>

</div>

---

## 📑 Table of Contents

- [Brief Description](#-brief-description)
- [Mockup](#-mockup)
- [Tech Stack](#-tech-stack)
- [Key Features](#-key-features)
- [Prerequisites](#-prerequisites)
- [Installation Steps](#-installation-steps)
- [Usage](#-usage)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 Brief Description

VectraLern empowers learners and educators by providing a centralized hub for modern education. The platform solves the problem of disjointed e-learning experiences by combining a polished interface, seamless and secure authentication, role-based dashboards, and protected payment routes into one reliable and scalable environment.

## 🖼 Mockup

![VectraLern Mockup](https://i.ibb.co.com/MD0RBd2Q/Screenshot-2026-06-30-222142.png)

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Library**: React 19
- **Styling**: Tailwind CSS v4, HeroUI
- **Database**: MongoDB (with Native Driver/Mongoose)
- **Authentication**: BetterAuth
- **Payments**: Stripe Checkout Integration
- **Animations**: Framer Motion, Lottie React
- **Icons**: Lucide React, React Icons

## ✨ Key Features

1. **Robust Authentication & RBAC**: Secure login (Email & Google) with distinct role-based dashboards for Students, Instructors, and Admins.
2. **Course Marketplace**: Dynamic course listings, advanced search filtering, and detailed, interactive course pages.
3. **Secure Payments**: Fully integrated Stripe checkout for seamless and secure course purchasing.
4. **Interactive Dashboards**: Comprehensive management portals for tracking "My Learning", wishlists, profile updates, and course analytics.

## 📦 Prerequisites

Before you begin, ensure you have the following installed and configured:

- **Node.js**: v18.x or higher
- **Package Manager**: `npm`, `yarn`, or `pnpm`
- **MongoDB**: A running local instance or an active MongoDB Atlas cluster
- **Stripe Account**: A developer account for retrieving publishable/secret testing keys
- **ImgBB Account**: API key for image hosting

## 🚀 Installation Steps

Follow these steps to run the client application locally.

**1. Clone the repository:**

```bash
git clone https://github.com/toufiqweb/vectraLearn.git
cd vectraLearn/vectraLearn-client
```

**2. Install dependencies:**

```bash
npm install
```

**3. Set up Environment Variables:**
Create a `.env` file in the root of your `vectraLearn-client` directory. Use the following template, replacing placeholders with your actual keys.

```env
# Authentication (BetterAuth)
BETTER_AUTH_SECRET=your_super_secret_string_here
BETTER_AUTH_URL=http://localhost:3000

# Database
MONGO_URI=mongodb+srv://<username>:<password>@cluster0...
DB_NAME=vectraLearn

# Google OAuth (Optional)
GOOGLE_CLIENT_ID=your_google_client_id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your_google_client_secret

# External APIs
NEXT_PUBLIC_IMGBB_API_KEY=your_imgbb_api_key
NEXT_PUBLIC_BASE_URL=http://localhost:5000

# Stripe Payments
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key
STRIPE_SECRET_KEY=sk_test_your_secret_key
```

**4. Run the development server:**

```bash
npm run dev
```

## 💻 Usage

Once the development server is running, open [http://localhost:3000](http://localhost:3000) in your browser.

**Quick Test Flow:**

1. Click **"Sign In"** in the top navigation.
2. Create a new account using the mock credentials or Google OAuth.
3. Navigate to the **Courses** page to browse available material.
4. Select a course and click **"Enroll Now"** to test the Stripe checkout flow (use Stripe's standard test card: `4242 4242 4242 4242`).

## 🤝 Contributing

We welcome contributions to VectraLern! If you'd like to help make this project better, please follow these standard guidelines:

1. **Fork the Project:** Create your own fork of the repository.
2. **Create a Feature Branch:**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your Changes:**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the Branch:**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request:** Submit your PR against the `main` branch with a detailed description of your changes.

Please ensure your code passes standard linting (`npm run lint`) before submitting.

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

<div align="center">
  <p>Designed and Developed with by <strong>Toufiq Alahe</strong></p>
</div>
