"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { Mail, Lock, ShieldCheck, LogIn, ArrowRight, GraduationCap, Eye, Paperclip, UserPlus } from "lucide-react";

const SignInPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());
    const { email, password } = userData;

    try {
      const response = await authClient.signIn.email({
        email,
        password,
        rememberMe: false,
      });

      const data = response?.data;
      const error = response?.error;

      if (data) {
        toast.success("Login successful!");
        router.push(callbackUrl);
        router.refresh();
        return;
      }

      toast.error(String(error?.message || error || "Something went wrong"));
    } catch (err) {
      console.error("Login error:", err);
      toast.error(String(err?.message || err || "Something went wrong"));
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const data = await authClient.signIn.social({
        provider: "google",
        callbackURL: callbackUrl,
      });

      if (!data) {
        toast.error("Something went wrong");
      }
    } catch (err) {
      console.error("Google login error:", err);
      toast.error(String(err?.message || err || "Something went wrong"));
    }
  };

  return (
    <div className="relative min-h-screen bg-background transition-colors duration-300 pt-32 pb-16 flex flex-col items-center justify-center p-4 overflow-hidden">
      
      {/* Background Graphic Curves & Neon Spot Highlights */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/4 left-[-10%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-[-10%] w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[140px]" />
        
        {/* Subtle decorative background stars */}
        <span className="absolute top-1/3 left-24 text-indigo-400/20 font-serif text-xl select-none">✦</span>
        <span className="absolute bottom-1/3 right-20 text-purple-400/20 font-serif text-2xl select-none">✦</span>
      </div>

      {/* Top-Left Platform Brand Identity Logo Block */}
      <div className="absolute top-8 left-6 md:left-12 z-20 flex items-center gap-2.5 select-none">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/20">
          <Paperclip size={18} className="hidden" /> {/* Structural backup reference */}
          <GraduationCap size={18} />
        </div>
        <div className="flex flex-col">
          <h1 className="text-base font-black tracking-tight text-foreground leading-none transition-colors duration-300 ">
            Skill<span className="text-muted transition-colors duration-300 font-semibold">Sphere</span>
          </h1>
          <span className="text-[7px] uppercase tracking-[0.25em] text-muted transition-colors duration-300 font-bold mt-0.5">
            Learn • Grow • Succeed
          </span>
        </div>
      </div>

      {/* Main Form Structural Layout Frame */}
      <div className="w-full max-w-[480px] relative z-10 mt-6">
        
        {/* Floating Top Header Circular Icon Accent Node */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-20 flex h-20 w-20 items-center justify-center rounded-full border border-purple-500/30 bg-background transition-colors duration-300 text-purple-300 shadow-[0_0_30px_rgba(109,93,252,0.25)]">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-b from-[#6d5dfc]/20 to-transparent">
            <UserPlus size={22} className="text-[#8b7eff]" />
          </div>
        </div>

        {/* Main Card Component Box Framework */}
        <div className="bg-card-bg/60 transition-colors duration-300 backdrop-blur-2xl rounded-[32px] border border-card-border transition-colors duration-300 pt-16 pb-2 overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.4)]">
          
          {/* Main Integrated Header Typography Group */}
          <div className="px-8 mb-8 text-center">
            <h2 className="text-2xl font-black text-foreground tracking-tight sm:text-3xl transition-colors duration-300 ">
              Welcome <span className="text-[#8b7eff]">Back</span>
            </h2>
            <p className="text-muted transition-colors duration-300 text-xs sm:text-sm font-medium mt-2.5">
              Sign in to continue your learning journey
            </p>
          </div>

          {/* Social OAuth Integration Interface Link */}
          <div className="px-8 space-y-6">
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center gap-3 border border-card-border transition-colors duration-300 bg-card-bg/50 transition-colors duration-300 hover:bg-foreground/5 transition-colors duration-300 text-primary transition-colors duration-300 font-bold py-3.5 rounded-xl text-xs sm:text-sm transition-all duration-200 cursor-pointer"
            >
              <FcGoogle className="text-lg shrink-0" />
              <span>Continue with Google</span>
            </button>

            {/* Symmetric Midsection Text Separator Module */}
            <div className="relative flex items-center justify-center py-2">
              <div className="border-t border-card-border transition-colors duration-300 w-full"></div>
              <span className="absolute bg-card-bg transition-colors duration-300 px-3 py-0.5 rounded-md border border-card-border transition-colors duration-300 text-[9px] font-black tracking-widest text-muted transition-colors duration-300 uppercase">
                OR
              </span>
            </div>
          </div>

          {/* Form Action Handling Module Interface Section */}
          <form onSubmit={onSubmit} className="px-8 space-y-5">
            
            {/* Input Block: Electronic Mailing Address Field */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-secondary transition-colors duration-300 flex items-center gap-2 tracking-wide">
                <Mail size={13} className="text-indigo-400" />
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                className="w-full px-4 py-3.5 rounded-xl bg-card-bg/60 transition-colors duration-300 border border-card-border transition-colors duration-300 text-sm text-foreground placeholder:text-slate-600 focus:border-indigo-500 focus:bg-background transition-colors duration-300 outline-none transition-all duration-200 transition-colors duration-300 "
                required
              />
            </div>

            {/* Input Block: Secure Cipher Cryptographic Password Field */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-secondary transition-colors duration-300 flex items-center gap-2 tracking-wide">
                  <Lock size={13} className="text-indigo-400" />
                  Password
                </label>
                <Link href="/forgot-password" className="text-[11px] font-bold text-muted transition-colors duration-300 hover:text-[#8b7eff] transition-colors duration-300 ">
                  Forgot?
                </Link>
              </div>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-3.5 pr-10 rounded-xl bg-card-bg/60 transition-colors duration-300 border border-card-border transition-colors duration-300 text-sm text-foreground placeholder:text-slate-600 focus:border-indigo-500 focus:bg-background transition-colors duration-300 outline-none transition-all duration-200 transition-colors duration-300 "
                  required
                />
                <button type="button" className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted transition-colors duration-300 hover:text-secondary transition-colors duration-300 ">
                  <Eye size={14} />
                </button>
              </div>
            </div>

            {/* Primary Navigation / Operational Submission CTA Triggers Section */}
            <div className="pt-3 pb-2">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#5643ff] to-[#6d5dfc] text-white font-bold py-3.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer border-none outline-none tracking-wide shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/30 hover:brightness-110 active:scale-[0.99]"
              >
                <LogIn size={14} />
                <span>Sign In to Account</span>
              </button>
            </div>
          </form>

          {/* Bottom Interface Redirection Route Navigation Strip */}
          <div className="mt-6 px-8 py-4 border-t border-card-border transition-colors duration-300 bg-card-bg/40 transition-colors duration-300 text-center">
            <p className="text-xs sm:text-sm text-muted transition-colors duration-300 font-medium">
              Don&apos;t have an account yet?{" "}
              <Link href="/signup" className="text-[#8b7eff] font-bold tracking-wide inline-flex items-center gap-0.5 group hover:underline">
                Register
                <ArrowRight size={12} className="text-[#8b7eff] transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </p>
          </div>
        </div>

        {/* Global Structural Protection Badge / Validation Seal Element */}
        <p className="text-center text-[10px] font-bold tracking-wider uppercase text-muted transition-colors duration-300 mt-6 flex items-center justify-center gap-2 select-none">
          <ShieldCheck size={13} className="text-emerald-500 shrink-0" />
          <span>Secured by industry-leading encryption parameters</span>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;