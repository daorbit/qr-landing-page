import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QR Studio - Free QR Code Generator | Custom Design, Analytics & Branding",
  description: "Create free custom QR codes for URLs, vCards, WiFi, social media & more. Professional QR code generator with 50+ templates, real-time scan analytics, white labeling & logo branding.",
  openGraph: {
    title: "QR Studio - Free QR Code Generator | Custom Design, Analytics & Branding",
    description: "Create free custom QR codes for URLs, vCards, WiFi, social media & more.",
    url: "https://qr-craft-studio.vercel.app/",
    siteName: "QR Studio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QR Studio - Free QR Code Generator",
    description: "Create free custom QR codes for URLs, vCards, WiFi, social media & more.",
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
      </body>
    </html>
  );
}
