<div align="center">

# Prakhar Kedia
### Software Engineer • AI/ML • Full-Stack Development

[![Website](https://img.shields.io/badge/Portfolio-Live_Site-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://prakharkedia.dev)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-prakharkedia-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/prakharkedia/)
[![GitHub](https://img.shields.io/badge/GitHub-Prakhar2784-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Prakhar2784)
[![Email](https://img.shields.io/badge/Email-kediaprakhar%40gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:kediaprakhar@gmail.com)

<p align="center">
  <b>I build intelligent software that solves real problems.</b><br>
  Focused on full-stack systems, applied AI/ML, high-throughput backend APIs, and production-tested architectures.
</p>

</div>

---

## ⚡ Executive Summary

I am a **Software Engineer** specializing in Artificial Intelligence & Machine Learning at **Bennett University** (CGPA: 8.07/10) with professional experience delivering enterprise web applications, asynchronous REST backends, and applied computer vision/NLP pipelines.

* **Core Competencies**: Full-Stack Architecture, Asynchronous Backend Engineering, API Gateways, JWT/RBAC Security, Document OCR Extraction, and Applied LLM Workflows.
* **Engineering Philosophy**: *Engineer first, design second.* Clean data contracts, deterministic error boundaries, strict type safety, and zero unnecessary bloat.

---

## 🛠️ Technical Stack & Capabilities

| Domain | Technologies & Frameworks |
| :--- | :--- |
| **Languages** | Python, C++, JavaScript (ES6+), SQL |
| **Frontend Engineering** | React.js, Next.js (App Router), TypeScript, Tailwind CSS, Component Architecture |
| **Backend & APIs** | FastAPI, Python Asynchronous Services, RESTful APIs, JWT Auth, RBAC |
| **Databases & Storage** | MongoDB (NoSQL Document Store), MySQL (Relational Schema) |
| **Applied AI & Vision** | OpenCV, TensorFlow, Convolutional Neural Networks (CNN), Scale-Space OCR, Prompt Engineering, RAG, NLP |
| **Tooling & Operations** | Git, GitHub, Postman, Turbopack, ESLint, Vercel |

---

## 🚀 Featured Engineering Projects

### 01. [AssetCare](https://iassetcare.com/) — Enterprise Asset Management Platform
> **Stack:** `React.js` • `FastAPI` • `Python` • `MongoDB` • `JWT` • `RBAC` • `OCR Engine`  
> **Live Platform:** [https://iassetcare.com/](https://iassetcare.com/)  
> **Case Study:** `/projects/assetcare`

* Centralized enterprise platform for hardware lifecycle tracking, departmental device requests, ticket queues, and vendor invoices.
* Implemented stateless **JWT authentication** paired with granular **Role-Based Access Control (RBAC)** across multi-tenant privilege tiers.
* Integrated an **OCR-driven document intelligence pipeline** to ingest and parse scanned asset invoices, warranty certificates, and purchase orders into structured MongoDB records.

```
[ Scanned Invoice ] ──► [ OCR Engine ] ──► [ Schema Validation ] ──► [ MongoDB Asset Record ]
```

---

### 02. BiteWise — AI-Powered Nutrition Assistant
> **Stack:** `Python` • `TensorFlow` • `OpenCV` • `CNN Architecture` • `NumPy`  
> **Case Study:** `/projects/bitewise`

* End-to-end computer vision pipeline classifying food items from raw photographic imagery to generate structured macronutrient and micronutrient insights.
* Engineered an **OpenCV preprocessing pipeline** (Gaussian filtering, color space standardization, aspect-ratio-preserving normalization) to minimize variance under uneven lighting conditions.
* Trained a multi-class **Convolutional Neural Network (CNN)** in TensorFlow with decoupled knowledgebase mapping.

```
[ Food Image ] ──► [ OpenCV Preprocessing ] ──► [ CNN Inference ] ──► [ Nutritional Mapping ]
```

---

### 03. Handwritten Text Detection & Word Segmentation
> **Stack:** `Python` • `OpenCV` • `Computer Vision` • `Digital Image Processing`  
> **Case Study:** `/projects/handwritten-text-detection`

* Classical computer vision preprocessing pipeline for detecting irregular handwritten text regions and segmenting localized word bounding boxes without heavy neural network overhead.
* Leveraged **2D Gaussian anisotropic filtering** and **Scale-Space theory** to bridge intra-word letter strokes while maintaining inter-line separation.
* Implemented **Connected Component Analysis (CCA)** to isolate punctuation artifacts and output clean region-of-interest (ROI) bounding box coordinates.

```
[ Document Scan ] ──► [ Anisotropic Filter ] ──► [ Scale-Space ] ──► [ CCA Labeling ] ──► [ Bounding Boxes ]
```

---

## 💼 Professional Experience

### Software Developer Intern — Informatic Computech Pvt. Ltd.
*Jaipur, India • June 2026 — Present*

* **Asset Management Platform ([iassetcare.com](https://iassetcare.com/))**: Engineered full-stack modules using React, FastAPI, Python, and MongoDB for device tracking, ticket resolution, and role-based permissions.
* **Multilingual News Summarization ([ivgovernment.com](https://ivgovernment.com/))**:
  * Designed automated news summarization engine for a news, technology, and governance platform.
  * Structured NLP workflows and prompt-engineering pipelines to generate concise, high-signal editorial digests.
  * Integrated backend REST endpoints using Python and FastAPI with standardized request-response contracts.
* **Document Intelligence**: Developed OCR processing pipelines for automated ingestion of asset and invoice documents.
* **Testing & Quality**: Debugged REST APIs and frontend components, resolving edge-case functional bugs with Git-based version control.

---

## 🎓 Education & Certifications

* **Bennett University** — B.Tech in Computer Science Engineering (*AI & ML Specialization*)  
  *Duration: Aug 2023 — May 2027 | CGPA: 8.07 / 10*
* **NPTEL (IIT Madras)** — *Artificial Intelligence for Management* (**Score: 87% / Elite**)
* **NPTEL (IIT Madras)** — *Introduction to Large Language Models (LLMs)*
* **NPTEL (IISc Bangalore)** — *Foundations of Deep Learning*

---

## 🏛️ Repository Architecture

```
prakhar-portfolio/
├── app/
│   ├── api/contact/route.ts           # Multi-channel server contact endpoint
│   ├── projects/
│   │   ├── assetcare/page.tsx         # AssetCare architecture deep-dive
│   │   ├── bitewise/page.tsx          # BiteWise CV pipeline breakdown
│   │   └── handwritten-text-detection/page.tsx # OCR segmentation case study
│   ├── layout.tsx                     # Root Layout, JSON-LD Schema, OG Tags, Fonts
│   ├── page.tsx                       # Complete assembled portfolio view
│   ├── globals.css                    # Design system (Design tokens & micro-interactions)
│   ├── robots.ts                      # Dynamic robots.txt
│   └── sitemap.ts                     # Dynamic sitemap.xml
├── components/
│   ├── hero/                          # Hero narrative + Interactive 5-tier system visual
│   ├── projects/                      # Interactive project cards & visual pipeline previews
│   ├── experience/                    # Professional experience timeline & deliverables
│   ├── capabilities/                  # What I Build (Full-Stack, Backend, AI, Production)
│   ├── skills/                        # Categorized technical capabilities
│   ├── about/                         # Bio & Bennett University education card
│   ├── certifications/                # NPTEL IIT Madras / IISc Bangalore credentials
│   ├── resume/                        # Dedicated Resume callout card
│   ├── contact/                       # Multi-channel outreach form & copy actions
│   ├── navbar/ & footer/              # Sticky header with ⌘K command palette & footer
│   └── ui/                            # ThemeProvider, ThemeToggle, SVG brand icons
├── data/                              # Centralized configuration (Profile, Projects, Skills)
└── public/
    └── resume.pdf                     # Original verified PDF resume
```

---

## 💻 Local Development

```bash
# 1. Clone the repository
git clone https://github.com/Prakhar2784/Prakhar-Portfolio.git
cd Prakhar-Portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Visit [`http://localhost:3000`](http://localhost:3000) in your browser.

```bash
# Run production build & verify TypeScript / Static Generation
npm run build

# Start production server
npm run start
```

---

## 📬 Contact & Connect

* **Email:** [kediaprakhar@gmail.com](mailto:kediaprakhar@gmail.com)
* **Phone:** [+91 9660590056](tel:+919660590056)
* **LinkedIn:** [linkedin.com/in/prakharkedia](https://www.linkedin.com/in/prakharkedia/)
* **GitHub:** [github.com/Prakhar2784](https://github.com/Prakhar2784)
* **Location:** Jaipur, India

---

<div align="center">
  <sub>© 2026 Prakhar Kedia • Engineered with Next.js, TypeScript & Tailwind CSS</sub>
</div>
