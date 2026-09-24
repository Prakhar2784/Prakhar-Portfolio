import * as React from "react";
import { certifications, CertificationItem } from "@/data/certifications";
import { Award, CheckCircle2, ShieldCheck } from "lucide-react";

export function CertificationsList() {
  return (
    <section id="certifications" className="py-16 md:py-20 border-t border-[hsl(var(--border))]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-[hsl(var(--primary))] font-semibold">
            Verified Credentials
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[hsl(var(--foreground))] mt-1.5">
            Certifications
          </h2>
          <p className="text-sm text-[hsl(var(--muted-foreground))] mt-1.5">
            Rigorous academic and technical certifications completed through premier Indian Institutes of Technology (IIT Madras) and Indian Institute of Science (IISc Bangalore).
          </p>
        </div>

        {/* Credential Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {certifications.map((cert: CertificationItem) => (
            <div
              key={cert.id}
              className="engineering-card rounded-xl p-5 sm:p-6 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-lg bg-[hsl(var(--secondary))] text-[hsl(var(--primary))]">
                    <Award className="w-4 h-4" />
                  </div>
                  {cert.score ? (
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 font-semibold">
                      Score: {cert.score}
                    </span>
                  ) : (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[hsl(var(--secondary))] text-[hsl(var(--muted-foreground))]">
                      Certified
                    </span>
                  )}
                </div>

                <h3 className="font-semibold text-base text-[hsl(var(--foreground))] mb-1">
                  {cert.title}
                </h3>
                <p className="text-xs font-mono text-[hsl(var(--primary))] mb-2">
                  {cert.issuer} — {cert.institution}
                </p>
                <p className="text-xs text-[hsl(var(--muted-foreground))]">
                  {cert.type}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[hsl(var(--border))] flex items-center justify-between text-[11px] font-mono text-[hsl(var(--muted-foreground))]">
                <span className="flex items-center gap-1 text-emerald-500">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verified NPTEL
                </span>
                <span>IIT / IISc</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
