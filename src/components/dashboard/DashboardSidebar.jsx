"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  Users,
  Settings,
  Activity,
  Clock,
  BarChart,
  UsersRound,
  PlusCircle,
  Book,
  Heart,
  User,
  X,
  House,
} from "lucide-react";
import { useSidebar } from "./SidebarProvider";

const adminLinks = [
  {
    name: "Platform Analytics",
    href: "/dashboard/platform-analytics",
    icon: Activity,
  },
  { name: "All Courses", href: "/dashboard/all-courses", icon: BookOpen },
  { name: "All Users", href: "/dashboard/all-users", icon: Users },
  { name: "Manage Reviews", href: "/dashboard/manage-review", icon: Settings },
  { name: "Pending Courses", href: "/dashboard/pending-courses", icon: Clock },
];

const instructorLinks = [
  {
    name: "Course Analytics",
    href: "/dashboard/course-analytics",
    icon: BarChart,
  },
  {
    name: "Course Students",
    href: "/dashboard/course-students",
    icon: UsersRound,
  },
  { name: "Create Course", href: "/dashboard/create-course", icon: PlusCircle },
  { name: "My Courses", href: "/dashboard/my-courses", icon: Book },
];

const studentLinks = [
  { name: "My Learning", href: "/dashboard/my-learning", icon: BookOpen },
  { name: "Wishlist", href: "/dashboard/wishlist", icon: Heart },
];

const commonLinks = [
  { name: "Home", href: "/dashboard", icon: House },
  { name: "Profile", href: "/dashboard/profile", icon: User },
];

export default function DashboardSidebar({ role }) {
  const pathname = usePathname();
  const { sidebarOpen, setSidebarOpen } = useSidebar();

  let links = [];
  if (role === "admin") links = adminLinks;
  else if (role === "instructor") links = instructorLinks;
  else if (role === "student") links = studentLinks;

  const allLinks = [...commonLinks, ...links];

  return (
    <>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden transition-opacity"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar container */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl border-r border-gray-200 dark:border-zinc-800 transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 flex flex-col ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex h-16 shrink-0 items-center justify-between px-6 border-b border-gray-200 dark:border-zinc-800">
          <Link
            href="/"
            className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent"
          >
            SkillSphere
          </Link>
          <button
            className="lg:hidden p-2 -mr-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
          <div className="mb-4 px-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
            Navigation
          </div>
          {allLinks.map((link) => {
            const Icon = link.icon;
            // Check if active (handle exact match or sub-routes)
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200 group ${
                  isActive
                    ? "bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-zinc-800/50 dark:hover:text-white"
                }`}
                onClick={() => setSidebarOpen(false)} // Close sidebar on mobile after clicking
              >
                <Icon
                  className={`h-5 w-5 transition-colors ${isActive ? "text-blue-700 dark:text-blue-400" : "text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300"}`}
                />
                {link.name}
              </Link>
            );
          })}
        </div>
      </aside>
    </>
  );
}
