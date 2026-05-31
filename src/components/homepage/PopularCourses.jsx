"use client";

import Link from "next/link";
import React, { useMemo } from "react";
import CourseCard from "../ui/CourseCard";

const PopularCourses = ({ courses = [] }) => {
  const topCourses = useMemo(() => {
    return [...courses]
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 8);
  }, [courses]);

  return (
    <section className="relative overflow-hidden bg-[#060419] py-16 lg:py-20">
      
      {/* Background Section Glow Accent */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 h-[400px] w-[400px] rounded-full bg-violet-900/10 blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Stack Layout matching reference asset */}
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-violet-400 block">
              BROWSE TOP COURSES
            </span>

            <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
              Popular Courses
            </h2>

            <p className="text-xs text-slate-400 font-medium">
              Discover our most in-demand courses across various fields.
            </p>
          </div>

          {/* Clean Premium View All Link Button */}
          <Link
            href="/courses"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-semibold text-slate-300 transition-all duration-200 hover:border-white/20 hover:bg-white/10 hover:text-white"
          >
            View All Courses
          </Link>
        </div>

        {/* Dynamic Multi-Row Core Courses Grid Layout */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {topCourses.map((course) => (
            <div
              key={course.id}
              className="h-full transition-transform duration-300 hover:-translate-y-1.5"
            >
              <CourseCard course={course} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PopularCourses;