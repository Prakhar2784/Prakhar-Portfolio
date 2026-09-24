import * as React from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function SelectedWork() {
  return (
    <section id="work" className="py-16 md:py-24 border-t border-[hsl(var(--border))]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[hsl(var(--primary))] font-semibold">
            Featured Engineering
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[hsl(var(--foreground))] mt-1.5">
            Selected Work
          </h2>
          <p className="text-sm sm:text-base text-[hsl(var(--muted-foreground))] mt-2">
            Systems, applications and AI projects I've built. Each project represents production-grade architecture, verified logic, and real technical decisions.
          </p>
        </div>

        {/* Project Cards Stack / Grid */}
        <div className="space-y-10">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
