import React, { useRef, useEffect, useState } from "react";
import { ArrowDown, ChevronRight, Play, Shield, Users, Cpu, TrendingUp } from "lucide-react";
import { motion, useInView } from "motion/react";
import { MOTTO, TAGLINE } from "../data";

interface HeroProps {
  onInquiryClick: () => void;
  onExploreClick: (href: string) => void;
}

export default function Hero({ onInquiryClick, onExploreClick }: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(heroRef, { amount: 0.1 });
  const [animateArrow, setAnimateArrow] = useState(false);

  useEffect(() => {
    if (isInView) {
      // Start animation after a 2 second delay
      const timer = setTimeout(() => {
        setAnimateArrow(true);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      // Reset when scrolled out of view, so it triggers again on return
      setAnimateArrow(false);
    }
  }, [isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 25 },
    },
  };

  return (
    <section ref={heroRef} className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden bg-transparent">
      {/* Smooth Growth Arrow Animation */}
      {animateArrow && (
        <>
          {/* Zigzag rising line representing high-performance financial chart growth */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none -z-10" viewBox="0 0 1000 1000" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="growth-trail-grad" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
                <stop offset="40%" stopColor="#2dd4bf" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            <motion.path
              d="M 0,950 L 250,700 L 400,780 L 600,500 L 750,560 L 1050,150"
              stroke="url(#growth-trail-grad)"
              strokeWidth="14"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0, 1, 1, 0] }}
              transition={{
                pathLength: { duration: 6.0, ease: "easeInOut" },
                opacity: { duration: 6.0, times: [0, 0.08, 0.92, 1] }
              }}
            />
          </svg>
        </>
      )}

      {/* Premium subtle background grid */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
      
      {/* Gentle ambient light glow effects (high-end visual luxury, zero noise) */}
      <div className="absolute top-20 left-10 w-[450px] h-[450px] bg-brand-500/10 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-20 right-10 w-[450px] h-[450px] bg-brand-100/20 rounded-full filter blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto space-y-6 sm:space-y-8"
        >
          {/* Hero text */}
          <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8 w-full">
            <motion.div variants={itemVariants} className="space-y-3 sm:space-y-4">
              <span className="font-sans font-semibold uppercase tracking-[0.25em] text-brand-600 text-xs block">
                {MOTTO}
              </span>
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-slate-900 leading-[1.12]">
                <span className="block">India's First</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-emerald-600">
                  Hedge Fund-Led
                </span>
                <span className="block">Investment OS</span>
              </h1>
            </motion.div>

            <motion.p variants={itemVariants} className="font-sans text-slate-600 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl font-medium mx-auto">
              We converge professional asset management, institutional trading floors, proprietary signal tech, and an elite curated community under one unified, custom-registered roof.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 w-full">
              <button
                onClick={onInquiryClick}
                className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-sans text-xs sm:text-sm font-semibold uppercase tracking-wider px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-brand-600/10 hover:shadow-brand-600/20 group hover:scale-[1.01]"
              >
                Inquire For Allocation
                <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </button>
              
              <button
                onClick={() => onExploreClick("#pillars")}
                className="inline-flex items-center justify-center gap-2 border border-brand-200 hover:border-brand-300 bg-white hover:bg-brand-50 text-slate-900 font-sans text-xs sm:text-sm font-semibold uppercase tracking-wider px-8 py-4 rounded-full transition-all duration-300 hover:scale-[1.01]"
              >
                Explore The Pillars
              </button>
            </motion.div>

            {/* Quick credentials / badges */}
            <motion.div variants={itemVariants} className="pt-6 sm:pt-8 grid grid-cols-3 gap-4 sm:gap-6 border-t border-brand-100 max-w-xl w-full mx-auto">
              <div className="flex flex-col items-center">
                <span className="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-slate-900">₹1,500 Cr+</span>
                <span className="font-sans text-[10px] sm:text-xs text-slate-500 font-semibold mt-1">Valuation Path</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-slate-900">16–22%</span>
                <span className="font-sans text-[10px] sm:text-xs text-slate-500 font-semibold mt-1">Target Return</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-slate-900">Ahmedabad</span>
                <span className="font-sans text-[10px] sm:text-xs text-slate-500 font-semibold mt-1">Physical Hub</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Floating scroll indicator */}
        <div className="mt-16 sm:mt-24 flex justify-center">
          <motion.a
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            href="#opportunity"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("opportunity");
              if (el) {
                const offset = 80;
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = el.getBoundingClientRect().top;
                window.scrollTo({
                  top: elementRect - bodyRect - offset,
                  behavior: "smooth",
                });
              }
            }}
            className="flex flex-col items-center gap-1.5 text-slate-400 hover:text-brand-600 transition-colors cursor-pointer group font-sans"
          >
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] font-bold">Discover More</span>
            <ArrowDown className="h-4 w-4" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}

