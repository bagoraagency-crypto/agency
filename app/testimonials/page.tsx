import Navbar from "../components/Navbar";
import SocialProof from "../components/Socialproof";
import Footer from "../components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials & Case Studies — Bagora Agency",
  description:
    "Real results from real clients. See what founders and product teams say about working with Bagora Agency.",
};

const LOGOS = [
  { name: "CoreCharge Nutrition", initials: "CC" },
  { name: "Restopia Homestay",    initials: "RH" },
  { name: "Old Man Studio",       initials: "OM" },
  { name: "Smile Clinic",         initials: "SC" },
  { name: "Valuation Lab",        initials: "VL" },
  { name: "DermaCare Clinic",     initials: "DC" },
  { name: "Swaad Indian Kitchen", initials: "SI" },
] as const;

const HIGHLIGHTS = [
  {
    metric: "40%",
    description: "Average conversion rate increase across client projects.",
    client: "Measured across 18 client websites post-launch.",
  },
  {
    metric: "3.2s",
    description: "Average reduction in page load time after rebuilds.",
    client: "Based on Core Web Vitals before/after audits.",
  },
  {
    metric: "12 wks",
    description: "Average time from kickoff to live product for web apps.",
    client: "Across 30+ full-stack application builds.",
  },
  {
    metric: "0",
    description: "Missed deadlines in our last 50 projects.",
    client: "We track this religiously. It matters to us.",
  },
] as const;

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />

      {/* ── Page hero ── */}
      <div
        className="relative w-full pt-28 sm:pt-36 pb-14 sm:pb-20 overflow-hidden"
        style={{ backgroundColor: "var(--bg)" }}
      >
        {/* Grid */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(var(--gradient-grid) 1px, transparent 1px),
              linear-gradient(90deg, var(--gradient-grid) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Blob */}
        <div
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none z-0 opacity-[0.05] blur-[120px]"
          style={{ background: "radial-gradient(ellipse, var(--gold) 0%, transparent 70%)" }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6 sm:mb-8 text-xs" style={{ color: "var(--text-muted)" }}>
            <Link href="/" className="hover:text-white transition-colors duration-200">Home</Link>
            <span style={{ color: "var(--text-dim)" }}>›</span>
            <span style={{ color: "var(--gold)" }}>Testimonials</span>
          </div>

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <span className="w-8 h-px" style={{ backgroundColor: "var(--gold)" }} />
              <span className="text-xs font-semibold tracking-[0.18em] uppercase" style={{ color: "var(--gold)" }}>
                Social Proof
              </span>
            </div>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-4 sm:mb-5"
              style={{
                background: "linear-gradient(to right, #ffffff, #888888)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Don't take our word for it.<br />
              <span style={{
                background: "var(--gradient-primary)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Take theirs.
              </span>
            </h1>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Over 120 projects delivered. Real outcomes, real clients, real numbers. Here's what they said.
            </p>
          </div>
        </div>
      </div>

      {/* ── Trusted by logo strip ── */}
      <div
        className="relative w-full py-8 sm:py-10 overflow-hidden"
        style={{ backgroundColor: "var(--bg)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-center text-xs font-semibold tracking-[0.16em] uppercase mb-6 sm:mb-8" style={{ color: "var(--text-dim)" }}>
            Trusted by teams at
          </p>
          {/* Scrollable on mobile, wrap on desktop */}
          <div
            className="flex sm:flex-wrap items-center justify-start sm:justify-center gap-3 overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {LOGOS.map(({ name, initials }) => (
              <div
                key={name}
                className="flex items-center gap-2 sm:gap-2.5 px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl flex-shrink-0"
                style={{
                  backgroundColor: "rgba(255,255,255,0.02)",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  className="w-5 h-5 sm:w-6 sm:h-6 rounded-md flex items-center justify-center text-[9px] sm:text-[10px] font-extrabold flex-shrink-0"
                  style={{ background: "var(--gradient-primary)", color: "var(--bg-deep)" }}
                >
                  {initials}
                </div>
                <span className="text-[11px] sm:text-xs font-medium whitespace-nowrap" style={{ color: "var(--text-muted)" }}>
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Outcome highlights ── */}
      <section
        className="relative w-full py-12 sm:py-20"
        style={{ backgroundColor: "var(--bg)" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {HIGHLIGHTS.map(({ metric, description, client }) => (
              <div
                key={metric}
                className="rounded-2xl p-4 sm:p-6 flex flex-col gap-1.5 sm:gap-2"
                style={{
                  backgroundColor: "rgba(201,169,97,0.04)",
                  border: "1px solid var(--border)",
                }}
              >
                <span
                  className="text-3xl sm:text-4xl font-extrabold leading-none"
                  style={{
                    background: "var(--gradient-primary)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {metric}
                </span>
                <p className="text-[12px] sm:text-sm font-medium leading-snug" style={{ color: "var(--text)" }}>
                  {description}
                </p>
                <p className="text-[10px] sm:text-xs mt-auto" style={{ color: "var(--text-dim)" }}>
                  {client}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SocialProof component ── */}
      <SocialProof />

      {/* ── Bottom CTA ── */}
      <section
        className="relative w-full py-16 sm:py-24"
        style={{ backgroundColor: "var(--bg)", borderTop: "1px solid var(--border)" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div
            className="rounded-2xl p-8 sm:p-10 md:p-14 text-center"
            style={{
              backgroundColor: "rgba(201,169,97,0.05)",
              border: "1px solid var(--border-hover)",
              boxShadow: "var(--glow-sm)",
            }}
          >
            <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-3 sm:mb-4" style={{ color: "var(--gold)" }}>
              Your Turn
            </p>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-3 sm:mb-4"
              style={{
                background: "linear-gradient(to right, #ffffff, #888888)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Ready to become<br />
              <span style={{
                background: "var(--gradient-primary)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                our next case study?
              </span>
            </h2>
            <p className="text-sm mb-6 sm:mb-8 max-w-md mx-auto" style={{ color: "var(--text-muted)" }}>
              Book a free discovery call. We'll talk through your project, tell you what we'd build, and give you a straight answer on timeline and cost.
            </p>
            <div className="flex flex-row items-center justify-center gap-3 flex-wrap">
              <a
                href="https://cal.com/bagora-agency/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm font-bold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
                style={{ color: "var(--bg-deep)" }}
              >
                Book a Free Call
              </a>
              <Link
                href="/form-inquiry"
                className="btn-secondary text-sm font-medium px-6 sm:px-8 py-3 sm:py-3.5 rounded-full whitespace-nowrap"
              >
                Send a Project Brief
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}