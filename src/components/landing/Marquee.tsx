"use client";

import { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  speed?: number;
  pauseOnHover?: boolean;
  direction?: "left" | "right";
  className?: string;
}

const Marquee = ({
  children,
  speed = 30,
  pauseOnHover = true,
  direction = "left",
  className = "",
}: MarqueeProps) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className={`flex gap-6 ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
        style={{
          animation: `marquee-${direction} ${speed}s linear infinite`,
        }}
      >
        <div className="flex gap-6 shrink-0">{children}</div>
        <div className="flex gap-6 shrink-0">{children}</div>
      </div>
    </div>
  );
};

export default Marquee;
