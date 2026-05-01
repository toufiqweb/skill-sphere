import Image from "next/image";
import React from "react";
import person from "@/assets/person.jpg";

const StartLearningToday = () => {
  return (
    <div className="container mx-auto px-5 my-20">
      <div className="border-t border-b  p-2 sm:p-10 border-base-100 justify-between flex flex-col lg:flex-row items-center gap-10 bg-white  overflow-hidden">
        <div className="flex-1  lg:border-r border-r-black/10">
          <Image
            height={250}
            width={400}
            src={person}
            alt="person"
            className="object-cover mx-auto "
          />
        </div>

        <div className="flex-1 w-full lg:w-1/2 p-8 space-y-5 ">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Start Learning, Today
          </h2>

          <p className="text-gray-600 text-base leading-relaxed">
            Join our
            <span className="font-semibold text-blue-600"> Skill-sphere </span>
            Online Learning Platform and upgrade your skills with high-quality
            courses. Learn at your own pace with expert instructors, real-world
            projects, and interactive lessons.
          </p>

          <p className="text-gray-500">
            Start your journey today and become job-ready with modern tech
            skills like Web Development, UI/UX Design, Programming, and more.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-2 text-sm text-gray-600">
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="font-semibold text-black/80">500+ Courses</p>
              <p>Updated regularly</p>
            </div>

            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="font-semibold text-black/80">Expert Instructors</p>
              <p>Industry professionals</p>
            </div>

            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="font-semibold text-black/80">10000+ Students</p>
              <p>Learning actively</p>
            </div>

            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="font-semibold text-black/80">Lifetime Access</p>
              <p>Learn anytime</p>
            </div>
          </div>

          <div className="flex gap-3 pt-3">
            <button className="bg-main-gradient px-6 cursor-pointer text-white py-3 rounded-full  hover:bg-blue-700 transition duration-300">
              Stat Learning
            </button>

            <button className="border border-gray-300 px-6 py-3 cursor-pointer rounded-full  hover:bg-gray-100 transition">
              Explore Courses
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartLearningToday;
