import { motion } from "framer-motion";
import { Layout, ExternalLink, Code } from "lucide-react";

export default function PortfolioProjects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="glass-card rounded-[28px] p-6 sm:p-8"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center mr-4">
            <Layout className="text-brand-cyan" size={20} />
          </div>
          <div>
            <h2 className="text-xl font-black text-foreground">
              Portfolio Projects
            </h2>
            <p className="text-xs font-medium text-muted">
              Showcase your best work (Coming Soon)
            </p>
          </div>
        </div>
        <button className="text-xs font-bold text-brand-cyan hover:text-brand-ocean transition-colors flex items-center gap-1">
          Add Project <ExternalLink size={12} />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Mock Project 1 */}
        <div className="group rounded-2xl border border-card-border overflow-hidden bg-card-bg/40 hover:border-foreground/20 transition-all cursor-pointer">
          <div className="h-32 bg-foreground/5 relative overflow-hidden flex items-center justify-center">
            <Layout
              size={32}
              className="text-muted/30 group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="p-4">
            <h4 className="text-sm font-bold text-foreground group-hover:text-brand-cyan transition-colors">
              E-Commerce Platform
            </h4>
            <p className="text-xs font-medium text-muted mt-1 line-clamp-2">
              A full-stack Next.js commerce template built with Tailwind
              and Stripe.
            </p>
          </div>
        </div>

        {/* Mock Project 2 */}
        <div className="group rounded-2xl border border-card-border overflow-hidden bg-card-bg/40 hover:border-foreground/20 transition-all cursor-pointer">
          <div className="h-32 bg-foreground/5 relative overflow-hidden flex items-center justify-center">
            <Code
              size={32}
              className="text-muted/30 group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="p-4">
            <h4 className="text-sm font-bold text-foreground group-hover:text-brand-cyan transition-colors">
              Realtime Chat App
            </h4>
            <p className="text-xs font-medium text-muted mt-1 line-clamp-2">
              Socket.io powered messaging application with Redis caching
              layer.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
