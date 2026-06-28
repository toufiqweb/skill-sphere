"use client";

import { useUserClientSession } from "@/lib/api/getUserServerSession";
import { Loader2 } from "lucide-react";
import StudentHomeView from "@/components/dashboard/home/StudentHomeView";
import InstructorHomeView from "@/components/dashboard/home/InstructorHomeView";
import AdminHomeView from "@/components/dashboard/home/AdminHomeView";

const DashboardHomePage = () => {
  // 1. Authentication & Role Extraction via reusable api helper
  const { user, isPending, error } = useUserClientSession();

  // 2. Loading State: Skeleton Framework Loader
  if (isPending) {
    return (
      <div className="flex h-[80vh] flex-col items-center justify-center gap-4">
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
        <p className="text-sm font-medium text-gray-500 animate-pulse dark:text-gray-400">
          Loading your dashboard...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-center shadow-sm dark:border-red-900/30 dark:bg-red-900/10">
          <p className="text-lg font-semibold text-red-600 dark:text-red-400">Error loading session</p>
          <p className="mt-1 text-sm text-red-500 dark:text-red-400/80">{error.message || "Please log in again."}</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  // 3. Conditional Switch Matrix based on role
  switch (user.role) {
    case "admin":
      return <AdminHomeView user={user} />;
    case "instructor":
      return <InstructorHomeView user={user} />;
    case "student":
      return <StudentHomeView user={user} />;
    default:
      return (
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Welcome, {user.name}!</h2>
          <p className="text-gray-500">Your role ({user.role}) is not recognized by the dashboard yet.</p>
        </div>
      );
  }
};

export default DashboardHomePage;
