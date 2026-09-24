"use client";

import * as React from "react";
import { ShieldCheck, FileCheck, Layers, Users, Database } from "lucide-react";

export function InteractiveAssetCarePreview() {
  const [activeTab, setActiveTab] = React.useState<"rbac" | "ocr" | "workflow">("rbac");

  return (
    <div className="rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--secondary))/40] p-4 text-xs font-mono select-none">
      {/* Visual Navigation Tabs */}
      <div className="flex items-center justify-between border-b border-[hsl(var(--border))] pb-2.5 mb-3">
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setActiveTab("rbac")}
            className={`px-2 py-1 rounded transition-colors ${
              activeTab === "rbac"
                ? "bg-[hsl(var(--primary))] text-white font-medium"
                : "text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]"
            }`}
          >
            RBAC & Auth
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("ocr")}
            className={`px-2 py-1 rounded transition-colors ${
              activeTab === "ocr"
                ? "bg-[hsl(var(--primary))] text-white font-medium"
                : "text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]"
            }`}
          >
            OCR Ingestion
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("workflow")}
            className={`px-2 py-1 rounded transition-colors ${
              activeTab === "workflow"
                ? "bg-[hsl(var(--primary))] text-white font-medium"
                : "text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]"
            }`}
          >
            Asset Lifecycle
          </button>
        </div>
        <span className="text-[10px] text-emerald-500 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          FASTAPI / MONGODB
        </span>
      </div>

      {/* Tab Panels */}
      {activeTab === "rbac" && (
        <div className="space-y-2">
          <div className="flex items-center justify-between p-2 rounded bg-[hsl(var(--card))] border border-[hsl(var(--border))]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <div>
                <p className="font-medium text-[hsl(var(--foreground))]">SuperAdmin Scope</p>
                <p className="text-[10px] text-[hsl(var(--muted-foreground))]">Full CRUD • Vendor Billing • RBAC Config</p>
              </div>
            </div>
            <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-500 text-[10px]">
              200 OK • JWT Valid
            </span>
          </div>

          <div className="flex items-center justify-between p-2 rounded bg-[hsl(var(--card))] border border-[hsl(var(--border))] opacity-75">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-500" />
              <div>
                <p className="font-medium text-[hsl(var(--foreground))]">Employee Scope</p>
                <p className="text-[10px] text-[hsl(var(--muted-foreground))]">Ticket Request • Device Allocation View</p>
              </div>
            </div>
            <span className="px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-500 text-[10px]">
              Gated Endpoint
            </span>
          </div>
        </div>
      )}

      {activeTab === "ocr" && (
        <div className="p-2.5 rounded bg-[hsl(var(--card))] border border-[hsl(var(--border))] space-y-1.5">
          <div className="flex items-center justify-between text-[10px] text-[hsl(var(--muted-foreground))]">
            <span className="flex items-center gap-1.5">
              <FileCheck className="w-3.5 h-3.5 text-[hsl(var(--primary))]" />
              invoice_server_rack_042.pdf
            </span>
            <span className="text-emerald-500">Extracted (100%)</span>
          </div>
          <div className="p-2 rounded bg-[hsl(var(--secondary))] text-[11px] space-y-1">
            <div className="flex justify-between">
              <span className="text-[hsl(var(--muted-foreground))]">Vendor:</span>
              <span className="text-[hsl(var(--foreground))]">Dell Technologies Global</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[hsl(var(--muted-foreground))]">Asset Model:</span>
              <span className="text-[hsl(var(--foreground))]">PowerEdge R750 (SN: DL-99214)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[hsl(var(--muted-foreground))]">Warranty Expiry:</span>
              <span className="text-[hsl(var(--foreground))]">2028-10-15</span>
            </div>
          </div>
        </div>
      )}

      {activeTab === "workflow" && (
        <div className="flex items-center justify-between gap-1 p-2 bg-[hsl(var(--card))] rounded border border-[hsl(var(--border))] text-[10px]">
          <div className="text-center p-1.5 rounded bg-[hsl(var(--secondary))] flex-1">
            <p className="text-[hsl(var(--muted-foreground))]">Stage 1</p>
            <p className="font-medium text-[hsl(var(--foreground))]">Procurement</p>
          </div>
          <span className="text-[hsl(var(--muted-foreground))]">→</span>
          <div className="text-center p-1.5 rounded bg-[hsl(var(--primary))/15] text-[hsl(var(--primary))] flex-1 border border-[hsl(var(--primary))/30]">
            <p className="text-[9px]">Stage 2</p>
            <p className="font-medium">Assigned</p>
          </div>
          <span className="text-[hsl(var(--muted-foreground))]">→</span>
          <div className="text-center p-1.5 rounded bg-[hsl(var(--secondary))] flex-1">
            <p className="text-[hsl(var(--muted-foreground))]">Stage 3</p>
            <p className="font-medium text-[hsl(var(--foreground))]">Maintenance</p>
          </div>
        </div>
      )}
    </div>
  );
}
