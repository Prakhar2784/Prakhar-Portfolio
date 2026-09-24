"use client";

import * as React from "react";
import {
  Monitor,
  Network,
  Server,
  Database,
  Cpu,
  CheckCircle2,
  Activity,
  ArrowDown,
} from "lucide-react";

interface LayerNode {
  id: string;
  name: string;
  role: string;
  tech: string;
  status: string;
  icon: React.ComponentType<{ className?: string }>;
  metric: string;
}

const systemLayers: LayerNode[] = [
  {
    id: "frontend",
    name: "Frontend Client",
    role: "User Interface & Client State",
    tech: "React.js • TypeScript • Next.js",
    status: "Healthy",
    icon: Monitor,
    metric: "SSR / Static Hydration",
  },
  {
    id: "api",
    name: "API Gateway & Routing",
    role: "Validation, JWT Auth & RBAC",
    tech: "FastAPI • REST • OpenAPI",
    status: "Active",
    icon: Network,
    metric: "< 15ms Latency",
  },
  {
    id: "backend",
    name: "Core Backend Logic",
    role: "Async Services & Workflows",
    tech: "Python • Async Event Pipelines",
    status: "Optimal",
    icon: Server,
    metric: "Asynchronous I/O",
  },
  {
    id: "database",
    name: "Persistence Layer",
    role: "Document & Relational Stores",
    tech: "MongoDB • MySQL • Structured Schemas",
    status: "Indexed",
    icon: Database,
    metric: "Compound Indexing",
  },
  {
    id: "ai",
    name: "AI & Vision Services",
    role: "OCR Extraction, NLP & Inference",
    tech: "OpenCV • CNNs • LLMs / RAG",
    status: "Ready",
    icon: Cpu,
    metric: "Isolated Inference",
  },
];

export function SystemVisual() {
  const [activeLayer, setActiveLayer] = React.useState<string>("backend");

  return (
    <div className="w-full max-w-lg mx-auto lg:max-w-none rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] shadow-xl overflow-hidden">
      {/* Visual Window Header */}
      <div className="flex items-center justify-between border-b border-[hsl(var(--border))] px-4 py-2.5 bg-[hsl(var(--secondary))/50]">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
          </div>
          <span className="text-[11px] font-mono text-[hsl(var(--muted-foreground))] ml-2">
            architecture-overview.sys
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-500">
          <Activity className="w-3 h-3 animate-pulse" />
          <span>LIVE PIPELINE</span>
        </div>
      </div>

      {/* Interactive System Pipeline */}
      <div className="p-4 sm:p-5 space-y-2">
        {systemLayers.map((layer, idx) => {
          const Icon = layer.icon;
          const isActive = activeLayer === layer.id;

          return (
            <React.Fragment key={layer.id}>
              <button
                type="button"
                onClick={() => setActiveLayer(layer.id)}
                className={`w-full text-left rounded-lg p-3 transition-all border ${
                  isActive
                    ? "border-[hsl(var(--primary))] bg-[hsl(var(--primary))/8] shadow-sm"
                    : "border-[hsl(var(--border))] bg-[hsl(var(--card))] hover:border-[hsl(var(--foreground))/20]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-1.5 rounded-md ${
                        isActive
                          ? "bg-[hsl(var(--primary))] text-white"
                          : "bg-[hsl(var(--secondary))] text-[hsl(var(--muted-foreground))]"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs sm:text-sm font-medium text-[hsl(var(--foreground))]">
                          {layer.name}
                        </span>
                        <span className="hidden sm:inline-block text-[10px] font-mono px-1.5 py-0.2 rounded bg-[hsl(var(--secondary))] text-[hsl(var(--muted-foreground))]">
                          {layer.metric}
                        </span>
                      </div>
                      <p className="text-[11px] text-[hsl(var(--muted-foreground))]">
                        {layer.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono hidden sm:inline-block text-[hsl(var(--foreground))/70]">
                      {layer.tech.split("•")[0]}
                    </span>
                    <CheckCircle2
                      className={`w-3.5 h-3.5 ${
                        isActive ? "text-emerald-500" : "text-[hsl(var(--muted-foreground))/40]"
                      }`}
                    />
                  </div>
                </div>

                {/* Expanded Details when active */}
                {isActive && (
                  <div className="mt-2.5 pt-2 border-t border-[hsl(var(--border))] text-[11px] font-mono text-[hsl(var(--muted-foreground))] flex flex-wrap items-center justify-between gap-1">
                    <span>Tech: {layer.tech}</span>
                    <span className="text-emerald-500">Status: {layer.status}</span>
                  </div>
                )}
              </button>

              {/* Connecting link */}
              {idx < systemLayers.length - 1 && (
                <div className="flex justify-center py-0.5">
                  <div className="flex items-center gap-1 text-[10px] font-mono text-[hsl(var(--muted-foreground))/50]">
                    <ArrowDown className="w-3 h-3 animate-bounce" style={{ animationDuration: "2s" }} />
                  </div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Terminal summary bar */}
      <div className="border-t border-[hsl(var(--border))] px-4 py-2 bg-[hsl(var(--secondary))/30] flex items-center justify-between text-[11px] font-mono text-[hsl(var(--muted-foreground))]">
        <span>Click any tier to inspect layer specs</span>
        <span className="text-[hsl(var(--primary))] font-medium">Production-Grade</span>
      </div>
    </div>
  );
}
