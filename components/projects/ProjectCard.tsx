import * as React from "react";
import Link from "next/link";
import { ProjectItem } from "@/data/projects";
import { InteractiveAssetCarePreview } from "./InteractiveAssetCarePreview";
import { InteractiveBiteWisePreview } from "./InteractiveBiteWisePreview";
import { InteractiveOcrPreview } from "./InteractiveOcrPreview";
import { ArrowRight, ExternalLink, GitFork } from "lucide-react";

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const renderVisual = () => {
    switch (project.id) {
      case "assetcare":
        return <InteractiveAssetCarePreview />;
      case "bitewise":
        return <InteractiveBiteWisePreview />;
      case "handwritten-text-detection":
        return <InteractiveOcrPreview />;
      default:
        return null;
    }
  };

  return (
    <article className="engineering-card rounded-xl p-6 sm:p-8 flex flex-col justify-between">
      <div>
        {/* Top meta row */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono font-bold text-[hsl(var(--primary))] uppercase">
              0{index + 1}
            </span>
            <span className="text-[hsl(var(--border))]">•</span>
            <span className="text-xs font-mono uppercase tracking-wider text-[hsl(var(--muted-foreground))]">
              {project.category}
            </span>
          </div>

          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[hsl(var(--secondary))] text-[hsl(var(--muted-foreground))] border border-[hsl(var(--border))]">
            Production Verified
          </span>
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[hsl(var(--foreground))]">
          {project.title}
        </h3>
        <p className="text-sm font-medium text-[hsl(var(--primary))] mt-0.5 mb-3">
          {project.subtitle}
        </p>

        {/* Description */}
        <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Interactive Architecture / Visual */}
        <div className="mb-6">{renderVisual()}</div>

        {/* Highlights List */}
        <ul className="space-y-2 mb-6">
          {project.highlights.slice(0, 3).map((h, i) => (
            <li
              key={i}
              className="text-xs text-[hsl(var(--muted-foreground))] flex items-start gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--primary))] mt-1.5 shrink-0" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer: Tech Stack & Actions */}
      <div>
        {/* Tech Stack */}
        <div className="pt-4 border-t border-[hsl(var(--border))] flex flex-wrap gap-1.5 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[11px] font-mono px-2.5 py-1 rounded bg-[hsl(var(--secondary))] text-[hsl(var(--foreground))] border border-[hsl(var(--border))]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2.5">
            <Link
              href={project.caseStudyUrl}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium px-4 py-2 rounded-lg bg-[hsl(var(--foreground))] text-[hsl(var(--background))] hover:opacity-90 transition-opacity"
            >
              <span>View Case Study</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium px-3.5 py-2 rounded-lg border border-[hsl(var(--primary))/40] bg-[hsl(var(--primary))/10] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))/20] transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Platform</span>
              </a>
            )}
          </div>

          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] px-3 py-2 rounded border border-[hsl(var(--border))] hover:border-[hsl(var(--foreground))/20] transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>View Code</span>
            </a>
          ) : (
            <span
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[hsl(var(--muted-foreground))/60] px-3 py-2 rounded border border-[hsl(var(--border))] cursor-not-allowed"
              title="Enterprise code repository is private/gated"
            >
              <GitFork className="w-3.5 h-3.5" />
              <span>Repository (Private / Enterprise)</span>
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
