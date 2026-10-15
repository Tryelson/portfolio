export type Locale = "pt" | "en";

export type Experience = {
  company: string;
  context?: string;
  href?: string;
  period: string;
  roles: { title: string; period?: string }[];
  bullets: string[];
  stack: string[];
};

export type Project = {
  name: string;
  kind: string;
  description: string;
  stack: string[];
  href?: string;
  image?: string;
  confidential?: boolean;
};

export type Dictionary = {
  meta: { title: string; description: string };
  nav: { about: string; approach: string; experience: string; projects: string; contact: string; switchTo: string };
  hero: {
    available: string;
    hello: string;
    role: string;
    rotating: string[];
    tagline: string;
    location: string;
    localTime: string;
    resume: string;
    resumeHref: string;
    contact: string;
  };
  highlights: {
    title: string;
    subtitle: string;
    observability: { label: string; metric: string; title: string; text: string };
    leadership: { label: string; metric: string; text: string };
    mentoring: { label: string; metric: string; text: string; outcome: string };
  };
  approach: {
    title: string;
    subtitle: string;
    fullstack: { label: string; title: string; text: string; layers: { name: string; tech: string }[] };
    ai: { label: string; title: string; text: string; before: string; after: string };
    secondBrain: { label: string; title: string; text: string; hub: string; nodes: string[] };
  };
  stack: { label: string };
  experience: { title: string; subtitle: string; items: Experience[] };
  projects: { title: string; subtitle: string; visit: string; confidential: string; items: Project[] };
  contact: { title: string; text: string; email: string; copy: string; copied: string; linkedin: string; github: string };
  footer: { built: string };
};
