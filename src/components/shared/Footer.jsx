import Link from "next/link";
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#030214] border-t border-white/5 pt-16 pb-8">
      {/* Structural Atmospheric Glow Accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 bottom-0 h-64 w-64 rounded-full bg-violet-600/5 blur-[100px]" />
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-blue-600/5 blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 pb-12">
          {/* Brand Presentation Column */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#5643ff] to-[#4332eb] text-white shadow-md">
                <GraduationCap size={18} />
              </div>

              <div className="flex flex-col">
                <h1 className="text-lg font-black tracking-tight text-white leading-none">
                  Skill{" "}
                  <span className="bg-gradient-to-r from-violet-400 to-indigo-300 bg-clip-text text-transparent">
                    Sphere
                  </span>
                </h1>
                <span className="text-[8px] uppercase tracking-[0.22em] text-violet-400 font-bold mt-1">
                  Learn • Grow • Succeed
                </span>
              </div>
            </Link>

            <p className="max-w-xs text-xs font-medium leading-relaxed text-slate-400">
              Empowering learners worldwide through high-quality online
              education, practical skills, and industry-focused courses.
            </p>

            {/* Circular Social Platform Links Grid matching the bottom layout */}
            <div className="flex gap-2 pt-2">
              <Link
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/5 bg-[#0d0a2d]/40 text-slate-400 transition-all duration-300 hover:border-violet-500 hover:bg-[#5643ff] hover:text-white"
              >
                <FaFacebookF size={12} />
              </Link>

              <Link
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/5 bg-[#0d0a2d]/40 text-slate-400 transition-all duration-300 hover:border-violet-500 hover:bg-[#5643ff] hover:text-white"
              >
                <FaTwitter size={12} />
              </Link>

              <Link
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/5 bg-[#0d0a2d]/40 text-slate-400 transition-all duration-300 hover:border-violet-500 hover:bg-[#5643ff] hover:text-white"
              >
                <FaInstagram size={12} />
              </Link>

              <Link
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/5 bg-[#0d0a2d]/40 text-slate-400 transition-all duration-300 hover:border-violet-500 hover:bg-[#5643ff] hover:text-white"
              >
                <FaLinkedinIn size={12} />
              </Link>
            </div>
          </div>

          {/* Navigation Column: Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-bold text-white tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {[
                { name: "Courses", path: "/courses" },
                { name: "Instructors", path: "/instructors" },
                { name: "Pricing", path: "/pricing" },
                { name: "About Us", path: "/about" },
                { name: "Blog", path: "/blog" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-xs font-semibold text-slate-400 transition-colors duration-300 hover:text-[#5643ff]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Column: Support Details */}
          <div>
            <h3 className="mb-4 text-sm font-bold text-white tracking-wide">
              Support
            </h3>
            <ul className="space-y-2.5">
              {[
                { name: "Help Center", path: "/help" },
                { name: "Contact Us", path: "/contact" },
                { name: "Privacy Policy", path: "/privacy-policy" },
                { name: "Terms of Service", path: "/terms" },
                { name: "FAQ", path: "/faq" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-xs font-semibold text-slate-400 transition-colors duration-300 hover:text-[#5643ff]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Column: Contact Details with CTA CTA Button */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white tracking-wide">
              Contact Info
            </h3>

            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5 text-xs text-slate-400 font-medium">
                <Mail size={13} className="text-violet-400 shrink-0" />
                <span>hello@skillsphere.com</span>
              </div>

              <div className="flex items-center gap-2.5 text-xs text-slate-400 font-medium">
                <Phone size={13} className="text-violet-400 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </div>

              <div className="flex items-center gap-2.5 text-xs text-slate-400 font-medium">
                <MapPin size={13} className="text-violet-400 shrink-0" />
                <span>New York, USA</span>
              </div>
            </div>

            {/* Custom Interactive Floating Action Element from image blueprint */}
            <div className="pt-1">
              <Link
                href="/become-instructor"
                className="inline-flex items-center justify-center rounded-full border border-violet-500/30 bg-[#0d0a2d]/60 px-4 py-2 text-[11px] font-bold text-slate-200 transition-all duration-300 hover:border-violet-500 hover:bg-[#5643ff] hover:text-white"
              >
                Become an Instructor
              </Link>
            </div>
          </div>
        </div>

        {/* Global Copyright and Legal Links Row */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 text-[11px] font-medium text-slate-500 sm:flex-row">
          <p>© 2026 SkillSphere. All rights reserved.</p>

          <div className="flex gap-5">
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
