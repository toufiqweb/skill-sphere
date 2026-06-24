import React from "react";
import { Check, HelpCircle, Sparkles, Zap, Shield, Globe } from "lucide-react";

const pricingTiers = [
  {
    name: "Starter",
    price: "0",
    description: "Perfect for exploring baseline concepts and starter tracks.",
    features: [
      "Access to all foundation courses",
      "Standard community forum access",
      "Basic workspace setup guides",
      "Public profile & project showcase",
    ],
    buttonText: "Get Started Free",
    isPopular: false,
    accentColor: "purple",
  },
  {
    name: "Pro Path",
    price: "29",
    description: "Our most popular track for comprehensive, career-ready mastery.",
    features: [
      "Access to 100+ premium structural courses",
      "Interactive real-world project assignments",
      "Priority verified instructor Q&A support",
      "Official certificates of completion",
      "Exclusive offline workspace downloads",
    ],
    buttonText: "Upgrade to Pro",
    isPopular: true,
    accentColor: "neonBlue",
  },
  {
    name: "Enterprise",
    price: "99",
    description: "Tailored strategic pipelines for professional teams and organizations.",
    features: [
      "Everything included in the Pro Path",
      "Unlimited seats for team cohorts",
      "Custom organization learning dashboards",
      "1-on-1 dedicated faculty mentorship",
      "Custom API integration keys",
    ],
    buttonText: "Contact Enterprise",
    isPopular: false,
    accentColor: "indigo",
  },
];

const faqs = [
  {
    question: "Can I cancel my subscription at any time?",
    answer: "Absolutely. You can pause or cancel your subscription plan dynamically from your account management panel instantly without hidden penalties.",
  },
  {
    question: "Are there any hidden resource fees?",
    answer: "No. Everything required to complete our tracks—including cloud development resources, workspaces, and datasets—is completely covered.",
  },
  {
    question: "Do you offer localized discount options?",
    answer: "Yes, our deep space matrix adapts system configurations dynamically according to purchasing parity indices for global learners.",
  },
];

const PricingPage = () => {
  return (
    <div className="relative min-h-screen bg-background transition-colors duration-300 py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 overflow-hidden">
      
      {/* Background Ambient Radial Space Lights */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 left-[-10%] w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-20">
        
        {/* =========================================================
            HEADER TITLE BLOCK
            ========================================================= */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-md text-xs font-bold tracking-wider text-[#8b7eff] uppercase">
            <Zap className="w-3.5 h-3.5" />
            Transparent Architecture
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground leading-none transition-colors duration-300 ">
            Flexible Plans for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b7eff] to-indigo-400">Every Level</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-muted transition-colors duration-300 font-medium max-w-xl mx-auto leading-relaxed">
            Choose the clear architectural path that matches your current learning trajectory. No structural deployment surprises.
          </p>
        </div>

        {/* =========================================================
            PRICING CARD GRID
            ========================================================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {pricingTiers.map((tier, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col justify-between bg-card-bg/60 transition-colors duration-300 backdrop-blur-2xl rounded-[32px] p-6 md:p-8 border transition-all duration-300 shadow-xl ${
                tier.isPopular
                  ? "border-[#5643ff] shadow-[0_20px_50px_rgba(86,67,255,0.15)] scale-102 lg:scale-105 z-20"
                  : "border-card-border transition-colors duration-300 hover:border-card-border transition-colors duration-300 "
              }`}
            >
              {tier.isPopular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#5643ff] to-[#6d5dfc] text-[10px] font-black tracking-widest text-white uppercase shadow-md shadow-indigo-600/20">
                  <Sparkles className="w-3 h-3" />
                  Most Popular
                </span>
              )}

              <div>
                {/* Tier Name & Meta */}
                <div className="mb-6">
                  <h3 className="text-xl font-black text-foreground tracking-wide uppercase mb-2 transition-colors duration-300 ">
                    {tier.name}
                  </h3>
                  <p className="text-muted transition-colors duration-300 text-xs font-medium leading-relaxed min-h-[36px]">
                    {tier.description}
                  </p>
                </div>

                {/* Pricing Display */}
                <div className="flex items-baseline gap-1 mb-8 border-b border-card-border transition-colors duration-300 pb-6">
                  <span className="text-5xl font-black tracking-tight text-foreground transition-colors duration-300 ">
                    ${tier.price}
                  </span>
                  <span className="text-muted transition-colors duration-300 text-xs font-bold uppercase tracking-wider">
                    / monthly
                  </span>
                </div>

                {/* Features Checklist */}
                <div className="space-y-4 mb-8">
                  <h4 className="text-muted transition-colors duration-300 text-[10px] uppercase tracking-widest font-black">
                    What's Included
                  </h4>
                  <ul className="space-y-3">
                    {tier.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex gap-3 items-start">
                        <div className="w-4 h-4 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-[#8b7eff] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3" />
                        </div>
                        <p className="text-secondary transition-colors duration-300 text-xs sm:text-sm font-medium leading-tight">
                          {feature}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <button
                className={`w-full py-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer active:scale-[0.99] select-none ${
                  tier.isPopular
                    ? "bg-gradient-to-r from-[#5643ff] to-[#6d5dfc] text-white hover:brightness-115 shadow-md shadow-indigo-600/10"
                    : "border border-card-border transition-colors duration-300 bg-card-bg/60 transition-colors duration-300 hover:bg-foreground/5 transition-colors duration-300 text-secondary transition-colors duration-300 "
                }`}
              >
                {tier.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* =========================================================
            MICRO FAQ & VALUE ASSURANCE BLOCK
            ========================================================= */}
        <div className="border-t border-card-border transition-colors duration-300 pt-16 max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-black tracking-tight text-foreground flex items-center justify-center gap-2 uppercase tracking-wide text-sm transition-colors duration-300 ">
              <HelpCircle className="w-4 h-4 text-[#8b7eff]" />
              Frequently Asked Questions
            </h2>
            <p className="text-muted transition-colors duration-300 text-xs font-bold">
              Got variables regarding onboarding processes? Let's fix them.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-card-bg/40 transition-colors duration-300 border border-card-border transition-colors duration-300 p-5 rounded-2xl space-y-2"
              >
                <h4 className="font-bold text-primary transition-colors duration-300 text-xs sm:text-sm tracking-tight leading-snug">
                  {faq.question}
                </h4>
                <p className="text-muted transition-colors duration-300 text-[11px] sm:text-xs font-medium leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Security Seals */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 pt-6 border-t border-card-border transition-colors duration-300 text-slate-600 text-[11px] font-black uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-purple-500/40" /> 256-bit encrypted data pipelines
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-indigo-500/40" /> multi-currency integration adaptive
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PricingPage;