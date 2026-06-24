import { Button } from "@heroui/react";
import { Mail, Users } from "lucide-react";

const LearningJourney = () => {
  return (
    <section className="relative overflow-hidden bg-background transition-colors duration-300 py-16 lg:py-20">
      
      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Core Layout Card Panel matching ChatGPT Image May 31, 2026, 03_05_55 PM_13.png */}
        <div className="relative overflow-hidden rounded-3xl border border-violet-500/10 bg-gradient-to-b from-card-bg/40 transition-colors duration-300 to-card-bg/60 transition-colors duration-300 px-6 py-12 text-center md:px-12 md:py-16">
          
          <div className="mx-auto max-w-3xl space-y-6">
            
            {/* Minimalist Top Tag Badge */}
            <div className="mx-auto inline-flex items-center gap-1.5 rounded-full border border-slate-800 bg-background transition-colors duration-300 /60 px-3.5 py-1">
              <Users size={11} className="text-violet-400" />
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted transition-colors duration-300 ">
                JOIN OUR COMMUNITY
              </span>
            </div>

            {/* Typography Title Stack */}
            <div className="space-y-2">
              <h2 className="text-2xl font-black tracking-tight text-foreground sm:text-3xl lg:text-4xl transition-colors duration-300 ">
                Stay Ahead in Your{" "}
                <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                  Learning Journey
                </span>
              </h2>
              <p className="mx-auto max-w-xl text-xs font-medium leading-relaxed text-muted transition-colors duration-300 ">
                Join 200K+ learners and receive the latest courses, tips and updates.
              </p>
            </div>

            {/* Integrated Compact Pill-Style Form */}
            <div className="mx-auto mt-4 max-w-xl">
              <form className="relative flex w-full items-center rounded-xl border border-slate-800 bg-background transition-colors duration-300 /50 p-1 focus-within:border-violet-500/30 sm:rounded-full">
                <div className="relative flex flex-1 items-center">
                  <Mail size={14} className="absolute left-4 text-muted transition-colors duration-300 " />
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="h-10 w-full bg-transparent pl-11 pr-4 text-xs font-medium text-foreground placeholder-slate-500 outline-none transition-colors duration-300 "
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  className="h-9 rounded-lg bg-violet-600 px-5 text-[11px] font-bold text-white transition-all duration-300 hover:bg-violet-500 sm:rounded-full shrink-0"
                >
                  Get Updates
                </Button>
              </form>
            </div>

            {/* Horizontal Micro-bullet Trust List */}
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 pt-2 text-[10px] font-semibold tracking-wide text-muted transition-colors duration-300 ">
              <span>No spam, unsubscribe anytime</span>
              <span className="h-1 w-1 rounded-full bg-slate-700 block" />
              <span>Course updates</span>
              <span className="h-1 w-1 rounded-full bg-slate-700 block" />
              <span>Exclusive content</span>
            </div>

          </div>
          
        </div>
        
      </div>
    </section>
  );
};

export default LearningJourney;