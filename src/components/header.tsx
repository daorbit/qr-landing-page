"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/cn";
import { ButtonLink } from "./ui/button-link";
import { Container } from "./ui/container";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color] duration-300",
        scrolled || open ? "bg-base/80 backdrop-blur-xl backdrop-saturate-150" : "bg-transparent"
      )}
    >
      <Container className="relative flex h-16 items-center justify-between">
        <Logo size={48} />

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex" aria-label="Main">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-[13.5px] text-fg-2 transition-colors hover:text-fg">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <ButtonLink href={site.signInUrl} variant="text" className="hidden px-3 text-[13.5px] sm:inline-flex">
            Sign in
          </ButtonLink>
          <ButtonLink href={site.signUpUrl} size="sm" className="hidden sm:inline-flex">
            Get started
          </ButtonLink>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="ml-1 flex h-9 w-9 items-center justify-center rounded-full text-fg transition-colors hover:bg-fg/[0.06] lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </Container>

      {open && (
        <div className="h-[calc(100dvh-4rem)] overflow-y-auto bg-base lg:hidden">
          <Container className="flex h-full flex-col py-6">
            <nav aria-label="Mobile" className="flex flex-col">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-line py-5 text-[22px] font-medium tracking-[-0.02em]"
                >
                  {item.label}
                  <ArrowRight size={18} className="text-muted" />
                </a>
              ))}
            </nav>
            <div className="mt-auto grid gap-2 pt-8">
              <ButtonLink href={site.signUpUrl} size="lg">
                Get started
              </ButtonLink>
              <ButtonLink href={site.signInUrl} variant="secondary" size="lg">
                Sign in
              </ButtonLink>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
