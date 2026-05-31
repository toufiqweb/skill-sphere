import React from "react";
import Link from "next/link";
import { Clock, Target, ArrowRight, BookOpen } from "lucide-react";

const learningTips = [
  {
    id: 1,
    title: "Effective Study Techniques",
    description:
      "Learn proven methods to improve focus and retention.",
    icon: BookOpen,
    iconColor: "text-purple-400",
    badges: [
      { text: "Study Smart", className: "bg-purple-500/10 text-purple-400" },
      { text: "Optimization", className: "bg-slate-500/10 text-slate-400" }
    ],
  },
  {
    id: 2,
    title: "Time Management",
    description:
      "Master time management and boost your productivity.",
    icon: Clock,
    iconColor: "text-emerald-400",
    badges: [
      { text: "Productivity", className: "bg-emerald-500/10 text-emerald-400" }
    ],
  },
  {
    id: 3,
    title: "Stay Focused & Motivated",
    description:
      "Tips to maintain motivation throughout your learning.",
    icon: Target,
    iconColor: "text-blue-400",
    badges: [
      { text: "Mindset", className: "bg-blue-500/10 text-blue-400" }
    ],
  },
];

const LearningTips = () => {
  return (
    <section className="relative overflow-hidden bg-[#060419] py-16 lg:py-20">
      
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 h-[300px] w-[500px] -translate-y-1/2 rounded-full bg-indigo-500/5 blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Block matching ChatGPT Image May 31, 2026, 03_05_55 PM_11.png */}
        <div className="mb-10 flex flex-col justify-between items-start md:flex-row md:items-end gap-4">
          <div className="space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-violet-400 block">
              LEARNING RESOURCES
            </span>
            <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
              Learning Tips & Guides
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">
              Practical tips and insights to accelerate your learning journey.
            </p>
          </div>

          <Link
            href="/tips"
            className="text-[11px] font-medium text-slate-300 border border-slate-800 rounded-full px-4 py-1.5 hover:bg-white/5 hover:text-white transition-all duration-300"
          >
            View All Tips
          </Link>
        </div>

        {/* 3-Column Content Grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {learningTips.map((tip) => {
            const Icon = tip.icon;

            return (
              <div
                key={tip.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/5 bg-[#0b0826]/30 p-6 transition-all duration-300 hover:border-white/10 hover:bg-[#0f0b34]/40 min-h-[190px]"
              >
                <div>
                  {/* Row for Multiple Badges */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {tip.badges.map((badge, idx) => (
                      <span 
                        key={idx} 
                        className={`text-[9px] font-bold px-2 py-0.5 rounded ${badge.className}`}
                      >
                        {badge.text}
                      </span>
                    ))}
                  </div>

                  {/* Card Title Layer */}
                  <h3 className="text-sm font-bold text-white tracking-tight sm:text-base mb-2">
                    {tip.title}
                  </h3>

                  {/* Card Description Paragraph */}
                  <p className="text-xs text-slate-400 leading-relaxed font-medium">
                    {tip.description}
                  </p>
                </div>

                {/* Unified Footer Call-To-Action Link */}
                <div className="mt-6 flex items-center justify-between">
                  <Link
                    href="/tips"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-violet-400 transition-all duration-300 hover:text-violet-300 group-hover:gap-2"
                  >
                    Read More
                    <ArrowRight size={12} className="mt-0.5 transition-transform duration-300" />
                  </Link>

                  {/* Contextual Icon Indicator */}
                  <Icon className={`${tip.iconColor} opacity-40 group-hover:opacity-90 transition-all duration-300`} size={16} />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default LearningTips;