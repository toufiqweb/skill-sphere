"use client";

import { useEffect, useState } from "react";
import { getInstructorAnalyticsClient, getCoursesByInstructorClient } from "@/lib/api/courses";
import { Users, Star, BookOpen, Loader2, ArrowRight } from "lucide-react";
import Link from "next/link";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Image from "next/image";

const InstructorHomeView = ({ user }) => {
  const [analytics, setAnalytics] = useState(null);
  const [courses, setCourses] = useState([]);
  const [totalCourses, setTotalCourses] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [analyticsRes, coursesRes] = await Promise.all([
          getInstructorAnalyticsClient(user.id),
          getCoursesByInstructorClient(user.id, 1, 4),
        ]);

        if (analyticsRes.success) setAnalytics(analyticsRes);
        if (coursesRes.success) {
          setCourses(coursesRes.data || []);
          setTotalCourses(coursesRes.meta?.totalCourses || 0);
        }
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

  const { overview, chartData } = analytics || {};

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Instructor Overview
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Track your performance, student engagements, and active courses.
          </p>
        </div>
      </div>

      {/* Top Metrics Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-[#111c44]">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-blue-100 p-3 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
              <Users className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Active Students</p>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {overview?.totalEnrollments?.toLocaleString() || 0}
              </h3>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-[#111c44]">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-orange-100 p-3 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400">
              <Star className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Average Rating</p>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {overview?.avgRating?.toFixed(1) || "0.0"}
              </h3>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-[#111c44]">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-purple-100 p-3 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
              <BookOpen className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Published Courses</p>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {totalCourses}
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Key Performance Chart */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-[#111c44]">
        <h3 className="mb-6 text-lg font-semibold text-gray-900 dark:text-white">
          Monthly Earnings Overview
        </h3>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chartData || []}
              margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorEarnings" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#374151" opacity={0.2} />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#6b7280' }} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6b7280' }} tickFormatter={(val) => `$${val}`} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px', color: '#f3f4f6' }}
                itemStyle={{ color: '#10b981' }}
              />
              <Area type="monotone" dataKey="revenue" stroke="#10b981" fillOpacity={1} fill="url(#colorEarnings)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* My Published Courses Grid */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            My Published Courses
          </h3>
          <Link href="/dashboard/my-courses" className="flex items-center text-sm font-medium text-primary hover:underline">
            View All <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <div key={course._id} className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-[#111c44]">
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src={course.image || "/placeholder-course.jpg"}
                  alt={course.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-2 right-2 rounded bg-black/70 px-2 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  {course.status === "approved" ? "Live" : course.status}
                </div>
              </div>
              <div className="p-4">
                <h4 className="line-clamp-1 font-semibold text-gray-900 dark:text-white">
                  {course.title}
                </h4>
                <div className="mt-3 flex items-center justify-between text-sm">
                  <span className="font-medium text-gray-500 dark:text-gray-400">Enrolled: {course.enrolledStudents || 0}</span>
                  <span className="font-bold text-gray-900 dark:text-white">${course.price}</span>
                </div>
                <Link 
                  href={`/dashboard/my-courses/edit/${course._id}`}
                  className="mt-4 block w-full rounded-lg bg-gray-100 py-2 text-center text-sm font-medium text-gray-900 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                >
                  Manage Course
                </Link>
              </div>
            </div>
          ))}
          {courses.length === 0 && (
            <div className="col-span-full flex h-32 items-center justify-center rounded-xl border border-dashed border-gray-300 dark:border-gray-700">
              <p className="text-gray-500 dark:text-gray-400">You haven't published any courses yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InstructorHomeView;
