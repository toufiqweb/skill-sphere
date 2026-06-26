// Client-side wishlist API wrappers
// All calls go to the Express backend via NEXT_PUBLIC_BASE_URL

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:5000";

/**
 * Toggle a course in/out of the wishlist.
 * @param {string} courseId  - The MongoDB _id of the course
 * @param {string} userId    - The logged-in student's ID (sent as x-user-id header)
 * @returns {{ success: boolean, action: "added"|"removed", message: string }}
 */
export const toggleWishlistItem = async (courseId, userId) => {
  const res = await fetch(`${BASE_URL}/api/student/wishlist/toggle`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-user-id": userId,
    },
    body: JSON.stringify({ courseId }),
  });
  return res.json();
};

/**
 * Fetch the full wishlist with populated course data.
 * @param {string} userId
 * @param {number} page
 * @param {number} limit
 * @returns {{ success: boolean, data: Array, totalPages: number, currentPage: number, totalItems: number }}
 */
export const getWishlist = async (userId, page = 1, limit = 9) => {
  const res = await fetch(`${BASE_URL}/api/student/wishlist?page=${page}&limit=${limit}`, {
    headers: { "x-user-id": userId },
  });
  return res.json();
};

/**
 * Fetch only the array of wishlisted courseId strings (fast, lightweight).
 * Called on mount to seed the local wishlist state without fetching full data.
 * @param {string} userId
 * @returns {{ success: boolean, data: string[] }}
 */
export const getWishlistIds = async (userId) => {
  const res = await fetch(`${BASE_URL}/api/student/wishlist/ids`, {
    headers: { "x-user-id": userId },
  });
  return res.json();
};
