import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { CourseProvider } from "@/lib/context/CourseProvider";
import { WishlistProvider } from "@/lib/context/WishlistProvider";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
});

export const metadata = {
  metadataBase: new URL(process.env.ALLOWED_ORIGIN || "http://localhost:3000"),
  title: {
    default: "VectraLern - Online Learning Platform",
    template: "%s | VectraLern",
  },
  description:
    "VectraLern is a modern online learning platform to explore courses, improve skills, and grow your career. Discover expert-led courses across various domains.",
  keywords: [
    "online learning",
    "courses",
    "skills",
    "education",
    "VectraLern",
    "e-learning",
    "career growth",
    "professional development"
  ],
  authors: [{ name: "Taj Ahmed" }, { name: "VectraLern Team" }],
  creator: "VectraLern",
  publisher: "VectraLern",
  openGraph: {
    title: "VectraLern - Master New Skills",
    description: "Explore top-tier courses, improve your skills, and grow your career with VectraLern's interactive online learning platform.",
    url: "/",
    siteName: "VectraLern",
    images: [
      {
        url: "https://i.ibb.co.com/pBCGPtdR/skill-Sphere-Mockupe.png",
        width: 1200,
        height: 630,
        alt: "VectraLern Platform Mockup",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VectraLern - Online Learning Platform",
    description: "Explore top-tier courses, improve your skills, and grow your career with VectraLern.",
    images: ["https://i.ibb.co.com/pBCGPtdR/skill-Sphere-Mockupe.png"],
    creator: "@vectralern",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f7f9" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0F19" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} font-sans h-full antialiased`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main>
            <CourseProvider>
              <WishlistProvider>{children}</WishlistProvider>
            </CourseProvider>
          </main>

          <ToastContainer position="top-center" theme="colored" />
        </ThemeProvider>
      </body>
    </html>
  );
}
