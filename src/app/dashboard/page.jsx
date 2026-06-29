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
        <Loader2 className="h-10 w-10 animate-spin text-[var(--brand-cyan)]" />
        <p className="text-sm font-bold text-muted animate-pulse">
          Loading your dashboard...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-6 text-center shadow-sm backdrop-blur-md">
          <p className="text-lg font-bold text-red-500">Error loading session</p>
          <p className="mt-1 text-sm font-medium text-red-500/80">{error.message || "Please log in again."}</p>
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
        <div className="p-8 bg-card-bg border border-card-border rounded-3xl shadow-card backdrop-blur-md max-w-lg mx-auto mt-10 text-center">
          <h2 className="text-2xl font-black text-primary">Welcome, {user.name}!</h2>
          <p className="text-muted mt-3 font-medium">Your role ({user.role}) is not recognized by the dashboard yet.</p>
        </div>
      );
  }
};

export default DashboardHomePage;
