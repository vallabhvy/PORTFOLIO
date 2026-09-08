import type { IconType } from "react-icons";
import {
  SiSpringboot,
  SiPostgresql,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPython,
  SiSolidity,
  SiIpfs,
  SiPolygon,
  SiTauri,
  SiRust,
  SiFastapi,
  SiOllama,
  SiSocketdotio,
  SiCloudinary,
  SiApachekafka,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiTypescript,
  SiVite,
  SiTailwindcss,
} from "react-icons/si";

export const profile = {
  name: "Vallabh Yelsangikar",
  initials: "VY",
  role: "Software Engineer",
  location: "Bengaluru, India",
  availability: "open to backend & full-stack roles",
  email: "vallabhvyelsangikar@gmail.com",
  github: "https://github.com/vallabhvy",
  linkedin: "https://www.linkedin.com/in/vallabh-v-yelsangikar-baa316256",
  resumeUrl: "/Vallabh_V_Yelsangikar_resume.pdf",
  resumeDownloadName: "Vallabh_V_Yelsangikar_resume.pdf",
  tagline:
    "Software engineer. I spend most of my time on backend systems — Spring Boot, Node.js, Express, PostgreSQL, auth, APIs — and enough of the frontend to ship the whole thing myself.",
} as const;

export const heroTyping = [
  "billing systems that reconcile Razorpay payments without double counting.",
  "a health record system where the audit trail lives on-chain, not in an admin panel.",
  "a fully offline AI tool for accountants — no client data ever leaves the laptop.",
  "real-time chat with Socket.IO, and a Python execution visualizer for recursion trees.",
] as const;

export const aboutFacts: { k: string; v: string }[] = [
  { k: "Based in", v: "Bengaluru, India" },
  {
    k: "Studying",
    v: "B.E, Information Science — JSS Academy of Technical Education",
  },
  { k: "Graduating", v: "2026" },
  { k: "Currently", v: "Backend-leaning full-stack engineer" },
  { k: "Interested in", v: "Distributed systems, fintech, developer tools" },
];

export const aboutParagraphs: string[] = [
  "I got into engineering the usual way — wanting to know what was actually happening underneath the frameworks I was using. That question hasn't really gone away. I still find myself reading the Spring source, tracing a request through middleware, or asking why a query is slow before I ask how to cache around it.",
  "Most of what I've built has come out of trying to solve a specific, ordinary problem properly: a shop that needed a working billing system, a records system where patients don't have to trust a single database administrator, a way for accountants to use an LLM without their client data leaving the laptop. None of these needed to be clever. They needed to be correct, and to keep working after I stopped looking at them.",
  "I like backend work because the constraints are honest — a schema either models the domain or it doesn't, a race condition either exists or it doesn't. I do the frontend too, mostly so I understand the whole system I'm shipping, not just my half of it.",
];

export type SkillGroup = { title: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  { title: "Languages", items: ["Java", "JavaScript", "TypeScript", "SQL"] },
  {
    title: "Backend",
    items: [
      "Spring Boot",
      "REST APIs",
      "JPA / Hibernate",
      "Spring Security",
      "Node.js / Express",
      "Microservices",
    ],
  },
  {
    title: "Frontend",
    items: ["React", "Mantine UI", "HTML / CSS", "Vite", "Zustand"],
  },
  { title: "Data & Messaging", items: ["PostgreSQL", "Kafka", "ChromaDB"] },
  {
    title: "Systems & CS",
    items: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Computer Networks",
      "DBMS",
    ],
  },
  {
    title: "Tools",
    items: ["Docker", "Git / GitHub", "Postman", "Swagger", "IntelliJ IDEA"],
  },
];

export type ProjectBlock = { label: string; body: string };
export type TechTag = { name: string; icon?: IconType };

