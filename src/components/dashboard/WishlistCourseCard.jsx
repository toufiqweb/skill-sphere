"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, Heart, BookOpen, ArrowRight } from "lucide-react";

/**
 * WishlistCourseCard
 * ──────────────────
 * A clean, static (no Framer Motion) card designed exclusively for the
 * student Wishlist page. Matches the image reference design spec.
 *
 * Props
 * ─────
 * @param {object}   course     – Populated course object from /api/student/wishlist
 * @param {function} onRemove   – Called with (courseId, courseTitle) when the heart is clicked
 * @param {boolean}  isRemoving – When true, shows a spinner and disables the remove button
 */
export default function WishlistCourseCard({ course, onRemove, isRemoving = false }) {
  // Support both the flat wishlist shape and a generic course shape
  const courseId = course.courseId?.toString() || course._id?.toString() || course.id?.toString();
  const title      = course.title       ?? "Untitled Course";
  const image      = course.image       ?? "";
  const category   = course.category    ?? "";
  const rating     = course.rating      ?? 0;
  const lessons    = course.lessons     ?? 0;
  const price      = course.price       ?? 0;
  const originalPrice = course.originalPrice ?? 0;

  const handleRemove = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isRemoving) {
      onRemove(courseId, title);
    }
  };

  return (
    <div className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">

      {/* ── Thumbnail ─────────────────────────────────────── */}
      <div className="relative w-full aspect-video">
        {image ? (
          <Image
            fill
            src={image}
            alt={title}
            loading="lazy"
            className="object-cover"
          />
        ) : (
          // Fallback placeholder when no image URL exists
          <div className="absolute inset-0 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
            <span className="text-zinc-400 dark:text-zinc-600 text-xs font-medium">No image</span>
          </div>
        )}

        {/* Subtle bottom gradient so badges stay readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        {/* Category badge — top-left */}
        {category && (
          <span className="absolute top-3 left-3 bg-white/90 dark:bg-zinc-800/90 backdrop-blur-sm text-zinc-800 dark:text-zinc-200 text-xs font-semibold px-3 py-1 rounded-full">
            {category}
          </span>
        )}

        {/* Unified pill — top-right: rating + remove heart */}
        <div className="absolute top-3 right-3 flex items-center gap-2 bg-white/95 dark:bg-zinc-800/95 backdrop-blur-sm px-2.5 py-1.5 rounded-full shadow-sm">
          {/* Rating */}
          <div className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span className="text-xs font-bold text-zinc-700 dark:text-zinc-200 leading-none">
              {rating.toFixed(1)}
            </span>
          </div>

          {/* Divider */}
          <div className="w-px h-3.5 bg-zinc-200 dark:bg-zinc-700" />

          {/* Remove / Heart button */}
          <button
            onClick={handleRemove}
            disabled={isRemoving}
            aria-label="Remove from wishlist"
            className={`
              p-1 bg-red-50 dark:bg-red-950/50 rounded-full
              hover:scale-105 transition-transform
              ${isRemoving ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
            `}
          >
            {isRemoving ? (
              // Minimal inline spinner — no libraries needed
              <span className="block w-4 h-4 rounded-full border-2 border-red-400 border-t-transparent animate-spin" />
            ) : (
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            )}
          </button>
        </div>
      </div>

      {/* ── Content ───────────────────────────────────────── */}
      <div className="p-4 flex flex-col gap-2">

        {/* Course title */}
        <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 line-clamp-2 leading-snug">
          {title}
        </h3>

        {/* Meta row: lessons count + price + enroll CTA */}
        <div className="flex items-center justify-between text-sm text-zinc-500 dark:text-zinc-400 font-medium mt-1">
          {/* Left: lesson count */}
          <div className="flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 shrink-0" />
            <span>{lessons} lesson{lessons !== 1 ? "s" : ""}</span>
          </div>

          {/* Right: price block */}
          <div className="flex items-baseline gap-1.5">
            <span className="text-base font-black text-zinc-900 dark:text-zinc-100">
              ${price}
            </span>
            {originalPrice > price && (
              <span className="text-xs font-semibold line-through text-zinc-400">
                ${originalPrice}
              </span>
            )}
          </div>
        </div>

        {/* View / Enroll CTA */}
        <Link
          href={`/courses/${courseId}`}
          className="
            mt-1 w-full inline-flex items-center justify-center gap-1.5
            rounded-xl bg-gradient-to-r from-[#5643ff] to-[#6d5dfc]
            px-4 py-2.5 text-xs font-bold text-white
            shadow-sm shadow-indigo-600/10
            hover:brightness-110 hover:shadow-md hover:shadow-indigo-600/15
            transition-all duration-200
          "
        >
          View Course
          <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
        </Link>
      </div>
    </div>
  );
}
