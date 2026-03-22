import LegalPage from "../components/LegalPage";
import type { LegalSection } from "../components/LegalPage";

export const metadata = {
  title: "Privacy Policy — Bagora Agency",
  description: "How Bagora Agency collects, uses, and protects your personal information.",
};

const sections: LegalSection[] = [
  {
    heading: "Who We Are",
    content:
      "Bagora Agency is a web and app development agency. Our website address is bagoraagency.com. When you contact us, submit an inquiry, or book a call, you interact with us directly. We do not operate a user account system or store passwords.",
  },
  {
    heading: "What Information We Collect",
    content: [
      "Contact information you provide voluntarily — your name, email address, phone number, and company name when you fill out our inquiry form or book a discovery call.",
      "Project details and requirements you share with us during the sales or onboarding process.",
      "Basic analytics data — pages visited, time on site, and referring URL — collected anonymously through tools like Google Analytics or Plausible.",
      "Email correspondence — any messages you send us directly via email are stored in our inbox.",
    ],
  },
  {
    heading: "How We Use Your Information",
    content: [
      "To respond to your inquiry and communicate with you about your project.",
      "To schedule and conduct discovery calls and project scoping sessions.",
      "To send you a proposal, contract, or invoice related to your project.",
      "To improve our website and understand which pages and services are most useful to visitors.",
      "We do not use your data for advertising, profiling, or selling to third parties — ever.",
    ],
  },
  {
    heading: "Who We Share Your Data With",
    content: [
      "Calendly or Cal.com — when you book a call, your name and email are shared with our scheduling platform.",
      "Stripe — if you make a payment, your payment details are processed by Stripe. We never store card details ourselves.",
      "Google Workspace — our email and document tools. Project correspondence and files may be stored here.",
      "We do not sell, rent, or trade your personal information to any third party under any circumstances.",
    ],
  },
  {
    heading: "Cookies",
    content:
      "Our website uses minimal cookies. Essential cookies are required for the site to function correctly. If we use analytics tools, they may set anonymous cookies to track page views. We do not use advertising cookies or cross-site tracking cookies. You can disable cookies in your browser settings at any time.",
  },
  {
    heading: "Data Retention",
    content:
      "We retain your contact information and project correspondence for as long as your client relationship with us is active, and for up to 3 years after project completion for legal and accounting purposes. You may request deletion of your data at any time by contacting us at legal@bagoraagency.com.",
  },
  {
    heading: "Your Rights",
    content: [
      "Access — you can request a copy of the personal data we hold about you.",
      "Correction — you can ask us to correct any inaccurate information.",
      "Deletion — you can request that we delete your personal data, subject to legal retention requirements.",
      "Objection — you can object to us processing your data for marketing purposes.",
      "To exercise any of these rights, email us at legal@bagoraagency.com and we'll respond within 5 business days.",
    ],
  },
  {
    heading: "Security",
    content:
      "We take the security of your data seriously. All data transmission to and from our website is encrypted via HTTPS. Access to client information is restricted to team members who need it to deliver your project. We do not store sensitive financial information.",
  },
  {
    heading: "Changes to This Policy",
    content:
      "We may update this Privacy Policy from time to time. When we do, we'll update the 'Last updated' date at the top of this page. We encourage you to review this page periodically. Continued use of our services after changes are posted constitutes your acceptance of the updated policy.",
  },
  {
    heading: "Contact",
    content:
      "If you have any questions about this Privacy Policy or how we handle your data, please contact us at legal@bagoraagency.com. We aim to respond to all privacy-related inquiries within 24–48 hours.",
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      subtitle="We respect your privacy. This policy explains what data we collect, why we collect it, and how we keep it safe."
      lastUpdated="March 2025"
      sections={sections}
    />
  );
}