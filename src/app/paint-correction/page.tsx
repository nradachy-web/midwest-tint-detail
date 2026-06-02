import type { Metadata } from "next";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import { SEO, SITE_URL, BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: SEO["paint-correction"].title,
  description: SEO["paint-correction"].description,
  alternates: { canonical: "/paint-correction" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/paint-correction`,
    title: SEO["paint-correction"].title,
    description: SEO["paint-correction"].description,
  },
  twitter: {
    card: "summary_large_image",
    title: SEO["paint-correction"].title,
    description: SEO["paint-correction"].description,
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Paint Correction",
  serviceType: "Paint Correction",
  description: SEO["paint-correction"].description,
  url: `${SITE_URL}/paint-correction`,
  areaServed: BRAND.serviceArea,
  provider: {
    "@type": "AutoRepair",
    name: BRAND.name,
    telephone: BRAND.phoneTel,
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

export default function PaintCorrectionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <ServicePageTemplate id="paint-correction" />
    </>
  );
}
