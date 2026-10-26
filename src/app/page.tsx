import { Hero } from "@/components/sections/hero";
import { TypesMarquee } from "@/components/sections/types-marquee";
import { Playground } from "@/components/sections/playground";
import { DynamicLinks } from "@/components/sections/dynamic-links";
import { Features } from "@/components/sections/features";
import { Analytics } from "@/components/sections/analytics";
import { Steps } from "@/components/sections/steps";
import { Pricing } from "@/components/sections/pricing";
import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";
import { Contact } from "@/components/sections/contact";
import { JsonLd } from "@/components/json-ld";
import { faqs } from "@/lib/faqs";
import { site } from "@/lib/site";

export const revalidate = 3600;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: site.name,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: site.description,
      url: site.url,
      offers: { "@type": "Offer", name: "Free", price: "0", priceCurrency: "INR" },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Hero />
      <TypesMarquee />
      <Playground />
      <DynamicLinks />
      <Features />
      <Analytics />
      <Steps />
      <Pricing />
      <Faq />
      <Contact />
      <Cta />
    </>
  );
}
