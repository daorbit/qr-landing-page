import { Mail, MessageSquareText, Timer } from "lucide-react";
import { site } from "@/lib/site";
import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";
import { Reveal } from "../motion/reveal";
import { ContactForm } from "../contact-form";

const POINTS = [
  { icon: MessageSquareText, title: "Bulk codes or a custom plan", text: "Tell us how many codes and scans you need." },
  { icon: Timer, title: "A real reply", text: "A person from the team answers, not a bot." },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 section-y">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
        <div>
          <SectionHeading align="left" eyebrow="Contact" title="Talk to the team." description="Questions about plans, bulk codes or anything else. Send us a note and we'll get back to you." />
          <Reveal delay={120} className="mt-10 space-y-3">
            {POINTS.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex items-start gap-4 rounded-2xl border border-line bg-fg/[0.02] p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/15 text-brand">
                  <Icon size={18} />
                </span>
                <div>
                  <p className="text-[15px] font-semibold">{title}</p>
                  <p className="mt-0.5 text-[14px] text-fg-2">{text}</p>
                </div>
              </div>
            ))}
            <a href={`mailto:${site.supportEmail}`} className="flex items-center gap-4 rounded-2xl border border-line bg-fg/[0.02] p-4 transition-colors hover:border-line-strong">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/15 text-brand">
                <Mail size={18} />
              </span>
              <span>
                <span className="block text-[15px] font-semibold">Prefer email?</span>
                <span className="block text-[14px] text-fg-2">{site.supportEmail}</span>
              </span>
            </a>
          </Reveal>
        </div>

        <Reveal delay={180}>
          <div className="overflow-hidden rounded-[20px] border border-line-strong bg-white">
            <ContactForm />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
