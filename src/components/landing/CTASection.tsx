"use client";

import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { APP_URL } from "@/lib/config";

const CTASection = () => {
  return (
    <section className="py-10 md:py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection>
          <div className="max-w-2xl mx-auto p-6 md:p-8 text-center bg-linear-to-br from-primary/5 to-transparent border border-primary/20 rounded-xl">
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              Start Creating Custom QR Codes — Free
            </h2>
            <p className="text-xs text-muted-foreground mb-5 max-w-md mx-auto">
              Join thousands of businesses using QR Studio to generate, customize, and track QR codes. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 justify-center px-4 sm:px-0">
              <a href={`${APP_URL}/signup`} className="w-full sm:w-auto">
                <button className="inline-flex items-center justify-center gap-1.5 text-xs font-medium w-full sm:w-auto h-11 sm:h-9 px-6 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
                  Get Started Free
                  <ArrowRight className="h-3 w-3" />
                </button>
              </a>
              <a href="#generator" className="w-full sm:w-auto">
                <button className="inline-flex items-center justify-center text-xs font-medium w-full sm:w-auto h-11 sm:h-9 px-6 rounded-md border border-border bg-background hover:bg-muted transition-colors">
                  Try Generator First
                </button>
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTASection;
