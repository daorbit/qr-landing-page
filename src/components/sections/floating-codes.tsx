import { QrCode } from "../qr-code";
import { cn } from "@/lib/cn";

type Dots = "rounded" | "dots" | "square";

interface FloatingCode {
  top: string;
  left: string;
  size: number;
  dots: Dots;
  rotate: number;
  duration: number;
  delay: number;
  x: number;
  y: number;
  accent?: boolean;
  mobile?: boolean;
}

const CODES: FloatingCode[] = [
  { top: "8%", left: "4%", size: 78, dots: "rounded", rotate: -12, duration: 19, delay: 0, x: 16, y: -20, mobile: true },
  { top: "30%", left: "11%", size: 54, dots: "dots", rotate: 8, duration: 23, delay: -6, x: -12, y: 18 },
  { top: "58%", left: "3%", size: 96, dots: "square", rotate: 6, duration: 26, delay: -3, x: 14, y: -14, accent: true },
  { top: "80%", left: "16%", size: 60, dots: "rounded", rotate: -6, duration: 21, delay: -9, x: -16, y: -12, mobile: true },
  { top: "12%", left: "24%", size: 44, dots: "square", rotate: 14, duration: 24, delay: -12, x: 10, y: 16 },
  { top: "86%", left: "36%", size: 50, dots: "dots", rotate: -10, duration: 20, delay: -4, x: 12, y: -16 },
  { top: "6%", left: "70%", size: 58, dots: "dots", rotate: 10, duration: 22, delay: -8, x: -14, y: 18 },
  { top: "14%", left: "88%", size: 88, dots: "rounded", rotate: 12, duration: 25, delay: -2, x: -18, y: -14, accent: true, mobile: true },
  { top: "38%", left: "80%", size: 48, dots: "square", rotate: -8, duration: 19, delay: -11, x: 14, y: 14 },
  { top: "56%", left: "91%", size: 72, dots: "dots", rotate: -14, duration: 27, delay: -5, x: -12, y: -18 },
  { top: "82%", left: "76%", size: 64, dots: "rounded", rotate: 7, duration: 23, delay: -14, x: 16, y: -10, mobile: true },
  { top: "88%", left: "58%", size: 42, dots: "square", rotate: 16, duration: 18, delay: -7, x: -10, y: -14 },
];

export function FloatingCodes() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {CODES.map((code, i) => (
        <span
          key={i}
          className={cn("drift absolute block", "dark:blur-[2.5px]", code.accent ? "text-brand opacity-25 dark:opacity-[0.14]" : "text-fg opacity-[0.07] dark:opacity-[0.05]", !code.mobile && "hidden md:block")}
          style={{
            top: code.top,
            left: code.left,
            width: code.size,
            ["--drift-rotate" as string]: `${code.rotate}deg`,
            ["--drift-duration" as string]: `${code.duration}s`,
            ["--drift-delay" as string]: `${code.delay}s`,
            ["--drift-x" as string]: `${code.x}px`,
            ["--drift-y" as string]: `${code.y}px`,
          }}
        >
          <QrCode value={`qrstudio-${i}-${code.dots}`} fg="currentColor" bg="transparent" dots={code.dots} className="w-full" title="" />
        </span>
      ))}
    </div>
  );
}
