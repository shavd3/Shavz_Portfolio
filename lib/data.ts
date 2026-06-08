import type { NavLink, Experience, Project, Skill, Publication, TeachingModule, Photo } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Teaching", href: "#teaching" },
  { label: "Leadership", href: "#leadership" },
  { label: "Photography", href: "#photography" },
  { label: "Contact", href: "#contact" },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "ifs-se",
    role: "Software Engineer",
    company: "IFS R&D International",
    period: "June 2024 – Present",
    current: true,
    description:
      "CRM, Service & Asset Management division — building enterprise features across all layers of IFS Cloud.",
    bullets: [
      "Developed Aurena client pages (.client) and reusable fragments (.fragment) across CRM, RMCOM, RMPANL, and Order components — building new pages from scratch and extending existing ones.",
      "Designed and implemented IFS Cloud projections defining entity overrides, CRUD endpoints, custom actions, and functions consumed by Aurena clients and external integrations.",
      "Built end-to-end Microsoft Teams CRM integration: OAuth client secret encryption (Java EE/AES), dynamic Teams app manifest ZIP generation, AI-powered meeting briefing via LLM recipe, and meeting summary persistence.",
      "Extended IFS AI Copilot with a Customer Evaluation capability — built the full evaluation data layer (schema, PL/SQL, prompt recipes, service projection) end-to-end.",
      "Authored GPT-4o prompt recipes (.ins) for meeting summarisation, guided next step recommendations, and AI Copilot customer evaluations.",
      "Designed and built the Business Opportunity PDF report from scratch using IFS Report Studio Designer — hierarchical 13-block data model with ~90 columns.",
      "Learned and documented EBR implementation patterns, delivered sessions to engineers, and created an automated EBR PR Review agent on Bitbucket.",
      "Delivered KT sessions and technical presentations to 30–50 engineers across teams in the US, Germany, and Sweden.",
      "Contributing to IFS's next-generation Kairos platform built on Go (backend) and React (frontend).",
    ],
    tags: ["IFS Cloud", "Aurena", "PL/SQL", "Java EE", "AI/ML", "Go", "React"],
  },
  {
    id: "iit-lecturer",
    role: "Visiting Lecturer",
    company: "Informatics Institute of Technology (IIT)",
    period: "September 2024 – Present",
    current: true,
    description:
      "Teaching 3–4 modules concurrently to 160+ students spanning 1st year to final year.",
    bullets: [
      "Teaching Database Systems, Python, Java & OOP, Web Development, and Client-Server Architecture (JAX-RS, Jakarta EE, server sockets, concurrency, stream I/O).",
      "Conducting 4–6 classes per week, evaluating final-year dissertations, and running viva assessments.",
      "Mentoring final-year students on their projects and conducting mock interviews for career preparation.",
    ],
    tags: ["Java", "Python", "Databases", "JAX-RS", "OOP"],
  },
  {
    id: "ifs-intern",
    role: "Intern — Software Engineer",
    company: "IFS R&D International",
    period: "July 2022 – September 2023",
    current: false,
    description:
      "Human Capital Management module — building enterprise HCM features and developing deep IFS Cloud fundamentals.",
    bullets: [
      "Developed IFS Cloud application features using PL/SQL and IFS frameworks within the HCM module.",
      "Implemented API-based test automation scripts and PL/SQL unit tests for regression coverage.",
      "Built proficiency in PL/SQL and the IFS Marble framework, designing entity-relationship models.",
      "Gained hands-on experience with Kubernetes pod management using Lens.",
    ],
    tags: ["PL/SQL", "IFS Marble", "Kubernetes", "Agile"],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "saas-ecommerce",
    title: "Multi-Tenant E-Commerce SaaS",
    description:
      "Architected a white-label e-commerce platform as a Turborepo monorepo with ORM-level tenant isolation, Docker Compose local environment, GitHub Actions CI/CD pipeline, and cloud infrastructure across Neon, Upstash, Cloudflare R2, and Vercel.",
    tech: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma", "Stripe", "Docker", "Turborepo"],
    featured: true,
  },
  {
    id: "cryptovisionx",
    title: "CryptoVisionX",
    description:
      "Multi-model deep learning pipeline for cryptocurrency trend prediction using candlestick chart image classification combined with LSTM time-series modelling, with Grad-CAM explainability for visual interpretation of model decisions.",
    tech: ["Python", "ResNet50", "LSTM", "CNN", "Grad-CAM", "PyTorch"],
    highlight: "IEEE Published · Bronze Research Award",
    githubUrl: "https://ieeexplore.ieee.org/document/10857799",
    featured: true,
  },
  {
    id: "eventz",
    title: "EventZ",
    description:
      "Full-stack event planning platform built from my own experience coordinating events — visual timeline management, day-of scheduling, task delegation, budget tracking, and multi-venue guest management with real-time collaboration.",
    tech: ["Next.js 16", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/shavd3/EventZ",
    liveUrl: "https://event-z-psi.vercel.app",
    featured: true,
  },
  {
    id: "lms-admin",
    title: "LMS Admin Portal",
    description:
      "Freelance admin portal for managing student records, course enrolments, attendance, and academic data for a learning management system. Clean, role-based dashboard built for day-to-day academic administration.",
    tech: ["Next.js 16", "TypeScript", "Supabase", "Tailwind CSS", "PostgreSQL"],
    githubUrl: "https://github.com/shavd3/LMS_Admin",
    featured: true,
  },
  {
    id: "salesforecaster",
    title: "SalesForecaster",
    description:
      "Time-series sales forecasting system with leakage-safe feature engineering and SHAP-based explainable AI, enabling business-driven what-if analysis and interpretable predictions for non-technical stakeholders.",
    tech: ["Python", "XGBoost", "SHAP", "Pandas", "Scikit-learn"],
    featured: true,
  },
];

