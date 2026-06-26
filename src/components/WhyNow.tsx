import React, { useState, useEffect, useRef } from "react";
import { WHY_NOW_ADVANTAGES, FOUNDER_QUOTE } from "../data";
import { Quote, ArrowUpRight, TrendingUp, Sparkles, CheckCircle, Cpu, Shield, Users, ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const ADVANTAGE_ICONS = [Cpu, Shield, Sparkles, TrendingUp, Users];

const ADVANTAGE_TAGS = [
  "Proprietary IP",
  "Co-Investing Capital",
  "Unrivaled Synthesis",
  "Compounding Cashflows",
  "Global Capital Gateway"
];

const ADVANTAGE_HIGHLIGHTS = [
  "Validated across 5,855+ high-conviction trades with a rigorous audited track record.",
  "Founder investing major skin in the game alongside members for absolute alignment.",
  "Combines SEBI-registered fund, local luxury Hub, digital alerts, and elite HNIs under one roof.",
  "Durable business model diversified across memberships, licensing, café, and performance carry.",
  "Friction-free, professional gateway for non-resident capital into India's structural bull market."
];

export default function WhyNow() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const totalAdvantages = WHY_NOW_ADVANTAGES.length;

  // Auto-play cycle that pauses when user hovers or interacts
  useEffect(() => {
    if (!isHovered) {
      autoplayTimerRef.current = setInterval(() => {
        setActiveIdx((prev) => (prev + 1) % totalAdvantages);
      }, 6000);
    }
    return () => {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
    };
  }, [isHovered, totalAdvantages]);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? totalAdvantages - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % totalAdvantages);
  };

  const handleSelect = (idx: number) => {
    setActiveIdx(idx);
  };

  // Static positions of 5 nodes on a circle (radius ~135px)
  // Positioned statically on the wheel; the wheel rotates to bring activeIdx to the top (angle -90 deg)
  const getPositionStyles = (i: number) => {
    const angle = i * 72 - 90; // 5 nodes * 72 deg = 360 deg
    const angleRad = (angle * Math.PI) / 180;
    const r = 38; // Radius as % of parent wheel container
    return {
      left: `${50 + r * Math.cos(angleRad)}%`,
      top: `${50 + r * Math.sin(angleRad)}%`,
    };
  };

  const wheelRotation = -activeIdx * 72; // Active node rotates to visual 12 o'clock (-90 deg)

  const CurrentIcon = ADVANTAGE_ICONS[activeIdx];

  return (
    <section id="why-now" className="py-24 bg-transparent scroll-mt-10 border-b border-brand-100/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-600">
            Why Now. Why Only Green.
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            India's investment moment has arrived
          </h2>
        </div>
        
        {/* Intro Layout - Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <p className="font-sans text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
              India has 100M+ demat accounts growing at 30% year-on-year. The HNI and UHNI segment is the fastest-growing wealth cohort in Asia. Yet institutional-quality investment management with community trust is almost entirely absent below the top private banks.
            </p>
            <p className="font-sans text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
              Only Green enters at exactly the right moment: retail investors are becoming sophisticated, the ecosystem is formalising, and technology is making institutional-grade tools accessible for the first time.
            </p>
          </div>

          <div className="bg-brand-50 border border-brand-100 p-8 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-500/5 rounded-full filter blur-3xl pointer-events-none" />
            <span className="font-mono text-[10px] uppercase tracking-wider text-brand-600 font-bold block mb-4">
              Macro Metrics
            </span>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="border-l-2 border-brand-600 pl-4 py-2">
                <span className="font-display font-extrabold text-3xl text-slate-900">100M+</span>
                <p className="font-sans text-xs text-slate-700 mt-1 font-semibold">Demat accounts growing 30% YoY</p>
              </div>
              <div className="border-l-2 border-brand-600 pl-4 py-2">
                <span className="font-display font-extrabold text-3xl text-slate-900">Asia's #1</span>
                <p className="font-sans text-xs text-slate-700 mt-1 font-semibold">Fastest wealth-growing cohort</p>
              </div>
              <div className="border-l-2 border-brand-600 pl-4 py-2">
                <span className="font-display font-extrabold text-3xl text-slate-900">16-22%</span>
                <p className="font-sans text-xs text-slate-700 mt-1 font-semibold">Target compound returns</p>
              </div>
              <div className="border-l-2 border-brand-600 pl-4 py-2">
                <span className="font-display font-extrabold text-3xl text-slate-900">9 Streams</span>
                <p className="font-sans text-xs text-slate-700 mt-1 font-semibold">Day 1 compounding revenues</p>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== WHY US SECTION REDESIGN ==================== */}
        
        {/* Interactive Dial View (Laptops & Tablets) */}
        <div 
          className="hidden md:grid grid-cols-12 gap-12 items-center mb-24 min-h-[480px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Left Side: Circular Control Dial */}
          <div className="col-span-5 flex justify-center items-center relative">
            
            {/* Focal Point Indicator (Static Bezel pointer at top-center pointing down to the active node) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2.5 z-30 flex flex-col items-center pointer-events-none">
              <div className="w-3.5 h-3.5 bg-emerald-500 rounded-full animate-ping absolute opacity-60" />
              <div className="w-3.5 h-3.5 bg-emerald-500 rounded-full border border-white shadow-md shadow-emerald-500/30" />
              <div className="w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-t-[9px] border-t-emerald-500 mt-1" />
            </div>

            {/* Main Dial Outer Container */}
            <div className="relative w-[330px] h-[330px] lg:w-[360px] lg:h-[360px] rounded-full bg-emerald-500/[0.01] border border-brand-100 p-4 shadow-inner flex items-center justify-center">
              
              {/* Spinning Ring */}
              <motion.div
                animate={{ rotate: wheelRotation }}
                transition={{ type: "spring", stiffness: 60, damping: 15 }}
                className="absolute inset-4 rounded-full border-2 border-dashed border-emerald-500/15"
              />

              {/* Decorative dotted orbit */}
              <div className="absolute inset-10 rounded-full border border-brand-100 pointer-events-none opacity-60" />

              {/* ROTATING DIAL BODY (Holds nodes) */}
              <motion.div
                animate={{ rotate: wheelRotation }}
                transition={{ type: "spring", stiffness: 60, damping: 15 }}
                className="absolute inset-0 w-full h-full"
              >
                {WHY_NOW_ADVANTAGES.map((advantage, i) => {
                  const NodeIcon = ADVANTAGE_ICONS[i];
                  const isActive = activeIdx === i;
                  const pos = getPositionStyles(i);

                  return (
                    <button
                      key={i}
                      onClick={() => handleSelect(i)}
                      style={{ ...pos }}
                      className={`absolute w-14 h-14 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center transition-all duration-300 z-20 outline-none
                        ${isActive 
                          ? "bg-emerald-500 text-white shadow-[0_0_22px_rgba(16,185,129,0.5)] border-2 border-emerald-300 scale-110" 
                          : "bg-white text-slate-500 border border-brand-100 hover:border-emerald-300 hover:text-emerald-600 hover:bg-emerald-50/40 hover:scale-105 shadow-sm"
                        }
                      `}
                      title={advantage.title}
                    >
                      {/* Counter-rotate to keep icon upright */}
                      <motion.div
                        animate={{ rotate: -wheelRotation }}
                        transition={{ type: "spring", stiffness: 60, damping: 15 }}
                        className="flex items-center justify-center"
                      >
                        <NodeIcon className="h-6 w-6" />
                      </motion.div>
                    </button>
                  );
                })}
              </motion.div>

              {/* Central Non-Rotating Hub */}
              <div className="relative w-36 h-36 lg:w-40 lg:h-40 bg-white rounded-full border border-brand-100 shadow-md shadow-emerald-500/[0.03] z-20 flex flex-col items-center justify-center overflow-hidden">
                <div className="absolute -inset-2 bg-gradient-to-tr from-emerald-50/50 via-teal-50/30 to-transparent pointer-events-none" />
                <span className="font-mono text-[10px] tracking-widest text-emerald-600 font-bold uppercase mb-0.5">
                  Advantage
                </span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={activeIdx}
                    initial={{ y: 8, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -8, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="font-display font-extrabold text-4xl lg:text-5xl text-slate-900 tracking-tight"
                  >
                    0{activeIdx + 1}
                  </motion.span>
                </AnimatePresence>
                <div className="mt-1 flex items-center gap-1">
                  {WHY_NOW_ADVANTAGES.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-300 ${activeIdx === i ? "w-4 bg-emerald-500" : "w-1.5 bg-brand-100"}`}
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right Side: Information Panel with Spring Entry Animation */}
          <div className="col-span-7 flex flex-col justify-center pl-4 lg:pl-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="bg-white/60 backdrop-blur-md border border-brand-200/50 p-8 rounded-3xl shadow-sm flex flex-col justify-between min-h-[360px] relative group overflow-hidden"
              >
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-emerald-500/5 to-transparent rounded-full pointer-events-none" />
                
                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100/50 font-mono text-[10px] font-bold uppercase tracking-wider">
                      {ADVANTAGE_TAGS[activeIdx]}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-2xl lg:text-3xl text-slate-900 tracking-tight">
                    {WHY_NOW_ADVANTAGES[activeIdx].title}
                  </h3>

                  <p className="font-sans text-slate-600 text-sm lg:text-base leading-relaxed">
                    {WHY_NOW_ADVANTAGES[activeIdx].description}
                  </p>

                  <div className="p-4 bg-emerald-500/[0.02] border border-emerald-500/10 rounded-2xl flex items-start gap-3 mt-2">
                    <div className="p-1 rounded-lg bg-emerald-500/10 text-emerald-600 shrink-0 mt-0.5">
                      <CurrentIcon className="h-4 w-4" />
                    </div>
                    <div className="text-xs text-slate-700 leading-relaxed font-semibold">
                      {ADVANTAGE_HIGHLIGHTS[activeIdx]}
                    </div>
                  </div>
                </div>

                {/* Bottom Navigation controls inside the card */}
                <div className="flex items-center justify-between pt-6 border-t border-brand-50 mt-6">
                  <div className="flex items-center gap-1 font-mono text-xs text-emerald-600 font-bold tracking-wide uppercase">
                    Advantage 0{activeIdx + 1}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrev}
                      className="p-2 rounded-xl bg-white border border-brand-100 hover:border-emerald-300 text-slate-600 hover:text-emerald-600 hover:bg-emerald-50/30 transition-all duration-200"
                      title="Previous"
                    >
                      <ArrowLeft className="h-4 w-4" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="p-2 rounded-xl bg-white border border-brand-100 hover:border-emerald-300 text-slate-600 hover:text-emerald-600 hover:bg-emerald-50/30 transition-all duration-200"
                      title="Next"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Horizontal Dial Selector & Active Card (Visible under md size) */}
        <div className="block md:hidden mb-20 space-y-8">
          {/* Horizontal Track of 5 Nodes */}
          <div className="relative py-4 flex items-center justify-center">
            {/* Horizontal Track Line */}
            <div className="absolute left-6 right-6 h-0.5 bg-brand-100" />
            
            {/* Active Track Line fill */}
            <motion.div 
              className="absolute left-6 h-0.5 bg-emerald-500 origin-left"
              animate={{ width: `${(activeIdx / (totalAdvantages - 1)) * 88}%` }}
              style={{ maxWidth: "calc(100% - 48px)" }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
            />

            {/* 5 Nodes */}
            <div className="relative w-full flex justify-between px-4 z-10">
              {WHY_NOW_ADVANTAGES.map((advantage, index) => {
                const NodeIcon = ADVANTAGE_ICONS[index];
                const isActive = activeIdx === index;
                return (
                  <button
                    key={index}
                    onClick={() => handleSelect(index)}
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 relative outline-none
                      ${isActive 
                        ? "bg-emerald-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.45)] border-2 border-emerald-300 scale-110" 
                        : "bg-white text-slate-500 border border-brand-100 hover:border-emerald-300"
                      }
                    `}
                  >
                    <NodeIcon className="h-5 w-5" />
                    {/* Tiny Number Indicator below */}
                    <span className={`absolute -bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] font-bold ${isActive ? "text-emerald-600 scale-110 font-black" : "text-slate-400"}`}>
                      0{index + 1}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Spacer for bottom labels */}
          <div className="h-2" />

          {/* Active Card for Mobile with AnimatePresence */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="bg-white/80 backdrop-blur-sm border border-brand-100 p-6 rounded-2xl flex flex-col justify-between hover:shadow-md transition-all duration-300 relative overflow-hidden"
            >
              {/* Decorative Subtle Background Glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-emerald-500/5 to-transparent rounded-full pointer-events-none" />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100/50 font-mono text-[10px] font-bold uppercase tracking-wider">
                    {ADVANTAGE_TAGS[activeIdx]}
                  </span>
                  <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600">
                    <CurrentIcon className="h-4 w-4" />
                  </div>
                </div>

                <h3 className="font-display font-bold text-lg text-slate-900">
                  {WHY_NOW_ADVANTAGES[activeIdx].title}
                </h3>
                
                <p className="font-sans text-xs text-slate-700 leading-relaxed font-semibold">
                  {WHY_NOW_ADVANTAGES[activeIdx].description}
                </p>

                <div className="p-3 bg-emerald-500/[0.02] border border-emerald-500/10 rounded-xl flex items-start gap-2.5 mt-1">
                  <div className="p-1 rounded bg-emerald-500/10 text-emerald-600 shrink-0 mt-0.5">
                    <CurrentIcon className="h-3.5 w-3.5" />
                  </div>
                  <div className="text-[11px] text-slate-700 leading-relaxed font-semibold">
                    {ADVANTAGE_HIGHLIGHTS[activeIdx]}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-brand-50 mt-4 flex items-center justify-between">
                <div className="font-mono text-[10px] text-emerald-600 font-bold tracking-wider uppercase">
                  Advantage 0{activeIdx + 1}
                </div>
                
                {/* Arrow navigation shortcut */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handlePrev}
                    className="p-1.5 rounded-lg bg-white border border-brand-100 text-slate-600 hover:text-emerald-600 hover:bg-emerald-50/20 transition-all duration-200"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-1.5 rounded-lg bg-white border border-brand-100 text-slate-600 hover:text-emerald-600 hover:bg-emerald-50/20 transition-all duration-200"
                  >
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ================================================================= */}

        {/* Founder Testimonial/Quote Block */}
        <div className="relative bg-[#022c22] text-white rounded-3xl p-8 sm:p-12 overflow-hidden shadow-2xl">
          {/* Subtle details */}
          <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
            <Quote className="h-48 w-48 text-white" />
          </div>

          <div className="max-w-3xl mx-auto flex flex-col items-center text-center space-y-6 relative z-10">
            <Quote className="h-10 w-10 text-brand-500 rotate-180" />
            
            <p className="font-display font-medium text-xl sm:text-2xl leading-relaxed italic text-brand-100">
              "{FOUNDER_QUOTE.text}"
            </p>

            <div className="space-y-1">
              <span className="font-display font-semibold text-base text-white block">
                {FOUNDER_QUOTE.author}
              </span>
              <span className="font-mono text-xs text-[#10b981] block uppercase tracking-wider font-bold">
                {FOUNDER_QUOTE.role}, Only Green Community
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
