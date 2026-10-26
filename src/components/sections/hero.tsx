import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site";
import { Container } from "../ui/container";
import { ButtonLink } from "../ui/button-link";
import { FloatingCodes } from "./floating-codes";

const FACTS = [
  ["26", "code types"],
  ["0", "reprints needed"],
  ["₹0", "to start"],
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <FloatingCodes />
      <Container className="intro flex min-h-[92vh] flex-col items-center justify-center pb-20 pt-32 text-center sm:pt-36">
        <a href="#studio" className="inline-flex items-center gap-3 rounded-full border border-line bg-base/70 py-1.5 pl-1.5 pr-4 text-[14px] text-fg-2 backdrop-blur transition-colors hover:border-line-strong hover:text-fg">
          <span className="rounded-full bg-brand px-2.5 py-0.5 text-[12px] font-semibold text-white">New</span>
          Design a code right on this page
          <ArrowRight size={14} />
        </a>

        <h1 className="mt-9 max-w-5xl text-balance text-hero font-medium leading-[1.02] tracking-[-0.045em] text-fg">
          Branded QR codes, <span className="text-muted">with every scan counted.</span>
        </h1>

        <p className="mt-8 max-w-3xl text-pretty text-[17px] leading-relaxed text-fg-2 sm:text-[20px]">{site.description}</p>

        <div className="mt-11 flex flex-wrap items-center justify-center gap-3">
          <ButtonLink href={site.signUpUrl} size="xl">
            Get started for free
            <ArrowRight size={17} />
          </ButtonLink>
          <ButtonLink href="#studio" variant="secondary" size="xl" className="bg-base/70 backdrop-blur">
            Try the studio
          </ButtonLink>
        </div>

        <dl className="mt-20 grid grid-cols-3 gap-10 sm:gap-24">
          {FACTS.map(([value, label]) => (
            <div key={label}>
              <dt className="sr-only">{label}</dt>
              <dd className="text-[30px] font-medium tracking-[-0.03em] text-fg sm:text-[40px]">{value}</dd>
              <dd className="mt-1 text-[13px] text-muted sm:text-[14px]">{label}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
