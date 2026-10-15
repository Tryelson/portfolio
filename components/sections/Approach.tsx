"use client";

import { motion, useReducedMotion } from "motion/react";
import BrainGraph from "@/components/ui/BrainGraph";
import Reveal from "@/components/ui/Reveal";
import type { Dictionary } from "@/content";

const ease = [0.22, 1, 0.36, 1] as const;

function FlowVisual({ layers }: { layers: Dictionary["approach"]["fullstack"]["layers"] }) {
  const reduce = useReducedMotion();
  return (
    <div aria-hidden className="relative flex max-w-md items-center justify-between">
      <div className="absolute inset-x-8 top-1/2 h-px -translate-y-1/2 bg-line" />
      {!reduce && (
        <motion.span
          className="absolute top-1/2 h-1.5 w-12 -translate-y-1/2 rounded-full bg-linear-to-r from-transparent via-brand to-transparent"
          animate={{ left: ["4%", "84%"] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
        />
      )}
      {layers.map((layer) => (
        <div key={layer.name} className="relative z-10 rounded-2xl border border-line bg-surface-2 px-5 py-3 text-center">
          <div className="font-display text-base font-bold text-fg">{layer.name}</div>
          <div className="text-xs text-muted">{layer.tech}</div>
        </div>
      ))}
    </div>
  );
}

function TimeVisual({ before, after }: { before: string; after: string }) {
  const reduce = useReducedMotion();
  return (
    <div aria-hidden className="max-w-md space-y-3">
      <div className="flex items-center gap-3">
        <span className="w-14 font-mono text-sm text-muted line-through decoration-rose-400/70">{before}</span>
        <motion.div
          className="h-3 rounded-full bg-linear-to-r from-rose-500/40 to-rose-400/70"
          initial={reduce ? false : { width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease }}
        />
      </div>
      <div className="flex items-center gap-3">
        <span className="w-14 font-mono text-sm font-semibold text-brand">{after}</span>
        <motion.div
          className="h-3 rounded-full bg-linear-to-r from-brand to-brand-2"
          initial={reduce ? false : { width: 0 }}
          whileInView={{ width: "12.5%" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5, ease }}
        />
      </div>
    </div>
  );
}

export default function Approach({ t }: { t: Dictionary["approach"] }) {
  const items = [
    { ...t.fullstack, visual: <FlowVisual layers={t.fullstack.layers} /> },
    { ...t.ai, visual: <TimeVisual before={t.ai.before} after={t.ai.after} /> },
    { ...t.secondBrain, visual: <BrainGraph hub={t.secondBrain.hub} nodes={t.secondBrain.nodes} /> },
  ];

  return (
    <section id="approach" className="mx-auto max-w-6xl px-5 py-24 md:px-8">
      <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <Reveal className="md:sticky md:top-28 md:self-start">
          <h2 className="font-display text-4xl font-bold tracking-tight text-fg md:text-5xl">{t.title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">{t.subtitle}</p>
        </Reveal>

        <ol className="border-t border-line">
          {items.map((item, i) => (
            <li key={item.label} className="group border-b border-line py-10 first:pt-8">
              <Reveal>
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-muted">
                  <span className="font-mono text-sm text-brand">{String(i + 1).padStart(2, "0")}</span>
                  <span className="h-px w-8 bg-line transition-all duration-500 group-hover:w-14 group-hover:bg-brand" />
                  {item.label}
                </div>
                <h3 className="mt-4 font-display text-2xl font-bold text-fg md:text-3xl">{item.title}</h3>
                <p className="mt-3 max-w-xl leading-relaxed text-muted">{item.text}</p>
                <div className="mt-8">{item.visual}</div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
