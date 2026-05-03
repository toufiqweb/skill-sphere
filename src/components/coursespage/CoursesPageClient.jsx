"use client";

import React, { useContext } from "react";

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

  const displayCourses = searchPerformed ? filteredCourses : courses;

  const handleReset = () => {
    setFilteredCourses([]);
    setSearchPerformed(false);
  };

  return (
    <div className="container mx-auto px-5 my-10 space-y-10">
      <div className="text-center space-y-3">
        <h1 className="font-bold text-5xl ">All Courses</h1>
        <p className="text-gray-500 text-lg">
          Explore all available courses and start learning at your own pace
        </p>
      </div>

      <SearchCourses courses={courses} />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {displayCourses.length > 0 ? (
          displayCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))
        ) : (
          <div className="col-span-full text-center py-20 ">
            <h2 className="text-2xl font-semibold text-gray-600">
              No Courses Found
            </h2>
            <p className="text-gray-400 mt-2">
              Try searching with another keyword
            </p>
            <div className="text-center mt-5">
              <button
                onClick={handleReset}
                className="px-6 py-2 rounded-full border border-gray-300 hover:bg-gray-100"
              >
                Reset
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesPageClient;
