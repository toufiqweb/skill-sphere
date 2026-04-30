import { getAllCoursesData } from "@/lib/getAllCourses";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import CourseCard from "../ui/CourseCard";
import { IoSparklesSharp } from "react-icons/io5";

const NewReleases = async () => {
  const courses = await getAllCoursesData();
  // console.log(courses);

  const topCourses = courses.reverse().slice(0, 5);

  console.log(courses);
  return (
    <div className=" container mx-auto my-20 space-y-10 px-3">
      <div className="flex flex-col md:flex-row justify-center gap-5 md:justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center justify-center p-3 bg-yellow-100 rounded-2xl">
            <IoSparklesSharp className="w-7 h-7 text-yellow-500" />
          </div>

          <h2 className="text-3xl font-semibold text-gray-900">New Releases</h2>
        </div>

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

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 md:gap-10    ">
        {topCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default NewReleases;
