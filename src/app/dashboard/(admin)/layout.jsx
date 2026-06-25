import { redirect } from "next/navigation";
import { useUserServerSession } from "@/lib/actions/getUserServerSession";

export default async function AdminLayout({ children }) {
  const user = await useUserServerSession();

  if (!user || user.role !== "admin") {
    // If not logged in, or not an admin, redirect to main dashboard
    // A toast could be triggered client-side based on URL params if needed.
    redirect("/dashboard");
  }

  return (
    <>
      {children}
    </>
  );
}
