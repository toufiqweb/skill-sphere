"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Grid, List, PlayCircle, BookOpen, Clock } from "lucide-react";
import Pagination from "@/components/Pagination";
import CourseCard from "@/components/ui/CourseCard";
import { useRouter, usePathname } from "next/navigation";

export default function MyLearningClient({ initialData, currentPage }) {
  const [view, setView] = useState("grid");
  const router = useRouter();
  const pathname = usePathname();

  const courses = initialData?.data || [];
  const totalPages = initialData?.totalPages || 1;

  // Format date helper
  const formatDate = (isoString) => {
    if (!isoString) return "N/A";
    const date = new Date(isoString);
    return new Intl.DateTimeFormat("en-US", { year: "numeric", month: "short", day: "numeric" }).format(date);
  };

  const handlePageChange = (newPage) => {
    // Navigating natively pushes a new server request for the Server Component
    router.push(`${pathname}?page=${newPage}`);
  };

  // Empty state handling
  if (courses.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-3xl p-8 text-center space-y-6 shadow-sm">
        <div className="w-20 h-20 bg-indigo-50 dark:bg-indigo-900/20 rounded-full flex items-center justify-center">
          <BookOpen className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
            You haven't enrolled in any courses yet!
          </h2>
          <p className="text-gray-500 dark:text-zinc-400 max-w-md mx-auto">
            Ready to learn something new? Browse our vast catalog and start your learning journey today.
          </p>
        </div>
        <Link
          href="/courses"
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm rounded-xl uppercase tracking-wider transition-all duration-200 shadow-md shadow-indigo-600/10 hover:scale-[1.02]"
        >
          Explore Courses
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8 pb-10">
      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white dark:bg-zinc-900 p-6 rounded-[28px] border border-gray-200 dark:border-zinc-800 shadow-sm">
        <div>
          <h1 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight">My Learning</h1>
          <p className="text-sm text-gray-500 dark:text-zinc-400 mt-1">
            Pick up right where you left off
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex items-center bg-gray-100 dark:bg-zinc-800/50 p-1 rounded-xl">
          <button
            onClick={() => setView("grid")}
            className={`p-2 rounded-lg transition-colors cursor-pointer ${
              view === "grid" 
                ? "bg-white dark:bg-zinc-700 shadow-sm text-indigo-600 dark:text-indigo-400" 
                : "text-gray-500 hover:text-gray-900 dark:text-zinc-400 dark:hover:text-white"
            }`}
          >
            <Grid className="w-5 h-5" />
          </button>
          <button
            onClick={() => setView("list")}
            className={`p-2 rounded-lg transition-colors cursor-pointer ${
              view === "list" 
                ? "bg-white dark:bg-zinc-700 shadow-sm text-indigo-600 dark:text-indigo-400" 
                : "text-gray-500 hover:text-gray-900 dark:text-zinc-400 dark:hover:text-white"
            }`}
          >
            <List className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Content Area */}
      {view === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((enrollment) => {
            const courseData = enrollment.course;
            if (!courseData) return null;
            return <CourseCard key={enrollment._id} course={courseData} />;
          })}
        </div>
      ) : (
        <div className="bg-white dark:bg-zinc-900 rounded-[28px] border border-gray-200 dark:border-zinc-800 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-600 dark:text-zinc-400">
              <thead className="bg-gray-50/80 dark:bg-zinc-800/50 text-xs uppercase font-bold text-gray-500 dark:text-zinc-500 tracking-wider">
                <tr>
                  <th scope="col" className="px-6 py-4">Course</th>
                  <th scope="col" className="px-6 py-4">Enrolled On</th>
                  <th scope="col" className="px-6 py-4">Amount Paid</th>
                  <th scope="col" className="px-6 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-zinc-800">
                {courses.map((enrollment) => {
                  const courseData = enrollment.course;
                  if (!courseData) return null;

                  return (
                    <tr key={enrollment._id} className="hover:bg-gray-50/50 dark:hover:bg-zinc-800/30 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <div className="relative h-14 w-20 flex-shrink-0 overflow-hidden rounded-xl border border-gray-200 dark:border-zinc-700">
                            <Image 
                              src={courseData.image} 
                              alt={courseData.title} 
                              fill 
                              className="object-cover" 
                            />
                          </div>
                          <div>
                            <div className="font-bold text-gray-900 dark:text-white truncate max-w-xs md:max-w-sm">
                              {courseData.title}
                            </div>
                            <div className="text-xs text-gray-500 mt-1 flex items-center gap-1.5">
                              <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                                {courseData.category}
                              </span>
                              <span>&bull;</span>
                              <span>
                                {courseData.instructorName || 
                                 (courseData.instructor && courseData.instructor.name) || 
                                 "Instructor"}
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-1.5 font-medium">
                          <Clock className="w-3.5 h-3.5 text-gray-400" />
                          {formatDate(enrollment.createdAt)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap font-bold text-gray-900 dark:text-white">
                        ${enrollment.amount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <Link
                          href={`/courses/${courseData._id || courseData.id}`}
                          className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-indigo-50 dark:bg-indigo-500/10 hover:bg-indigo-100 dark:hover:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 font-bold text-xs uppercase tracking-wider rounded-lg transition-colors"
                        >
                          <PlayCircle className="w-4 h-4" />
                          Start Learning
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Pagination component bound dynamically */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
