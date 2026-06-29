"use client";

import React, { useState, useEffect } from "react";
import { DollarSign, Users, Star, Loader2, TrendingUp } from "lucide-react";
import { useSession } from "@/lib/auth-client";
import { getInstructorAnalyticsClient } from "@/lib/api/courses";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import DashboardPageHeader from "@/components/ui/DashboardPageHeader";

export default function CourseAnalyticsPage() {
  const { data: session, isPending } = useSession();
  const [analytics, setAnalytics] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAnalytics = async () => {
      if (!session?.user?.id) return;
      
      setIsLoading(true);
      try {
        const data = await getInstructorAnalyticsClient(session.user.id);
        if (data.success) {
          setAnalytics(data);
        } else {
          console.error("Failed to fetch analytics:", data.message);
        }
      } catch (error) {
        console.error("Error fetching analytics:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAnalytics();
  }, [session?.user?.id]);

  if (isPending || isLoading) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <Loader2 className="w-10 h-10 text-indigo-500 animate-spin" />
      </div>
    );
  }

  const overview = analytics?.overview || { totalEarnings: 0, totalEnrollments: 0, avgRating: 0 };
  const chartData = analytics?.chartData || [];

  return (
    <div className="w-full max-w-7xl mx-auto space-y-6 pb-10">
      <DashboardPageHeader
        icon={TrendingUp}
        title={
          <>
            Course <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-ocean">Analytics</span>
          </>
        }
        subtitle="Track your financial performance and student engagement."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Earnings */}
        <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-3xl p-6 shadow-sm flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-emerald-50 dark:bg-emerald-500/10 rounded-xl">
              <DollarSign className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h3 className="font-semibold text-gray-600 dark:text-gray-300">Total Earnings</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">
            ${overview.totalEarnings.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
        </div>

        {/* Total Enrollments */}
        <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-3xl p-6 shadow-sm flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-50 dark:bg-blue-500/10 rounded-xl">
              <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="font-semibold text-gray-600 dark:text-gray-300">Total Enrollments</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">
            {overview.totalEnrollments.toLocaleString()}
          </p>
        </div>

        {/* Average Rating */}
        <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-3xl p-6 shadow-sm flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-amber-50 dark:bg-amber-500/10 rounded-xl">
              <Star className="w-6 h-6 text-amber-500" />
            </div>
            <h3 className="font-semibold text-gray-600 dark:text-gray-300">Average Rating</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">
            {overview.avgRating.toFixed(1)} <span className="text-sm font-medium text-gray-500 dark:text-gray-400">/ 5.0</span>
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Revenue & Enrollments Overview</h2>
        
        <div className="h-[350px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorEarnings" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorEnrollments" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#3f3f46" opacity={0.2} />
              <XAxis 
                dataKey="month" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#71717a', fontSize: 12 }} 
                dy={10}
              />
              <YAxis 
                yAxisId="left"
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#71717a', fontSize: 12 }}
                tickFormatter={(value) => `$${value}`}
              />
              <YAxis 
                yAxisId="right"
                orientation="right"
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#71717a', fontSize: 12 }}
              />
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)', backgroundColor: '#18181b', color: '#fff' }}
                itemStyle={{ color: '#e4e4e7', fontSize: '14px', fontWeight: '500' }}
              />
              <Area 
                yAxisId="left"
                type="monotone" 
                dataKey="earnings" 
                stroke="#4f46e5" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorEarnings)" 
                activeDot={{ r: 6, strokeWidth: 0, fill: '#4f46e5' }}
              />
              <Area 
                yAxisId="right"
                type="monotone" 
                dataKey="enrollments" 
                stroke="#0ea5e9" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorEnrollments)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
