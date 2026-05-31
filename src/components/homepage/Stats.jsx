"use client";

import { motion } from "framer-motion";
import {
  Users,
  Award,
  BookOpen,
  Smile,
} from "lucide-react";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const stats = [
  {
    icon: Users,
    value: "200K+",
    label: "Happy Students",
    color: "from-blue-500/20 to-indigo-500/20",
    iconColor: "text-blue-400",
  },
  {
    icon: Award,
    value: "500+",
    label: "Expert Instructors",
    color: "from-purple-500/20 to-violet-500/20",
    iconColor: "text-purple-400",
  },
  {
    icon: BookOpen,
    value: "200+",
    label: "Top Quality Courses",
    color: "from-violet-500/20 to-fuchsia-500/20",
    iconColor: "text-violet-400",
  },
  {
    icon: Smile,
    value: "98%",
    label: "Satisfaction Rate",
    color: "from-cyan-500/20 to-blue-500/20",
    iconColor: "text-cyan-400",
  },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-[#060419] py-16">
      
      {/* Background Decorative Ambient Spotlights
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 h-[450px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/5 blur-[120px]" />
      </div> */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Branding Row Stack */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl">
            Trusted By Learners{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Worldwide
            </span>
          </h2>
          <p className="mx-auto mt-2.5 max-w-md text-xs sm:text-sm text-slate-400 font-medium">
            Join thousands of learners who are transforming their lives with new skills.
          </p>
        </div>

        {/* Custom Isolated Floating Cards Grid Container */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 gap-4 md:grid-cols-4 sm:gap-6"
        >
          {stats.map(({ icon: Icon, value, label, color, iconColor }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="group relative rounded-2xl border border-white/5 bg-[#0b0826]/50 p-6 text-center backdrop-blur-xl transition-all duration-300 hover:border-white/10 hover:bg-[#0f0b34]/70 shadow-lg"
            >
              {/* Subtle Inner Dynamic Glow Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.01] to-transparent pointer-events-none" />

              {/* Icon Container Capsule */}
              <div className={`relative mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/5 bg-white/5 backdrop-blur-md transition-all duration-300 group-hover:scale-105 group-hover:border-white/10`}>
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${color} opacity-40`} />
                <Icon
                  size={18}
                  className={`relative z-10 ${iconColor}`}
                />
              </div>

              {/* Numerical Presentation Frame */}
              <h3 className="bg-gradient-to-r from-white via-slate-100 to-slate-200 bg-clip-text text-2xl font-black tracking-tight text-transparent sm:text-3xl lg:text-4xl">
                {value}
              </h3>

              {/* Categorical Secondary Descriptive Copy */}
              <p className="mt-1 text-[11px] font-semibold tracking-wide text-slate-400 sm:text-xs">
                {label}
              </p>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}