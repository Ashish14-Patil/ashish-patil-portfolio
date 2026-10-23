"use client";

import React from "react";
import {
  Briefcase,
  Calendar,
  MapPin,
  Building2,
  CheckCircle2,
  Shield,
  Users,
} from "lucide-react";
import { EXPERIENCES } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-soft border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent/10 text-accent text-xs font-bold tracking-wider uppercase mb-3">
            Career Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-textPrimary tracking-tight">
            Work Experience
          </h2>
          <p className="text-slate-600 mt-2 text-base sm:text-lg">
            Professional track record ordered chronologically, focusing on hands-on dashboard support, analytical reporting, and data integrity operations.
          </p>
          <div className="h-1 w-20 bg-accent rounded-full mt-4" />
        </div>

        {/* Timeline Layout */}
        <div className="relative pl-6 sm:pl-10 space-y-12 before:absolute before:left-[11px] sm:before:left-[19px] before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-300">
          {EXPERIENCES.map((exp, idx) => {
            const isCurrent = exp.period.includes("Present");

            return (
              <div key={exp.id} className="relative group">
                {/* Timeline Node Icon */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-10 h-10 rounded-full flex items-center justify-center border-4 border-soft transition-all duration-300 ${
                    isCurrent
                      ? "bg-accent text-white shadow-glow"
                      : "bg-slate-700 text-white group-hover:bg-accent"
                  }`}
                >
                  <Briefcase className="w-4 h-4" />
                </div>

                {/* Experience Card */}
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-card hover:shadow-card-hover transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h3 className="text-xl sm:text-2xl font-bold text-textPrimary">
                          {exp.role}
                        </h3>
                        {isCurrent && (
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-300">
                            Current Role
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2 text-base font-semibold text-accent mt-1">
                        <Building2 className="w-4 h-4" />
                        <span>{exp.company}</span>
                      </div>
                    </div>

                    {/* Metadata Badges */}
                    <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-600">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200">
                        <Calendar className="w-3.5 h-3.5 text-accent" />
                        <span>{exp.period}</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        <span>{exp.location}</span>
                        <span className="text-slate-400">({exp.workMode})</span>
                      </span>
                    </div>
                  </div>

                  <hr className="my-4 border-slate-100" />

                  {/* Responsibilities List */}
                  <div className="space-y-2.5 mb-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Key Responsibilities &amp; Operations
                    </p>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Confidential Notice if present */}
                  {exp.confidentialNotice && (
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500 italic">
                      <Shield className="w-3.5 h-3.5 text-slate-400" />
                      <span>{exp.confidentialNotice}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
