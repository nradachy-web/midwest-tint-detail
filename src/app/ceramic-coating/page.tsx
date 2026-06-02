import type { Metadata } from "next";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import { BRAND, SEO, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: SEO["ceramic-coating"].title,
  description: SEO["ceramic-coating"].description,
  alternates: { canonical: "/ceramic-coating" },
  openGraph: {
    title: SEO["ceramic-coating"].title,
    description: SEO["ceramic-coating"].description,
    url: `${SITE_URL}/ceramic-coating`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO["ceramic-coating"].title,
    description: SEO["ceramic-coating"].description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Ceramic Coating",
  description: SEO["ceramic-coating"].description,
  serviceType: "Ceramic Coating",
  url: `${SITE_URL}/ceramic-coating`,
  areaServed: BRAND.serviceArea.map((name) => ({
    "@type": "City",
    name,
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

export default function CeramicCoatingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicePageTemplate id="ceramic-coating" />
    </>
  );
}
