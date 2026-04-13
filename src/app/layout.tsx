import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QR Studio - Free QR Code Generator | Custom Design, Analytics & Branding",
  description:
    "Create free custom QR codes for URLs, vCards, WiFi, social media & more. Professional QR code generator with 50+ templates, real-time scan analytics, white labeling & logo branding. Download PNG, WEBP, JPG.",
  keywords: [
    "QR code generator",
    "free QR code",
    "custom QR code",
    "QR code with logo",
    "dynamic QR code",
    "QR code analytics",
    "QR code templates",
    "vCard QR code",
    "WiFi QR code",
    "QR code maker",
    "QR code scanner",
    "branded QR code",
    "white label QR code",
    "QR code tracking",
    "bulk QR code generator",
  ],
  authors: [{ name: "QR Studio", url: "https://qrstudio.daorbit.in" }],
  creator: "QR Studio",
  publisher: "DA Orbit",
  verification: {
    google: "HiZBxbDomDb7TUXm27xBbCModk82j3wdBABq0wHr5xM",
  },
  metadataBase: new URL("https://qrstudio.daorbit.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "QR Studio - Free QR Code Generator | Custom Design, Analytics & Branding",
    description:
      "Create free custom QR codes for URLs, vCards, WiFi, social media & more. 50+ templates, scan analytics, white labeling & logo branding.",
    url: "https://qrstudio.daorbit.in",
    siteName: "QR Studio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "QR Studio - Free QR Code Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QR Studio - Free QR Code Generator | Custom Design & Analytics",
    description:
      "Create free custom QR codes for URLs, vCards, WiFi, social media & more. 50+ templates, real-time scan analytics & branding.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} dark`}>
      <body className="min-h-screen font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
