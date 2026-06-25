import { Skeleton } from "@heroui/react";
import React from "react";

const NewReleasesLoading = () => {
  return (
    <div className="container mx-auto my-20 space-y-10 px-4 transition-colors duration-300 ">
      
      {/* Top Header Row Alignment */}
      <div className="flex flex-col md:flex-row justify-center gap-5 md:justify-between items-center">
        <div className="flex items-center gap-3">
          <Skeleton className="h-12 w-12 rounded-2xl hidden sm:block opacity-60" />
          <Skeleton className="h-8 w-40 rounded-lg opacity-80" />
        </div>

        <Skeleton className="h-6 w-48 rounded-lg opacity-60" />
      </div>

      {/* Dynamic Render Pipeline Iteration */}
      <div className="flex flex-col gap-6">
        {Array.from({ length: 4 }).map((_, index) => (
          <div 
            key={index} 
            className="w-full flex flex-col md:flex-row gap-5 p-5 border border-[var(--glass-border)] bg-[var(--card-bg)]/20 rounded-3xl shadow-sm backdrop-blur-sm"
          >
            {/* Visual Thumbnail Image Block Placeholder */}
            <Skeleton className="h-36 w-full md:w-44 rounded-2xl opacity-70 shrink-0" />
            
            {/* Structural Context Details Text Lines Layout */}
            <div className="flex-1 space-y-3 pt-1">
              <Skeleton className="h-6 w-2/3 rounded-xl opacity-80" />
              <Skeleton className="h-4 w-full rounded-lg opacity-50" />
              <Skeleton className="h-4 w-5/6 rounded-lg opacity-50" />
              
              {/* Lower Section Metadata Row Alignments */}
              <div className="flex justify-between items-end mt-6 pt-2">
                <div className="space-y-2.5">
                  <Skeleton className="h-3.5 w-24 rounded-md opacity-40" />
                  <Skeleton className="h-3.5 w-32 rounded-md opacity-40" />
                </div>
                
                {/* Action Interactive Execution Trigger Button Placeholder */}
                <Skeleton className="h-10 w-28 rounded-2xl opacity-70" />
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default NewReleasesLoading;