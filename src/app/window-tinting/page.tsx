import type { Metadata } from "next";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import { SEO, SITE_URL, BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: SEO["window-tint"].title,
  description: SEO["window-tint"].description,
  alternates: { canonical: "/window-tinting" },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Ceramic Window Tinting",
  description: SEO["window-tint"].description,
  serviceType: "Ceramic Window Tinting",
  url: `${SITE_URL}/window-tinting`,
  provider: {
    "@type": "AutoBodyShop",
    name: BRAND.name,
    telephone: BRAND.phoneTel,
    email: BRAND.email,
    url: SITE_URL,
    address: {
      "@type": "PostalAddress",
      streetAddress: BRAND.address.street,
      addressLocality: BRAND.address.city,
      addressRegion: BRAND.address.state,
      postalCode: BRAND.address.zip,
      addressCountry: "US",
    },
  },
  areaServed: BRAND.serviceArea.map((area) => ({
    "@type": "City",
    name: area,
  })),
};

export default function WindowTintingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <ServicePageTemplate id="window-tint" />
    </>
  );
}
