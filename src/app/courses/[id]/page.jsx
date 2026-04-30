import React from "react";
import Image from "next/image";
import {
  Clock,
  Users,
  Award,
  PlayCircle,
  ChevronRight,
  BookOpen,
} from "lucide-react";
import { getAllCoursesData } from "@/lib/getAllCourses";
import { FaStar } from "react-icons/fa";

const curriculum = [
  "Course Introduction & Overview",
  "Understanding the Fundamentals",
  "Core Concepts and Strategies",
  "Practical Tools & Techniques",
  "Advanced Strategies & Best Practices",
  "Hands-on Projects & Case Studies",
  "Common Challenges and Solutions",
  "Industry Best Practices",
  "Final Project & Assessment",
  "Course Summary & Next Steps",
];
const CourseDetailPage = async ({ params }) => {
  const { id } = await params;
  //   console.log(id);
  const courses = await getAllCoursesData();
  const course = courses.find((c) => c.id === Number(id));
  //   console.log(course);

  return (
    <div className="max-w-7xl mx-auto my-10 ">
      <div className="relative h-[75vh] md:h-[65vh] lg:h-[60vh] bg-black rounded-2xl overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-black/30" />

        <div className="absolute inset-0 flex items-center">
          <div className="w-full md:max-w-6xl mx-auto px-6 text-white">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md text-sm rounded-full mb-4">
                {course.category}
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold  mb-6">
                {course.title}
              </h1>

              <p className="text-lg md:text-xl text-gray-200 mb-8 ">
                {course.description}
              </p>

              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <FaStar className="w-5 h-5 text-yellow-400" />
                  <span className="font-semibold">{course.rating}</span>
                  <span className="text-gray-300">(248 ratings)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  <span>{course.level}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-12">
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-sm">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5" /> Instructor
              </h3>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-main-gradient rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
                  {course.instructor[0]}
                </div>
                <div>
                  <h4 className="font-semibold text-xl">{course.instructor}</h4>
                  <p className="text-gray-600">
                    Digital Marketing Strategist & Coach
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <PlayCircle className="w-7 h-7 text-violet-600" />
                Course Curriculum
              </h3>

              <div className="space-y-4">
                {curriculum.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-xl bg-violet-100  flex items-center justify-center ">
                      <span className="text-purple-600  font-medium text-sm">
                        {index + 1}
                      </span>
                    </div>
                    <div className="flex-1 pt-1">
                      <p className="text-gray-700  group-hover:text-purple-600  transition-colors">
                        {item}
                      </p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-purple-500 transition-colors mt-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="  bg-white  rounded-3xl shadow-sm p-8 border border-gray-100 ">
              <div className="text-center mb-8">
                <div className="text-4xl font-bold text-gray-900 mb-2">$89</div>
                <p className="text-gray-500 line-through">$149</p>
              </div>

              <button className="w-full bg-main-gradient cursor-pointer text-white font-semibold py-4 rounded-2xl  mb-4">
                Enroll Now
              </button>

              <button className="w-full border border-gray-300  hover:bg-gray-50 hover:shadow-lg  font-medium py-4 rounded-2xl transition-all">
                Add to Wishlist
              </button>

              <div className="mt-8 pt-6 border-t border-gray-100 ">
                <h4 className="font-medium mb-4 text-gray-900 ">
                  This course includes:
                </h4>
                <ul className="space-y-3 text-sm text-gray-600 ">
                  <li className="flex items-center gap-3">
                    <Clock className="w-5 h-5" /> {course.duration} on-demand
                    video
                  </li>
                  <li className="flex items-center gap-3">
                    <Users className="w-5 h-5" /> Lifetime access
                  </li>
                  <li className="flex items-center gap-3">
                    <Award className="w-5 h-5" /> Certificate of completion
                  </li>
                  <li className="flex items-center gap-3">
                    <PlayCircle className="w-5 h-5" /> 45+ downloadable
                    resources
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;
