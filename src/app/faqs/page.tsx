import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";

export const metadata = {
  title: "FAQs - QR Studio",
  description: "Frequently asked questions about QR Studio. Learn about QR code types, customization, analytics, downloads, data security and more.",
};

const faqCategories = [
  {
    title: "Getting Started",
    faqs: [
      { q: "What types of QR codes can I create?", a: "You can create QR codes for URLs, vCards, text, WiFi networks, emails, phone numbers, locations, and social media profiles." },
      { q: "How do I get started?", a: "Sign up, choose your QR code type, customize and download. It's that easy!" },
    ],
  },
  {
    title: "Customization",
    faqs: [
      { q: "Can I customize my QR code appearance?", a: "Yes! Choose from 16 themes, customize colors, adjust size, and apply card templates." },
      { q: "What is error correction level?", a: "Error correction allows QR codes to be read even if partially damaged. We offer 4 levels: Low (7%), Medium (15%), Quartile (25%), and High (30%)." },
    ],
  },
  {
    title: "Data & Privacy",
    faqs: [
      { q: "Is my data secure?", a: "Yes! We use industry-standard SSL encryption and secure authentication to protect your data." },
    ],
  },
  {
    title: "Usage & Features",
    faqs: [
      { q: "Can I download my QR codes?", a: "Yes! Download as high-resolution PNG images and track scan analytics." },
      { q: "Do you offer analytics?", a: "Premium users get detailed analytics including scan counts, locations, and device statistics." },
    ],
  },
];

export default function FAQsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Frequently Asked Questions</h1>
          <p className="text-muted-foreground">Everything you need to know about QR Studio</p>
        </div>

        <div className="space-y-6">
          {faqCategories.map((category) => (
            <div key={category.title} className="border border-border/60 rounded-xl p-5 bg-card">
              <div className="flex items-center gap-2 mb-4">
                <h2 className="font-semibold text-foreground">{category.title}</h2>
                <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                  {category.faqs.length}
                </span>
              </div>
              <div className="space-y-3">
                {category.faqs.map((faq, i) => (
                  <div key={i} className="pl-4 border-l-2 border-primary/20">
                    <h3 className="text-sm font-medium text-foreground mb-1">{faq.q}</h3>
                    <p className="text-sm text-muted-foreground">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center border-t border-border/50 pt-8">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity text-sm"
          >
            <Mail className="w-4 h-4" />
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
