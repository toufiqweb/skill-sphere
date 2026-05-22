"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Rocket,
  PlayCircle,
  Users,
  UserCheck,
  BookOpen,
} from "lucide-react";

import bannerImage from "@/assets/banner.png";
import dot from "@/assets/dot.png";

const Banner = () => {
  // Framer Motion Animation Settings
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 35 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring", bounce: 0.2 } },
  };

  const floatAnimation = (delay) => ({
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay },
    },
  });

  return (
    <header className="bg-linear-to-br from-[#e6edfc] to-[#f4f7ff] pt-28 lg:pt-36 overflow-hidden">
      <div className="container mx-auto px-5 pb-16 lg:pb-24 relative">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-16 lg:gap-8">
          
          {/* Left Side: Content & Action Buttons */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="flex-1 flex flex-col items-center lg:items-start z-10"
          >
            <div className="max-w-2xl w-full text-center lg:text-left space-y-6">
              
              {/* Modern Micro-Badge */}
              <motion.div
                variants={fadeUp}
                className="flex w-fit mx-auto lg:mx-0 items-center gap-2 bg-white/80 backdrop-blur-md border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-full px-5 py-2"
              >
                <GraduationCap className="text-indigo-600 w-5 h-5" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 text-sm md:text-base font-bold tracking-wide">
                  Online Learning Platform
                </span>
              </motion.div>

              {/* High-Impact Typography Heading */}
              <motion.h1
                variants={fadeUp}
                className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.15] text-slate-900 tracking-tight"
              >
                Upgrade Your
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                  Skills Today
                </span>
                <Rocket className="inline-block ml-3 w-8 h-8 md:w-12 md:h-12 text-purple-500 animate-bounce" />
              </motion.h1>

              {/* Subtitle Paragraph */}
              <motion.p
                variants={fadeUp}
                className="text-base sm:text-lg md:text-xl text-slate-600 max-w-md mx-auto lg:mx-0 font-medium leading-relaxed"
              >
                Learn from industry experts and advance your career with our
                high-quality online courses.
              </motion.p>

              {/* Interactive Call to Actions */}
              <motion.div
                variants={fadeUp}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-2"
              >
                <Link href={"/courses"}>
                  <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold px-9 py-4 rounded-2xl hover:shadow-[0_15px_30px_rgba(79,70,229,0.4)] hover:-translate-y-1 transition-all duration-300 active:scale-95">
                    Explore Courses
                  </button>
                </Link>

                <button className="flex items-center gap-2.5 bg-white text-indigo-600 font-bold px-9 py-4 rounded-2xl hover:bg-slate-50 hover:shadow-lg transition-all duration-300 active:scale-95 border border-slate-100 group shadow-sm">
                  <PlayCircle className="w-5 h-5 group-hover:scale-110 transition-transform text-indigo-600" />
                  How It Works
                </button>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side: Structural Image & Dynamic Stat Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.93 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex-1 flex items-center justify-center relative p-4 w-full"
          >
            <div className="relative flex justify-center items-center w-full max-w-[440px] lg:max-w-[460px]">
              
              {/* Geometric Dot Decors */}
              <Image
                src={dot}
                alt="decoration dot"
                width={75}
                height={75}
                className="absolute -bottom-10 -left-10 opacity-40 select-none hidden sm:block"
              />
              <Image
                src={dot}
                alt="decoration dot"
                width={75}
                height={75}
                className="absolute -top-10 -right-10 opacity-40 select-none hidden sm:block"
              />

              {/* Hero Spotlight Background Glow */}
              <div className="absolute inset-0 bg-indigo-400/20 blur-3xl rounded-full scale-75 -z-10 animate-pulse"></div>

              {/* Premium Image Frame */}
              <div className="relative z-10 w-full aspect-square">
                <Image
                  src={bannerImage}
                  alt="Woman learning"
                  fill
                  className="rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] object-cover border-4 border-white"
                  priority
                  sizes="(max-w-7xl) 100vw, 450px"
                />
              </div>

              {/* Floating Stat Card 1: Active Students */}
              <motion.div
                variants={floatAnimation(0)}
                initial="initial"
                animate="animate"
                className="absolute -top-6 -left-4 md:-left-12 z-20 backdrop-blur-xl bg-white/90 border border-white/60 shadow-[0_20px_40px_rgba(0,0,0,0.08)] rounded-2xl p-3.5 md:p-4"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 shadow-xs">
                    <img src="" alt="" /><Users className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                  <div className="flex flex-col pr-3">
                    <h2 className="font-black text-slate-800 text-base md:text-xl leading-none mb-1">
                      20K+
                    </h2>
                    <p className="text-slate-500 text-xs md:text-sm font-semibold whitespace-nowrap">
                      Active Students
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Stat Card 2: Expert Instructors */}
              <motion.div
                variants={floatAnimation(1.6)}
                initial="initial"
                animate="animate"
                className="absolute top-1/2 -translate-y-1/2 -right-6 md:-right-14 z-20 backdrop-blur-xl bg-white/90 border border-white/60 shadow-[0_20px_40px_rgba(0,0,0,0.08)] rounded-2xl p-3.5 md:p-4"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 shadow-xs">
                    <UserCheck className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                  <div className="flex flex-col pr-3">
                    <h2 className="font-black text-slate-800 text-base md:text-xl leading-none mb-1">
                      200+
                    </h2>
                    <p className="text-slate-500 text-xs md:text-sm font-semibold whitespace-nowrap">
                      Expert Instructors
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Stat Card 3: Online Courses */}
              <motion.div
                variants={floatAnimation(0.8)}
                initial="initial"
                animate="animate"
                className="absolute -bottom-8 left-6 md:left-10 z-20 backdrop-blur-xl bg-white/90 border border-white/60 shadow-[0_20px_40px_rgba(0,0,0,0.08)] rounded-2xl p-3.5 md:p-4"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-orange-50 text-orange-600 shadow-xs">
                    <BookOpen className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                  <div className="flex flex-col pr-3">
                    <h2 className="font-black text-slate-800 text-base md:text-xl leading-none mb-1">
                      500+
                    </h2>
                    <p className="text-slate-500 text-xs md:text-sm font-semibold whitespace-nowrap">
                      Online Courses
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>
          
        </div>
      </div>
    </header>
  );
};

export default Banner;