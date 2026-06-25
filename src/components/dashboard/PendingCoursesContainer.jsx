"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

import { getPendingCoursesClient, approveOrRejectCourse } from "@/lib/api/courses";

export default function PendingCoursesContainer({ user }) {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPendingCourses = async () => {
      try {
        const data = await getPendingCoursesClient(user.id);
        if (data.success) {
          setCourses(data.data);
        } else {
          toast.error(data.message || "Failed to fetch pending courses.");
        }
      } catch (error) {
        console.error("Error fetching pending courses:", error);
        toast.error("Network error fetching pending courses.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPendingCourses();
  }, [user.id]);

  const handleAction = async (courseId, actionType, courseTitle) => {
    const isApprove = actionType === "approve";

    const result = await Swal.fire({
      title: isApprove ? "Approve Course?" : "Reject Course?",
      text: isApprove
        ? `Are you sure you want to publish "${courseTitle}"?`
        : `Are you sure you want to reject "${courseTitle}"?`,
      icon: isApprove ? "success" : "warning",
      showCancelButton: true,
      confirmButtonColor: isApprove ? "#10b981" : "#ef4444",
      cancelButtonColor: "#6b7280",
      confirmButtonText: isApprove ? "Yes, Approve!" : "Yes, Reject!",
      background: "var(--bg-base-100, #ffffff)", // simple fallback
      color: "var(--text-base-content, #000000)",
    });

    if (result.isConfirmed) {
      try {
        const data = await approveOrRejectCourse(courseId, actionType, user.id);

        if (data.success) {
          // Instantly filter out the approved/rejected course from local state
          setCourses((prev) => prev.filter((c) => c._id !== courseId && c.id !== courseId));
          toast.success(data.message || `Course successfully ${actionType}d.`);
          
          Swal.fire({
            title: isApprove ? "Approved!" : "Rejected!",
            text: data.message || `The course has been ${actionType}d.`,
            icon: "success",
            timer: 2000,
            showConfirmButton: false,
          });
        } else {
          toast.error(data.message || "Failed to process action.");
        }
      } catch (error) {
        console.error("Error updating course status:", error);
        toast.error("Network error while updating course status.");
      }
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="w-10 h-10 animate-spin text-blue-600" />
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl shadow-sm overflow-hidden transition-colors duration-300">
      <div className="overflow-x-auto min-h-[400px]">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 dark:bg-zinc-800/50 border-b border-gray-200 dark:border-zinc-800 text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">
              <th className="px-6 py-4 font-semibold">Course</th>
              <th className="px-6 py-4 font-semibold">Instructor</th>
              <th className="px-6 py-4 font-semibold">Category</th>
              <th className="px-6 py-4 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-zinc-800">
            {courses.length === 0 ? (
              <tr>
                <td colSpan="4" className="px-6 py-12 text-center text-gray-500 dark:text-gray-400">
                  <div className="flex flex-col items-center justify-center space-y-3">
                    <div className="p-4 rounded-full bg-gray-100 dark:bg-zinc-800">
                      <CheckCircle className="w-8 h-8 text-gray-400 dark:text-gray-500" />
                    </div>
                    <p className="text-sm font-medium">No pending courses found.</p>
                    <p className="text-xs">You&apos;re all caught up!</p>
                  </div>
                </td>
              </tr>
            ) : (
              courses.map((course) => (
                <tr
                  key={course._id || course.id}
                  className="hover:bg-gray-50 dark:hover:bg-zinc-800/50 transition-colors group"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-12 rounded-lg overflow-hidden shrink-0 border border-gray-200 dark:border-zinc-700">
                        {course.image ? (
                          <Image
                            src={course.image}
                            alt={course.title}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-200 dark:bg-zinc-700 flex items-center justify-center">
                            <span className="text-xs text-gray-400">No Img</span>
                          </div>
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white line-clamp-1 max-w-[250px]">
                          {course.title}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                          ${course.price} • {course.level || "All Levels"}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center shrink-0">
                        <span className="text-sm font-medium text-blue-700 dark:text-blue-400">
                          {course.instructor?.name?.charAt(0).toUpperCase() || "U"}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-sm text-gray-900 dark:text-white">
                          {course.instructor?.name || "Unknown Instructor"}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {course.instructor?.email || ""}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 border border-purple-200 dark:border-purple-800/50">
                      {course.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <button
                        onClick={() => handleAction(course._id || course.id, "approve", course.title)}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20 dark:hover:bg-emerald-500/20"
                        title="Approve Course"
                      >
                        <CheckCircle className="w-4 h-4" />
                        <span>Approve</span>
                      </button>
                      <button
                        onClick={() => handleAction(course._id || course.id, "reject", course.title)}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-red-700 bg-red-50 hover:bg-red-100 border border-red-200 rounded-lg transition-colors dark:bg-red-500/10 dark:text-red-400 dark:border-red-500/20 dark:hover:bg-red-500/20"
                        title="Reject Course"
                      >
                        <XCircle className="w-4 h-4" />
                        <span>Reject</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
