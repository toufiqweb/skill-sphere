import { redirect } from "next/navigation";
import { useUserServerSession } from "@/lib/actions/getUserServerSession";
import AdminCoursesContainer from "@/components/dashboard/AdminCoursesContainer";

export default async function AllCoursesPage() {
  const user = await useUserServerSession();

  if (!user || user.role !== "admin") {
    redirect("/dashboard");
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          All Platform Courses
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Manage, review, and moderate all courses across the SkillSphere platform.
        </p>
      </div>

      <AdminCoursesContainer user={user} />
    </div>
  );
}
