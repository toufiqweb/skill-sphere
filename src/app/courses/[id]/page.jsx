import React from "react";
import Image from "next/image";
import {
  Clock,
  Users,
  Award,
  PlayCircle,
  ChevronRight,
  BookOpen,
  Layers,
  Star,
  CheckCircle2,
  HelpCircle,
  TrendingUp,
  Bookmark,
  Sparkles,
  Info,
} from "lucide-react";
import { getAllCoursesData } from "@/lib/getAllCourses";
import { FaStar } from "react-icons/fa";

const learnPoints = [
  "Build real-world projects from scratch",
  "Master industry-standard tools",
  "Understand best practices",
  "Work on practical assignments",
  "Create portfolio-ready projects",
  "Gain job-ready skills",
];

const requirements = [
  "Basic computer knowledge",
  "Internet connection",
  "No prior experience required",
  "Willingness to learn and practice",
];

const reviews = [
  {
    name: "Alex Johnson",
    rating: 5,
    comment:
      "Excellent course. Everything is explained clearly with practical examples.",
  },
  {
    name: "Sarah Williams",
    rating: 5,
    comment: "One of the best online courses I've taken. Highly recommended.",
  },
  {
    name: "Michael Brown",
    rating: 4,
    comment: "Very detailed curriculum and easy-to-follow lessons.",
  },
];

const curriculum = [
  "Course Introduction & Overview",
  "Understanding the Fundamentals",
  "Core Concepts and Strategies",
  "Practical Tools & Techniques",
  "Advanced Strategies & Best Practices",
  "Hands-on Projects & Case Studies",
  "Common Challenges and Solutions",
  "Industry Best Practices",
  "Final Project & Assessment",
  "Course Summary & Next Steps",
];

export async function generateMetadata({ params }) {
  const { id } = await params;
  const courses = await getAllCoursesData();
  const course = courses.find((c) => c.id === Number(id));

  if (!course) {
    return {
      title: "Course Not Found | Skill Sphere",
      description: "The requested course could not be found.",
    };
  }

  return {
    title: `${course.title} | Skill Sphere`,
    description: course.description,
  };
}

