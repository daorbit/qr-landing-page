import { getPlans } from "@/lib/plans";
import { site } from "@/lib/site";
import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";
import { ButtonLink } from "../ui/button-link";
import { PricingCards } from "./pricing-cards";

export async function Pricing() {
  const plans = await getPlans();

  return (
    <section id="pricing" className="scroll-mt-24 section-y">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Start free. Upgrade when it pays for itself."
          description="Every plan includes dynamic codes, the full design studio and scan analytics. Prices in INR."
        />
        {plans ? (
          <PricingCards plans={plans} />
        ) : (
          <div className="panel mx-auto mt-14 max-w-md p-8 text-center">
            <p className="text-[15px] text-fg-2">Our current plans and prices are always up to date inside the app.</p>
            <ButtonLink href={`${site.appUrl}/pricing`} className="mt-6">
              See plans
            </ButtonLink>
          </div>
        )}
      </Container>
    </section>
  );
}
