"use client";

import { useState, useTransition } from "react";
import { Bookmark } from "lucide-react";
import { toggleWishlistItem } from "@/lib/actions/wishlist";
import { toast } from "react-toastify";

export default function WishlistButton({ initialIsWishlisted, courseId, userId }) {
  const [isWishlisted, setIsWishlisted] = useState(initialIsWishlisted);
  const [isPending, startTransition] = useTransition();

  const handleToggle = () => {
    if (!userId) {
      toast.error("Please login to manage your wishlist");
      return;
    }

    // Optimistic update
    const previousState = isWishlisted;
    const newState = !previousState;
    setIsWishlisted(newState);

    startTransition(async () => {
      try {
        const res = await toggleWishlistItem(courseId, userId);
        if (!res?.success) {
          // Revert on failure
          setIsWishlisted(previousState);
          toast.error(res?.message || "Failed to update wishlist");
        } else {
          toast.success(res.message || (newState ? "Added to wishlist" : "Removed from wishlist"));
        }
      } catch (error) {
        setIsWishlisted(previousState);
        toast.error("An error occurred");
      }
    });
  };

  return (
    <button
      onClick={handleToggle}
      disabled={isPending}
      className={`w-full flex items-center justify-center gap-2 border border-card-border bg-transparent hover:bg-foreground/5 text-foreground font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all duration-200 ${isPending ? 'opacity-70 cursor-not-allowed' : ''}`}
    >
      <Bookmark className={`w-4 h-4 text-brand-cyan ${isWishlisted ? 'fill-brand-cyan' : ''}`} />
      {isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
    </button>
  );
}
