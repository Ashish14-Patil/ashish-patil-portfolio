"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ExternalLink,
  Github,
  Shield,
  Layers,
  CheckCircle2,
  Lock,
  BarChart2,
  PieChart,
  LineChart,
  Database,
  Eye,
  Sparkles,
} from "lucide-react";
import { PROJECTS, Project } from "@/lib/data";

export default function Projects() {
  const [filter, setFilter] = useState<"All" | "Public" | "Confidential">("All");

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === "Public") return !p.isConfidential;
    if (filter === "Confidential") return p.isConfidential;
    return true;
  });

  return (
    <section id="projects" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent/10 text-accent text-xs font-bold tracking-wider uppercase mb-3">
              Portfolio Work
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-textPrimary tracking-tight">
              Featured Dashboards &amp; Case Studies
            </h2>
            <p className="text-slate-600 mt-2 text-base sm:text-lg">
              Explore public GitHub business intelligence repositories and verified enterprise case studies detailing hands-on data modelling, DAX engineering, and MIS reporting.
            </p>
            <div className="h-1 w-20 bg-accent rounded-full mt-4" />
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
            <button
              onClick={() => setFilter("All")}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                filter === "All"
                  ? "bg-white text-textPrimary shadow-sm"
                  : "text-slate-600 hover:text-textPrimary"
              }`}
            >
              All Projects ({PROJECTS.length})
            </button>
            <button
              onClick={() => setFilter("Public")}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                filter === "Public"
                  ? "bg-white text-textPrimary shadow-sm"
                  : "text-slate-600 hover:text-textPrimary"
              }`}
            >
              Public GitHub ({PROJECTS.filter((p) => !p.isConfidential).length})
            </button>
            <button
              onClick={() => setFilter("Confidential")}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                filter === "Confidential"
                  ? "bg-white text-textPrimary shadow-sm"
                  : "text-slate-600 hover:text-textPrimary"
              }`}
            >
              Confidential Case Studies ({PROJECTS.filter((p) => p.isConfidential).length})
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="gradient-border-card rounded-2xl overflow-hidden border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-card"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Side: Project Details */}
                <div className="lg:col-span-8 flex flex-col justify-between">
                  <div>
                    {/* Badge Header */}
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      {!project.isConfidential ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                          <Github className="w-3.5 h-3.5" />
                          Public GitHub Project
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200">
                          <Lock className="w-3.5 h-3.5 text-amber-600" />
                          Confidential Case Study
                        </span>
                      )}

                      <span className="text-xs text-slate-400 font-medium">
                        Project 0{idx + 1}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-textPrimary mb-3">
                      {project.title}
                    </h3>

                    {/* Overview */}
                    <p className="text-slate-700 text-base leading-relaxed mb-6">
                      {project.overview}
                    </p>

                    {/* Technologies Pills */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Features List */}
                    <div className="mb-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                        Key Features &amp; Architecture
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* My Contribution if available */}
                    {project.myContribution && (
                      <div className="mb-6 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5 flex items-center gap-2">
                          <Layers className="w-3.5 h-3.5 text-accent" />
                          My Actual Contribution
                        </h4>
                        <ul className="space-y-1.5">
                          {project.myContribution.map((item, mIdx) => (
                            <li key={mIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Process Areas Covered if available */}
                    {project.areasCovered && (
                      <div className="mb-6">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                          Process Areas Monitored:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.areasCovered.map((area, aIdx) => (
                            <span
                              key={aIdx}
                              className="px-2.5 py-1 rounded-md text-xs font-medium bg-accent/5 text-accent border border-accent/20"
                            >
                              {area}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Actions & Links */}
                  <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 shadow-sm transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-slate-900"
                      >
                        <Github className="w-4 h-4" />
                        <span>View on GitHub</span>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                      </a>
                    ) : (
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200">
                        <Shield className="w-4 h-4 text-amber-600" />
                        <span>Enterprise Work — Client details and datasets protected</span>
                      </div>
                    )}

                    {project.confidentialNote && (
                      <span className="text-xs text-slate-400 italic">
                        {project.confidentialNote}
                      </span>
                    )}
                  </div>
                </div>

                {/* Right Side: Synthetic Illustrative Architecture / Dashboard Card */}
                <div className="lg:col-span-4 bg-slate-900 text-white rounded-xl p-5 border border-slate-800 shadow-inner flex flex-col justify-between h-full min-h-[300px]">
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800 text-xs">
                      <div className="flex items-center gap-2 text-slate-300 font-mono">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                        <span>Dashboard Architecture</span>
                      </div>
                      <span className="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                        Power BI Model
                      </span>
                    </div>

                    {/* Stats Highlights */}
                    {project.highlightStats && (
                      <div className="space-y-3 mb-4">
                        {project.highlightStats.map((stat, sIdx) => (
                          <div key={sIdx} className="bg-slate-800/80 rounded-lg p-3 border border-slate-700/60">
                            <span className="text-[11px] text-slate-400 uppercase tracking-wider block">
                              {stat.label}
                            </span>
                            <span className="text-sm font-bold text-white mt-0.5 block">
                              {stat.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Illustrative Schematic Graphic */}
                    <div className="p-3 bg-slate-950/60 rounded-lg border border-slate-800/80 space-y-2">
                      <div className="flex items-center justify-between text-[11px] text-slate-400">
                        <span>Report Layout</span>
                        <span className="text-accent">Interactive Visuals</span>
                      </div>
                      <div className="grid grid-cols-3 gap-1.5 h-16 items-end pt-2">
                        <div className="bg-accent/40 hover:bg-accent/60 h-3/5 rounded-sm transition-all" title="CY vs LY Analysis" />
                        <div className="bg-accent h-full rounded-sm shadow-glow" title="MTD / QTD / YTD Reporting" />
                        <div className="bg-accent/60 hover:bg-accent/80 h-4/5 rounded-sm transition-all" title="Segment Variance" />
                      </div>
                      <div className="flex justify-between text-[9px] text-slate-400 font-mono pt-1">
                        <span>DAX Measures</span>
                        <span>Star Schema</span>
                        <span>ETL Clean</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between">
                    <span>Clean analytical UI</span>
                    <span className="text-emerald-400 font-medium">Production Tested</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
