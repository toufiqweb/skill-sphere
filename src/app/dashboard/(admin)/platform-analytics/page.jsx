"use client";

import { useEffect, useState } from "react";
import { getPlatformAnalyticsClient } from "@/lib/api/platformAnalytics";
import { Banknote, Briefcase, GraduationCap, BookOpen, Loader2 } from "lucide-react";
import {
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ComposedChart,
  Legend,
} from "recharts";
import { useSession } from "@/lib/auth-client";

const PlatformAnalyticsPage = () => {
  const { data: session, isPending } = useSession();
  const [analyticsData, setAnalyticsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnalytics = async () => {
      if (!session?.user?.id) return;
      
      setIsLoading(true);
      try {
        const res = await getPlatformAnalyticsClient(session.user.id);
        if (res.success) {
          setAnalyticsData(res);
        } else {
          setError(res.message || "Failed to load analytics");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (!isPending) {
      fetchAnalytics();
    }
  }, [session, isPending]);

  if (isPending || isLoading) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-lg bg-red-50 p-4 text-red-600 dark:bg-red-900/10 dark:text-red-400">
        <p>Error loading analytics: {error}</p>
      </div>
    );
  }

  const { globalOverview, globalChartData } = analyticsData || {};

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Platform Analytics
        </h1>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Comprehensive reports and sitewide data metrics.
        </p>
      </div>

      {/* Top Metrics Dashboard Cards Matrix Layout */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Total Platform Revenue Card */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-[#111c44]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Total Revenue
              </p>
              <h3 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
                ${globalOverview?.totalPlatformRevenue?.toLocaleString() || 0}
              </h3>
            </div>
            <div className="rounded-full bg-green-100 p-3 text-green-600 dark:bg-green-900/30 dark:text-green-400">
              <Banknote className="h-6 w-6" />
            </div>
          </div>
        </div>

        {/* Total Registered Instructors Card */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-[#111c44]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Total Instructors
              </p>
              <h3 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
                {globalOverview?.totalInstructors?.toLocaleString() || 0}
              </h3>
            </div>
            <div className="rounded-full bg-blue-100 p-3 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
              <Briefcase className="h-6 w-6" />
            </div>
          </div>
        </div>

        {/* Active Enrolled Students Card */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-[#111c44]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Active Students
              </p>
              <h3 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
                {globalOverview?.totalStudents?.toLocaleString() || 0}
              </h3>
            </div>
            <div className="rounded-full bg-purple-100 p-3 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
              <GraduationCap className="h-6 w-6" />
            </div>
          </div>
        </div>

        {/* Hosted Courses Count Card */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-[#111c44]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Hosted Courses
              </p>
              <h3 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
                {globalOverview?.totalCourses?.toLocaleString() || 0}
              </h3>
            </div>
            <div className="rounded-full bg-orange-100 p-3 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400">
              <BookOpen className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Recharts Analytics Engine */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-[#111c44]">
        <h3 className="mb-6 text-lg font-semibold text-gray-900 dark:text-white">
          Comprehensive Growth
        </h3>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              data={globalChartData || []}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#374151" opacity={0.2} />
              <XAxis 
                dataKey="month" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#6b7280' }} 
                dy={10} 
              />
              <YAxis 
                yAxisId="left"
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#6b7280' }} 
                tickFormatter={(value) => `$${value}`}
              />
              <YAxis 
                yAxisId="right" 
                orientation="right" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#6b7280' }} 
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1f2937',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#f3f4f6'
                }}
                itemStyle={{ color: '#f3f4f6' }}
              />
              <Legend wrapperStyle={{ paddingTop: '20px' }} />
              <Area
                yAxisId="left"
                type="monotone"
                dataKey="revenue"
                name="Revenue"
                stroke="#4f46e5"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorRevenue)"
              />
              <Bar 
                yAxisId="right" 
                dataKey="signups" 
                name="Signups / Enrollments" 
                barSize={20} 
                fill="#10b981" 
                radius={[4, 4, 0, 0]} 
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default PlatformAnalyticsPage;
