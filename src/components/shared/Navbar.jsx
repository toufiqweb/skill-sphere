"use client";

import { Button } from "@heroui/react";
import React, { useState } from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import MyNavLink from "../ui/MyNavLink";
import Link from "next/link";
import { Avatar } from "@heroui/react";
import { Menu, X, LogOut, GraduationCap } from "lucide-react";
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
        <MyNavLink href="/profile">Profile</MyNavLink>
      </li>
      <li>
        <MyNavLink href="/blogs">Blogs</MyNavLink>
      </li>
    </>
  );

  return (
    <div className="fixed left-1/2 top-5 z-50 w-full container -translate-x-1/2 px-4 ">
      {/* Premium Light Capsule Container */}
      <div className="bg-(--glass-bg) p-4 backdrop-blur-xl  rounded-full border border-white/10 px-5 md:px-7 py-2.5 shadow-[0_10px_40px_rgba(124,58,237,0.08)] hover:shadow-[0_15px_50px_rgba(124,58,237,0.15)] transition-all duration-300">
        <nav className="flex items-center justify-between h-12">
          {/* Left Side: Hamburger Menu & Logo */}
          <div className="flex items-center gap-3">
            <button
              className="md:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>

            <Link
              href="/"
              className="flex items-center gap-3 active:scale-95 transition-transform"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 text-white shadow-lg">
                <GraduationCap size={20} />
              </div>

              <div className="flex flex-col">
                <h1 className="text-xl md:text-2xl font-black tracking-tight">
                  <span className="text-white">Skill</span>
                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      backgroundImage: "var(--gradient-text)",
                    }}
                  >
                    Sphere
                  </span>{" "}
                </h1>

                <span className="hidden lg:block text-[10px] uppercase tracking-[0.25em] text-violet-400">
                  Learn • Grow • Succeed
                </span>
              </div>
            </Link>
          </div>

          {/* Middle Side: Navigation Links (Desktop) */}
          <ul className="hidden items-center gap-10 md:flex text-sm font-medium tracking-wide">
            {links}
          </ul>

          {/* Right Side: Authentication Actions (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 pl-3 pr-2 py-2 backdrop-blur-xl">
                <span className="max-w-[120px] truncate text-sm font-semibold text-primary">
                  {user?.name}
                </span>

                <Avatar size="sm" className="h-8 w-8 ring-2 ring-violet-500/20">
                  <Avatar.Image alt={user?.name} src={user?.image} />
                  <Avatar.Fallback>{user?.name?.[0]}</Avatar.Fallback>
                </Avatar>

                <Button
                  onClick={async () => await authClient.signOut()}
                  variant="flat"
                  className="bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white border border-red-500/20 font-semibold text-xs h-9 rounded-full transition-all duration-300"
                >
                  <LogOut className="mr-1 h-3.5 w-3.5" />
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex gap-2.5 items-center">
                <Link href="/signup">
                  <Button className="bg-main-gradient text-white font-semibold rounded-full h-10 px-6 shadow-[0_10px_25px_rgba(124,58,237,0.3)] hover:scale-105 transition-all duration-300">
                    Register
                  </Button>
                </Link>

                <Link href="/signin">
                  <Button
                    variant="flat"
                    className="glass-card text-primary font-semibold rounded-full h-10 px-6 border border-white/10 hover:border-violet-500/30 transition-all duration-300"
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

      {/* Mobile Floating Menu Dropdown */}
      {isMenuOpen && (
        <div className="mt-4 rounded-3xl glass-card border border-white/10 p-5 shadow-[0_15px_50px_rgba(124,58,237,0.12)] animate-in fade-in slide-in-from-top-4 duration-300 bg-(--glass-bg)  backdrop-blur-xl ">
          <ul className="flex flex-col gap-3 px-2 py-1 text-base">{links}</ul>

          {/* Mobile Auth Actions */}
          <div className="border-t border-slate-100 mt-4 pt-4 flex flex-col gap-2.5">
            {user ? (
              <Button
                onClick={async () => await authClient.signOut()}
                variant="flat"
                className="w-full bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white border border-red-500/20 font-semibold rounded-xl h-11 transition-all"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Logout ({user?.name})
              </Button>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                <Link href="/signup" className="w-full">
                  <Button className="w-full bg-main-gradient text-white font-bold rounded-xl h-11 shadow-md shadow-indigo-500/5">
                    Register
                  </Button>
                </Link>

                <Link href="/signin" className="w-full">
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
