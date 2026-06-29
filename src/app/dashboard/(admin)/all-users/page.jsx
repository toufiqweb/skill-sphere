import { redirect } from "next/navigation";
import { getUserServerSession } from "@/lib/actions/getUserServerSession";
import AdminUsersContainer from "@/components/dashboard/AdminUsersContainer";
import { Users, Shield } from "lucide-react";
import DashboardPageHeader from "@/components/ui/DashboardPageHeader";

export const metadata = {
  title: "All Users | VectraLearn Admin",
  description: "Manage user roles, block/unblock accounts, and oversee all platform members.",
};

export default async function AllUsersPage() {
  const user = await getUserServerSession();

  if (!user || user.role !== "admin") {
    redirect("/dashboard");
  }

  return (
    <div className="space-y-8 pb-8">
      {/* Page Header */}
      <DashboardPageHeader
        icon={Users}
        title={
          <>
            User <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-ocean">Management</span>
          </>
        }
        subtitle="Search, filter, manage roles, and moderate all registered users on VectraLearn."
        rightContent={
          <span className="px-4 py-2 rounded-xl bg-foreground/5 border border-card-border text-xs font-bold text-muted flex items-center gap-2 shadow-sm">
            <Shield size={16} className="text-brand-mint" /> 
            Admin Privileges
          </span>
        }
      />

      <AdminUsersContainer user={user} />
    </div>
  );
}
