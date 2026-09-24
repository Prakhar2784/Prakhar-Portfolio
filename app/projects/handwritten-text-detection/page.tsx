import * as React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import {
  ArrowLeft,
  FileText,
  Filter,
  Eye,
  Sparkles,
  BoxSelect,
  CheckCircle2,
  ArrowRight,
  GitFork,
} from "lucide-react";

export const metadata = {
  title: "Handwritten Text Detection & Word Segmentation — Case Study | Prakhar Kedia",
  description:
    "Classical computer vision pipeline for handwritten document spatial region extraction and word bounding-box segmentation using scale-space and CCA.",
};

export default function HandwrittenTextDetectionCaseStudy() {
  const project = projects.find((p) => p.id === "handwritten-text-detection");
  if (!project) return notFound();

  return (
    <main className="min-h-screen pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Back Link */}
        <div>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-xs font-mono text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Selected Work</span>
          </Link>
        </div>

        {/* Header */}
        <div className="space-y-4 border-b border-[hsl(var(--border))] pb-8">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[hsl(var(--primary))] uppercase tracking-wider">
            <span>Engineering Case Study</span>
            <span>•</span>
            <span>{project.category}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[hsl(var(--foreground))]">
            {project.title}
          </h1>
          <p className="text-lg sm:text-xl text-[hsl(var(--muted-foreground))] font-medium">
            {project.subtitle}
          </p>
          <p className="text-base text-[hsl(var(--muted-foreground))] leading-relaxed max-w-2xl">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs font-mono px-3 py-1 rounded bg-[hsl(var(--secondary))] text-[hsl(var(--foreground))] border border-[hsl(var(--border))]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Technical Challenge */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[hsl(var(--foreground))]">
            The Computer Vision Challenge
          </h2>
          <div className="engineering-card rounded-xl p-6 text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
            {project.problem}
          </div>
        </section>

        {/* What I Built */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[hsl(var(--foreground))]">
            Algorithmic Implementation
          </h2>
          <div className="grid grid-cols-1 gap-3">
            {project.whatIBuilt.map((item, idx) => (
              <div
                key={idx}
                className="engineering-card rounded-lg p-4 flex items-start gap-3 text-sm text-[hsl(var(--muted-foreground))]"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Visual Pipeline Stages */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[hsl(var(--foreground))]">
              Multi-Stage Segmentation Pipeline
            </h2>
            <span className="text-xs font-mono text-[hsl(var(--primary))]">
              DETERMINISTIC CV FUNDAMENTALS
            </span>
          </div>

          <div className="engineering-card rounded-xl p-6 sm:p-8 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs font-mono">
              <div className="p-3.5 rounded bg-[hsl(var(--secondary))] border border-[hsl(var(--border))] flex items-start gap-3">
                <FileText className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5" />
                <div>
                  <span className="text-[10px] text-[hsl(var(--muted-foreground))] block">Stage 1</span>
                  <span className="font-semibold text-[hsl(var(--foreground))]">Input Document</span>
                  <p className="text-[11px] text-[hsl(var(--muted-foreground))] mt-1">Raw scanned image matrix</p>
                </div>
              </div>

              <div className="p-3.5 rounded bg-[hsl(var(--secondary))] border border-[hsl(var(--border))] flex items-start gap-3">
                <Filter className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5" />
                <div>
                  <span className="text-[10px] text-[hsl(var(--muted-foreground))] block">Stage 2</span>
                  <span className="font-semibold text-[hsl(var(--foreground))]">Gaussian Filtering</span>
                  <p className="text-[11px] text-[hsl(var(--muted-foreground))] mt-1">Anisotropic horizontal kernel</p>
                </div>
              </div>

              <div className="p-3.5 rounded bg-[hsl(var(--secondary))] border border-[hsl(var(--border))] flex items-start gap-3">
                <Eye className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5" />
                <div>
                  <span className="text-[10px] text-[hsl(var(--muted-foreground))] block">Stage 3</span>
                  <span className="font-semibold text-[hsl(var(--foreground))]">Scale-Space Processing</span>
                  <p className="text-[11px] text-[hsl(var(--muted-foreground))] mt-1">Multi-resolution evaluation</p>
                </div>
              </div>

              <div className="p-3.5 rounded bg-[hsl(var(--secondary))] border border-[hsl(var(--border))] flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5" />
                <div>
                  <span className="text-[10px] text-[hsl(var(--muted-foreground))] block">Stage 4</span>
                  <span className="font-semibold text-[hsl(var(--foreground))]">Connected Components</span>
                  <p className="text-[11px] text-[hsl(var(--muted-foreground))] mt-1">Pixel cluster labelling (CCA)</p>
                </div>
              </div>

              <div className="p-3.5 rounded bg-[hsl(var(--secondary))] border border-[hsl(var(--border))] flex items-start gap-3">
                <BoxSelect className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5" />
                <div>
                  <span className="text-[10px] text-[hsl(var(--muted-foreground))] block">Stage 5</span>
                  <span className="font-semibold text-[hsl(var(--foreground))]">Text Region Detection</span>
                  <p className="text-[11px] text-[hsl(var(--muted-foreground))] mt-1">Line & paragraph grouping</p>
                </div>
              </div>

              <div className="p-3.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 flex items-start gap-3">
                <BoxSelect className="w-4 h-4 mt-0.5" />
                <div>
                  <span className="text-[10px] block">Stage 6</span>
                  <span className="font-semibold">Word Segmentation</span>
                  <p className="text-[11px] mt-1">Discrete ROI bounding boxes</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mathematical and Engineering Decisions */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[hsl(var(--foreground))]">
            Core Technical Decisions
          </h2>
          <div className="space-y-4">
            {project.keyDecisions.map((decision, idx) => (
              <div
                key={idx}
                className="engineering-card rounded-xl p-5 sm:p-6 space-y-2"
              >
                <h3 className="text-base font-bold text-[hsl(var(--foreground))]">
                  {decision.title}
                </h3>
                <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                  {decision.explanation}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Challenges */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[hsl(var(--foreground))]">
            Spatial Challenges & Edge Cases
          </h2>
          <div className="space-y-2">
            {project.challenges.map((challenge, idx) => (
              <div
                key={idx}
                className="engineering-card rounded-lg p-4 text-xs sm:text-sm text-[hsl(var(--muted-foreground))] flex items-start gap-3"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--primary))] mt-2 shrink-0" />
                <span className="leading-relaxed">{challenge}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Footer Navigation */}
        <section className="pt-6 border-t border-[hsl(var(--border))] flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono text-[hsl(var(--muted-foreground))] block">Current Status</span>
            <p className="text-sm font-semibold text-[hsl(var(--foreground))]">{project.currentStatus}</p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/projects/assetcare"
              className="inline-flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-lg bg-[hsl(var(--foreground))] text-[hsl(var(--background))]"
            >
              <span>Back to AssetCare</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
