import React from "react";
import { XCircle, CheckCircle2, RefreshCw, Smartphone, Users, Radio, MessageSquare } from "lucide-react";
import { OPPORTUNITY_DATA } from "../data";

export default function Opportunity() {
  const currentDrawbacks = [
    {
      icon: <Smartphone className="h-5 w-5 text-red-500" />,
      title: "Fragmented Execution",
      desc: "Traders jumping between Zerodha, Groww, or other institutional brokers, adding unnecessary operational friction."
    },
    {
      icon: <MessageSquare className="h-5 w-5 text-red-500" />,
      title: "Noisy Ideation Groups",
      desc: "Relying on crowded, unverified WhatsApp channels, Telegram pools, or Twitter feeds for market trade signals."
    },
    {
      icon: <Users className="h-5 w-5 text-red-500" />,
      title: "Random Networking",
      desc: "Attending occasional generic startup or trading events with no curated vetting process or shared capital skin."
    },
    {
      icon: <Radio className="h-5 w-5 text-red-500" />,
      title: "Unverified Intelligence",
      desc: "Using indicators or retail signals with unknown historical win rates and unquantified risk structures."
    }
  ];

  const onlyGreenSolutions = [
    {
      title: "Alternative Investment Fund (AIF)",
      desc: "An asset class hedge fund deploying capital using institutional-grade, absolute-return strategies.",
      badge: "The Fund"
    },
    {
      title: "Proprietary DRF Signals",
      desc: "High-conviction market signals backed by a rigorous 85-92% historical win rate across 5,855+ trades.",
      badge: "The Technology"
    },
    {
      title: "Curated HNI Elite Circle",
      desc: "Vetted access to high-net-worth investors, founders, and expert operators for genuine deal flow.",
      badge: "The Community"
    },
    {
      title: "1,000 sq yd Ahmedabad Hub",
      desc: "A physical headquarter containing professional trading floors, podcast studios, and premium member café.",
      badge: "The Space"
    }
  ];

  return (
    <section id="opportunity" className="py-24 bg-transparent border-y border-brand-100/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-600">
            The Opportunity
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            A problem every serious Indian investor faces
          </h2>
          <p className="font-sans text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
            {OPPORTUNITY_DATA.problem}
          </p>
        </div>

        {/* The Comparison: Status Quo vs Only Green */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Status Quo Column */}
          <div className="bg-white border border-brand-100 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-red-700 bg-red-100/70 px-3.5 py-1 rounded-full">
                  Current Status Quo
                </span>
                <span className="text-xs text-red-600/70 font-sans font-bold">Fragmented & Noisy</span>
              </div>
              
              <h3 className="font-display font-semibold text-2xl text-slate-900 mb-4">
                The Patchwork Trap
              </h3>
              <p className="font-sans text-slate-600 text-sm mb-8 leading-relaxed font-medium">
                {OPPORTUNITY_DATA.consequence}
              </p>

              <div className="space-y-6">
                {currentDrawbacks.map((item, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="p-1.5 bg-rose-50 border border-rose-100 rounded-lg shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-sm text-slate-900 flex items-center gap-1.5">
                        {item.title}
                        <XCircle className="h-3.5 w-3.5 text-red-400 shrink-0" />
                      </h4>
                      <p className="font-sans text-xs text-slate-600 mt-1 leading-relaxed font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-brand-100 flex items-center justify-between text-xs font-mono text-red-700 font-bold">
              <span>Low-conviction execution</span>
              <span>Individual risk</span>
            </div>
          </div>

          {/* Only Green Column */}
          <div className="bg-[#022c22] border border-brand-800 rounded-3xl p-8 sm:p-10 text-white flex flex-col justify-between shadow-xl shadow-brand-950/10">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#10b981] bg-brand-950/60 border border-brand-800 px-3.5 py-1 rounded-full">
                  The Only Green OS
                </span>
                <span className="text-xs text-brand-100/60 font-sans font-bold">Cohesive & Unified</span>
              </div>

              <h3 className="font-display font-semibold text-2xl mb-4 text-brand-100">
                The Unified Solution
              </h3>
              <p className="font-sans text-brand-100/70 text-sm mb-8 leading-relaxed font-semibold">
                We solve this completely. Only Green is a premium investment operating system built on four tightly-integrated pillars to deliver institutional leverage.
              </p>

              <div className="space-y-6">
                {onlyGreenSolutions.map((item, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="p-1.5 bg-brand-900 border border-brand-800 rounded-lg shrink-0 mt-0.5 text-[#10b981]">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-sm text-white flex items-center gap-2">
                        {item.title}
                        <span className="text-[10px] font-mono tracking-wider text-[#10b981] bg-brand-950/40 px-2 py-0.5 rounded border border-brand-800/40">
                          {item.badge}
                        </span>
                      </h4>
                      <p className="font-sans text-xs text-brand-100/70 mt-1 leading-relaxed font-semibold">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-brand-900 flex items-center justify-between text-xs font-mono text-brand-100/60">
              <span>India's First Hybrid Operating System</span>
              <span className="flex items-center gap-1 text-[#10b981] font-bold">
                Active <RefreshCw className="h-3 w-3 animate-spin" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
