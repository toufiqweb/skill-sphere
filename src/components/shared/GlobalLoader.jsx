"use client";

import React, { useEffect, useState } from "react";
import { BookOpen, GraduationCap, Video, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import standaloneIcon from "@/assets/standaloneIcon.png";

const DEFAULT_LOGS = [
  "Preparing your learning environment...",
  "Fetching latest course materials...",
  "Organizing video lectures...",
  "Setting up interactive assignments...",
  "Loading instructor resources...",
  "Ready to learn."
];

const GlobalLoader = ({ fullScreen = true, logs = DEFAULT_LOGS, title = "Loading Workspace" }) => {
  const [progress, setProgress] = useState(10);
  const [currentLog, setCurrentLog] = useState(logs[0]);

  // Main tracking simulation loop
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        const diff = Math.random() * 15;
        return Math.min(oldProgress + diff, 100);
      });
    }, 250);

    return () => clearInterval(timer);
  }, []);

  // Sync log array
  useEffect(() => {
    const currentStep = Math.min(
      Math.floor((progress / 100) * logs.length),
      logs.length - 1
    );
    setCurrentLog(logs[currentStep]);
  }, [progress, logs]);

  const wrapperClasses = fullScreen 
    ? "min-h-screen fixed inset-0 z-50 bg-background flex flex-col items-center justify-center p-4 overflow-hidden" 
    : "w-full h-full min-h-[400px] flex flex-col items-center justify-center p-4 relative";

  return (
    <div className={wrapperClasses}>
      {/* Background Ambience */}
      {fullScreen && (
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-brand-ocean/10 rounded-full blur-[130px]" />
          <div className="absolute bottom-1/4 right-[-10%] w-[500px] h-[500px] bg-brand-mint/10 rounded-full blur-[130px]" />
        </div>
      )}

      <div className="w-full max-w-sm relative z-10 flex flex-col items-center justify-center">
        
        {/* Core Loading Ring with Icon */}
        <div className="relative w-32 h-32 mb-8 flex items-center justify-center">
          {/* Animated SVG Ring */}
          <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="46"
              stroke="rgba(128,128,128,0.1)"
              strokeWidth="4"
              className="fill-transparent"
            />
            <circle
              cx="50"
              cy="50"
              r="46"
              stroke="url(#loader-gradient)"
              strokeWidth="5"
              strokeDasharray={289.026}
              strokeDashoffset={289.026 - (289.026 * progress) / 100}
              strokeLinecap="round"
              className="fill-transparent transition-all duration-300 ease-out"
            />
            <defs>
              <linearGradient id="loader-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--primary-gradient-start)" />
                <stop offset="100%" stopColor="var(--primary-gradient-end)" />
              </linearGradient>
            </defs>
          </svg>

          {/* Standalone Logo Pulsing */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
             <div className="relative w-14 h-14 animate-pulse">
                <Image 
                  src={standaloneIcon} 
                  alt="VectraLern Icon" 
                  fill
                  className="object-contain drop-shadow-lg"
                />
             </div>
          </div>
        </div>

        {/* Status Text Area */}
        <div className="text-center space-y-3 w-full">
          <h3 className="text-xl font-black text-foreground tracking-tight transition-colors duration-300">
            {title}
          </h3>
          
          <div className="flex items-center justify-center gap-2 text-sm font-bold text-muted transition-colors duration-300">
             <GraduationCap className="w-4 h-4 text-brand-ocean" />
             <span>{Math.floor(progress)}% Loaded</span>
          </div>

          {/* Progress Bar Track */}
          <div className="w-full h-1.5 bg-card-border rounded-full overflow-hidden mt-4">
            <div 
              className="h-full bg-main-gradient transition-all duration-300 ease-out rounded-full shadow-glow"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Dynamic Log Feed Box */}
        <div className="mt-8 w-full glass-card rounded-2xl p-4 flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-brand-mint/10 flex items-center justify-center text-brand-mint shrink-0 border border-brand-mint/20">
            <BookOpen className="w-4 h-4" />
          </div>
          <div className="min-w-0 flex-1 text-left">
            <p className="text-[10px] font-black tracking-widest text-muted uppercase">System Status</p>
            <p className="text-xs font-medium text-foreground truncate mt-0.5">
              {currentLog}
            </p>
          </div>
          {progress >= 100 ? (
            <CheckCircle2 className="w-4 h-4 text-brand-mint" />
          ) : (
            <div className="w-1.5 h-1.5 bg-brand-ocean rounded-full animate-ping mr-1" />
          )}
        </div>
      </div>
    </div>
  );
};

export default GlobalLoader;
