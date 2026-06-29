import { redirect } from "next/navigation";
import { getUserServerSession } from "@/lib/actions/getUserServerSession";
import PendingCoursesContainer from "@/components/dashboard/PendingCoursesContainer";
import { ClipboardCheck, ShieldAlert } from "lucide-react";
import DashboardPageHeader from "@/components/ui/DashboardPageHeader";

export default async function PendingCoursesPage() {
  const user = await getUserServerSession();

  if (!user || user.role !== "admin") {
    redirect("/dashboard");
  }

  return (
    <div className="space-y-8 pb-8">
      {/* Page Header */}
      <DashboardPageHeader
        icon={ClipboardCheck}
        title={
          <>
            Pending <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-ocean">Approvals</span>
          </>
        }
        subtitle="Review and approve or reject courses submitted by instructors."
        rightContent={
          <span className="px-4 py-2 rounded-xl bg-foreground/5 border border-card-border text-xs font-bold text-muted flex items-center gap-2 shadow-sm">
            <ShieldAlert size={16} className="text-brand-mint" /> 
            Admin Action Required
          </span>
        }
      />

      <PendingCoursesContainer user={user} />
    </div>
  );
}
