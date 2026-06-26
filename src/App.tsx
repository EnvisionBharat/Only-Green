/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Opportunity from "./components/Opportunity";
import Pillars from "./components/Pillars";
import FinancialDashboard from "./components/FinancialDashboard";
import Roadmap from "./components/Roadmap";
import WhyNow from "./components/WhyNow";
import InquiryForm from "./components/InquiryForm";
import Footer from "./components/Footer";
import DynamicGrowthBackground from "./components/DynamicGrowthBackground";
import { MessageSquareCode, ArrowUpRight } from "lucide-react";

export default function App() {
  const handleScrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const offset = 80; // Header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-transparent text-slate-900 antialiased font-sans overflow-x-hidden">
      {/* Dynamic Animated Growth Wave Background */}
      <DynamicGrowthBackground />

      {/* Navigation Header */}
      <Header onInquiryClick={() => handleScrollToSection("#inquiry")} />

      {/* Hero Section */}
      <Hero
        onInquiryClick={() => handleScrollToSection("#inquiry")}
        onExploreClick={handleScrollToSection}
      />

      {/* Problem / Opportunity */}
      <Opportunity />

      {/* The Four Pillars */}
      <Pillars />

      {/* Projected Financial Model Sliders */}
      <FinancialDashboard />

      {/* Vertical Timeline Growth Roadmap */}
      <Roadmap />

      {/* Advantages Grid & Testimonials */}
      <WhyNow />

      {/* Contact & Inquiry Forms */}
      <InquiryForm />

      {/* Site Footer */}
      <Footer />
    </div>
  );
}

