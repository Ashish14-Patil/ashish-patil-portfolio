"use client";

import React from "react";
import { GraduationCap, Award, Calendar, Building2, CheckCircle2 } from "lucide-react";
import { EDUCATION_LIST } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent/10 text-accent text-xs font-bold tracking-wider uppercase mb-3">
            Background &amp; Learning
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-textPrimary tracking-tight">
            Education &amp; Certification
          </h2>
          <p className="text-slate-600 mt-2 text-base sm:text-lg">
            Academic qualifications and verified skill development in business administration, commercial analytics, and Power BI.
          </p>
          <div className="h-1 w-20 bg-accent rounded-full mt-4" />
        </div>

        {/* Education & Certification Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EDUCATION_LIST.map((item) => {
            const isCert = item.type === "Certification";

            return (
              <div
                key={item.id}
                className="gradient-border-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  {/* Badge & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        isCert
                          ? "bg-amber-100 text-amber-700 border border-amber-200"
                          : "bg-accent/10 text-accent border border-accent/20"
                      }`}
                    >
                      {isCert ? (
                        <Award className="w-6 h-6" />
                      ) : (
                        <GraduationCap className="w-6 h-6" />
                      )}
                    </div>

                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        isCert
                          ? "bg-amber-50 text-amber-800 border border-amber-200"
                          : "bg-blue-50 text-blue-700 border border-blue-200"
                      }`}
                    >
                      {item.badgeText}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-textPrimary mb-1">
                    {item.title}
                  </h3>

                  {/* Institution */}
                  <p className="text-xs sm:text-sm font-semibold text-accent flex items-center gap-1.5 mb-3">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{item.institution}</span>
                  </p>

                  {/* Period */}
                  <p className="text-xs text-slate-500 flex items-center gap-1.5 mb-4 font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </p>

                  {/* Note */}
                  {item.note && (
                    <p className="text-xs text-slate-600 leading-relaxed pt-3 border-t border-slate-100">
                      {item.note}
                    </p>
                  )}
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Credential</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
