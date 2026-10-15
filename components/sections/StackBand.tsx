"use client";

import { useReducedMotion } from "motion/react";

const stack = [
  "React", "Next.js", "TypeScript", "Vue", "Nuxt", "Tailwind", "NestJS", "Node.js",
  "Laravel", "Sentry", "Jest", "Testing Library", "Keycloak", "WebSockets", "Figma", "Azure DevOps",
];

export default function StackBand({ label }: { label: string }) {
  const reduce = useReducedMotion();

  return (
    <section aria-label={label} className="border-y border-line bg-surface/40 py-8 backdrop-blur-sm">
      <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted">{label}</p>
      <div
        className="overflow-hidden"
        style={{ maskImage: "linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)" }}
      >
        {[0, 1].map((row) => {
          const items = row ? [...stack].reverse() : stack;
          return (
            <div
              key={row}
              className="flex w-max gap-3 py-1.5"
              style={{ animation: reduce ? undefined : `marquee ${row ? 46 : 38}s linear infinite ${row ? "reverse" : ""}` }}
            >
              {items.concat(items).map((tech, i) => (
                <span key={`${tech}-${i}`} className="rounded-full border border-line bg-surface-2 px-4 py-2 text-sm text-fg">
                  {tech}
                </span>
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
}
