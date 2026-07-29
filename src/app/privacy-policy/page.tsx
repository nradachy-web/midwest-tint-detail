import type { Metadata } from "next";
import LegalPageTemplate from "@/components/sections/LegalPageTemplate";
import { BRAND, SEO } from "@/lib/constants";

export const metadata: Metadata = {
  title: SEO.privacy.title,
  description: SEO.privacy.description,
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageTemplate
      title="Privacy Policy"
      lastUpdated="July 28, 2026"
      intro={[
        `This Privacy Policy explains how ${BRAND.name} ("we", "us", or "our") collects, uses, and protects your information when you visit ${"midwesttintdetail.com"}, request a quote, contact us, or use our services. We are located at ${BRAND.address.full}. By using this website, you agree to the practices described in this policy.`,
      ]}
      sections={[
        {
          heading: "Information We Collect",
          paragraphs: ["We collect information you choose to provide and limited technical information collected automatically:"],
          list: [
            "Quote and contact information: your name, phone number, email address, ZIP code, vehicle details, requested services, and any notes you include when you submit our quote form, call, text, email, or message us through the chat widget.",
            "Automatic information: standard analytics data such as pages visited, approximate location, device and browser type, referring source, and advertising click identifiers, collected through cookies and similar technologies.",
          ],
        },
        {
          heading: "How We Use Your Information",
          list: [
            "To prepare and deliver the quote you requested and answer your questions.",
            "To schedule, confirm, and perform services, and to send related updates such as appointment reminders when you have opted in to receive them.",
            "To send marketing messages, only if you have given us your consent to receive them.",
            "To measure and improve our website, services, and advertising.",
            "To comply with legal obligations and protect our business.",
          ],
        },
        {
          heading: "Text Messaging (SMS)",
          paragraphs: [
            "Our quote form offers two separate, optional text messaging opt-ins: marketing messages (offers and promotions) and non-marketing messages (order updates, appointment reminders, and similar service communications). Checking either box is your consent to receive that category of messages from us at the phone number you provided.",
            "Message frequency may vary. Message and data rates may apply. You can opt out at any time by replying STOP to any message. Reply HELP for assistance, or contact us at " + BRAND.phoneDisplay + " or " + BRAND.email + ". Opting out of marketing messages does not affect service messages you have separately opted in to receive.",
            "Consent to receive text messages is not a condition of purchasing any goods or services.",
            "No mobile information, phone numbers, or SMS opt-in consent will be shared with, sold to, or exchanged with any third parties or affiliates for marketing or promotional purposes. Text messaging opt-in data and consent are used only to send you the messages you asked for.",
          ],
        },
        {
          heading: "Cookies, Analytics, and Advertising",
          paragraphs: [
            "We use Google Analytics to understand how visitors use the site and Google Ads conversion tracking to measure our advertising. These tools use cookies and may collect device identifiers and usage data as described in Google's privacy policy. Our website chat widget is provided by a third-party messaging platform that processes the messages you send through it so we can respond. You can limit cookies through your browser settings.",
          ],
        },
        {
          heading: "How We Share Information",
          paragraphs: [
            "We do not sell your personal information. We share it only with service providers that help us operate, such as our form delivery, scheduling, messaging, and analytics platforms, and only so they can perform those services for us. We may also disclose information if required by law or to protect our rights, safety, or property.",
          ],
        },
        {
          heading: "Data Retention and Security",
          paragraphs: [
            "We keep your information only as long as needed for the purposes described above, such as responding to your quote, performing services, honoring warranties, and meeting legal requirements. We use reasonable administrative and technical safeguards to protect it, though no method of transmission or storage is completely secure.",
          ],
        },
        {
          heading: "Your Choices",
          paragraphs: [
            "You can opt out of marketing texts at any time by replying STOP. You can also contact us at " + BRAND.phoneDisplay + " or " + BRAND.email + " to ask what information we have about you, request a correction, or ask us to delete it.",
          ],
        },
        {
          heading: "Children's Privacy",
          paragraphs: [
            "Our website and services are not directed to children under 13, and we do not knowingly collect personal information from them.",
          ],
        },
        {
          heading: "Changes to This Policy",
          paragraphs: [
            "We may update this Privacy Policy from time to time. The updated version will be posted on this page with a revised date.",
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
