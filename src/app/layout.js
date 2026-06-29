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
  title: "SkillSphere",
  description:
    "SkillSphere is an online learning platform to explore courses, improve skills, and grow your career.",
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
