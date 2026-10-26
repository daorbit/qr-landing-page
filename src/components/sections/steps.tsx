import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";
import { Reveal } from "../motion/reveal";

const STEPS = [
  { title: "Create", text: "Pick what it opens: a website, Wi-Fi, a contact card, a menu PDF, a review page or 21 more." },
  { title: "Design", text: "Choose a preset, add your colors and logo, and wrap it in a printable card if you like." },
  { title: "Measure", text: "Print it, then watch the scans arrive. Change the link whenever your plans change." },
];

export function Steps() {
  return (
    <section className="section-y">
      <Container>
        <SectionHeading eyebrow="How it works" title="From idea to printed code in a minute." />
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 120}>
              <div className="panel relative h-full overflow-hidden p-8">
                <span className="font-mono text-[13px] text-brand">0{i + 1}</span>
                <h3 className="mt-10 text-[22px] font-medium tracking-[-0.025em] text-fg">{step.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-fg-2">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
