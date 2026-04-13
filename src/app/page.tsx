import LandingPage from "../components/landing/LandingPage";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "QR Studio",
    description:
      "Professional QR code generator with custom designs, templates, analytics, and branding. Create QR codes for URLs, vCards, WiFi, social media and more.",
    url: "https://qrstudio.daorbit.in",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web Browser",
    offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
    creator: { "@type": "Organization", name: "QR Studio" },
    featureList: [
      "Custom QR Code Design",
      "Multiple QR Code Types (URL, vCard, WiFi, SMS, Email)",
      "Real-time Analytics & Scan Tracking",
      "White Label & Branding Options",
      "Password Protected QR Codes",
      "High Resolution Export (PNG, WEBP, JPG)",
      "Professional Templates",
      "Real-time Preview",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "QR Studio",
    url: "https://qrstudio.daorbit.in",
    logo: "https://qrstudio.daorbit.in/logo.png",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "QR Studio",
    url: "https://qrstudio.daorbit.in",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://qrstudio.daorbit.in/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://qrstudio.daorbit.in/" },
      { "@type": "ListItem", position: 2, name: "QR Code Generator", item: "https://qrstudio.daorbit.in/#generator" },
      { "@type": "ListItem", position: 3, name: "Features", item: "https://qrstudio.daorbit.in/#features" },
      { "@type": "ListItem", position: 4, name: "FAQs", item: "https://qrstudio.daorbit.in/faqs" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What types of QR codes can I create?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can create QR codes for URLs, vCards, text, WiFi networks, emails, phone numbers, locations, and social media profiles.",
        },
      },
      {
        "@type": "Question",
        name: "Can I customize my QR code appearance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Choose from professional templates, customize colors, add your logo, adjust patterns, and apply frames to create branded QR codes.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer QR code analytics?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, premium users get detailed analytics including scan counts, geographic locations, device statistics, and time-based heatmaps.",
        },
      },
      {
        "@type": "Question",
        name: "Is QR Studio free to use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, QR Studio offers a free tier to create and download QR codes. Premium plans unlock advanced features like analytics, white labeling, and unlimited QR codes.",
        },
      },
    ],
  },
];

export default function Home() {
  return (
    <>
      {jsonLd.map((data, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
      <LandingPage />
    </>
  );
}
