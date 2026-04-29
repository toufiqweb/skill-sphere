import { getAllCoursesData } from "@/lib/getAllCourses";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import CourseCard from "../ui/CourseCard";

const PopularCourses = async () => {
  const courses = await getAllCoursesData();
  // console.log(courses);

  const topCourses = courses.sort((a, b) => b.rating - a.rating).slice(0, 3);

  console.log(topCourses);

  return (
    <div className=" container mx-auto my-20 space-y-10 px-3">
      <div className="flex flex-col md:flex-row justify-center gap-5 md:justify-between items-center">
        <h1 className="font-bold text-3xl sm:text-4xl ">
          <span className="hidden md:inline-block">🔥</span> Popular courses
        </h1>

        <div className="flex items-center gap-2 group cursor-pointer">
          <Link
            href={"/courses"}
            className="text-main-gradient font-semibold transition-all duration-300 hover:opacity-80"
          >
            View all courses
          </Link>

          <FaArrowRight className="text-[#2563eb] transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-15 max-w-7xl mx-auto ">
        {topCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default PopularCourses;
