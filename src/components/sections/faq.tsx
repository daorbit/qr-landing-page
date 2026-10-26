"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/faqs";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";
import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 section-y">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <div>
          <SectionHeading align="left" eyebrow="FAQ" title="Questions, answered." />
          <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-fg-2">
            Still curious?{" "}
            <a href={`mailto:${site.supportEmail}`} className="font-medium text-fg underline underline-offset-4 hover:text-brand">
              Write to us
            </a>
            . A real person replies.
          </p>
        </div>

        <ul className="space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.q} className={cn("rounded-2xl border transition-colors duration-300", isOpen ? "border-brand/40 bg-brand/[0.04]" : "border-line bg-fg/[0.02] hover:border-line-strong")}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                >
                  <span className="text-[16px] font-medium leading-snug">{item.q}</span>
                  <span className={cn("flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-colors", isOpen ? "border-brand bg-brand text-white" : "border-line-strong text-fg-2")}>
                    <Plus size={14} className={cn("transition-transform duration-300", isOpen && "rotate-45")} />
                  </span>
                </button>
                <div className="grid transition-[grid-template-rows] duration-300 ease-out" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-[15px] leading-relaxed text-fg-2 sm:px-6">{item.a}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
