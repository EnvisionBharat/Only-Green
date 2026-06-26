import React from "react";
import { motion } from "motion/react";

export default function DynamicGrowthBackground() {
  return (
    <div className="fixed inset-0 -z-30 overflow-hidden pointer-events-none select-none bg-[#f6faf8]">
      {/* Dynamic Animated Color Waves representing smooth market trends & wealth growth */}
      <div className="absolute inset-0 opacity-45 blur-[120px] transform-gpu">
        
        {/* Wave 1: Pure Emerald Green - rising from bottom-left towards center-right */}
        <motion.div
          animate={{
            x: ["-25%", "15%", "-25%"],
            y: ["15%", "-15%", "15%"],
            scale: [1, 1.25, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-[15%] -left-[15%] w-[85vw] h-[85vh] rounded-full bg-gradient-to-tr from-emerald-300/40 via-teal-200/25 to-transparent will-change-transform transform-gpu"
        />

        {/* Wave 2: Smooth Light Sky Blue - descending from top-right towards bottom-left */}
        <motion.div
          animate={{
            x: ["20%", "-10%", "20%"],
            y: ["-10%", "20%", "-10%"],
            scale: [1.2, 0.9, 1.2],
            rotate: [180, 270, 180],
          }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-[15%] -right-[15%] w-[90vw] h-[90vh] rounded-full bg-gradient-to-bl from-sky-300/35 via-cyan-200/25 to-transparent will-change-transform transform-gpu"
        />

        {/* Wave 3: Mint & Aqua Accent - oscillating in the middle-top representing dynamic micro-trends */}
        <motion.div
          animate={{
            x: ["-10%", "10%", "-10%"],
            y: ["-5%", "15%", "-5%"],
            scale: [0.85, 1.1, 0.85],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[10%] left-[20%] w-[65vw] h-[65vh] rounded-full bg-gradient-to-br from-emerald-200/25 via-sky-200/30 to-transparent will-change-transform transform-gpu"
        />

        {/* Wave 4: Deep Soft Teal & Royal Blue undertone at bottom for professional financial trust */}
        <motion.div
          animate={{
            x: ["10%", "-15%", "10%"],
            y: ["10%", "-10%", "10%"],
            scale: [1.1, 1.3, 1.1],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-[20%] left-[10%] w-[75vw] h-[75vh] rounded-full bg-gradient-to-tr from-teal-300/25 via-sky-300/20 to-transparent will-change-transform transform-gpu"
        />
      </div>

      {/* Elegant, high-performance background grid that blends seamlessly without crashing GPU layers */}
      <div 
        className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#10b981_1px,transparent_1px),linear-gradient(to_bottom,#10b981_1px,transparent_1px)] bg-[size:5rem_5rem]" 
        style={{
          maskImage: "radial-gradient(ellipse 65% 60% at 50% 50%, #000 60%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 65% 60% at 50% 50%, #000 60%, transparent 100%)"
        }}
      />
    </div>
  );
}
