"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import {
  Search,
  Code2,
  Briefcase,
  Layers,
  User,
  Mail,
  FileText,
  ExternalLink,
  Sun,
  Moon,
  Home,
  X,
  Sparkles,
} from "lucide-react";
import { profile } from "@/data/profile";

interface CommandItem {
  id: string;
  label: string;
  category: "Navigation" | "Projects" | "Actions" | "External";
  icon: React.ReactNode;
  action: () => void;
  shortcut?: string;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const router = useRouter();
  const { resolvedTheme, setTheme } = useTheme();
  const [query, setQuery] = React.useState("");
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const navigateTo = React.useCallback(
    (path: string) => {
      onClose();
      if (path.startsWith("#")) {
        const element = document.querySelector(path);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else {
          router.push(`/${path}`);
        }
      } else {
        router.push(path);
      }
    },
    [router, onClose]
  );

  const commands: CommandItem[] = React.useMemo(
    () => [
      {
        id: "home",
        label: "Go to Home",
        category: "Navigation",
        icon: <Home className="h-4 w-4" />,
        action: () => navigateTo("/"),
      },
      {
        id: "work",
        label: "Go to Selected Work",
        category: "Navigation",
        icon: <Code2 className="h-4 w-4" />,
        action: () => navigateTo("#work"),
      },
      {
        id: "experience",
        label: "Go to Experience",
        category: "Navigation",
        icon: <Briefcase className="h-4 w-4" />,
        action: () => navigateTo("#experience"),
      },
      {
        id: "skills",
        label: "Go to Skills & Capabilities",
        category: "Navigation",
        icon: <Layers className="h-4 w-4" />,
        action: () => navigateTo("#skills"),
      },
      {
        id: "about",
        label: "Go to About",
        category: "Navigation",
        icon: <User className="h-4 w-4" />,
        action: () => navigateTo("#about"),
      },
      {
        id: "contact",
        label: "Go to Contact",
        category: "Navigation",
        icon: <Mail className="h-4 w-4" />,
        action: () => navigateTo("#contact"),
      },
      {
        id: "project-assetcare",
        label: "Case Study: AssetCare (Enterprise Asset Platform)",
        category: "Projects",
        icon: <Sparkles className="h-4 w-4" />,
        action: () => navigateTo("/projects/assetcare"),
      },
      {
        id: "project-bitewise",
        label: "Case Study: BiteWise (AI Nutrition Assistant)",
        category: "Projects",
        icon: <Sparkles className="h-4 w-4" />,
        action: () => navigateTo("/projects/bitewise"),
      },
      {
        id: "project-ocr",
        label: "Case Study: Handwritten Text Detection & Word Segmentation",
        category: "Projects",
        icon: <Sparkles className="h-4 w-4" />,
        action: () => navigateTo("/projects/handwritten-text-detection"),
      },
      {
        id: "resume-view",
        label: "View / Download Resume PDF",
        category: "Actions",
        icon: <FileText className="h-4 w-4" />,
        action: () => {
          onClose();
          window.open(profile.resumePdf, "_blank");
        },
      },
      {
        id: "theme-toggle",
        label: `Switch to ${resolvedTheme === "dark" ? "Light" : "Dark"} Mode`,
        category: "Actions",
        icon: resolvedTheme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />,
        action: () => {
          setTheme(resolvedTheme === "dark" ? "light" : "dark");
          onClose();
        },
      },
      {
        id: "email",
        label: `Send Email to ${profile.email}`,
        category: "External",
        icon: <Mail className="h-4 w-4" />,
        action: () => {
          onClose();
          window.location.href = `mailto:${profile.email}`;
        },
      },
      {
        id: "github",
        label: "Open GitHub Profile",
        category: "External",
        icon: <ExternalLink className="h-4 w-4" />,
        action: () => {
          onClose();
          window.open(profile.github, "_blank");
        },
      },
      {
        id: "linkedin",
        label: "Open LinkedIn Profile",
        category: "External",
        icon: <ExternalLink className="h-4 w-4" />,
        action: () => {
          onClose();
          window.open(profile.linkedin, "_blank");
        },
      },
    ],
    [navigateTo, onClose, resolvedTheme, setTheme]
  );

  const filteredCommands = React.useMemo(() => {
    if (!query.trim()) return commands;
    const lower = query.toLowerCase();
    return commands.filter(
      (c) =>
        c.label.toLowerCase().includes(lower) ||
        c.category.toLowerCase().includes(lower)
    );
  }, [commands, query]);

  React.useEffect(() => {
    setSelectedIndex(0);
  }, [filteredCommands]);

  React.useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open handled by parent or custom event
          const trigger = document.getElementById("cmd-palette-trigger");
          trigger?.click();
        }
      }

      if (!isOpen) return;

      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < filteredCommands.length - 1 ? prev + 1 : 0
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev > 0 ? prev - 1 : filteredCommands.length - 1
        );
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, filteredCommands, selectedIndex]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
    >
      <div
        className="w-full max-w-xl overflow-hidden rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center border-b border-[hsl(var(--border))] px-3.5 py-3">
          <Search className="h-4 w-4 text-[hsl(var(--muted-foreground))] mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search sections..."
            className="w-full bg-transparent text-sm text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] focus:outline-none"
            aria-label="Search commands"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] p-1"
              aria-label="Clear query"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
          <span className="hidden sm:inline-block ml-2 text-[10px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded border border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))]">
            ESC
          </span>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2">
          {filteredCommands.length === 0 ? (
            <div className="py-8 text-center text-sm text-[hsl(var(--muted-foreground))]">
              No matching commands found.
            </div>
          ) : (
            <div className="space-y-1">
              {filteredCommands.map((cmd, idx) => {
                const isSelected = idx === selectedIndex;
                return (
                  <button
                    key={cmd.id}
                    onClick={() => cmd.action()}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                      isSelected
                        ? "bg-[hsl(var(--primary))/15] text-[hsl(var(--foreground))]"
                        : "text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]"
                    }`}
                  >
                    <div className="flex items-center gap-3 truncate">
                      <span
                        className={`shrink-0 ${
                          isSelected
                            ? "text-[hsl(var(--primary))]"
                            : "text-[hsl(var(--muted-foreground))]"
                        }`}
                      >
                        {cmd.icon}
                      </span>
                      <span className="truncate">{cmd.label}</span>
                    </div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[hsl(var(--muted-foreground))] px-1.5 py-0.5 rounded bg-[hsl(var(--secondary))]">
                      {cmd.category}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-between border-t border-[hsl(var(--border))] px-3 py-2 text-[11px] font-mono text-[hsl(var(--muted-foreground))] bg-[hsl(var(--secondary))/40]">
          <div className="flex items-center gap-2">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
          </div>
          <span>Prakhar Kedia • Portfolio</span>
        </div>
      </div>
    </div>
  );
}
