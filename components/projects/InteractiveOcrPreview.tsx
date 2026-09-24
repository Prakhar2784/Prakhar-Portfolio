"use client";

import * as React from "react";
import { FileText, Eye, BoxSelect, Sparkles, Filter } from "lucide-react";

export function InteractiveOcrPreview() {
  const [activeStage, setActiveStage] = React.useState<number>(3);

  const stages = [
    {
      id: "input",
      name: "1. Raw Document",
      desc: "Scanned grayscale handwritten page with variable stroke baselines.",
      tag: "Grayscale (2D Matrix)",
      icon: FileText,
    },
    {
      id: "gaussian",
      name: "2. Gaussian Filtering",
      desc: "Anisotropic kernel convolution bridging horizontal intra-word gaps.",
      tag: "Kernel σx > σy",
      icon: Filter,
    },
    {
      id: "scalespace",
      name: "3. Scale-Space Analysis",
      desc: "Multi-scale morphological processing isolating core text blobs from background noise.",
      tag: "Multi-resolution",
      icon: Eye,
    },
    {
      id: "cca",
      name: "4. Connected Components (CCA)",
      desc: "Statistical clustering of pixel regions by area, aspect ratio & stroke density.",
      tag: "Labeling & Centroids",
      icon: Sparkles,
    },
    {
      id: "segmentation",
      name: "5. Word Segmentation",
      desc: "Dynamic bounding box generation extracting cropped word region coordinates (x, y, w, h).",
      tag: "Bounding Boxes (ROI)",
      icon: BoxSelect,
    },
  ];

  return (
    <div className="rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--secondary))/40] p-4 text-xs font-mono select-none">
      {/* Visual Pipeline Header */}
      <div className="flex items-center justify-between border-b border-[hsl(var(--border))] pb-2.5 mb-3">
        <span className="text-[11px] font-semibold text-[hsl(var(--foreground))]">
          Document OCR Spatial Pipeline
        </span>
        <span className="text-[10px] text-emerald-500">
          PYTHON / OPENCV
        </span>
      </div>

      {/* Stage Selector buttons */}
      <div className="flex flex-wrap gap-1 mb-3">
        {stages.map((stage, idx) => {
          const isCurrent = activeStage === idx;
          return (
            <button
              key={stage.id}
              type="button"
              onClick={() => setActiveStage(idx)}
              className={`px-2 py-1 rounded text-[10px] transition-all border ${
                isCurrent
                  ? "bg-[hsl(var(--primary))] text-white border-[hsl(var(--primary))] font-medium"
                  : "bg-[hsl(var(--card))] border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]"
              }`}
            >
              {stage.name.split(". ")[1]}
            </button>
          );
        })}
      </div>

      {/* Interactive visual representation of stage */}
      <div className="p-3 rounded bg-[hsl(var(--card))] border border-[hsl(var(--border))]">
        <div className="flex items-center justify-between mb-1.5">
          <span className="font-semibold text-[hsl(var(--foreground))] text-[11px]">
            {stages[activeStage].name}
          </span>
          <span className="text-[10px] text-[hsl(var(--primary))]">
            {stages[activeStage].tag}
          </span>
        </div>
        <p className="text-[11px] text-[hsl(var(--muted-foreground))] mb-3">
          {stages[activeStage].desc}
        </p>

        {/* Visual Box Simulation */}
        <div className="relative h-14 rounded bg-[hsl(var(--secondary))] border border-dashed border-[hsl(var(--border))] flex items-center justify-center overflow-hidden">
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-[hsl(var(--muted-foreground))] font-serif italic">
              "Handwritten sentence sample"
            </span>
            {activeStage >= 3 && (
              <div className="flex gap-1">
                <span className="px-1 py-0.5 rounded border border-emerald-500/50 bg-emerald-500/10 text-emerald-500 text-[9px]">
                  [w₁]
                </span>
                <span className="px-1 py-0.5 rounded border border-emerald-500/50 bg-emerald-500/10 text-emerald-500 text-[9px]">
                  [w₂]
                </span>
                <span className="px-1 py-0.5 rounded border border-emerald-500/50 bg-emerald-500/10 text-emerald-500 text-[9px]">
                  [w₃]
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
