"use client";

import { useState } from "react";
import { ArrowRight, Link2 } from "lucide-react";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";
import { QrCode } from "../qr-code";
import { ButtonLink } from "../ui/button-link";
import { SectionHeading } from "../ui/section-heading";
import { Container } from "../ui/container";
import { Reveal } from "../motion/reveal";

type Dots = "square" | "rounded" | "dots";

const INKS = [
  { name: "Ink", fg: "#0a0a0a" },
  { name: "Orange", fg: "#ea580c" },
  { name: "Navy", fg: "#1e3a8a" },
  { name: "Forest", fg: "#166534" },
  { name: "Plum", fg: "#6b21a8" },
];

const PAPERS = [
  { name: "White", bg: "#ffffff" },
  { name: "Cream", bg: "#faf6ee" },
  { name: "Mint", bg: "#ecfdf5" },
  { name: "Sky", bg: "#eff6ff" },
];

const DOTS: { value: Dots; label: string }[] = [
  { value: "rounded", label: "Rounded" },
  { value: "dots", label: "Dots" },
  { value: "square", label: "Square" },
];

export function Playground() {
  const [url, setUrl] = useState("https://your-brand.com/menu");
  const [ink, setInk] = useState(INKS[1]);
  const [paper, setPaper] = useState(PAPERS[0]);
  const [dots, setDots] = useState<Dots>("rounded");
  const value = url.trim() || site.url;

  return (
    <section id="studio" className="scroll-mt-24 section-y">
      <Container>
        <SectionHeading
          eyebrow="Try it now"
          title="Design a code before you even sign up."
          description="Type any link, pick a look, and point your phone at it. It's a real, working code."
        />

        <Reveal delay={120} className="mt-16">
          <div className="panel grid overflow-hidden lg:grid-cols-[1fr_1.05fr]">
            <div className="space-y-8 border-b border-line p-6 sm:p-10 lg:border-b-0 lg:border-r">
              <Field label="Destination">
                <div className="flex h-12 items-center gap-3 rounded-xl border border-line-strong bg-base px-4 transition-colors focus-within:border-fg-2">
                  <Link2 size={16} className="shrink-0 text-muted" />
                  <input
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    spellCheck={false}
                    aria-label="Destination link"
                    className="w-full bg-transparent font-mono text-[14px] text-fg outline-none placeholder:text-muted"
                    placeholder="https://"
                  />
                </div>
              </Field>

              <Field label="Color">
                <div className="flex flex-wrap gap-2">
                  {INKS.map((option) => (
                    <Chip key={option.name} active={ink.name === option.name} onClick={() => setInk(option)}>
                      <span className="h-3.5 w-3.5 rounded-full ring-1 ring-white/20" style={{ background: option.fg }} />
                      {option.name}
                    </Chip>
                  ))}
                </div>
              </Field>

              <Field label="Background">
                <div className="flex flex-wrap gap-2">
                  {PAPERS.map((option) => (
                    <Chip key={option.name} active={paper.name === option.name} onClick={() => setPaper(option)}>
                      <span className="h-3.5 w-3.5 rounded-full ring-1 ring-white/20" style={{ background: option.bg }} />
                      {option.name}
                    </Chip>
                  ))}
                </div>
              </Field>

              <Field label="Dots">
                <div className="inline-flex rounded-full border border-line-strong bg-base p-1" role="radiogroup" aria-label="Dot style">
                  {DOTS.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      role="radio"
                      aria-checked={dots === option.value}
                      onClick={() => setDots(option.value)}
                      className={cn("rounded-full px-4 py-1.5 text-[13px] font-medium transition-colors", dots === option.value ? "bg-fg text-base" : "text-fg-2 hover:text-fg")}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </Field>

              <div className="border-t border-line pt-8">
                <p className="max-w-sm text-[14.5px] leading-relaxed text-fg-2">Add your logo, corner styles, printable cards and live analytics in the full studio.</p>
                <ButtonLink href={site.signUpUrl} className="mt-5">
                  Continue in QR Studio
                  <ArrowRight size={15} />
                </ButtonLink>
              </div>
            </div>

            <div className="relative flex items-center justify-center bg-base-2 p-10 sm:p-16">
              <div className="relative w-full max-w-[320px]">
                <div className="rounded-[22px] p-5 transition-colors duration-500" style={{ background: paper.bg }}>
                  <QrCode value={value} fg={ink.fg} bg={paper.bg} dots={dots} className="w-full" title="Live QR code preview" />
                </div>
                <p className="mt-4 truncate text-center font-mono text-[12px] text-muted">{value}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-3 text-[13px] font-medium text-fg-2">{label}</p>
      {children}
    </div>
  );
}

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "inline-flex h-9 items-center gap-2 rounded-full border px-3.5 text-[13px] font-medium transition-colors",
        active ? "border-fg bg-fg/[0.06] text-fg" : "border-line-strong text-fg-2 hover:border-fg/30 hover:text-fg"
      )}
    >
      {children}
    </button>
  );
}
