import Image from "next/image";
import React from "react";
import bannerImage from "@/app/assets/banner.png";
import dot from "@/app/assets/dot.png";
import student from "@/app/assets/student.png";
import instructor from "@/app/assets/instructor.png";
import course from "@/app/assets/course.png";

const Banner = () => {
  return (
    <div className="container mx-auto px5 bg-[#e6edfc] my-10 rounded-2xl py-10">
      <div className="flex flex-col lg:flex-row justify-around items-center ">
        {/* right side */}
        <div className="max-h[60vh] flex items-center justify-center p-6">
          <div className="max-w-2xl w-full text-center">
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md border border-black/20 rounded-full px-5 py-2">
              <span className="text-white text-xl">🎓</span>
              <span className="text-main-gradient font-medium">
                Online Learning Platform
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-normal text-[#0F172A]  my-6">
              Upgrade Your
              <br />
              <span className="text-[#E0E7FF] text-main-gradient">
                Skills Today
              </span>
              <span className="ml-3"> 🚀</span>
            </h1>

            <p className="text-lg md:text-xl text-black/90 mb-10 max-w-md mx-auto">
              Learn from industry experts and advance your career with our
              high-quality online courses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-[#7C3AED] font-semibold px-8 py-3 rounded-2xl hover:bg-white/90 transition-all active:scale-95 shadow-lg">
                Explore Courses
              </button>

              <button className="border border-[#7C3AED]/70 text-[#7C3AED] font-medium px-8 py-3 rounded-2xl hover:bg-white/10 transition-all flex items-center gap-2">
                <div className="w-5 h-5 rounded-full border-2 border-[#7C3AED] flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#7C3AED] rounded-full"></div>
                </div>
                How It Works
              </button>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="flex  items-center justify-center p-6 relative ">
          <div className="relative  flex justify-center items-center w-full ">
            <div>
              {/* students*/}
              <div className=" absolute top-12 md:-left-10 lg:top-17 lg:-left-15  border shadow-sm border-black/10 rounded-3xl bg-white p-2.5 md:p-3">
                <div className="flex items-center gap-3 ">
                  <div className="p-2 rounded-2xl w-7 h-7 md:w-12 md:h-12 bg-purple-100">
                    <Image src={student} alt="student" width={34} height={34} />
                  </div>
                  <div className="flex flex-col">
                    <h2 className="font-bold text-sm md:text-lg">20K+</h2>
                    <p className="text-black/60 text-sm md:text-[16px]">
                      Active Students
                    </p>
                  </div>
                </div>
              </div>
              {/* instructor*/}
              <div className=" absolute md:bottom-45 -right-1 md:-right-15 lg:-right-10  border shadow-sm border-black/10 rounded-3xl bg-white p-2.5 md:p-3">
                <div className="flex items-center gap-3 ">
                  <div className="p-2 rounded-2xl w-7 h-7 md:w-12 md:h-12 bg-green-100">
                    <Image
                      src={instructor}
                      alt="instructor"
                      width={34}
                      height={34}
                    />
                  </div>
                  <div className="flex flex-col">
                    <h2 className="font-bold text-sm md:text-lg">200+</h2>
                    <p className="text-black/60 text-sm md:text-[16px]">
                      Expert Instructor
                    </p>
                  </div>
                </div>
              </div>
              {/* students*/}
              <div className=" absolute bottom-10 right-2  border shadow-sm border-black/10 rounded-3xl bg-white p-2.5 md:p-3">
                <div className="flex items-center gap-3 ">
                  <div className="p-2 rounded-2xl w-7 h-7 md:w-12 md:h-12 bg-orange-100">
                    <Image src={course} alt="course" width={34} height={34} />
                  </div>
                  <div className="flex flex-col">
                    <h2 className="font-bold text-sm md:text-lg">500+</h2>
                    <p className="text-black/60 text-sm md:text-[16px]">
                      Online Courses
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Image
              src={dot}
              alt="dot"
              width={75}
              height={75}
              className="absolute -bottom-6 -left-6 "
            />

            <Image
              src={dot}
              alt="dot"
              width={75}
              height={75}
              className="absolute -top-6 -right-6 "
            />

            <div className="">
              <Image
                src={bannerImage}
                alt="Woman learning"
                width={400}
                height={400}
                className="rounded-3xl shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
