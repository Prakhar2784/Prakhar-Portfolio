import * as React from "react";
import Link from "next/link";
import { profile } from "@/data/profile";
import { SystemVisual } from "./SystemVisual";
import {
  ArrowRight,
  Download,
  MapPin,
  Mail,
  CheckCircle2,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { EmailPopover } from "@/components/ui/EmailPopover";

export function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none -z-10" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-[hsl(var(--primary))/8] blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Technical Narrative & Positioning */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Eyebrow & Status */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--card))] text-[11px] font-mono tracking-wider text-[hsl(var(--muted-foreground))] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 -ml-3" />
                {profile.eyebrow}
              </span>

              <span className="inline-flex items-center gap-1.5 text-xs text-[hsl(var(--muted-foreground))] font-mono">
                <MapPin className="w-3.5 h-3.5 text-[hsl(var(--primary))]" />
                {profile.location}
              </span>
            </div>

            {/* Large Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-[hsl(var(--foreground))] leading-[1.12]">
              {profile.headline}
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[hsl(var(--muted-foreground))] max-w-xl leading-relaxed">
              {profile.subheadline}
            </p>

            {/* Value proposition badges */}
            <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs text-[hsl(var(--muted-foreground))]">
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded border border-[hsl(var(--border))] bg-[hsl(var(--card))]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[hsl(var(--primary))]" />
                Full-Stack Systems
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded border border-[hsl(var(--border))] bg-[hsl(var(--card))]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[hsl(var(--primary))]" />
                FastAPI / Python Backends
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded border border-[hsl(var(--border))] bg-[hsl(var(--card))]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[hsl(var(--primary))]" />
                Applied AI & OCR Workflows
              </span>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="#work"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[hsl(var(--foreground))] text-[hsl(var(--background))] font-medium text-sm hover:opacity-90 transition-opacity shadow-sm"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={profile.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card))] text-[hsl(var(--foreground))] font-medium text-sm hover:border-[hsl(var(--primary))] transition-colors"
              >
                <Download className="w-4 h-4 text-[hsl(var(--muted-foreground))]" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Subtle Social Links */}
            <div className="flex items-center gap-4 pt-3 text-xs font-mono text-[hsl(var(--muted-foreground))]">
              <span className="text-[hsl(var(--muted-foreground))/60]">Connect:</span>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[hsl(var(--foreground))] transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <span className="text-[hsl(var(--border))]">•</span>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[hsl(var(--foreground))] transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <span className="text-[hsl(var(--border))]">•</span>
              <EmailPopover variant="hero" />
            </div>
          </div>

          {/* Right Column: Hero Architecture Visual */}
          <div className="lg:col-span-5">
            <SystemVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
