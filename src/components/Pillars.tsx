import React, { useState, useEffect, useRef } from "react";
import { PILLARS } from "../data";
import { Check, Shield, Users, Cpu, Home, ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Paths to our generated images:
const HubImage = "/src/assets/images/ahmedabad_hub_visual_1782487629334.jpg";
const TechImage = "/src/assets/images/drf_intelligence_visual_1782487650069.jpg";

const PILLAR_STYLES: Record<string, {
  bgGradient: string;
  border: string;
  badge: string;
  text: string;
  accentText: string;
  iconBg: string;
  iconColor: string;
  accentBg: string;
}> = {
  fund: {
    bgGradient: "from-[#f3faf6] via-[#e6f4ea] to-[#f3faf6]",
    border: "border-brand-200",
    badge: "bg-emerald-100 text-brand-700 border-emerald-200/50",
    text: "text-slate-900",
    accentText: "text-brand-600",
    iconBg: "bg-brand-700 text-white",
    iconColor: "text-brand-600",
    accentBg: "bg-brand-50 border-brand-100"
  },
  tech: {
    bgGradient: "from-[#f3faf6] via-[#dcfce7] to-[#f3faf6]",
    border: "border-brand-200",
    badge: "bg-emerald-100 text-brand-700 border-emerald-200/50",
    text: "text-slate-900",
    accentText: "text-brand-600",
    iconBg: "bg-brand-700 text-white",
    iconColor: "text-brand-600",
    accentBg: "bg-brand-50 border-brand-100"
  },
  community: {
    bgGradient: "from-[#f3faf6] via-[#e6f4ea] to-[#f3faf6]",
    border: "border-brand-200",
    badge: "bg-emerald-100 text-brand-700 border-emerald-200/50",
    text: "text-slate-900",
    accentText: "text-brand-600",
    iconBg: "bg-brand-700 text-white",
    iconColor: "text-brand-600",
    accentBg: "bg-brand-50 border-brand-100"
  },
  space: {
    bgGradient: "from-[#faf7f0] via-[#f3ede0] to-[#faf7f0]",
    border: "border-amber-200",
    badge: "bg-amber-100 text-amber-800 border-amber-200/50",
    text: "text-slate-900",
    accentText: "text-amber-600",
    iconBg: "bg-amber-850 text-white",
    iconColor: "text-amber-500",
    accentBg: "bg-[#faf7f0] border-amber-200"
  }
};

export default function Pillars() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Touch state for swipe gesture handling
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const totalPillars = PILLARS.length;

  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      handleNext();
    }, 7000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeIdx]);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIdx((prev) => (prev === 0 ? totalPillars - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIdx((prev) => (prev === totalPillars - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (idx: number) => {
    setDirection(idx > activeIdx ? 1 : -1);
    setActiveIdx(idx);
  };

  // Touch Swipe Gesture Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  const getPillarIcon = (id: string, colorClass: string) => {
    switch (id) {
      case "fund":
        return <Shield className={colorClass} />;
      case "tech":
        return <Cpu className={colorClass} />;
      case "community":
        return <Users className={colorClass} />;
      case "space":
        return <Home className={colorClass} />;
      default:
        return <Shield className={colorClass} />;
    }
  };

  const getPillarImage = (id: string) => {
    if (id === "space") {
      return HubImage;
    }
    if (id === "tech") {
      return TechImage;
    }
    if (id === "fund") {
      return "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800";
    }
    return "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800";
  };

  const currentPillar = PILLARS[activeIdx];
  const styles = PILLAR_STYLES[currentPillar.id] || PILLAR_STYLES.fund;

  // Custom animation sliding variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 30 : -30,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 350, damping: 30 },
        opacity: { duration: 0.12 }
      }
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 30 : -30,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 350, damping: 30 },
        opacity: { duration: 0.08 }
      }
    })
  };

  return (
    <section id="pillars" className="py-20 sm:py-24 bg-transparent border-b border-brand-100/40 scroll-mt-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header section */}
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-16 space-y-4">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-600">
            The Integrated Pillars
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            A hedge fund with a community — not a community with a fund
          </h2>
          <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Four core institutional components designed to compound each other's success. 
            Swipe or use the arrows below to browse our structural pillars.
          </p>
        </div>

        {/* Mobile-only Quick Controls at the top of the section for instant accessibility */}
        <div className="md:hidden flex items-center justify-center gap-4 mb-8">
          <button
            onClick={handlePrev}
            className="bg-white active:bg-brand-50 border border-brand-200 text-brand-950 p-3 rounded-full shadow-sm flex items-center justify-center"
            aria-label="Previous Pillar"
          >
            <ArrowLeft className="h-4 w-4 text-brand-600" />
          </button>
          
          <button
            onClick={handleNext}
            className="bg-white active:bg-brand-50 border border-brand-200 text-brand-950 p-3 rounded-full shadow-sm flex items-center justify-center"
            aria-label="Next Pillar"
          >
            <ArrowRight className="h-4 w-4 text-brand-600" />
          </button>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative max-w-5xl mx-auto"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          
          {/* Main Card with AnimatePresence for extremely smooth slide/fade */}
          <div className="min-h-[580px] sm:min-h-[480px] lg:min-h-[420px] relative overflow-hidden flex items-stretch">
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.div
                key={activeIdx}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className={`w-full bg-gradient-to-tr ${styles.bgGradient} border ${styles.border} rounded-[32px] p-6 sm:p-10 shadow-lg shadow-emerald-950/[0.01] grid grid-cols-1 md:grid-cols-2 gap-8 items-center`}
              >
                {/* Column 1: Core Details */}
                <div className="flex flex-col justify-between h-full space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 rounded-xl bg-white shadow-sm border border-emerald-100/20 ${styles.iconColor}`}>
                        {getPillarIcon(currentPillar.id, "h-5 w-5")}
                      </div>
                      <span className={`inline-block border font-mono text-[9px] sm:text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full ${styles.badge}`}>
                        {currentPillar.badge}
                      </span>
                    </div>

                    <h3 className={`font-display font-bold text-xl sm:text-2xl ${styles.text} mb-3`}>
                      {currentPillar.title}
                    </h3>
                    
                    <p className="font-sans text-xs sm:text-sm text-slate-800 leading-relaxed mb-5 font-medium">
                      {currentPillar.description}
                    </p>

                    <div className="space-y-2.5">
                      {currentPillar.details.map((detail, index) => (
                        <div key={index} className="flex gap-2.5 items-start">
                          <div className="p-0.5 bg-white rounded-full shrink-0 mt-0.5 border border-brand-200 shadow-sm">
                            <Check className={`h-3 w-3 ${styles.iconColor}`} />
                          </div>
                          <span className="font-sans text-xs text-slate-700 leading-relaxed font-semibold">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* High impact metric summary */}
                  {currentPillar.metricValue && (
                    <div className="pt-4 sm:pt-5 border-t border-brand-100 flex items-center gap-4">
                      <div className="bg-white border border-brand-200 rounded-2xl p-3 sm:p-4 min-w-[100px] text-center shadow-sm">
                        <span className="font-display font-extrabold text-xl sm:text-2xl text-slate-900 block leading-tight">
                          {currentPillar.metricValue}
                        </span>
                        <span className="font-mono text-[9px] uppercase tracking-wider text-brand-700 block mt-0.5 leading-none font-bold">
                          {currentPillar.metricLabel}
                        </span>
                      </div>
                      <p className="font-sans text-[11px] text-slate-600 leading-relaxed font-medium">
                        Compounding returns, proprietary audits, and elite physical networks provide structural alpha.
                      </p>
                    </div>
                  )}
                </div>

                {/* Column 2: Visual Graphic / Image */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/50 border border-emerald-900/5 shadow-inner group h-full max-h-[220px] md:max-h-full">
                  <img
                    src={getPillarImage(currentPillar.id)}
                    alt={currentPillar.title}
                    referrerPolicy="no-referrer"
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="hidden md:flex absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-brand-50 border border-brand-200 text-brand-950 p-2.5 sm:p-3 rounded-full shadow-md transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none"
            aria-label="Previous Pillar"
          >
            <ArrowLeft className="h-4 sm:h-5 w-4 sm:h-5 text-brand-600" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="hidden md:flex absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-brand-50 border border-brand-200 text-brand-950 p-2.5 sm:p-3 rounded-full shadow-md transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none"
            aria-label="Next Pillar"
          >
            <ArrowRight className="h-4 sm:h-5 w-4 sm:h-5 text-brand-600" />
          </button>

          {/* Indicators & Autoplay State */}
          <div className="flex flex-col items-center gap-3 mt-8">
            <div className="flex items-center gap-4">
              {/* Mobile Prev Arrow */}
              <button
                onClick={handlePrev}
                className="md:hidden bg-white hover:bg-brand-50 border border-brand-200 text-brand-950 p-2 rounded-full shadow-sm"
                aria-label="Previous Pillar"
              >
                <ArrowLeft className="h-4 w-4 text-brand-600" />
              </button>

              <div className="flex items-center gap-2">
                {PILLARS.map((p, idx) => {
                  const isActive = activeIdx === idx;
                  return (
                    <button
                      key={p.id}
                      onClick={() => handleDotClick(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        isActive ? "w-6 bg-brand-600" : "w-2 bg-brand-200 hover:bg-brand-300"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  );
                })}
              </div>

              {/* Mobile Next Arrow */}
              <button
                onClick={handleNext}
                className="md:hidden bg-white hover:bg-brand-50 border border-brand-200 text-brand-950 p-2 rounded-full shadow-sm"
                aria-label="Next Pillar"
              >
                <ArrowRight className="h-4 w-4 text-brand-600" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
