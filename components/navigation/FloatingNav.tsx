"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { Languages } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Dictionary, Locale } from "@/content";

export default function FloatingNav({ t, locale }: { t: Dictionary["nav"]; locale: Locale }) {
  const reduce = useReducedMotion();
  const links = [
    { id: "highlights", label: t.about },
    { id: "approach", label: t.approach },
    { id: "experience", label: t.experience },
    { id: "projects", label: t.projects },
    { id: "contact", label: t.contact },
  ];
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const id of ["top", "highlights", "approach", "experience", "projects", "contact"]) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  const other: Locale = locale === "pt" ? "en" : "pt";

  return (
    <motion.nav
      initial={reduce ? false : { y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-3"
    >
      <div className="flex items-center gap-1 rounded-full border border-line bg-surface/70 p-1.5 shadow-[0_8px_32px_-12px_rgb(0_0_0/0.6)] backdrop-blur-xl">
        <a href="#top" className="rounded-full px-3 py-1.5 font-display text-sm font-extrabold text-fg" aria-label="Tryelson Marques">
          TM<span className="text-brand">.</span>
        </a>
        <ul className="hidden items-center sm:flex">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={cn(
                  "relative block rounded-full px-3.5 py-1.5 text-sm transition-colors",
                  active === link.id ? "text-fg" : "text-muted hover:text-fg",
                )}
              >
                {active === link.id && (
                  <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-full bg-white/10" transition={{ type: "spring", bounce: 0.25, duration: 0.5 }} />
                )}
                <span className="relative">{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
        <Link
          href={`/${other}`}
          hrefLang={other === "pt" ? "pt-BR" : "en"}
          className="ml-1 inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-xs font-semibold text-fg transition hover:border-brand/50 hover:text-brand"
        >
          <Languages className="h-3.5 w-3.5" />
          {t.switchTo}
        </Link>
      </div>
    </motion.nav>
  );
}
