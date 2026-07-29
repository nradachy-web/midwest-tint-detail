import type { Metadata } from "next";
import LegalPageTemplate from "@/components/sections/LegalPageTemplate";
import { BRAND, SEO } from "@/lib/constants";

export const metadata: Metadata = {
  title: SEO.terms.title,
  description: SEO.terms.description,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPageTemplate
      title="Terms & Conditions"
      lastUpdated="July 28, 2026"
      intro={[
        `These Terms & Conditions ("Terms") govern your use of the ${BRAND.name} website and your requests for our services. By using this website, submitting a quote request, or opting in to our text messages, you agree to these Terms. If you do not agree, please do not use the site.`,
      ]}
      sections={[
        {
          heading: "Quotes and Services",
          paragraphs: [
            "Quotes generated through this website or provided by phone are good-faith estimates based on the information you provide, including your vehicle's year, make, model, and requested services. Final pricing is confirmed by our team before any work begins. Service availability, scheduling, and timelines are confirmed at booking.",
          ],
        },
        {
          heading: "Text Messaging Terms",
          paragraphs: [
            `By opting in through our quote form, you agree to receive text messages from ${BRAND.name} at the phone number you provided. We offer two separate opt-ins: marketing messages (offers and promotions) and non-marketing messages (order updates, appointment reminders, and similar service communications). You will only receive the categories you opted in to.`,
          ],
          list: [
            "Message frequency may vary.",
            "Message and data rates may apply.",
            "Reply STOP at any time to opt out.",
            `Reply HELP for assistance, or contact us at ${BRAND.phoneDisplay} or ${BRAND.email}.`,
            "Carriers are not liable for delayed or undelivered messages.",
            "Consent to receive text messages is not a condition of purchasing any goods or services.",
          ],
          afterList: [
            "For details on how we handle your phone number and opt-in information, see our Privacy Policy.",
          ],
        },
        {
          heading: "Warranty",
          paragraphs: [
            "Every window tint install is backed by our lifetime warranty against bubbling, peeling, cracking, and discoloration of the film for as long as you own the vehicle. Warranty details are confirmed at the time of install. The warranty covers the film and installation; it does not cover damage caused by accidents, vandalism, misuse, or failure to follow aftercare instructions.",
          ],
        },
        {
          heading: "Use of This Website",
          paragraphs: [
            "You agree to use this website only for lawful purposes and not to interfere with its operation, attempt to gain unauthorized access, submit false or misleading information, or use automated tools to scrape or copy its content.",
          ],
        },
        {
          heading: "Intellectual Property",
          paragraphs: [
            `All content on this website, including text, images, logos, and design, belongs to ${BRAND.name} or its licensors and may not be reproduced without permission.`,
          ],
        },
        {
          heading: "Disclaimer and Limitation of Liability",
          paragraphs: [
            "This website is provided on an as-is and as-available basis. To the fullest extent permitted by law, we disclaim all warranties regarding the website itself and are not liable for indirect, incidental, or consequential damages arising from your use of the site. Nothing in these Terms limits the service warranties we expressly provide for our work.",
          ],
        },
        {
          heading: "Governing Law",
          paragraphs: [
            "These Terms are governed by the laws of the State of Michigan, without regard to conflict of law principles.",
          ],
        },
        {
          heading: "Changes to These Terms",
          paragraphs: [
            "We may update these Terms from time to time. The updated version will be posted on this page with a revised date, and continued use of the site means you accept the updated Terms.",
          ],
        },
        {
          heading: "Contact Us",
          paragraphs: [
            `${BRAND.name}, ${BRAND.address.full}. Phone: ${BRAND.phoneDisplay}. Email: ${BRAND.email}.`,
          ],
        },
      ]}
    />
  );
}
