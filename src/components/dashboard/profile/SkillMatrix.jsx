import { motion } from "framer-motion";
import { Code } from "lucide-react";

export default function SkillMatrix({ user }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="glass-card rounded-[28px] p-6 sm:p-8"
    >
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 rounded-xl bg-brand-ocean/10 border border-brand-ocean/20 flex items-center justify-center mr-4">
          <Code className="text-brand-ocean" size={20} />
        </div>
        <div>
          <h2 className="text-xl font-black text-foreground">
            Expert Skill Matrix
          </h2>
          <p className="text-xs font-medium text-muted">
            Technologies and frameworks
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        {user?.skills?.length > 0 ? (
          user.skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-foreground/5 hover:bg-brand-ocean/10 text-foreground hover:text-brand-ocean text-xs font-bold uppercase tracking-wider rounded-xl border border-card-border transition-colors cursor-default"
            >
              {skill}
            </span>
          ))
        ) : (
          <div className="w-full p-8 border border-dashed border-card-border rounded-2xl flex flex-col items-center justify-center">
            <Code size={32} className="text-muted/50 mb-2" />
            <span className="text-sm font-bold text-muted">
              No skills added yet.
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
