import { ArrowLeft } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <section className="pt-16">
      <Container className="flex min-h-[72vh] flex-col items-start justify-center">
        <p className="font-mono text-[13px] text-brand">404</p>
        <h1 className="mt-5 max-w-2xl text-hero font-medium leading-[1.02] tracking-[-0.045em] text-fg">This one didn&apos;t scan.</h1>
        <p className="mt-6 max-w-md text-lead text-fg-2">The link may be old or mistyped. Let&apos;s get you somewhere useful.</p>
        <ButtonLink href="/" size="lg" className="mt-10">
          <ArrowLeft size={16} />
          Back to home
        </ButtonLink>
      </Container>
    </section>
  );
}
