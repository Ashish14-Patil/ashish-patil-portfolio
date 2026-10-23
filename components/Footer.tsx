"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Github, Linkedin, Mail, Heart } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-950 text-slate-400 border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-blue-700 flex items-center justify-center text-white font-bold text-lg shadow-md">
                AP
              </div>
              <div>
                <p className="text-white font-bold text-lg">{PERSONAL_INFO.name}</p>
                <p className="text-xs text-accent">Power BI Developer &amp; Data Analyst</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Transforming complex business datasets into clear, interactive Power BI dashboards, KPI reports, and reliable analytical models.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Quick Navigation
            </p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <Link href="#about" className="hover:text-accent transition-colors">
                About Me
              </Link>
              <Link href="#skills" className="hover:text-accent transition-colors">
                Skills &amp; Tools
              </Link>
              <Link href="#experience" className="hover:text-accent transition-colors">
                Experience
              </Link>
              <Link href="#projects" className="hover:text-accent transition-colors">
                Projects
              </Link>
              <Link href="#services" className="hover:text-accent transition-colors">
                Services
              </Link>
              <Link href="#education" className="hover:text-accent transition-colors">
                Education
              </Link>
              <Link href="#contact" className="hover:text-accent transition-colors">
                Contact
              </Link>
              <a
                href="/files/Ashish_Patil_Resume.pdf"
                download="Ashish_Patil_Resume.pdf"
                className="text-accent hover:underline flex items-center gap-1"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Col 3: Connect & Socials */}
          <div className="md:col-span-3 space-y-4">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Connect Directly
            </p>
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-accent hover:text-white flex items-center justify-center transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5 text-accent" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-accent hover:text-white flex items-center justify-center transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5 text-accent" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-accent hover:text-white flex items-center justify-center transition-all"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5 text-accent" />
              </a>
            </div>
            <p className="text-xs text-slate-400">
              Indore, Madhya Pradesh, India (Open to Relocation)
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {currentYear} {PERSONAL_INFO.name}. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5">
            Built with Next.js, TypeScript &amp; Tailwind CSS
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-all"
            aria-label="Scroll back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
