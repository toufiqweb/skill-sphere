import CourseCard from "@/components/ui/CourseCard";
import { getAllCoursesData } from "@/lib/getAllCourses";
import React from "react";

const CoursesPage = async () => {
  const courses = await getAllCoursesData();
  return (
    <div className="container mx-auto px-5 my-10 space-y-15">
      <h1 className="font-bold text-5xl text-center">All Courses</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10  ">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
