"use client";

import { Skeleton } from "@heroui/react";
import React from "react";

const PopularCardLoading = () => {
  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-colors duration-300 ">
      
      {/* Header Row Content Alignment */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:justify-between items-center my-8">
        <Skeleton className="h-7 w-44 rounded-xl bg-slate-800/40 before:from-transparent before:via-white/10 before:to-transparent opacity-80" />
        <Skeleton className="h-6 w-24 rounded-lg bg-slate-800/40 before:from-transparent before:via-white/10 before:to-transparent opacity-60" />
      </div>
      
      {/* Dynamic 4-Column Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-10">
        {Array.from({ length: 4 }).map((_, index) => (
          <div 
            key={index} 
            className="space-y-4 p-4 border border-card-border transition-colors duration-300 bg-card-bg/50 transition-colors duration-300 rounded-[28px] backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
          >
            {/* Visual Media Thumbnail Cover Placeholder */}
            <Skeleton className="h-44 w-full rounded-2xl bg-slate-800/50 before:from-transparent before:via-white/10 before:to-transparent opacity-70" />
            
            {/* Content Details Label Lines */}
            <div className="space-y-2.5 px-1 pb-2">
              <Skeleton className="h-5 w-3/4 rounded-lg bg-slate-800/40 before:from-transparent before:via-white/10 before:to-transparent opacity-80" />
              <Skeleton className="h-4 w-1/2 rounded-md bg-slate-800/30 before:from-transparent before:via-white/5 before:to-transparent opacity-50" />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default PopularCardLoading;