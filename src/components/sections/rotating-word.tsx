"use client";

import { useEffect, useState } from "react";

export function RotatingWord({ words, interval = 2200 }: { words: string[]; interval?: number }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => window.clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span className="relative inline-grid">
      <span aria-hidden className="invisible col-start-1 row-start-1 whitespace-nowrap">
        {words.reduce((a, b) => (b.length > a.length ? b : a))}
      </span>
      <span key={index} className="toast-in col-start-1 row-start-1 whitespace-nowrap text-brand">
        {words[index]}
      </span>
      <span className="sr-only">{words.join(", ")}</span>
    </span>
  );
}
