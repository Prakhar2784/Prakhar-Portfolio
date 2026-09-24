export interface ExperienceProject {
  title: string;
  url?: string;
  description: string;
  points: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  isCurrent: boolean;
  type: string;
  description: string;
  projectsBuilt?: ExperienceProject[];
  responsibilities: string[];
  techStack: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "informatic-computech",
    company: "Informatic Computech Pvt. Ltd.",
    role: "Software Developer Intern",
    location: "Jaipur, India",
    period: "June 2026 — Present",
    isCurrent: true,
    type: "Internship",
    description:
      "Engineering enterprise asset management platforms, asynchronous backend APIs, document OCR intelligence, and LLM-powered multilingual news summarization workflows.",
    projectsBuilt: [
      {
        title: "AssetCare — Enterprise Asset Management Platform",
        url: "https://iassetcare.com/",
        description:
          "Full-stack enterprise platform for asset tracking, device requests, tickets, invoices, vendors, and operational workflows.",
        points: [
          "Developed frontend in React and high-throughput backend services using FastAPI, Python, and MongoDB.",
          "Implemented JWT authentication, Role-Based Access Control (RBAC), and multi-tenant workflows for secure operations.",
          "Integrated OCR-based document intelligence to extract structured metadata from asset invoices and warranty records.",
        ],
      },
      {
        title: "Multilingual News Summarization",
        url: "https://ivgovernment.com/",
        description:
          "Intelligent news summarization engine for a news, technology, and governance platform.",
        points: [
          "Summarization of news content for quick reading and concise, informative digest for a news, technology and governance platform.",
          "Use of NLP and structured prompt-engineering workflows to generate summaries.",
          "Processed API integration using Python/FastAPI with consistent input-output structure.",
        ],
      },
    ],
    responsibilities: [
      "Developing an enterprise Asset Management platform using React, FastAPI, Python and MongoDB for asset tracking, tickets, and invoices.",
      "Building and integrating REST APIs with JWT authentication, Role-Based Access Control (RBAC), and multi-tenant workflows.",
      "Working on OCR-based document intelligence to extract information from asset and invoice documents.",
      "Developing LLM-powered multilingual news summarization workflows using Python and FastAPI with structured prompt engineering.",
      "Testing and debugging application components and REST APIs, resolving functional issues, and integrating components using Git.",
    ],
    techStack: [
      "React.js",
      "FastAPI",
      "Python",
      "MongoDB",
      "JWT / RBAC",
      "OCR Engine",
      "LLMs & NLP",
      "Prompt Engineering",
      "Git",
    ],
  },
];
