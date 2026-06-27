"use server";

import { protectedServerFetch } from "../core/server";
import { getTokenServer } from "../core/BetterAuthToken";
import { getUserServerSession } from "./getUserServerSession";

/**
 * Server Action: Fetch the student's enrolled courses.
 * Securely retrieves session and token on the server and hits the backend.
 * 
 * @param {number} page - Current page
 * @param {number} limit - Items per page
 * @returns {{ success: boolean, data: Array, totalPages: number, currentPage: number, totalItems: number }}
 */
export const getEnrolledCoursesAction = async (page = 1, limit = 6) => {
  try {
    const user = await getUserServerSession();
    const token = await getTokenServer();

    if (!user || !token) {
      return { success: false, message: "Unauthorized. Please log in." };
    }

    // The backend uses studentMiddleware which explicitly looks for the x-user-id header
    return await protectedServerFetch(
      `/api/student/my-learning?page=${page}&limit=${limit}`, 
      token, 
      { "x-user-id": user.id }
    );
  } catch (error) {
    console.error("Failed to fetch enrolled courses via Server Action:", error);
    return { success: false, message: error.message || "Failed to fetch enrolled courses." };
  }
};
