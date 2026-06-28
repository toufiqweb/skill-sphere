import { getUserServerSession } from "@/lib/actions/getUserServerSession";
import ProfileView from "./ProfileView";

export const metadata = {
  title: "Profile | VectraLearn",
  description: "Manage your VectraLearn profile and account settings.",
};

export default async function UserProfilePage() {
  const user = await getUserServerSession();

  return (
    <div className="w-full">
      <ProfileView initialUser={user} />
    </div>
  );
}
