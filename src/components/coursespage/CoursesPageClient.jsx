"use client";

import React, { useContext } from "react";

import CourseCard from "../ui/CourseCard";
import { CourseContext } from "@/lib/context/CourseProvider";
import SearchCourses from "./SearchCourses";

const CoursesPageClient = ({ courses }) => {
  const { filteredCourses } = useContext(CourseContext);

  const displayCourses = filteredCourses.length > 0 ? filteredCourses : courses;

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
        {displayCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesPageClient;
