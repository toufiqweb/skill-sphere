"use client";

import { motion } from "framer-motion";
import {
  Users,
  BookOpen,
  GraduationCap,
  Star,
  TrendingUp,
} from "lucide-react";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const stats = [
  {
    icon: Users,
    value: "200K+",
    label: "Happy Students",
  },
  {
    icon: BookOpen,
    value: "500+",
    label: "Online Courses",
  },
  {
    icon: GraduationCap,
    value: "200+",
    label: "Expert Instructors",
  },
  {
    icon: Star,
    value: "98%",
    label: "Satisfaction Rate",
  },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-24">
      {/* Full Section Grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-violet-600/15 blur-[120px]" />
        <div className="absolute right-0 bottom-20 h-72 w-72 rounded-full bg-blue-600/15 blur-[120px]" />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/10 blur-[160px]" />
      </div>

      <div className="relative z-10 mx-auto container px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center lg:mb-14"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-xs font-medium text-violet-400 sm:text-sm">
            <TrendingUp size={16} />
            Growing Every Day
          </div>

          <h2 className="text-3xl font-bold text-primary sm:text-4xl lg:text-6xl">
            Trusted By Learners
            <span className="text-main-gradient"> Worldwide</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted sm:text-base">
            Thousands of students are building successful careers through
            SkillSphere&apos;s industry-focused courses and expert mentorship.
          </p>
        </motion.div>

        {/* Stats Card */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] backdrop-blur-xl sm:rounded-[32px]"
        >
          {/* Card Grid */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative grid grid-cols-2 md:grid-cols-4"
          >
            {stats.map(({ icon: Icon, value, label }, index) => (
              <motion.div
                key={label}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className={`
                  group relative px-4 py-8 text-center
                  sm:px-6 sm:py-10
                  lg:px-8 lg:py-12
                  
                  ${
                    index !== stats.length - 1
                      ? "md:border-r md:border-white/10"
                      : ""
                  }
                  
                  ${
                    index < 2
                      ? "border-b border-white/10 md:border-b-0"
                      : ""
                  }
                `}
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 to-blue-500/5" />
                </div>

                {/* Icon */}
                <div className="relative mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 group-hover:scale-110 group-hover:border-violet-500/40 sm:mb-5 sm:h-14 sm:w-14 lg:h-16 lg:w-16">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/20 to-blue-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <Icon
                    size={22}
                    className="relative z-10 text-violet-400 sm:size-6 lg:size-7"
                  />
                </div>

                {/* Number */}
                <h3 className="text-main-gradient text-2xl font-black sm:text-4xl lg:text-5xl">
                  {value}
                </h3>

                {/* Label */}
                <p className="mt-2 text-xs font-medium tracking-wide text-muted sm:mt-3 sm:text-sm">
                  {label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}