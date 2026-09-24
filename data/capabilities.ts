export interface CapabilityItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  keyPoints: string[];
  techTags: string[];
  icon: "layers" | "server" | "cpu" | "shield-check";
}

export const capabilities: CapabilityItem[] = [
  {
    id: "full-stack",
    title: "Full-Stack Systems",
    subtitle: "Modern frontend + backend applications",
    description:
      "Architecting end-to-end web applications with component-driven frontends, reactive state management, and robust backend integrations.",
    keyPoints: [
      "Responsive React.js user interfaces with clean state boundaries",
      "Type-safe client-server contracts & error propagation",
      "Component modularity and maintainable design systems",
    ],
    techTags: ["React.js", "TypeScript", "Tailwind CSS", "REST Integration"],
    icon: "layers",
  },
  {
    id: "backend-apis",
    title: "Backend & APIs",
    subtitle: "REST APIs, auth, authorization & persistence",
    description:
      "Engineering scalable backend services with asynchronous routing, stateless JWT authentication, and structured database modeling.",
    keyPoints: [
      "High-throughput FastAPI & Python asynchronous micro-endpoints",
      "Role-Based Access Control (RBAC) & cryptographic token verification",
      "Structured NoSQL / SQL schemas with optimized index patterns",
    ],
    techTags: ["FastAPI", "Python", "MongoDB", "JWT", "RBAC", "MySQL"],
    icon: "server",
  },
  {
    id: "applied-ai",
    title: "Applied AI",
    subtitle: "LLMs, NLP, RAG, OCR & computer vision",
    description:
      "Integrating production-oriented artificial intelligence pipelines directly into software workflows to solve concrete data extraction and processing tasks.",
    keyPoints: [
      "Structured prompt engineering & multilingual LLM summarization",
      "Classical CV image segmentation & feature detection using OpenCV",
      "OCR document extraction pipelines for automated ingestion",
    ],
    techTags: ["LLMs", "NLP", "OpenCV", "TensorFlow", "RAG", "OCR Engine"],
    icon: "cpu",
  },
  {
    id: "production-thinking",
    title: "Production Thinking",
    subtitle: "Testing, debugging, integration & security",
    description:
      "Approaching engineering with reliability first: clear separation of concerns, defensive error boundaries, clean git history, and maintainable codebases.",
    keyPoints: [
      "Defensive API input validation with Pydantic & error handling",
      "Deterministic data flow and predictable failure modes",
      "Clean modular code structure and git-based team collaboration",
    ],
    techTags: ["Postman", "Git / GitHub", "Security Best Practices", "API Testing"],
    icon: "shield-check",
  },
];
