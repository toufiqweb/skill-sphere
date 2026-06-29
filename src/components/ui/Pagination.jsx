"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  useUrlQuery = false,
  totalItems,
  itemsPerPage = 10,
  onItemsPerPageChange,
  itemsPerPageOptions = [10, 20, 50, 100],
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Even if totalPages <= 1, we might still want to show the pagination bar 
  // if we want to allow changing rows per page. But to keep current function:
  if (totalPages <= 1 && !totalItems) return null;

  const handlePageChange = (page) => {
    if (useUrlQuery) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("page", page.toString());
      router.push(`${pathname}?${params.toString()}`);
    }
    
    if (onPageChange) {
      onPageChange(page);
    }
  };

  const handleItemsPerPageChange = (e) => {
    const newLimit = parseInt(e.target.value, 10);
    if (onItemsPerPageChange) {
      onItemsPerPageChange(newLimit);
    }
    // If using url query, we might want to set 'limit' and reset 'page' to 1
    if (useUrlQuery) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("limit", newLimit.toString());
      params.set("page", "1");
      router.push(`${pathname}?${params.toString()}`);
    }
  };

  // Calculate items range if totalItems is provided
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = totalItems ? Math.min(currentPage * itemsPerPage, totalItems) : currentPage * itemsPerPage;

  return (
    <div className="flex items-center justify-between w-full py-3 px-4 bg-white dark:bg-[#0d1117] border-y border-gray-100 dark:border-white/5 select-none">
      
      {/* Left side: Rows per page selector */}
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
          Show rows per page
        </span>
        <div className="relative">
          <select
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            disabled={!onItemsPerPageChange && !useUrlQuery}
            className="appearance-none bg-white dark:bg-[#101821] border border-gray-200 dark:border-white/10 text-[#3b7597] dark:text-[#5df8d8] font-medium text-sm rounded-lg pl-3 pr-8 py-1.5 focus:outline-none focus:ring-2 focus:ring-brand-mint/50 cursor-pointer disabled:opacity-50 disabled:cursor-default transition-colors"
          >
            {itemsPerPageOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {/* Custom chevron for select to match design */}
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-gray-500">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Right side: Info and Navigation */}
      <div className="flex items-center gap-6">
        <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
          {totalItems ? (
            <>
              <span className="font-semibold text-gray-900 dark:text-gray-200">{startItem}-{endItem}</span> of {totalItems}
            </>
          ) : (
            <>
              Page <span className="font-semibold text-gray-900 dark:text-gray-200">{currentPage}</span> of {totalPages}
            </>
          )}
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            className="flex items-center justify-center w-8 h-8 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent"
            aria-label="Previous Page"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <button
            type="button"
            disabled={currentPage === totalPages || totalPages === 0}
            onClick={() => handlePageChange(currentPage + 1)}
            className="flex items-center justify-center w-8 h-8 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent"
            aria-label="Next Page"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
