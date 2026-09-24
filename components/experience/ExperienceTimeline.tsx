import * as React from "react";
import { experiences } from "@/data/experience";
import {
  Building2,
  MapPin,
  Calendar,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Sparkles,
} from "lucide-react";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-16 md:py-24 border-t border-[hsl(var(--border))]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[hsl(var(--primary))] font-semibold">
            Track Record
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[hsl(var(--foreground))] mt-1.5">
            Experience
          </h2>
          <p className="text-sm sm:text-base text-[hsl(var(--muted-foreground))] mt-2">
            Professional software engineering work delivering enterprise platforms, backend APIs, and intelligent data workflows.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-[hsl(var(--border))] ml-3 sm:ml-4 space-y-12 pl-6 sm:pl-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline marker node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-[hsl(var(--primary))] bg-[hsl(var(--background))]" />

              <div className="engineering-card rounded-xl p-6 sm:p-8 space-y-6">
                {/* Header Information */}
                <div className="flex flex-wrap items-start justify-between gap-3 border-b border-[hsl(var(--border))] pb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg sm:text-xl font-bold text-[hsl(var(--foreground))]">
                        {exp.role}
                      </h3>
                      {exp.isCurrent && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                          Current Role
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs font-mono text-[hsl(var(--muted-foreground))] mt-1">
                      <span className="flex items-center gap-1 text-[hsl(var(--foreground))] font-medium">
                        <Building2 className="w-3.5 h-3.5 text-[hsl(var(--primary))]" />
                        {exp.company}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-mono text-[hsl(var(--muted-foreground))] px-2.5 py-1 rounded bg-[hsl(var(--secondary))] border border-[hsl(var(--border))]">
                    {exp.type}
                  </span>
                </div>

                {/* Role Narrative */}
                <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                  {exp.description}
                </p>

                {/* Major Platforms & Projects Built */}
                {exp.projectsBuilt && exp.projectsBuilt.length > 0 && (
                  <div className="space-y-4">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[hsl(var(--foreground))] font-semibold flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[hsl(var(--primary))]" />
                      Key Platforms & Deliverables Built
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {exp.projectsBuilt.map((p, pIdx) => (
                        <div
                          key={pIdx}
                          className="p-4 rounded-lg bg-[hsl(var(--secondary))/50] border border-[hsl(var(--border))] flex flex-col justify-between space-y-3"
                        >
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-1.5">
                              <h5 className="font-semibold text-sm text-[hsl(var(--foreground))]">
                                {p.title}
                              </h5>
                              {p.url && (
                                <a
                                  href={p.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-[11px] font-mono text-[hsl(var(--primary))] hover:underline shrink-0"
                                >
                                  <span>{p.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}</span>
                                  <ExternalLink className="w-3 h-3" />
                                </a>
                              )}
                            </div>
                            <p className="text-xs text-[hsl(var(--muted-foreground))] mb-3 leading-relaxed">
                              {p.description}
                            </p>
                            <ul className="space-y-1.5">
                              {p.points.map((pt, ptIdx) => (
                                <li
                                  key={ptIdx}
                                  className="text-xs text-[hsl(var(--muted-foreground))] flex items-start gap-2"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--primary))] mt-1.5 shrink-0" />
                                  <span>{pt}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Visual Technical Stack Row */}
                <div className="pt-4 border-t border-[hsl(var(--border))]">
                  <span className="text-[11px] font-mono text-[hsl(var(--muted-foreground))] block mb-2">
                    Applied Architecture & Stack Flow:
                  </span>
                  <div className="flex flex-wrap items-center gap-2">
                    {exp.techStack.map((tech, idx) => (
                      <React.Fragment key={tech}>
                        <span className="text-xs font-mono px-2.5 py-1 rounded bg-[hsl(var(--secondary))] text-[hsl(var(--foreground))] border border-[hsl(var(--border))]">
                          {tech}
                        </span>
                        {idx < exp.techStack.length - 1 && (
                          <ArrowRight className="w-3 h-3 text-[hsl(var(--muted-foreground))/40] shrink-0" />
                        )}
                      </React.Fragment>
                    ))}
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
