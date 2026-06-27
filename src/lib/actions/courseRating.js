"use server";

import { serverMutation } from "../core/server";
import { getTokenServer } from "../core/BetterAuthToken";
import { getUserServerSession } from "./getUserServerSession";
import { revalidatePath } from "next/cache";

export const rateCourseAction = async (courseId, ratingValue, reviewMessage) => {
  try {
    const user = await getUserServerSession();
    const token = await getTokenServer();

    if (!user || !token) {
      return { success: false, message: "Unauthorized. Please log in." };
    }

    const response = await serverMutation(
      "/api/courses/review",
      { courseId, ratingValue, reviewMessage },
      "POST",
      token,
      { "x-user-id": user.id }
    );

    if (response.success) {
      // Revalidate paths where this course might appear
      revalidatePath("/dashboard/my-learning");
      revalidatePath(`/courses/${courseId}`);
    }

    return response;
  } catch (error) {
    console.error("Failed to submit rating via Server Action:", error);
    return { success: false, message: error.message || "Failed to submit rating." };
  }
};
