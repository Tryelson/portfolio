"use client";

import { motion, useReducedMotion } from "motion/react";

export default function BrainGraph({ hub, nodes }: { hub: string; nodes: string[] }) {
  const reduce = useReducedMotion();
  const points = nodes.map((label, i) => {
    const angle = (-90 + (360 / nodes.length) * i) * (Math.PI / 180);
    return { label, x: 50 + 36 * Math.cos(angle), y: 50 + 38 * Math.sin(angle) };
  });

  return (
    <div aria-hidden className="relative h-64 w-full">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {points.map((p, i) => (
          <motion.line
            key={p.label}
            x1="50"
            y1="50"
            x2={p.x}
            y2={p.y}
            stroke="url(#brain-line)"
            strokeWidth="0.6"
            vectorEffect="non-scaling-stroke"
            strokeDasharray="4 4"
            strokeOpacity={0.7}
            initial={reduce ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            animate={reduce ? undefined : { strokeDashoffset: [0, -16] }}
            viewport={{ once: true }}
            transition={{
              opacity: { duration: 0.8, delay: 0.2 + i * 0.1 },
              strokeDashoffset: { duration: 1.6, repeat: Infinity, ease: "linear" },
            }}
          />
        ))}
        <defs>
          <linearGradient id="brain-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#2dd4bf" />
            <stop offset="1" stopColor="#a78bfa" />
          </linearGradient>
        </defs>
      </svg>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {!reduce && <span className="absolute inset-0 animate-ping rounded-full bg-brand/30" />}
        <span className="relative flex h-16 w-16 items-center justify-center rounded-full border border-brand/50 bg-linear-to-br from-brand/30 to-brand-3/30 font-display text-sm font-bold text-fg shadow-[0_0_40px_-6px_rgb(45_212_191/0.7)]">
          {hub}
        </span>
      </div>

      {points.map((p, i) => (
        <motion.span
          key={p.label}
          style={{ left: `${p.x}%`, top: `${p.y}%` }}
          className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-line bg-surface-2 px-3 py-1 text-xs text-fg"
          initial={reduce ? false : { opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
        >
          {p.label}
        </motion.span>
      ))}
    </div>
  );
}
