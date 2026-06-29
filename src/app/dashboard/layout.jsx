import { redirect } from "next/navigation";
import { getUserServerSession } from "@/lib/actions/getUserServerSession";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import { SidebarProvider } from "@/components/dashboard/SidebarProvider";

export default async function DashboardLayout({ children }) {
  const user = await getUserServerSession();

  if (!user) {
    redirect("/login");
  }

  return (
    <SidebarProvider>
      <div className="flex h-screen bg-[var(--background)] font-sans transition-colors duration-300">
        {/* Sidebar Component */}
        <DashboardSidebar role={user.role} />

        {/* Main Content Area */}
        <div className="flex flex-1 flex-col overflow-hidden">
          {/* Navbar Component */}
          <DashboardNavbar />

          {/* Main Content */}
          <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
            <div className="mx-auto max-w-7xl">{children}</div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
