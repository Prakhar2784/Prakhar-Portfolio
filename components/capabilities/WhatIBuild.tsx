import * as React from "react";
import { capabilities, CapabilityItem } from "@/data/capabilities";
import { Layers, Server, Cpu, ShieldCheck } from "lucide-react";

const iconMap = {
  layers: Layers,
  server: Server,
  cpu: Cpu,
  "shield-check": ShieldCheck,
};

export function WhatIBuild() {
  return (
    <section id="capabilities" className="py-16 md:py-20 border-t border-[hsl(var(--border))]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[hsl(var(--primary))] font-semibold">
            Capability Matrix
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[hsl(var(--foreground))] mt-1.5">
            What I Build
          </h2>
          <p className="text-sm sm:text-base text-[hsl(var(--muted-foreground))] mt-2">
            Engineering robust web systems and applied AI pipelines designed for reliability, strict data flow, and maintainable software architecture.
          </p>
        </div>

        {/* 4 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((cap: CapabilityItem) => {
            const Icon = iconMap[cap.icon];

            return (
              <div
                key={cap.id}
                className="engineering-card rounded-xl p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-lg bg-[hsl(var(--secondary))] text-[hsl(var(--primary))] border border-[hsl(var(--border))]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[hsl(var(--muted-foreground))] px-2 py-0.5 rounded bg-[hsl(var(--secondary))]">
                      Engineering Domain
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-[hsl(var(--foreground))] tracking-tight">
                    {cap.title}
                  </h3>
                  <p className="text-xs font-mono text-[hsl(var(--primary))] mt-0.5 mb-3">
                    {cap.subtitle}
                  </p>
                  <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed mb-5">
                    {cap.description}
                  </p>

                  {/* Bullet Key Points */}
                  <ul className="space-y-2 mb-6">
                    {cap.keyPoints.map((pt, idx) => (
                      <li
                        key={idx}
                        className="text-xs text-[hsl(var(--muted-foreground))] flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--primary))] mt-1.5 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Tags */}
                <div className="pt-4 border-t border-[hsl(var(--border))] flex flex-wrap gap-1.5">
                  {cap.techTags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-[hsl(var(--secondary))] text-[hsl(var(--muted-foreground))] border border-[hsl(var(--border))]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
