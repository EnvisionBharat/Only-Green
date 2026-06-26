import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2, Landmark, Sparkles } from "lucide-react";
import { CONTACT_INFO } from "../data";

interface InquiryFormProps {
  onSuccessClose?: () => void;
}

export default function InquiryForm({ onSuccessClose }: InquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    org: "",
    allocation: "50k-5l", // default tier
    notes: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^[+0-9\s-]{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone structure (minimum 10 digits)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section id="inquiry" className="py-24 bg-transparent border-t border-brand-100/40 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Direct info and credentials */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-600">
                Contact & Allocations
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
                Secure your position in India's elite capital club
              </h2>
              <p className="font-sans text-slate-600 text-sm leading-relaxed font-medium">
                Thank you for your interest in Only Green. Because our community tiers and custom-registered capital allocations are strictly capped, we prioritize applicants based on strategic fit and capital profile.
              </p>

              {/* Direct Info list */}
              <div className="space-y-4 pt-4">
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-white rounded-xl text-brand-600 border border-brand-100 shrink-0 mt-0.5 shadow-sm">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-slate-500 font-bold block">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="font-sans text-sm font-bold text-slate-800 hover:text-brand-600 transition-colors"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-white rounded-xl text-brand-600 border border-brand-100 shrink-0 mt-0.5 shadow-sm">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-slate-500 font-bold block">
                      Direct Phone / Whatsapp
                    </span>
                    <a
                      href={`tel:${CONTACT_INFO.phone}`}
                      className="font-sans text-sm font-bold text-slate-800 hover:text-brand-600 transition-colors"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-white rounded-xl text-brand-600 border border-brand-100 shrink-0 mt-0.5 shadow-sm">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-slate-500 font-bold block">
                      Physical Hub Location
                    </span>
                    <span className="font-sans text-sm font-bold text-slate-800 block">
                      {CONTACT_INFO.displayAddress}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-brand-100 shadow-sm hidden lg:block">
              <span className="font-mono text-[9px] uppercase text-brand-600 font-bold tracking-wider block mb-2 flex items-center gap-1">
                <Landmark className="h-3.5 w-3.5" /> Institutional Security
              </span>
              <p className="font-sans text-xs text-slate-600 leading-relaxed font-semibold">
                All communications and allocations remain strictly confidential. Your data is protected under leading enterprise financial grade encryptions.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-white border border-brand-100 p-6 sm:p-10 rounded-3xl shadow-xl shadow-slate-100">
            
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12 space-y-6">
                <div className="p-4 bg-brand-50 border border-brand-100 rounded-full text-brand-600 animate-bounce">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                
                <div className="space-y-2 max-w-md">
                  <h3 className="font-display font-semibold text-2xl text-slate-900">
                    Briefing Request Received
                  </h3>
                  <p className="font-sans text-sm text-slate-700 leading-relaxed">
                    Thank you, <strong className="text-slate-900 font-bold">{formData.name}</strong>. Your allocation preference for <strong className="text-slate-900 uppercase font-bold">{formData.allocation}</strong> has been cataloged.
                  </p>
                  <p className="font-sans text-xs text-slate-600 leading-relaxed font-medium">
                    Our Investor Relations Officer will review your parameters and reach out to you at <strong className="text-slate-900 font-bold">{formData.email}</strong> or <strong className="text-slate-900 font-bold">{formData.phone}</strong> within 24 hours to schedule your briefing call.
                  </p>
                </div>

                <div className="w-24 h-[1px] bg-brand-100" />
                
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: "", email: "", phone: "", org: "", allocation: "50k-5l", notes: "" });
                    if (onSuccessClose) onSuccessClose();
                  }}
                  className="bg-brand-600 hover:bg-brand-700 text-white font-sans text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded-xl transition-all duration-200"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-brand-100 pb-4 mb-2 flex items-center justify-between">
                  <h3 className="font-display font-semibold text-lg text-slate-900">
                    Request Personal Allocation Briefing
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label className="font-sans text-xs font-bold uppercase tracking-wider text-slate-700 block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      disabled={isSubmitting}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sumit Bharodiya"
                      className={`w-full px-4 py-3 rounded-xl border font-sans text-xs transition-colors focus:outline-none focus:ring-1 ${
                        errors.name
                          ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                          : "border-brand-200 focus:border-brand-600 focus:ring-brand-600 bg-slate-50 text-slate-900"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 font-mono text-[10px] flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label className="font-sans text-xs font-bold uppercase tracking-wider text-slate-700 block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      disabled={isSubmitting}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. name@example.com"
                      className={`w-full px-4 py-3 rounded-xl border font-sans text-xs transition-colors focus:outline-none focus:ring-1 ${
                        errors.email
                          ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                          : "border-brand-200 focus:border-brand-600 focus:ring-brand-600 bg-slate-50 text-slate-900"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 font-mono text-[10px] flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone field */}
                  <div className="space-y-1.5">
                    <label className="font-sans text-xs font-bold uppercase tracking-wider text-slate-700 block">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      disabled={isSubmitting}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 9609169555"
                      className={`w-full px-4 py-3 rounded-xl border font-sans text-xs transition-colors focus:outline-none focus:ring-1 ${
                        errors.phone
                          ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                          : "border-brand-200 focus:border-brand-600 focus:ring-brand-600 bg-slate-50 text-slate-900"
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 font-mono text-[10px] flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" /> {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Organization field */}
                  <div className="space-y-1.5">
                    <label className="font-sans text-xs font-bold uppercase tracking-wider text-slate-700 block">
                      Company / Organization <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      disabled={isSubmitting}
                      value={formData.org}
                      onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                      placeholder="e.g. Venture Capital India"
                      className="w-full px-4 py-3 rounded-xl border border-brand-200 focus:border-brand-600 focus:ring-brand-600 focus:outline-none focus:ring-1 font-sans text-xs bg-slate-50 text-slate-900"
                    />
                  </div>
                </div>

                {/* Capital Allocation Selector - Matches community tiers */}
                <div className="space-y-1.5">
                  <label className="font-sans text-xs font-bold uppercase tracking-wider text-slate-700 block">
                    Target Membership Tier & Capital Profile
                  </label>
                  <select
                    disabled={isSubmitting}
                    value={formData.allocation}
                    onChange={(e) => setFormData({ ...formData, allocation: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-brand-200 focus:border-brand-600 focus:ring-brand-600 focus:outline-none focus:ring-1 font-sans text-xs bg-slate-50 text-slate-900"
                  >
                    <option value="50k-5l">Observer Tier (₹50K to ₹5L capital portfolio)</option>
                    <option value="5l-25l">Core Member Tier (₹5L to ₹25L capital portfolio)</option>
                    <option value="25l-1cr">Pro Member Tier (₹25L to ₹1 Crore capital portfolio)</option>
                    <option value="1cr-custom">Elite Bespoke Tier (₹1 Crore+ capital portfolio)</option>
                  </select>
                </div>

                {/* Notes/Brief */}
                <div className="space-y-1.5">
                  <label className="font-sans text-xs font-bold uppercase tracking-wider text-slate-700 block">
                    Capital Background & Special Briefing Notes
                  </label>
                  <textarea
                    disabled={isSubmitting}
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="e.g. Experienced swing trader looking for co-investment flow..."
                    className="w-full px-4 py-3 rounded-xl border border-brand-200 focus:border-brand-600 focus:ring-brand-600 focus:outline-none focus:ring-1 font-sans text-xs resize-none bg-slate-50 text-slate-900"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-sans text-xs font-semibold uppercase tracking-wider py-4 rounded-xl transition-all duration-200 shadow-md shadow-brand-950/15 disabled:bg-brand-600/50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin text-white" />
                      COMPILING REQUEST PARAMETERS...
                    </>
                  ) : (
                    <>
                      SUBMIT SECURE ALLOCATION INQUIRY
                      <Send className="h-3.5 w-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}

            {/* Mobile-only Institutional Security Card shown inside the form column but below the form */}
            <div className="bg-white p-5 rounded-2xl border border-brand-100 shadow-sm block lg:hidden mt-8">
              <span className="font-mono text-[9px] uppercase text-brand-600 font-bold tracking-wider block mb-2 flex items-center gap-1">
                <Landmark className="h-3.5 w-3.5" /> Institutional Security
              </span>
              <p className="font-sans text-xs text-slate-600 leading-relaxed font-semibold">
                All communications and allocations remain strictly confidential. Your data is protected under leading enterprise financial grade encryptions.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
