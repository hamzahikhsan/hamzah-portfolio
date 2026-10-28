export interface ManifestoItem {
  number: string;
  title: string;
  description: string;
  tag: string;
}

export interface CaseStudyItem {
  id: string;
  title: string;
  client: string;
  category: string;
  year: string;
  summary: string;
  metrics: string[];
  tags: string[];
  stack: string[];
  link?: string;
  linkLabel?: string;
}

export interface FrameworkStep {
  step: string;
  title: string;
  timeline: string;
  deliverables: string[];
  focus: string;
}

export interface MetricItem {
  value: string;
  label: string;
  detail: string;
}

export const MANIFESTO_DATA: ManifestoItem[] = [
  {
    number: "01",
    tag: "VELOCITY",
    title: "Speed as an Architectural Feature",
    description:
      "We ship from verified Figma wireframes to production-grade Next.js code within 10-day sprints, replacing months of committee stagnation with immediate market validation.",
  },
  {
    number: "02",
    tag: "FIDELITY",
    title: "Zero Design-to-Code Parity Gap",
    description:
      "Design systems without code execution are decorative liabilities. Every component is engineered simultaneously in tokens and TypeScript, guaranteeing pixel-perfect release fidelity.",
  },
  {
    number: "03",
    tag: "AESTHETICS",
    title: "Brutalist Editorial Hierarchy",
    description:
      "Zero fluff, zero generic AI placeholders. We leverage tight Swiss typography, hairline geometric grids, and high-contrast editorial rhythm that demands attention and builds authority.",
  },
  {
    number: "04",
    tag: "OUTCOMES",
    title: "Metric-Driven UX Architecture",
    description:
      "Aesthetics must accelerate user conversion. Every button position, form flow, and layout state is validated against Single Ease Question (SEQ) benchmarks and task completion rates.",
  },
  {
    number: "05",
    tag: "ORIGINALITY",
    title: "Anti-Cookie-Cutter Philosophy",
    description:
      "We refuse homogenous SaaS UI templates. Each digital identity is crafted with distinctive signature accents, bespoke interactions, and bespoke visual DNA.",
  },
  {
    number: "06",
    tag: "CRAFTSMANSHIP",
    title: "Relentless Engineering Rigor",
    description:
      "Fluid responsiveness across 320px to 4K displays, strict accessibility standards, ultra-optimized static exports, and sub-second Time to Interactive (TTI).",
  },
];

