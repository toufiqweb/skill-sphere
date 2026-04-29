import logo from "@/app/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 px-10 py-12">

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
      
        <aside className="space-y-4">
          <Image src={logo} height={240} width={240} alt="SkillSphere Logo" />
          <p className="text-sm text-gray-600 max-w-xs">Empowering learners worldwide with high-quality online education.</p>
          <div className="flex gap-4">
            <a><FaFacebook /></a>
            <a><FaTwitter /></a>
            <a><FaInstagram /></a>
            <a><FaLinkedinIn /></a>
          </div>
        </aside>

        <nav className="space-y-3">
          <h6 className="text-sm font-semibold uppercase tracking-wide text-gray-700">Quick Links</h6>
          <a href="#" className="block text-sm text-gray-600 hover:text-gray-900 hover:underline">Home</a>
          <a href="#" className="block text-sm text-gray-600 hover:text-gray-900 hover:underline">Courses</a>
          <a href="#" className="block text-sm text-gray-600 hover:text-gray-900 hover:underline">Categories</a>
          <a href="#" className="block text-sm text-gray-600 hover:text-gray-900 hover:underline">About Us</a>
          <a href="#" className="block text-sm text-gray-600 hover:text-gray-900 hover:underline">Blog</a>
          <a href="#" className="block text-sm text-gray-600 hover:text-gray-900 hover:underline">Contact</a>
        </nav>

   
        <nav className="space-y-3">
          <h6 className="text-sm font-semibold uppercase tracking-wide text-gray-700">
            Support
          </h6>
          <a href="#" className="block text-sm text-gray-600 hover:text-gray-900 hover:underline">Help Center</a>
          <a href="#" className="block text-sm text-gray-600 hover:text-gray-900 hover:underline">Terms of Service</a>
          <a href="#" className="block text-sm text-gray-600 hover:text-gray-900 hover:underline">Privacy Policy</a>
          <a href="#" className="block text-sm text-gray-600 hover:text-gray-900 hover:underline">Refund Policy</a>
          <a href="#" className="block text-sm text-gray-600 hover:text-gray-900 hover:underline">FAQ</a>
        </nav>

   
        <nav className="space-y-3">
          <h6 className="text-sm font-semibold uppercase tracking-wide text-gray-700">Contact Us</h6>
          <a href="" className=" text-sm text-gray-600 hover:text-gray-900 hover:underline flex items-center gap-2"> hello@skillsphere.com</a>
          <a href="" className=" text-sm text-gray-600 hover:text-gray-900 hover:underline flex items-center gap-2">+123 456 7890</a>
        </nav>
     </div>

 
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-300 text-center text-xs text-gray-500">
        © 2026 SkillSphere. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
