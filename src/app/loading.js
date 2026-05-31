"use client";

import React, { useEffect, useState } from "react";
import { Loader2, ShieldCheck, Cpu, RefreshCw, Terminal, Layers } from "lucide-react";

// Micro-steps representing specific system initialization markers
const SYSTEM_LOGS = [
  "Initializing local file-system matrix...",
  "Fetching distributed database parameters...",
  "Parsing active Next.js server telemetry layers...",
  "Resolving Vite 8 dependency package trees...",
  "Syncing application runtime environment tokens...",
  "Optimizing responsive UI canvas caches...",
  "Establishing secure cryptographic TLS access...",
  "Workspace execution handshake sequence complete."
];

const LoadingPage = () => {
  const [progress, setProgress] = useState(10);
  const [currentLog, setCurrentLog] = useState(SYSTEM_LOGS[0]);

  // Main tracking simulation loop for state interpolation
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        const diff = Math.random() * 18;
        return Math.min(oldProgress + diff, 100);
      });
    }, 280);

    return () => clearInterval(timer);
  }, []);

  // Sync log array indexing to map precisely with progress distribution sectors
  useEffect(() => {
    const currentStep = Math.min(
      Math.floor((progress / 100) * SYSTEM_LOGS.length),
      SYSTEM_LOGS.length - 1
    );
    setCurrentLog(SYSTEM_LOGS[currentStep]);
  }, [progress]);

  return (
    <div className="min-h-screen bg-[#05041a] flex items-center justify-center px-4 transition-colors duration-300 overflow-hidden relative">
      
      {/* Background Deep-Space Ambient Vector Highlights */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/3 left-[-10%] w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[130px]" />
        <div className="absolute bottom-1/3 right-[-10%] w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[130px]" />
      </div>

      <div className="w-full max-w-md relative z-10 space-y-4">
        
        {/* =========================================================
            MAIN COMPILATION CONTAINER (GLASS FRAME)
            ========================================================= */}
        <div className="bg-[#0b0826]/40 backdrop-blur-3xl rounded-[32px] border border-white/5 p-8 text-center shadow-[0_24px_60px_rgba(0,0,0,0.5)] relative overflow-hidden">
          
          {/* Internal localized glowing pulse nodes */}
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none animate-pulse" />
          <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none animate-pulse" />

          {/* Central Rotating Progress Ring Vector Framework */}
          <div className="relative w-28 h-28 mx-auto mb-6 flex items-center justify-center">
            {/* SVG Track Perimeter Base */}
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="42"
                stroke="rgba(255,255,255,0.03)"
                strokeWidth="4"
                className="fill-transparent"
              />
              <circle
                cx="50"
                cy="50"
                r="42"
                stroke="url(#loading-matrix-gradient)"
                strokeWidth="5"
                strokeDasharray={263.89}
                strokeDashoffset={263.89 - (263.89 * progress) / 100}
                strokeLinecap="round"
                className="fill-transparent transition-all duration-300 ease-out shadow-[0_0_15px_rgba(139,126,255,0.5)]"
              />
              <defs>
                <linearGradient id="loading-matrix-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#5643ff" />
                  <stop offset="50%" stopColor="#8b7eff" />
                  <stop offset="100%" stopColor="#6d5dfc" />
                </linearGradient>
              </defs>
            </svg>

            {/* Inner Axis Core System Spinner Element */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Loader2 className="w-9 h-9 text-[#8b7eff] animate-spin" />
            </div>
          </div>

          {/* Context Metric Indicators Labeling */}
          <h3 className="text-xl font-black text-white tracking-tight mb-1">
            Synchronizing Workspace
          </h3>
          
          <p className="text-slate-500 text-[11px] font-bold tracking-widest uppercase mb-6 flex items-center justify-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-indigo-400" />
            Compiling Modules <span className="text-slate-300 font-black">{Math.floor(progress)}%</span>
          </p>

          {/* Fluid Horizontal Skeleton Loading Bar Track */}
          <div className="w-full h-1.5 bg-white/[0.03] rounded-full overflow-hidden mb-6 border border-white/5">
            <div 
              className="h-full bg-gradient-to-r from-[#5643ff] via-[#8b7eff] to-[#6d5dfc] transition-all duration-300 ease-out rounded-full shadow-[0_0_10px_rgba(139,126,255,0.3)]"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Secondary Footer Security Checkpoint Logs */}
          <div className="flex items-center justify-between border-t border-white/5 pt-4 text-[10px] font-black tracking-widest uppercase text-slate-500">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" /> TLS Secure Node
            </span>
            <span className="flex items-center gap-1.5 text-indigo-400">
              <Layers className="w-3.5 h-3.5 animate-pulse" /> Layer Configuration
            </span>
          </div>
        </div>

        {/* =========================================================
            NEW DOWNSTREAM ELEMENT: ACTIVE TELEMETRY TERMINAL FEED
            ========================================================= */}
        <div className="bg-[#06041a]/90 border border-white/5 rounded-2xl p-4 flex items-center gap-3 shadow-xl backdrop-blur-md">
          <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 shrink-0 border border-white/5">
            <Terminal className="w-3.5 h-3.5 text-purple-400" />
          </div>
          <div className="min-w-0 flex-1 text-left">
            <p className="text-[9px] font-black tracking-widest text-slate-500 uppercase">Process Pipeline Log</p>
            <p className="text-xs font-mono font-medium text-slate-300 truncate transition-all duration-150 mt-0.5">
              {currentLog}
            </p>
          </div>
          <div className="flex gap-1 shrink-0 px-1">
            <span className="w-1.5 h-1.5 bg-[#8b7eff] rounded-full animate-ping" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default LoadingPage;