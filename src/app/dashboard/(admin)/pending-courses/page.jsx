import { redirect } from "next/navigation";
import { getUserServerSession } from "@/lib/actions/getUserServerSession";
import PendingCoursesContainer from "@/components/dashboard/PendingCoursesContainer";

export default async function PendingCoursesPage() {
  const user = await getUserServerSession();

  if (!user || user.role !== "admin") {
    redirect("/dashboard");
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Pending Course Approvals
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Review and approve or reject courses submitted by instructors.
        </p>
      </div>

      <PendingCoursesContainer user={user} />
    </div>
  );
}
