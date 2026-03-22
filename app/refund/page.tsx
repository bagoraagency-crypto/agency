import LegalPage from "../components/LegalPage";
import type { LegalSection } from "../components/LegalPage";

export const metadata = {
  title: "Refund Policy — Bagora Agency",
  description: "Bagora Agency's refund and cancellation policy for all services.",
};

const sections: LegalSection[] = [
  {
    heading: "Our Commitment",
    content:
      "We stand behind the quality of our work. Before any project begins, we invest significant time in scoping, planning, and understanding your requirements — and we expect that same commitment in return. This policy is designed to be fair to both parties.",
  },
  {
    heading: "Deposits",
    content: [
      "All projects require a 50% deposit before work commences. This deposit covers our initial planning, research, design direction, and team allocation.",
      "Deposits are non-refundable once the project has started — meaning once we have kicked off with a discovery session, delivered wireframes, written code, or produced any deliverable.",
      "If you cancel before any work has started (within 48 hours of paying the deposit), you are entitled to a full refund.",
      "After 48 hours and before project kickoff, a 50% refund of the deposit may be considered at our discretion.",
    ],
  },
  {
    heading: "Mid-Project Cancellations",
    content: [
      "If you choose to cancel a project after it has started, you will be invoiced for all work completed up to the cancellation date at our standard hourly rate.",
      "If the work completed is valued at less than your deposit, the difference will not be refunded — the deposit covers planning, administrative, and opportunity costs.",
      "If the work completed exceeds your deposit value, you will be invoiced for the difference, due within 7 days.",
      "All completed deliverables, assets, and code will be handed over to you upon final settlement.",
    ],
  },
  {
    heading: "Completed Projects",
    content:
      "Once a project has been marked as complete and final files or code have been handed over, no refunds will be issued. We build in structured revision rounds throughout every project to ensure you are satisfied before we reach this stage. If you have concerns about the quality of delivered work, please raise them during the revision period.",
  },
  {
    heading: "Quality Issues",
    content: [
      "If delivered work does not meet the specifications agreed upon in your project proposal, we will correct it at no additional charge within the agreed revision rounds.",
      "If you believe there is a significant defect in our work not caught during revisions, contact us at legal@bagoraagency.com within 14 days of project completion.",
      "We will review your concern and, if we agree the issue represents a failure on our part, we will fix it or provide a partial credit — assessed case by case.",
      "Dissatisfaction with design direction or business outcomes does not constitute grounds for a refund.",
    ],
  },
  {
    heading: "Retainer Agreements",
    content: [
      "Monthly retainer agreements can be cancelled with 30 days written notice.",
      "Retainer fees already paid for the current billing month are non-refundable.",
      "Unused hours from a retainer month do not carry over and are not refundable.",
      "If we fail to deliver agreed retainer hours in a given month due to reasons on our end, unused hours will be credited to the following month.",
    ],
  },
  {
    heading: "How to Request a Refund",
    content: [
      "Email legal@bagoraagency.com with subject line: 'Refund Request — [Your Project Name]'.",
      "Include your name, project details, reason for your request, and any supporting documentation.",
      "We will acknowledge your request within 2 business days and resolve it within 7 business days.",
      "Approved refunds will be returned via the original payment method. Stripe refunds take 5–10 business days, bank transfers 3–5 business days.",
    ],
  },
  {
    heading: "Disputes",
    content:
      "If you believe your refund request has been unfairly denied, you may escalate by emailing our founder directly. We take every dispute seriously and prefer to resolve issues amicably. If a resolution cannot be reached, disputes are subject to the process outlined in our Terms of Service.",
  },
  {
    heading: "Changes to This Policy",
    content:
      "This refund policy may be updated from time to time. The version in effect at the time of your project engagement applies to that engagement. We will notify active clients of any material changes via email.",
  },
];

export default function RefundPage() {
  return (
    <LegalPage
      title="Refund Policy"
      subtitle="We believe in fair, transparent terms. This policy outlines how refunds and cancellations are handled for all Bagora Agency services."
      lastUpdated="March 2025"
      sections={sections}
    />
  );
}