export type Project = {
  id: string;
  index: string;
  category: string;
  name: string;
  role: string;
  status: string;
  summary: string;
  blocks: ProjectBlock[];
  stack: TechTag[];
  github?: string;
  demo?: string;
  thumbnail?: string;
  thumbnailFit?: "cover" | "contain";
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "flowspelt",
    index: "01",
    category: "Developer Tooling & Systems",
    name: "Flowspelt",
    role: "Creator & Full-stack Architect",
    status: "In progress",
    featured: true,
    summary:
      "An offline developer journal and persistent work-session recorder that captures terminal activity, git diffs, and debugging contexts into searchable, narrative plain-English sessions.",
    blocks: [
      {
        label: "Problem",
        body: "When building complex features with AI or multiple terminal tabs, git commits only show what changed — not why or what errors were encountered. Weeks later, developers waste hours deciphering cryptic diffs with zero context.",
      },
      {
        label: "Architecture",
        body: "Native cross-platform desktop engine built with Tauri, Rust, and React/TypeScript. Runs entirely offline and local-first with fast SQLite caching and embedded vector search for private, instant contextual recall.",
      },
      {
        label: "Impact",
        body: "Eliminates developer memory loss by automatically linking code changes, terminal outputs, and architectural decisions into structured timeline logs without leaking proprietary code to external servers.",
      },
    ],
    stack: [
      { name: "Tauri", icon: SiTauri },
      { name: "Rust", icon: SiRust },
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "TailwindCSS", icon: SiTailwindcss },
      { name: "Vite", icon: SiVite },
    ],
    github: "https://github.com/vallabhvy/AI-DRIVEN-DEVELOPER-JOURNAL",
    demo: "https://www.flowspelt.com",
    thumbnail: "/flowspelt logo full with bg.png",
    thumbnailFit: "contain",
  },

  {
    id: "medrack",
    index: "02",
    category: "Healthcare records",
    name: "MedRack",
    role: "Solo, full-stack",
    status: "Active",
    featured: true,
    summary:
      "An electronic health record system built around a simple idea: a patient should control access to their own records, and there should be a verifiable audit trail of who touched them and when.",
    blocks: [
      {
        label: "Problem",
        body: "Traditional EHR access logs are just database rows another admin can quietly edit. I wanted an access history that's tamper-evident by construction, not by policy.",
      },
      {
        label: "Architecture",
        body: "Medical files are encrypted and stored on IPFS; only the file's reference — not the file itself — gets written to a Polygon smart contract, so the chain records provenance without ever holding sensitive data. Spring Boot handles auth, role-based permissions, and the REST layer between the React frontend and both storage systems.",
      },
      {
        label: "What I learned",
        body: 'Web3j is not forgiving about gas estimation under load, and "put it on the blockchain" is a much smaller part of a real system than the phrase suggests — most of the actual engineering was in the permissioning and the upload pipeline, not the smart contract itself.',
      },
    ],
    stack: [
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "Polygon", icon: SiPolygon },
      { name: "Solidity", icon: SiSolidity },
      { name: "IPFS", icon: SiIpfs },
      { name: "React", icon: SiReact },
    ],
    github: "https://github.com/vallabhvy/MEDRACK",
  },

  {
    id: "billnow",
    index: "03",
    category: "Billing & POS",
    name: "BillNow",
    role: "Solo, full-stack",
    status: "Active",
    featured: true,
    summary:
      "A billing and invoicing system for small retail businesses — order management, invoice generation, and payment tracking, built the way an actual finance team would need it, not a demo.",
    blocks: [
      {
        label: "Problem",
        body: "Most small-shop billing tools are either spreadsheets held together by habit, or POS software too heavy for a single till. I wanted something that generates a correct invoice, tracks a payment against it, and doesn't lose data if two orders come in at once.",
      },
      {
        label: "Architecture",
        body: "Spring Boot REST APIs backed by normalized PostgreSQL tables for customers, invoices, orders, and payments — the schema is deliberately boring, because financial records are the one place I didn't want to be clever. Razorpay handles UPI and cash reconciliation on top of that.",
      },
      {
        label: "Challenges",
        body: "Getting Razorpay's webhook payloads to map cleanly onto internal order state without double-counting a payment took more iteration than the rest of the payment flow combined. I ended up standardizing all JSON handling through Jackson's ObjectMapper to stop silent parsing mismatches between the two systems.",
      },
    ],
    stack: [
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "React", icon: SiReact },
    ],
    github: "https://github.com/vallabhvy/BILL-NOW",
  },

  {
    id: "vyncrafts",
    index: "04",
    category: "Early-stage digital studio",
    name: "VynCrafts",
    role: "Developer, full-stack",
    status: "Early stage",
    summary:
      "An early-stage digital studio I started with a few friends. I designed and developed the studio's marketing website — the brand, the pages, and the stack behind it — as the first thing we shipped together.",
    blocks: [
      {
        label: "The idea",
        body: "A small studio for websites, dashboards, business automation, and AI-powered tools. We bought the domain and worked out the brand; the marketing site is the first piece — it lays out the services we want to offer and gives potential clients an easy way to get in touch.",
      },
      {
        label: "What I built",
        body: "I owned the site end to end: the responsive marketing pages, a dynamic portfolio and service sections, and a working contact form with email delivery. My focus was the engineering — clean structure, performance, and accessibility — rather than the business side.",
      },
      {
        label: "Architecture",
        body: "A React + TypeScript + Vite frontend with Tailwind, a small Express service behind it, and the Resend API handling the contact form's email. Built mobile-first and kept fast and accessible on purpose.",
      },
    ],
    stack: [
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Vite", icon: SiVite },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Express", icon: SiExpress },
      { name: "Resend" },
    ],
    github: "https://github.com/vallabhvy/VYNCRAFTS",
    demo: "https://www.vyncrafts.com",
    thumbnail: "/vyncraft_logo_v1.png",
    thumbnailFit: "contain",
  },

  {
    id: "dhristi",
    index: "05",
    category: "Developer tooling",
    name: "Dhristi",
    role: "Solo",
    status: "In progress",
    summary:
      'A Python execution visualizer — it steps through code and shows variable state, recursion depth, and call trees, built because "just read the code" is bad advice for anyone learning recursion for the first time.',
    blocks: [
      {
        label: "Solution",
        body: "The interpreter traces execution and parses the AST to reconstruct a step-by-step model of what a program is doing, which the frontend renders as variable timelines and recursion trees instead of a static call stack dump.",
      },
      {
        label: "What I learned",
        body: "Reconstructing intuitive visual state from a raw execution trace is mostly a data-modeling problem — deciding what to capture at each step, and what to throw away, matters far more than the rendering.",
      },
    ],
    stack: [
      { name: "Python", icon: SiPython },
      { name: "AST tracing" },
      { name: "React", icon: SiReact },
    ],
    github: "https://github.com/vallabhvy/Dhristi",
    demo: "https://www.dhristi.in",
    thumbnail: "/dhristilogo1.png",
  },

  {
    id: "audit-legal",
    index: "06",
    category: "Offline AI desktop tool",
    name: "Audit-Legal",
    role: "Solo, full-stack",
    status: "In progress",
    summary:
      "A desktop application for Indian Chartered Accountants that runs an LLM entirely on the user's machine — no client data ever leaves the laptop, which matters a great deal when the documents are audit files.",
    blocks: [
      {
        label: "Problem",
        body: "Accounting firms want the leverage of an LLM over their document base, but sending client financial data to a third-party API is a non-starter under India's DPDP rules, and often against firm policy regardless.",
      },
      {
        label: "Solution",
        body: "A Tauri + Rust shell keeps the app lightweight, a local FastAPI service runs retrieval-augmented generation against a ChromaDB vector store, and Ollama serves a local Llama-3-8B model — the whole pipeline works with the network cable unplugged.",
      },
      {
        label: "Challenges",
        body: "Getting acceptable response latency out of a local 8B model on ordinary hardware meant being deliberate about chunking and retrieval, since there's no cloud GPU to hide an inefficient pipeline behind.",
      },
    ],
    stack: [
      { name: "Tauri", icon: SiTauri },
      { name: "Rust", icon: SiRust },
      { name: "FastAPI", icon: SiFastapi },
      { name: "Ollama", icon: SiOllama },
    ],
    github: "https://github.com/vallabhvy/AUDIT-LEGAL",
  },
  {
    id: "zapremind",
    index: "07",
    category: "Location-aware mobile app",
    name: "ZapRemind",
    role: "Solo",
    status: "In progress",
    summary:
      "A shopping reminder app that surfaces the right reminder when you're actually near the right store, instead of relying on you remembering a note from this morning.",
    blocks: [
      {
        label: "Challenges",
        body: "Geofencing that's reliable enough to trust, without draining the battery or nagging the user with false triggers, meant tuning radius and dwell-time thresholds against real background-service constraints on Android rather than trusting the defaults.",
      },
    ],
    stack: [
      { name: "React Native", icon: SiReact },
      { name: "Geofencing" },
      { name: "Background services" },
    ],
    github: "https://github.com/vallabhvy/ZAPREMIND",
  },
  {
    id: "live-chat",
    index: "08",
    category: "Real-time messaging",
    name: "Live Chat Application",
    role: "Solo, full-stack",
    status: "Active",
    summary:
      "A real-time 1:1 messaging app — JWT auth over HTTP-only cookies, Socket.IO for live delivery, and Cloudinary for image messages and avatars.",
    blocks: [
      {
        label: "Architecture",
        body: "Zustand keeps client state simple on the frontend; Express and Socket.IO run side by side on the backend so the same auth session covers both the REST calls and the socket connection.",
      },
    ],
    stack: [
      { name: "Socket.IO", icon: SiSocketdotio },
      { name: "Express", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Cloudinary", icon: SiCloudinary },
    ],
    github: "https://github.com/vallabhvy/LIVE-CHAT-APPLICATION",
  },
  {
    id: "taskpro",
    index: "09",
    category: "Team task management",
    name: "TaskPro",
    role: "Solo, full-stack",
    status: "Active",
    summary:
      "A task management app where teams create projects, assign work, and track status together in real time — the kind of tool I wanted to exist while working with a small team on other projects.",
    blocks: [
      {
        label: "Architecture",
        body: 'Node/Express REST APIs with JWT auth, and MongoDB collections modeled around users, projects, and tasks rather than a single flat "todos" table, so filtering and per-project views stay fast as data grows.',
      },
      {
        label: "What I learned",
        body: "Modeling a many-to-many relationship (users across projects, tasks across assignees) in a document database forced me to think harder about query patterns up front than I would have in a relational schema — a useful contrast to the PostgreSQL work on BillNow and MedRack.",
      },
    ],
    stack: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "React", icon: SiReact },
    ],
    github: "https://github.com/vallabhvy/TaskPro",
  },
];

