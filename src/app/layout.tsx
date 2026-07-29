import type { Metadata, Viewport } from "next";
import { Chakra_Petch, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyCallBar from "@/components/layout/StickyCallBar";
import CtaClickTracking from "@/components/tracking/CtaClickTracking";
import { BRAND, GADS, SEO, SITE_URL } from "@/lib/constants";

const display = Chakra_Petch({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display-raw",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body-raw",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // SEO titles in constants already include the brand, so no template suffix.
  title: {
    default: SEO.home.title,
  },
  description: SEO.home.description,
  keywords: [
    "window tinting Plymouth MI",
    "ceramic window tint Plymouth",
    "car window tinting Northville",
    "auto tint Canton MI",
    "tint shop Novi",
    "ceramic coating Plymouth",
    "paint correction Plymouth",
    "car detailing Plymouth MI",
    "Midwest Tint & Detail",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: BRAND.name,
    title: SEO.home.title,
    description: SEO.home.description,
    images: [{ url: "/og-image.jpg", width: 1200, height: 675, alt: BRAND.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.home.title,
    description: SEO.home.description,
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#060708",
  width: "device-width",
  initialScale: 1,
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: BRAND.name,
  description:
    "Plymouth, Michigan shop specializing in premium ceramic window tinting, paint correction, ceramic coating, and interior and exterior detailing. Installed by our experts, backed by a lifetime warranty on all tint installs.",
  image: `${SITE_URL}/og-image.jpg`,
  url: SITE_URL,
  telephone: BRAND.phoneTel,
  email: BRAND.email,
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: BRAND.address.street,
    addressLocality: BRAND.address.city,
    addressRegion: BRAND.address.state,
    postalCode: BRAND.address.zip,
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 42.3714, longitude: -83.4702 },
  areaServed: BRAND.serviceArea.map((name) => ({ "@type": "City", name })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  sameAs: [BRAND.social.instagram],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "150",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ceramic Window Tinting" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Paint Correction" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ceramic Coating" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Interior and Exterior Detailing" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-screen bg-ink text-silver antialiased overflow-x-hidden">
        {/* Google tag (gtag.js) - GA4 + Google Ads conversion tracking */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QS5S0WZ5TH"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QS5S0WZ5TH');
            gtag('config', '${GADS.tagId}');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        {/* GoHighLevel / LeadConnector chat widget */}
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6a695ea0883a38e90e139aeb"
          data-source="WEB_USER"
          strategy="lazyOnload"
        />
        <CtaClickTracking />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyCallBar />
      </body>
    </html>
  );
}
