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
    <div className="w-full glass-card border border-card-border rounded-[24px] overflow-hidden shadow-card hover:shadow-[0_8px_30px_rgba(var(--brand-cyan-rgb),0.1)] transition-all duration-300">

      {/* ── Thumbnail ─────────────────────────────────────── */}
      <div className="relative w-full aspect-video p-2 pb-0">
        <div className="relative w-full h-full rounded-[20px] overflow-hidden bg-foreground/5">
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
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-muted text-xs font-bold">No image</span>
            </div>
          )}

          {/* Subtle bottom gradient so badges stay readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
        </div>

        {/* Category badge — top-left */}
        {category && (
          <span className="absolute top-5 left-5 bg-background/80 backdrop-blur-md border border-card-border text-foreground text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-sm">
            {category}
          </span>
        )}

        {/* Unified pill — top-right: rating + remove heart */}
        <div className="absolute top-5 right-5 flex items-center gap-2 bg-background/80 backdrop-blur-md border border-card-border px-2.5 py-1.5 rounded-full shadow-sm">
          {/* Rating */}
          <div className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 text-[#fbbf24] fill-[#fbbf24]" />
            <span className="text-xs font-black text-foreground leading-none">
              {rating.toFixed(1)}
            </span>
          </div>

          {/* Divider */}
          <div className="w-px h-3.5 bg-card-border" />

          {/* Remove / Heart button */}
          <button
            onClick={handleRemove}
            disabled={isRemoving}
            aria-label="Remove from wishlist"
            className={`
              p-1 bg-rose-500/10 rounded-full
              hover:scale-110 hover:bg-rose-500/20 transition-all
              ${isRemoving ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
            `}
          >
            {isRemoving ? (
              // Minimal inline spinner — no libraries needed
              <span className="block w-4 h-4 rounded-full border-2 border-rose-500 border-t-transparent animate-spin" />
            ) : (
              <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
            )}
          </button>
        </div>
      </div>

      {/* ── Content ───────────────────────────────────────── */}
      <div className="p-5 flex flex-col gap-3">

        {/* Course title */}
        <h3 className="text-base font-black text-foreground line-clamp-2 leading-snug">
          {title}
        </h3>

        {/* Meta row: lessons count + price + enroll CTA */}
        <div className="flex items-center justify-between text-xs font-bold text-muted mt-1">
          {/* Left: lesson count */}
          <div className="flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 shrink-0 text-[var(--brand-cyan)]" />
            <span>{lessons} lesson{lessons !== 1 ? "s" : ""}</span>
          </div>

          {/* Right: price block */}
          <div className="flex items-baseline gap-1.5">
            <span className="text-base font-black text-foreground">
              ${price}
            </span>
            {originalPrice > price && (
              <span className="text-[10px] font-bold line-through text-muted/50">
                ${originalPrice}
              </span>
            )}
          </div>
        </div>

        {/* View / Enroll CTA */}
        <Link
          href={`/courses/${course.slug || courseId}`}
          className="
            mt-2 w-full inline-flex items-center justify-center gap-2
            rounded-xl bg-gradient-to-r from-[var(--brand-cyan)] to-[var(--brand-ocean)]
            px-4 py-3 text-xs font-black text-background uppercase tracking-wider
            shadow-md shadow-[var(--brand-cyan)]/20
            hover:brightness-110 active:scale-[0.98]
            transition-all duration-300
          "
        >
          View Course
          <ArrowRight className="w-4 h-4" strokeWidth={3} />
        </Link>
      </div>
    </div>
  );
}