export const philosophy: { title: string; body: string }[] = [
  {
    title: "Boring schemas, interesting problems",
    body: "I'd rather spend the cleverness budget on the actual problem than on the data model. A financial or medical schema should be obvious in hindsight, not impressive.",
  },
  {
    title: "Understand the layer below",
    body: "I want to know what Spring is doing when a request comes in, not just which annotation to add. That habit has caught more bugs than any framework feature has.",
  },
  {
    title: "Build for the version of me who forgot",
    body: "Maintainability isn't an abstraction — it's writing code so that I, six months later with no memory of this file, can still change it safely.",
  },
  {
    title: "Correct, then fast",
    body: "I get the domain right and the invariants enforced before I optimize. A fast system that double-counts a payment is worse than a slow one that never does.",
  },
];

export const experience = {
  title: "Software Engineering Intern",
  org: "Makeloop Technology Labs Pvt. Ltd.",
  dates: "Nov 2025 — Feb 2026",
  points: [
    "Built the operational dashboards finance and ops actually used — billing, invoice management, payment tracking, and Razorpay transaction monitoring — independently, from spec to shipped screen.",
    "Wrote the React interfaces for customer management and billing flows, and made the data-heavy views usable with infinite scrolling and debounced search rather than a spinner and a prayer.",
    "Wired multiple FastAPI services into the frontend against Swagger contracts, handling request/response mapping, environment config, and error states at the UI layer.",
    "Designed Briks, a reusable JSON-configurable component system for composing pages dynamically, and used it to build features in Koadz, the team's no-code website builder.",
    "Worked the normal engineering loop — feature branches, pull requests, code review, and debugging alongside the backend engineers who owned the services I was consuming.",
  ],
};

