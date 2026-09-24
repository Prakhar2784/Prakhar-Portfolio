export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: {
    name: string;
    highlight?: boolean;
    level?: string;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Languages",
    description: "Core programming and querying languages for systems and services.",
    skills: [
      { name: "Python", highlight: true },
      { name: "C++", highlight: true },
      { name: "JavaScript", highlight: true },
      { name: "SQL", highlight: false },
    ],
  },
  {
    id: "core-cs",
    title: "Core CS",
    description: "Fundamental computer science foundations and architectural principles.",
    skills: [
      { name: "Data Structures & Algorithms", highlight: true },
      { name: "Object-Oriented Programming (OOP)", highlight: true },
      { name: "DBMS & Relational Theory", highlight: false },
    ],
  },
  {
    id: "development",
    title: "Development & Systems",
    description: "Frameworks, protocols, authentication, and web application architecture.",
    skills: [
      { name: "React.js", highlight: true },
      { name: "FastAPI", highlight: true },
      { name: "REST APIs", highlight: true },
      { name: "JWT", highlight: false },
      { name: "RBAC (Access Control)", highlight: false },
    ],
  },
  {
    id: "databases-tools",
    title: "Databases & Tools",
    description: "Data persistence, version control, API testing, and developer environments.",
    skills: [
      { name: "MongoDB", highlight: true },
      { name: "MySQL", highlight: false },
      { name: "Git", highlight: true },
      { name: "GitHub", highlight: false },
      { name: "Postman", highlight: false },
    ],
  },
  {
    id: "ai-ml",
    title: "AI / ML & Vision",
    description: "Machine learning, neural networks, language models, and computer vision pipelines.",
    skills: [
      { name: "Machine Learning", highlight: true },
      { name: "NLP", highlight: true },
      { name: "LLMs", highlight: true },
      { name: "Prompt Engineering", highlight: false },
      { name: "RAG", highlight: false },
      { name: "TensorFlow", highlight: true },
      { name: "OpenCV", highlight: true },
      { name: "OCR", highlight: true },
    ],
  },
];
