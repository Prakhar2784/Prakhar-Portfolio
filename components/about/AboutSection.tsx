import * as React from "react";
import { profile } from "@/data/profile";
import { GraduationCap, Award, MapPin, Calendar, BookOpen, CheckCircle2 } from "lucide-react";

export function AboutSection() {
  const { education, bio } = profile;

  return (
    <section id="about" className="py-16 md:py-24 border-t border-[hsl(var(--border))]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Bio Narrative */}
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-mono uppercase tracking-widest text-[hsl(var(--primary))] font-semibold">
              Background & Focus
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[hsl(var(--foreground))]">
              A little about me
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[hsl(var(--muted-foreground))] leading-relaxed">
              <p className="text-[hsl(var(--foreground))] font-medium">
                {bio.lead}
              </p>
              <p>{bio.body1}</p>
              <p>{bio.body2}</p>
            </div>

            {/* Quick Principles */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card))]">
                <div className="flex items-center gap-2 text-xs font-medium text-[hsl(var(--foreground))] mb-1">
                  <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))]" />
                  <span>Pragmatic Systems</span>
                </div>
                <p className="text-xs text-[hsl(var(--muted-foreground))]">
                  Focused on building functional, observable, and production-tested codebases.
                </p>
              </div>

              <div className="p-3.5 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card))]">
                <div className="flex items-center gap-2 text-xs font-medium text-[hsl(var(--foreground))] mb-1">
                  <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))]" />
                  <span>Applied AI Integration</span>
                </div>
                <p className="text-xs text-[hsl(var(--muted-foreground))]">
                  Connecting neural nets, OCR pipelines, and LLMs directly into actual backend logic.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Formal Education Card */}
          <div className="lg:col-span-5">
            <div className="engineering-card rounded-xl p-6 sm:p-7">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[hsl(var(--border))]">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-[hsl(var(--secondary))] text-[hsl(var(--primary))]">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[hsl(var(--muted-foreground))]">
                      Academic Education
                    </span>
                    <h3 className="text-base font-bold text-[hsl(var(--foreground))]">
                      {education.institution}
                    </h3>
                  </div>
                </div>

                <span className="text-xs font-mono px-2 py-1 rounded bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 font-semibold">
                  {education.gpa}
                </span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div>
                  <span className="text-xs text-[hsl(var(--muted-foreground))] block">Degree & Major:</span>
                  <p className="font-medium text-[hsl(var(--foreground))]">
                    {education.degree}
                  </p>
                  <p className="text-xs font-mono text-[hsl(var(--primary))] mt-0.5">
                    {education.specialization}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-2.5 rounded bg-[hsl(var(--secondary))] border border-[hsl(var(--border))]">
                    <div className="flex items-center gap-1.5 text-[11px] text-[hsl(var(--muted-foreground))] mb-0.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Duration</span>
                    </div>
                    <span className="text-xs font-mono font-medium text-[hsl(var(--foreground))]">
                      {education.period}
                    </span>
                  </div>

                  <div className="p-2.5 rounded bg-[hsl(var(--secondary))] border border-[hsl(var(--border))]">
                    <div className="flex items-center gap-1.5 text-[11px] text-[hsl(var(--muted-foreground))] mb-0.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>Location</span>
                    </div>
                    <span className="text-xs font-mono font-medium text-[hsl(var(--foreground))]">
                      {education.location}
                    </span>
                  </div>
                </div>

                <div className="pt-3 text-xs text-[hsl(var(--muted-foreground))] space-y-1.5">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5 text-[hsl(var(--primary))]" />
                    <span>Focus Areas: Data Structures, Machine Learning, Systems, Algorithms</span>
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
