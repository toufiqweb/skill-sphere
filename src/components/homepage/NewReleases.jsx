import { getAllCoursesData } from "@/lib/getAllCourses";
import Link from "next/link";
import React from "react";
import { FaArrowRight, FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { Card } from "@heroui/react";
import { IoSparklesSharp } from "react-icons/io5";
import Image from "next/image";

const NewReleases = async () => {
  const courses = await getAllCoursesData();
  // console.log(courses);

  const topCourses = courses.reverse().slice(0, 4);
  const renderStars = (rating) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (rating >= i - 0.5) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }

    return stars;
  };

  console.log(courses);
  return (
    <div className=" container mx-auto my-20 space-y-10 px-3">
      <div className="flex flex-col md:flex-row justify-center gap-5 md:justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center justify-center p-3 bg-yellow-100 rounded-2xl">
            <IoSparklesSharp className="w-7 h-7 text-yellow-500" />
          </div>

          <h2 className="text-3xl font-semibold text-gray-900">New Releases</h2>
        </div>

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

      <div className=" flex flex-col gap-10    ">
        {topCourses.map((course) => (
          <Card key={course.id} className="w-full items-stretch md:flex-row">
            <div className="relative h-35 w-full shrink-0 overflow-hidden rounded-2xl sm:h-30 sm:w-30">
              <Image
                alt={course.name}
                className="pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover select-none"
                loading="lazy"
                src={course.image}
                width={400}
                height={400}
              />
            </div>
            <div className="flex flex-1 flex-col gap-3">
              <Card.Header className="gap-1">
                <Card.Title className="pr-8 pt-1 text-xl">
                  {course.title}
                </Card.Title>
                <Card.Description>{course.description}</Card.Description>
              </Card.Header>
              <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-foreground">
                    {course.category}
                  </span>
                  <span className="text-xs text-muted flex items-center gap-2">
                    {renderStars(course.rating)}
                    <span className="ml-1 font-semibold">{course.rating}</span>
                  </span>
                </div>
                <Link href={`/courses/${course.id}`}>
                  <button className="bg-main-gradient w-full cursor-pointer text-white px-4 py-2 rounded-full font-medium hover:bg-blue-700 transition duration-300">
                    View Details
                  </button>
                </Link>
              </Card.Footer>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default NewReleases;
