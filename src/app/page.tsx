import type { Metadata } from "next";

import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import ServicesPreview from "@/components/sections/ServicesPreview";
import TintVisualizer from "@/components/visualizer/TintVisualizer";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ProcessSteps from "@/components/sections/ProcessSteps";
import Reviews from "@/components/sections/Reviews";
import QuoteSection from "@/components/sections/QuoteSection";
import FAQ from "@/components/sections/FAQ";
import CTABanner from "@/components/sections/CTABanner";

import { SEO, FAQ as FAQ_ITEMS } from "@/lib/constants";

export const metadata: Metadata = {
  title: SEO.home.title,
  description: SEO.home.description,
  alternates: {
    canonical: "/",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Hero />
      <StatsBar />
      <ServicesPreview />
      <TintVisualizer />
      <WhyChooseUs />
      <ProcessSteps />
      <Reviews />
      <QuoteSection />
      <FAQ />
      <CTABanner />
    </>
  );
}
