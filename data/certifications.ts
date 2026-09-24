export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  institution: string;
  score?: string;
  type: string;
  year?: string;
  verified: boolean;
}

export const certifications: CertificationItem[] = [
  {
    id: "ai-management",
    title: "Artificial Intelligence for Management",
    issuer: "NPTEL",
    institution: "IIT Madras",
    score: "87% (Elite)",
    type: "Course Certification",
    verified: true,
  },
  {
    id: "intro-llms",
    title: "Introduction to Large Language Models",
    issuer: "NPTEL",
    institution: "IIT Madras",
    type: "Advanced AI Specialization",
    verified: true,
  },
  {
    id: "foundations-deep-learning",
    title: "Foundations of Deep Learning",
    issuer: "NPTEL",
    institution: "IISc Bangalore",
    type: "Core Deep Learning & Neural Networks",
    verified: true,
  },
];
