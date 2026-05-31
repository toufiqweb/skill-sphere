"use client";

import React, { useContext, useState, useEffect } from "react";
import CourseCard from "../ui/CourseCard";
import { CourseContext } from "@/lib/context/CourseProvider";
import SearchCourses from "./SearchCourses";
import { Sparkles, ArrowLeft, ArrowRight } from "lucide-react";

const CoursesPageClient = ({ courses }) => {
  const {
    filteredCourses,
    searchPerformed,
    setFilteredCourses,
    setSearchPerformed,
  } = useContext(CourseContext);

  const [currentPage, setCurrentPage] = useState(1);

  const coursesPerPage = 12;

  const displayCourses = searchPerformed ? filteredCourses : courses;

  // Reset page when search result changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchPerformed, filteredCourses]);

  const totalPages = Math.ceil(displayCourses.length / coursesPerPage);

  const startIndex = (currentPage - 1) * coursesPerPage;
  const endIndex = startIndex + coursesPerPage;

  const currentCourses = displayCourses.slice(startIndex, endIndex);

  const handleReset = () => {
    setFilteredCourses([]);
    setSearchPerformed(false);
    setCurrentPage(1);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-10 pt-28 lg:pt-36 space-y-12 max-w-7xl">
      
      {/* Header — Aligned with Deep Space Branding Principles */}
      <div className="mb-10 text-center relative">
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-xs font-bold text-purple-300 uppercase tracking-wider shadow-[0_0_15px_rgba(168,85,247,0.1)]">
          <Sparkles size={13} className="text-[#8b7eff]" />
          <span>Explore Knowledge</span>
        </div>

        <h1 className="mt-5 text-4xl font-black text-white sm:text-5xl lg:text-6xl tracking-tight leading-none">
          Discover Our
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5643ff] to-[#8b7eff]"> Premium Courses</span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-sm sm:text-base text-slate-400 font-medium leading-relaxed">
          Explore industry-focused courses, learn from expert instructors, and
          build real-world skills to accelerate your career journey.
        </p>
      </div>

      {/* Search Input Box Area Segment Wrapper */}
      <div className="relative z-20">
        <SearchCourses courses={courses} />
      </div>

      {/* Courses Grid Container Block */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-6">
        {currentCourses.length > 0 ? (
          currentCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))
        ) : (
          /* Empty State Node Block Integration Form matching design rules */
          <div className="col-span-full text-center py-20 px-4 rounded-[32px] border border-white/5 bg-[#0b0826]/40 backdrop-blur-2xl max-w-md mx-auto shadow-xl">
            <h2 className="text-xl font-black text-white tracking-tight">
              No Courses Found
            </h2>

            <p className="text-slate-400 text-xs sm:text-sm font-medium mt-2">
              Try searching with another keyword or tag
            </p>

            <button
              onClick={handleReset}
              className="mt-6 px-6 py-2.5 text-xs font-bold rounded-xl border border-white/10 bg-[#07051a]/60 hover:bg-white/5 text-slate-200 transition-all duration-200 cursor-pointer active:scale-[0.99]"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Futuristic Glassmorphism Pagination Control Strip */}
      {displayCourses.length > coursesPerPage && (
        <div className="flex items-center justify-center gap-2 pt-8 border-t border-white/5">
          <button
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage === 1}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl border font-bold text-xs transition-all duration-200 ${
              currentPage === 1
                ? "border-white/5 text-slate-600 opacity-40 cursor-not-allowed"
                : "border-white/5 bg-[#0b0826]/40 hover:bg-white/5 text-slate-300 cursor-pointer active:scale-[0.98]"
            }`}
          >
            <ArrowLeft size={13} />
            <span>Previous</span>
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`w-10 h-10 rounded-xl font-bold text-xs transition-all duration-200 cursor-pointer ${
                currentPage === index + 1
                  ? "bg-gradient-to-r from-[#5643ff] to-[#6d5dfc] text-white shadow-lg shadow-indigo-600/20 scale-[1.03]"
                  : "border border-white/5 bg-[#0b0826]/40 hover:bg-white/5 text-slate-400 hover:text-white active:scale-[0.95]"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={currentPage === totalPages}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl border font-bold text-xs transition-all duration-200 ${
              currentPage === totalPages
                ? "border-white/5 text-slate-600 opacity-40 cursor-not-allowed"
                : "border-white/5 bg-[#0b0826]/40 hover:bg-white/5 text-slate-300 cursor-pointer active:scale-[0.98]"
            }`}
          >
            <span>Next</span>
            <ArrowRight size={13} />
          </button>
        </div>
      )}
    </div>
  );
};

export default CoursesPageClient;