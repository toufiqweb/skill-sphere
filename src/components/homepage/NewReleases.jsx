"use client";
import Link from "next/link";
import React from "react";
import { FaArrowRight, FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { Card } from "@heroui/react";
import { IoSparklesSharp } from "react-icons/io5";
import Image from "next/image";
import { motion } from "motion/react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const NewReleases = ({ courses }) => {
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

  return (
    <div className=" container mx-auto my-20 space-y-10 px-3">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row justify-center gap-5 md:justify-between items-center">
      
        <div className="flex items-center gap-3">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="hidden sm:flex items-center justify-center p-3 bg-yellow-100 rounded-2xl"
          >
            <IoSparklesSharp className="w-7 h-7 text-yellow-500" />
          </motion.div>

          <h2 className="text-3xl font-semibold text-gray-900">
            New Releases
          </h2>
        </div>

        <motion.div
          whileHover={{ x: 5 }}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <Link
            href={"/courses"}
            className="text-main-gradient font-semibold transition-all duration-300 hover:opacity-80"
          >
            View all courses
          </Link>

          <FaArrowRight className="text-[#2563eb] transition-transform duration-300 group-hover:translate-x-1" />
        </motion.div>
      </motion.div>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col gap-10"
      >
        {topCourses.map((course) => (
          <motion.div
            key={course.id}
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.01 }}
          >
            <Card className="w-full items-stretch md:flex-row overflow-hidden">
              <div className="relative h-35 w-full shrink-0 overflow-hidden rounded-2xl sm:h-30 sm:w-30">
                <motion.div whileHover={{ scale: 1.08 }}>
                  <Image
                    alt={course.name}
                    className="pointer-events-none absolute inset-0 h-full w-full object-cover select-none"
                    loading="lazy"
                    src={course.image}
                    width={400}
                    height={400}
                  />
                </motion.div>
              </div>

              <div className="flex flex-1 flex-col gap-3">
                <Card.Header className="gap-1">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    <Card.Title className="pr-8 pt-1 text-xl">
                      {course.title}
                    </Card.Title>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <Card.Description>{course.description}</Card.Description>
                  </motion.div>
                </Card.Header>

                <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col"
                  >
                    <span className="text-sm font-medium text-foreground">
                      {course.category}
                    </span>

                    <span className="text-xs text-muted flex items-center gap-2">
                      {renderStars(course.rating)}
                      <span className="ml-1 font-semibold">
                        {course.rating}
                      </span>
                    </span>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href={`/courses/${course.id}`}>
                      <button className="bg-main-gradient w-full cursor-pointer text-white px-4 py-2 rounded-full font-medium transition duration-300">
                        View Details
                      </button>
                    </Link>
                  </motion.div>
                </Card.Footer>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default NewReleases;