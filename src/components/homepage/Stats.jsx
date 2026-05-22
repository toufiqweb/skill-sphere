"use client";
import { motion } from "framer-motion";
import { Users, BookOpen, GraduationCap, Star } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const stats = [
  {
    icon: Users,
    value: "200K+",
    label: "Happy Students",
  },
  {
    icon: BookOpen,
    value: "500+",
    label: "Online Courses",
  },
  {
    icon: GraduationCap,
    value: "200+",
    label: "Expert Instructors",
  },
  {
    icon: Star,
    value: "98%",
    label: "Satisfaction Rate",
  },
];

export default function Stats() {
  return (
    <section className="relative w-full px-6 py-16 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative overflow-hidden rounded-3xl border border-(--glass-border) p-1 shadow-(--shadow-glow)"
          style={{ backgroundImage: "var(--gradient-primary)" }}
        >
          {/* Inner glass surface */}
          <div className="relative overflow-hidden rounded-[1.4rem] bg-[oklch(0.14_0.04_280/0.55)] backdrop-blur-xl">
            {/* Decorative blobs */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-(--brand-purple)/30 blur-[100px]" />
              <div className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-(--brand-blue)/25 blur-[100px]" />
            </div>

            {/* Grid */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage:
                  "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />

            <motion.ul
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="relative grid grid-cols-1 gap-y-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-0"
            >
              {stats.map(({ icon: Icon, value, label }, i) => (
                <motion.li
                  key={label}
                  variants={fadeUp}
                  className={`group relative flex flex-col items-center justify-center text-center ${
                    i < stats.length - 1
                      ? "lg:border-r lg:border-white/10"
                      : ""
                  }`}
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-(--glass-border) bg-linear-to-br from-white/10 to-white/2 backdrop-blur-xl transition-all duration-500 group-hover:scale-110 group-hover:border-white/25">
                    <div className="absolute inset-0 -z-10 rounded-2xl bg-linear-to-br from-(--brand-indigo)/0 to-(--brand-purple)/0 blur-xl transition-all duration-500 group-hover:from-(--brand-indigo)/40 group-hover:to-(--brand-purple)/40" />

                    <Icon
                      className="h-6 w-6 text-white"
                      strokeWidth={1.75}
                    />
                  </div>

                  <div
                    className="bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl"
                    style={{
                      backgroundImage: "var(--gradient-text)",
                    }}
                  >
                    {value}
                  </div>

                  <div className="mt-2 text-sm font-medium tracking-wide text-foreground/65">
                    {label}
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}