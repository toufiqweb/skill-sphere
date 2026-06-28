"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "Software Engineer",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    text: "SkillSphere completely transformed my career path. The instructors are top-notch and the community is incredibly supportive!",
  },
  {
    id: 2,
    name: "Mark Williams",
    role: "UX Designer",
    avatar: "https://i.pravatar.cc/150?u=a04258a2462d826712d",
    text: "The UI/UX course was phenomenal. I landed my dream job just two months after completing the rigorous curriculum.",
  },
  {
    id: 3,
    name: "Samantha Lee",
    role: "Data Analyst",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    text: "I loved how practical the data science projects were. I felt like I was actually working on real-world problems from day one.",
  },
  {
    id: 4,
    name: "David Chen",
    role: "Marketing Specialist",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026302d",
    text: "The digital marketing strategies taught here are extremely up-to-date and practical. Highly recommend to everyone!",
  },
  {
    id: 5,
    name: "Emma Davis",
    role: "Product Manager",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    text: "A fantastic platform for continuous learning. The quality of content is unparalleled compared to other platforms.",
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Frontend Developer",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026708c",
    text: "As a self-taught developer, the structured paths gave me exactly what I needed to level up my React skills.",
  },
  {
    id: 7,
    name: "Sophia Martinez",
    role: "Backend Engineer",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026025d",
    text: "The Node.js and system design courses are incredible. Complex topics are broken down so easily.",
  },
  {
    id: 8,
    name: "Daniel Taylor",
    role: "Graphic Designer",
    avatar: "https://i.pravatar.cc/150?u=a04258a2462d826713d",
    text: "Learning advanced design principles here was a breeze. The instructors really know how to engage the students.",
  },
];

const rowOne = reviews.slice(0, 4);
const rowTwo = reviews.slice(4, 8);

const ReviewCard = ({ review }) => {
  return (
    <div className="w-[350px] mx-4 p-6 glass-card rounded-2xl border border-card-border flex flex-col justify-between hover:shadow-glow transition-shadow duration-300">
      <div className="mb-4 flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
        ))}
      </div>
      <p className="text-sm font-medium text-muted leading-relaxed mb-6 flex-1">
        "{review.text}"
      </p>
      <div className="flex items-center gap-4">
        <div className="relative h-12 w-12 shrink-0">
          <Image
            src={review.avatar}
            alt={review.name}
            fill
            className="rounded-full object-cover ring-2 ring-card-border"
          />
        </div>
        <div>
          <h4 className="text-sm font-bold text-foreground tracking-tight">
            {review.name}
          </h4>
          <p className="text-[11px] font-medium text-muted">{review.role}</p>
        </div>
      </div>
    </div>
  );
};

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-24 section-light overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-mint mb-4 block">
          TESTIMONIALS
        </span>
        <h2 className="section-title mb-4">
          What Our <span className="text-main-gradient">Students</span> Say
        </h2>
        <p className="section-desc max-w-2xl mx-auto">
          Real feedback from our learners about their experience.
        </p>
      </div>

      <div
        className="relative flex flex-col gap-6 max-w-7xl mx-auto"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        }}
      >
        <Marquee
          speed={40}
          gradient={false}
          pauseOnHover={true}
          autoFill={true}
          className="py-2"
        >
          {rowOne.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </Marquee>

        <Marquee
          speed={30}
          direction="right"
          gradient={false}
          pauseOnHover={true}
          autoFill={true}
          className="py-2"
        >
          {rowTwo.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