const CourseDetailPage = async ({ params }) => {
  const { id } = await params;
  const courses = await getAllCoursesData();
  const course = courses.find((c) => c.id === Number(id));

  if (!course) {
    return (
      <div className="flex items-center justify-center min-h-screen text-primary text-xl font-medium">
        Course not found
      </div>
    );
  }

  return (
    <div className="hero-bg min-h-screen py-20 transition-colors duration-300">
      {/* =========================================================
          TOP BANNER SECTION
          ========================================================= */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="relative h-85 md:h-115 rounded-3xl overflow-hidden glass-card border border-(--glass-border) transition-transform duration-500">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover opacity-35 dark:opacity-40 mix-blend-luminosity dark:mix-blend-normal"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-background via-(--background)/40 to-transparent" />

          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 z-10">
            <div className="max-w-4xl">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-(--brand-purple)/10 dark:bg-(--brand-purple)/20 backdrop-blur-md text-xs sm:text-sm font-semibold tracking-wide text-(--brand-purple) border border-(--brand-purple)/20 uppercase mb-4">
                <Layers className="w-3.5 h-3.5" />
                {course.category || "General"}
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary leading-[1.15] mb-4">
                {course.title}
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-secondary max-w-2xl font-normal leading-relaxed line-clamp-2">
                {course.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          MAIN LAYOUT CONTENT SPLIT
          ========================================================= */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* LEFT CONTENT CONTAINER */}
          <div className="lg:col-span-8 space-y-8">
            {/* About Course Section */}
            <div className="glass-card rounded-3xl p-6 md:p-8 border border-(--glass-border)">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-primary mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-(--brand-purple)" />
                About This Course
              </h2>
              <p className="text-secondary leading-relaxed text-sm sm:text-base">
                Immerse yourself in a program explicitly curated to target
                current industry demands. This pathway integrates elementary
                baseline foundations with high-tier real-world structural
                paradigms. By pursuing targeted case exercises, you will
                transform conceptual theory into production-ready tactical
                configurations.
              </p>
            </div>

            {/* What You'll Learn Section */}
            <div className="glass-card rounded-3xl p-6 md:p-8 border border-(--glass-border)">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-primary mb-6 flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-(--brand-indigo)" />
                What You'll Learn
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {learnPoints.map((item, index) => (
                  <div key={index} className="flex gap-3 items-start group">
                    <div className="w-2 h-2 rounded-full bg-(--brand-indigo) mt-2 shrink-0 transition-transform group-hover:scale-150" />
                    <p className="text-secondary text-sm sm:text-base leading-tight">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements Section */}
            <div className="glass-card rounded-3xl p-6 md:p-8 border border-(--glass-border)">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-primary mb-5 flex items-center gap-2.5">
                <HelpCircle className="w-5 h-5 text-(--brand-blue)" />
                Requirements
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3.5">
                {requirements.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-secondary text-sm sm:text-base"
                  >
                    <ChevronRight className="w-4 h-4 text-(--brand-blue) shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Curriculum Section */}
            <div className="glass-card rounded-3xl p-6 md:p-8 border border-(--glass-border)">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-primary mb-6 flex items-center gap-3">
                <PlayCircle className="w-6 h-6 text-(--brand-purple)" />
                Course Curriculum
              </h2>
              <div className="space-y-3">
                {curriculum.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between border border-(--glass-border) rounded-2xl p-4 hover:bg-(--card-bg) transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-9 h-9 rounded-xl bg-(--brand-purple)/10 text-(--brand-purple) font-bold text-sm flex items-center justify-center shrink-0">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <p className="text-secondary text-sm sm:text-base font-medium group-hover:text-(--brand-purple) transition-colors">
                        {item}
                      </p>
                    </div>
                    <PlayCircle className="w-4 h-4 text-muted group-hover:text-(--brand-purple) transition-colors shrink-0" />
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews Section */}
            <div className="glass-card rounded-3xl p-6 md:p-8 border border-(--glass-border)">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-primary mb-6 flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                Student Reviews
              </h2>
              <div className="space-y-6">
                {reviews.map((review, index) => (
                  <div
                    key={index}
                    className="border-b border-(--glass-border) last:border-0 pb-5 last:pb-0"
                  >
                    <h4 className="font-semibold text-primary text-base">
                      {review.name}
                    </h4>
                    <div className="flex gap-0.5 my-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`w-3.5 h-3.5 ${i < review.rating ? "text-yellow-400" : "text-(--glass-border)"}`}
                        />
                      ))}
                    </div>
                    <p className="text-muted text-sm sm:text-base leading-relaxed">
                      {review.comment}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT STICKY SIDEBAR */}
          <div className="lg:col-span-4 lg:sticky lg:top-6 space-y-6">
            <div className="glass-card rounded-3xl border border-(--glass-border) p-6 md:p-8">
              {/* Pricing Blocks */}
              <div className="text-center mb-6">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-black tracking-tight text-primary">
                    ${course.price}
                  </span>
                  {course.originalPrice && (
                    <span className="line-through text-lg text-muted font-medium">
                      ${course.originalPrice}
                    </span>
                  )}
                </div>
                <p className="text-xs text-emerald-500 dark:text-emerald-400 font-semibold mt-3 bg-emerald-500/10 px-3 py-1 rounded-full inline-flex items-center gap-1 border border-emerald-500/20">
                  <Sparkles className="w-3 h-3" />
                  Special introductory promotional pricing
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button className="w-full bg-main-gradient text-white py-4 rounded-2xl font-bold text-base tracking-wide cursor-pointer select-none">
                  Enroll Now
                </button>
                <button className="w-full flex items-center justify-center gap-2 border border-(--glass-border) bg-(--card-bg) hover:bg-(--glass-border) text-primary font-semibold py-3.5 rounded-2xl text-sm transition-all cursor-pointer">
                  <Bookmark className="w-4 h-4" />
                  Add to Wishlist
                </button>
              </div>

              {/* Course Features Table Data */}
              <div className="mt-8 border-t border-(--glass-border) pt-6">
                <h3 className="font-bold text-primary text-base mb-4 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-(--brand-purple)" />
                  Course Details
                </h3>

                <div className="divide-y divide-(--glass-border) text-sm">
                  <div className="flex justify-between py-3">
                    <span className="text-muted flex items-center gap-2">
                      <Clock className="w-4 h-4" /> Duration
                    </span>
                    <span className="font-semibold text-primary">
                      {course.duration}
                    </span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="text-muted flex items-center gap-2">
                      <PlayCircle className="w-4 h-4" /> Lessons
                    </span>
                    <span className="font-semibold text-primary">
                      {course.lessons} lectures
                    </span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="text-muted flex items-center gap-2">
                      <Users className="w-4 h-4" /> Students
                    </span>
                    <span className="font-semibold text-primary">
                      {course.students?.toLocaleString() || "0"}
                    </span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="text-muted flex items-center gap-2">
                      <Award className="w-4 h-4" /> Skill Level
                    </span>
                    <span className="font-semibold text-primary">
                      {course.level}
                    </span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="text-muted flex items-center gap-2">
                      <Star className="w-4 h-4" /> Rating
                    </span>
                    <span className="font-semibold text-primary flex items-center gap-1">
                      {course.rating}{" "}
                      <FaStar className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    </span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="text-muted flex items-center gap-2">
                      <Layers className="w-4 h-4" /> Category
                    </span>
                    <span className="font-semibold text-primary">
                      {course.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Instructor Card Container */}
              <div className="mt-8 border-t border-(--glass-border) pt-6">
                <h3 className="font-bold text-primary text-base mb-4 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-(--brand-indigo)" />
                  Instructor
                </h3>
                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-(--card-bg) border border-(--glass-border)">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-tr from-(--primary-gradient-start) to-(--primary-gradient-end) text-white font-black text-lg flex items-center justify-center shrink-0 shadow-sm">
                    {course.instructor ? course.instructor[0] : "I"}
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-primary truncate text-base">
                      {course.instructor || "Lead Faculty"}
                    </h4>
                    <p className="text-xs text-muted truncate mt-0.5">
                      Senior Engineering Instructor
                    </p>
                  </div>
                </div>
              </div>

              {/* Micro Metrics Dashboard Counters */}
              <div className="mt-6 pt-6 border-t border-(--glass-border)">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-(--card-bg) rounded-2xl p-3.5 text-center border border-(--glass-border)">
                    <div className="text-lg font-black text-main-gradient inline-block">
                      {course.students
                        ? `${(course.students / 1000).toFixed(1)}k+`
                        : "1k+"}
                    </div>
                    <p className="text-[11px] font-bold tracking-wider uppercase text-muted mt-0.5">
                      Active Pupils
                    </p>
                  </div>
                  <div className="bg-(--card-bg) rounded-2xl p-3.5 text-center border border-(--glass-border)">
                    <div className="text-lg font-black text-primary">
                      {course.lessons || "0"}+
                    </div>
                    <p className="text-[11px] font-bold tracking-wider uppercase text-muted mt-0.5">
                      Video Asset
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;
