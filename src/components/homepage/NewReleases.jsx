"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import {
  Clock3,
  BookOpen,
  Star,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import { FaArrowRight } from "react-icons/fa";
import { IoSparklesSharp } from "react-icons/io5";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const NewReleases = ({ courses = [] }) => {
  const latestCourses = [...courses].reverse().slice(0, 4);

  return (
    <section className="relative overflow-hidden py-24">


      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col items-center justify-between gap-6 md:flex-row"
        >
          <div className="flex items-center gap-4">
            <div className="glass-card rounded-2xl p-4">
              <IoSparklesSharp className="h-7 w-7 text-yellow-400" />
            </div>

            <div>
              <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
                Fresh Content
              </span>

              <h2 className="text-3xl font-bold text-primary md:text-4xl">
                New Releases
              </h2>

              <p className="mt-2 text-sm text-muted md:text-base">
                Discover our newest courses and stay ahead of the curve.
              </p>
            </div>
          </div>

          <Link
            href="/courses"
            className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl transition-all duration-300 hover:border-yellow-500/40 hover:shadow-[0_0_30px_rgba(250,204,21,0.15)]"
          >
            <span className="font-semibold text-main-gradient">
              View All Courses
            </span>

            <FaArrowRight className="text-yellow-400 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Courses */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 lg:grid-cols-2"
        >
          {latestCourses.map((course) => (
            <motion.div
              key={course.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group glass-card overflow-hidden rounded-3xl"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="relative h-64 md:h-auto md:w-72 overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  <div className="absolute left-4 top-4">
                    <span className="rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                      {course.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  {/* Rating */}
                  <div className="mb-4 flex items-center gap-2">
                    <Star
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />

                    <span className="font-semibold text-primary">
                      {course.rating}
                    </span>

                    <span className="text-muted text-sm">
                      Course Rating
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-primary line-clamp-2">
                    {course.title}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-muted">
                    {course.description}
                  </p>

                  {/* Stats */}
                  <div className="mt-6 flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                      <BookOpen
                        size={16}
                        className="text-violet-400"
                      />

                      <span className="text-sm text-primary">
                        {course.lessons || 20} Lessons
                      </span>
                    </div>

                    <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                      <Clock3
                        size={16}
                        className="text-blue-400"
                      />

                      <span className="text-sm text-primary">
                        {course.duration || "12 Hours"}
                      </span>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="mt-auto pt-6">
                    <Link
                      href={`/courses/${course.id}`}
                      className="inline-flex items-center gap-2 rounded-xl bg-main-gradient px-5 py-3 font-medium text-white transition-all duration-300 hover:scale-105"
                    >
                      View Details

                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default NewReleases;