export const SKILLS: Skill[] = [
  {
    category: "Languages",
    items: ["PL/SQL", "Java", "TypeScript", "JavaScript", "Go", "Python", "SQL"],
  },
  {
    category: "IFS Cloud",
    items: ["Aurena (.client/.fragment)", "Projections", "PL/SQL Services (.plsvc)", "Report Studio", "EBR", "Developer Studio", "IFS Marble"],
  },
  {
    category: "Java Ecosystem",
    items: ["Java EE / Jakarta EE", "EJB", "JDBC", "JAX-RS", "AES Cryptography"],
  },
  {
    category: "Databases",
    items: ["Oracle PL/SQL", "PostgreSQL", "Prisma ORM", "Redis", "JSON_TABLE", "Schema Design", "Performance Tuning"],
  },
  {
    category: "AI & Integration",
    items: ["IFS ML/LLM Platform", "GPT-4o Prompt Engineering", "REST APIs", "Microsoft Teams Platform", "OAuth 2.0", "IFS Copilot"],
  },
  {
    category: "DevOps & Cloud",
    items: ["Docker", "Kubernetes", "GitHub Actions", "Git", "Bitbucket", "Vercel", "Neon", "Cloudflare R2"],
  },
  {
    category: "Testing & Quality",
    items: ["PL/SQL Unit Testing", "API Test Automation (TAR)", "Postman", "Code Review"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
  },
];

export const PUBLICATION: Publication = {
  title: "Image-Based Cryptocurrency Trend Prediction with Explainable Deep Learning",
  conference: "9th International Conference on Information Technology Research (ICITR 2024)",
  year: 2024,
  award: "Bronze Research Excellence Award — Informatics Institute of Technology",
  abstract:
    "Investigated a novel approach to cryptocurrency market prediction by treating candlestick charts as image classification problems. The pipeline combined ResNet50 for pattern recognition, LSTM for temporal modelling, and Grad-CAM for model explainability — providing visual justification for predictions that bridges the gap between deep learning and interpretable finance.",
  url: "https://ieeexplore.ieee.org/document/10857799",
};

export const TEACHING_MODULES: TeachingModule[] = [
  { name: "Database Systems", level: "2nd Year" },
  { name: "Java & Object-Oriented Programming", level: "1st Year" },
  { name: "Python Programming", level: "1st Year" },
  { name: "Web Development", level: "2nd Year" },
  { name: "Client-Server Architecture", level: "Final Year" },
];

export const TEACHING_STATS = {
  students: "160+",
  classesPerWeek: "4–6",
  modules: 5,
  institution: "Informatics Institute of Technology (IIT)",
  affiliation: "Affiliated with University of Westminster, UK",
};

export interface ExtracurricularItem {
  id: string;
  title: string;
  org: string;
  period: string;
  description: string;
  category: "Leadership" | "Community" | "Achievement" | "Creative";
}

export const EXTRACURRICULAR: ExtracurricularItem[] = [
  {
    id: "head-prefect",
    title: "Head Prefect",
    org: "St. Sebastian's College, Moratuwa",
    period: "2019",
    description: "Led the school prefect board — responsible for student discipline, school events, and representing the student body at official functions.",
    category: "Leadership",
  },
  {
    id: "batch-president",
    title: "President — Batch of 2020",
    org: "St. Sebastian's College, Moratuwa",
    period: "2019 – 2020",
    description: "Elected batch president, coordinating class activities, representing peers in school administration, and organising batch-level events.",
    category: "Leadership",
  },
  {
    id: "event-planning",
    title: "Event Planning & Coordination",
    org: "Independent",
    period: "Ongoing",
    description: "Plan and coordinate events end-to-end — from concept and logistics to execution. Built EventZ, a full-stack platform, directly out of this experience.",
    category: "Creative",
  },
  {
    id: "rotaract",
    title: "Public Relations Director",
    org: "Rotaract Club, IIT",
    period: "2021 – 2023",
    description: "Managed public relations and communications for the IIT Rotaract Club, coordinating outreach campaigns and community service events.",
    category: "Community",
  },
  {
    id: "entrepreneurship",
    title: "Member",
    org: "Entrepreneurship Society, IIT",
    period: "2021 – 2023",
    description: "Active member of the IIT Entrepreneurship Society, participating in startup pitches, workshops, and networking events.",
    category: "Community",
  },
  {
    id: "hacktron",
    title: "Semi-Finalist — Hacktron",
    org: "Game Development Hackathon",
    period: "2021",
    description: "Reached the semi-finals of Hacktron, a competitive game development hackathon, delivering a playable prototype under time constraints.",
    category: "Achievement",
  },
  {
    id: "welfare",
    title: "Welfare Committee Member",
    org: "IFS R&D International (HCM Division)",
    period: "2023",
    description: "Part of the HCM division welfare committee — organising team events, celebrations, and employee engagement activities.",
    category: "Community",
  },
];

export const PHOTOS: Photo[] = [
  { id: "ph-01", src: "/images/photography/01-canon-lens.jpg",        alt: "Canon EFS 18-55mm lens — a quiet morning at the desk",       width: 800,  height: 1200, category: "Macro" },
  { id: "ph-02", src: "/images/photography/02-tech-flatlay.jpg",      alt: "Tech flatlay — Canon lens, phone, and Dell hub",              width: 1024, height: 1366, category: "Still Life" },
  { id: "ph-03", src: "/images/photography/03-calla-lily.jpg",        alt: "Calla lily in soft morning light",                           width: 800,  height: 1200, category: "Macro" },
  { id: "ph-04", src: "/images/photography/04-night-street.jpg",      alt: "Colombo night street — golden hour fading into blue",         width: 768,  height: 1024, category: "Street" },
  { id: "ph-05", src: "/images/photography/05-train-promenade.jpg",   alt: "Colombo Fort station promenade — dramatic storm sky",         width: 768,  height: 1024, category: "Street" },
  { id: "ph-06", src: "/images/photography/06-rooftop-sunset.jpg",    alt: "ITC Ratnadipa Colombo — rooftop at golden hour",             width: 768,  height: 1024, category: "Architecture" },
  { id: "ph-07", src: "/images/photography/07-city-skyline.jpg",      alt: "Colombo skyline by night — Lotus Tower and Shangri-La",      width: 1024, height: 768,  category: "Cityscape" },
  { id: "ph-08", src: "/images/photography/08-train-overhead.jpg",    alt: "Overhead view of trains at Maradana station",                width: 768,  height: 1024, category: "Transport" },
  { id: "ph-09", src: "/images/photography/09-sea-from-train.jpg",    alt: "Indian Ocean through a train window — coastal Sri Lanka",    width: 768,  height: 1024, category: "Landscape" },
  { id: "ph-10", src: "/images/photography/10-port-city.jpg",         alt: "City of Colombo — Port City and a tuk-tuk at dawn",          width: 1024, height: 768,  category: "Architecture" },
  { id: "ph-11", src: "/images/photography/11-blood-moon.jpg",        alt: "Lunar eclipse — blood moon over Sri Lanka",                  width: 768,  height: 1024, category: "Astrophotography" },
  { id: "ph-12", src: "/images/photography/12-colonial-building.jpg", alt: "Colonial-era building — low angle with afternoon sun",       width: 768,  height: 1024, category: "Architecture" },
];

export const CONTACT = {
  fullName: "Shavin Dilsara Fernando",
  email: "shavin2001d@gmail.com",
  emailIFS: "shavin.fernando@ifs.com",
  emailIIT: "shavin.f@iit.ac.lk",
  phone: "+94 77 359 2037",
  linkedin: "https://www.linkedin.com/in/shavin-fernando-d3",
  github: "https://github.com/shavd3",
  instagram: "https://www.instagram.com/shav.___.d.___.3?igsh=MXF4ZHlwbWYyZnc1OQ==",
  facebook: "https://www.facebook.com/share/14eCGioAAiK/",
  photographyFb: "https://www.facebook.com/share/1CwPU4zU8B/",
};
