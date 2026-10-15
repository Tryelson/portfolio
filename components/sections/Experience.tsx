"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import type { Dictionary } from "@/content";

export default function Experience({ t }: { t: Dictionary["experience"] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-24 md:px-8">
      <Reveal>
        <h2 className="font-display text-4xl font-bold tracking-tight text-fg md:text-5xl">{t.title}</h2>
        <p className="mt-3 text-lg text-muted">{t.subtitle}</p>
      </Reveal>

      <div ref={ref} className="relative mt-14 pl-8 md:pl-0">
        <div aria-hidden className="absolute bottom-0 left-[7px] top-0 w-px bg-line md:left-[calc(30%+7px)]" />
        <motion.div
          aria-hidden
          style={{ scaleY: progress }}
          className="absolute bottom-0 left-[7px] top-0 w-px origin-top bg-linear-to-b from-brand via-brand-2 to-brand-3 md:left-[calc(30%+7px)]"
        />

        <ol className="space-y-14">
          {t.items.map((exp) => (
            <li key={exp.company} className="relative md:grid md:grid-cols-[30%_1fr] md:gap-12">
              <span
                aria-hidden
                className="absolute -left-8 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-brand bg-ink shadow-[0_0_16px_rgb(45_212_191/0.6)] md:left-[30%]"
              />
              <Reveal className="mb-3 md:mb-0 md:pr-10 md:text-right">
                <p className="font-mono text-sm text-brand">{exp.period}</p>
                <h3 className="mt-1 font-display text-2xl font-bold text-fg">
                  {exp.href ? (
                    <a href={exp.href} target="_blank" rel="noopener" className="group inline-flex items-center gap-1 hover:text-brand">
                      {exp.company}
                      <ArrowUpRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
                    </a>
                  ) : (
                    exp.company
                  )}
                </h3>
                {exp.context && <p className="text-sm text-muted">{exp.context}</p>}
              </Reveal>

              <Reveal delay={0.1} className="md:pl-10">
                <div className="space-y-1">
                  {exp.roles.map((role) => (
                    <p key={role.title} className="font-semibold text-fg">
                      {role.title}
                      {role.period && <span className="ml-2 text-sm font-normal text-muted">{role.period}</span>}
                    </p>
                  ))}
                </div>
                <ul className="mt-4 space-y-2.5">
                  {exp.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 leading-relaxed text-muted">
                      <span aria-hidden className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-brand" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {exp.stack.map((tech) => (
                    <span key={tech} className="rounded-full border border-line bg-white/[0.03] px-3 py-1 font-mono text-xs text-muted">
                      {tech}
                    </span>
                  ))}
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
