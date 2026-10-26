"use client";

import { cn } from "@/lib/cn";
import { useInView } from "./use-in-view";

interface RevealProps {
  delay?: number;
  className?: string;
  children: React.ReactNode;
}

export function Reveal({ delay = 0, className, children }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);

  return (
    <div ref={ref} data-shown={inView || undefined} className={cn("reveal", className)} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}
