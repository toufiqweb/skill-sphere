import Link from "next/link";
import { Lock, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Forbidden | VectraLearn",
  description: "You do not have permission to view this page.",
};

export default function ForbiddenPage() {
  return (
    <div className="min-h-screen flex items-center justify-center hero-bg px-6 py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-red-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-[var(--brand-ocean)]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="glass-card relative z-10 max-w-lg w-full rounded-3xl p-10 text-center border-gradient">
        <div className="mx-auto w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mb-6 border border-red-500/20">
          <Lock className="w-10 h-10 text-red-500" />
        </div>
        
        <h1 className="section-title mb-4">Access Forbidden</h1>
        
        <p className="section-desc mb-8">
          You do not have the required permissions to access this page. This area is restricted to authorized roles only.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/dashboard" className="flex items-center justify-center gap-2 bg-main-gradient text-white px-8 py-3 rounded-full font-bold text-lg shadow-glow hover:-translate-y-1 transition-transform">
            <ArrowLeft className="w-5 h-5" />
            Go to Dashboard
          </Link>
          <Link href="/" className="flex items-center justify-center px-8 py-3 rounded-full font-bold text-lg bg-card-bg text-primary border border-card-border hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
