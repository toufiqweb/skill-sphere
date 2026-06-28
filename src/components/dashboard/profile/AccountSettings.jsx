import { motion } from "framer-motion";
import { Settings, Mail, ShieldCheck } from "lucide-react";

export default function AccountSettings() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="glass-card rounded-[28px] p-6 sm:p-8"
    >
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mr-4">
          <Settings className="text-purple-500" size={20} />
        </div>
        <div>
          <h2 className="text-xl font-black text-foreground">
            Account Settings Dashboard
          </h2>
          <p className="text-xs font-medium text-muted">
            Manage system preferences
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 border border-card-border bg-card-bg/40 rounded-2xl flex items-start gap-4 hover:border-brand-ocean/50 hover:bg-brand-ocean/5 transition-all cursor-pointer group">
          <div className="p-3 bg-foreground/5 rounded-xl group-hover:bg-brand-ocean/20 transition-colors">
            <Mail
              className="text-muted group-hover:text-brand-ocean"
              size={20}
            />
          </div>
          <div>
            <h4 className="text-sm font-bold text-foreground">
              Email Preferences
            </h4>
            <p className="text-xs font-medium text-muted mt-1">
              Manage notifications and alerts
            </p>
          </div>
        </div>

        <div className="p-4 border border-card-border bg-card-bg/40 rounded-2xl flex items-start gap-4 hover:border-brand-mint/50 hover:bg-brand-mint/5 transition-all cursor-pointer group">
          <div className="p-3 bg-foreground/5 rounded-xl group-hover:bg-brand-mint/20 transition-colors">
            <ShieldCheck
              className="text-muted group-hover:text-brand-mint"
              size={20}
            />
          </div>
          <div>
            <h4 className="text-sm font-bold text-foreground">
              Security & Privacy
            </h4>
            <p className="text-xs font-medium text-muted mt-1">
              Password, 2FA, and sessions
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
