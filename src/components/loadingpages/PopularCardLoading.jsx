import { Skeleton } from "@heroui/react";
import React from "react";

const PopularCardLoading = () => {
  return (
    <div className="container mx-auto px-4 transition-colors duration-300">
      
      {/* Header Row Content Alignment */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:justify-between items-center my-8">
        <Skeleton className="h-7 w-44 rounded-xl opacity-80" />
        <Skeleton className="h-6 w-24 rounded-lg opacity-60" />
      </div>
      
      {/* Dynamic 4-Column Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-10">
        {Array.from({ length: 4 }).map((_, index) => (
          <div 
            key={index} 
            className="space-y-4 p-4 border border-[var(--glass-border)] bg-[var(--card-bg)]/20 rounded-3xl backdrop-blur-sm shadow-sm"
          >
            {/* Visual Media Thumbnail Cover Placeholder */}
            <Skeleton className="h-44 w-full rounded-2xl opacity-70" />
            
            {/* Content Details Label Lines */}
            <div className="space-y-2.5 px-1 pb-2">
              <Skeleton className="h-5 w-3/4 rounded-lg opacity-80" />
              <Skeleton className="h-4 w-1/2 rounded-md opacity-50" />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default PopularCardLoading;