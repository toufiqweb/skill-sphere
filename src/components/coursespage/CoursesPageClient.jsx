"use client";

import React, { useContext, useState, useEffect } from "react";
import CourseCard from "../ui/CourseCard";
import { CourseContext } from "@/lib/context/CourseProvider";
import SearchCourses from "./SearchCourses";

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
    <div className="container mx-auto px-5 my-10 pt-28 lg:pt-36 space-y-10">
      {/* Header */}
      <div className="text-center space-y-3">
        <h1 className="font-bold text-5xl">All Courses</h1>
        <p className="text-gray-500 text-lg">
          Explore all available courses and start learning at your own pace
        </p>
      </div>

      {/* Search */}
      <SearchCourses courses={courses} />

      {/* Courses Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {currentCourses.length > 0 ? (
          currentCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))
        ) : (
          <div className="col-span-full text-center py-20">
            <h2 className="text-2xl font-semibold text-gray-600">
              No Courses Found
            </h2>

            <p className="text-gray-400 mt-2">
              Try searching with another keyword
            </p>

            <button
              onClick={handleReset}
              className="mt-5 px-6 py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
            >
              Reset
            </button>
          </div>
        )}
      </div>

      {/* Pagination */}
      {displayCourses.length > coursesPerPage && (
        <div className="flex items-center justify-center gap-3 pt-6">
          <button
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg border transition ${
              currentPage === 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-100"
            }`}
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`w-10 h-10 rounded-lg font-medium transition ${
                currentPage === index + 1
                  ? "bg-black text-white"
                  : "border hover:bg-gray-100"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg border transition ${
              currentPage === totalPages
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-100"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default CoursesPageClient;
