import Link from "next/link";

export interface LegalSection {
  heading: string;
  content: string | string[];
}

export interface LegalPageProps {
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: LegalSection[];
}

const LEGAL_LINKS = [
  { label: "Privacy Policy",   href: "/privacy" },
  { label: "Terms of Service", href: "/terms"   },
  { label: "Refund Policy",    href: "/refund"   },
] as const;

export default function LegalPage({ title, subtitle, lastUpdated, sections = [] }: LegalPageProps) {
  return (
    <main
      className="relative min-h-screen w-full pt-32 pb-24 overflow-hidden"
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
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full pointer-events-none z-0 opacity-[0.04] blur-[120px]"
        style={{ background: "radial-gradient(ellipse, var(--gold) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* ── Breadcrumb ── */}
        <div className="flex items-center gap-2 mb-10 text-xs" style={{ color: "var(--text-muted)" }}>
          <Link href="/" className="hover:text-white transition-colors duration-200">Home</Link>
          <span style={{ color: "var(--text-dim)" }}>›</span>
          <span style={{ color: "var(--gold)" }}>{title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-12">

          {/* ── Sidebar ── */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p
                className="text-[10px] font-bold tracking-[0.16em] uppercase mb-4"
                style={{ color: "var(--gold)" }}
              >
                Legal
              </p>
              <nav className="flex flex-col gap-1">
                {LEGAL_LINKS.map(({ label, href }) => {
                  const isActive = title === label;
                  return (
                    <Link
                      key={href}
                      href={href}
                      className="text-sm px-3 py-2 rounded-lg transition-all duration-200"
                      style={{
                        backgroundColor: isActive ? "rgba(201,169,97,0.1)" : "transparent",
                        color: isActive ? "var(--gold)" : "var(--text-muted)",
                        border: isActive ? "1px solid var(--border)" : "1px solid transparent",
                        fontWeight: isActive ? 600 : 400,
                      }}
                    >
                      {label}
                    </Link>
                  );
                })}
              </nav>

              {/* Back home */}
              <div className="mt-8 pt-6" style={{ borderTop: "1px solid var(--border)" }}>
                <Link
                  href="/"
                  className="flex items-center gap-2 text-xs transition-colors duration-200"
                  style={{ color: "var(--text-dim)" }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M8 2L4 6l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Back to Home
                </Link>
              </div>
            </div>
          </aside>

          {/* ── Main content ── */}
          <div>

            {/* Page header */}
            <div className="mb-10 pb-8" style={{ borderBottom: "1px solid var(--border)" }}>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px" style={{ backgroundColor: "var(--gold)" }} />
                <span className="text-xs font-semibold tracking-[0.18em] uppercase" style={{ color: "var(--gold)" }}>
                  Legal
                </span>
              </div>
              <h1
                className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3"
                style={{
                  background: "linear-gradient(to right, #ffffff, #888888)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {title}
              </h1>
              <p className="text-sm mb-3" style={{ color: "var(--text-muted)" }}>{subtitle}</p>
              <p className="text-xs" style={{ color: "var(--text-dim)" }}>
                Last updated: {lastUpdated}
              </p>
            </div>

            {/* Sections */}
            <div className="flex flex-col gap-10">
              {sections.map((section, i) => (
                <div key={i}>
                  <h2
                    className="text-lg font-bold mb-3"
                    style={{ color: "var(--text)" }}
                  >
                    <span style={{ color: "var(--gold)", marginRight: "8px" }}>
                      {String(i + 1).padStart(2, "0")}.
                    </span>
                    {section.heading}
                  </h2>
                  {Array.isArray(section.content) ? (
                    <ul className="flex flex-col gap-2 pl-4">
                      {section.content.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                          <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: "var(--gold)" }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      {section.content}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Contact footer */}
            <div
              className="mt-14 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              style={{
                backgroundColor: "rgba(201,169,97,0.05)",
                border: "1px solid var(--border)",
              }}
            >
              <div>
                <p className="text-sm font-bold mb-1" style={{ color: "var(--text)" }}>
                  Questions about this policy?
                </p>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                  Reach out and we'll respond within 24 hours.
                </p>
              </div>
              <a
                href="mailto:legal@bagoraagency.com"
                className="btn-primary text-sm font-semibold px-5 py-2.5 rounded-full flex-shrink-0 transition-all duration-300 hover:-translate-y-0.5"
                style={{ color: "var(--bg-deep)" }}
              >
                Contact Us
              </a>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}