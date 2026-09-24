import * as React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import {
  ArrowLeft,
  Server,
  ShieldCheck,
  Database,
  Cpu,
  CheckCircle2,
  FileCheck,
  Workflow,
  ArrowRight,
  GitFork,
} from "lucide-react";

export const metadata = {
  title: "AssetCare — Case Study | Prakhar Kedia",
  description:
    "Enterprise Asset Management Platform engineering case study: FastAPI, React, MongoDB, JWT authentication, RBAC, and OCR document processing.",
};

export default function AssetCareCaseStudy() {
  const project = projects.find((p) => p.id === "assetcare");
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

        {/* Hero / Header */}
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

          {/* Tech Stack Row & Live Link */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono px-3 py-1 rounded bg-[hsl(var(--secondary))] text-[hsl(var(--foreground))] border border-[hsl(var(--border))]"
                >
                  {t}
                </span>
              ))}
            </div>

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[hsl(var(--primary))] text-white font-medium text-xs hover:bg-[hsl(var(--primary))/90] transition-colors"
              >
                <span>Live Platform: iassetcare.com</span>
                <span className="text-xs">↗</span>
              </a>
            )}
          </div>
        </div>

        {/* Problem Section */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[hsl(var(--foreground))]">
            The Problem
          </h2>
          <div className="engineering-card rounded-xl p-6 text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
            {project.problem}
          </div>
        </section>

        {/* What I Built */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[hsl(var(--foreground))]">
            What I Built
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

        {/* Architecture Diagram */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[hsl(var(--foreground))]">
              System & Pipeline Architecture
            </h2>
            <span className="text-xs font-mono text-[hsl(var(--primary))]">
              FASTAPI • REACT • MONGODB
            </span>
          </div>

          <div className="engineering-card rounded-xl p-6 sm:p-8 space-y-8">
            {/* Core Request Flow Diagram */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-[hsl(var(--foreground))] font-semibold mb-4 flex items-center gap-2">
                <Workflow className="w-4 h-4 text-[hsl(var(--primary))]" />
                Primary Application Flow
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-2 text-center text-xs font-mono">
                <div className="p-3 rounded bg-[hsl(var(--secondary))] border border-[hsl(var(--border))]">
                  <span className="text-[10px] text-[hsl(var(--muted-foreground))] block">Client</span>
                  <span className="font-semibold text-[hsl(var(--foreground))]">React.js UI</span>
                </div>
                <div className="hidden md:flex items-center justify-center text-[hsl(var(--muted-foreground))]">
                  →
                </div>
                <div className="p-3 rounded bg-[hsl(var(--primary))/10] border border-[hsl(var(--primary))/30] text-[hsl(var(--primary))]">
                  <span className="text-[10px] block">API Gateway</span>
                  <span className="font-semibold">FastAPI REST</span>
                </div>
                <div className="hidden md:flex items-center justify-center text-[hsl(var(--muted-foreground))]">
                  →
                </div>
                <div className="p-3 rounded bg-[hsl(var(--secondary))] border border-[hsl(var(--border))]">
                  <span className="text-[10px] text-[hsl(var(--muted-foreground))] block">Auth Guard</span>
                  <span className="font-semibold text-[hsl(var(--foreground))]">JWT & RBAC</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-center text-xs font-mono mt-2 md:w-3/5 md:mx-auto">
                <div className="hidden md:flex items-center justify-center text-[hsl(var(--muted-foreground))]">
                  ↓
                </div>
                <div className="p-3 rounded bg-[hsl(var(--secondary))] border border-[hsl(var(--border))] col-span-2">
                  <span className="text-[10px] text-[hsl(var(--muted-foreground))] block">Persistence</span>
                  <span className="font-semibold text-[hsl(var(--foreground))]">MongoDB Document Collections</span>
                </div>
              </div>
            </div>

            {/* Parallel Document Intelligence Pipeline */}
            <div className="pt-6 border-t border-[hsl(var(--border))]">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[hsl(var(--foreground))] font-semibold mb-4 flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-emerald-500" />
                Parallel AI / OCR Ingestion Pipeline
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-center text-xs font-mono">
                <div className="p-3 rounded bg-[hsl(var(--secondary))] border border-[hsl(var(--border))]">
                  <span className="text-[10px] text-[hsl(var(--muted-foreground))] block">Input</span>
                  <span className="font-semibold text-[hsl(var(--foreground))]">Asset Invoices</span>
                </div>
                <div className="p-3 rounded bg-[hsl(var(--primary))/10] border border-[hsl(var(--primary))/30] text-[hsl(var(--primary))]">
                  <span className="text-[10px] block">Engine</span>
                  <span className="font-semibold">OCR Processing</span>
                </div>
                <div className="p-3 rounded bg-[hsl(var(--secondary))] border border-[hsl(var(--border))]">
                  <span className="text-[10px] text-[hsl(var(--muted-foreground))] block">Output</span>
                  <span className="font-semibold text-[hsl(var(--foreground))]">Parsed Metadata</span>
                </div>
                <div className="p-3 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-500">
                  <span className="text-[10px] block">Action</span>
                  <span className="font-semibold">Draft Asset Created</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Engineering Decisions */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[hsl(var(--foreground))]">
            Key Engineering Decisions
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

        {/* Challenges & Solutions */}
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

        {/* Current Status & CTA */}
        <section className="pt-6 border-t border-[hsl(var(--border))] flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono text-[hsl(var(--muted-foreground))] block">Current Status</span>
            <p className="text-sm font-semibold text-[hsl(var(--foreground))]">{project.currentStatus}</p>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[hsl(var(--muted-foreground))] px-3 py-2 rounded border border-[hsl(var(--border))]">
              <GitFork className="w-3.5 h-3.5" />
              <span>Enterprise Repo (Protected)</span>
            </span>
            <Link
              href="/projects/bitewise"
              className="inline-flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-lg bg-[hsl(var(--foreground))] text-[hsl(var(--background))]"
            >
              <span>Next Project: BiteWise</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
