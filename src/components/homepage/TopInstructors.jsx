import { Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaStar } from "react-icons/fa";

const instructors = [
  {
    id: 1,
    name: "John Doe",
    role: "Web Development Expert",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    rating: 4.8,
    students: "1.2K",
    courses: 12,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "UI/UX Design Expert",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    rating: 4.9,
    students: "856",
    courses: 8,
  },
  {
    id: 3,
    name: "Michael Smith",
    role: "Data Science Expert",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    rating: 4.7,
    students: "1.5K",
    courses: 15,
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Digital Marketing Expert",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    rating: 4.6,
    students: "734",
    courses: 9,
  },
];
const TopInstructors = () => {
  return (
    <div className="container mx-auto my-20 px-6 ">
      <div className="flex flex-col md:flex-row justify-center gap-5 md:justify-between items-center mb-10">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-[#f6f8fd]  hidden sm:inline-block   rounded-2xl">
            <Users className="w-7 h-7 text-violet-600 " />
          </div>
          <h2 className="text-3xl font-semibold text-gray-900 ">
            Top Instructors
          </h2>
        </div>

        <div className="flex items-center gap-2 group cursor-pointer">
          <Link
            href={"/"}
            className="text-main-gradient font-semibold transition-all duration-300 hover:opacity-80"
          >
            View All Instructors
          </Link>

          <FaArrowRight className="text-[#2563eb] transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-10">
        {instructors.map((instructor) => (
          <div
            key={instructor.id}
            className="group bg-white  rounded-3xl overflow-hidden border border-gray-100  hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className=" h-56 bg-linear-to-br from-blue-100 to-purple-100  flex items-center justify-center">
              <Image
                src={instructor.image}
                width={400}
                height={400}
                alt={instructor.name}
                className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-md"
              />
            </div>

            <div className="p-6 text-center">
              <h3 className="font-semibold  text-xl text-gray-900  mb-1">
                {instructor.name}
              </h3>
              <p className="text-gray-600  text-sm mb-4">{instructor.role}</p>

              <div className="flex items-center  justify-center gap-1 mb-5">
                <FaStar className="w-5 h-5 text-yellow-400" />
                <span className="font-semibold text-gray-900 ">
                  {instructor.rating}
                </span>
                <span className="text-gray-500  text-sm">
                  ({instructor.students}+ Students  &  {instructor.courses} Courses)
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopInstructors;
