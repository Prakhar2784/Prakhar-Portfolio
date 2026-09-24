export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  category: "Full-Stack & Systems" | "Computer Vision & ML" | "Document AI & Vision";
  featured: boolean;
  tech: string[];
  description: string;
  githubUrl?: string;
  demoUrl?: string;
  caseStudyUrl: string;
  highlights: string[];
  problem: string;
  whatIBuilt: string[];
  engineeringArchitecture: {
    frontend?: string;
    api?: string;
    backend?: string;
    database?: string;
    security?: string;
    aiCapability?: string;
    pipeline?: string[];
  };
  keyDecisions: {
    title: string;
    explanation: string;
  }[];
  challenges: string[];
  currentStatus: string;
}

export const projects: ProjectItem[] = [
  {
    id: "assetcare",
    slug: "assetcare",
    title: "AssetCare",
    subtitle: "Enterprise Asset Management Platform",
    tagline: "Centralized lifecycle management for enterprise hardware, tickets, invoices, and automated OCR ingestion.",
    category: "Full-Stack & Systems",
    featured: true,
    tech: [
      "React.js",
      "FastAPI",
      "Python",
      "MongoDB",
      "JWT",
      "RBAC",
      "OCR Engine",
    ],
    description:
      "Enterprise platform for asset tracking, device requests, tickets, invoices, vendors, and administrative workflows.",
    githubUrl: undefined, // Enterprise Private Repository
    demoUrl: "https://iassetcare.com/",
    caseStudyUrl: "/projects/assetcare",
    highlights: [
      "JWT authentication & granular Role-Based Access Control (RBAC)",
      "Multi-tenant data isolation and departmental request workflows",
      "High-throughput FastAPI REST API architecture",
      "Integrated OCR document intelligence for invoices & receipts",
      "Asset lifecycle state machine & ticketing pipeline",
    ],
    problem:
      "Organizations need a centralized system to manage assets, requests, tickets and operational workflows without fragmented spreadsheets, manual invoice entry, or leaky access privileges.",
    whatIBuilt: [
      "Engineered full-stack responsive web client in React.js for asset requests, ticket management, and administrative oversight.",
      "Developed secure REST API services using FastAPI and Python with strict schema validation via Pydantic.",
      "Implemented stateless JSON Web Token (JWT) authentication paired with Role-Based Access Control (RBAC) to enforce administrative vs. employee privilege boundaries.",
      "Structured multi-tenant MongoDB document schemas for flexible asset categorization, vendor management, and audit tracking.",
      "Integrated OCR document processing pipeline to extract text and key values from scanned asset invoices and warranty documents.",
    ],
    engineeringArchitecture: {
      frontend: "React.js (Component-driven UI, responsive dashboard, state management)",
      api: "FastAPI / REST (High-performance asynchronous endpoints with OpenAPI specs)",
      backend: "Python (Business logic, lifecycle state machines, workflow routing)",
      database: "MongoDB (Document storage for flexible asset models, tickets, and audit trails)",
      security: "JWT + RBAC (Role-based claims, route guards, token invalidation)",
      aiCapability: "OCR Document Intelligence (Automated document text & field extraction)",
    },
    keyDecisions: [
      {
        title: "Authentication & Role-Based Access Control (RBAC)",
        explanation:
          "Enforced granular access permissions (SuperAdmin, Department Admin, Employee) at both the API dependency level in FastAPI and client-side route guards, ensuring complete tenant and role boundary isolation.",
      },
      {
        title: "Asynchronous FastAPI REST Architecture",
        explanation:
          "Leveraged Python's async/await capabilities in FastAPI to handle high-concurrency ticket queries and background document processing without blocking the core request threads.",
      },
      {
        title: "Flexible Document Modeling in MongoDB",
        explanation:
          "Modeled enterprise assets with polymorph attributes (e.g. IT hardware vs. office machinery) using MongoDB collections, enabling custom attribute tracking per department without rigid schema migrations.",
      },
      {
        title: "OCR Pipeline Integration for Invoices",
        explanation:
          "Architected asynchronous document ingestion queues that accept invoice uploads, perform OCR text extraction, and populate draft asset entries for human verification.",
      },
    ],
    challenges: [
      "Designing a clean permission schema that gracefully handles hierarchical roles across disparate enterprise departments.",
      "Optimizing MongoDB document indexes for multi-field search queries across asset serial numbers, categories, and warranty dates.",
      "Managing error handling and partial failure states during asynchronous OCR document ingestion.",
    ],
    currentStatus:
      "Production-ready architecture powering core enterprise asset tracking, role-gated ticket operations, and automated invoice processing.",
  },
  {
    id: "bitewise",
    slug: "bitewise",
    title: "BiteWise",
    subtitle: "AI-Powered Nutrition Assistant",
    tagline: "Computer vision pipeline classifying food items from images to generate structured nutritional insights.",
    category: "Computer Vision & ML",
    featured: true,
    tech: ["Python", "TensorFlow", "OpenCV", "Convolutional Neural Networks", "NumPy"],
    description:
      "AI-powered nutrition assistant that analyzes food images and provides nutrition-related insights through a computer vision classification pipeline.",
    githubUrl: undefined,
    demoUrl: undefined,
    caseStudyUrl: "/projects/bitewise",
    highlights: [
      "End-to-end computer vision pipeline from raw image to nutritional breakdown",
      "OpenCV preprocessing: resizing, color space standardization, and contrast normalization",
      "Convolutional Neural Network (CNN) architecture trained for food item classification",
      "Structured mapping layer translating predicted food classes into macro/micronutrient insights",
    ],
    problem:
      "Manual dietary tracking is friction-heavy and prone to logging fatigue. BiteWise explores how computer vision and deep learning can automate food identification directly from camera captures to deliver instant nutritional insights.",
    whatIBuilt: [
      "Designed and implemented an end-to-end computer vision pipeline taking user-captured food imagery through automated inference.",
      "Engineered image preprocessing routines using OpenCV (color correction, noise filtering, normalization, and dimensional scaling).",
      "Trained and evaluated a Convolutional Neural Network (CNN) model with TensorFlow for multi-class food categorization.",
      "Constructed a structured data mapping interface that links classified food categories with verified nutritional profiles (calories, protein, carbohydrates, fats, vitamins).",
    ],
    engineeringArchitecture: {
      pipeline: [
        "Food Image Input",
        "OpenCV Image Preprocessing (Resize, Color Space Norm)",
        "Deep Convolutional Neural Network (Feature Extraction & Softmax)",
        "Food Category Classification",
        "Nutritional Profile Resolution & Structured Output",
      ],
      aiCapability: "Deep Learning / CNN Classification in TensorFlow",
      backend: "Python inference engine with NumPy vector operations",
    },
    keyDecisions: [
      {
        title: "OpenCV Preprocessing Pipeline",
        explanation:
          "Standardized incoming images through aspect-ratio-preserving cropping, Gaussian smoothing, and RGB-to-normalized float array conversion to minimize illumination variance before model ingestion.",
      },
      {
        title: "CNN Model Architecture Selection",
        explanation:
          "Constructed a hierarchical feature extraction network with convolutional layers, pooling, batch normalization, and dropout to prevent overfitting on complex food textures.",
      },
      {
        title: "Decoupled Vision Inference & Nutritional Knowledgebase",
        explanation:
          "Separated visual classification from nutritional reference tables, allowing modular updates to dietary databases without requiring model retraining.",
      },
    ],
    challenges: [
      "Handling real-world photographic variances such as uneven lighting, mixed food items on a single plate, and varying camera angles.",
      "Balancing feature representation depth with low-latency inference speeds.",
    ],
    currentStatus:
      "Core computer vision pipeline and classification architecture validated on multi-class food test sets.",
  },
  {
    id: "handwritten-text-detection",
    slug: "handwritten-text-detection",
    title: "Handwritten Text Detection & Word Segmentation",
    tagline: "Classical computer vision pipeline for automated text region detection and bounding-box word segmentation from document scans.",
    subtitle: "Document OCR Preprocessing & Spatial Segmentation",
    category: "Document AI & Vision",
    featured: true,
    tech: ["Python", "OpenCV", "Computer Vision", "NumPy", "Digital Image Processing"],
    description:
      "OCR preprocessing pipeline for detecting handwritten text regions and segmenting individual words from document images using scale-space filtering and connected component analysis.",
    githubUrl: undefined,
    demoUrl: undefined,
    caseStudyUrl: "/projects/handwritten-text-detection",
    highlights: [
      "Classical CV approach leveraging scale-space theory and Gaussian anisotropic filtering",
      "Connected Component Analysis (CCA) for precise spatial clustering of letter strokes",
      "Adaptive bounding-box generation for individual word and line segmentation",
      "Zero deep-learning dependency for low-overhead, deterministic document preprocessing",
    ],
    problem:
      "Handwritten documents present severe spatial variability: irregular line spacing, skewed baselines, inconsistent stroke widths, and non-uniform margins. Traditional fixed-grid OCR engines fail without dedicated spatial region extraction and word segmentation.",
    whatIBuilt: [
      "Developed a robust document preprocessing pipeline in Python and OpenCV that extracts localized word bounding boxes from raw scanned pages.",
      "Implemented 2D Gaussian filtering and anisotropic kernel convolutions to bridge adjacent character strokes into coherent word blobs.",
      "Utilized Scale-Space processing to evaluate document features at varying resolutions, isolating main text bodies from noise artifacts.",
      "Built Connected Component Labeling algorithms to identify distinct stroke clusters, filter non-text contours, and compute tight word bounding geometries.",
    ],
    engineeringArchitecture: {
      pipeline: [
        "Input Document (Scanned Grayscale / RGB)",
        "Binarization & Noise Reduction (Otsu & Adaptive Thresholding)",
        "Gaussian Anisotropic Filtering (Horizontal Stroke Fusion)",
        "Scale-Space Morphological Processing",
        "Connected Component Analysis (CCA)",
        "Text Region Detection & Bounding Box Word Segmentation",
      ],
      backend: "Python / OpenCV / NumPy matrix operations",
    },
    keyDecisions: [
      {
        title: "Scale-Space & Anisotropic Kernel Convolution",
        explanation:
          "Used asymmetric Gaussian kernels oriented horizontally to bridge intra-word character gaps without incorrectly merging adjacent vertical text lines.",
      },
      {
        title: "Connected Component Analysis (CCA) over Simple Contours",
        explanation:
          "CCA provided statistical properties (area, aspect ratio, stroke density) per segment, allowing mathematical filtering of punctuation, margin artifacts, and ink bleeds.",
      },
      {
        title: "Deterministic CV Fundamentals vs. Heavy Neural Networks",
        explanation:
          "Engineered this pipeline using pure digital image processing principles, providing transparent, lightning-fast preprocessing that outputs clean ROI patches for downstream OCR recognition engines.",
      },
    ],
    challenges: [
      "Handling irregular spacing where handwriting is cursive vs. block letters.",
      "Preventing line overlap on pages with descending characters (like 'g', 'y', 'p') encroaching into subsequent lines.",
    ],
    currentStatus:
      "High-precision document segmentation pipeline operational for extracting clean word coordinate crops.",
  },
];