export const CASE_STUDIES_DATA: CaseStudyItem[] = [
  {
    id: "maioffice",
    title: "MAIOFFICE: Autonomous AI Task & Project Scribe",
    client: "MAIA Digital / Internal Suite",
    category: "B2B SaaS / Product Design & Frontend",
    year: "2026",
    summary:
      "Spearheaded end-to-end design and frontend development for an autonomous AI-driven office workflow automation platform. Designed intuitive task orchestrators, conversational widgets, and dense productivity dashboards.",
    metrics: ["Single Ease Question: 6.1 / 7.0", "User NPS: 9.7 / 10", "MVP Delivery: 14 Days"],
    tags: ["AI SaaS", "Product Architecture", "Design System"],
    stack: ["Next.js 16", "TypeScript", "Tailwind CSS", "Shadcn UI", "Lovable Engine"],
    link: "https://maia-task-scribe.lovable.app/",
    linkLabel: "Launch Live App",
  },
  {
    id: "laju-pos",
    title: "LAJU POS: Modern Multi-Store Retail Ecosystem",
    client: "LAJU Retail Technologies",
    category: "Enterprise POS / UI/UX & Design Tokens",
    year: "2026",
    summary:
      "Engineered an offline-first POS cash register and cloud inventory interface tailored for high-speed retail and F&B operations. Designed 140+ screens in Figma Dev Mode with unified design token hierarchy.",
    metrics: ["140+ Production Screens", "Figma Dev Mode Ready", "35% Faster Order Entry"],
    tags: ["POS System", "F&B / Retail", "Mobile & Tablet"],
    stack: ["Figma Design Tokens", "Auto Layout 5.0", "Component Architecture"],
    link: "https://dribbble.com/hamzah_student",
    linkLabel: "View Design Case Study",
  },
  {
    id: "vendora",
    title: "Vendora UI Kit: Commercial E-Commerce System",
    client: "Digital Products / Creator Economy",
    category: "Design System / Commercial Product",
    year: "2025 - 2026",
    summary:
      "Crafted a high-converting, 200+ component modular design system published commercially on Gumroad. Adopted by global freelance developers and indie hackers worldwide.",
    metrics: ["200+ Verified Components", "5.0 ★ Rating", "Global Commercial Sales"],
    tags: ["Commercial Asset", "Design Tokens", "Gumroad Best-Seller"],
    stack: ["Figma Variables", "Multi-Theme Tokens", "Vector Kit"],
    link: "https://anikiisaan.gumroad.com/",
    linkLabel: "Explore Gumroad Store",
  },
  {
    id: "euphoric",
    title: "Euphoric Disorder: Brutalist Streetwear Platform",
    client: "Euphoric Disorder Brand",
    category: "E-Commerce / Fashion & Editorial",
    year: "2025",
    summary:
      "Created an edgy, brutalist editorial online store reflecting underground streetwear culture. Implemented raw typographic grids, lookbook carousels, and minimalist cart checkout flows.",
    metrics: ["Sub-second Page Loads", "Custom Micro-interactions", "100% Mobile Fluidity"],
    tags: ["Fashion E-Commerce", "Brutalist Web", "Headless Store"],
    stack: ["Next.js", "Tailwind CSS", "Shopify API", "Vercel"],
    link: "https://dribbble.com/hamzah_student",
    linkLabel: "View Brand Archive",
  },
];

export const FRAMEWORK_DATA: FrameworkStep[] = [
  {
    step: "01",
    title: "Discovery & Visual Positioning",
    timeline: "Days 1 — 2",
    focus: "Audit, User Journey Mapping, Moodboard & Typographic Direction",
    deliverables: [
      "Competitive UX Tear-down",
      "Information Architecture (IA)",
      "Brutalist Moodboard & Token Spec",
    ],
  },
  {
    step: "02",
    title: "Interactive High-Fidelity Prototype",
    timeline: "Days 3 — 5",
    focus: "Figma Dev Mode Architecture, Interactive States & Design Tokens",
    deliverables: [
      "Figma Prototype with Dynamic States",
      "Responsive Layouts (Mobile, Tablet, Desktop)",
      "Handoff-Ready Token Documentation",
    ],
  },
  {
    step: "03",
    title: "Design-to-Code MVP Sprint",
    timeline: "Days 6 — 10",
    focus: "Next.js 16 App Router, TypeScript, Tailwind CSS v4 & Motion",
    deliverables: [
      "Clean Modular Component Hierarchy",
      "Lighthouse 95+ Performance Scores",
      "Dynamic Forms & Micro-interactions",
    ],
  },
  {
    step: "04",
    title: "Deployment & Production Hardening",
    timeline: "Days 11 — 12",
    focus: "Static Site Generation (SSG), Nginx Host Tuning & Zero-Cost Infra",
    deliverables: [
      "Next.js Static Export (`out/`)",
      "Hardened Nginx Configuration & SSL",
      "Automated Rsync CI/CD Deployment Script",
    ],
  },
];

export const METRICS_DATA: MetricItem[] = [
  {
    value: "100+",
    label: "Trainees Mentored",
    detail: "Conducted intensive UI/UX & Frontend workshops at vocational institutions and BBPVP Kemnaker.",
  },
  {
    value: "6.1 / 7",
    label: "SEQ Usability Score",
    detail: "Achieved top-tier usability score for MAIOFFICE AI autonomous project platform.",
  },
  {
    value: "9.7 / 10",
    label: "Net Promoter Score",
    detail: "Validated satisfaction rate across active beta users and client stakeholders.",
  },
  {
    value: "4+",
    label: "Commercial Digital Assets",
    detail: "Published premium UI Kits and 3D design packs sold on Gumroad with 5.0 rating.",
  },
];
