"use client";

import { motion, useReducedMotion } from "motion/react";
import { Activity, BadgeCheck, HeartHandshake, Users } from "lucide-react";
import AnimatedNumber from "@/components/ui/AnimatedNumber";
import GlowCard from "@/components/ui/GlowCard";
import Reveal from "@/components/ui/Reveal";
import type { Dictionary } from "@/content";

const eventBars = [34, 52, 41, 68, 47, 82, 58, 74, 39, 63, 88, 56, 45, 71];

function Label({ icon: Icon, children }: { icon: typeof Activity; children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted">
      <Icon className="h-4 w-4 text-brand" />
      {children}
    </div>
  );
}

export default function Highlights({ t }: { t: Dictionary["highlights"] }) {
  const reduce = useReducedMotion();

  return (
    <section id="highlights" className="mx-auto max-w-6xl px-5 pb-24 pt-12 md:px-8 md:py-24">
      <Reveal>
        <h2 className="font-display text-4xl font-bold tracking-tight text-fg md:text-5xl">{t.title}</h2>
        <p className="mt-3 text-lg text-muted">{t.subtitle}</p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[minmax(220px,auto)]">
        <Reveal className="md:col-span-4 md:row-span-2">
          <GlowCard className="h-full p-8">
            <div className="flex h-full flex-col">
              <Label icon={Activity}>{t.observability.label}</Label>
              <AnimatedNumber value={t.observability.metric} className="block font-display text-6xl font-extrabold text-gradient sm:text-7xl md:text-8xl" />
              <p className="mt-2 text-xl font-semibold text-fg md:text-2xl">{t.observability.title}</p>
              <p className="mt-4 max-w-xl leading-relaxed text-muted">{t.observability.text}</p>
              <div aria-hidden className="mt-auto flex h-28 items-end gap-2 pt-8 md:h-44">
                {eventBars.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={reduce ? false : { height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    className="flex-1 rounded-t-md bg-linear-to-t from-brand/15 via-brand-2/40 to-brand-3/70"
                  />
                ))}
              </div>
            </div>
          </GlowCard>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-2">
          <GlowCard className="h-full">
            <Label icon={Users}>{t.leadership.label}</Label>
            <AnimatedNumber value={t.leadership.metric} className="block font-display text-5xl font-extrabold text-fg" />
            <p className="mt-3 text-sm leading-relaxed text-muted">{t.leadership.text}</p>
          </GlowCard>
        </Reveal>

        <Reveal delay={0.15} className="md:col-span-2">
          <GlowCard className="h-full">
            <div className="flex h-full flex-col">
              <Label icon={HeartHandshake}>{t.mentoring.label}</Label>
              <AnimatedNumber value={t.mentoring.metric} className="block font-display text-5xl font-extrabold text-fg" />
              <p className="mt-3 text-sm leading-relaxed text-muted">{t.mentoring.text}</p>
              <div className="mt-auto pt-5">
                <p className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1.5 text-xs font-medium text-brand">
                  <BadgeCheck className="h-4 w-4 shrink-0" />
                  {t.mentoring.outcome}
                </p>
              </div>
            </div>
          </GlowCard>
        </Reveal>
      </div>
    </section>
  );
}
