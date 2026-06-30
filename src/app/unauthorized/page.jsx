import Link from "next/link";
import { ShieldAlert, LogIn } from "lucide-react";

export const metadata = {
  title: "Unauthorized | VectraLearn",
  description: "You must be logged in to view this page.",
};

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center hero-bg px-6 py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[var(--brand-cyan)]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--brand-mint)]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="glass-card relative z-10 max-w-lg w-full rounded-3xl p-10 text-center border-gradient">
        <div className="mx-auto w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mb-6">
          <ShieldAlert className="w-10 h-10 text-red-500" />
        </div>
        
        <h1 className="section-title mb-4">Unauthorized Access</h1>
        
        <p className="section-desc mb-8">
          You must be logged in to view this content. Please sign in to your account to continue your learning journey.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signin" className="flex items-center justify-center gap-2 bg-main-gradient text-white px-8 py-3 rounded-full font-bold text-lg shadow-glow hover:-translate-y-1 transition-transform">
            <LogIn className="w-5 h-5" />
            Sign In Now
          </Link>
          <Link href="/" className="flex items-center justify-center px-8 py-3 rounded-full font-bold text-lg bg-card-bg text-primary border border-card-border hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
