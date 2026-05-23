import Link from "next/link";
import { GraduationCap, Mail, Phone } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 py-20">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-violet-600/10 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-5">
            <Link
              href="/"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 text-white shadow-lg">
                <GraduationCap size={20} />
              </div>

              <div className="flex flex-col">
                <h1 className="text-xl font-black tracking-tight">
                  <span className="text-primary">Skill</span>
                  <span className="text-blue-500">Sphere</span>
                </h1>

                <span className="text-[10px] uppercase tracking-[0.25em] text-violet-400">
                  Learn • Grow • Succeed
                </span>
              </div>
            </Link>

            <p className="max-w-sm leading-relaxed text-muted">
              Empowering learners worldwide through high-quality online
              education, practical skills, and industry-focused courses.
            </p>

            <div className="flex gap-3">
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-blue-500 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:text-white"
              >
                <FaFacebookF />
              </Link>

              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sky-500 transition-all duration-300 hover:-translate-y-1 hover:bg-sky-500 hover:text-white"
              >
                <FaTwitter />
              </Link>

              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-pink-500 transition-all duration-300 hover:-translate-y-1 hover:bg-pink-500 hover:text-white"
              >
                <FaInstagram />
              </Link>

              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-blue-600 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white"
              >
                <FaLinkedinIn />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-bold text-primary">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {[
                "Home",
                "Courses",
                "Categories",
                "Instructors",
                "About Us",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/"
                    className="text-muted transition-colors duration-300 hover:text-violet-400"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-5 text-lg font-bold text-primary">
              Support
            </h3>

            <ul className="space-y-3">
              {[
                "Help Center",
                "Terms of Service",
                "Privacy Policy",
                "Refund Policy",
                "FAQ",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/"
                    className="text-muted transition-colors duration-300 hover:text-violet-400"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-bold text-primary">
              Contact Us
            </h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted">
                <Mail
                  size={18}
                  className="text-violet-400"
                />
                <span>hello@skillsphere.com</span>
              </div>

              <div className="flex items-center gap-3 text-muted">
                <Phone
                  size={18}
                  className="text-blue-400"
                />
                <span>+123 456 7890</span>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-muted">
                Need help choosing a course?
              </p>

              <p className="mt-1 font-semibold text-primary">
                We're here to help.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-muted md:flex-row">
          <p>
            © 2026 SkillSphere. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-violet-400 transition-colors"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="hover:text-violet-400 transition-colors"
            >
              Terms
            </Link>

            <Link
              href="/cookies"
              className="hover:text-violet-400 transition-colors"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
