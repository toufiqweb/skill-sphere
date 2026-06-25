"use client";
import { useState, useEffect } from "react";
import {
  Menu,
  Search,
  Sun,
  Moon,
  Bell,
  LogOut,
  User as UserIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useSidebar } from "./SidebarProvider";
import { useUserClientSession } from "@/lib/api/getUserServerSession";
import Image from "next/image";

export default function DashboardNavbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { setSidebarOpen } = useSidebar();

  const { user, isPending } = useUserClientSession();

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8 transition-colors duration-300">
      <button
        type="button"
        className="-m-2.5 p-2.5 text-gray-700 dark:text-gray-300 lg:hidden hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-xl transition-colors"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <Menu className="h-6 w-6" aria-hidden="true" />
      </button>

      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <form
          className="relative flex flex-1 items-center"
          action="#"
          method="GET"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="search-field" className="sr-only">
            Search
          </label>
          <div className="relative w-full max-w-md">
            <Search
              className="pointer-events-none absolute inset-y-0 left-3 h-full w-4 text-gray-400"
              aria-hidden="true"
            />
            <input
              id="search-field"
              className="block h-10 w-full rounded-full border-0 bg-gray-100 dark:bg-zinc-800/50 py-1.5 pl-10 pr-3 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 transition-all"
              placeholder="Search anything..."
              type="search"
              name="search"
            />
          </div>
        </form>
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          <button
            type="button"
            className="p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors bg-gray-50 dark:bg-zinc-800/50 rounded-full hover:bg-gray-200 dark:hover:bg-zinc-700"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <span className="sr-only">Toggle dark mode</span>
            {mounted && theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>

          <button
            type="button"
            className="relative p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors bg-gray-50 dark:bg-zinc-800/50 rounded-full hover:bg-gray-200 dark:hover:bg-zinc-700"
          >
            <span className="sr-only">View notifications</span>
            <Bell className="h-5 w-5" aria-hidden="true" />
            <span className="absolute top-1.5 right-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-zinc-950"></span>
          </button>

          {/* Separator */}
          <div
            className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200 dark:lg:bg-zinc-700"
            aria-hidden="true"
          />

          {/* Profile dropdown / Auth Loader */}
          <div className="relative">
            {isPending ? (
              <div className="flex items-center gap-3 animate-pulse">
                <div className="h-9 w-9 rounded-full bg-gray-200 dark:bg-zinc-800"></div>
                <div className="hidden lg:flex flex-col gap-1">
                  <div className="h-4 w-20 bg-gray-200 dark:bg-zinc-800 rounded"></div>
                  <div className="h-3 w-12 bg-gray-200 dark:bg-zinc-800 rounded"></div>
                </div>
              </div>
            ) : user ? (
              <>
                <button
                  type="button"
                  className="-m-1.5 flex items-center p-1.5 hover:bg-gray-50 dark:hover:bg-zinc-800 rounded-full lg:rounded-xl transition-colors"
                  id="user-menu-button"
                  aria-expanded={isDropdownOpen}
                  aria-haspopup="true"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <span className="sr-only">Open user menu</span>
                  {user.image ? (
                    <Image
                      width={20}
                      height={20}
                      className="h-9 w-9 rounded-full shadow-sm object-cover"
                      src={user.image}
                      alt={user.name || "User Avatar"}
                    />
                  ) : (
                    <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                      {user.name ? user.name.charAt(0).toUpperCase() : "U"}
                    </div>
                  )}

                  <span className="hidden lg:flex lg:items-center">
                    <span
                      className="ml-3 text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100"
                      aria-hidden="true"
                    >
                      {user.name || "User"}
                    </span>
                    <span className="ml-2 rounded-full bg-blue-50 dark:bg-blue-500/10 px-2.5 py-0.5 text-xs font-medium text-blue-700 dark:text-blue-400 ring-1 ring-inset ring-blue-700/10 dark:ring-blue-400/20 capitalize">
                      {user.role || "User"}
                    </span>
                  </span>
                </button>

                {isDropdownOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setIsDropdownOpen(false)}
                    ></div>
                    <div
                      className="absolute right-0 z-20 mt-2.5 w-56 origin-top-right rounded-xl bg-white dark:bg-zinc-900 py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none dark:ring-white/10"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu-button"
                      tabIndex="-1"
                    >
                      <div className="px-4 py-2 border-b border-gray-100 dark:border-zinc-800 mb-1 lg:hidden">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {user.name || "User"}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 capitalize">
                          {user.role || "User"}
                        </p>
                      </div>
                      <Link
                        href="/dashboard/profile"
                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
                        role="menuitem"
                        tabIndex="-1"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        <UserIcon className="h-4 w-4 text-gray-500" />
                        Your profile
                      </Link>
                      <button
                        className="flex w-full items-center gap-2 px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors mt-1 border-t border-gray-100 dark:border-zinc-800/50 pt-2"
                        role="menuitem"
                        tabIndex="-1"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        <LogOut className="h-4 w-4" />
                        Sign out
                      </button>
                    </div>
                  </>
                )}
              </>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
}
