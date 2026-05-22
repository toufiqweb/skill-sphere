"use client";

import { Button } from "@heroui/react";
import React, { useState } from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import MyNavLink from "../ui/MyNavLink";
import Link from "next/link";
import { Avatar } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { Menu, X, LogOut } from "lucide-react";

const Navbar = () => {
  const {
    data: session,
    isPending,
    error,
    refetch,
  } = authClient.useSession();

  const user = session?.user;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = (
    <>
      <li className="text-slate-600 hover:text-indigo-600 font-semibold transition-colors duration-200">
        <MyNavLink href="/">Home</MyNavLink>
      </li>
      <li className="text-slate-600 hover:text-indigo-600 font-semibold transition-colors duration-200">
        <MyNavLink href="/courses">Courses</MyNavLink>
      </li>
      <li className="text-slate-600 hover:text-indigo-600 font-semibold transition-colors duration-200">
        <MyNavLink href="/profile">Profile</MyNavLink>
      </li>
    </>
  );

  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-full container px-4 md:px-6">
      
      {/* Premium Light Capsule Container */}
      <div className="bg-white/70 backdrop-blur-xl border border-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] rounded-full px-5 md:px-7 py-2.5 transition-all duration-300">
        <nav className="flex items-center justify-between h-12">
          
          {/* Left Side: Hamburger Menu & Logo */}
          <div className="flex items-center gap-3">
            <button
              className="md:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
            
            <Link href="/" className="flex items-center active:scale-95 transition-transform">
              <Image 
                src={logo} 
                alt="logo" 
                width={105} 
                height={105} 
                className="object-contain" // লাইট থিমে নরমাল কালারড লোগো ভালো ফুটবে
                priority
              />
            </Link>
          </div>

          {/* Middle Side: Navigation Links (Desktop) */}
          <ul className="hidden items-center gap-8 md:flex text-sm tracking-wide">
            {links}
          </ul>

          {/* Right Side: Authentication Actions (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <div className="flex gap-3 items-center bg-slate-50 pl-3 pr-1.5 py-1.5 rounded-full border border-slate-100">
                <span className="text-xs text-slate-600 max-w-[100px] truncate font-semibold">
                  {user?.name}
                </span>
                <Avatar size="sm" className="ring-2 ring-indigo-500/20 w-7 h-7">
                  <Avatar.Image alt={user?.name} src={user?.image} />
                  <Avatar.Fallback>{user?.name?.[0]}</Avatar.Fallback>
                </Avatar>

                <Button
                  onClick={async () => await authClient.signOut()}
                  variant="flat"
                  className="bg-red-50 text-red-500 hover:bg-red-100 font-bold text-xs px-4 h-8 rounded-full border border-red-200 transition-all"
                >
                  <LogOut className="w-3.5 h-3.5 mr-1" />
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex gap-2.5 items-center">
                <Link href={"/signup"}>
                  <Button className="bg-main-gradient text-white text-xs font-bold px-5 h-9 rounded-full shadow-md shadow-indigo-500/10 hover:opacity-95 transition-all active:scale-95">
                    Register
                  </Button>
                </Link>
                <Link href={"/signin"}>
                  <Button
                    variant="flat"
                    className="bg-slate-900 text-white hover:bg-slate-800 text-xs font-bold px-5 h-9 rounded-full transition-all active:scale-95 shadow-sm"
                  >
                    Login
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Right Side Indicator */}
          {user && (
            <div className="md:hidden flex items-center">
              <Avatar size="sm" className="ring-2 ring-indigo-500/10">
                <Avatar.Image alt={user?.name} src={user?.image} />
                <Avatar.Fallback>{user?.name?.[0]}</Avatar.Fallback>
              </Avatar>
            </div>
          )}

        </nav>
      </div>

      {/* Mobile Floating Menu Dropdown (Light Theme) */}
      {isMenuOpen && (
        <div className="mt-3 md:hidden bg-white/95 backdrop-blur-xl border border-slate-100 rounded-3xl p-5 shadow-[0_20px_40px_-5px_rgba(0,0,0,0.08)] animate-in fade-in slide-in-from-top-4 duration-200 z-50">
          <ul className="flex flex-col gap-3 px-2 py-1 text-base">
            {links}
          </ul>
          
          {/* Mobile Auth Actions */}
          <div className="border-t border-slate-100 mt-4 pt-4 flex flex-col gap-2.5">
            {user ? (
              <Button
                onClick={async () => await authClient.signOut()}
                variant="flat"
                className="w-full bg-red-50 text-red-500 hover:bg-red-100 font-bold rounded-xl h-11 border border-red-200 transition-all"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout ({user?.name})
              </Button>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                <Link href={"/signup"} className="w-full">
                  <Button className="w-full bg-main-gradient text-white font-bold rounded-xl h-11 shadow-md shadow-indigo-500/5">
                    Register
                  </Button>
                </Link>
                <Link href={"/signin"} className="w-full">
                  <Button
                    variant="flat"
                    className="w-full bg-slate-900 text-white hover:bg-slate-800 font-bold rounded-xl h-11"
                  >
                    Login
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;