export type TimelineItem = { year: string; title: string; desc: string };

export const timeline: TimelineItem[] = [
  {
    year: "2022 — 2026",
    title: "B.E, Information Science & Engineering",
    desc: "JSS Academy of Technical Education, Bengaluru — CGPA 8.4",
  },
  {
    year: "Nov 2025 — Feb 2026",
    title: "Software Engineering Internship",
    desc: "Makeloop Technology Labs — billing dashboards, reusable component systems, FastAPI integration.",
  },
  {
    year: "2026 →",
    title: "Looking for a backend / full-stack engineering role",
    desc: "While going deeper on the systems side of the stack.",
  },
];

export type LearningItem = { name: string; note: string; icon?: IconType };

export const learning: LearningItem[] = [
  {
    name: "Distributed Systems",
    note: "Consensus, replication, failure modes",
    icon: undefined,
  },
  {
    name: "Kafka",
    note: "Event streaming & log-based architecture",
    icon: SiApachekafka,
  },
  {
    name: "Redis",
    note: "Caching, rate limiting, ephemeral state",
    icon: SiRedis,
  },
  {
    name: "Docker",
    note: "Reproducible builds & local parity",
    icon: SiDocker,
  },
  {
    name: "Kubernetes",
    note: "Orchestration & self-healing deploys",
    icon: SiKubernetes,
  },
  {
    name: "System Design",
    note: "Trade-offs at scale, back-of-envelope math",
    icon: undefined,
  },
  {
    name: "Cloud Infrastructure",
    note: "OCI foundations, managed services",
    icon: undefined,
  },
  {
    name: "Microservices",
    note: "Boundaries, contracts, observability",
    icon: undefined,
  },
];

export type NavItem = { href: string; label: string };

export const navItems: NavItem[] = [
  { href: "#work", label: "Work" },
  { href: "#philosophy", label: "Philosophy" },
  { href: "#experience", label: "Experience" },
  { href: "#learning", label: "Learning" },
  { href: "#contact", label: "Contact" },
];
