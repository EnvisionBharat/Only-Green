import React from "react";
import Logo from "./Logo";
import { Mail, Phone, MapPin, ShieldAlert, ArrowUp } from "lucide-react";
import { CONTACT_INFO } from "../data";

export default function Footer() {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-950 text-white border-t border-brand-900 pt-10 pb-6 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-brand-900 pb-8 mb-8">
          
          {/* Logo & Info column */}
          <div className="md:col-span-5 space-y-4">
            <img 
              src="https://res.cloudinary.com/deic5ha4h/image/upload/v1782495872/ChatGPT_Image_Jun_26_2026_11_11_49_PM_zpyqxu.png" 
              alt="Only Green" 
              className="h-20 w-auto object-contain brightness-110 contrast-110 hover:opacity-100 transition-opacity duration-200" 
              referrerPolicy="no-referrer"
            />
            <p className="text-brand-100/60 text-xs leading-relaxed max-w-sm">
              India's first hedge fund-led investment operating system. We merge professional asset management, cutting-edge trading floors, proprietary signal tech, and an elite curated community under one unified, custom-registered roof.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-semibold text-sm tracking-wider uppercase text-brand-500">
              Corporate sectors
            </h4>
            <ul className="space-y-2 text-xs text-brand-100/60 font-medium">
              {[
                { name: "Investor Opportunity", href: "#opportunity" },
                { name: "Integrated Pillars", href: "#pillars" },
                { name: "Projected Financial Model", href: "#financials" },
                { name: "Strategic Milestones", href: "#roadmap" },
                { name: "Why Only Green", href: "#why-now" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.querySelector(link.href);
                      if (el) {
                        const offset = 80;
                        const bodyRect = document.body.getBoundingClientRect().top;
                        const elementRect = el.getBoundingClientRect().top;
                        const offsetPos = elementRect - bodyRect - offset;
                        window.scrollTo({ top: offsetPos, behavior: "smooth" });
                      }
                    }}
                    className="hover:text-white transition-colors duration-150"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Location Block */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display font-semibold text-sm tracking-wider uppercase text-brand-500">
              Contact & Support
            </h4>
            
            <div className="space-y-3 text-xs text-brand-100/80 font-sans font-medium">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-brand-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">Sola, Ahmedabad, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-brand-500 shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-brand-500 shrink-0" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-white transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-center text-center gap-4 text-xs font-mono text-brand-100/40">
          <div>
            © {currentYear} Only Green Community. All rights reserved. • Ahmedabad, India.
          </div>
        </div>

      </div>
    </footer>
  );
}
