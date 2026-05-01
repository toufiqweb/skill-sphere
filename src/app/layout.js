import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { CourseProvider } from "@/lib/context/CourseProvider";
import { ToastContainer } from "react-toastify";

const OutfitFont = Outfit({
  subsets: ["latin"],
});

export const metadata = {
  title: "Skill Sphere",
  description:
    "Skill Sphere is an online learning platform to explore courses, improve skills, and grow your career.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${OutfitFont.className}  h-full antialiased`}
    >
      <body>
        <Navbar />
        <main>
          <CourseProvider>{children}</CourseProvider>
        </main>
        <Footer />
        <ToastContainer position="top-center" />
      </body>
    </html>
  );
}
