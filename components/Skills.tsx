"use client";

import React from "react";
import {
  BarChart3,
  Database,
  FileSpreadsheet,
  Code2,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { SKILL_CATEGORIES } from "@/lib/data";

const ICON_MAP: Record<string, React.ElementType> = {
  BarChart3,
  Database,
  FileSpreadsheet,
  Code2,
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent/10 text-accent text-xs font-bold tracking-wider uppercase mb-3">
            Technical Toolkit
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-textPrimary tracking-tight">
            Skills &amp; Technologies
          </h2>
          <p className="text-slate-600 mt-2 text-base sm:text-lg">
            Practical competencies utilized across dashboard engineering, business intelligence, database queries, and data transformation.
          </p>
          <div className="h-1 w-20 bg-accent rounded-full mt-4" />
        </div>

        {/* 4 Clean Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category, idx) => {
            const IconComponent = ICON_MAP[category.icon] || BarChart3;

            return (
              <div
                key={idx}
                className="gradient-border-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-textPrimary">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <hr className="my-4 border-slate-100" />

                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-2.5 pt-1">
                    {category.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-50 text-slate-800 border border-slate-200/90 hover:border-accent/60 hover:bg-accent/5 hover:text-accent transition-all duration-150"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100/80 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-medium">Applied in production &amp; project analytics</span>
                  <span className="text-accent font-semibold">{category.skills.length} Competencies</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
