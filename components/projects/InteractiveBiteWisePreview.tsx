"use client";

import * as React from "react";
import { Camera, Sliders, Cpu, Activity, Utensils } from "lucide-react";

export function InteractiveBiteWisePreview() {
  const [activeStep, setActiveStep] = React.useState<number>(2);

  const pipelineSteps = [
    {
      step: 1,
      title: "Food Image Capture",
      desc: "Input RGB image matrix (H×W×3)",
      icon: Camera,
      meta: "Raw photographic capture",
    },
    {
      step: 2,
      title: "OpenCV Preprocessing",
      desc: "Gaussian smoothing, aspect resize, float normalization",
      icon: Sliders,
      meta: "Matrix scale: 224×224 normalized",
    },
    {
      step: 3,
      title: "CNN Feature Extraction",
      desc: "Convolutional filters & Softmax layer",
      icon: Cpu,
      meta: "TensorFlow model inference",
    },
    {
      step: 4,
      title: "Food Item Classification",
      desc: "Predicted categorical label resolution",
      icon: Utensils,
      meta: "Class identified",
    },
    {
      step: 5,
      title: "Nutritional Insight Mapping",
      desc: "Structured macronutrient reference output",
      icon: Activity,
      meta: "Nutritional profile generated",
    },
  ];

  return (
    <div className="rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--secondary))/40] p-4 text-xs font-mono select-none">
      {/* Visual Pipeline Header */}
      <div className="flex items-center justify-between border-b border-[hsl(var(--border))] pb-2.5 mb-3">
        <span className="text-[11px] font-semibold text-[hsl(var(--foreground))]">
          Computer Vision Pipeline
        </span>
        <span className="text-[10px] text-[hsl(var(--primary))]">
          TENSORFLOW / OPENCV
        </span>
      </div>

      {/* Horizontal / Step Flow */}
      <div className="grid grid-cols-5 gap-1.5 mb-3">
        {pipelineSteps.map((item, idx) => {
          const Icon = item.icon;
          const isSelected = activeStep === idx;
          return (
            <button
              key={item.step}
              type="button"
              onClick={() => setActiveStep(idx)}
              className={`p-2 rounded flex flex-col items-center justify-center text-center transition-all border ${
                isSelected
                  ? "bg-[hsl(var(--primary))/15] border-[hsl(var(--primary))] text-[hsl(var(--foreground))]"
                  : "bg-[hsl(var(--card))] border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))] hover:border-[hsl(var(--foreground))/20]"
              }`}
              title={`Step ${item.step}: ${item.title}`}
            >
              <Icon
                className={`w-3.5 h-3.5 mb-1 ${
                  isSelected ? "text-[hsl(var(--primary))]" : ""
                }`}
              />
              <span className="text-[9px] truncate max-w-full font-bold">
                0{item.step}
              </span>
            </button>
          );
        })}
      </div>

      {/* Detail inspect of selected step */}
      <div className="p-3 rounded bg-[hsl(var(--card))] border border-[hsl(var(--border))]">
        <div className="flex items-center justify-between mb-1">
          <span className="font-semibold text-[hsl(var(--foreground))] text-[11px]">
            Step 0{pipelineSteps[activeStep].step}: {pipelineSteps[activeStep].title}
          </span>
          <span className="text-[10px] text-emerald-500">
            {pipelineSteps[activeStep].meta}
          </span>
        </div>
        <p className="text-[11px] text-[hsl(var(--muted-foreground))]">
          {pipelineSteps[activeStep].desc}
        </p>
      </div>
    </div>
  );
}
