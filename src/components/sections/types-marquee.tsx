import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site";
import { QR_TYPE_COUNT, QR_TYPE_GROUPS } from "@/lib/qr-types";
import { Container } from "../ui/container";
import { Reveal } from "../motion/reveal";
import { RotatingWord } from "./rotating-word";
import { TypeTile } from "./type-tile";

const WORDS = ["restaurant menu.", "guest Wi-Fi.", "business card.", "event poster.", "Instagram.", "review page.", "product label."];

const TYPES = QR_TYPE_GROUPS.flatMap((group) => group.items.map((item) => ({ ...item, group: group.title })));

export function TypesMarquee() {
  return (
    <section aria-labelledby="types-title" className="section-y">
      <Container>
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="text-[13px] font-medium text-fg-2">{QR_TYPE_COUNT} kinds of codes, one studio</p>
          <h2 id="types-title" className="mt-4 text-h2 font-medium leading-[1.1] tracking-[-0.04em] text-fg">
            <span className="block">Make a code for your</span>
            <RotatingWord words={WORDS} />
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <ul className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-7">
            {TYPES.map((type) => (
              <TypeTile key={type.label} {...type} />
            ))}
            <li className="col-span-2">
              <a
                href={site.signUpUrl}
                className="flex h-full min-h-[120px] flex-col justify-between rounded-2xl bg-brand p-5 text-white transition-colors duration-200 hover:bg-brand-hover"
              >
                <span className="text-[13px] text-white/80">Pick a type and design it in minutes</span>
                <span className="flex items-center justify-between text-[18px] font-medium tracking-[-0.02em]">
                  Start creating
                  <ArrowRight size={18} />
                </span>
              </a>
            </li>
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
