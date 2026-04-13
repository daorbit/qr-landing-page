import Link from "next/link";
import { ArrowLeft, Mail, Clock } from "lucide-react";

export const metadata = {
  title: "Contact Us - QR Studio",
  description: "Get in touch with QR Studio support. We're here to help with your QR code questions, feedback, and technical issues.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-foreground mb-2">Contact Us</h1>
          <p className="text-muted-foreground">Have questions, feedback, or need help? We&apos;re here to assist you.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Email Support */}
          <a
            href="mailto:winning11.in@gmail.com"
            className="block border border-border/60 rounded-xl p-6 bg-card hover:border-primary/30 transition-colors border-l-4 border-l-primary"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-base font-semibold text-foreground mb-1">Email Support</h2>
                <p className="text-sm text-muted-foreground mb-2">Send us an email and we&apos;ll respond within 24 hours</p>
                <span className="text-sm font-medium text-primary">winning11.in@gmail.com</span>
              </div>
            </div>
          </a>

          {/* Business Hours */}
          <div className="border border-border/60 rounded-xl p-6 bg-gradient-to-r from-primary/5 to-transparent border-l-4 border-l-amber-500">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-amber-500/10 text-amber-500">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-base font-semibold text-foreground mb-2">Business Hours</h2>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <div>Monday - Friday: 9:00 AM - 6:00 PM EST</div>
                  <div>Saturday: 10:00 AM - 4:00 PM EST</div>
                  <div>Sunday: Closed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
