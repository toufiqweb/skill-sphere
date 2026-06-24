"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Check, Play } from "lucide-react";
import girl from "@/assets/girl.png";

const featuresList = [
  { text: "200+ Expert Courses" },
  { text: "500+ Expert Instructors" },
  { text: "Flexible Learning" },
  { text: "Lifetime Access" },
];

const StartLearningToday = () => {
  return (
    <section className="relative overflow-hidden bg-background transition-colors duration-300 py-16 lg:py-20">
      
      {/* Background Decorative Ambient Flares */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 h-[450px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/5 blur-[140px]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Core Layout Card Panel matching ChatGPT Image May 31, 2026, 03_05_55 PM_12.png */}
        <div className="overflow-hidden rounded-3xl border border-card-border transition-colors duration-300 bg-card-bg/30 transition-colors duration-300 p-8 sm:p-12 lg:p-16">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            
            {/* Left Column: Image Media block */}
            <div className="relative flex justify-center lg:col-span-5">
              <div className="absolute inset-0 m-auto h-64 w-64 rounded-full bg-indigo-500/10 blur-[80px]" />
              
              <div className="relative z-10 w-full max-w-[320px] sm:max-w-sm">
                <Image
                  src={girl}
                  alt="Student working on laptop"
                  width={420}
                  height={420}
                  priority
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>

            {/* Right Column: Copywriting & Actions stack */}
            <div className="space-y-6 lg:col-span-7 lg:pl-4">
              
              <div className="space-y-3">
                <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl transition-colors duration-300 ">
                  Start Learning,{" "}
                  <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                    Today
                  </span>
                </h2>
                
                <p className="text-xs sm:text-sm text-muted transition-colors duration-300 leading-relaxed max-w-xl font-medium">
                  Join thousands of learners who are already achieving their goals. Our platform delivers bite-sized premium learning engineered for modern industry application.
                </p>
              </div>

              {/* 2x2 Minimalist Checkmarks Matrix Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-lg pt-2">
                {featuresList.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-violet-500/30 bg-violet-500/10 transition-colors duration-300 group-hover:border-violet-400">
                      <Check className="text-violet-400" size={12} strokeWidth={3} />
                    </div>
                    <span className="text-xs font-semibold tracking-wide text-secondary transition-colors duration-300 ">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Call to Actions layout */}
              <div className="mt-4 flex flex-wrap items-center gap-4 pt-4">
                <Link href="/courses" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto rounded-xl bg-violet-600 px-7 py-3.5 text-xs font-bold text-white shadow-lg shadow-violet-600/20 hover:bg-violet-500 hover:shadow-violet-600/30 transition-all duration-300">
                    Start Learning Now
                  </button>
                </Link>

                <Link href="/demo" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl border border-slate-800 bg-transparent px-7 py-3.5 text-xs font-bold text-secondary transition-colors duration-300 hover:border-slate-700 hover:bg-foreground/5 transition-colors duration-300 hover:text-foreground transition-all duration-300 transition-colors duration-300 ">
                    <Play size={12} className="fill-current text-muted transition-colors duration-300 " />
                    Watch Demo
                  </button>
                </Link>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default StartLearningToday;