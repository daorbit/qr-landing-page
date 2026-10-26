import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site";
import { Container } from "../ui/container";
import { Reveal } from "../motion/reveal";
import { QrCode } from "../qr-code";

export function Cta() {
  return (
    <section className="pb-24 sm:pb-32">
      <Container>
        <Reveal>
          <div className="grid items-center gap-12 rounded-[28px] bg-brand px-7 py-14 text-black sm:px-14 sm:py-20 md:grid-cols-[1.5fr_1fr]">
            <div>
              <h2 className="text-balance text-h2 font-medium leading-[1.05] tracking-[-0.04em]">Your next print deserves a smarter code.</h2>
              <p className="mt-5 max-w-lg text-lead leading-relaxed text-black/70">Create a free account and make your first branded, trackable QR code in under a minute.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href={site.signUpUrl} className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-black px-6 text-[15px] font-medium text-white transition-colors hover:bg-neutral-800">
                  Get started for free
                  <ArrowRight size={16} />
                </a>
                <a href="#contact" className="inline-flex h-12 items-center justify-center rounded-full border border-black/25 px-6 text-[15px] font-medium transition-colors hover:bg-black/[0.06]">
                  Talk to us
                </a>
              </div>
            </div>
            <div className="mx-auto w-full max-w-[220px]">
              <div className="rounded-[22px] bg-white p-4">
                <QrCode value={site.signUpUrl} fg="#0a0a0a" dots="rounded" className="w-full" title="Scan to create a QR Studio account" />
              </div>
              <p className="mt-4 text-center text-[13px] text-black/70">Scan to sign up on your phone</p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
