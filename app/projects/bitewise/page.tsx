import * as React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import {
  ArrowLeft,
  Camera,
  Sliders,
  Cpu,
  Utensils,
  Activity,
  CheckCircle2,
  ArrowRight,
  GitFork,
} from "lucide-react";

export const metadata = {
  title: "BiteWise — Case Study | Prakhar Kedia",
  description:
    "AI-Powered Nutrition Assistant case study: Computer vision image preprocessing, Convolutional Neural Networks (CNNs), and nutritional profile resolution.",
};

export default function BiteWiseCaseStudy() {
  const project = projects.find((p) => p.id === "bitewise");
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

        {/* Problem */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[hsl(var(--foreground))]">
            Problem & Motivation
          </h2>
          <div className="engineering-card rounded-xl p-6 text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
            {project.problem}
          </div>
        </section>

        {/* What I Built */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[hsl(var(--foreground))]">
            Approach & Implementation
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

        {/* Computer Vision Pipeline Diagram */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[hsl(var(--foreground))]">
              Computer Vision Pipeline
            </h2>
            <span className="text-xs font-mono text-[hsl(var(--primary))]">
              OPENCV • TENSORFLOW CNN
            </span>
          </div>

          <div className="engineering-card rounded-xl p-6 sm:p-8 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 text-xs font-mono text-center">
              <div className="p-3.5 rounded bg-[hsl(var(--secondary))] border border-[hsl(var(--border))] flex flex-col items-center">
                <Camera className="w-4 h-4 text-[hsl(var(--primary))] mb-1.5" />
                <span className="text-[10px] text-[hsl(var(--muted-foreground))]">Step 01</span>
                <span className="font-semibold text-[hsl(var(--foreground))]">Food Image</span>
              </div>

              <div className="p-3.5 rounded bg-[hsl(var(--secondary))] border border-[hsl(var(--border))] flex flex-col items-center">
                <Sliders className="w-4 h-4 text-[hsl(var(--primary))] mb-1.5" />
                <span className="text-[10px] text-[hsl(var(--muted-foreground))]">Step 02</span>
                <span className="font-semibold text-[hsl(var(--foreground))]">OpenCV Prep</span>
              </div>

              <div className="p-3.5 rounded bg-[hsl(var(--primary))/15] border border-[hsl(var(--primary))/30] text-[hsl(var(--primary))] flex flex-col items-center">
                <Cpu className="w-4 h-4 mb-1.5" />
                <span className="text-[10px]">Step 03</span>
                <span className="font-semibold">CNN Inference</span>
              </div>

              <div className="p-3.5 rounded bg-[hsl(var(--secondary))] border border-[hsl(var(--border))] flex flex-col items-center">
                <Utensils className="w-4 h-4 text-[hsl(var(--primary))] mb-1.5" />
                <span className="text-[10px] text-[hsl(var(--muted-foreground))]">Step 04</span>
                <span className="font-semibold text-[hsl(var(--foreground))]">Classification</span>
              </div>

              <div className="p-3.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 flex flex-col items-center">
                <Activity className="w-4 h-4 mb-1.5" />
                <span className="text-[10px]">Step 05</span>
                <span className="font-semibold">Nutrition Insight</span>
              </div>
            </div>

            <p className="text-xs text-[hsl(var(--muted-foreground))] pt-2">
              Note: The pipeline provides estimated macro/micronutrient mappings based on predicted classification categories for exploratory and informational purposes.
            </p>
          </div>
        </section>

        {/* Key Decisions */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[hsl(var(--foreground))]">
            Engineering Decisions
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
            Technical Challenges
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
              href="/projects/handwritten-text-detection"
              className="inline-flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-lg bg-[hsl(var(--foreground))] text-[hsl(var(--background))]"
            >
              <span>Next Project: Handwritten Text Detection</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
