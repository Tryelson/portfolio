"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowDownToLine, MapPin, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import LocalTime from "@/components/ui/LocalTime";
import type { Dictionary } from "@/content";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero({ t, photo }: { t: Dictionary["hero"]; photo: string | null }) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % t.rotating.length), 2400);
    return () => clearInterval(id);
  }, [reduce, t.rotating.length]);

  const item = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 28, filter: "blur(8px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.8, delay, ease },
  });

  return (
    <section id="top" className="relative mx-auto flex max-w-6xl flex-col justify-center px-5 pb-8 pt-28 md:min-h-[100svh] md:px-8 md:pb-16 md:pt-32">
      <div className="grid items-center gap-12 md:grid-cols-[1.4fr_1fr]">
        <div>
          <motion.div {...item(0)} className="mb-6 flex items-center gap-3">
            {photo && (
              <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-surface-2 ring-2 ring-brand/40 ring-offset-2 ring-offset-ink md:hidden">
                <Image src={photo} alt="Tryelson Marques" fill priority sizes="64px" className="object-cover" />
              </span>
            )}
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
              </span>
              {t.available}
            </span>
          </motion.div>

          <motion.p {...item(0.08)} className="text-lg text-muted">
            {t.hello}
          </motion.p>
          <motion.h1
            {...item(0.16)}
            className="font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-fg sm:text-6xl md:text-7xl"
          >
            Tryelson
            <br />
            <span className="text-gradient animate-shine">Marques</span>
          </motion.h1>

          <motion.div {...item(0.24)} className="mt-5 flex flex-wrap items-baseline gap-x-2 text-xl font-semibold text-fg md:text-2xl">
            <span>{t.role}</span>
            <span className="hidden text-muted sm:inline">·</span>
            <span className="relative inline-flex h-[1.3em] min-w-[12ch] basis-full overflow-hidden text-brand sm:basis-auto">
              <AnimatePresence mode="wait">
                <motion.span
                  key={t.rotating[index]}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.45, ease }}
                  className="whitespace-nowrap"
                >
                  {t.rotating[index]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.div>

          <motion.p {...item(0.32)} className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            {t.tagline}
          </motion.p>

          <motion.div {...item(0.4)} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={t.resumeHref}
              download
              className="group inline-flex items-center gap-2 rounded-full bg-fg px-5 py-3 text-sm font-semibold text-ink transition hover:bg-white hover:shadow-[0_0_40px_-8px_rgb(45_212_191/0.8)]"
            >
              <ArrowDownToLine className="h-4 w-4 transition group-hover:translate-y-0.5" />
              {t.resume}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white/5 px-5 py-3 text-sm font-semibold text-fg backdrop-blur transition hover:border-brand/50 hover:bg-brand/10"
            >
              <Send className="h-4 w-4" />
              {t.contact}
            </a>
            <div className="ml-1 flex items-center gap-1">
              <a href="https://github.com/Tryelson" target="_blank" rel="noopener" aria-label="GitHub" className="rounded-full p-2.5 text-muted transition hover:bg-white/5 hover:text-fg">
                <GithubIcon className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/tryelson-marques/" target="_blank" rel="noopener" aria-label="LinkedIn" className="rounded-full p-2.5 text-muted transition hover:bg-white/5 hover:text-fg">
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          <motion.p {...item(0.48)} className="mt-6 inline-flex items-center gap-1.5 text-sm text-muted">
            <MapPin className="h-4 w-4" />
            {t.location} ·
            <LocalTime className="tabular-nums text-fg" />
            {t.localTime}
          </motion.p>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.85, rotate: -4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2, ease }}
          className="relative mx-auto hidden aspect-square w-full max-w-[22rem] md:block"
        >
          <div className="absolute -inset-6 rounded-full bg-linear-to-tr from-brand/40 via-brand-2/20 to-brand-3/40 blur-3xl" />
          <div className="ring-spin absolute -inset-[3px] rounded-[2.5rem]" />
          <div className="relative h-full w-full overflow-hidden rounded-[2.4rem] bg-surface-2">
            {photo ? (
              <Image src={photo} alt="Tryelson Marques" fill priority sizes="352px" className="object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-surface-2 to-ink font-display text-7xl font-extrabold text-gradient">
                TM
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
