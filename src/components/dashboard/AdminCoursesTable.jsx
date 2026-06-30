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
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-[var(--brand-mint)]/10 text-[var(--brand-mint)] border border-[var(--brand-mint)]/20">
            Published
          </span>
        );
      case "pending":
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-500 border border-amber-500/20">
            Needs Review
          </span>
        );
      case "rejected":
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-rose-500/10 text-rose-500 border border-rose-500/20">
            Rejected
          </span>
        );
      case "unpublished":
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-foreground/5 text-foreground border border-card-border">
            Unpublished
          </span>
        );
      case "draft":
      default:
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-foreground/10 text-muted border border-card-border">
            Draft
          </span>
        );
    }
  };

  return (
    <>
      <div className="glass-card border border-card-border rounded-2xl shadow-card overflow-visible transition-colors duration-300">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-foreground/5 border-b border-card-border text-xs uppercase tracking-wider text-muted">
                <th className="px-6 py-4 font-bold">Course</th>
                <th className="px-6 py-4 font-bold">Instructor</th>
                <th className="px-6 py-4 font-bold">Category</th>
                <th className="px-6 py-4 font-bold">Status</th>
                <th className="px-6 py-4 font-bold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-card-border">
              {courses.length === 0 ? (
                <tr>
                  <td colSpan="5" className="px-6 py-12 text-center text-muted">
                    <p className="text-sm font-medium">No courses found.</p>
                  </td>
                </tr>
              ) : (
                courses.map((course) => {
                  const courseId = course._id || course.id;
                  return (
                    <tr
                      key={courseId}
                      className="hover:bg-foreground/5 transition-colors group"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <div className="relative w-16 h-12 rounded-lg overflow-hidden shrink-0 border border-card-border bg-foreground/5">
                            {course.image ? (
                              <Image
                                src={course.image}
                                alt={course.title}
                                fill
                                className="object-cover"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center">
                                <span className="text-xs font-medium text-muted">No Img</span>
                              </div>
                            )}
                          </div>
                          <div>
                            <h3 className="font-bold text-foreground line-clamp-1 max-w-[250px]">
                              {course.title}
                            </h3>
                            <p className="text-xs font-medium text-muted mt-0.5">
                              ${course.price} • {course.level || "All Levels"}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-[var(--brand-cyan)]/10 flex items-center justify-center shrink-0 border border-[var(--brand-cyan)]/20">
                            <span className="text-sm font-bold text-[var(--brand-cyan)]">
                              {course.instructor?.name?.charAt(0).toUpperCase() || "U"}
                            </span>
                          </div>
                          <div>
                            <p className="font-bold text-sm text-foreground line-clamp-1">
                              {course.instructor?.name || "Unknown Instructor"}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-[var(--brand-ocean)]/10 text-[var(--brand-ocean)] border border-[var(--brand-ocean)]/20">
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
                              ? "bg-foreground/10 text-foreground"
                              : "text-muted hover:bg-foreground/5 hover:text-foreground"
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
          className="w-48 glass-card border border-card-border rounded-xl shadow-card py-2 animate-in fade-in zoom-in-95 duration-100"
        >
          {(() => {
            const course = courses.find((c) => (c._id || c.id) === activeMenu.courseId);
            if (!course) return null;

            return (
              <div className="flex flex-col">
                <Link
                  href={`/courses/${course.slug || activeMenu.courseId}`}
                  className="flex items-center gap-3 px-4 py-2.5 text-sm font-bold text-foreground hover:bg-foreground/5 transition-colors w-full text-left"
                >
                  <Eye className="w-4 h-4 text-[var(--brand-cyan)]" />
                  View Details
                </Link>

                {course.status === "pending" && (
                  <>
                    <button
                      onClick={() => {
                        onAction(activeMenu.courseId, "approve", course.title);
                        setActiveMenu({ courseId: null, top: 0, right: 0 });
                      }}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm font-bold text-foreground hover:bg-foreground/5 transition-colors w-full text-left cursor-pointer"
                    >
                      <Play className="w-4 h-4 text-[var(--brand-mint)]" />
                      Approve Course
                    </button>
                    <button
                      onClick={() => {
                        onAction(activeMenu.courseId, "reject", course.title);
                        setActiveMenu({ courseId: null, top: 0, right: 0 });
                      }}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm font-bold text-foreground hover:bg-foreground/5 transition-colors w-full text-left cursor-pointer"
                    >
                      <XCircle className="w-4 h-4 text-rose-500" />
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
                    className="flex items-center gap-3 px-4 py-2.5 text-sm font-bold text-foreground hover:bg-foreground/5 transition-colors w-full text-left cursor-pointer"
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
                    className="flex items-center gap-3 px-4 py-2.5 text-sm font-bold text-foreground hover:bg-foreground/5 transition-colors w-full text-left cursor-pointer"
                  >
                    <Play className="w-4 h-4 text-[var(--brand-mint)]" />
                    Publish
                  </button>
                )}

                <div className="h-px bg-card-border my-1"></div>

                <button
                  onClick={() => {
                    onAction(activeMenu.courseId, "delete", course.title);
                    setActiveMenu({ courseId: null, top: 0, right: 0 });
                  }}
                  className="flex items-center gap-3 px-4 py-2.5 text-sm font-bold text-rose-500 hover:bg-rose-500/10 transition-colors w-full text-left cursor-pointer"
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
