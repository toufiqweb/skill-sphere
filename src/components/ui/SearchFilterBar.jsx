"use client";

import React from "react";
import { Search, X, ChevronDown, Grid, List } from "lucide-react";

/**
 * Reusable Search and Filter Bar Component
 *
 * @param {string} searchQuery - The current search text.
 * @param {function} onSearchChange - Function to call on search text change.
 * @param {function} onClearSearch - Function to call to clear search.
 * @param {string} searchPlaceholder - Placeholder text for the search input.
 * @param {Array} filters - Array of filter configurations:
 *   [{ value: string, onChange: function, options: [{value: string, label: string}] }]
 * @param {Object} sort - Sort configuration:
 *   { value: string, onChange: function, options: [{value: string, label: string}] }
 * @param {Object} viewMode - Grid/Table view configuration (optional):
 *   { value: "grid"|"table", onChange: function }
 */
export default function SearchFilterBar({
  searchQuery,
  onSearchChange,
  onClearSearch,
  searchPlaceholder = "Search...",
  filters = [],
  sort = null,
  viewMode = null,
}) {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-4 p-4 rounded-2xl border border-card-border bg-card-bg/20 backdrop-blur-md">
      {/* Searching */}
      <div className="relative flex-1 max-w-md">
        <span className="absolute inset-y-0 left-4 flex items-center text-muted">
          <Search className="w-4.5 h-4.5" />
        </span>
        <input
          type="text"
          placeholder={searchPlaceholder}
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-11 pr-4 py-3 rounded-xl bg-card-bg border border-card-border text-primary placeholder:text-muted focus:border-[var(--brand-purple)] focus:ring-2 focus:ring-[var(--brand-purple)]/15 outline-none transition-all text-sm font-medium"
        />
        {searchQuery && (
          <button
            onClick={onClearSearch}
            className="absolute inset-y-0 right-3 flex items-center text-muted hover:text-primary transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Filtering parameters */}
      <div className="flex flex-wrap items-center gap-3">
        {filters.map((filter, idx) => (
          <div key={`filter-${idx}`} className="relative">
            <select
              value={filter.value}
              onChange={(e) => filter.onChange(e.target.value)}
              className="appearance-none bg-card-bg border border-card-border text-primary font-bold text-xs uppercase tracking-wider pl-4 pr-10 py-3 rounded-xl focus:border-[var(--brand-purple)] outline-none cursor-pointer transition-all min-w-[150px]"
            >
              {filter.options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none" />
          </div>
        ))}

        {/* Sort Selection */}
        {sort && (
          <div className="relative">
            <select
              value={sort.value}
              onChange={(e) => sort.onChange(e.target.value)}
              className="appearance-none bg-card-bg border border-card-border text-primary font-bold text-xs uppercase tracking-wider pl-4 pr-10 py-3 rounded-xl focus:border-[var(--brand-purple)] outline-none cursor-pointer transition-all min-w-[140px]"
            >
              {sort.options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none" />
          </div>
        )}

        {/* Grid/Table Mode Toggles */}
        {viewMode && (
          <div className="flex border border-card-border rounded-xl bg-card-bg p-1.5 gap-1 self-stretch">
            <button
              onClick={() => viewMode.onChange("grid")}
              className={`p-2 rounded-lg transition-colors cursor-pointer ${
                viewMode.value === "grid"
                  ? "bg-[var(--brand-purple)] text-white"
                  : "text-muted hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
              title="Grid view"
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => viewMode.onChange("table")}
              className={`p-2 rounded-lg transition-colors cursor-pointer ${
                viewMode.value === "table"
                  ? "bg-[var(--brand-purple)] text-white"
                  : "text-muted hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
              title="Table view"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
