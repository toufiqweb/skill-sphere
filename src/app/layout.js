import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { CourseProvider } from "@/lib/context/CourseProvider";

const OutfitFont = Outfit({
  subsets: ["latin"],
});

export const metadata = {
  title: "Skill Sphere",
  description: "Skill Sphere is an online learning platform to explore courses, improve skills, and grow your career.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${OutfitFont.className}  h-full antialiased`}>
      <body>
        <Navbar />
        <CourseProvider>{children}</CourseProvider>
        <Footer />
      </body>
    </html>
  );
}
