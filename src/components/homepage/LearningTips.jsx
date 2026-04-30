import { Clock, Target, ArrowRight } from "lucide-react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import { MdMenuBook } from "react-icons/md";

const learningTips = [
  {
    id: 1,
    title: "Effective Study Techniques",
    description:
      "Use active recall and spaced repetition to remember more in less time.",
    color: "bg-blue-200 text-blue-600 ",
  },
  {
    id: 2,
    title: "Time Management",
    description:
      "Create a study schedule and stick to it. Consistency is the key to success.",
    color: "bg-purple-200 text-purple-600 ",
  },
  {
    id: 3,
    title: "Stay Focused & Motivated",
    description:
      "Set goals, eliminate distractions, and celebrate small achievements.",
    color: "bg-rose-200 text-rose-600 ",
  },
];

const LearningTips = () => {
  return (
    <div className="container mx-auto px-6 my-20">
      <div className="flex items-center justify-between  flex-col md:flex-row  gap-5 md:justify-between  mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-100 hidden sm:inline-block  rounded-xl">
            <IoBookSharp className="w-6 h-6 text-blue-600 " />
          </div>
          <h2 className="text-3xl font-semibold text-gray-900 ">
            Learning Tips
          </h2>
        </div>

        <div className="flex items-center gap-2 group cursor-pointer">
          <Link
            href={"/"}
            className="text-main-gradient font-semibold transition-all duration-300 hover:opacity-80"
          >
            View All Tips
          </Link>

          <FaArrowRight className="text-[#2563eb] transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>

      <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-10">
        {learningTips.map((learningTip) => (
          <div
            key={learningTip.id}
            className=" bg-linear-to-br from-purple-100  to-blue-100   rounded-3xl p-8 border border-gray-100 group hover:border-gray-200  hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <div
              className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${learningTip.color}`}
            >
              <div className="  flex items-center justify-center">
                {learningTip.title === "Effective Study Techniques" && (
                  <MdMenuBook className="w-7 h-7" />
                )}
                {learningTip.title === "Time Management" && (
                  <Clock className="w-7 h-7" />
                )}
                {learningTip.title === "Stay Focused & Motivated" && (
                  <Target className="w-7 h-7" />
                )}
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900  mb-3">
              {learningTip.title}
            </h3>

            <p className="text-gray-600  leading-relaxed mb-6">
              {learningTip.description}
            </p>

            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm  text-gray-600  group-hover:text-blue-600  transition-colors"
            >
              Read More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningTips;
