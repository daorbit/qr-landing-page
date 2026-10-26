"use client";

import { useEffect, useState } from "react";
import { Clock, Globe2, Smartphone, UserRoundCheck } from "lucide-react";
import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";
import { CountUp } from "../motion/count-up";
import { Reveal } from "../motion/reveal";
import { useInView } from "../motion/use-in-view";

const DAYS = [12, 18, 15, 22, 28, 24, 31, 36, 33, 41, 38, 46, 52, 49, 58, 63, 57, 66, 72, 69, 80];
const FEED = [
  { code: "Table tent · Menu", place: "Mumbai", device: "iPhone" },
  { code: "Shop window", place: "Pune", device: "Android" },
  { code: "Event poster", place: "Bengaluru", device: "iPhone" },
  { code: "Business card", place: "London", device: "Android" },
  { code: "Guest Wi-Fi", place: "Goa", device: "iPad" },
  { code: "Product label", place: "Delhi", device: "Pixel" },
];
const DEVICES = [
  { name: "Mobile", share: 78, color: "#ff6a2b" },
  { name: "Desktop", share: 15, color: "#8b5cf6" },
  { name: "Tablet", share: 7, color: "#38bdf8" },
];
const INSIGHTS = [
  { icon: Globe2, title: "Where", text: "Countries and cities" },
  { icon: Smartphone, title: "How", text: "Phones, tablets, desktops" },
  { icon: Clock, title: "When", text: "Busiest days and hours" },
  { icon: UserRoundCheck, title: "Who returns", text: "New vs returning" },
];

export function Analytics() {
  const { ref, inView } = useInView<HTMLDivElement>(0.25);
  const [feedStart, setFeedStart] = useState(0);
  const max = Math.max(...DAYS);

  useEffect(() => {
    if (!inView || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setFeedStart((s) => s + 1), 1700);
    return () => window.clearInterval(timer);
  }, [inView]);

  const feed = Array.from({ length: 4 }, (_, i) => ({ ...FEED[(feedStart + i) % FEED.length], key: feedStart + i }));

  return (
    <section id="analytics" className="scroll-mt-24 section-y border-y border-line bg-base-2">
      <Container>
        <SectionHeading
          eyebrow="Analytics"
          title="Know which print actually works."
          description="Every scan is counted the moment it happens, so you can compare the poster by the door with the one at the till."
        />

        <div ref={ref} className="mt-16 grid gap-4 lg:grid-cols-[1.6fr_1fr]">
          <Reveal className="panel p-6 sm:p-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-[13px] text-muted">Scans · last 21 days</p>
                <p className="mt-2 text-[52px] font-medium leading-none tracking-[-0.045em]">
                  <CountUp to={1048} />
                </p>
              </div>
              <span className="rounded-full bg-good/12 px-3 py-1 text-[12.5px] font-semibold text-good">+32% vs previous</span>
            </div>
            <div className="mt-10 flex h-44 items-end gap-1.5" aria-hidden>
              {DAYS.map((d, i) => (
                <span
                  key={i}
                  className={inView ? "bar-grow flex-1 rounded-t-md" : "flex-1 rounded-t-md opacity-0"}
                  style={{
                    height: `${(d / max) * 100}%`,
                    animationDelay: `${i * 40}ms`,
                    background: i === DAYS.length - 1 ? "#ff6a2b" : "rgb(255 255 255 / 0.12)",
                  }}
                />
              ))}
            </div>
            <div className="mt-8 grid gap-6 border-t border-line pt-6 sm:grid-cols-2">
              <div>
                <p className="mb-3 text-[13px] text-muted">Devices</p>
                <div className="flex h-2.5 gap-1 overflow-hidden rounded-full">
                  {DEVICES.map((d) => (
                    <span key={d.name} className="h-full rounded-full" style={{ width: `${d.share}%`, background: d.color }} />
                  ))}
                </div>
                <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-fg-2">
                  {DEVICES.map((d) => (
                    <li key={d.name} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full" style={{ background: d.color }} />
                      {d.name} <span className="text-muted">{d.share}%</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {INSIGHTS.map(({ icon: Icon, title, text }) => (
                  <div key={title} className="rounded-xl border border-line bg-base p-3">
                    <Icon size={15} className="text-brand" />
                    <p className="mt-2 text-[13px] font-semibold">{title}</p>
                    <p className="text-[12px] text-muted">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="panel flex flex-col p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <p className="text-[15px] font-semibold">Live scans</p>
              <span className="flex items-center gap-1.5 text-[12px] text-good">
                <span className="live-dot h-1.5 w-1.5 rounded-full bg-good" />
                Live
              </span>
            </div>
            <ul className="mt-6 flex-1 space-y-2.5">
              {feed.map((item, i) => (
                <li key={item.key} className={i === 0 ? "toast-in rounded-2xl border border-line-strong bg-panel-2 p-3.5" : "rounded-2xl border border-line bg-base p-3.5"}>
                  <p className="text-[13.5px] font-medium">{item.code}</p>
                  <p className="mt-0.5 text-[12px] text-muted">
                    {item.place} · {item.device} · {i === 0 ? "just now" : `${i * 2} min ago`}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[11.5px] text-muted">Illustration with sample data</p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
