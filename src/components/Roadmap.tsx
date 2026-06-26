import React, { useState, useEffect } from "react";
import { ROADMAP } from "../data";
import { Calendar, CheckCircle2, ChevronRight, Compass, Flag, Shield, Landmark } from "lucide-react";

export default function Roadmap() {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll("[data-roadmap-phase]");
      if (elements.length === 0) return;
      
      const viewportHeight = window.innerHeight;
      // Define a target line at 45% of the viewport height from the top
      const targetY = viewportHeight * 0.45;
      
      let closestIdx = 0;
      let minDistance = Infinity;
      
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // Calculate the element's vertical center
        const elCenter = rect.top + rect.height / 2;
        const distance = Math.abs(elCenter - targetY);
        
        if (distance < minDistance) {
          minDistance = distance;
          closestIdx = parseInt(el.getAttribute("data-index") || "0", 10);
        }
      });
      
      setActiveIdx(closestIdx);
    };

    // Run once on mount to set initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const getPhaseIcon = (phase: string) => {
    if (phase.includes("0–3")) return <Flag className="h-5 w-5 text-brand-600" />;
    if (phase.includes("3–6")) return <Compass className="h-5 w-5 text-brand-600" />;
    if (phase.includes("6–12")) return <CheckCircle2 className="h-5 w-5 text-brand-600" />;
    return <Landmark className="h-5 w-5 text-brand-600" />;
  };

  return (
    <section id="roadmap" className="py-24 bg-transparent scroll-mt-10 border-b border-brand-100/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header section */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-600">
            Roadmap & Milestones
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Four Phases of Strategic Expansion
          </h2>
          <p className="font-sans text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
            A precise timeline detailing compliance, physical construction, digital node onboarding, and full institutional scale.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Line (always visible on both mobile and desktop) */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-brand-200 -translate-x-1/2" />
          
          <div className="space-y-12 md:space-y-16">
            {ROADMAP.map((phase, idx) => {
              const isEven = idx % 2 === 0;
              const isActive = activeIdx === idx;
              return (
                <div
                  key={phase.phase}
                  data-roadmap-phase
                  data-index={idx}
                  className={`flex flex-col md:flex-row items-stretch gap-6 md:gap-0 relative ${
                    isEven ? "" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Central Node Indicator */}
                  <div 
                    className={`absolute left-4 md:left-1/2 top-5 -translate-x-1/2 z-10 flex items-center justify-center h-9 w-9 rounded-full bg-white border transition-all duration-500 ${
                      isActive 
                        ? "border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.65)] bg-emerald-50 scale-110" 
                        : "border-slate-200 shadow-sm"
                    }`}
                  >
                    <span className={`h-3 w-3 rounded-full transition-all duration-500 ${
                      isActive 
                        ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] scale-110" 
                        : "bg-slate-300"
                    }`} />
                  </div>

                  {/* Spacer or Left Card Content */}
                  <div className={`w-full md:w-1/2 pl-12 flex flex-col justify-start ${
                    isEven ? "md:pl-0 md:pr-8" : "md:pl-8 md:pr-0"
                  }`}>
                    <div
                      className={`bg-white border rounded-2xl p-6 shadow-md transition-all duration-500 text-left ${
                        isActive 
                          ? "border-emerald-400 shadow-[0_10px_30px_rgba(16,185,129,0.12)] ring-1 ring-emerald-500/20 scale-[1.02] bg-emerald-50/5" 
                          : "border-brand-100 shadow-slate-100/50 hover:shadow-lg"
                      }`}
                    >
                      {/* Phase Badge */}
                      <div
                        className="flex items-center gap-2 mb-4 justify-start"
                      >
                        <div className="p-1.5 bg-brand-50 rounded-lg shrink-0">
                          {getPhaseIcon(phase.phase)}
                        </div>
                        <span className={`font-mono text-xs font-bold px-3 py-1 rounded-full transition-colors duration-300 ${
                          isActive 
                            ? "text-emerald-700 bg-emerald-50 border border-emerald-200" 
                            : "text-brand-700 bg-brand-50 border border-brand-100"
                        }`}>
                          {phase.phase}
                        </span>
                      </div>

                      {/* Timeline Title */}
                      <span className={`font-mono text-[10px] uppercase tracking-widest font-bold block mb-1 transition-colors duration-300 ${
                        isActive ? "text-emerald-600" : "text-brand-600"
                      }`}>
                        {phase.timeframe}
                      </span>
                      <h3 className="font-display font-semibold text-lg text-slate-900 mb-4">
                        {phase.title}
                      </h3>

                      {/* Checklist */}
                      <div className="space-y-2.5 flex flex-col items-start text-left">
                        {phase.items.map((item, itemIdx) => (
                          <div
                            key={itemIdx}
                            className="flex gap-2 items-start text-left flex-row"
                          >
                            <span className={`h-1.5 w-1.5 rounded-full shrink-0 mt-2 transition-colors duration-300 ${
                              isActive ? "bg-emerald-500" : "bg-brand-500"
                            }`} />
                            <span className="font-sans text-xs text-slate-700 leading-relaxed font-semibold">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Empty Spacer side for Desktop */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
