import HowItWorksSection from "@/components/common/HowItWorksSection";
import { ClientWebsiteCardDemo } from "@/components/common/Website_card";
import WhyUsSection from "@/components/common/WhyUs";
import { Hero7 } from "@/components/hero-section";
import LogoCloud from "@/components/logo-cloud";
import PricingTabs from "@/components/Price";
import TestimonialSection from "@/components/testimonials-three";
import React from "react";

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <Hero7 />
      </section>

      {/* Logo Cloud */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-center text-gray-500 text-sm font-semibold uppercase tracking-wide mb-8">
            Trusted by industry leaders
          </h2>
          <LogoCloud />
        </div>
      </section>
 <HowItWorksSection />
      {/* Portfolio Showcase */}
      <section className="py-20 ">
        <ClientWebsiteCardDemo />
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Client Success Stories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don&#39;t just take our word for it
            </p>
          </div>
          <TestimonialSection />
        </div>
      </section>

      <PricingTabs />

      <WhyUsSection />
    </div>
  );
}

export default HomePage;
