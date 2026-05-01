"use client";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import CourseCard from "../ui/CourseCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PopularCourses = ({ courses }) => {
  // const courses = await getAllCoursesData();
  // // console.log(courses);

  const topCourses = courses.sort((a, b) => b.rating - a.rating).slice(0, 8);

  console.log(topCourses);

  return (
    <div className=" container mx-auto my-20 space-y-10 px-3">
      <div className="flex flex-col md:flex-row justify-center gap-5 md:justify-between items-center">
        <h1 className="font-bold text-3xl sm:text-4xl ">
          <span className="hidden md:inline-block">🔥</span> Popular courses
        </h1>

        <div className="flex items-center gap-2 group cursor-pointer">
          <Link
            href={"/courses"}
            className="text-main-gradient font-semibold transition-all duration-300 hover:opacity-80"
          >
            View all courses
          </Link>

          <FaArrowRight className="text-[#2563eb] transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>

      <div className="w-full h-full py-5 relative overflow-hidden">
        <button className="custom-prev absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white text-[#7c3aed] p-3 shadow-lg transition hover:scale-105 hover:bg-[#7c3aed] hover:text-white">
          <ChevronLeft size={20} />
        </button>

        <button className="custom-next absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white text-[#7c3aed] p-3 shadow-lg transition hover:scale-105 hover:bg-[#7c3aed] hover:text-white">
          <ChevronRight size={20} />
        </button>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={50}
          className=" overflow-visible! "
          slidesPerView={4}
          watchOverflow={true}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          loop={true}
          autoplay={{ delay: 1500 }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },

            992: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {topCourses.map((course) => (
            <SwiperSlide key={course.id} className="h-auto! flex ">
              <CourseCard course={course} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PopularCourses;
