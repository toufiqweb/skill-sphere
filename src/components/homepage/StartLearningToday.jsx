"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import girl from "@/assets/person4.png";
import {
  Star,
  User,
  ArrowRight,
  BookOpen,
  Award,
  Search,
  Sparkles,
  Play,
} from "lucide-react";

const StartLearningToday = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-28 transition-colors duration-300">
      {/* Decorative Background Glows */}
      <div className="absolute top-0 left-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-cyan/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-brand-ocean/10 blur-[100px] pointer-events-none" />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start max-w-2xl">
            {/* Top Premium Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/20 bg-brand-cyan/5 px-4 py-1.5 mb-6 backdrop-blur-sm animate-pulse">
              <Sparkles className="text-brand-cyan" size={14} />
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-cyan">
                Empower Your Potential
              </span>
            </div>

            {/* Main Action Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight leading-[1.1]">
              Start Learning Today. <br />
              <span className="bg-gradient-to-r from-brand-cyan via-brand-ocean to-brand-mint bg-clip-text text-transparent">
                Shape Your Future.
              </span>
            </h2>

            {/* Persuasive Description */}
            <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
              Join over 200,000+ professionals pushing boundaries. Unlock
              instant access to project-based courses taught exclusively by
              industry veterans.
            </p>

            {/* Interactive Quick Search / Action Hub */}
            <div className="w-full max-w-lg mb-8">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="relative flex items-center p-2 rounded-2xl border border-card-border bg-card/50 backdrop-blur-md shadow-lg focus-within:border-brand-ocean/50 transition-all duration-300"
              >
                <div className="flex items-center pl-3 text-muted-foreground w-full max-w-xs">
                  <Search
                    size={18}
                    className="mr-2 text-brand-ocean shrink-0"
                  />
                  <input
                    type="text"
                    placeholder="What do you want to learn?"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-transparent text-sm font-medium text-foreground placeholder:text-muted-foreground focus:outline-none"
                  />
                </div>
                <Link
                  href={`/courses?search=${encodeURIComponent(searchQuery)}`}
                  className="ml-auto shrink-0"
                >
                  <button className="flex items-center gap-2 rounded-xl bg-main-gradient px-6 py-3 text-sm font-bold text-white shadow-md hover:opacity-95 transition-all">
                    Explore
                    <ArrowRight size={16} />
                  </button>
                </Link>
              </form>
            </div>

            {/* Verified Trust Badges */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4 border-t border-card-border/60 w-full">
              <div className="flex items-center -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-9 w-9 rounded-full border-2 border-background bg-muted flex items-center justify-center text-[10px] font-bold text-foreground"
                  >
                    {i === 4 ? "+200k" : <User size={14} />}
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="text-amber-400 fill-amber-400"
                    />
                  ))}
                  <span className="text-xs font-bold text-foreground ml-1">
                    4.9/5 Rating
                  </span>
                </div>
                <span className="text-[11px] text-muted-foreground font-medium">
                  Trusted by learners at Google, Amazon, and Meta
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Learning Portal Mockup (Fixed padding and constraints) */}
          <div className="lg:col-span-5 relative w-full h-full min-h-[480px] pb-8 lg:pb-0 flex items-center justify-center">
            {/* Main Interactive Showcase Card */}
            <div className="relative w-full max-w-md bg-card border border-card-border/80 rounded-[2.5rem] p-6 shadow-2xl overflow-hidden backdrop-blur-xl group">
              {/* Graphic Profile Background */}
              <div className="relative w-full h-56 rounded-3xl overflow-hidden bg-gradient-to-br from-brand-ocean/20 to-brand-cyan/20 mb-6">
                <Image
                  src={girl}
                  alt="Student Interface"
                  fill
                  className="object-cover object-top drop-shadow-xl transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Floating Micro Indicator - Current Lesson */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 bg-background/90 backdrop-blur-md rounded-2xl p-2.5 shadow-lg border border-white/10">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-brand-cyan text-white shadow-sm">
                    <Play size={14} className="fill-white ml-0.5" />
                  </div>
                  <div className="flex flex-col overflow-hidden">
                    <span className="text-[11px] font-black tracking-tight truncate text-foreground">
                      UI/UX Mastery Workshop
                    </span>
                    <span className="text-[9px] font-medium text-muted-foreground">
                      Next up: Advanced Prototyping
                    </span>
                  </div>
                </div>
              </div>

              {/* Course Progression Tracker */}
              <div className="flex flex-col gap-2 mb-6">
                <div className="flex justify-between items-end">
                  <span className="text-xs font-extrabold tracking-wide uppercase text-brand-ocean">
                    Your Learning Journey
                  </span>
                  <span className="text-xs font-black text-foreground bg-brand-cyan/10 text-brand-cyan px-2 py-0.5 rounded-md">
                    75% Complete
                  </span>
                </div>
                <div className="h-2.5 w-full bg-muted/40 rounded-full overflow-hidden p-[1px]">
                  <div className="h-full bg-main-gradient rounded-full w-[75%] transition-all duration-1000 ease-out" />
                </div>
              </div>

              {/* Value Grid Badges */}
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-muted/30 border border-card-border/40">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-mint/10 text-brand-mint">
                    <BookOpen size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-black text-foreground">
                      500+ Courses
                    </span>
                    <span className="text-[10px] font-medium text-muted-foreground">
                      Premium content
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-2xl bg-muted/30 border border-card-border/40">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-cyan/10 text-brand-cyan">
                    <Award size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-black text-foreground">
                      Certificates
                    </span>
                    <span className="text-[10px] font-medium text-muted-foreground">
                      Verified wins
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartLearningToday;
