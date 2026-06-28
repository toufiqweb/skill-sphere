import { Button } from "@heroui/react";
import { Mail, Sparkles, CheckCircle2, ArrowUpRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden section-alt py-20 lg:py-28 transition-colors duration-300">
      {/* Background Radial Glow using Brand Theme tokens */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-brand-ocean/10 to-brand-cyan/5 blur-[130px] pointer-events-none" />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Core Layout Panel matching card configurations */}
        <div className="relative overflow-hidden rounded-[2.5rem] border border-card-border bg-gradient-to-b from-card-bg/40 to-card-bg/80 px-6 py-12 md:p-16 backdrop-blur-xl shadow-card">
          {/* Subtle Internal Theme Orbs */}
          <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-brand-cyan/10 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-brand-mint/5 blur-2xl pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Column: Typography Stack */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Premium Top Tag Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-ocean/20 bg-brand-ocean/5 px-4 py-1.5 backdrop-blur-sm">
                <Sparkles size={13} className="text-brand-ocean" />
                <span className="text-[10px] font-black uppercase tracking-widest text-brand-ocean">
                  Join 200K+ Global Learners
                </span>
              </div>

              {/* Refined Main Headline using custom main text utility */}
              <h2 className="section-title leading-[1.15]">
                Accelerate Your Skills. <br />
                <span className="text-main-gradient">Own Your Journey.</span>
              </h2>

              <p className="max-w-xl text-sm sm:text-base font-medium leading-relaxed text-muted">
                Get weekly course drops, direct insights from industry tech
                leaders, and community perks sent straight to your inbox.
              </p>

              {/* Horizontal Micro-bullet Trust List with semantic text-muted */}
              <div className="flex flex-wrap gap-x-6 gap-y-3 pt-2">
                {[
                  "No spam, cancel anytime",
                  "Verified course updates",
                  "Exclusive content drops",
                ].map((text, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs font-semibold text-muted"
                  >
                    <CheckCircle2
                      size={14}
                      className="text-brand-mint shrink-0"
                    />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Input Card Panel */}
            <div className="lg:col-span-5 flex flex-col gap-4 w-full max-w-md mx-auto lg:ml-auto">
              {/* Pill Subscription Frame */}
              <div className="p-4 rounded-3xl border border-card-border bg-background/50 backdrop-blur-md shadow-sm">
                <form className="space-y-3">
                  <div className="relative flex items-center rounded-2xl border border-card-border bg-background focus-within:border-brand-cyan/50 p-1.5 transition-all duration-300">
                    <Mail size={16} className="absolute left-4 text-muted" />
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="h-11 w-full bg-transparent pl-12 pr-4 text-xs font-medium text-foreground outline-none placeholder:text-muted"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 rounded-2xl bg-main-gradient font-bold text-xs tracking-wide text-white"
                  >
                    Subscribe For Updates
                  </Button>
                </form>
              </div>

              {/* Contextual Secondary Hub Element using theme color elements */}
              <div className="flex items-center justify-between p-4 px-6 rounded-2xl border border-card-border bg-brand-cyan/5 hover:bg-brand-cyan/10 transition-colors duration-300 group cursor-pointer">
                <div className="text-left">
                  <p className="text-xs font-black text-foreground">
                    Want real-time support?
                  </p>
                  <p className="text-[11px] font-medium text-muted">
                    Join our student network server
                  </p>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-background border border-card-border group-hover:border-brand-cyan text-muted group-hover:text-brand-ocean transition-all duration-300">
                  <ArrowUpRight
                    size={14}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
