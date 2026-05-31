import Link from "next/link";
import Image from "next/image";

import {
  Users,
  BookOpen,
  GraduationCap,
  Star,
  BadgeCheck,
  Briefcase,
  Award,
} from "lucide-react";

import { FaArrowRight } from "react-icons/fa";

const instructors = [
  {
    id: 1,
    name: "John Doe",
    role: "Web Development Expert",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    rating: 4.8,
    students: "1.2K",
    courses: 12,
    experience: "8+ Years",
    featured: true,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "UI/UX Design Expert",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    rating: 4.9,
    students: "856",
    courses: 8,
    experience: "6+ Years",
    featured: true,
  },
  {
    id: 3,
    name: "Michael Smith",
    role: "Data Science Expert",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    rating: 4.7,
    students: "1.5K",
    courses: 15,
    experience: "10+ Years",
    featured: true,
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Digital Marketing Expert",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    rating: 4.6,
    students: "734",
    courses: 9,
    experience: "7+ Years",
    featured: true,
  },
];

export default function TopInstructors() {
  return (
    <section className="relative overflow-hidden py-24">

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div className="mb-14 flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-4">
            <div className="glass-card rounded-2xl p-4">
              <Users className="h-7 w-7 text-violet-400" />
            </div>

            <div>
              <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
                Expert Mentors
              </span>

              <h2 className="text-3xl font-bold text-primary md:text-4xl">
                Top Instructors
              </h2>

              <p className="mt-2 text-sm text-muted md:text-base">
                Learn from industry-leading professionals with years of
                experience and proven teaching excellence.
              </p>
            </div>
          </div>

          <Link
            href="/instructors"
            className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl transition-all duration-300 hover:border-violet-500/40 hover:shadow-[0_0_30px_rgba(124,58,237,0.2)]"
          >
            <span className="text-main-gradient font-semibold">
              View All Instructors
            </span>

            <FaArrowRight className="text-violet-400 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {instructors.map((instructor) => (
            <div
              key={instructor.id}
              className="group overflow-hidden rounded-3xl glass-card transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]"
            >
              {/* Top Banner */}
              <div className="relative h-32 bg-gradient-to-br from-violet-500/20 via-purple-500/20 to-blue-500/20">
                {instructor.featured && (
                  <div className="absolute right-4 top-4 z-10">
                    <div className="rounded-full bg-main-gradient px-3 py-1 text-xs font-medium text-white shadow-lg">
                      Featured
                    </div>
                  </div>
                )}

                <div className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-1/2">
                  <Image
                    src={instructor.image}
                    alt={instructor.name}
                    width={120}
                    height={120}
                    className="h-28 w-28 rounded-full border-4 border-white object-cover shadow-xl transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="px-6 pb-6 pt-16 text-center">
                {/* Verified Badge */}
                <div className="mb-3 flex justify-center">
                  <div className="flex items-center gap-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1">
                    <BadgeCheck
                      size={14}
                      className="text-emerald-500"
                    />
                    <span className="text-xs font-medium text-emerald-500">
                      Verified Instructor
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-primary">
                  {instructor.name}
                </h3>

                <p className="mt-1 text-sm text-muted">
                  {instructor.role}
                </p>

                {/* Rating */}
                <div className="mt-4 flex items-center justify-center gap-2">
                  <Star
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />

                  <span className="font-semibold text-primary">
                    {instructor.rating}
                  </span>

                  <span className="text-sm text-muted">
                    Rating
                  </span>
                </div>

                {/* Tags */}
                <div className="mt-5 flex flex-wrap justify-center gap-2">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted">
                    🏆 Top Mentor
                  </span>

                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted">
                    ⭐ Expert Trainer
                  </span>
                </div>

                {/* Stats */}
                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <GraduationCap
                      size={18}
                      className="mx-auto mb-2 text-violet-400"
                    />

                    <p className="font-bold text-primary">
                      {instructor.students}
                    </p>

                    <p className="text-xs text-muted">
                      Students
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <BookOpen
                      size={18}
                      className="mx-auto mb-2 text-blue-400"
                    />

                    <p className="font-bold text-primary">
                      {instructor.courses}
                    </p>

                    <p className="text-xs text-muted">
                      Courses
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <Briefcase
                      size={18}
                      className="mx-auto mb-2 text-amber-400"
                    />

                    <p className="font-bold text-primary">
                      {instructor.experience}
                    </p>

                    <p className="text-xs text-muted">
                      Experience
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-main-gradient py-3 font-medium text-white transition-all duration-300 hover:scale-[1.02]">
                  <Award size={18} />
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}