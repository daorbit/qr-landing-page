import { ArrowUp, ArrowUpRight, Mail } from "lucide-react";
import { nav, site } from "@/lib/site";
import { LEGAL_DOCS } from "@/lib/legal";
import { Container } from "./ui/container";
import { ButtonLink } from "./ui/button-link";
import { ThemeToggle } from "./theme-toggle";
import { Logo } from "./logo";

const LEGAL_LABELS: Record<string, string> = {
  privacy: "Privacy",
  terms: "Terms",
  refunds: "Refunds",
  shipping: "Shipping",
};

const COLUMNS = [
  { title: "Product", links: nav.map((n) => ({ href: n.href, label: n.label })) },
  {
    title: "Account",
    links: [
      { href: site.signUpUrl, label: "Create account" },
      { href: site.signInUrl, label: "Sign in" },
      { href: `${site.appUrl}/pricing`, label: "Plans and billing" },
    ],
  },
  { title: "Legal", links: LEGAL_DOCS.map((doc) => ({ href: `/legal/${doc.slug}`, label: LEGAL_LABELS[doc.slug] ?? doc.title })) },
];

export function Footer() {
  return (
    <footer className="bg-base-2">
      <Container>
        <div className="flex flex-col gap-6 pb-4 pt-14 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[20px] font-medium tracking-[-0.02em] text-fg">Questions? Talk to the team.</p>
            <p className="mt-1 text-[14px] text-fg-2">Plans, bulk codes or anything else. Send us a note.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <ButtonLink href={`mailto:${site.supportEmail}`} variant="secondary">
              <Mail size={15} />
              {site.supportEmail}
            </ButtonLink>
            <ButtonLink href="/#contact">
              Contact us
              <ArrowUpRight size={15} />
            </ButtonLink>
          </div>
        </div>

        <div className="grid gap-12 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <Logo size={60} />
            <p className="mt-5 text-[14px] leading-relaxed text-fg-2">Branded QR codes you can change after printing, with every scan counted.</p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-muted">{col.title}</p>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-[14px] text-fg-2 transition-colors hover:text-fg">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col-reverse gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-muted">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <ThemeToggle />
            <a href="#main" className="flex h-9 items-center gap-1.5 rounded-full px-3 text-[13px] text-fg-2 transition-colors hover:bg-fg/[0.06] hover:text-fg">
              Back to top
              <ArrowUp size={14} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
