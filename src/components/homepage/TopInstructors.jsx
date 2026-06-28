"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Star,
  ArrowRight,
  User,
  PlayCircle,
  ShieldCheck,
  Diamond,
  TrendingUp,
  Sparkles,
  Briefcase,
} from "lucide-react";

const instructors = [
  {
    id: 1,
    name: "John Doe",
    role: "Senior Full Stack Developer",
    company: "Google",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    badge: "Top Rated",
    badgeIcon: Star,
    expertise: ["React", "Node.js", "System Design"],
    students: "120K+",
    rating: "4.9",
    courses: "58",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Product Designer & UI/UX Expert",
    company: "Figma",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    badge: "UI/UX Expert",
    badgeIcon: Diamond,
    expertise: ["UI Design", "Figma", "Prototyping"],
    students: "85K+",
    rating: "4.8",
    courses: "32",
  },
  {
    id: 3,
    name: "Michael Smith",
    role: "Growth & Digital Marketing Expert",
    company: "HubSpot",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    badge: "Marketing Pro",
    badgeIcon: TrendingUp,
    expertise: ["Growth", "SEO", "Analytics"],
    students: "95K+",
    rating: "4.9",
    courses: "41",
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "AI & Data Science Engineer",
    company: "OpenAI",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    badge: "AI Specialist",
    badgeIcon: Sparkles,
    expertise: ["Python", "Machine Learning", "AI"],
    students: "110K+",
    rating: "4.9",
    courses: "47",
  },
];

export default function TopInstructors() {
  return (
    <section className="relative overflow-hidden section-alt transition-colors duration-300 py-16 lg:py-24">
      {/* Background World Map Graphic Placeholder */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30 mix-blend-overlay">
        <div className="absolute top-0 right-0 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/3 rounded-full bg-brand-mint/10 blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Block matching exact layout of reference image */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="space-y-2 max-w-xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-mint block">
              OUR MENTORS
            </span>
            <h2 className="section-title">
              Learn from experts who&apos;ve done it
            </h2>
            <p className="section-desc">
              Industry professionals and thought leaders who bring real-world
              experience into every lesson.
            </p>
          </div>

          <Link
            href="/instructors"
            className="inline-flex items-center gap-2 rounded-full border border-brand-mint/50 bg-brand-mint/5 px-6 py-2.5 text-sm font-bold text-brand-mint transition-all duration-300 hover:bg-brand-mint hover:text-white"
          >
            <span>View all mentors</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Clean Glass Card Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {instructors.map((instructor) => {
            const Icon = instructor.badgeIcon;
            return (
              <div
                key={instructor.id}
                className="glass-card flex flex-col justify-between overflow-hidden rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl group"
              >
                <div>
                  {/* Top: Avatar & Badge */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="relative h-20 w-20 shrink-0">
                      <Image
                        src={instructor.image}
                        alt={instructor.name}
                        fill
                        className="rounded-full object-cover shadow-md"
                      />
                    </div>
                    <div className="flex items-center gap-1 rounded-full bg-brand-mint/10 px-3 py-1.5 text-[10px] font-bold text-brand-mint">
                      <Icon size={12} />
                      {instructor.badge}
                    </div>
                  </div>

                  {/* Name & Role */}
                  <div className="mb-6">
                    <h3 className="text-xl font-black text-foreground mb-1">
                      {instructor.name}
                    </h3>
                    <p className="text-xs font-medium text-muted leading-relaxed mb-2">
                      {instructor.role}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-foreground">
                      <Briefcase size={14} className="text-brand-ocean" />
                      {instructor.company}
                    </div>
                  </div>

                  {/* Expertise Pills */}
                  <div className="mb-6">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted/70 mb-3">
                      Expertise
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {instructor.expertise.map((skill, i) => (
                        <span
                          key={i}
                          className="rounded-full bg-muted/10 px-3 py-1 text-[11px] font-semibold text-foreground border border-card-border"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1 font-black text-sm text-foreground">
                        <User size={14} className="text-foreground shrink-0" />
                        {instructor.students}
                      </div>
                      <span className="text-[10px] font-medium text-muted">
                        Students
                      </span>
                    </div>

                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1 font-black text-sm text-foreground">
                        <Star size={14} className="text-foreground shrink-0" />
                        {instructor.rating}
                      </div>
                      <span className="text-[10px] font-medium text-muted">
                        Rating
                      </span>
                    </div>

                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1 font-black text-sm text-foreground">
                        <PlayCircle
                          size={14}
                          className="text-foreground shrink-0"
                        />
                        {instructor.courses}
                      </div>
                      <span className="text-[10px] font-medium text-muted">
                        Courses
                      </span>
                    </div>
                  </div>
                </div>

                {/* Footer Link */}
                <Link
                  href={`/instructors/${instructor.id}`}
                  className="flex items-center gap-3 border-t border-card-border pt-5"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-mint/10 text-brand-mint transition-colors group-hover:bg-brand-mint group-hover:text-white">
                    <ArrowRight size={14} />
                  </div>
                  <span className="text-xs font-bold text-brand-mint">
                    View Profile
                  </span>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Trusted By Companies Banner */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-8 rounded-3xl bg-card-bg/60 border border-card-border p-6 md:px-10 lg:px-12 backdrop-blur-sm">
          <div className="flex items-center gap-3 shrink-0">
            <ShieldCheck size={32} className="text-brand-mint" />
            <div className="flex flex-col">
              <span className="text-xs font-medium text-muted">
                Trusted by learners
              </span>
              <span className="text-sm font-black text-foreground">
                from top companies
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 md:gap-10 opacity-70 grayscale contrast-200">
            {/* Using text to represent company logos for now */}
            <span className="text-lg font-black tracking-tighter">Google</span>
            <span className="text-lg font-black tracking-tight flex items-center gap-1">
              <Diamond size={16} /> Microsoft
            </span>
            <span className="text-lg font-black tracking-tight text-[#ff385c]">
              airbnb
            </span>
            <span className="text-lg font-black tracking-tighter">amazon</span>
            <span className="text-lg font-black tracking-tighter">Meta</span>
          </div>
        </div>
      </div>
    </section>
  );
}
