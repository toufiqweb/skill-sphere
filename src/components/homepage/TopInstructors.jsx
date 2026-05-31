"use client";

import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";

const instructors = [
  {
    id: 1,
    name: "John Doe",
    role: "Senior Full Stack Developer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    rating: 4.8,
    reviewsCount: "3.5K Students",
    experience: "8+",
    courses: 12,
    students: "50K+",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "UI/UX Design Expert",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    rating: 4.9,
    reviewsCount: "1.8K Students",
    experience: "6+",
    courses: 8,
    students: "32K+",
  },
  {
    id: 3,
    name: "Michael Smith",
    role: "Digital Marketing Expert",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    rating: 4.7,
    reviewsCount: "2.2K Students",
    experience: "10+",
    courses: 15,
    students: "45K+",
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Data Science Expert",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    rating: 4.6,
    reviewsCount: "2.5K Students",
    experience: "7+",
    courses: 10,
    students: "28K+",
  },
];

export default function TopInstructors() {
  return (
    <section className="relative overflow-hidden bg-[#060419] py-16 lg:py-20">
      
      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header matching exact layout of reference image */}
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-violet-400 block">
              OUR EXPERT INSTRUCTORS
            </span>
            <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
              Learn From Industry Experts
            </h2>
            <p className="text-xs text-slate-400 font-medium">
              Our instructors are industry professionals with years of real-world experience.
            </p>
          </div>

          <Link
            href="/instructors"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-semibold text-slate-300 transition-all duration-200 hover:border-white/20 hover:bg-white/10 hover:text-white"
          >
            View All Instructors
          </Link>
        </div>

        {/* Clean Glass Card Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {instructors.map((instructor) => (
            <div
              key={instructor.id}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#0b0826]/40 p-6 transition-all duration-300 hover:border-white/10 hover:bg-[#0f0b34]/60 hover:shadow-xl"
            >
              
              {/* Profile Headshot Block Layout */}
              <div className="relative mb-4 flex justify-center">
                <div className="relative h-20 w-20">
                  <Image
                    src={instructor.image}
                    alt={instructor.name}
                    width={80}
                    height={80}
                    className="h-full w-full rounded-full object-cover border-2 border-violet-500/20"
                  />
                  {/* Small verified dot decoration badge inside picture radius */}
                  <div className="absolute bottom-0 right-0 h-4 w-4 rounded-full bg-blue-500 border-2 border-[#0b0826] flex items-center justify-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-white" />
                  </div>
                </div>
              </div>

              {/* Identity & Typography Frame */}
              <div className="text-center">
                <h3 className="text-base font-bold text-white tracking-tight">
                  {instructor.name}
                </h3>
                <p className="text-[11px] font-medium text-slate-400 mt-0.5">
                  {instructor.role}
                </p>

                {/* Stars Component Group Row */}
                <div className="mt-2.5 flex items-center justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={10}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                  <span className="ml-1 text-[10px] font-semibold text-slate-400">
                    ({instructor.reviewsCount})
                  </span>
                </div>

                {/* Flattened Compact Data Stats Block Row Layout */}
                <div className="mt-5 grid grid-cols-3 border-t border-white/5 pt-4 text-center">
                  <div>
                    <p className="text-xs font-black text-white">{instructor.experience}</p>
                    <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-tight mt-0.5">Years Exp.</p>
                  </div>
                  <div className="border-x border-white/5">
                    <p className="text-xs font-black text-white">{instructor.courses}</p>
                    <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-tight mt-0.5">Courses</p>
                  </div>
                  <div>
                    <p className="text-xs font-black text-white">{instructor.students}</p>
                    <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-tight mt-0.5">Students</p>
                  </div>
                </div>

                {/* Primary Interaction Action Anchor */}
                <Link
                  href={`/instructors/${instructor.id}`}
                  className="mt-5 block w-full rounded-xl bg-violet-600 py-2 text-[11px] font-bold text-white transition-all duration-200 hover:bg-violet-500"
                >
                  View Profile
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}