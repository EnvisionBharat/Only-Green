import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { Menu, X, ArrowUpRight, Lock, Phone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  onInquiryClick: () => void;
}

export default function Header({ onInquiryClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { name: "Opportunity", href: "#opportunity" },
    { name: "Pillars", href: "#pillars" },
    { name: "Financial Model", href: "#financials" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "Why Us", href: "#why-now" },
    { name: "Contact Us", href: "#inquiry" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Precise active section detection based on scroll position
      const scrollPosition = window.scrollY + 120; // offset for sticky header
      
      let currentActive = "";
      for (const link of navLinks) {
        const element = document.querySelector(link.href) as HTMLElement;
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentActive = link.href;
            break;
          }
        }
      }
      
      // Fallback check if at the very top of the page
      if (window.scrollY < 100) {
        currentActive = "";
      }
      
      setActiveSection(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    // Call once initially to set starting active state
    setTimeout(handleScroll, 100);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#f7fbf8]/80 backdrop-blur-md shadow-sm border-b border-brand-100 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="focus:outline-none flex items-center gap-2 sm:gap-3" onClick={(e) => handleLinkClick(e, "#")}>
              <Logo size="sm" theme="light" />
              <img 
                src="https://res.cloudinary.com/deic5ha4h/image/upload/v1782497996/only_green_enhanced-removebg-preview_1_q6iszd.png"
                alt="Only Green Enhanced"
                className="object-contain shrink-0"
                style={{
                  paddingLeft: "0px",
                  paddingTop: "0px",
                  paddingRight: "0px",
                  marginLeft: "-6px",
                  height: "38px",
                  marginBottom: "0px",
                  width: "108px",
                  marginTop: "0px",
                  paddingBottom: "-3px"
                }}
                referrerPolicy="no-referrer"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`font-sans text-sm font-semibold transition-all duration-200 relative py-1.5 ${
                      isActive
                        ? "text-brand-600 font-bold"
                        : "text-slate-800 hover:text-brand-600"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-600 rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* CTAs */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={onInquiryClick}
                className="inline-flex items-center gap-1.5 bg-brand-600 hover:bg-brand-700 text-white font-sans text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all duration-200 shadow-md shadow-brand-600/10 hover:shadow-brand-600/25 group"
              >
                Request Allocation
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-3">
              <button
                onClick={onInquiryClick}
                className="bg-brand-600 text-white p-2 rounded-full shadow-md shadow-brand-600/10 hover:bg-brand-700"
              >
                <ArrowUpRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-slate-900 hover:text-brand-600 transition-colors focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-40 bg-[#f7fbf8]/95 backdrop-blur-lg border-b border-brand-100 shadow-xl lg:hidden max-h-[calc(100vh-60px)] overflow-y-auto"
          >
            <div className="px-5 py-6 space-y-5">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={`font-sans text-base font-semibold py-1 transition-all duration-200 border-l-2 pl-3 ${
                        isActive
                          ? "text-brand-600 border-brand-600 font-bold bg-brand-50/50"
                          : "text-slate-800 border-transparent hover:text-brand-600"
                      }`}
                    >
                      {link.name}
                    </a>
                  );
                })}
              </div>
              <div className="h-[1px] bg-brand-100"></div>
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onInquiryClick();
                  }}
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-brand-600 hover:bg-brand-700 text-white font-sans text-sm font-semibold uppercase tracking-wider py-3.5 rounded-xl transition-all duration-200"
                >
                  Request Allocation
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
