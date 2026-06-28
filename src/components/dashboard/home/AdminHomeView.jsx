"use client";

import { useEffect, useState } from "react";
import { getPlatformAnalyticsClient } from "@/lib/api/platformAnalytics";
import { getPendingCoursesClient } from "@/lib/api/courses";
import { Banknote, Users, BookOpen, AlertCircle, Loader2, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const AdminHomeView = ({ user }) => {
  const [analytics, setAnalytics] = useState(null);
  const [pendingCourses, setPendingCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [analyticsRes, pendingRes] = await Promise.all([
          getPlatformAnalyticsClient(user.id),
          getPendingCoursesClient(user.id),
        ]);

        if (analyticsRes.success) setAnalytics(analyticsRes);
        if (pendingRes.success) setPendingCourses(pendingRes.data?.slice(0, 3) || []);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [user.id]);

  if (isLoading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  const { globalOverview } = analytics || {};

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Admin Control Center
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Monitor platform health, user activity, and moderate content.
        </p>
      </div>

      {/* Top Metrics Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-[#111c44]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Revenue</p>
              <h3 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">
                ${globalOverview?.totalPlatformRevenue?.toLocaleString() || 0}
              </h3>
            </div>
            <div className="rounded-full bg-green-100 p-3 text-green-600 dark:bg-green-900/30 dark:text-green-400">
              <Banknote className="h-6 w-6" />
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-[#111c44]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Active Students</p>
              <h3 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">
                {globalOverview?.totalStudents?.toLocaleString() || 0}
              </h3>
            </div>
            <div className="rounded-full bg-purple-100 p-3 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
              <Users className="h-6 w-6" />
            </div>
          </div>
        </div>
        
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-[#111c44]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Instructors</p>
              <h3 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">
                {globalOverview?.totalInstructors?.toLocaleString() || 0}
              </h3>
            </div>
            <div className="rounded-full bg-blue-100 p-3 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
              <Users className="h-6 w-6" />
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-[#111c44]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Active Courses</p>
              <h3 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">
                {globalOverview?.totalCourses?.toLocaleString() || 0}
              </h3>
            </div>
            <div className="rounded-full bg-orange-100 p-3 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400">
              <BookOpen className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Miniature Layout Preview - Platform Analytics Link */}
        <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-[#111c44]">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              System Analytics Log
            </h3>
            <Link href="/dashboard/platform-analytics" className="flex items-center text-sm font-medium text-primary hover:underline">
              View Full Report <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="relative flex-1 rounded-xl bg-gray-50 dark:bg-gray-900 p-4 border border-gray-100 dark:border-gray-800 overflow-hidden group cursor-pointer">
            <Link href="/dashboard/platform-analytics" className="absolute inset-0 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-100 to-transparent opacity-50 dark:from-gray-900"></div>
            <div className="flex flex-col items-center justify-center h-full text-center relative z-20">
               <div className="rounded-full bg-primary/10 p-4 mb-3">
                 <Banknote className="h-8 w-8 text-primary" />
               </div>
               <p className="font-semibold text-gray-700 dark:text-gray-200">Access Global Platform Analytics</p>
               <p className="text-sm text-gray-500 mt-1">Dive into multidimensional data metrics and charts.</p>
            </div>
          </div>
        </div>

        {/* Pending Approvals List Component */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-[#111c44]">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-orange-500" /> Action Required
            </h3>
            <Link href="/dashboard/pending-courses" className="flex items-center text-sm font-medium text-primary hover:underline">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="space-y-4">
            {pendingCourses.length > 0 ? (
              pendingCourses.map(course => (
                <div key={course._id} className="flex items-center gap-4 rounded-lg border border-gray-100 bg-gray-50 p-3 dark:border-gray-700 dark:bg-gray-800/50">
                  <div className="relative h-12 w-16 shrink-0 overflow-hidden rounded-md">
                    <Image
                      src={course.image || "/placeholder-course.jpg"}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <h4 className="truncate font-semibold text-gray-900 dark:text-white text-sm">
                      {course.title}
                    </h4>
                    <p className="truncate text-xs text-gray-500 dark:text-gray-400">
                      Instructor ID: {course.instructor?.instructorId || course.instructorId || "Unknown"}
                    </p>
                  </div>
                  <Link 
                    href={`/dashboard/pending-courses`}
                    className="shrink-0 rounded bg-white px-3 py-1.5 text-xs font-medium text-gray-700 shadow-sm border border-gray-200 hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-600"
                  >
                    Review
                  </Link>
                </div>
              ))
            ) : (
              <div className="flex h-32 flex-col items-center justify-center rounded-lg border border-dashed border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-500 dark:text-gray-400">No pending approvals at this time.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHomeView;
