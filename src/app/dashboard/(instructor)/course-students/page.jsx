"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Users, Mail, BookOpen, Clock, Loader2 } from "lucide-react";
import { useSession } from "@/lib/auth-client";
import Pagination from "@/components/ui/Pagination";
import { getInstructorEnrolledStudentsClient } from "@/lib/api/courses";


export default function CourseStudentsPage() {
  const { data: session, isPending } = useSession();
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchStudents = async () => {
      if (!session?.user?.id) return;
      
      setIsLoading(true);
      try {
        const data = await getInstructorEnrolledStudentsClient(session.user.id, currentPage, 10);
        
        if (data.success) {
          setStudents(data.data);
          setTotalPages(data.totalPages || 1);
        } else {
          console.error("Failed to fetch students:", data.message);
        }
      } catch (error) {
        console.error("Error fetching students:", error);

      } finally {
        setIsLoading(false);
      }
    };

    fetchStudents();
  }, [currentPage, session?.user?.id]);

  // Format date helper
  const formatDate = (isoString) => {
    if (!isoString) return "N/A";
    const date = new Date(isoString);
    return new Intl.DateTimeFormat("en-US", { 
      year: "numeric", 
      month: "short", 
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    }).format(date);
  };

  if (isPending) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <Loader2 className="w-10 h-10 text-indigo-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto space-y-6 pb-10">
      {/* Header */}
      <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 flex items-start sm:items-center gap-5 shadow-sm">
        <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-500/10 rounded-2xl flex items-center justify-center shrink-0">
          <Users className="text-indigo-600 dark:text-indigo-400 w-7 h-7" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
            Enrolled Students
          </h1>
          <p className="text-sm text-gray-500 dark:text-zinc-400 mt-1">
            Monitor and manage students registered for your published courses.
          </p>
        </div>
      </div>

      {/* Content Area */}
      <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-3xl shadow-sm overflow-hidden">
        {isLoading ? (
          <div className="flex justify-center items-center py-24">
            <Loader2 className="w-8 h-8 text-indigo-500 animate-spin" />
          </div>
        ) : students.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 px-4 text-center">
            <div className="w-16 h-16 bg-gray-50 dark:bg-zinc-800/50 rounded-full flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-gray-400 dark:text-zinc-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No students found
            </h3>
            <p className="text-gray-500 dark:text-zinc-400 max-w-sm mx-auto">
              No students have registered for your courses yet. Once they enroll, their details will appear here.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-gray-50/80 dark:bg-zinc-800/50 text-xs uppercase font-bold text-gray-500 dark:text-zinc-400 tracking-wider">
                <tr>
                  <th scope="col" className="px-6 py-4 rounded-tl-3xl">Student Info</th>
                  <th scope="col" className="px-6 py-4">Enrolled Course</th>
                  <th scope="col" className="px-6 py-4">Enrollment Date</th>
                  <th scope="col" className="px-6 py-4 rounded-tr-3xl text-right">Amount Paid</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-zinc-800/60">
                {students.map((student) => (
                  <tr key={student._id} className="hover:bg-gray-50/50 dark:hover:bg-zinc-800/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-zinc-700 overflow-hidden shrink-0 border border-gray-200 dark:border-zinc-700">
                          {student.studentImage ? (
                            <Image 
                              src={student.studentImage} 
                              alt={student.studentName || "Student"} 
                              width={40} 
                              height={40}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 font-bold text-sm">
                              {(student.studentName || "S").charAt(0).toUpperCase()}
                            </div>
                          )}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-white">
                            {student.studentName || "Unknown Student"}
                          </div>
                          <div className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                            <Mail className="w-3 h-3" />
                            {student.studentEmail || "No email"}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-indigo-400 dark:text-indigo-500" />
                        <span className="font-medium text-gray-700 dark:text-gray-300 max-w-[200px] truncate">
                          {student.courseTitle}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400">
                        <Clock className="w-4 h-4 text-gray-400" />
                        {formatDate(student.createdAt)}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                        ${student.amount?.toFixed(2) || "0.00"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* COMPULSORY PAGINATION */}
      {students.length > 0 && (
        <Pagination 
          currentPage={currentPage} 
          onPageChange={(page) => setCurrentPage(page)} 
          totalPages={totalPages} 
          useUrlQuery={false}
        />
      )}
    </div>
  );
}
