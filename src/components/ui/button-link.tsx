import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "brand" | "text";
type Size = "sm" | "md" | "lg" | "xl";

const VARIANTS: Record<Variant, string> = {
  primary: "bg-brand text-white hover:bg-brand-hover",
  secondary: "border border-line-strong bg-transparent text-fg hover:bg-fg/[0.06]",
  brand: "bg-brand text-white hover:bg-brand-hover",
  text: "text-fg-2 hover:text-fg",
};

const SIZES: Record<Size, string> = {
  sm: "h-8 px-3.5 text-[13px]",
  md: "h-10 px-4.5 text-[14px]",
  lg: "h-12 px-6 text-[15px]",
  xl: "h-14 px-8 text-[16px]",
};

interface ButtonLinkProps {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}

export function ButtonLink({ href, variant = "primary", size = "md", className, children }: ButtonLinkProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-colors duration-200",
    VARIANTS[variant],
    variant !== "text" && SIZES[size],
    className
  );

  if (href.startsWith("/") || href.startsWith("#")) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
}
