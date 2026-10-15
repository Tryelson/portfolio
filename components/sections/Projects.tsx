"use client";

import Image from "next/image";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import { ArrowUpRight, Lock } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import type { Dictionary, Project } from "@/content/types";

const placeholders = [
  "from-brand/40 via-brand-2/20 to-transparent",
  "from-brand-3/40 via-brand/20 to-transparent",
  "from-brand-2/40 via-brand-3/20 to-transparent",
];

function TiltCard({ project, index, t }: { project: Project; index: number; t: Dictionary["projects"] }) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(y, [0, 1], [7, -7]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-7, 7]), { stiffness: 200, damping: 20 });

  const onMove = (e: React.PointerEvent<HTMLElement>) => {
    if (reduce || e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };
  const onLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  const Wrapper = project.href ? motion.a : motion.article;
  const linkProps = project.href ? { href: project.href, target: "_blank", rel: "noopener" } : {};

  return (
    <Wrapper
      {...linkProps}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface/70 backdrop-blur-md transition-colors hover:border-brand/40"
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-line">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover object-top transition duration-700 group-hover:scale-105"
          />
        ) : (
          <div className={`absolute inset-0 bg-linear-to-br ${placeholders[index % placeholders.length]}`}>
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage: "radial-gradient(rgb(255 255 255 / 0.25) 1px, transparent 1px)",
                backgroundSize: "18px 18px",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center px-6 text-center font-display text-2xl font-bold text-fg/90">
              {project.name.split(" · ")[0]}
            </div>
          </div>
        )}
        {project.confidential && (
          <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full border border-line bg-ink/70 px-2.5 py-1 text-xs text-muted backdrop-blur">
            <Lock className="h-3 w-3" />
            {t.confidential}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-xs uppercase tracking-wider text-brand">{project.kind}</p>
        <h3 className="mt-2 flex items-center gap-1 font-display text-xl font-bold text-fg">
          {project.name}
          {project.href && <ArrowUpRight className="h-5 w-5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span key={tech} className="rounded-full border border-line bg-white/[0.03] px-3 py-1 font-mono text-xs text-muted">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

export default function Projects({ t }: { t: Dictionary["projects"] }) {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-24 md:px-8">
      <Reveal>
        <h2 className="font-display text-4xl font-bold tracking-tight text-fg md:text-5xl">{t.title}</h2>
        <p className="mt-3 text-lg text-muted">{t.subtitle}</p>
      </Reveal>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {t.items.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.1} className="h-full">
            <TiltCard project={project} index={i} t={t} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
