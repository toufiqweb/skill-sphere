"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  // Generate paginated page numbers with ellipses
  const getPageNumbers = () => {
    const pages = [];
    const siblingCount = 1;
    const totalPageNumbers = 5; // Minimum slots to show

    if (totalPages <= totalPageNumbers) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
      return pages;
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 1;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3;
      for (let i = 1; i <= leftItemCount; i++) pages.push(i);
      pages.push("...");
      pages.push(totalPages);
    } else if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3;
      pages.push(1);
      pages.push("...");
      for (let i = totalPages - rightItemCount + 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else if (shouldShowLeftDots && shouldShowRightDots) {
      pages.push(1);
      pages.push("...");
      for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) {
        pages.push(i);
      }
      pages.push("...");
      pages.push(totalPages);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <nav
      className="flex items-center justify-center gap-2 select-none py-4"
      aria-label="Pagination Navigation"
    >
      {/* Previous Button */}
      <button
        type="button"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="flex items-center justify-center w-10 h-10 rounded-xl border border-card-border bg-card-bg text-primary hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-card-bg shadow-sm cursor-pointer"
        aria-label="Previous Page"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-1.5">
        {pageNumbers.map((page, idx) => {
          if (page === "...") {
            return (
              <span
                key={`dots-${idx}`}
                className="flex items-center justify-center w-10 h-10 text-muted font-bold text-sm tracking-wide"
              >
                &bull;&bull;&bull;
              </span>
            );
          }

          const isActive = page === currentPage;

          return (
            <button
              key={`page-${page}`}
              type="button"
              onClick={() => onPageChange(page)}
              className={`flex items-center justify-center w-10 h-10 text-sm font-bold rounded-xl transition-all duration-300 shadow-sm cursor-pointer hover:scale-[1.04] ${
                isActive
                  ? "bg-gradient-to-r from-[var(--primary-gradient-start)] to-[var(--primary-gradient-end)] text-white shadow-indigo-600/15"
                  : "bg-card-bg border border-card-border text-primary hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
              aria-label={`Page ${page}`}
              aria-current={isActive ? "page" : undefined}
            >
              {page}
            </button>
          );
        })}
      </div>

      {/* Next Button */}
      <button
        type="button"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="flex items-center justify-center w-10 h-10 rounded-xl border border-card-border bg-card-bg text-primary hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-card-bg shadow-sm cursor-pointer"
        aria-label="Next Page"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </nav>
  );
}
