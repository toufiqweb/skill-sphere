"use client";

import React from "react";
import { 
  Mail, 
  BookOpen, 
  CheckCircle, 
  Clock, 
  Settings, 
  LogOut, 
  ShieldCheck, 
  Award, 
  ChevronRight, 
  Activity,
  User,
  LayoutDashboard,
  Bell,
  CreditCard,
  Loader2
} from "lucide-react";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import UpdateUserModal from "@/components/ui/UpdateUserModal";

const ProfilePage = () => {
  const {
    data: session,
    isPending,
    error,
    refetch,
  } = authClient.useSession();

  const user = session?.user;

  // Render a beautifully designed glassmorphism loading skeleton state
  if (isPending) {
    return (
      <div className="hero-bg min-h-screen flex flex-col items-center justify-center text-primary gap-3">
        <Loader2 className="w-10 h-10 text-[var(--brand-purple)] animate-spin" />
        <p className="text-sm font-semibold tracking-wide text-muted">Retrieving authenticated secure profile session...</p>
      </div>
    );
  }

  // Handle unauthenticated or missing user profiles gracefully
  if (error || !user) {
    return (
      <div className="hero-bg min-h-screen flex items-center justify-center  pt-28 lg:pt-36 px-4">
        <div className="glass-card max-w-md w-full rounded-3xl p-8 border border-[var(--glass-border)] text-center">
          <div className="w-14 h-14 bg-red-500/10 text-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-bold text-primary mb-2">Session Authentication Error</h3>
          <p className="text-muted text-sm mb-6">Unable to load your profile secure metrics right now. Please log in again to sync your dataset info parameters.</p>
          <button className="w-full bg-main-gradient text-white py-3.5 rounded-2xl font-bold text-sm transition-all cursor-pointer">
            Re-Authenticate Account
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="hero-bg min-h-screen py-30 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 12-Column Structured Layout Split */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* =========================================================
              LEFT COLUMN: Master Identity Glass Card Component (5-Cols Wide)
              ========================================================= */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-3xl overflow-hidden border border-[var(--glass-border)] transition-all">
              {/* Dynamic Header Workspace Backing Blend */}
              <div className="h-36 bg-main-gradient relative opacity-80" />
              
              {/* Avatar Alignment Placement Frame */}
              <div className="flex justify-center -mt-14 relative z-10">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary-gradient-start)] to-[var(--primary-gradient-end)] rounded-full blur-md opacity-40 group-hover:opacity-70 transition-opacity" />
                  {user.image ? (
                    <Image
                      src={user.image}
                      alt={user.name || "User account profile frame"}
                      width={120}
                      height={120}
                      className="w-28 h-28 rounded-full border-4 border-[var(--background)] object-cover shadow-xl relative"
                    />
                  ) : (
                    <div className="w-28 h-28 rounded-full border-4 border-[var(--background)] bg-[var(--card-bg)] text-muted flex items-center justify-center relative">
                      <User className="w-12 h-12" />
                    </div>
                  )}
                </div>
              </div>

              {/* Core Context Detail Blocks */}
              <div className="px-6 pt-4 pb-6 text-center">
                <h2 className="text-2xl font-black text-primary tracking-tight">{user.name}</h2>
                <p className="text-muted flex items-center justify-center gap-1.5 text-sm font-medium mt-1.5">
                  <Mail className="w-4 h-4 text-[var(--brand-purple)]" />
                  {user.email}
                </p>
                <p className="text-secondary text-sm max-w-sm mx-auto mt-4 leading-relaxed bg-[var(--card-bg)]/50 border border-[var(--glass-border)] rounded-2xl p-3.5">
                  Passionate learner and professional web builder workspace. Constantly refining technological tracking configurations and parsing operational structural matrices.
                </p>
              </div>

              {/* Analytics Metadata Key Value Tri-Grid Interface */}
              <div className="grid grid-cols-3 border-t border-[var(--glass-border)] bg-[var(--card-bg)]/30 text-center divide-x divide-[var(--glass-border)]">
                <div className="py-4">
                  <p className="text-xl font-black text-primary">12</p>
                  <p className="text-[11px] font-bold tracking-wider uppercase text-muted mt-0.5 flex items-center justify-center gap-1">
                    <BookOpen className="w-3 h-3 text-[var(--brand-purple)]" /> Enrolled
                  </p>
                </div>
                <div className="py-4">
                  <p className="text-xl font-black text-primary">8</p>
                  <p className="text-[11px] font-bold tracking-wider uppercase text-muted mt-0.5 flex items-center justify-center gap-1">
                    <CheckCircle className="w-3 h-3 text-emerald-500" /> Finished
                  </p>
                </div>
                <div className="py-4">
                  <p className="text-xl font-black text-primary">67h</p>
                  <p className="text-[11px] font-bold tracking-wider uppercase text-muted mt-0.5 flex items-center justify-center gap-1">
                    <Clock className="w-3 h-3 text-[var(--brand-blue)]" /> Hours
                  </p>
                </div>
              </div>
            </div>

            {/* Account CTA Workspace Interactions Stack */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 bg-main-gradient text-white rounded-2xl font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center">
                <UpdateUserModal className="w-full text-center py-4" user={user} />
              </div>
              <button className="flex-1 cursor-pointer border border-[var(--glass-border)] bg-[var(--card-bg)] hover:bg-[var(--glass-border)] text-primary font-bold py-4 rounded-2xl text-sm transition-all active:scale-[0.98] flex items-center justify-center gap-2">
                <LayoutDashboard className="w-4 h-4 text-[var(--brand-indigo)]" />
                View My Courses
              </button>
            </div>
          </div>

          {/* =========================================================
              RIGHT COLUMN: Advanced Workspace Operations & Options Panel (7-Cols Wide)
              ========================================================= */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Dashboard Controls: Profile Multi-Option Action Center Menu */}
            <div className="glass-card rounded-3xl p-6 md:p-8 border border-[var(--glass-border)]">
              <h3 className="text-lg font-bold text-primary tracking-tight mb-5 flex items-center gap-2">
                <Settings className="w-5 h-5 text-[var(--brand-purple)]" />
                Account Settings Dashboard
              </h3>
              
              <div className="space-y-3">
                {/* Option Row 1: Credentials Modification */}
                <div className="flex items-center justify-between border border-[var(--glass-border)] rounded-2xl p-4 hover:bg-[var(--card-bg)] transition-all cursor-pointer group">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[var(--brand-purple)]/10 text-[var(--brand-purple)] flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-primary">Security & Credentials Protection</p>
                      <p className="text-xs text-muted mt-0.5">Manage passwords, two-factor parameters, and keys info.</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted group-hover:text-[var(--brand-purple)] transition-colors" />
                </div>

                {/* Option Row 2: Communications Matrix */}
                <div className="flex items-center justify-between border border-[var(--glass-border)] rounded-2xl p-4 hover:bg-[var(--card-bg)] transition-all cursor-pointer group">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[var(--brand-indigo)]/10 text-[var(--brand-indigo)] flex items-center justify-center shrink-0">
                      <Bell className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-primary">Notification Deliverables Preference</p>
                      <p className="text-xs text-muted mt-0.5">Toggle dynamic broadcast updates for newly unlocked milestones.</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted group-hover:text-[var(--brand-indigo)] transition-colors" />
                </div>

                {/* Option Row 3: Invoicing Ledgers */}
                <div className="flex items-center justify-between border border-[var(--glass-border)] rounded-2xl p-4 hover:bg-[var(--card-bg)] transition-all cursor-pointer group">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[var(--brand-blue)]/10 text-[var(--brand-blue)] flex items-center justify-center shrink-0">
                      <CreditCard className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-primary">Billing Summaries & Purchase Receipts</p>
                      <p className="text-xs text-muted mt-0.5">Review continuous transaction logs and print PDF invoicing statements.</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted group-hover:text-[var(--brand-blue)] transition-colors" />
                </div>
              </div>
            </div>

            {/* Additional Segment Option: Dynamic Skill Verification Certificates Panel */}
            <div className="glass-card rounded-3xl p-6 md:p-8 border border-[var(--glass-border)]">
              <h3 className="text-lg font-bold text-primary tracking-tight mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-500" />
                Earned Credentials & Certifications
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl border border-[var(--glass-border)] bg-[var(--card-bg)]/40 flex gap-3 items-center">
                  <div className="w-11 h-11 bg-yellow-500/10 text-yellow-500 rounded-xl flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-primary truncate">Next.js Layer Architecture</p>
                    <p className="text-[11px] text-muted truncate mt-0.5">Verified Completion Code</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl border border-[var(--glass-border)] bg-[var(--card-bg)]/40 flex gap-3 items-center">
                  <div className="w-11 h-11 bg-indigo-500/10 text-[var(--brand-indigo)] rounded-xl flex items-center justify-center shrink-0">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-primary truncate">Advanced Encryption Engines</p>
                    <p className="text-[11px] text-muted truncate mt-0.5">Credential Verification Active</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Option Segment Footer: System Terminal Action Anchors */}
            <div className="flex justify-end pt-2">
              <button className="flex items-center gap-2 px-5 py-3 rounded-xl border border-red-500/20 hover:bg-red-500/10 text-red-500 font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer">
                <LogOut className="w-4 h-4" />
                Terminate Session
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ProfilePage;