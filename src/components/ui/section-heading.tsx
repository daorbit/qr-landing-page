import { cn } from "@/lib/cn";
import { Reveal } from "../motion/reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeading({ eyebrow, title, description, align = "left", className }: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <Reveal className={cn(centered ? "mx-auto max-w-3xl text-center" : "grid gap-6 lg:grid-cols-[1fr_minmax(0,28rem)] lg:items-end", className)}>
      <div>
        <p className={cn("flex items-center gap-2 text-[13px] font-medium text-fg-2", centered && "justify-center")}>
          <span className="h-1.5 w-1.5 rounded-[2px] bg-brand" />
          {eyebrow}
        </p>
        <h2 className="mt-5 max-w-3xl text-balance text-h2 font-medium leading-[1.05] tracking-[-0.04em] text-fg">{title}</h2>
      </div>
      {description && <p className={cn("text-pretty text-lead leading-relaxed text-fg-2", centered && "mx-auto mt-5 max-w-xl")}>{description}</p>}
    </Reveal>
  );
}
