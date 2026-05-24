"use client";
import { motion } from "framer-motion";
import {
  Sparkles,
  PlayCircle,
  Users,
  UserCheck,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import bannerImage from "@/assets/download.jpg";
import Link from "next/link";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.05,
      staggerChildren: 0.08,
    },
  },
};
const float = (delay = 0, distance = 12) => ({
  y: [-distance, distance, -distance],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
    delay,
  },
});

function StatCard({ icon, value, label, className = "", delay = 0 }) {
  return (
    <motion.div
      animate={float(delay)}
      whileHover={{ scale: 1.06, y: -6 }}
      className={`absolute z-20 rounded-2xl border border-(--glass-border) bg-(--glass-bg) p-4 backdrop-blur-xl shadow-(--shadow-card) ${className}`}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-(--brand-indigo) to-(--brand-purple) shadow-lg shadow-(--brand-purple)/30">
          {icon}
        </div>
        <div>
          <div className="text-lg font-bold text-foreground leading-tight">
            {value}
          </div>
          <div className="text-xs text-foreground/60 whitespace-nowrap">
            {label}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Banner() {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden pt-10 xl:pt-0"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Mesh gradient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-[var(--brand-purple)]/30 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full bg-[var(--brand-blue)]/25 blur-[140px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-[var(--brand-indigo)]/30 blur-[100px]"
        />
      </div>

      {/* Grid noise overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-screen container items-center px-6 py-20 lg:px-10">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <motion.div variants={fadeUp}>
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] px-4 py-1.5 backdrop-blur-xl">
                <Sparkles className="h-3.5 w-3.5 text-[var(--brand-purple)]" />
                <span className="text-xs font-medium tracking-wide text-foreground/80">
                  Online Learning Platform
                </span>
              </div>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
            >
              Upgrade Your
              <br />
              <span
                className="inline-block bg-clip-text text-transparent"
                style={{
                  backgroundImage: "var(--gradient-text)",
                  filter: "drop-shadow(0 0 30px oklch(0.65 0.24 305 / 0.4))",
                }}
              >
                Skills Today
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="max-w-lg text-lg leading-relaxed text-foreground/65 mx-auto lg:mx-0"
            >
              Learn from industry experts and advance your career with our
              high-quality, hands-on online courses crafted for ambitious
              learners.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <Link
                href="/"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-(--shadow-glow) transition-all hover:scale-[1.03] hover:shadow-[0_25px_70px_-15px_oklch(0.60_0.25_290/0.7)]"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                <span className="relative z-10">Explore Courses</span>
                <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
                <span className="absolute inset-0 bg-white/0 transition-colors group-hover:bg-white/10" />
              </Link>

              <button className="group inline-flex items-center gap-2.5 rounded-full border border-[var(--glass-border)] bg-(--glass-bg) px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur-xl transition-all hover:border-white/25 hover:bg-white/10">
                <PlayCircle className="h-5 w-5 text-[var(--brand-purple)] transition-transform group-hover:scale-110" />
                How It Works
              </button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex items-center justify-center lg:justify-start gap-6 pt-4"
            >
              <div className="flex -space-x-2">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full border-2 border-background bg-gradient-to-br from-[var(--brand-indigo)] to-[var(--brand-purple)]"
                  />
                ))}
              </div>
              <p className="text-sm text-foreground/60">
                <span className="font-semibold text-foreground">20,000+</span>{" "}
                learners growing daily
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative mx-auto aspect-square w-full max-w-[560px]"
          >
            {/* Glow */}
            <div className="absolute inset-8 rounded-[2rem] bg-gradient-to-br from-[var(--brand-purple)]/40 via-[var(--brand-indigo)]/30 to-[var(--brand-blue)]/40 blur-3xl" />

            {/* Animated rings
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-white/10"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-6 rounded-full border border-white/5"
            /> */}

            {/* Image card */}
            <motion.div
              animate={float(0, 8)}
              className="relative h-full w-full overflow-hidden rounded-[2rem] border border-[var(--glass-border)] bg-[var(--glass-bg)] p-2 backdrop-blur-xl shadow-2xl"
            >
              <div className="relative h-full w-full overflow-hidden rounded-[1.7rem]">
                <Image
                  src={bannerImage}
                  alt="Online learning illustration"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
            </motion.div>

            <StatCard
              icon={<Users className="h-5 w-5 text-white" />}
              value="20K+"
              label="Active Students"
              className="-left-4 top-8 sm:-left-10"
              delay={0}
            />
            <StatCard
              icon={<UserCheck className="h-5 w-5 text-white" />}
              value="200+"
              label="Expert Instructors"
              className="-right-2 top-1/2 sm:-right-8"
              delay={1.5}
            />
            <StatCard
              icon={<BookOpen className="h-5 w-5 text-white" />}
              value="500+"
              label="Online Courses"
              className="bottom-6 left-4 sm:left-0"
              delay={3}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
