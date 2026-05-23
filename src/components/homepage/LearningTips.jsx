import Link from "next/link";
import { Clock, Target, ArrowRight, BookOpen, Lightbulb } from "lucide-react";
import { FaArrowRight } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";

const learningTips = [
  {
    id: 1,
    title: "Effective Study Techniques",
    description:
      "Use active recall and spaced repetition to retain information faster and improve long-term memory.",
    icon: BookOpen,
    color: "text-violet-400",
    badge: "Study Smart",
  },
  {
    id: 2,
    title: "Time Management",
    description:
      "Create a structured study schedule and prioritize tasks to stay productive every day.",
    icon: Clock,
    color: "text-blue-400",
    badge: "Productivity",
  },
  {
    id: 3,
    title: "Stay Focused & Motivated",
    description:
      "Set achievable goals, avoid distractions, and celebrate progress to maintain momentum.",
    icon: Target,
    color: "text-emerald-400",
    badge: "Mindset",
  },
];

const LearningTips = () => {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-violet-600/10 blur-[120px]" />
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div className="mb-14 flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-4">
            <div className="glass-card rounded-2xl p-4">
              <IoBookSharp className="h-7 w-7 text-violet-400" />
            </div>

            <div>
              <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
                Student Success
              </span>

              <h2 className="text-3xl font-bold text-primary md:text-4xl">
                Learning Tips
              </h2>

              <p className="mt-2 text-sm text-muted md:text-base">
                Practical strategies to help you learn faster and achieve better
                results.
              </p>
            </div>
          </div>

          <Link
            href="/tips"
            className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl transition-all duration-300 hover:border-violet-500/40 hover:shadow-[0_0_30px_rgba(124,58,237,0.2)]"
          >
            <span className="text-main-gradient font-semibold">
              View All Tips
            </span>

            <FaArrowRight className="text-violet-400 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {learningTips.map((tip) => {
            const Icon = tip.icon;

            return (
              <div
                key={tip.id}
                className="group glass-card relative overflow-hidden rounded-3xl border border-white/10 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/20 hover:shadow-[0_20px_60px_rgba(124,58,237,0.12)]"
              >
                {/* Top Badge */}
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  <Lightbulb size={14} className="text-yellow-400" />

                  <span className="text-xs font-medium text-muted">
                    {tip.badge}
                  </span>
                </div>

                {/* Icon */}
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                  <Icon className={`${tip.color}`} size={30} />
                </div>

                {/* Content */}
                <h3 className="mb-3 text-xl font-bold text-primary">
                  {tip.title}
                </h3>

                <p className="mb-8 leading-relaxed text-muted">
                  {tip.description}
                </p>

                {/* Read More */}
                <Link
                  href="/tips"
                  className="inline-flex items-center gap-2 font-medium text-violet-400 transition-all duration-300 hover:gap-3"
                >
                  Read More
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300"
                  />
                </Link>

                {/* Bottom Gradient Line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-main-gradient transition-all duration-500 group-hover:w-full" />
              </div>
            );
          })}
        </div>
        <div className="mt-16 text-center">
          <p className="text-muted">
            Join <span className="text-violet-400 font-semibold">10,000+</span>{" "}
            learners already improving their skills every day.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LearningTips;
