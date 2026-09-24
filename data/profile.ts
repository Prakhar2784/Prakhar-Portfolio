export interface ProfileConfig {
  name: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  resumePdf: string;
  siteUrl: string;
  bio: {
    lead: string;
    body1: string;
    body2: string;
  };
  education: {
    institution: string;
    degree: string;
    specialization: string;
    period: string;
    gpa: string;
    location: string;
  };
}

export const profile: ProfileConfig = {
  name: "Prakhar Kedia",
  eyebrow: "SOFTWARE ENGINEER • AI/ML • FULL-STACK",
  headline: "I build intelligent software that solves real problems.",
  subheadline:
    "Software engineer focused on full-stack systems, applied AI/ML, backend engineering, and production-oriented applications.",
  location: "Jaipur, India",
  email: "kediaprakhar@gmail.com",
  phone: "+91 9660590056",
  github: "https://github.com/Prakhar2784",
  linkedin: "https://www.linkedin.com/in/prakharkedia/",
  resumePdf: "/resume.pdf",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://prakhar-portfolio-mocha.vercel.app",
  bio: {
    lead: "I'm Prakhar Kedia, a Computer Science Engineering student specializing in Artificial Intelligence & Machine Learning at Bennett University.",
    body1:
      "My work sits at the intersection of software engineering and applied AI — from enterprise platforms and REST APIs to OCR, NLP, LLM workflows and computer vision.",
    body2:
      "I enjoy taking a problem from requirements to implementation: designing the system, building the APIs, connecting the frontend, integrating intelligent components, and debugging the details that make software reliable.",
  },
  education: {
    institution: "Bennett University",
    degree: "B.Tech in Computer Science Engineering",
    specialization: "Artificial Intelligence & Machine Learning",
    period: "Aug 2023 — May 2027",
    gpa: "CGPA: 8.07 / 10",
    location: "Greater Noida, India",
  },
};
