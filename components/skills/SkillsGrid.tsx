import * as React from "react";
import { skillCategories, SkillCategory } from "@/data/skills";
import { Terminal, Database, Code2, Cpu, Wrench } from "lucide-react";

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  languages: Terminal,
  "core-cs": Code2,
  development: Wrench,
  "databases-tools": Database,
  "ai-ml": Cpu,
};

export function SkillsGrid() {
  return (
    <section id="skills" className="py-16 md:py-24 border-t border-[hsl(var(--border))]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[hsl(var(--primary))] font-semibold">
            Technical Stack
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[hsl(var(--foreground))] mt-1.5">
            Skills & Capabilities
          </h2>
          <p className="text-sm sm:text-base text-[hsl(var(--muted-foreground))] mt-2">
            Categorized technical capabilities honed across production backends, modern frontend systems, and applied computer vision.
          </p>
        </div>

        {/* Categorized Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category: SkillCategory) => {
            const Icon = categoryIcons[category.id] || Terminal;

            return (
              <div
                key={category.id}
                className="engineering-card rounded-xl p-6 flex flex-col justify-between"
              >
                <div>
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-[hsl(var(--secondary))] text-[hsl(var(--primary))] border border-[hsl(var(--border))]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm sm:text-base text-[hsl(var(--foreground))]">
                        {category.title}
                      </h3>
                      <p className="text-[11px] text-[hsl(var(--muted-foreground))] line-clamp-1">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Tag Cloud / Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-3">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`text-xs font-mono px-2.5 py-1 rounded border transition-colors ${
                          skill.highlight
                            ? "bg-[hsl(var(--secondary))] text-[hsl(var(--foreground))] border-[hsl(var(--border))] hover:border-[hsl(var(--primary))/50]"
                            : "bg-[hsl(var(--card))] text-[hsl(var(--muted-foreground))] border-[hsl(var(--border))] hover:text-[hsl(var(--foreground))]"
                        }`}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-[hsl(var(--border))] flex items-center justify-between text-[10px] font-mono text-[hsl(var(--muted-foreground))]">
                  <span>{category.skills.length} Capabilities</span>
                  <span className="text-[hsl(var(--primary))]">Production Ready</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
