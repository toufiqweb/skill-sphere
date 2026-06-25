"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { Clock3, BookOpen, Star, ArrowRight } from "lucide-react";

import { IoSparklesSharp } from "react-icons/io5";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const NewReleases = ({ courses = [] }) => {
  // Pulling the top 4 latest items to build out the template matrix
  const latestCourses = [...courses].reverse().slice(0, 4);

  return (
    <section className="relative overflow-hidden bg-background transition-colors duration-300 py-20 lg:py-24">
      {/* Background Soft Glow Layer */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-12 h-[300px] w-[300px] rounded-full bg-violet-600/10 blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Block matching ChatGPT Image May 31, 2026, 04_46_30 PM.png */}
        <div className="mb-12 flex flex-col justify-between items-start md:flex-row md:items-center gap-6">
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-card-border transition-colors duration-300 bg-card-bg/60 transition-colors duration-300 text-violet-400 shadow-[0_0_20px_rgba(86,67,255,0.15)]">
              <IoSparklesSharp size={22} className="text-violet-400" />
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-violet-400 block">
                FRESH CONTENT
              </span>
              <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl transition-colors duration-300 ">
                New{" "}
                <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                  Releases
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-muted transition-colors duration-300 font-medium">
                Discover our newest courses and stay ahead of the curve.
              </p>
            </div>
          </div>

          <Link
            href="/courses"
            className="group inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-card-bg/40 transition-colors duration-300 px-5 py-2 text-xs font-semibold text-primary transition-colors duration-300 backdrop-blur-md transition-all duration-300 hover:border-violet-500 hover:text-foreground hover:shadow-[0_0_15px_rgba(86,67,255,0.2)] transition-colors duration-300 "
          >
            <span>View All Courses</span>
            <ArrowRight
              size={13}
              className="text-violet-400 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* 2-Column Responsive Card Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 lg:grid-cols-2"
        >
          {latestCourses.map((course) => (
            <motion.div
              key={course.id || course._id}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-3xl border border-card-border transition-colors duration-300 bg-card-bg/60 transition-colors duration-300 transition-all duration-300 hover:border-violet-500/30 hover:bg-card-bg/80 transition-colors duration-300 "
            >
              <div className="flex flex-col sm:flex-row h-full">
                {/* Left Side Thumbnail Image Layout */}
                <div className="relative h-56 sm:h-auto sm:w-[42%] min-h-[240px] overflow-hidden shrink-0">
                  <Image
                    src={course.image || "/placeholder-course.png"}
                    alt={course.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  {/* Overlay Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-card-bg/40 transition-colors duration-300 " />

                  {/* Top-Left Absolute Position Floating Category Badge */}
                  <div className="absolute left-4 top-4">
                    <span className="rounded-xl border border-violet-400/20 bg-[#5643ff]/20 px-3 py-1 text-[10px] font-bold tracking-wide text-violet-200 backdrop-blur-md">
                      {course.category || "Development"}
                    </span>
                  </div>
                </div>

                {/* Right Side Typography & Stats Body */}
                <div className="flex flex-1 flex-col p-6 justify-between space-y-4">
                  <div className="space-y-2.5">
                    {/* Course Global Scoring Flag */}
                    <div className="flex items-center gap-1.5 text-[11px] font-medium text-muted transition-colors duration-300 ">
                      <Star
                        size={12}
                        className="fill-amber-400 text-amber-400"
                      />
                      <span className="font-bold text-primary transition-colors duration-300 ">
                        {course.rating || "4.8"}
                      </span>
                      <span className="text-muted transition-colors duration-300 ">Course Rating</span>
                    </div>

                    {/* Content Title Header */}
                    <h3 className="text-lg font-black tracking-tight text-foreground leading-snug line-clamp-2 transition-colors duration-300 ">
                      {course.title}
                    </h3>

                    {/* Excerpt Body Block */}
                    <p className="text-xs font-medium leading-relaxed text-muted transition-colors duration-300 line-clamp-2">
                      {course.description ||
                        "Master these concepts, strategies, and industry standard execution practices."}
                    </p>

                    {/* Horizontally Arranged Micro Metadata Tag Pills */}
                    <div className="flex flex-wrap gap-2 pt-1.5">
                      <div className="flex items-center gap-1.5 rounded-lg border border-card-border transition-colors duration-300 bg-card-bg/60 transition-colors duration-300 px-3 py-1.5">
                        <BookOpen size={12} className="text-violet-400" />
                        <span className="text-[10px] font-bold text-secondary transition-colors duration-300 tracking-wide">
                          {course.lessons || 20} Lessons
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 rounded-lg border border-card-border transition-colors duration-300 bg-card-bg/60 transition-colors duration-300 px-3 py-1.5">
                        <Clock3 size={12} className="text-violet-400" />
                        <span className="text-[10px] font-bold text-secondary transition-colors duration-300 tracking-wide">
                          {course.duration || "12 hours"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Actions / CTA Trigger Strip */}
                  <div className="pt-2">
                    <Link
                      href={`/courses/${course.id || course._id}`}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#5643ff] px-5 py-2.5 text-xs font-bold text-white transition-all duration-300 hover:bg-[#4332eb] hover:shadow-[0_4px_20px_rgba(86,67,255,0.3)]"
                    >
                      <span>View Details</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default NewReleases;
