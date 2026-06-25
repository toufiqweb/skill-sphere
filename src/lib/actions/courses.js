"use server";

/* eslint-disable react-hooks/rules-of-hooks */

import { revalidatePath } from "next/cache";
import { useUserServerSession } from "./getUserServerSession";
import { getTokenServer } from "../core/BetterAuthToken";
import { serverMutation } from "../core/server";

export const createCourse = async (courseData) => {
  try {
    // 1. Get user session on the server side
    const user = await useUserServerSession();
    if (!user) {
      return { success: false, error: "Unauthorized: You must be logged in." };
    }

    if (user.role !== "instructor" && user.role !== "admin") {
      return { success: false, error: "Unauthorized: Only instructors can create courses." };
    }

    const token = await getTokenServer();
    if (!token) {
      return { success: false, error: "Unauthorized: No active auth token found." };
    }

    // 2. Validate essential fields
    const {
      title,
      subTitle,
      category,
      duration,
      lessons,
      level,
      price,
      originalPrice,
      image,
      description,
      whatYoullLearn,
      requirements,
      curriculum,
    } = courseData;

    if (!title || !category || !lessons || !price || !image || !description) {
      return { success: false, error: "Please fill out all required fields." };
    }

    // 3. Construct finalized course object (adding secure instructor details from server session)
    const finalizedCourse = {
      title: String(title),
      subTitle: String(subTitle || ""),
      category: String(category),
      duration: String(duration || "Self-paced"),
      lessons: Number(lessons),
      level: String(level || "Beginner"),
      price: Number(price),
      originalPrice: Number(originalPrice || price),
      image: String(image),
      description: String(description),
      whatYoullLearn: Array.isArray(whatYoullLearn) ? whatYoullLearn.filter(Boolean) : [],
      requirements: Array.isArray(requirements) ? requirements.filter(Boolean) : [],
      instructor: {
        instructorId: String(user.id),
        name: String(user.name),
        role: String(user.role),
        email: String(user.email),
      },
      curriculum: Array.isArray(curriculum)
        ? curriculum.map((chap, idx) => ({
            id: chap.id || String(idx + 1).padStart(2, "0"),
            title: String(chap.title || ""),
            lectures: Number(chap.lectures || 0),
          })).filter(chap => chap.title !== "")
        : [],
    };

    // 4. Post mutation to the Express server API
    const response = await serverMutation(
      "/api/courses",
      finalizedCourse,
      "POST",
      token
    );

    // Revalidate paths to show the pending course in lists
    revalidatePath("/dashboard/my-courses");
    revalidatePath("/dashboard/pending-courses");
    revalidatePath("/courses");

    return response;
  } catch (error) {
    console.error("Error creating course:", error);
    return { success: false, error: error.message || "An unexpected error occurred." };
  }
};

export const deleteCourse = async (courseId) => {
  try {
    const user = await useUserServerSession();
    if (!user) {
      return { success: false, error: "Unauthorized: You must be logged in." };
    }

    const token = await getTokenServer();
    if (!token) {
      return { success: false, error: "Unauthorized: No active auth token found." };
    }

    // Call deletion API on backend
    const response = await serverMutation(
      `/api/courses/${courseId}`,
      null,
      "DELETE",
      token
    );

    revalidatePath("/dashboard/my-courses");
    revalidatePath("/courses");

    return response;
  } catch (error) {
    console.error("Error deleting course:", error);
    return { success: false, error: error.message || "An unexpected error occurred." };
  }
};
