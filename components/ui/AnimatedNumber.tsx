"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export default function AnimatedNumber({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const match = value.match(/^(\D*)(\d+)(.*)$/);
  const prefix = match?.[1] ?? "";
  const target = match ? Number(match[2]) : 0;
  const suffix = match?.[3] ?? "";
  const hasNumber = Boolean(match);
  const [current, setCurrent] = useState(hasNumber && !reduce ? 0 : target);

  useEffect(() => {
    if (!hasNumber || !inView || reduce) return;
    const controls = animate(0, target, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setCurrent(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduce, target, hasNumber]);

  return (
    <span ref={ref} className={className}>
      {hasNumber ? `${prefix}${current}${suffix}` : value}
    </span>
  );
}
