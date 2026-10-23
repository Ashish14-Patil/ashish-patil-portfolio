"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Briefcase,
  FileDown,
  ArrowRight,
  Mail,
  BarChart2,
  Database,
  Layers,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { PERSONAL_INFO } from "@/lib/data";

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:pt-32 lg:pb-24 bg-navy-900 overflow-hidden"
    >
      {/* Background Subtle Mesh & Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(79,140,255,0.18),rgba(11,18,32,0))]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-accent/10 blur-[130px] rounded-full pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Availability & Location Badges */}
            <div className="flex flex-wrap items-center gap-2.5 mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-semibold backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="w-2 h-2 -ml-4 rounded-full bg-emerald-400" />
                <span>{PERSONAL_INFO.availability}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-medium">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                <span>{PERSONAL_INFO.location}</span>
                <span className="text-slate-400 font-normal">({PERSONAL_INFO.relocation})</span>
              </div>
            </div>

            {/* Candidate Name & Roles */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-4">
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-sky-300 to-blue-400">
                {PERSONAL_INFO.name}
              </span>
            </h1>

            {/* Main Headline */}
            <div className="mb-6">
              <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-200">
                Data Analyst &amp; Power BI Developer
              </p>
              <p className="text-sm sm:text-base font-medium text-accent mt-1 flex items-center gap-2">
                <span>SQL</span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                <span>DAX</span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                <span>Power Query</span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                <span>Business Intelligence</span>
              </p>
            </div>

            {/* Introduction Paragraph */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8 font-normal">
              {PERSONAL_INFO.intro}
            </p>

            {/* 3 Clear Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              {/* Button 1: View Projects */}
              <Link
                href="#projects"
                id="hero-btn-projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-accent hover:bg-accent-hover shadow-glow transition-all duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Button 2: Download Resume */}
              <a
                href="/files/Ashish_Patil_Resume.pdf"
                download="Ashish_Patil_Resume.pdf"
                id="hero-btn-resume"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-100 bg-white/10 hover:bg-white/15 border border-white/20 transition-all duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-accent"
                title="Download Ashish Patil Resume (PDF)"
              >
                <FileDown className="w-4 h-4 text-accent" />
                <span>Download Resume</span>
              </a>

              {/* Button 3: Contact Me */}
              <Link
                href="#contact"
                id="hero-btn-contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-white bg-transparent hover:bg-white/5 border border-white/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Contact Me</span>
              </Link>
            </div>

            {/* Key Skill Highlights Pills */}
            <div className="mt-10 pt-8 border-t border-white/10 w-full flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-300">
              <span className="text-slate-400 font-medium">Core Expertise:</span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent" /> Power BI Dashboards
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent" /> DAX Measures &amp; KPIs
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent" /> SQL Data Extraction
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent" /> Data Accuracy &amp; MIS
              </span>
            </div>
          </div>

          {/* Right Column: Profile Visual Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer Glow Frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-accent/50 via-blue-500/30 to-indigo-500/50 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-1000" />

              {/* Card Container */}
              <div className="relative rounded-3xl bg-navy-850 border border-white/15 p-6 shadow-hero-card">
                {/* Profile Photo / Fallback Avatar */}
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-navy-950 border border-white/10 shadow-inner flex items-center justify-center">
                  {!imgError ? (
                    <Image
                      src="/images/ashish-profile.jpeg"
                      alt="Ashish Patil - Power BI Developer & Data Analyst"
                      width={480}
                      height={480}
                      priority
                      className="object-cover object-top w-full h-full transform hover:scale-105 transition-transform duration-500"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    /* Tasteful AP initials avatar fallback */
                    <div className="flex flex-col items-center justify-center w-full h-full bg-gradient-to-br from-navy-800 to-navy-950 text-white p-6 text-center">
                      <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-accent to-blue-600 flex items-center justify-center text-white text-3xl font-extrabold shadow-glow mb-4">
                        AP
                      </div>
                      <p className="text-lg font-bold text-white">Ashish Patil</p>
                      <p className="text-xs text-accent mt-1">Power BI Developer &amp; Data Analyst</p>
                      <span className="text-[11px] text-slate-400 mt-3 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                        Profile Image Ready
                      </span>
                    </div>
                  )}

                  {/* Overlay Badge for Role */}
                  <div className="absolute bottom-3 left-3 right-3 bg-navy-950/85 backdrop-blur-md border border-white/15 rounded-xl p-3 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-accent/20 border border-accent/40 flex items-center justify-center text-accent">
                        <BarChart2 className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white">Power BI Developer</p>
                        <p className="text-[10px] text-slate-300">Data Analytics &amp; Reporting</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      Open to Work
                    </span>
                  </div>
                </div>

                {/* Quick Info Grid Below Photo */}
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                    <div className="flex items-center gap-2 text-accent text-xs font-semibold mb-1">
                      <Database className="w-3.5 h-3.5" />
                      <span>Data Stack</span>
                    </div>
                    <p className="text-xs text-slate-300 font-medium">Power BI, SQL, Excel, Python</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                    <div className="flex items-center gap-2 text-accent text-xs font-semibold mb-1">
                      <Layers className="w-3.5 h-3.5" />
                      <span>Specialization</span>
                    </div>
                    <p className="text-xs text-slate-300 font-medium">DAX &amp; MIS Dashboards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
