import * as React from "react";
import { profile } from "@/data/profile";
import { FileText, Download, ExternalLink, CheckCircle2 } from "lucide-react";

export function ResumeCTA() {
  return (
    <section id="resume" className="py-16 md:py-20 border-t border-[hsl(var(--border))]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="engineering-card rounded-2xl p-8 sm:p-10 border border-[hsl(var(--border))] bg-gradient-to-b from-[hsl(var(--card))] to-[hsl(var(--secondary))/30] relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[hsl(var(--primary))/5] blur-3xl pointer-events-none rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[hsl(var(--primary))] font-semibold">
                Curriculum Vitae
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[hsl(var(--foreground))]">
                Want the complete picture?
              </h2>
              <p className="text-sm sm:text-base text-[hsl(var(--muted-foreground))] max-w-xl">
                View my experience, projects, verified coursework and technical background formatted in a clean, one-page engineering resume.
              </p>

              <div className="flex flex-wrap gap-4 pt-2 text-xs font-mono text-[hsl(var(--muted-foreground))]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  Updated 2026 Edition
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  ATS-Friendly Standard
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href={profile.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[hsl(var(--foreground))] text-[hsl(var(--background))] font-medium text-sm hover:opacity-90 transition-opacity shadow-sm"
              >
                <ExternalLink className="w-4 h-4" />
                <span>View Resume</span>
              </a>

              <a
                href={profile.resumePdf}
                download="Prakhar_Kedia_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card))] text-[hsl(var(--foreground))] font-medium text-sm hover:border-[hsl(var(--primary))] transition-colors"
              >
                <Download className="w-4 h-4 text-[hsl(var(--muted-foreground))]" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
