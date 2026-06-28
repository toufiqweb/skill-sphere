"use client";

import Link from "next/link";
import { useMemo } from "react";
import CourseCard from "../ui/CourseCard";

const PopularCourses = ({ courses = [] }) => {
  const topCourses = useMemo(() => {
    return [...courses].sort((a, b) => b.rating - a.rating).slice(0, 6);
  }, [courses]);

  return (
    <section className="relative overflow-hidden bg-background transition-colors duration-300 py-16 lg:py-20">
      {/* Background Section Glow Accent */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 h-[400px] w-[400px] rounded-full bg-brand-ocean/10 blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Stack Layout matching reference asset */}
        <div className="mb-10 flex flex-col items-center justify-center text-center gap-4 ">
          <div className="space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-ocean block">
              BROWSE TOP COURSES
            </span>

            <h2 className="section-title">
              Popular Courses
            </h2>

            <p className="section-desc">
              Discover our most in-demand courses across various fields.
            </p>
          </div>
        </div>

        {/* Dynamic Multi-Row Core Courses Grid Layout */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {topCourses.map((course) => (
            <div
              key={course.id || course._id}
              className="h-full transition-transform duration-300 hover:-translate-y-1.5"
            >
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-12 flex justify-center">
        {/* Clean Premium View All Link Button */}
        <Link
          href="/courses"
          className="inline-flex items-center justify-center rounded-xl bg-main-gradient px-8 py-3 text-sm font-bold text-white shadow-glow transition-all duration-300 hover:scale-105"
        >
          View All Courses
        </Link>
      </div>
    </section>
  );
};

export default PopularCourses;
