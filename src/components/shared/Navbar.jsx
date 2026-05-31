"use client";

import { Button } from "@heroui/react";
import React, { useState } from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import MyNavLink from "../ui/MyNavLink";
import Link from "next/link";
import { Avatar } from "@heroui/react";
import { Menu, X, LogOut, Search, GraduationCap } from "lucide-react";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = (
    <>
      <li>
        <MyNavLink href="/">Home</MyNavLink>
      </li>
      <li>
        <MyNavLink href="/courses">Courses</MyNavLink>
      </li>
      <li>
        <MyNavLink href="/profile">Instructors</MyNavLink> {/* Profile mapping to Instructors view context */}
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
    <div className="fixed top-0 left-0 z-50 w-full  backdrop-blur-xl">
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

          {/* Middle Side: Centered Navigation Links */}
          <ul className="hidden items-center gap-8 md:flex text-[14px] font-medium text-slate-300 tracking-wide">
            {links}
          </ul>

          {/* Right Side: Search Icon & Authentication Flows */}
          <div className="flex items-center gap-4">
            {/* Search Glass Anchor Element */}
            <button className="text-slate-400 hover:text-white p-2 transition-colors duration-200 rounded-full hover:bg-white/5">
              <Search size={18} />
            </button>

            {/* Desktop Auth Conditions */}
            <div className="hidden md:flex items-center gap-3">
              {user ? (
                <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 pl-3 pr-1.5 py-1.5 backdrop-blur-md">
                  <span className="max-w-[100px] truncate text-xs font-medium text-slate-200">
                    {user?.name}
                  </span>

                  <Avatar size="sm" className="h-7 w-7 ring-2 ring-violet-500/30">
                    <Avatar.Image alt={user?.name} src={user?.image} />
                    <Avatar.Fallback className="bg-slate-800 text-white text-xs">{user?.name?.[0]}</Avatar.Fallback>
                  </Avatar>

                  <Button
                    onClick={async () => await authClient.signOut()}
                    variant="flat"
                    className="bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white border border-red-500/10 font-medium text-xs h-7 px-3 rounded-full transition-all duration-200"
                  >
                    <LogOut className="mr-1 h-3 w-3" />
                    Logout
                  </Button>
                </div>
              ) : (
                <div className="flex gap-4 items-center">
                  <Link href="/signin">
                    <Button
                      variant="light"
                      className="text-slate-300 hover:text-white font-medium text-sm px-3 bg-transparent transition-colors"
                    >
                      Login
                    </Button>
                  </Link>

                  <Link href="/signup">
                    <Button className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium text-sm rounded-xl h-10 px-5 shadow-lg shadow-violet-600/20 hover:brightness-110 active:scale-98 transition-all duration-200">
                      Sign Up
                    </Button>
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Session Profile Quickview Indicator */}
            {user && (
              <div className="md:hidden flex items-center">
                <Avatar size="sm" className="h-8 w-8 ring-2 ring-violet-500/30">
                  <Avatar.Image alt={user?.name} src={user?.image} />
                  <Avatar.Fallback className="bg-slate-800 text-white">{user?.name?.[0]}</Avatar.Fallback>
                </Avatar>
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* Mobile Menu Dropdown Panel */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-white/5 bg-[#060419]/95 backdrop-blur-2xl px-4 py-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <ul className="flex flex-col gap-4 text-base text-slate-300 px-2 font-medium">
            {links}
          </ul>

          <div className="border-t border-white/5 mt-5 pt-5 flex flex-col gap-3">
            {user ? (
              <Button
                onClick={async () => await authClient.signOut()}
                variant="flat"
                className="w-full bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white border border-red-500/10 font-semibold rounded-xl h-11 transition-all"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Logout ({user?.name})
              </Button>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                <Link href="/signin" className="w-full">
                  <Button
                    variant="flat"
                    className="w-full bg-white/5 text-white border border-white/10 hover:bg-white/10 font-semibold rounded-xl h-11"
                  >
                    Login
                  </Button>
                </Link>

                <Link href="/signup" className="w-full">
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