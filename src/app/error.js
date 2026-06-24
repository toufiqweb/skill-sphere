"use client";

import React from "react";
import Link from "next/link";
import {
  AlertCircle,
  Home,
  RefreshCw,
  MoveLeft,
  Terminal,
} from "lucide-react";

const ErrorPage = ({ error, reset }) => {
  const handleReload = () => {
    if (reset) {
      reset();
    } else if (typeof window !== "undefined") {
      window.location.reload();
    }
  };

  return (
    <div className="relative min-h-screen bg-background transition-colors duration-300 flex flex-col items-center justify-center px-4 transition-colors duration-300 overflow-hidden">
      {/* Background Deep Atmospheric Vector Glows */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/3 left-[-10%] w-[500px] h-[500px] bg-red-600/[0.03] rounded-full blur-[130px]" />
        <div className="absolute bottom-1/3 right-[-10%] w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[130px]" />
      </div>

      <div className="w-full max-w-md relative z-10 space-y-4">
        {/* Main Error Display */}
        <div className="bg-card-bg/40 transition-colors duration-300 backdrop-blur-3xl rounded-[32px] border border-card-border transition-colors duration-300 p-8 md:p-10 text-center shadow-[0_24px_60px_rgba(0,0,0,0.5)] relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-red-500/10 rounded-full blur-2xl pointer-events-none animate-pulse" />

          <div className="w-16 h-16 bg-red-500/10 text-red-400 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-red-500/20 shadow-inner">
            <AlertCircle className="w-8 h-8 animate-pulse" />
          </div>

          <h1 className="text-3xl font-black text-foreground tracking-tight mb-2 transition-colors duration-300 ">
            System Exception
          </h1>

          <p className="text-muted transition-colors duration-300 text-xs sm:text-sm leading-relaxed max-w-sm mx-auto mb-8 font-medium">
            An unexpected runtime breakdown or structural request interception
            error occurred while processing your query dataset.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleReload}
              className="flex-1 order-2 sm:order-1 border border-card-border transition-colors duration-300 bg-card-bg/40 transition-colors duration-300 hover:bg-foreground/5 transition-colors duration-300 text-secondary transition-colors duration-300 font-bold py-3.5 rounded-2xl text-xs uppercase tracking-wider transition-all active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer backdrop-blur-md"
            >
              <RefreshCw className="w-3.5 h-3.5 text-muted transition-colors duration-300 " />
              Retry Operation
            </button>

            <Link
              href="/"
              className="flex-1 order-1 sm:order-2 bg-gradient-to-r from-[#5643ff] to-[#6d5dfc] text-white font-bold py-3.5 rounded-2xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer select-none border-none outline-none shadow-md shadow-indigo-600/10 hover:brightness-110 active:scale-[0.98]"
            >
              <Home className="w-3.5 h-3.5" />
              Go Back Home
            </Link>
          </div>

          <div className="mt-8 pt-5 border-t border-card-border transition-colors duration-300 ">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-muted transition-colors duration-300 hover:text-foreground transition-colors duration-300 tracking-wide uppercase group transition-colors duration-300 "
            >
              <MoveLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
              Return to primary workspace
            </Link>
          </div>
        </div>

        {/* Error Digest */}
        <div className="bg-card-bg/90 transition-colors duration-300 border border-card-border transition-colors duration-300 rounded-2xl p-4 flex items-center gap-3 shadow-xl backdrop-blur-md">
          <div className="w-7 h-7 rounded-lg bg-foreground/5 transition-colors duration-300 flex items-center justify-center shrink-0 border border-card-border transition-colors duration-300 ">
            <Terminal className="w-3.5 h-3.5 text-red-400" />
          </div>

          <div className="min-w-0 flex-1 text-left">
            <p className="text-[9px] font-black tracking-widest text-muted transition-colors duration-300 uppercase">
              Exception Digest Token
            </p>

            <p className="text-xs font-mono font-medium text-secondary transition-colors duration-300 truncate mt-0.5">
              {error?.digest ||
                "CRITICAL_CORE_THREAD_INTERRUPTION // EV_MUTATION_FAULT"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;