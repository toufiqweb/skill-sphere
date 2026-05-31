"use client";

import { Button } from "@heroui/react";
import React, { useState, useEffect, useRef } from "react";
import MyNavLink from "../ui/MyNavLink";
import Link from "next/link";
import { Avatar } from "@heroui/react";
import { Menu, X, LogOut, Search, GraduationCap, LayoutDashboard, User } from "lucide-react";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const dropdownRef = useRef(null);

  // ড্রপডাউনের বাইরে ক্লিক করলে বন্ধ হওয়ার মেকানিজম
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const links = (
    <>
      <li>
        <MyNavLink href="/">Home</MyNavLink>
      </li>
      <li>
        <MyNavLink href="/courses">Courses</MyNavLink>
      </li>
      <li>
        <MyNavLink href="/pricing">Pricing</MyNavLink>
      </li>
      <li>
        <MyNavLink href="/blogs">Blog</MyNavLink>
      </li>
      <li>
        <MyNavLink href="/about">About</MyNavLink>
      </li>
    </>
  );

  return (
    <div className="fixed top-0 left-0 z-50 w-full backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex h-20 items-center justify-between">
          
          {/* Left Side: Hamburger & Logo Identity */}
          <div className="flex items-center gap-4">
            <button
              className="md:hidden p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>

            <Link
              href="/"
              className="flex items-center gap-2.5 active:scale-98 transition-transform"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#5643ff] to-[#4332eb] text-white shadow-md">
                <GraduationCap size={18} />
              </div>

              <div className="flex flex-col">
                <h1 className="text-xl font-bold tracking-tight text-white flex items-center gap-0.5">
                  <span>Skill</span>
                  <span className="bg-gradient-to-r from-violet-400 to-indigo-300 bg-clip-text text-transparent">
                    Sphere
                  </span>
                </h1>
                <span className="text-[8px] uppercase tracking-[0.2em] text-slate-400 font-medium -mt-0.5">
                  Learn • Grow • Succeed
                </span>
              </div>
            </Link>
          </div>

          {/* Middle Side: Centered Navigation Links (Desktop) */}
          <ul className="hidden items-center gap-8 md:flex text-[14px] font-medium text-slate-300 tracking-wide">
            {links}
          </ul>

          {/* Right Side: Search Icon & Authentication Flows */}
          <div className="flex items-center gap-4">
            <button className="text-slate-400 hover:text-white p-2 transition-colors duration-200 rounded-full hover:bg-white/5">
              <Search size={18} />
            </button>

            {/* Desktop Dynamic Auth & Dropdown (Hidden on Mobile) */}
            <div className="hidden md:flex items-center gap-3">
              {user ? (
                <div ref={dropdownRef} className="relative flex items-center gap-3 rounded-full border border-white/10 bg-white/5 pl-3 pr-1.5 py-1.5 backdrop-blur-md">
                  <span className="max-w-[100px] truncate text-xs font-medium text-slate-200">
                    {user?.name}
                  </span>

                  {/* Avatar Trigger Button */}
                  <button 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    type="button"
                    className="focus:outline-none active:scale-95 transition-transform"
                  >
                    <Avatar size="sm" className="h-7 w-7 ring-2 ring-violet-500/30 hover:ring-violet-500/60 transition-all">
                      <Avatar.Image alt={user?.name} src={user?.image} />
                      <Avatar.Fallback className="bg-slate-800 text-white text-xs">{user?.name?.[0]}</Avatar.Fallback>
                    </Avatar>
                  </button>

                  {/* Manual Dropdown (Desktop Only) */}
                  {isDropdownOpen && (
                    <div className="absolute right-0 top-full mt-2 w-48 rounded-xl border border-white/10 bg-[#09071f]/95 p-1.5 text-white shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                      <div className="px-3 py-2 border-b border-white/5 mb-1">
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Signed in as</p>
                        <p className="text-xs font-medium text-violet-400 truncate mt-0.5">{user?.name}</p>
                      </div>

                      <Link 
                        href="/dashboard"
                        onClick={() => setIsDropdownOpen(false)}
                        className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                      >
                        <LayoutDashboard size={14} className="text-slate-400" />
                        <span>Dashboard</span>
                      </Link>

                      <Link 
                        href="/profile"
                        onClick={() => setIsDropdownOpen(false)}
                        className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                      >
                        <User size={14} className="text-slate-400" />
                        <span>My Profile</span>
                      </Link>

                      <div className="h-px bg-white/5 my-1" />

                      <button
                        onClick={async () => {
                          setIsDropdownOpen(false);
                          await authClient.signOut();
                        }}
                        className="flex w-full items-center gap-2.5 px-3 py-2 text-xs font-medium text-red-400 hover:text-white hover:bg-red-500/10 rounded-lg transition-colors text-left"
                      >
                        <LogOut size={14} />
                        <span>Log Out</span>
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex gap-4 items-center">
                  <Link href="/signin">
                    <Button variant="light" className="text-slate-300 hover:text-white font-medium text-sm px-3 bg-transparent transition-colors">
                      Login
                    </Button>
                  </Link>
                  <Link href="/signup">
                    <Button className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium text-sm rounded-xl h-10 px-5 shadow-lg shadow-violet-600/20 hover:brightness-110 transition-all duration-200">
                      Sign Up
                    </Button>
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Auth Button (Only shown on small devices when logged out) */}
            {!user && (
              <div className="md:hidden">
                <Link href="/signin">
                  <Button size="sm" variant="flat" className="bg-white/5 text-white border border-white/10 font-medium text-xs rounded-lg px-3">
                    Login
                  </Button>
                </Link>
              </div>
            )}

          </div>
        </nav>
      </div>

      {/* Mobile Hamburger Menu Dropdown Panel */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-white/5 bg-[#060419]/95 backdrop-blur-2xl px-4 py-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          
          {/* Main Navigation Links */}
          <ul className="flex flex-col gap-4 text-base text-slate-300 px-2 font-medium">
            {links}
          </ul>

          <div className="border-t border-white/5 mt-5 pt-5">
            {user ? (
              <div className="flex flex-col gap-2 px-2">
                {/* User Info Card */}
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5 mb-2">
                  <Avatar size="sm" src={user?.image} name={user?.name?.[0]} className="h-8 w-8 ring-2 ring-violet-500/20" />
                  <div className="flex flex-col min-w-0">
                    <span className="text-sm font-medium text-white truncate">{user?.name}</span>
                    <span className="text-[10px] text-slate-400 truncate">Logged In</span>
                  </div>
                </div>

                {/* Mobile Dashboard Link */}
                <Link 
                  href="/dashboard"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 p-3 text-sm font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl transition-all"
                >
                  <LayoutDashboard size={16} className="text-violet-400" />
                  <span>Dashboard</span>
                </Link>

                {/* Mobile Profile Link */}
                <Link 
                  href="/profile"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 p-3 text-sm font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl transition-all"
                >
                  <User size={16} className="text-violet-400" />
                  <span>My Profile</span>
                </Link>

                {/* Mobile Logout Button */}
                <button
                  onClick={async () => {
                    setIsMenuOpen(false);
                    await authClient.signOut();
                  }}
                  className="flex w-full items-center gap-3 p-3 text-sm font-semibold text-red-400 bg-red-500/5 hover:bg-red-500/10 border border-red-500/10 rounded-xl transition-all mt-2"
                >
                  <LogOut size={16} />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <div className="px-2">
                <Link href="/signup" className="w-full" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-xl h-11 shadow-md">
                    Sign Up
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