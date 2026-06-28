"use client";

import { useEffect, useState } from "react";
import { getEnrolledCoursesClient } from "@/lib/api/courses";
import { BookOpen, Flame, Clock, PlayCircle, Loader2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const StudentHomeView = ({ user }) => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await getEnrolledCoursesClient(user.id);
        if (res.success && res.data) {
          setCourses(res.data);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCourses();
  }, [user.id]);

  if (isLoading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  // Derived stats (mocked some because full completion tracking requires more complex backend logic, 
  // but we build the UI shell as requested)
  const totalEnrolled = courses.length;
  const completed = 0; // Placeholder for completed count
  const watchHours = 0; // Placeholder for watch hours
  const streak = 3; // Placeholder for active streak

  const lastAccessed = courses[0]; // Just taking the first for demo

  return (
    <div className="flex flex-col gap-6 lg:flex-row">
      {/* LEFT SIDE LAYOUT: User Banner & Stats */}
      <div className="flex w-full flex-col gap-6 lg:w-1/3">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-[#111c44]">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white shadow-md">
              {user.name?.charAt(0).toUpperCase()}
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Welcome back, {user.name}!
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Continue your learning journey
              </p>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between rounded-xl bg-orange-50 p-4 dark:bg-orange-900/20">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-orange-100 p-2 dark:bg-orange-800/30">
                <Flame className="h-6 w-6 text-orange-500" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Continuous Streak</p>
                <p className="text-2xl font-bold text-orange-500">{streak} Days</p>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-gray-100 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800/50">
              <BookOpen className="mb-2 h-5 w-5 text-blue-500" />
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{totalEnrolled}</p>
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400">Enrolled Courses</p>
            </div>
            <div className="rounded-xl border border-gray-100 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800/50">
              <Clock className="mb-2 h-5 w-5 text-purple-500" />
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{watchHours}h</p>
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400">Total Watch Hours</p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE LAYOUT: Active Learning & Grid */}
      <div className="flex w-full flex-col gap-6 lg:w-2/3">
        {/* Resume Track Card */}
        {lastAccessed && (
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-[#111c44]">
            <div className="p-6">
              <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <PlayCircle className="h-5 w-5 text-primary" /> Active Learning Track
              </h3>
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                <div className="h-32 w-full shrink-0 overflow-hidden rounded-xl sm:w-48 relative">
                  <Image
                    src={lastAccessed.image || "/placeholder-course.jpg"}
                    alt={lastAccessed.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                    {lastAccessed.title}
                  </h4>
                  <p className="mt-1 text-sm text-gray-500 line-clamp-2 dark:text-gray-400">
                    {lastAccessed.description}
                  </p>
                  
                  <div className="mt-4">
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="font-medium text-gray-700 dark:text-gray-300">Course Progress</span>
                      <span className="font-bold text-primary">35%</span>
                    </div>
                    <div className="h-2.5 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                      <div className="h-2.5 rounded-full bg-primary" style={{ width: "35%" }}></div>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <Link 
                      href={`/dashboard/my-learning/${lastAccessed._id}`}
                      className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary/90"
                    >
                      Resume Lesson
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Dynamic List Grid */}
        <div>
          <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">
            Your Active Courses
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {courses.slice(1).map((course) => (
              <Link key={course._id} href={`/dashboard/my-learning/${course._id}`} className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-[#111c44]">
                <div className="relative h-32 w-full overflow-hidden">
                  <Image
                    src={course.image || "/placeholder-course.jpg"}
                    alt={course.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h4 className="line-clamp-2 font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                    {course.title}
                  </h4>
                  <div className="mt-auto pt-4">
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
                      <div className="h-1.5 rounded-full bg-primary/70" style={{ width: "10%" }}></div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
            {courses.length <= 1 && (
              <div className="col-span-full flex h-32 items-center justify-center rounded-xl border border-dashed border-gray-300 dark:border-gray-700">
                <p className="text-gray-500 dark:text-gray-400">Enroll in more courses to see them here.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentHomeView;
