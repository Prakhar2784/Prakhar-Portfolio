"use client";

import * as React from "react";
import Link from "next/link";
import { profile } from "@/data/profile";
import { ArrowUp } from "lucide-react";
import { EmailPopover } from "@/components/ui/EmailPopover";

export function Footer() {
  return (
    <footer className="border-t border-[hsl(var(--border))] py-12 bg-[hsl(var(--card))]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand and Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-xs text-[hsl(var(--muted-foreground))]">
            <span className="font-mono font-bold text-sm text-[hsl(var(--foreground))]">
              PK.
            </span>
            <span className="hidden sm:inline text-[hsl(var(--border))]">•</span>
            <span>© 2026 Prakhar Kedia</span>
            <span className="hidden sm:inline text-[hsl(var(--border))]">•</span>
            <span className="font-mono text-[11px]">Built with Next.js</span>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-[hsl(var(--muted-foreground))]">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[hsl(var(--foreground))] transition-colors"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[hsl(var(--foreground))] transition-colors"
            >
              LinkedIn
            </a>
            
            {/* Interactive Email Popover with direct address display & copy */}
            <EmailPopover variant="footer" />

            <a
              href={profile.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[hsl(var(--foreground))] transition-colors"
            >
              Resume
            </a>

            <Link
              href="#top"
              className="p-1.5 rounded border border-[hsl(var(--border))] hover:border-[hsl(var(--foreground))/20] hover:text-[hsl(var(--foreground))] transition-colors ml-2"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
