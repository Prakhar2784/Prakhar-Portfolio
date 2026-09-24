"use client";

import * as React from "react";
import { profile } from "@/data/profile";
import { Mail, Check, Copy, ExternalLink, X } from "lucide-react";

interface EmailPopoverProps {
  className?: string;
  variant?: "footer" | "hero" | "plain";
}

export function EmailPopover({ className = "", variant = "footer" }: EmailPopoverProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  const popoverRef = React.useRef<HTMLDivElement>(null);

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    profile.email
  )}&su=Hello%20Prakhar`;

  const handleCopy = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative inline-block" ref={popoverRef}>
      <button
        type="button"
        onClick={() => {
          setIsOpen(!isOpen);
          handleCopy(); // Auto copy on click for convenience!
        }}
        className={`inline-flex items-center gap-1.5 transition-colors cursor-pointer ${
          variant === "hero"
            ? "hover:text-[hsl(var(--foreground))]"
            : "hover:text-[hsl(var(--foreground))]"
        } ${className}`}
        aria-label={`Email Prakhar Kedia (${profile.email})`}
        title={`Click to show and copy email: ${profile.email}`}
      >
        {variant === "hero" && <Mail className="w-3.5 h-3.5" />}
        <span>Email</span>
      </button>

      {/* Floating Popover showing the email address and actions */}
      {isOpen && (
        <div className="absolute bottom-full mb-2.5 right-0 sm:left-1/2 sm:-translate-x-1/2 z-50 w-72 p-3 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] shadow-2xl animate-in fade-in zoom-in-95 duration-150">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-[hsl(var(--border))]">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[hsl(var(--muted-foreground))]">
              Direct Email Address
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]"
              aria-label="Close"
            >
              <X className="w-3 h-3" />
            </button>
          </div>

          {/* Email Address Display Box with Copy Button */}
          <div
            onClick={handleCopy}
            className="group flex items-center justify-between p-2 rounded-lg bg-[hsl(var(--secondary))] border border-[hsl(var(--border))] cursor-pointer hover:border-[hsl(var(--primary))/40] transition-colors mb-2"
          >
            <span className="font-mono text-xs font-semibold text-[hsl(var(--foreground))] select-all truncate">
              {profile.email}
            </span>
            <span className="shrink-0 text-xs text-[hsl(var(--muted-foreground))] group-hover:text-[hsl(var(--foreground))] ml-2">
              {copied ? (
                <span className="flex items-center gap-1 text-emerald-500 font-medium text-[10px]">
                  <Check className="w-3.5 h-3.5" />
                  Copied!
                </span>
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </span>
          </div>

          {/* Action Links */}
          <div className="space-y-1 text-[11px] font-mono">
            <a
              href={gmailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-2 py-1.5 rounded hover:bg-[hsl(var(--secondary))] text-[hsl(var(--foreground))] transition-colors"
            >
              <span className="flex items-center gap-1.5">
                <ExternalLink className="w-3 h-3 text-[hsl(var(--primary))]" />
                Open in Gmail Web
              </span>
              <span className="text-[9px] text-[hsl(var(--muted-foreground))]">webmail ↗</span>
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="flex items-center justify-between px-2 py-1.5 rounded hover:bg-[hsl(var(--secondary))] text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
            >
              <span className="flex items-center gap-1.5">
                <Mail className="w-3 h-3" />
                Launch Mail App
              </span>
              <span className="text-[9px]">app ↗</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
