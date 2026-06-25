"use client";

import React, { useState, useEffect, useCallback } from "react";
import CourseCard from "../ui/CourseCard";
import SearchCourses from "./SearchCourses";
import { Sparkles, ArrowLeft, ArrowRight } from "lucide-react";
import { getAllCourses } from "@/lib/api/courses";

// Debounce hook
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

const CoursesPageClient = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Filter States
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [level, setLevel] = useState("All");
  const [sort, setSort] = useState("");
  
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  
  const coursesPerPage = 12;

  const debouncedSearch = useDebounce(search, 500);

  const fetchCourses = useCallback(async () => {
    try {
      setLoading(true);
      
      const response = await getAllCourses({
        page: currentPage,
        limit: coursesPerPage,
        search: debouncedSearch,
        category: category === "All" ? "" : category,
        level: level === "All" ? "" : level,
        sort: sort
      });

      if (response.success) {
        setCourses(response.data);
        setTotalPages(response.meta.totalPages || 1);
      }
    } catch (err) {
      console.error("Failed to fetch courses:", err);
    } finally {
      setLoading(false);
    }
  }, [currentPage, debouncedSearch, category, level, sort]);

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearch, category, level, sort]);

  const handleReset = () => {
    setSearch("");
    setCategory("All");
    setLevel("All");
    setSort("");
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

        <h1 className="mt-5 text-4xl font-black text-foreground sm:text-5xl lg:text-6xl tracking-tight leading-none transition-colors duration-300 ">
          Discover Our
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5643ff] to-[#8b7eff]"> Premium Courses</span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-sm sm:text-base text-muted transition-colors duration-300 font-medium leading-relaxed">
          Explore industry-focused courses, learn from expert instructors, and
          build real-world skills to accelerate your career journey.
        </p>
      </div>

      {/* Search Input Box Area Segment Wrapper */}
      <div className="relative z-20">
        <SearchCourses 
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          level={level}
          setLevel={setLevel}
          sort={sort}
          setSort={setSort}
          handleReset={handleReset}
        />
      </div>

      {/* Courses Grid Container Block */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-6">
        {loading ? (
          /* Skeletons to match CourseCard */
          [...Array(coursesPerPage)].map((_, i) => (
             <div key={i} className="bg-card-bg/40 border border-card-border transition-colors duration-300 rounded-[32px] p-4 flex flex-col h-[400px]">
               <div className="w-full h-48 bg-foreground/5 rounded-2xl animate-pulse mb-4"></div>
               <div className="w-24 h-4 bg-foreground/5 rounded-full animate-pulse mb-4"></div>
               <div className="w-full h-6 bg-foreground/5 rounded-full animate-pulse mb-2"></div>
               <div className="w-2/3 h-6 bg-foreground/5 rounded-full animate-pulse mb-4"></div>
               <div className="mt-auto flex justify-between items-center">
                 <div className="flex gap-2">
                    <div className="w-8 h-8 bg-foreground/5 rounded-full animate-pulse"></div>
                    <div className="w-20 h-4 bg-foreground/5 rounded-full animate-pulse mt-2"></div>
                 </div>
                 <div className="w-16 h-6 bg-foreground/5 rounded-full animate-pulse"></div>
               </div>
             </div>
          ))
        ) : courses.length > 0 ? (
          courses.map((course) => (
            <CourseCard key={course.id || course._id} course={course} />
          ))
        ) : (
          /* Empty State Node Block Integration Form matching design rules */
          <div className="col-span-full text-center py-20 px-4 rounded-[32px] border border-card-border transition-colors duration-300 bg-card-bg/40 transition-colors duration-300 backdrop-blur-2xl max-w-md mx-auto shadow-xl">
            <h2 className="text-xl font-black text-foreground tracking-tight transition-colors duration-300 ">
              No Courses Found
            </h2>

            <p className="text-muted transition-colors duration-300 text-xs sm:text-sm font-medium mt-2">
              Try searching with another keyword or tag
            </p>

            <button
              onClick={handleReset}
              className="mt-6 px-6 py-2.5 text-xs font-bold rounded-xl border border-card-border transition-colors duration-300 bg-card-bg/60 transition-colors duration-300 hover:bg-foreground/5 transition-colors duration-300 text-primary transition-colors duration-300 transition-all duration-200 cursor-pointer active:scale-[0.99]"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Futuristic Glassmorphism Pagination Control Strip */}
      {!loading && totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-8 border-t border-card-border transition-colors duration-300 ">
          <button
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage === 1}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl border font-bold text-xs transition-all duration-200 ${
              currentPage === 1
                ? "border-card-border transition-colors duration-300 text-slate-600 opacity-40 cursor-not-allowed"
                : "border-card-border transition-colors duration-300 bg-card-bg/40 transition-colors duration-300 hover:bg-foreground/5 transition-colors duration-300 text-secondary transition-colors duration-300 cursor-pointer active:scale-[0.98]"
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
                  : "border border-card-border transition-colors duration-300 bg-card-bg/40 transition-colors duration-300 hover:bg-foreground/5 transition-colors duration-300 text-muted transition-colors duration-300 hover:text-white active:scale-[0.95]"
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
                ? "border-card-border transition-colors duration-300 text-slate-600 opacity-40 cursor-not-allowed"
                : "border-card-border transition-colors duration-300 bg-card-bg/40 transition-colors duration-300 hover:bg-foreground/5 transition-colors duration-300 text-secondary transition-colors duration-300 cursor-pointer active:scale-[0.98]"
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