import { redirect } from "next/navigation";
import { getUserServerSession } from "@/lib/actions/getUserServerSession";
import AdminCoursesContainer from "@/components/dashboard/AdminCoursesContainer";
import { Library, ShieldCheck } from "lucide-react";
import DashboardPageHeader from "@/components/ui/DashboardPageHeader";

export default async function AllCoursesPage() {
  const user = await getUserServerSession();

  if (!user || user.role !== "admin") {
    redirect("/dashboard");
  }

  return (
    <div className="space-y-8 pb-8">
      {/* Page Header */}
      <DashboardPageHeader
        icon={Library}
        title={
          <>
            Platform <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-ocean">Courses</span>
          </>
        }
        subtitle="Manage, review, and moderate all courses across the VectraLearn platform."
        rightContent={
          <span className="px-4 py-2 rounded-xl bg-foreground/5 border border-card-border text-xs font-bold text-muted flex items-center gap-2 shadow-sm">
            <ShieldCheck size={16} className="text-brand-mint" /> 
            Course Directory
          </span>
        }
      />

      <AdminCoursesContainer user={user} />
    </div>
  );
}
