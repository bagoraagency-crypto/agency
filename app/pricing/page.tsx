import Navbar from "../components/Navbar";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — Bagora Agency",
  description:
    "Simple, transparent pricing for web development, app development, and design. No hidden fees. Pick a plan or book a free call.",
};

export default function PricingPage() {
  return (
    <>
      <Navbar />

      {/* ── Page header ── */}
      <div
        className="relative w-full pt-36 pb-0 overflow-hidden"
        style={{ backgroundColor: "var(--bg)" }}
      >
        {/* Grid bg */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(var(--gradient-grid) 1px, transparent 1px),
              linear-gradient(90deg, var(--gradient-grid) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Ambient blob */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full pointer-events-none z-0 opacity-[0.04] blur-[120px]"
          style={{ background: "radial-gradient(ellipse, var(--gold) 0%, transparent 70%)" }}
        />

        {/* Breadcrumb */}
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div
            className="flex items-center gap-2 mb-8 text-xs"
            style={{ color: "var(--text-muted)" }}
          >
            <a
              href="/"
              className="hover:text-white transition-colors duration-200"
            >
              Home
            </a>
            <span style={{ color: "var(--text-dim)" }}>›</span>
            <span style={{ color: "var(--gold)" }}>Pricing</span>
          </div>
        </div>
      </div>

      {/* ── Pricing component (has all plans, toggle, trust strip, FAQs) ── */}
      <Pricing />

      <Footer />
    </>
  );
}