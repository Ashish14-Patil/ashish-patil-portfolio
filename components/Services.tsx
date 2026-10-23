"use client";

import React from "react";
import Link from "next/link";
import {
  BarChart3,
  Calculator,
  FileSpreadsheet,
  Workflow,
  Database,
  Wrench,
  TrendingUp,
  FileCode,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { SERVICES } from "@/lib/data";

const SERVICE_ICONS: Record<string, React.ElementType> = {
  "power-bi-dashboards": BarChart3,
  "dax-kpi-reporting": Calculator,
  "excel-to-powerbi": FileSpreadsheet,
  "power-query-etl": Workflow,
  "sql-data-analysis": Database,
  "dashboard-fixes": Wrench,
  "mis-performance-reports": TrendingUp,
  "python-data-analysis": FileCode,
};

export default function Services() {
  return (
    <section id="services" className="py-20 bg-soft border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent/10 text-accent text-xs font-bold tracking-wider uppercase mb-3">
            What I Offer
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-textPrimary tracking-tight">
            Power BI &amp; Data Analytics Services
          </h2>
          <p className="text-slate-600 mt-2 text-base sm:text-lg">
            Practical business intelligence and data solutions tailored for freelance engagements, contract roles, and full-time positions.
          </p>
          <div className="h-1 w-20 bg-accent rounded-full mt-4" />
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES.map((service) => {
            const Icon = SERVICE_ICONS[service.id] || BarChart3;

            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-accent/60 hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-4 group-hover:bg-accent group-hover:text-white transition-colors duration-200">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-textPrimary mb-2 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Key Deliverables */}
                  <div className="space-y-1.5 mb-6 pt-3 border-t border-slate-100">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Deliverables:
                    </p>
                    {service.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-1.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Discuss Project Link */}
                <div className="pt-3 border-t border-slate-100">
                  <Link
                    href={`#contact?reason=${encodeURIComponent(service.defaultSubject)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent-hover group-hover:translate-x-0.5 transition-all"
                  >
                    <span>Discuss a Project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
