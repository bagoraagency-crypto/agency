import LegalPage from "../components/LegalPage";
import type { LegalSection } from "../components/LegalPage";

export const metadata = {
  title: "Terms of Service — Bagora Agency",
  description: "The terms and conditions governing your use of Bagora Agency's services.",
};

const sections: LegalSection[] = [
  {
    heading: "Agreement to Terms",
    content:
      "By engaging Bagora Agency for any web development, app development, or design services, you agree to be bound by these Terms of Service. These terms constitute the full agreement between you (the client) and Bagora Agency and supersede any prior communications. If you do not agree, please do not proceed with an engagement.",
  },
  {
    heading: "Services",
    content: [
      "Bagora Agency provides web development, mobile app development, UI/UX design, backend development, SEO, and related digital services.",
      "The specific scope, deliverables, timeline, and pricing for each project are defined in a separate Project Proposal or Statement of Work (SOW) which forms part of this agreement.",
      "We reserve the right to decline any project that conflicts with our values or capabilities.",
      "Any work outside the agreed scope will be quoted separately and requires written approval before commencing.",
    ],
  },
  {
    heading: "Payment Terms",
    content: [
      "All projects require a 50% deposit before work begins. The remaining 50% is due upon project completion before final files or code are handed over.",
      "For ongoing retainer agreements, invoices are issued monthly and are due within 7 days of issue.",
      "Payments are accepted via bank transfer, Stripe (card), or Wise.",
      "Late payments beyond 14 days may result in work being paused until the outstanding balance is cleared.",
      "All prices are quoted in USD unless otherwise stated in your proposal.",
    ],
  },
  {
    heading: "Revisions and Changes",
    content: [
      "Each plan includes a defined number of revision rounds as stated in your proposal (Starter: 1 round, Growth: 3 rounds, Enterprise: unlimited).",
      "A revision round is defined as a consolidated set of feedback on a deliverable — not multiple separate rounds of changes.",
      "Revisions that significantly change the agreed scope, direction, or functionality of the project are considered out-of-scope and will be quoted separately.",
      "All revision requests must be submitted in writing via email or your project's Slack channel.",
    ],
  },
  {
    heading: "Timelines and Delays",
    content: [
      "We commit to the timeline agreed upon in your project proposal and make every effort to deliver on schedule.",
      "Timelines assume timely feedback and content delivery from the client. Delays caused by late client responses, missing content, or late approval of deliverables may extend the project timeline accordingly.",
      "We will notify you in writing as soon as we become aware of any delay on our end.",
    ],
  },
  {
    heading: "Intellectual Property",
    content: [
      "Upon receipt of final payment, you own all custom code, designs, and assets created specifically for your project.",
      "We retain the right to use your project in our portfolio and case studies unless you request otherwise in writing before the project begins.",
      "We may use open-source libraries and third-party tools in your project. These are governed by their respective licenses, which we will document and provide to you.",
      "Any pre-existing IP (frameworks, templates, internal tools) developed by Bagora Agency remains our property. You receive a license to use it as part of your project.",
    ],
  },
  {
    heading: "Confidentiality",
    content:
      "We treat all client information — business ideas, source code, strategies, and data — as confidential. We sign NDAs on request and operate with the same level of discretion even without a formal NDA in place. We do not share client information with any third party except as necessary to deliver your project.",
  },
  {
    heading: "Warranties and Liability",
    content: [
      "We warrant that our work will be of professional quality and delivered as described in your project proposal.",
      "We do not guarantee specific business outcomes such as traffic growth, conversion rates, or revenue increases.",
      "Our total liability to you in connection with any project is limited to the total fees paid for that specific project.",
      "We are not liable for indirect or consequential damages, including loss of business or profits.",
    ],
  },
  {
    heading: "Termination",
    content: [
      "Either party may terminate a project engagement with 14 days written notice.",
      "If the client terminates the project, the deposit is non-refundable. Any work completed beyond the deposit value will be invoiced at our standard rates.",
      "If Bagora Agency terminates the project (excluding for client non-payment or breach), we will refund a pro-rata portion of any prepaid fees for work not yet completed.",
      "Upon termination, we will hand over all completed work and assets to the client.",
    ],
  },
  {
    heading: "Governing Law",
    content:
      "These Terms of Service shall be governed by and construed in accordance with applicable law. Any disputes arising from these terms shall first be attempted to be resolved through good-faith negotiation. If unresolved, disputes will be referred to binding arbitration before any legal action is taken.",
  },
  {
    heading: "Changes to These Terms",
    content:
      "We reserve the right to update these Terms of Service at any time. Changes will be posted on this page with an updated date. Continued engagement with our services after changes are posted constitutes acceptance of the revised terms.",
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      subtitle="Please read these terms carefully before engaging our services. They govern the relationship between you and Bagora Agency."
      lastUpdated="March 2025"
      sections={sections}
    />
  );
}