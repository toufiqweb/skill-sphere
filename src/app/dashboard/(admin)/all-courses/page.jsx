import { redirect } from "next/navigation";
import { getUserServerSession } from "@/lib/actions/getUserServerSession";
import AdminCoursesContainer from "@/components/dashboard/AdminCoursesContainer";
import { Library, ShieldCheck } from "lucide-react";

export default async function AllCoursesPage() {
  const user = await getUserServerSession();

  if (!user || user.role !== "admin") {
    redirect("/dashboard");
  }

  return (
    <div className="space-y-8 pb-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 glass-card rounded-[28px]">
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 rounded-[20px] bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center shrink-0 shadow-inner">
            <Library size={28} className="text-brand-cyan" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight flex items-center gap-2">
              Platform <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-ocean">Courses</span>
            </h1>
            <p className="text-xs sm:text-sm font-medium text-muted mt-1">
              Manage, review, and moderate all courses across the VectraLearn platform.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
            <span className="px-4 py-2 rounded-xl bg-foreground/5 border border-card-border text-xs font-bold text-muted flex items-center gap-2 shadow-sm">
                <ShieldCheck size={16} className="text-brand-mint" /> 
                Course Directory
            </span>
        </div>
      </div>

      <AdminCoursesContainer user={user} />
    </div>
  );
}
