"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MoreVertical, Eye, Play, XCircle, EyeOff, Trash2 } from "lucide-react";

export default function AdminCoursesTable({
  courses,
  activeMenu,
  setActiveMenu,
  onAction,
}) {
  const dropdownRef = useRef(null);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        activeMenu.courseId &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !event.target.closest('button[data-action-trigger="true"]')
      ) {
        setActiveMenu({ courseId: null, top: 0, right: 0 });
      }
    };
    
    // Listen for mousedown and scroll events
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleClickOutside, true);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleClickOutside, true);
    };
  }, [activeMenu.courseId, setActiveMenu]);

  const toggleMenu = (e, courseId) => {
    e.stopPropagation();
    if (activeMenu.courseId === courseId) {
      setActiveMenu({ courseId: null, top: 0, right: 0 });
      return;
    }

    const rect = e.currentTarget.getBoundingClientRect();
    setActiveMenu({
      courseId,
      top: rect.bottom + window.scrollY + 8, // 8px spacing
      right: window.innerWidth - rect.right,
    });
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "published":
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
            Published
          </span>
        );
      case "pending":
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400">
            Needs Review
          </span>
        );
      case "rejected":
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">
            Rejected
          </span>
        );
      case "unpublished":
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700">
            Unpublished
          </span>
        );
      case "draft":
      default:
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300">
            Draft
          </span>
        );
    }
  };

  return (
    <>
      <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl shadow-sm overflow-visible transition-colors duration-300">
        <div className="overflow-x-auto min-h-[400px]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 dark:bg-zinc-800/50 border-b border-gray-200 dark:border-zinc-800 text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">
                <th className="px-6 py-4 font-semibold">Course</th>
                <th className="px-6 py-4 font-semibold">Instructor</th>
                <th className="px-6 py-4 font-semibold">Category</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-zinc-800">
              {courses.length === 0 ? (
                <tr>
                  <td colSpan="5" className="px-6 py-12 text-center text-gray-500 dark:text-gray-400">
                    <p className="text-sm font-medium">No courses found.</p>
                  </td>
                </tr>
              ) : (
                courses.map((course) => {
                  const courseId = course._id || course.id;
                  return (
                    <tr
                      key={courseId}
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
                            <p className="font-medium text-sm text-gray-900 dark:text-white line-clamp-1">
                              {course.instructor?.name || "Unknown Instructor"}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 border border-purple-200 dark:border-purple-800/50">
                          {course.category}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        {getStatusBadge(course.status)}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button
                          data-action-trigger="true"
                          onClick={(e) => toggleMenu(e, courseId)}
                          className={`p-2 rounded-lg transition-colors duration-200 cursor-pointer ${
                            activeMenu.courseId === courseId
                              ? "bg-gray-200 dark:bg-zinc-700 text-gray-900 dark:text-white"
                              : "text-gray-500 hover:bg-gray-100 dark:hover:bg-zinc-800 hover:text-gray-900 dark:hover:text-white"
                          }`}
                        >
                          <MoreVertical className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* FIXED OVERLAY MENU BREAKOUT */}
      {activeMenu.courseId && (
        <div
          ref={dropdownRef}
          style={{
            position: "fixed",
            top: `${activeMenu.top}px`,
            right: `${activeMenu.right}px`,
            zIndex: 9999,
          }}
          className="w-48 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl shadow-xl py-2 animate-in fade-in zoom-in-95 duration-100"
        >
          {(() => {
            const course = courses.find((c) => (c._id || c.id) === activeMenu.courseId);
            if (!course) return null;

            return (
              <div className="flex flex-col">
                <Link
                  href={`/courses/${activeMenu.courseId}`}
                  className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors w-full text-left"
                >
                  <Eye className="w-4 h-4 text-blue-500" />
                  View Details
                </Link>

                {course.status === "pending" && (
                  <>
                    <button
                      onClick={() => {
                        onAction(activeMenu.courseId, "approve", course.title);
                        setActiveMenu({ courseId: null, top: 0, right: 0 });
                      }}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors w-full text-left cursor-pointer"
                    >
                      <Play className="w-4 h-4 text-emerald-500" />
                      Approve Course
                    </button>
                    <button
                      onClick={() => {
                        onAction(activeMenu.courseId, "reject", course.title);
                        setActiveMenu({ courseId: null, top: 0, right: 0 });
                      }}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors w-full text-left cursor-pointer"
                    >
                      <XCircle className="w-4 h-4 text-red-500" />
                      Reject Course
                    </button>
                  </>
                )}

                {/* Published → show Unpublish */}
                {course.status === "published" && (
                  <button
                    onClick={() => {
                      onAction(activeMenu.courseId, "unpublish", course.title);
                      setActiveMenu({ courseId: null, top: 0, right: 0 });
                    }}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors w-full text-left cursor-pointer"
                  >
                    <EyeOff className="w-4 h-4 text-amber-500" />
                    Unpublish
                  </button>
                )}

                {/* Unpublished → show Publish */}
                {course.status === "unpublished" && (
                  <button
                    onClick={() => {
                      onAction(activeMenu.courseId, "publish", course.title);
                      setActiveMenu({ courseId: null, top: 0, right: 0 });
                    }}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors w-full text-left cursor-pointer"
                  >
                    <Play className="w-4 h-4 text-emerald-500" />
                    Publish
                  </button>
                )}

                <div className="h-px bg-gray-200 dark:bg-zinc-800 my-1"></div>

                <button
                  onClick={() => {
                    onAction(activeMenu.courseId, "delete", course.title);
                    setActiveMenu({ courseId: null, top: 0, right: 0 });
                  }}
                  className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors w-full text-left cursor-pointer"
                >
                  <Trash2 className="w-4 h-4" />
                  Delete Course
                </button>
              </div>
            );
          })()}
        </div>
      )}
    </>
  );
}
