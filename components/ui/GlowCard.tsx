"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";

export default function GlowCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--gx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--gy", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-line bg-surface/70 p-6 backdrop-blur-md transition-colors duration-300 hover:border-white/15",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: "radial-gradient(420px circle at var(--gx, 50%) var(--gy, 50%), rgb(45 212 191 / 0.12), transparent 45%)",
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
}
