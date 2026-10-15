"use client";

import { useState } from "react";
import { Check, Copy, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import Reveal from "@/components/ui/Reveal";
import type { Dictionary } from "@/content";

export default function Contact({ t, footer }: { t: Dictionary["contact"]; footer: Dictionary["footer"] }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(t.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${t.email}`;
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 pb-10 pt-24 md:px-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-line bg-surface/70 px-6 py-16 text-center backdrop-blur-md md:px-16 md:py-24">
          <div aria-hidden className="absolute -top-32 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-brand/25 blur-[100px]" />
          <h2 className="relative font-display text-4xl font-extrabold tracking-tight text-fg md:text-6xl">
            <span className="text-gradient animate-shine">{t.title}</span>
          </h2>
          <p className="relative mx-auto mt-5 max-w-xl text-lg text-muted">{t.text}</p>

          <div className="relative mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`mailto:${t.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-fg px-6 py-3.5 text-sm font-semibold text-ink transition hover:bg-white hover:shadow-[0_0_40px_-8px_rgb(45_212_191/0.8)]"
            >
              <Mail className="h-4 w-4" />
              {t.email}
            </a>
            <button
              type="button"
              onClick={copy}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white/5 px-5 py-3.5 text-sm font-semibold text-fg transition hover:border-brand/50 hover:bg-brand/10"
            >
              {copied ? <Check className="h-4 w-4 text-brand" /> : <Copy className="h-4 w-4" />}
              <span aria-live="polite">{copied ? t.copied : t.copy}</span>
            </button>
          </div>

          <div className="relative mt-8 flex items-center justify-center gap-6 text-sm">
            <a href="https://www.linkedin.com/in/tryelson-marques/" target="_blank" rel="noopener" className="inline-flex items-center gap-2 text-muted transition hover:text-fg">
              <LinkedinIcon className="h-4 w-4" />
              {t.linkedin}
            </a>
            <a href="https://github.com/Tryelson" target="_blank" rel="noopener" className="inline-flex items-center gap-2 text-muted transition hover:text-fg">
              <GithubIcon className="h-4 w-4" />
              {t.github}
            </a>
          </div>
        </div>
      </Reveal>

      <footer className="mt-10 flex flex-col items-center justify-between gap-2 text-xs text-muted sm:flex-row">
        <span>© {new Date().getFullYear()} Tryelson Marques</span>
        <span>{footer.built}</span>
      </footer>
    </section>
  );
}
