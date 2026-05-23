import { Button } from "@heroui/react";
import {
  Mail,
  Sparkles,
  BadgeCheck,
  Users,
} from "lucide-react";

const LearningJourney = () => {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-violet-600/15 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-600/15 blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-main-gradient p-[1px]">
          <div className="relative rounded-[31px] bg-background/70 px-6 py-16 backdrop-blur-xl md:px-12">
            {/* Decorative Glow */}
            <div className="absolute -left-20 top-0 h-60 w-60 rounded-full bg-violet-500/20 blur-[100px]" />
            <div className="absolute -right-20 bottom-0 h-60 w-60 rounded-full bg-blue-500/20 blur-[100px]" />

            <div className="relative mx-auto max-w-4xl text-center">
              {/* Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2">
                <Sparkles
                  size={16}
                  className="text-violet-400"
                />

                <span className="text-sm font-medium text-violet-400">
                  Weekly Learning Updates
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-4xl font-bold text-primary md:text-5xl">
                Stay Ahead in Your
                <span className="text-main-gradient">
                  {" "}
                  Learning Journey
                </span>
              </h2>

              {/* Description */}
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
                Join over 20,000+ learners and receive new course launches,
                expert learning tips, career advice, and exclusive educational
                resources directly in your inbox.
              </p>

              {/* Newsletter Form */}
              <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-4 sm:flex-row">
                <div className="relative flex-1">
                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
                  />

                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="
                      h-14
                      w-full
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/5
                      pl-12
                      pr-4
                      text-primary
                      outline-none
                      backdrop-blur-xl
                      placeholder:text-muted
                      focus:border-violet-500/40
                    "
                  />
                </div>

                <Button
                  size="lg"
                  className="
                    bg-main-gradient
                    h-14
                    rounded-2xl
                    px-8
                    font-semibold
                    text-white
                    shadow-[0_10px_30px_rgba(124,58,237,0.35)]
                    transition-all
                    duration-300
                    hover:scale-105
                  "
                >
                  Get Updates
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted">
                <div className="flex items-center gap-2">
                  <Users
                    size={16}
                    className="text-violet-400"
                  />
                  <span>20,000+ Subscribers</span>
                </div>

                <div className="flex items-center gap-2">
                  <BadgeCheck
                    size={16}
                    className="text-emerald-400"
                  />
                  <span>No Spam Ever</span>
                </div>

                <div className="flex items-center gap-2">
                  <Sparkles
                    size={16}
                    className="text-amber-400"
                  />
                  <span>Exclusive Resources</span>
                </div>
              </div>

              {/* Bottom Text */}
              <p className="mt-6 text-xs text-muted">
                By subscribing, you agree to receive educational content and
                updates from SkillSphere. You can unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningJourney;