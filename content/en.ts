import type { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    title: "Tryelson Marques · Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer with 7+ years in React, Next.js, Vue and TypeScript. I work end to end on payment and compliance flows, focused on reliability and AI-assisted development.",
  },
  nav: { about: "Highlights", approach: "How I work", experience: "Experience", projects: "Projects", contact: "Contact", switchTo: "PT" },
  hero: {
    available: "Open to new opportunities",
    hello: "Hi, I'm",
    role: "Senior Frontend Engineer",
    rotating: ["React & Next.js", "Vue & Nuxt", "TypeScript", "Front → BFF → API", "AI-assisted development"],
    tagline:
      "I build fast, reliable interfaces for products that handle real money. I have hands-on experience with critical KYC and payment flows. I've led a team of 7 developers and I use AI to speed up my team.",
    location: "Petrolândia, Brazil · Remote",
    localTime: "local time",
    resume: "Download résumé",
    resumeHref: "/Tryelson-Marques-Resume.pdf",
    contact: "Let's talk",
  },
  highlights: {
    title: "Highlights",
    subtitle: "What I deliver, in numbers.",
    observability: {
      label: "Observability",
      metric: "32k+",
      title: "previously silent errors tracked in 3 months",
      text: "I instrumented the entire Voomp platform with Sentry, from the dashboard to checkout. It gave the team visibility into errors and the app's sensitive spots, so fixes were prioritized with data and the product became more robust.",
    },
    leadership: {
      label: "Leadership",
      metric: "7 devs",
      text: "Led a frontend team at Sumé: sprints, code review, mentoring and career growth.",
    },
    mentoring: {
      label: "Volunteer mentoring",
      metric: "6 people",
      text: "I've mentored, as a volunteer, people starting their careers and switching into tech: study plans, a real project and code review. Opening doors for people who are starting out is the work I'm proudest of.",
      outcome: "One of them landed a full-time job",
    },
  },
  approach: {
    title: "How I work",
    subtitle: "Three habits I bring to any team: seeing the whole flow, using AI with method and never letting knowledge get lost.",
    fullstack: {
      label: "End to end",
      title: "From the click to the database",
      text: "I don't stop at the component: I work across the whole flow, from the React or Vue frontend to the NestJS BFF and the Laravel API. Understanding the full chain prevents bugs that live between layers.",
      layers: [
        { name: "Front", tech: "React · Vue" },
        { name: "BFF", tech: "NestJS" },
        { name: "API", tech: "Laravel" },
      ],
    },
    ai: {
      label: "AI in development",
      title: "AI First, with method",
      text: "I led my squad's AI First initiative: I built a kit of agents, skills and rules that cut the impact analysis of a task from ~4h to ~30min.",
      before: "4h",
      after: "30min",
    },
    secondBrain: {
      label: "Second brain",
      title: "Long-term memory for my AI agents",
      text: "I built a hub-first knowledge base in Obsidian, connected to my agents through MCP. Decisions, incidents and business rules become context: before acting, the AI checks the topic's hub instead of starting from scratch.",
      hub: "Hub",
      nodes: ["Decisions", "Incidents", "Rules", "Career", "Projects", "Mentoring"],
    },
  },
  stack: { label: "Everyday stack" },
  experience: {
    title: "Experience",
    subtitle: "7+ years shipping web products to production.",
    items: [
      {
        company: "Soluevo",
        context: "contracted to Voomp (Cogna group)",
        period: "Oct 2025 – now",
        roles: [{ title: "Senior Frontend Engineer" }],
        bullets: [
          "I work end to end across Front → BFF → API on compliance, payment and financial reporting flows of a creator platform.",
          "One of the main developers of the KYC onboarding journey; built the reports hub and the Integrations module.",
          "Instrumented the entire platform with Sentry, from the dashboard to checkout: 32k+ previously silent errors tracked in 3 months, giving the team visibility into sensitive spots and a more robust product.",
          "Fixed an authorization flaw that exposed data across accounts.",
          "Led the squad's AI First initiative with an agent kit that cut impact analysis from ~4h to ~30min.",
          "Volunteer mentor at Soluevo, guiding people starting their careers and switching into tech with a growth roadmap, a real project and code review.",
        ],
        stack: ["React", "Next.js", "Vue", "TypeScript", "NestJS", "Laravel", "Sentry"],
      },
      {
        company: "Sumé Tecnologia",
        href: "https://www.sumetecnologia.com.br/",
        period: "Jan 2024 – Sep 2025",
        roles: [
          { title: "Frontend Tech Leader", period: "May 2024 – Sep 2025" },
          { title: "Frontend Developer", period: "Jan 2024 – May 2024" },
        ],
        bullets: [
          "Led a team of 7 frontend developers: sprints, code review, mentoring and career development.",
          "Designed the micro frontend architecture (Next.js and TypeScript) with centralized authentication via Keycloak.",
          "Delivered Sonar (GovTech integrated with Rio de Janeiro's Public Prosecutor's Office) and real-time WhatsApp automation apps with WebSockets.",
        ],
        stack: ["React", "Next.js", "TypeScript", "Chakra UI", "Tailwind", "Keycloak", "WebSockets"],
      },
      {
        company: "Hivegroup",
        href: "https://www.hivegroup.com.br/",
        period: "Jul 2021 – May 2024",
        roles: [
          { title: "Software Developer", period: "2023 – 2024" },
          { title: "Frontend Developer", period: "2021 – 2023" },
        ],
        bullets: [
          "Built products in Vue/Nuxt and React/Next.js for clients such as Claro, Merz Aesthetics and Grupo Marbella.",
          "Highlights: a financial management system with permission control and an internal project manager that replaced ClickUp and Jira.",
        ],
        stack: ["Vue", "Nuxt", "React", "Next.js", "TypeScript", "Tailwind", "WordPress"],
      },
      {
        company: "Freelancer",
        period: "Apr 2019 – Jul 2021",
        roles: [{ title: "Frontend Developer" }],
        bullets: ["Websites, e-commerce stores and landing pages with WordPress, PHP and JavaScript, from Figma design to launch."],
        stack: ["JavaScript", "PHP", "WordPress", "Figma"],
      },
    ],
  },
  projects: {
    title: "Projects",
    subtitle: "Real work, from products in production to freelance.",
    visit: "Visit project",
    confidential: "Private code",
    items: [
      {
        name: "Creator platform · Voomp",
        kind: "Product in production",
        description:
          "KYC onboarding with digital signature, financial reports hub and Integrations module, with observability through Sentry.",
        stack: ["React", "NestJS", "Laravel", "Sentry"],
        href: "https://adm.voompcreators.com.br/",
        image: "/projects/voomp-creators.png",
        confidential: true,
      },
      {
        name: "Livraria Astronauta",
        kind: "Freelance · 2026",
        description: "Online bookstore built for a client, with catalog, search and fast product pages.",
        stack: ["Next.js 16", "React 19", "Tailwind"],
        href: "https://livraria-astronauta.vercel.app",
        image: "/projects/livraria-astronauta.png",
      },
      {
        name: "Sonar · GovTech",
        kind: "Sumé Tecnologia",
        description:
          "Process management platform for municipalities, integrated with the Public Prosecutor's Office, with dashboards and interactive flowcharts.",
        stack: ["Next.js", "React Flow", "Keycloak"],
        confidential: true,
      },
    ],
  },
  contact: {
    title: "Shall we build something together?",
    text: "I'm open to Senior Frontend Engineer roles, remote. Reach me by email or on LinkedIn.",
    email: "tryelson_henrique@hotmail.com",
    copy: "Copy email",
    copied: "Copied!",
    linkedin: "LinkedIn",
    github: "GitHub",
  },
  footer: { built: "Built with Next.js, Tailwind and Motion." },
};
