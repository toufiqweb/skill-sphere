"use client";

import { motion } from "framer-motion";
import {
  Award,
  Clock,
  FileCheck,
  Play,
  ArrowRight,
  GraduationCap,
  Users2,
  Smile,
} from "lucide-react";
import bannerImage from "@/assets/download.jpg";
import Link from "next/link";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
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
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const float = (delay = 0, distance = 8) => ({
  y: [-distance, distance, -distance],
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
    delay,
  },
});

export default function Banner() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#060419] px-4 py-16 flex items-center">
      {/* Dynamic Background Glows matching reference asset color weight */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-violet-900/20 blur-[140px]" />
        <div className="absolute bottom-[10%] right-[-5%] h-[500px] w-[500px] rounded-full bg-indigo-900/20 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <div className="grid w-full items-center gap-12 lg:grid-cols-12">
          
          {/* LEFT SIDE: Content Column */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start lg:col-span-5"
          >
            {/* Top Micro Label */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-1.5 rounded-full bg-violet-500/10 px-3.5 py-1 border border-violet-500/20">
              <span className="text-[11px] font-bold uppercase tracking-wider text-violet-400">
                #1 Online Learning Platform
              </span>
            </motion.div>

            {/* Typography Heading Structure */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl xl:text-6xl"
            >
              Upgrade Your
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
                Skills Today
              </span>
            </motion.h1>

            {/* Paragraph Subtext */}
            <motion.p
              variants={fadeUp}
              className="max-w-md text-sm sm:text-base leading-relaxed text-slate-400"
            >
              Learn from expert instructors and advance your career with our interactive courses and hands-on projects.
            </motion.p>

            {/* Bullet Perks Horizontal Row */}
            <motion.div 
              variants={fadeUp} 
              className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2 text-xs text-slate-300 font-medium pt-2"
            >
              <div className="flex items-center gap-1.5 bg-white/5 border border-white/5 px-3 py-1.5 rounded-xl">
                <Award size={14} className="text-violet-400" />
                <span>Expert Instructors</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/5 border border-white/5 px-3 py-1.5 rounded-xl">
                <Clock size={14} className="text-violet-400" />
                <span>Lifetime Access</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/5 border border-white/5 px-3 py-1.5 rounded-xl">
                <FileCheck size={14} className="text-violet-400" />
                <span>Certificate Included</span>
              </div>
            </motion.div>

            {/* Primary & Secondary Action Layout */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 hover:brightness-110 active:scale-98 transition-all duration-200"
              >
                Explore Courses
                <ArrowRight size={14} />
              </Link>

              <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md hover:bg-white/10 transition-all duration-200">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-slate-950">
                  <Play size={10} fill="currentColor" className="ml-0.5" />
                </div>
                How It Works
              </button>
            </motion.div>

            {/* Social Social Proof Reviews Badge */}
            <motion.div
              variants={fadeUp}
              className="flex items-center justify-center lg:justify-start gap-3 pt-2"
            >
              <div className="flex -space-x-2.5">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-7 w-7 rounded-full border-2 border-[#060419] bg-gradient-to-tr from-violet-600 to-indigo-400 shadow-inner"
                  />
                ))}
              </div>
              <p className="text-xs text-slate-400 font-medium">
                <span className="text-violet-400 font-bold">4.8/5</span> from{" "}
                <span className="text-white font-semibold">10K+</span> learners worldwide
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: Interactive Media Frame with Absolute Badges */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="relative w-full lg:col-span-7 flex justify-center lg:justify-end"
          >
            {/* Ambient Background Container Ring System */}
            <div className="relative w-full max-w-[580px] aspect-[4/3] rounded-3xl border border-white/5 bg-[#0b0826]/40 p-4 shadow-2xl backdrop-blur-sm">
              
              {/* Internal Framed Core Hero Image Asset */}
              <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 shadow-inner">
                <Image
                  src={bannerImage}
                  alt="Online learning illustration"
                  priority
                  fill
                  sizes="(max-w-7xl) 50vw, 100vw"
                  className="object-cover object-center brightness-95 contrast-105"
                />
                {/* Clean vignette matching darkness profile */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060419]/40 via-transparent to-transparent" />
              </div>

              {/* Floating Badge 1: Expert Courses (Top Left) */}
              <motion.div
                animate={float(0, 6)}
                className="absolute -top-3 -left-3 sm:-left-6 z-20 flex items-center gap-2 rounded-xl border border-white/10 bg-[#0d0a2d]/90 p-2.5 pr-4 backdrop-blur-md shadow-xl"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-600/20 text-violet-400">
                  <GraduationCap size={16} />
                </div>
                <div>
                  <div className="text-xs font-black text-white leading-none">250+</div>
                  <div className="text-[9px] text-slate-400 font-medium mt-0.5 whitespace-nowrap">Expert Courses</div>
                </div>
              </motion.div>

              {/* Floating Badge 2: Expert Instructors (Bottom Left) */}
              <motion.div
                animate={float(1.5, 5)}
                className="absolute -bottom-3 left-4 z-20 flex items-center gap-2 rounded-xl border border-white/10 bg-[#0d0a2d]/90 p-2.5 pr-4 backdrop-blur-md shadow-xl"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600/20 text-indigo-400">
                  <Users2 size={16} />
                </div>
                <div>
                  <div className="text-xs font-black text-white leading-none">500+</div>
                  <div className="text-[9px] text-slate-400 font-medium mt-0.5 whitespace-nowrap">Expert Instructors</div>
                </div>
              </motion.div>

              {/* Floating Badge 3: Satisfaction Rate (Right Side Center) */}
              <motion.div
                animate={float(0.8, 7)}
                className="absolute top-1/2 -right-3 sm:-right-6 -translate-y-1/2 z-20 flex items-center gap-2 rounded-xl border border-white/10 bg-[#0d0a2d]/90 p-2.5 pr-4 backdrop-blur-md shadow-xl"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-600/20 text-cyan-400">
                  <Smile size={16} />
                </div>
                <div>
                  <div className="text-xs font-black text-white leading-none">98%</div>
                  <div className="text-[9px] text-slate-400 font-medium mt-0.5 whitespace-nowrap">Satisfaction Rate</div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}