import { FaQuoteLeft, FaStar, FaCheckCircle } from "react-icons/fa";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Jessica Miller",
    role: "Web Developer",
    rating: 5,
    image:
      "https://i.pinimg.com/736x/8b/46/d2/8b46d25ecd777e3a1e22829fa4f88eb1.jpg",
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
    <section className="relative overflow-hidden py-24">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-violet-600/10 blur-[120px]" />
        <div className="absolute right-10 bottom-10 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div className="mb-14 text-center">
          <span className="mb-3 inline-block rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-400">
            Testimonials
          </span>

          <h2 className="text-3xl font-bold text-primary sm:text-4xl lg:text-6xl">
            What Our
            <span className="text-main-gradient"> Students </span> Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Discover how our courses have helped students build skills, advance
            their careers, and achieve their goals.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((test) => (
            <div
              key={test.id}
              className="group relative overflow-hidden rounded-3xl glass-card border border-white/10 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/20 hover:shadow-[0_20px_60px_rgba(124,58,237,0.15)]"
            >
              {/* Quote Icon */}
              <div className="absolute right-6 top-6 opacity-10">
                <FaQuoteLeft className="text-7xl text-violet-500" />
              </div>

              {/* Rating */}
              <div className="mb-6 flex items-center gap-1">
                {[...Array(test.rating)].map((_, index) => (
                  <FaStar key={index} className="text-yellow-400" size={18} />
                ))}
              </div>

              {/* Review */}
              <p className="mb-8 leading-relaxed text-secondary">
                {`"${test.review}"`}
              </p>

              {/* User */}
              <div className="flex items-center gap-4">
                <div className="overflow-hidden rounded-full ring-2 ring-violet-500/20">
                  <Image
                    src={test.image}
                    alt={test.name}
                    width={56}
                    height={56}
                    className="h-14 w-14 object-cover"
                  />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-primary">{test.name}</h4>

                    <FaCheckCircle className="text-emerald-500" size={14} />
                  </div>

                  <p className="text-sm text-muted">{test.role}</p>

                  <span className="mt-1 inline-block text-xs text-violet-400">
                    Verified Student
                  </span>
                </div>
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-main-gradient transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatOurStudentSay;
