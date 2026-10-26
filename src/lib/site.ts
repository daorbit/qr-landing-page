const appUrl = "https://qrstudio.daorbit.in";

export const site = {
  name: "QR Studio",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? appUrl,
  title: "QR codes that look like your brand and tell you who scanned",
  description:
    "Design QR codes with your colors, logo and a printable card. Change where they point at any time, protect them, and see every scan by city, device and hour.",
  appUrl,
  signUpUrl: `${appUrl}/signup`,
  signInUrl: `${appUrl}/sign-in`,
  apiUrl: process.env.QR_STUDIO_API_URL ?? "https://be-qrstudio.daorbit.in/api",
  supportEmail: "daorbit2k25@gmail.com",
  contactFormUrl: "https://forms.daorbit.in/form/6adf1fbf280f45050f7f6fa0/view",
  ogImage: "/og-image.png",
  tracker: {
    src: "https://quantalog-be.daorbit.in/tracker.js",
    siteId: "N6Q0EISH46ebzNvG",
  },
};

export const nav = [
  { href: "/#studio", label: "Studio" },
  { href: "/#features", label: "Features" },
  { href: "/#analytics", label: "Analytics" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#contact", label: "Contact" },
];
