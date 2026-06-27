import { getUserServerSession } from "@/lib/actions/getUserServerSession";
import ProfileView from "./ProfileView";

export const metadata = {
  title: "Profile | SkillSphere",
  description: "Manage your SkillSphere profile and account settings.",
};

export default async function UserProfilePage() {
  const user = await getUserServerSession();

  return (
    <div className="w-full">
      <ProfileView initialUser={user} />
    </div>
  );
}
