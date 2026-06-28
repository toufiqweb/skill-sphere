"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import {
  Star,
  ArrowRight,
  Bookmark,
  Calendar,
  MapPin,
  Clock,
} from "lucide-react";

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
  // We need exactly 3 courses for this layout
  const latestCourses = [...courses].reverse().slice(0, 3);

  return (
    <section className="relative overflow-hidden section-soft py-16 lg:py-24 transition-colors duration-300">
      {/* Background Soft Glow Layer */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-12 h-[300px] w-[300px] rounded-full bg-brand-mint/5 blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="mb-12 flex flex-col justify-between items-start md:flex-row md:items-center gap-6">
          <div className="space-y-1 max-w-2xl">
            <h2 className="section-title mb-2">New Releases</h2>
            <p className="section-desc">
              Discover our newest courses and stay ahead of the curve.
            </p>
          </div>
          <Link
            href="/courses"
            className="group inline-flex items-center gap-2 rounded-xl bg-card-bg border border-card-border px-5 py-2.5 text-sm font-bold text-foreground transition-all duration-300 hover:border-brand-mint hover:shadow-glow"
          >
            <span>View All Courses</span>
            <ArrowRight
              size={16}
              className="text-brand-mint transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* 3-Card Masonry Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:grid-rows-2"
        >
          {latestCourses.map((course, idx) => {
            const isLarge = idx === 0;

            return (
              <motion.div
                key={course.id || course._id || idx}
                variants={cardVariants}
                className={`glass-card p-3 sm:p-4 rounded-3xl group flex ${
                  isLarge
                    ? "flex-col lg:row-span-2"
                    : "flex-col sm:flex-row lg:row-span-1 items-center"
                } gap-4 sm:gap-6 hover:-translate-y-1 transition-transform duration-300`}
              >
                {/* Image Section */}
                <div
                  className={`relative rounded-2xl overflow-hidden shrink-0 bg-muted/20 ${
                    isLarge
                      ? "w-full h-56 sm:h-64"
                      : "w-full sm:w-[200px] h-48 sm:h-[180px]"
                  }`}
                >
                  <Image
                    src={course.image || "/placeholder-course.png"}
                    alt={course.title || "Course Image"}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Bookmark Button */}
                  <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-md p-2 rounded-xl cursor-pointer hover:bg-white/40 transition-colors">
                    <Bookmark size={16} className="text-white" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col flex-1 justify-between w-full h-full py-1">
                  {/* Top: Title, Subtitle & Rating */}
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-lg font-black text-foreground leading-tight mb-1">
                        {course.title || "House Painting (Eco)"}
                      </h3>
                      <p className="text-xs font-medium text-muted">
                        {course.category || "Design · Maintenance"}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 bg-amber-500/10 px-2 py-1 rounded-lg shrink-0">
                      <Star
                        size={12}
                        className="fill-amber-400 text-amber-400"
                      />
                      <span className="text-xs font-bold text-foreground">
                        {course.rating || "4.6"}/5
                      </span>
                    </div>
                  </div>

                  {/* Middle: Meta Info List */}
                  <div className="space-y-2 mb-6 sm:mb-4 flex-1">
                    <div className="flex items-center gap-2 text-xs font-medium text-muted">
                      <Calendar
                        size={14}
                        className="text-brand-mint shrink-0"
                      />
                      <span>
                        {course.createdAt
                          ? new Date(course.createdAt).toLocaleDateString()
                          : "Joined Apr 21, 2024"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium text-muted">
                      <MapPin size={14} className="text-brand-mint shrink-0" />
                      <span>London</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium text-muted">
                      <Clock size={14} className="text-brand-mint shrink-0" />
                      <span>
                        {course.duration || "Sun-Fri 9:30 AM - 11 PM"}
                      </span>
                    </div>
                  </div>

                  {/* Bottom: Price & Button */}
                  <div className="flex items-end justify-between border-t border-card-border pt-4">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-muted uppercase tracking-wider mb-0.5">
                        Start from
                      </span>
                      <div className="flex items-baseline gap-1 text-foreground">
                        <span className="text-xl sm:text-2xl font-black">
                          {course.price ? `$${course.price}` : "7"}
                        </span>
                        <span className="text-xs font-bold">$/H</span>
                      </div>
                    </div>

                    <Link
                      href={`/courses/${course.id || course._id || ""}`}
                      className="bg-main-gradient shadow-glow text-white text-xs font-bold px-5 py-2.5 rounded-xl hover:scale-105 transition-transform"
                    >
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default NewReleases;
