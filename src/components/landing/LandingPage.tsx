"use client";

import Header from "./Header";
import TrialBanner from "./TrialBanner";
import HeroSection from "./HeroSection";
import GeneratorSection from "./GeneratorSection";
import HowItWorks from "./HowItWorks";
import AnalyticsShowcase from "./AnalyticsShowcase";
import WhiteLabelSection from "./WhiteLabelSection";
import WatermarkSection from "./WatermarkSection";
import QRTypesSection from "./QRTypesSection";
import FeaturesSection from "./FeaturesSection";
import SecuritySection from "./SecuritySection";
import TemplatesShowcase from "./TemplatesShowcase";
import UseCasesSection from "./UseCasesSection";
import CustomizationSection from "./CustomizationSection";
import PricingComparisonSection from "./PricingComparisonSection";
import IntegrationPartnersSection from "./IntegrationPartnersSection";
import TestimonialsSection from "./TestimonialsSection";
import FAQSection from "./FAQSection";
import CTASection from "./CTASection";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Subtle background pattern */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-0 left-1/4 w-100 h-100 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-75 h-75 bg-muted rounded-full blur-[80px]" />
      </div>

      <Header />
      <TrialBanner />
      <HeroSection />
      <GeneratorSection />
      <HowItWorks />
      <AnalyticsShowcase />
      <WhiteLabelSection />
      <WatermarkSection />
      <QRTypesSection />
      <FeaturesSection />
      <SecuritySection />
      <TemplatesShowcase />
      <UseCasesSection />
      <CustomizationSection />
      <PricingComparisonSection />
      <IntegrationPartnersSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default LandingPage;
