"use client";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { easeInOut, motion } from "motion/react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

const CourseCard = ({ course }) => {
  const { id, rating, instructor, image, title } = course;
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
      className=" bg-white h-full flex flex-col rounded-2xl  overflow-hidden border border-gray-100 group   hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
    >
      <div>
        <Image
          alt={title}
          width={400}
          height={400}
          src={image}
          className="w-full h-60 object-cover"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="p-5 flex flex-col flex-1"
      >
        <div className="flex-1 space-y-4">
          <motion.h2
            variants={itemVariants}
            className="text-xl font-bold text-gray-800 line-clamp-1"
          >
            {title}
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="flex justify-between items-center"
          >
            <p className="text-gray-600 text-sm">{instructor}</p>
            <p className="flex items-center gap-2 font-semibold">
              <FaStar color="orange" /> {rating}
            </p>
          </motion.div>
        </div>

        <motion.div  variants={itemVariants}  className="mt-4">
          <Link href={`/courses/${id}`}>
            <button className="bg-main-gradient w-full cursor-pointer text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition duration-300">
              View Details
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CourseCard;
