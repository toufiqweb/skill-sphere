import { Skeleton, Spinner } from "@heroui/react";
import React from "react";

const loading = () => {
  return (
    <div className="min-h-screen container mx-auto px-5 my-10 space-y-10">
      <div className="text-center space-y-3">
        <Skeleton className="h-12 w-1/3 mx-auto rounded-lg" />
        <Skeleton className="h-6 w-2/3 mx-auto rounded-lg" />
      </div>

      <div className="w-full flex justify-center">
        <Skeleton className="h-12 w-full md:w-1/2 rounded-xl" />
      </div>

      <div className="min-h-[30vh] flex items-center justify-center">
        <div className="flex flex-col text-center items-center gap-2">
          <Spinner size="xl" />

          <p className="text-gray-500 text-lg">Loading courses...</p>
        </div>
      </div>
    </div>
  );
};

export default loading;
