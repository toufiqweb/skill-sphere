import React from "react";
import {
  FaUsers,
  FaBookOpen,
  FaChalkboardTeacher,
  FaStar,
} from "react-icons/fa";

const Stats = () => {
  return (
    <div className="bg-main-gradient container mx-auto py-6 rounded-xl text-white">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="flex flex-col items-center justify-center gap-2 border-white/20 md:border-r">
          <div className="flex items-center gap-2">
            <div className="bg-white/10 p-2 rounded-full">
              <FaUsers className="text-white" />
            </div>
            <p className="text-3xl font-bold">200k+</p>
          </div>
          <p className="text-white/70 text-sm">Happy Students</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 border-white/20 md:border-r">
          <div className="flex items-center gap-2">
            <div className="bg-white/10 p-2 rounded-full">
              <FaBookOpen className="text-white" />
            </div>
            <p className="text-3xl font-bold">500+</p>
          </div>
          <p className="text-white/70 text-sm">Online Courses</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 border-white/20 md:border-r">
          <div className="flex items-center gap-2">
            <div className="bg-white/10 p-2 rounded-full">
              <FaChalkboardTeacher className="text-white" />
            </div>
            <p className="text-3xl font-bold">200+</p>
          </div>
          <p className="text-white/70 text-sm">Expert Instructors</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex items-center gap-2">
            <div className="bg-white/10 p-2 rounded-full">
              <FaStar className="text-white" />
            </div>
            <p className="text-3xl font-bold">98%</p>
          </div>
          <p className="text-white/70 text-sm">Satisfaction Rate</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
