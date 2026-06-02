import type { Metadata } from "next";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import { SEO, SITE_URL, BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: SEO.detailing.title,
  description: SEO.detailing.description,
  alternates: { canonical: "/detailing" },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Interior and Exterior Detailing",
  description: SEO.detailing.description,
  url: `${SITE_URL}/detailing`,
  serviceType: "Car Detailing",
  areaServed: BRAND.serviceArea.map((city) => ({
    "@type": "City",
    name: city,
  })),
  provider: {
    "@type": "AutoDetailing",
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
};

export default function DetailingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <ServicePageTemplate id="detailing" />
    </>
  );
}
