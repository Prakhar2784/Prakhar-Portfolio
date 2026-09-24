import * as React from "react";
import { Hero } from "@/components/hero/Hero";
import { AboutSection } from "@/components/about/AboutSection";
import { WhatIBuild } from "@/components/capabilities/WhatIBuild";
import { SelectedWork } from "@/components/projects/SelectedWork";
import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";
import { SkillsGrid } from "@/components/skills/SkillsGrid";
import { CertificationsList } from "@/components/certifications/CertificationsList";
import { ResumeCTA } from "@/components/resume/ResumeCTA";
import { ContactSection } from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <AboutSection />
      <WhatIBuild />
      <SelectedWork />
      <ExperienceTimeline />
      <SkillsGrid />
      <CertificationsList />
      <ResumeCTA />
      <ContactSection />
    </main>
  );
}
