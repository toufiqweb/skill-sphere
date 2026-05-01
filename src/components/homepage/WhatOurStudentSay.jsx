import { Avatar } from "@heroui/react";
import React from "react";
import {  FaQuoteLeft, FaStar } from "react-icons/fa";



const testimonial = [
  {
    id: 1,
    name: "Jessica Miller",
    role: "Web Developer",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
    review:
      "SkillSphere has completely transformed the way I learn. The courses are well-structured and the instructors are amazing!",
  },
  {
    id: 2,
    name: "David Anderson",
    role: "UI/UX Designer",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    review:
      "The content quality is top-notch and the support team is always there to help. Highly recommended!",
  },
  {
    id: 3,
    name: "Sophia Wilson",
    role: "Marketing Specialist",
    rating: 5,
    image:
      "https://i.pinimg.com/736x/82/48/b7/8248b74f7d5ac340fdb200ce349c20de.jpg",
    review:
      "I got a new job after completing the course. Thanks to SkillSphere for helping me achieve my career goals.",
  },
];

const WhatOurStudentSay = () => {
  return (
    <div className="container mx-auto px-6 my-20">
      <div className="flex items-center justify-center   mb-8">
        <h2 className="text-3xl font-bold text-gray-900 ">
          What Our <span className="text-main-gradient ">Student Say</span>
        </h2>
      </div>

      <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-10">
        {testimonial.map((test) => (
          <div
            key={test.id}
            className=" bg-[#f5f8ff]  rounded-3xl p-8 border border-gray-100 group hover:border-gray-200  hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="flex items-center gap-5">
              <FaQuoteLeft className="text-4xl text-[#7ca6ff]" />
              <div className=" text-orange-400 text-xl flex items-center gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>

            <p className="p-7  text-black/70 mb-3">{test.review}</p>

            <div className="flex gap-3 items-center">
              <Avatar>
                <Avatar.Image alt={test.name} src={test.image} />
                <Avatar.Fallback>JD</Avatar.Fallback>
              </Avatar>

              <div>
                <p className="text-black/80 font-semibold text-lg  ">
                  {test.name}
                </p>
                <p className="text-black/50   leading-relaxed ">{test.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatOurStudentSay;
