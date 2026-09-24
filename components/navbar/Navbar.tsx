"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { CommandPalette } from "@/components/command-palette/CommandPalette";
import { Menu, X, FileText, Command } from "lucide-react";
import { profile } from "@/data/profile";

const navLinks = [
  { name: "Work", href: "/#work" },
  { name: "Experience", href: "/#experience" },
  { name: "Skills", href: "/#skills" },
  { name: "About", href: "/#about" },
  { name: "Contact", href: "/#contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [cmdOpen, setCmdOpen] = React.useState(false);
  const [isMac, setIsMac] = React.useState(false);

  React.useEffect(() => {
    setIsMac(navigator.userAgent.toUpperCase().indexOf("MAC") >= 0);

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change or hash navigation
  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled
            ? "bg-[hsl(var(--background))/80] backdrop-blur-md border-b border-[hsl(var(--border))] py-2.5 shadow-sm"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-mono font-bold tracking-tight text-lg text-[hsl(var(--foreground))] group"
            aria-label="Prakhar Kedia homepage"
          >
            <span className="inline-flex items-center justify-center w-7 h-7 rounded bg-[hsl(var(--card))] border border-[hsl(var(--border))] text-sm group-hover:border-[hsl(var(--primary))] transition-colors">
              PK
            </span>
            <span className="hidden sm:inline-block text-xs font-mono font-normal text-[hsl(var(--muted-foreground))]">
              / engineer
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[hsl(var(--muted-foreground))]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-[hsl(var(--foreground))] transition-colors relative py-1"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Action Icons & Resume */}
          <div className="flex items-center gap-2.5">
            {/* Command Palette Trigger */}
            <button
              id="cmd-palette-trigger"
              onClick={() => setCmdOpen(true)}
              className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--card))] text-xs text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] hover:border-[hsl(var(--foreground))/20] transition-colors"
              aria-label="Open command palette"
              title="Open command palette (Ctrl+K or ⌘K)"
            >
              <Command className="h-3.5 w-3.5" />
              <span className="font-mono text-[10px] tracking-wider uppercase">
                {isMac ? "⌘K" : "Ctrl+K"}
              </span>
            </button>

            {/* Resume CTA */}
            <a
              href={profile.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono font-medium px-3 py-1.5 rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--card))] text-[hsl(var(--foreground))] hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))] transition-colors"
            >
              <FileText className="h-3.5 w-3.5" />
              <span>Resume</span>
            </a>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex h-8 w-8 items-center justify-center rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--card))] text-[hsl(var(--foreground))]"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-[hsl(var(--border))] bg-[hsl(var(--card))] px-4 pt-3 pb-5 shadow-lg animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-2 py-1.5 text-sm font-medium text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--secondary))] rounded-md transition-colors"
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-2 border-t border-[hsl(var(--border))] flex items-center justify-between gap-2">
                <a
                  href={profile.resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 text-xs font-mono font-medium px-3 py-2 rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--secondary))] text-[hsl(var(--foreground))]"
                >
                  <FileText className="h-3.5 w-3.5" />
                  <span>Resume (PDF)</span>
                </a>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setCmdOpen(true);
                  }}
                  className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--secondary))] text-xs font-mono text-[hsl(var(--muted-foreground))]"
                  aria-label="Search"
                >
                  <Command className="h-3.5 w-3.5" />
                  <span>Cmd</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Command Palette Modal */}
      <CommandPalette isOpen={cmdOpen} onClose={() => setCmdOpen(false)} />
    </>
  );
}
