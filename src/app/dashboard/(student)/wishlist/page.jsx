"use client";

import { useEffect, useState } from "react";
import { Heart, Sparkles, Search, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { toast } from "react-toastify";
import { useWishlist } from "@/lib/context/WishlistProvider";
import { getWishlist } from "@/lib/api/wishlist";
import { useUserClientSession } from "@/lib/api/getUserServerSession";
import WishlistCourseCard from "@/components/dashboard/WishlistCourseCard";
import Pagination from "@/components/ui/Pagination";

// ─────────────────────────────────────────────────────
// Wishlist Page — Student Dashboard
// ─────────────────────────────────────────────────────
export default function WishlistPage() {
  const { user, isPending: sessionPending } = useUserClientSession();
  const { toggleWishlist, loadingIds } = useWishlist();

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  
  const limit = 8; // Or 12 depending on grid preference, standardizing on 8 for 4-col layout. Let's stick to default 8

  // ── Fetch full wishlist on mount (or when user becomes available) ──────────
  useEffect(() => {
    if (sessionPending || !user?.id) return;

    let cancelled = false;
    setLoading(true);

    const fetchWishlist = async () => {
      try {
        const res = await getWishlist(user.id, currentPage, limit);
        if (!cancelled && res?.success) {
          setItems(res.data || []);
          setTotalPages(res.totalPages || 1);
        }
      } catch {
        if (!cancelled) toast.error("Failed to load wishlist.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchWishlist();

    return () => {
      cancelled = true;
    };
  }, [user?.id, sessionPending, currentPage]);

  // ── Optimistic remove: strip from local list, then call context toggle ─────
  const handleRemove = async (courseId, courseTitle) => {
    setItems((prev) =>
      prev.filter(
        (i) =>
          i.courseId?.toString() !== courseId &&
          i._id?.toString() !== courseId
      )
    );
    await toggleWishlist(courseId, courseTitle);
  };

  // ── Client-side search ────────────────────────────────────────────────────
  const filteredItems = items.filter((item) =>
    item.title?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full space-y-8 pb-12">

      {/* ── Page Header ──────────────────────────────────────────────────── */}
      <div className="relative overflow-hidden rounded-3xl border border-card-border bg-card-bg/40 p-6 sm:p-8 backdrop-blur-xl shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/5 via-transparent to-violet-500/5 pointer-events-none" />

        <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          {/* Left: title block */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-rose-500/10 text-rose-500">
                <Heart className="w-5 h-5 fill-rose-500" />
              </span>
              <span className="text-xs uppercase font-extrabold tracking-widest text-rose-500">
                Student Wishlist
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-primary tracking-tight">
              My Wishlist
            </h1>
            <p className="text-sm text-muted mt-1 font-medium">
              {loading
                ? "Loading your saved courses…"
                : `${items.length} course${items.length !== 1 ? "s" : ""} saved for later`}
            </p>
          </div>

          {/* Right: browse CTA */}
          <Link
            href="/courses"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-[var(--primary-gradient-start)] to-[var(--primary-gradient-end)] text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-2xl shadow-lg shadow-indigo-600/15 hover:shadow-indigo-600/30 transition-all duration-300 hover:scale-[1.02]"
          >
            <Sparkles className="w-4 h-4" />
            <span>Browse More Courses</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>

      {/* ── Search Bar (shown only when list is non-empty) ───────────────── */}
      {!loading && items.length > 0 && (
        <div className="relative max-w-md">
          <span className="absolute inset-y-0 left-4 flex items-center text-muted pointer-events-none">
            <Search className="w-4 h-4" />
          </span>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search your wishlist…"
            className="w-full pl-11 pr-10 py-3 rounded-xl bg-card-bg border border-card-border text-primary placeholder:text-muted focus:border-[var(--brand-purple)] focus:ring-2 focus:ring-[var(--brand-purple)]/15 outline-none transition-all text-sm font-medium"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute inset-y-0 right-3 flex items-center text-muted hover:text-primary transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      )}

      {/* ── Content Area ─────────────────────────────────────────────────── */}

      {/* Loading skeletons */}
      {loading && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="animate-pulse rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden shadow-sm"
            >
              {/* Thumbnail placeholder */}
              <div className="w-full aspect-video bg-zinc-100 dark:bg-zinc-800" />
              {/* Content placeholder */}
              <div className="p-4 space-y-3">
                <div className="h-4 rounded bg-zinc-100 dark:bg-zinc-800 w-5/6" />
                <div className="h-3 rounded bg-zinc-100 dark:bg-zinc-800 w-1/2" />
                <div className="h-9 rounded-xl bg-zinc-100 dark:bg-zinc-800 w-full mt-2" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Empty wishlist state */}
      {!loading && items.length === 0 && (
        <div className="flex flex-col items-center justify-center p-10 sm:p-20 text-center border-2 border-dashed border-card-border rounded-[32px] bg-card-bg/10 backdrop-blur-md">
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-rose-500/10 rounded-full blur-xl scale-125" />
            <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-rose-500/10 border border-rose-400/20 text-rose-400">
              <Heart className="w-10 h-10" />
            </div>
            <Sparkles className="absolute -top-1 -right-1 w-5 h-5 text-amber-400 animate-pulse" />
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-primary tracking-tight">
            Your wishlist is empty
          </h3>
          <p className="text-sm text-muted mt-2 max-w-sm mx-auto leading-relaxed">
            Browse our course catalogue and tap the{" "}
            <Heart className="inline w-3.5 h-3.5 text-rose-400" />{" "}
            heart icon on any course to save it here.
          </p>
          <Link
            href="/courses"
            className="mt-8 px-6 py-3 rounded-2xl bg-gradient-to-r from-[var(--primary-gradient-start)] to-[var(--primary-gradient-end)] text-white font-bold text-sm shadow-lg shadow-indigo-600/10 hover:shadow-indigo-600/25 transition-all hover:scale-[1.02]"
          >
            Explore Courses
          </Link>
        </div>
      )}

      {/* Search produced no results */}
      {!loading && items.length > 0 && filteredItems.length === 0 && (
        <div className="flex flex-col items-center justify-center p-12 text-center border border-card-border bg-card-bg/20 rounded-2xl">
          <Search className="w-10 h-10 text-muted mb-3" />
          <h4 className="text-lg font-bold text-primary">No matches found</h4>
          <p className="text-sm text-muted mt-1">Try a different search term.</p>
          <button
            onClick={() => setSearch("")}
            className="mt-4 px-4 py-2 border border-card-border rounded-xl text-xs font-bold uppercase tracking-wider text-primary hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Clear Search
          </button>
        </div>
      )}

      {/* ── Course grid ──────────────────────────────────────────────────── */}
      {!loading && filteredItems.length > 0 && (
        <div className="space-y-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => {
              const courseId =
                item.courseId?.toString() || item._id?.toString();
              return (
                <WishlistCourseCard
                  key={courseId}
                  course={item}
                  onRemove={handleRemove}
                  isRemoving={loadingIds.has(courseId)}
                />
              );
            })}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center pt-4">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(page) => setCurrentPage(page)}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
