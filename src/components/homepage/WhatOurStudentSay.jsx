"use client";

import React from "react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

// Import Swiper React components and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles natively
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Alex Thompson",
    role: "Software Engineer",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face",
    review: "SkillSphere transformed my career. The courses are well-structured and the instructors are amazing!",
  },
  {
    id: 2,
    name: "Daniel Martinez",
    role: "Product Manager",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    review: "The hands-on projects helped me land my dream job. Highly recommended for anyone serious about tech.",
  },
  {
    id: 3,
    name: "Sophie Williams",
    role: "Data Analyst",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    review: "Excellent platform with quality content. The community support is also outstanding!",
  },
  {
    id: 4,
    name: "Marcus Vance",
    role: "Full Stack Engineer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    review: "The comprehensive curriculum bridged all the gaps in my self-taught React knowledge. Exceptional mentorship!",
  },
  {
    id: 5,
    name: "Elena Rostova",
    role: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    review: "I loved the feedback cycles on design submissions. It genuinely mirrors real studio environments.",
  },
  {
    id: 6,
    name: "Rajesh Kumar",
    role: "Cloud Architect",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
    review: "Passed my AWS Associate certification on the first try thanks to the realistic sandboxed practice tests.",
  },
];

const WhatOurStudentSay = () => {
  return (
    <section className="relative overflow-hidden bg-background transition-colors duration-300 py-16 lg:py-20">
      
      {/* Background Decorative Ambient Flares */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute bottom-1/2 left-1/2 h-[200px] w-[600px] -translate-x-1/2 rounded-full bg-indigo-500/5 blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Stack */}
        <div className="mb-12 text-center space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-violet-400 block">
            TESTIMONIALS
          </span>

          <h2 className="text-2xl font-black tracking-tight text-foreground sm:text-3xl lg:text-4xl transition-colors duration-300 ">
            What Our <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">Students</span> Say
          </h2>
          
          <p className="mx-auto max-w-md text-xs sm:text-sm text-muted transition-colors duration-300 font-medium">
            Real feedback from our learners about their experience.
          </p>
        </div>

        {/* Swiper Layout Component Container */}
        <div className="swiper-custom-wrapper">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              el: ".custom-swiper-pagination",
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="!pb-4"
          >
            {testimonials.map((test) => (
              <SwiperSlide key={test.id} className="h-auto">
                <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-card-border transition-colors duration-300 bg-card-bg/40 transition-colors duration-300 p-6 transition-all duration-300 hover:border-card-border transition-colors duration-300 hover:bg-card-bg/50 transition-colors duration-300 min-h-[190px]">
                  <div>
                    {/* 5-Star Rating Array Row */}
                    <div className="mb-3.5 flex items-center gap-0.5">
                      {[...Array(5)].map((_, index) => (
                        <FaStar key={index} className="text-amber-400" size={11} />
                      ))}
                    </div>

                    {/* Primary User Review Copy Block */}
                    <p className="text-xs font-medium leading-relaxed text-secondary transition-colors duration-300 ">
                      {`"${test.review}"`}
                    </p>
                  </div>

                  {/* Left-Aligned Identity Profile Footer Layout */}
                  <div className="mt-6 flex items-center gap-3">
                    <div className="relative h-9 w-9 overflow-hidden rounded-full border border-violet-500/20">
                      <Image
                        src={test.image}
                        alt={test.name}
                        width={36}
                        height={36}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="space-y-0.5">
                      <h4 className="text-xs font-bold text-foreground tracking-tight transition-colors duration-300 ">
                        {test.name}
                      </h4>
                      <p className="text-[10px] font-medium text-muted transition-colors duration-300 ">
                        {test.role}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Global Pagination Targeted Output Node */}
        <div className="custom-swiper-pagination mt-8 flex justify-center gap-2" />

      </div>

    </section>
  );
};

export default WhatOurStudentSay;