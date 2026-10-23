"use client";

import React from "react";
import {
  BarChart3,
  Database,
  FileCheck2,
  TrendingUp,
  Workflow,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";
import { PERSONAL_INFO } from "@/lib/data";

const PILLARS = [
  {
    icon: BarChart3,
    title: "Interactive Dashboards & KPIs",
    desc: "Designing clean, executive-level Power BI dashboards with dynamic slicers, drill-throughs, and time-intelligence (MTD/QTD/YTD) calculations.",
  },
  {
    icon: Database,
    title: "SQL Analysis & Data Modelling",
    desc: "Writing multi-table joins, subqueries, and aggregations to transform raw relational data into clean star-schema analytical models.",
  },
  {
    icon: Workflow,
    title: "ETL & Power Query Transformations",
    desc: "Cleaning messy datasets, unpivoting tables, handling null values, and building automated data refresh pipelines.",
  },
  {
    icon: ShieldCheck,
    title: "Data Accuracy & Operational Integrity",
    desc: "Hands-on experience in timesheet operations, exception reporting, and reconciliation to ensure reliable numbers for payroll and business reporting.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-soft border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent/10 text-accent text-xs font-bold tracking-wider uppercase mb-3">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-textPrimary tracking-tight">
            Transforming Data into Reliable Business Intelligence
          </h2>
          <div className="h-1 w-20 bg-accent rounded-full mt-4" />
        </div>

        {/* Narrative & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Narrative Card */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-card">
            <h3 className="text-xl font-bold text-textPrimary mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-accent" />
              <span>Professional Summary</span>
            </h3>

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-6 font-normal">
              {PERSONAL_INFO.about}
            </p>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Core Competencies
              </h4>
              <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-700">
                <span className="px-2.5 py-1 bg-white rounded-md border border-slate-200">Power BI</span>
                <span className="px-2.5 py-1 bg-white rounded-md border border-slate-200">DAX Calculations</span>
                <span className="px-2.5 py-1 bg-white rounded-md border border-slate-200">Power Query ETL</span>
                <span className="px-2.5 py-1 bg-white rounded-md border border-slate-200">SQL / MySQL</span>
                <span className="px-2.5 py-1 bg-white rounded-md border border-slate-200">Advanced Excel</span>
                <span className="px-2.5 py-1 bg-white rounded-md border border-slate-200">Python (Pandas, NumPy)</span>
                <span className="px-2.5 py-1 bg-white rounded-md border border-slate-200">Data Modelling</span>
                <span className="px-2.5 py-1 bg-white rounded-md border border-slate-200">MIS Reporting</span>
                <span className="px-2.5 py-1 bg-white rounded-md border border-slate-200">Exception Reporting</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-100 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-textPrimary">Current Focus:</span>
                <span>Power BI Projects &amp; Data Analytics</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-textPrimary">Based in:</span>
                <span>Indore, India (Open to Relocate)</span>
              </div>
            </div>
          </div>

          {/* Value Pillars List */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:border-accent/50 hover:shadow-md transition-all duration-200 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-colors duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-textPrimary group-hover:text-accent transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-sm text-slate-600 mt-1 leading-snug">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
