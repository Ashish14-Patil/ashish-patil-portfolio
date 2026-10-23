"use client";

import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  Sparkles,
  Info,
  ExternalLink,
} from "lucide-react";
import { PERSONAL_INFO } from "@/lib/data";

const REASONS = [
  "Job Opportunity",
  "Power BI Freelance Project",
  "Data Analytics Project",
  "Collaboration",
  "Other",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "Job Opportunity",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "";
  const isEndpointConfigured =
    formspreeEndpoint.trim().length > 0 &&
    !formspreeEndpoint.includes("your_form_id_here");

  // Check URL hash for pre-selected reason
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash.includes("reason=")) {
        const urlParams = new URLSearchParams(hash.split("?")[1]);
        const reasonParam = urlParams.get("reason");
        if (reasonParam && REASONS.includes(reasonParam)) {
          setFormData((prev) => ({ ...prev, reason: reasonParam }));
        }
      }
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    // Basic email check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("error");
      setErrorMessage("Please provide a valid email address.");
      return;
    }

    if (!isEndpointConfigured) {
      // Fallback to mailto when Formspree is not yet configured
      const subject = encodeURIComponent(`[Portfolio Inquiry] ${formData.reason} from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nReason: ${formData.reason}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          reason: formData.reason,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          reason: "Job Opportunity",
          message: "",
        });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || "Form submission failed. Please try again.");
      }
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(
        err.message || "An unexpected error occurred. Please contact directly via email."
      );
    }
  };

  // Direct mailto link generator
  const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
    `[Portfolio Inquiry] ${formData.reason || "General"}`
  )}&body=${encodeURIComponent(formData.message || "Hello Ashish,")}`;

  return (
    <section id="contact" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent/10 text-accent text-xs font-bold tracking-wider uppercase mb-3">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-textPrimary tracking-tight">
            Let&apos;s Discuss Opportunities
          </h2>
          <p className="text-slate-600 mt-2 text-base sm:text-lg">
            Whether you have a full-time role, a Power BI dashboard freelance project, or a data analytics requirement, feel free to reach out.
          </p>
          <div className="h-1 w-20 bg-accent rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-soft rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-textPrimary mb-6">
                Contact Details
              </h3>

              <div className="space-y-5">
                {/* Email */}
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-start gap-4 p-3.5 rounded-xl bg-white border border-slate-200/80 hover:border-accent hover:shadow-sm transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                      Email Address
                    </span>
                    <span className="text-sm font-semibold text-textPrimary group-hover:text-accent transition-colors truncate block">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`}
                  className="flex items-start gap-4 p-3.5 rounded-xl bg-white border border-slate-200/80 hover:border-accent hover:shadow-sm transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                      Phone / WhatsApp
                    </span>
                    <span className="text-sm font-semibold text-textPrimary group-hover:text-accent transition-colors block">
                      {PERSONAL_INFO.phone}
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4 p-3.5 rounded-xl bg-white border border-slate-200/80">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                      Location
                    </span>
                    <span className="text-sm font-semibold text-textPrimary block">
                      {PERSONAL_INFO.location}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      ({PERSONAL_INFO.relocation})
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-3">
                  Professional Profiles
                </span>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:text-blue-600 hover:border-blue-400 hover:shadow-sm transition-all"
                  >
                    <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                    <span>LinkedIn Profile</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>

                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:text-slate-900 hover:border-slate-400 hover:shadow-sm transition-all"
                  >
                    <Github className="w-4 h-4 text-slate-800" />
                    <span>GitHub Profile</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-card">
            <h3 className="text-xl font-bold text-textPrimary mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-6">
              Fill out the form below and I will respond promptly.
            </p>

            {/* Informative notice if Formspree endpoint is not configured */}
            {!isEndpointConfigured && (
              <div className="mb-6 p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-900 flex items-start gap-3">
                <Info className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">Formspree Endpoint Notice:</p>
                  <p className="mt-0.5 leading-relaxed text-blue-800">
                    The contact form is ready to connect with Formspree via{" "}
                    <code className="bg-blue-100 px-1 py-0.5 rounded font-mono text-[11px]">
                      NEXT_PUBLIC_FORMSPREE_ENDPOINT
                    </code>
                    . Submitting will open your default email client with your message pre-filled, or you can mail directly to{" "}
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="font-semibold underline hover:text-blue-950"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                    .
                  </p>
                </div>
              </div>
            )}

            {/* Form Success State */}
            {status === "success" && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold">Message sent successfully!</h4>
                  <p className="text-xs text-emerald-700 mt-0.5">
                    Thank you for reaching out. I will get back to you as soon as possible.
                  </p>
                </div>
              </div>
            )}

            {/* Form Error State */}
            {status === "error" && (
              <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-300 text-red-900 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold">Unable to submit form</h4>
                  <p className="text-xs text-red-700 mt-0.5">{errorMessage}</p>
                  <a
                    href={mailtoLink}
                    className="inline-block mt-2 text-xs font-semibold text-red-800 underline hover:text-red-950"
                  >
                    Click here to send directly via your email client
                  </a>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-textPrimary placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="name@company.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-textPrimary placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Reason for Contact */}
              <div>
                <label
                  htmlFor="reason"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                >
                  Reason for Contact <span className="text-red-500">*</span>
                </label>
                <select
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-textPrimary bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                >
                  {REASONS.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Describe your role, dashboard project requirements, or opportunity..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-textPrimary placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-y"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-accent hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed shadow-glow transition-all focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  {status === "submitting" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{isEndpointConfigured ? "Send Message" : "Send via Email"}</span>
                    </>
                  )}
                </button>

                <a
                  href={mailtoLink}
                  className="text-xs text-slate-500 hover:text-accent font-medium transition-colors"
                >
                  Or email directly: {PERSONAL_INFO.email}
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
