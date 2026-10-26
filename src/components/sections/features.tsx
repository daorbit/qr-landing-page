import { CalendarClock, Download, Eye, Lock, Palette, Pencil, ScanLine, Shield, Star, Users } from "lucide-react";
import { site } from "@/lib/site";
import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";
import { Reveal } from "../motion/reveal";
import { QrCode } from "../qr-code";

const ROLES = [
  { role: "Owner", icon: Star },
  { role: "Admin", icon: Shield },
  { role: "Editor", icon: Pencil },
  { role: "Viewer", icon: Eye },
];

const PRESETS: { dots: "rounded" | "dots" | "square"; fg: string; corner?: string }[] = [
  { dots: "rounded", fg: "#0a0a0a", corner: "#ea580c" },
  { dots: "dots", fg: "#1e3a8a" },
  { dots: "square", fg: "#0a0a0a" },
  { dots: "rounded", fg: "#166534" },
];

function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={`panel h-full p-7 transition-colors duration-300 hover:border-line-strong sm:p-9 ${className ?? ""}`}>{children}</div>;
}

function CardTitle({ icon: Icon, title, text }: { icon: typeof Palette; title: string; text: string }) {
  return (
    <>
      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-base text-fg">
        <Icon size={18} />
      </span>
      <h3 className="mt-6 text-[21px] font-medium tracking-[-0.025em] text-fg">{title}</h3>
      <p className="mt-2 max-w-md text-[15px] leading-relaxed text-fg-2">{text}</p>
    </>
  );
}

export function Features() {
  return (
    <section id="features" className="scroll-mt-24 section-y">
      <Container>
        <SectionHeading eyebrow="Features" title="Everything a printed code was missing." description="Design it, protect it, share it with your team and download it ready for print." />

        <div className="mt-16 grid gap-4 md:grid-cols-6">
          <Reveal className="md:col-span-4">
            <Card>
              <CardTitle icon={Palette} title="A real design studio" text="Colors, six dot shapes, corner styles, your logo and 16 ready-made presets." />
              <div className="mt-9 grid grid-cols-4 gap-3">
                {PRESETS.map((preset, i) => (
                  <div key={i} className="rounded-2xl bg-white p-3">
                    <QrCode value={site.url} dots={preset.dots} fg={preset.fg} corner={preset.corner} className="w-full" title="Style preset example" />
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>

          <Reveal delay={100} className="md:col-span-2">
            <Card>
              <CardTitle icon={Lock} title="Protection" text="A password, an expiry date or a scan limit, per code." />
              <div className="mt-9 space-y-2">
                {[
                  { icon: Lock, label: "Password required" },
                  { icon: CalendarClock, label: "Expires 31 Dec" },
                  { icon: ScanLine, label: "Stops after 500 scans" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2.5 rounded-xl border border-line bg-base px-3.5 py-3 text-[13.5px] text-fg-2">
                    <Icon size={14} className="text-brand" />
                    {label}
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>

          <Reveal className="md:col-span-3">
            <Card>
              <CardTitle icon={Users} title="Workspaces for teams" text="Invite people by email and choose exactly what each of them can do." />
              <div className="mt-9 grid grid-cols-2 gap-2">
                {ROLES.map(({ role, icon: Icon }) => (
                  <div key={role} className="flex items-center gap-2.5 rounded-xl border border-line bg-base px-3.5 py-3">
                    <Icon size={14} className="text-brand" />
                    <span className="text-[14px] text-fg">{role}</span>
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>

          <Reveal delay={100} className="md:col-span-3">
            <Card>
              <CardTitle icon={Download} title="Ready for print" text="Download in high resolution, or wrap the code in a printable card with your own words." />
              <div className="mt-9 flex flex-wrap gap-2">
                {["PNG", "JPG", "WebP", "Printable cards"].map((format) => (
                  <span key={format} className="rounded-full border border-line-strong px-3.5 py-1.5 text-[13px] text-fg">
                    {format}
                  </span>
                ))}
              </div>
            </Card>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
