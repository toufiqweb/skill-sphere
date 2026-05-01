import { Skeleton } from "@heroui/react";
import React from "react";

const NewReleasesLoading = () => {
  return (
    <div className="container mx-auto my-20 space-y-10 px-3">
      <div className="flex flex-col md:flex-row justify-center gap-5 md:justify-between items-center">
        <div className="flex items-center gap-3">
          <Skeleton className="h-12 w-12 rounded-2xl hidden sm:block" />
          <Skeleton className="h-8 w-40 rounded-lg" />
        </div>

        <Skeleton className="h-6 w-48 rounded-lg" />
      </div>
      <div className="flex flex-col gap-10">
        <div className="w-full flex flex-col md:flex-row gap-4 p-4 border rounded-2xl">
          <Skeleton className="h-35 w-full md:w-30 rounded-2xl" />
          <div className="flex-1 space-y-3">
            <Skeleton className="h-6 w-2/3 rounded-lg" />
            <Skeleton className="h-4 w-full rounded-lg" />
            <Skeleton className="h-4 w-5/6 rounded-lg" />
            <div className="flex justify-between items-center mt-6">
              <div className="space-y-2">
                <Skeleton className="h-4 w-24 rounded" />
                <Skeleton className="h-4 w-32 rounded" />
              </div>
              <Skeleton className="h-10 w-28 rounded-full" />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-4 p-4 border rounded-2xl">
          <Skeleton className="h-35 w-full md:w-30 rounded-2xl" />
          <div className="flex-1 space-y-3">
            <Skeleton className="h-6 w-2/3 rounded-lg" />
            <Skeleton className="h-4 w-full rounded-lg" />
            <Skeleton className="h-4 w-5/6 rounded-lg" />
            <div className="flex justify-between items-center mt-6">
              <div className="space-y-2">
                <Skeleton className="h-4 w-24 rounded" />
                <Skeleton className="h-4 w-32 rounded" />
              </div>
              <Skeleton className="h-10 w-28 rounded-full" />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-4 p-4 border rounded-2xl">
          <Skeleton className="h-35 w-full md:w-30 rounded-2xl" />
          <div className="flex-1 space-y-3">
            <Skeleton className="h-6 w-2/3 rounded-lg" />
            <Skeleton className="h-4 w-full rounded-lg" />
            <Skeleton className="h-4 w-5/6 rounded-lg" />
            <div className="flex justify-between items-center mt-6">
              <div className="space-y-2">
                <Skeleton className="h-4 w-24 rounded" />
                <Skeleton className="h-4 w-32 rounded" />
              </div>
              <Skeleton className="h-10 w-28 rounded-full" />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-4 p-4 border rounded-2xl">
          <Skeleton className="h-35 w-full md:w-30 rounded-2xl" />
          <div className="flex-1 space-y-3">
            <Skeleton className="h-6 w-2/3 rounded-lg" />
            <Skeleton className="h-4 w-full rounded-lg" />
            <Skeleton className="h-4 w-5/6 rounded-lg" />=
            <div className="flex justify-between items-center mt-6">
              <div className="space-y-2">
                <Skeleton className="h-4 w-24 rounded" />
                <Skeleton className="h-4 w-32 rounded" />
              </div>
              <Skeleton className="h-10 w-28 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewReleasesLoading;
