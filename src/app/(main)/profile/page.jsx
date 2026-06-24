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
  Loader2,
  Sparkles,
  Zap,
  Target,
  BrainCircuit,
  TrendingUp,
  Flame
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

  // Render a beautifully designed deep space loading state
  if (isPending) {
    return (
      <div className="min-h-screen bg-background transition-colors duration-300 flex flex-col items-center justify-center text-foreground gap-4 relative overflow-hidden transition-colors duration-300 ">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[80px]" />
        <Loader2 className="w-10 h-10 text-[#8b7eff] animate-spin relative z-10" />
        <p className="text-xs sm:text-sm font-bold tracking-widest text-muted transition-colors duration-300 uppercase relative z-10">Retrieving authenticated secure profile session...</p>
      </div>
    );
  }

  // Handle unauthenticated or missing user profiles gracefully
  if (error || !user) {
    return (
      <div className="min-h-screen bg-background transition-colors duration-300 flex items-center justify-center pt-28 lg:pt-36 px-4 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-red-600/5 rounded-full blur-[120px]" />
        <div className="bg-card-bg/60 transition-colors duration-300 backdrop-blur-2xl max-w-md w-full rounded-[32px] p-8 border border-card-border transition-colors duration-300 text-center relative z-10 shadow-2xl">
          <div className="w-14 h-14 bg-red-500/10 text-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-red-500/20">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-black text-foreground tracking-tight mb-2 uppercase text-sm tracking-wider transition-colors duration-300 ">Session Authentication Error</h3>
          <p className="text-muted transition-colors duration-300 text-xs sm:text-sm font-medium mb-6 leading-relaxed">Unable to load your profile secure metrics right now. Please log in again to sync your dataset info parameters.</p>
          <button className="w-full bg-gradient-to-r from-[#5643ff] to-[#6d5dfc] text-white py-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md shadow-indigo-600/10 hover:brightness-110 cursor-pointer active:scale-[0.99]">
            Re-Authenticate Account
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-background transition-colors duration-300 py-24 transition-colors duration-300 overflow-hidden">
      
      {/* Background Ambient Radial Space Lights */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-10 right-[-10%] w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 left-[-10%] w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl space-y-8">
        
        {/* Main 12-Column Structured Layout Split */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* =========================================================
              LEFT COLUMN: Master Identity & Stats (5-Cols Wide)
              ========================================================= */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-card-bg/60 transition-colors duration-300 backdrop-blur-2xl rounded-[32px] overflow-hidden border border-card-border transition-colors duration-300 transition-all shadow-xl">
              
              {/* Dynamic Header Workspace Backing Blend */}
              <div className="h-36 bg-gradient-to-r from-[#5643ff]/40 to-[#6d5dfc]/40 relative border-b border-card-border transition-colors duration-300 ">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-black tracking-widest text-emerald-400 uppercase">
                  <Flame className="w-3 h-3 text-emerald-400" /> 5 Day Streak
                </div>
              </div>
              
              {/* Avatar Alignment Placement Frame */}
              <div className="flex justify-center -mt-14 relative z-10">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#5643ff] to-[#8b7eff] rounded-full blur-md opacity-40 group-hover:opacity-70 transition-opacity" />
                  {user.image ? (
                    <Image
                      src={user.image}
                      alt={user.name || "User account profile frame"}
                      width={120}
                      height={120}
                      className="w-28 h-28 rounded-full border-4 border-[#05041a] object-cover shadow-xl relative"
                    />
                  ) : (
                    <div className="w-28 h-28 rounded-full border-4 border-[#05041a] bg-background transition-colors duration-300 text-muted transition-colors duration-300 flex items-center justify-center relative">
                      <User className="w-12 h-12" />
                    </div>
                  )}
                </div>
              </div>

              {/* Core Context Detail Blocks */}
              <div className="px-6 pt-4 pb-6 text-center space-y-2">
                <h2 className="text-2xl font-black text-foreground tracking-tight transition-colors duration-300 ">{user.name}</h2>
                <p className="text-muted transition-colors duration-300 flex items-center justify-center gap-1.5 text-xs sm:text-sm font-medium">
                  <Mail className="w-4 h-4 text-[#8b7eff]" />
                  {user.email}
                </p>
                <p className="text-muted transition-colors duration-300 text-xs sm:text-sm font-medium max-w-sm mx-auto pt-2 leading-relaxed bg-card-bg/40 transition-colors duration-300 border border-card-border transition-colors duration-300 rounded-2xl p-3.5">
                  Passionate learner and professional web builder workspace. Constantly refining technological tracking configurations and parsing operational structural matrices.
                </p>
              </div>

              {/* Analytics Metadata Key Value Tri-Grid Interface */}
              <div className="grid grid-cols-3 border-t border-card-border transition-colors duration-300 bg-card-bg/30 transition-colors duration-300 text-center divide-x divide-white/5">
                <div className="py-4">
                  <p className="text-xl font-black text-foreground transition-colors duration-300 ">12</p>
                  <p className="text-[10px] font-black tracking-wider uppercase text-muted transition-colors duration-300 mt-0.5 flex items-center justify-center gap-1">
                    <BookOpen className="w-3 h-3 text-[#8b7eff]" /> Enrolled
                  </p>
                </div>
                <div className="py-4">
                  <p className="text-xl font-black text-foreground transition-colors duration-300 ">8</p>
                  <p className="text-[10px] font-black tracking-wider uppercase text-muted transition-colors duration-300 mt-0.5 flex items-center justify-center gap-1">
                    <CheckCircle className="w-3 h-3 text-emerald-400" /> Finished
                  </p>
                </div>
                <div className="py-4">
                  <p className="text-xl font-black text-foreground transition-colors duration-300 ">67h</p>
                  <p className="text-[10px] font-black tracking-wider uppercase text-muted transition-colors duration-300 mt-0.5 flex items-center justify-center gap-1">
                    <Clock className="w-3 h-3 text-indigo-400" /> Hours
                  </p>
                </div>
              </div>
            </div>

            {/* Core Verification Skill Badges Matrix */}
            <div className="bg-card-bg/60 transition-colors duration-300 backdrop-blur-2xl rounded-[32px] p-6 border border-card-border transition-colors duration-300 shadow-xl space-y-4">
              <h3 className="text-xs font-black text-foreground uppercase tracking-widest flex items-center gap-2 transition-colors duration-300 ">
                <BrainCircuit className="w-4 h-4 text-[#8b7eff]" /> Expert Skill Matrix
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Next.js 15", "Tailwind v4", "TypeScript", "GraphQL", "System Design", "Security Auth Engine"].map((skill, index) => (
                  <span key={index} className="px-3 py-1.5 rounded-xl bg-card-bg/60 transition-colors duration-300 border border-card-border transition-colors duration-300 text-[11px] font-bold text-secondary transition-colors duration-300 ">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Account CTA Workspace Interactions Stack */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 bg-gradient-to-r from-[#5643ff] to-[#6d5dfc] text-white rounded-2xl font-bold shadow-md hover:brightness-110 transition-all flex items-center justify-center">
                <UpdateUserModal className="w-full text-center py-4 text-xs uppercase tracking-wider font-bold" user={user} />
              </div>
              <button className="flex-1 cursor-pointer border border-card-border transition-colors duration-300 bg-card-bg/60 transition-colors duration-300 hover:bg-foreground/5 transition-colors duration-300 text-secondary transition-colors duration-300 font-bold py-4 rounded-2xl text-xs uppercase tracking-wider transition-all active:scale-[0.98] flex items-center justify-center gap-2">
                <LayoutDashboard className="w-4 h-4 text-indigo-400" />
                View My Courses
              </button>
            </div>
          </div>

          {/* =========================================================
              RIGHT COLUMN: Operation Metrics & Control Center (7-Cols Wide)
              ========================================================= */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Extended Tracker 1: Current In-Progress Target Block */}
            <div className="bg-card-bg/60 transition-colors duration-300 backdrop-blur-2xl rounded-[32px] p-6 md:p-8 border border-card-border transition-colors duration-300 shadow-xl space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-xs font-black text-foreground uppercase tracking-widest flex items-center gap-2 transition-colors duration-300 ">
                  <Target className="w-4 h-4 text-indigo-400" /> Active Deployment Track
                </h3>
                <span className="text-[11px] font-black text-[#8b7eff] bg-purple-500/10 px-2.5 py-1 rounded-md border border-purple-500/20 uppercase tracking-wide">
                  74% Done
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-card-bg/40 transition-colors duration-300 border border-card-border transition-colors duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-primary transition-colors duration-300 ">Next.js Layer Architecture & High Performance Data Caching</h4>
                  <p className="text-[11px] text-muted transition-colors duration-300 font-medium">Next Milestone: Section 09 — Dynamic Server Action Optimization</p>
                </div>
                <button className="shrink-0 bg-foreground/5 transition-colors duration-300 hover:bg-foreground/10 transition-colors duration-300 text-foreground font-bold px-4 py-2 rounded-xl text-[11px] uppercase tracking-wider border border-card-border transition-colors duration-300 transition-all transition-colors duration-300 ">
                  Resume
                </button>
              </div>
              {/* Custom Micro Progress Bar */}
              <div className="w-full h-1.5 bg-background transition-colors duration-300 rounded-full overflow-hidden border border-card-border transition-colors duration-300 ">
                <div className="h-full bg-gradient-to-r from-[#5643ff] to-[#8b7eff] rounded-full" style={{ width: "74%" }} />
              </div>
            </div>

            {/* Dashboard Controls: Profile Multi-Option Action Center Menu */}
            <div className="bg-card-bg/60 transition-colors duration-300 backdrop-blur-2xl rounded-[32px] p-6 md:p-8 border border-card-border transition-colors duration-300 shadow-xl">
              <h3 className="text-xs font-black text-foreground uppercase tracking-widest mb-5 flex items-center gap-2 transition-colors duration-300 ">
                <Settings className="w-4 h-4 text-[#8b7eff]" />
                Account Settings Dashboard
              </h3>
              
              <div className="space-y-3">
                {/* Option Row 1: Credentials Modification */}
                <div className="flex items-center justify-between border border-card-border transition-colors duration-300 rounded-2xl p-4 bg-card-bg/40 transition-colors duration-300 hover:bg-foreground/5 transition-colors duration-300 transition-all duration-200 cursor-pointer group">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-[#8b7eff] flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-primary transition-colors duration-300 group-hover:text-[#8b7eff] transition-colors duration-300 ">Security & Credentials Protection</p>
                      <p className="text-[11px] text-muted transition-colors duration-300 mt-0.5 font-medium">Manage passwords, two-factor parameters, and keys info.</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-[#8b7eff] transition-colors duration-300 " />
                </div>

                {/* Option Row 2: Communications Matrix */}
                <div className="flex items-center justify-between border border-card-border transition-colors duration-300 rounded-2xl p-4 bg-card-bg/40 transition-colors duration-300 hover:bg-foreground/5 transition-colors duration-300 transition-all duration-200 cursor-pointer group">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                      <Bell className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-primary transition-colors duration-300 group-hover:text-indigo-400 transition-colors duration-300 ">Notification Deliverables Preference</p>
                      <p className="text-[11px] text-muted transition-colors duration-300 mt-0.5 font-medium">Toggle dynamic broadcast updates for newly unlocked milestones.</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 transition-colors duration-300 " />
                </div>

                {/* Option Row 3: Invoicing Ledgers */}
                <div className="flex items-center justify-between border border-card-border transition-colors duration-300 rounded-2xl p-4 bg-card-bg/40 transition-colors duration-300 hover:bg-foreground/5 transition-colors duration-300 transition-all duration-200 cursor-pointer group">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                      <CreditCard className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-primary transition-colors duration-300 group-hover:text-blue-400 transition-colors duration-300 ">Billing Summaries & Purchase Receipts</p>
                      <p className="text-[11px] text-muted transition-colors duration-300 mt-0.5 font-medium">Review continuous transaction logs and print PDF invoicing statements.</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-blue-400 transition-colors duration-300 " />
                </div>
              </div>
            </div>

            {/* Additional Segment Option: Dynamic Skill Verification Certificates Panel */}
            <div className="bg-card-bg/60 transition-colors duration-300 backdrop-blur-2xl rounded-[32px] p-6 md:p-8 border border-card-border transition-colors duration-300 shadow-xl">
              <h3 className="text-xs font-black text-foreground uppercase tracking-widest mb-4 flex items-center gap-2 transition-colors duration-300 ">
                <Award className="w-4 h-4 text-yellow-500" />
                Earned Credentials & Certifications
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl border border-card-border transition-colors duration-300 bg-card-bg/40 transition-colors duration-300 flex gap-3 items-center">
                  <div className="w-11 h-11 bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 rounded-xl flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm font-bold text-primary transition-colors duration-300 truncate">Next.js Layer Architecture</p>
                    <p className="text-[10px] text-muted transition-colors duration-300 font-bold tracking-tight truncate mt-0.5">ID: NX-8923-SPHERE</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl border border-card-border transition-colors duration-300 bg-card-bg/40 transition-colors duration-300 flex gap-3 items-center">
                  <div className="w-11 h-11 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-xl flex items-center justify-center shrink-0">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm font-bold text-primary transition-colors duration-300 truncate">Advanced Encryption Engines</p>
                    <p className="text-[10px] text-muted transition-colors duration-300 font-bold tracking-tight truncate mt-0.5">ID: EN-4105-SPHERE</p>
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