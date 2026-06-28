"use client";

import { useState } from "react";
import { User, ShieldCheck } from "lucide-react";
import ProfileIdentity from "../../../components/dashboard/profile/ProfileIdentity";
import SkillMatrix from "../../../components/dashboard/profile/SkillMatrix";
import AccountSettings from "../../../components/dashboard/profile/AccountSettings";
import PortfolioProjects from "../../../components/dashboard/profile/PortfolioProjects";
import EditProfileModal from "../../../components/dashboard/profile/EditProfileModal";

export default function ProfileView({ initialUser }) {
  const [user, setUser] = useState(initialUser);
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdateSuccess = (payload) => {
    setUser((prev) => ({
      ...prev,
      name: payload.name,
      image: payload.profileImage,
      bio: payload.bio,
      skills: payload.skills,
      phoneNumber: payload.phoneNumber,
      title: payload.title,
      location: payload.location,
      socials: payload.socials,
    }));
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 glass-card rounded-[28px]">
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 rounded-[20px] bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center shrink-0 shadow-inner">
            <User size={28} className="text-brand-cyan" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight flex items-center gap-2">
              Identity <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-ocean">Center</span>
            </h1>
            <p className="text-xs sm:text-sm font-medium text-muted mt-1">
              Manage your personal identity, preferences, and public portfolio.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
            <span className="px-4 py-2 rounded-xl bg-foreground/5 border border-card-border text-xs font-bold text-muted flex items-center gap-2 shadow-sm">
                <ShieldCheck size={16} className="text-brand-mint" /> 
                Protected Profile
            </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* =========================================================================
            LEFT COLUMN: IDENTITY FRAME
            ========================================================================= */}
        <div className="lg:col-span-1 space-y-6">
          <ProfileIdentity user={user} onEdit={() => setIsEditing(true)} />
        </div>

        {/* =========================================================================
            RIGHT COLUMN: DYNAMIC SECTIONS
            ========================================================================= */}
        <div className="lg:col-span-2 space-y-6">
          <SkillMatrix user={user} />
          <AccountSettings />
          <PortfolioProjects />
        </div>
      </div>

      {/* =========================================================================
          GLOBAL EDIT MODAL
          ========================================================================= */}
      <EditProfileModal
        isOpen={isEditing}
        onClose={() => setIsEditing(false)}
        user={user}
        onSuccess={handleUpdateSuccess}
      />
    </div>
  );
}
