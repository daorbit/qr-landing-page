"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Check, Link2 } from "lucide-react";
import { site } from "@/lib/site";
import { Container } from "../ui/container";
import { QrCode } from "../qr-code";
import { Reveal } from "../motion/reveal";
import { useInView } from "../motion/use-in-view";

const DESTINATIONS = ["menu-summer.pdf", "menu-autumn.pdf", "festive-specials", "menu-winter.pdf"];

export function DynamicLinks() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState(DESTINATIONS[0]);

  useEffect(() => {
    if (!inView || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setIndex((i) => (i + 1) % DESTINATIONS.length), 3200);
    return () => window.clearInterval(timer);
  }, [inView]);

  useEffect(() => {
    const target = DESTINATIONS[index];
    let i = 0;
    setTyped("");
    const timer = window.setInterval(() => {
      i += 1;
      setTyped(target.slice(0, i));
      if (i >= target.length) window.clearInterval(timer);
    }, 45);
    return () => window.clearInterval(timer);
  }, [index]);

  return (
    <section className="section-y">
      <Container className="grid items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <p className="flex items-center gap-2 text-[13px] font-medium text-fg-2">
            <span className="h-1.5 w-1.5 rounded-[2px] bg-brand" />
            Dynamic codes
          </p>
          <h2 className="mt-5 text-balance text-h2 font-medium leading-[1.05] tracking-[-0.04em] text-fg">Print once. Change the link whenever you like.</h2>
          <p className="mt-5 max-w-lg text-lead leading-relaxed text-fg-2">
            Every QR Studio code points to a short link you control. New menu, new campaign, new page: update it in a few seconds and every printed code follows.
          </p>
          <ul className="mt-8 space-y-3 text-[15px] text-fg-2">
            {["No reprinting, ever", "Scan history stays with the code", "Pause or protect a code at any time"].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-fg/[0.06] text-fg">
                  <Check size={12} strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={150}>
          <div ref={ref} className="panel relative p-6 sm:p-8">
            <div className="flex items-center gap-4">
              <div className="w-28 shrink-0 rounded-2xl bg-white p-2.5 sm:w-32">
                <QrCode value={site.url} fg="#0a0a0a" corner="#ff5a1f" dots="rounded" className="w-full" title="A printed QR code that never changes" />
              </div>
              <div className="min-w-0">
                <p className="text-[12px] text-muted">Printed code</p>
                <p className="mt-1 text-[17px] font-semibold">Table 12 · Osteria Verde</p>
                <p className="mt-1 flex items-center gap-1.5 text-[12.5px] text-good">
                  <span className="live-dot h-1.5 w-1.5 rounded-full bg-good" />
                  Active, never reprinted
                </p>
              </div>
            </div>

            <div className="my-6 flex items-center gap-3 text-muted">
              <span className="h-px flex-1 bg-line" />
              <ArrowRight size={14} />
              <span className="text-[12px]">points to</span>
              <span className="h-px flex-1 bg-line" />
            </div>

            <div className="flex h-14 items-center gap-3 rounded-2xl border border-line-strong bg-base px-4">
              <Link2 size={17} className="shrink-0 text-brand" />
              <span className="truncate font-mono text-[14px] text-fg">
                osteria.com/<span className="text-brand">{typed}</span>
                <span className="caret ml-px inline-block h-4 w-[2px] translate-y-[3px] bg-brand" />
              </span>
            </div>

            <div className="mt-5 grid grid-cols-4 gap-2">
              {DESTINATIONS.map((d, i) => (
                <span
                  key={d}
                  className={
                    i === index
                      ? "h-1.5 rounded-full bg-brand transition-colors duration-500"
                      : "h-1.5 rounded-full bg-white/10 transition-colors duration-500"
                  }
                />
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
