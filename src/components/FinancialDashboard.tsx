import React, { useState } from "react";
import { REVENUE_STREAMS, METRICS } from "../data";
import { TrendingUp, Calculator, Table, Info, BarChart3, Coins, Sparkles, Building, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function FinancialDashboard() {
  const [selectedYear, setSelectedYear] = useState<1 | 2 | 3>(3);
  const [valuationMultiple, setValuationMultiple] = useState<number>(18); // default is average 15-20x
  const [customRevenue, setCustomRevenue] = useState<number>(110.25); // default is year 3 total revenue in Cr

  // Calculate total revenue for each year
  const getY1Total = () => REVENUE_STREAMS.reduce((acc, curr) => acc + curr.y1, 0);
  const getY2Total = () => REVENUE_STREAMS.reduce((acc, curr) => acc + curr.y2, 0);
  const getY3Total = () => REVENUE_STREAMS.reduce((acc, curr) => acc + curr.y3, 0);

  const getYearlyTotal = (year: 1 | 2 | 3) => {
    if (year === 1) return getY1Total();
    if (year === 2) return getY2Total();
    return getY3Total();
  };

  const getBlendedMargin = () => {
    // Blended Margin is 70%+ for Y3 as per PDF.
    return 70;
  };

  // Projected valuations in Crore
  const currentRevenueForYear = getYearlyTotal(selectedYear);
  const impliedValuation = currentRevenueForYear * valuationMultiple;

  // Custom valuation based on user slider input
  const customValuation = customRevenue * valuationMultiple;

  return (
    <section id="financials" className="py-24 bg-transparent scroll-mt-10 border-y border-brand-100/40">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-600">
            Revenue Model & Projections
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Nine Streams. Predictable. Compounding.
          </h2>
          <p className="font-sans text-slate-600 text-base sm:text-lg leading-relaxed">
            A highly resilient corporate structure built to capture maximum capital efficiency. We integrate low-overhead software licensing with stable management fee carry and digital memberships.
          </p>
        </div>

        {/* Why this Model Wins (4 Key Metrics Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="bg-white border border-brand-100 p-6 rounded-2xl flex flex-col justify-between hover:shadow-lg transition-all duration-300 relative group"
            >
              <div className="absolute top-4 right-4 h-2 w-2 rounded-full bg-brand-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div>
                <span className="font-display font-extrabold text-3xl text-slate-900 tracking-tight">
                  {metric.value}
                </span>
                <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-brand-600 mt-2">
                  {metric.label}
                </h4>
                <p className="font-sans text-xs text-slate-700 mt-2 leading-relaxed font-medium">
                  {metric.description}
                </p>
              </div>
              <div className="border-t border-brand-100/60 pt-3 mt-4">
                <span className="font-sans text-[11px] text-slate-600 font-semibold">
                  {metric.comparison}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Financial Section Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Interactive Revenue Breakdown Table & Bar Chart */}
          <div className="lg:col-span-7 bg-white border border-brand-100 p-2 sm:p-8 rounded-3xl shadow-xl shadow-slate-200/[0.1] flex flex-col justify-between overflow-hidden">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-brand-100/50">
                <div className="flex items-center gap-2">
                  <Table className="h-5 w-5 text-brand-600" />
                  <h3 className="font-display font-semibold text-base sm:text-lg text-slate-900">
                    Revenue Stream Allocations
                  </h3>
                </div>
                
                {/* Year Selectors */}
                <div className="flex bg-brand-50 border border-brand-100 p-1 rounded-lg self-center">
                  {([1, 2, 3] as const).map((yr) => (
                    <button
                      key={yr}
                      onClick={() => {
                        setSelectedYear(yr);
                        if (yr === 1) setCustomRevenue(getY1Total());
                        else if (yr === 2) setCustomRevenue(getY2Total());
                        else setCustomRevenue(getY3Total());
                      }}
                      className={`px-2 sm:px-3 py-1.5 rounded-md font-sans text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-colors ${
                        selectedYear === yr
                          ? "bg-brand-600 text-white shadow-sm"
                          : "text-slate-600 hover:bg-brand-100"
                      }`}
                    >
                      Year {yr}
                    </button>
                  ))}
                </div>
              </div>

              {/* Responsive Table */}
              <div className="w-full overflow-hidden">
                <table className="w-full text-left font-sans text-[10px] sm:text-xs table-fixed">
                  <thead>
                    <tr className="border-b border-brand-100 text-slate-600 font-bold uppercase tracking-wider text-[9px] sm:text-[10px]">
                      <th className="py-2.5 px-0.5 sm:px-2 w-[35%]">Revenue Stream</th>
                      <th className="py-2.5 px-0.5 sm:px-2 text-right w-[25%]">Allocation (₹ Cr)</th>
                      <th className="py-2.5 px-0.5 sm:px-2 text-right w-[15%]">Margin</th>
                      <th className="py-2.5 px-0.5 sm:px-2 text-right w-[25%]">Implied EBIT (₹ Cr)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-100/30">
                    {REVENUE_STREAMS.map((stream) => {
                      const amount = selectedYear === 1 ? stream.y1 : selectedYear === 2 ? stream.y2 : stream.y3;
                      const ebit = (amount * stream.margin) / 100;
                      return (
                        <tr key={stream.name} className="hover:bg-brand-50/50 transition-colors">
                          <td className="py-2.5 px-0.5 sm:px-2 font-semibold text-slate-800 truncate" title={stream.name}>{stream.name}</td>
                          <td className="py-2.5 px-0.5 sm:px-2 text-right font-mono font-medium text-slate-900">₹{amount.toFixed(2)}</td>
                          <td className="py-2.5 px-0.5 sm:px-2 text-right">
                            <span className="bg-brand-100 text-brand-700 px-1 sm:px-2 py-0.5 rounded font-semibold text-[9px] sm:text-[10px]">
                              {stream.margin}%
                            </span>
                          </td>
                          <td className="py-2.5 px-0.5 sm:px-2 text-right font-mono text-brand-600 font-semibold">₹{ebit.toFixed(2)}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr className="border-t-2 border-slate-900 bg-brand-50/50 font-bold text-slate-900 text-[9px] sm:text-xs">
                      <td className="py-2.5 px-0.5 sm:px-2 uppercase tracking-wider text-[8px] sm:text-[10px]">TOTAL</td>
                      <td className="py-2.5 px-0.5 sm:px-2 text-right font-mono">₹{currentRevenueForYear.toFixed(2)}</td>
                      <td className="py-2.5 px-0.5 sm:px-2 text-right text-[8px] sm:text-[10px]">~{getBlendedMargin()}%</td>
                      <td className="py-2.5 px-0.5 sm:px-2 text-right font-mono text-brand-700">
                        ₹{(currentRevenueForYear * (getBlendedMargin() / 100)).toFixed(2)}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>

            {/* Micro visual growth bar chart representing progression Y1 -> Y2 -> Y3 */}
            <div className="pt-6 border-t border-brand-100/50 mt-6">
              <span className="font-sans text-[10px] text-slate-600 uppercase font-bold tracking-wider block mb-4 flex items-center gap-1.5">
                <BarChart3 className="h-4 w-4 text-brand-600" /> Three-Year Scaling Velocity (₹ Crores)
              </span>
              
              <div className="grid grid-cols-3 gap-4 h-32 items-end">
                {[
                  { yr: 1, val: getY1Total(), label: "Year 1", color: "bg-brand-200" },
                  { yr: 2, val: getY2Total(), label: "Year 2", color: "bg-brand-500" },
                  { yr: 3, val: getY3Total(), label: "Year 3", color: "bg-brand-700" }
                ].map((item) => {
                  const isActive = selectedYear === item.yr;
                  return (
                    <div key={item.yr} className="flex flex-col items-center gap-2">
                       <span className={`font-mono text-xs font-bold ${isActive ? "text-brand-700 scale-105" : "text-slate-500"}`}>
                        ₹{item.val.toFixed(1)} Cr
                      </span>
                      <div className="w-full bg-slate-50 border border-slate-100 rounded-lg h-20 relative overflow-hidden flex items-end">
                        {/* Interactive anim bar */}
                        <div
                          className={`w-full rounded-t-md transition-all duration-500 ${item.color} ${
                            isActive ? "ring-2 ring-brand-500 ring-offset-1" : ""
                          }`}
                          style={{ height: `${(item.val / getY3Total()) * 100}%` }}
                        />
                      </div>
                      <span className={`font-sans text-[10px] font-bold ${isActive ? "text-slate-900" : "text-slate-400"}`}>
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Valuation & Growth Path Calculator */}
          <div className="lg:col-span-5 bg-[#022c22] text-white p-6 sm:p-10 rounded-3xl shadow-xl flex flex-col justify-between relative overflow-hidden">
            {/* Absolute element decoration */}
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
              <Building className="h-64 w-64 text-white" />
            </div>

            <div>
              <div className="flex items-center gap-2 border-b border-emerald-900 pb-4 mb-6">
                <Calculator className="h-5 w-5 text-brand-500" />
                <h3 className="font-display font-semibold text-lg text-white">
                  Valuation Multiple Engine
                </h3>
              </div>

              <p className="font-sans text-xs text-brand-100/80 leading-relaxed mb-6">
                Hedge fund businesses globally command 10–15x multiples. By fusing this base with compounding high-margin digital signal intelligence and recurring memberships, Only Green commands an institutional premium multiple of <strong className="text-[#10b981]">15–20x</strong>.
              </p>

              {/* Sliders and Calculations */}
              <div className="space-y-6 bg-[#021f18] p-5 rounded-2xl border border-emerald-900">
                
                {/* Revenue slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-[#a7f3d0]">PROJECTED REVENUE (Cr)</span>
                    <span className="text-white font-bold">₹{customRevenue.toFixed(2)} Cr</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="150"
                    step="0.5"
                    value={customRevenue}
                    onChange={(e) => setCustomRevenue(parseFloat(e.target.value))}
                    className="w-full accent-brand-500 bg-[#0d3329] h-1.5 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] font-mono text-emerald-300">
                    <span>Y1 (₹18.7 Cr)</span>
                    <span>Y3 (₹110.25 Cr)</span>
                  </div>
                </div>

                {/* Multiple slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-[#a7f3d0]">VALUATION MULTIPLE</span>
                    <span className="text-white font-bold">{valuationMultiple}x</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="25"
                    step="1"
                    value={valuationMultiple}
                    onChange={(e) => setValuationMultiple(parseInt(e.target.value))}
                    className="w-full accent-brand-500 bg-[#0d3329] h-1.5 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] font-mono text-emerald-300">
                    <span>10x (Retail Standard)</span>
                    <span>20x (Premium OS Standard)</span>
                  </div>
                </div>

              </div>

              {/* Dynamic Valuation Display */}
              <div className="mt-8 text-center p-6 bg-[#034435] rounded-2xl border border-emerald-800 flex flex-col justify-center items-center">
                <span className="font-sans text-[10px] text-[#a7f3d0] uppercase font-bold tracking-widest block mb-1">
                  IMPLIED INSTITUTIONAL VALUATION
                </span>
                <span className="font-display font-extrabold text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-[#10b981]">
                  ₹{customValuation.toFixed(2)} Crore
                </span>
                <div className="w-24 h-[1px] bg-emerald-800 my-3" />
                <span className="font-mono text-[10px] text-emerald-300">
                  Target Range: ₹1,500 – ₹2,500 Crore by Year 3
                </span>
              </div>
            </div>

            <div className="pt-6 border-t border-emerald-900 mt-8">
              <div className="bg-[#021f18]/50 p-4 rounded-xl border border-emerald-900 text-xs font-sans text-emerald-200/85 leading-relaxed flex items-center gap-3">
                <Coins className="h-5 w-5 text-brand-500 shrink-0" />
                <span>
                  The community moat and DRF intellectual property add a substantial defense premium. This is not a retail fintech multiple.
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
