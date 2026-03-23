"use client";

import Link from "next/link";

const NAV_LINKS = {
  Services: [
    { label: "Web Development",      href: "/services#web" },
    { label: "App Development",      href: "/services#app" },
    { label: "UI/UX Design",         href: "/services#design" },
    { label: "API & Backend",        href: "/services#backend" },
    { label: "SEO & Performance",    href: "/services#seo" },
    { label: "WordPress / Shopify",  href: "/services#wordpress" },
    { label: "AI Agents",            href: "/services#Agents" },
  ],
  Company: [
    { label: "About Us",   href: "/about" },
    { label: "Our Work",   href: "/testimonials" },
    { label: "Pricing",    href: "/pricing" },
    { label: "Blog",       href: "/blog" },
    { label: "Careers",    href: "/careers" },
  ],
  Legal: [
    { label: "Privacy Policy",   href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy",    href: "/cookies" },
    { label: "Refund Policy",    href: "/refund" },
  ],
} as const;

const SOCIALS = [
  {
    label: "Twitter / X",
    href: "https://x.com/bagoraagency",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/bagora-agency",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/bagoraagencyy",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "Youtube",
    href: "https://www.youtube.com/@BagoraAgency",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.5 6.2a2.9 2.9 0 0 0-2-2C19.7 3.5 12 3.5 12 3.5s-7.7 0-9.5.7a2.9 2.9 0 0 0-2 2A30.6 30.6 0 0 0 0 12a30.6 30.6 0 0 0 .5 5.8 2.9 2.9 0 0 0 2 2c1.8.7 9.5.7 9.5.7s7.7 0 9.5-.7a2.9 2.9 0 0 0 2-2A30.6 30.6 0 0 0 24 12a30.6 30.6 0 0 0-.5-5.8zM9.8 15.5v-7l6.2 3.5-6.2 3.5z" />
      </svg>
    ),
  },
] as const;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden" style={{ backgroundColor: "var(--bg-deep)" }}>

      {/* Top glow line */}
      <div
        className="w-full h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(201,169,97,0.4) 40%, rgba(201,169,97,0.4) 60%, transparent)" }}
      />

      {/* Grid bg */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(var(--gradient-grid) 1px, transparent 1px),
            linear-gradient(90deg, var(--gradient-grid) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          opacity: 0.5,
        }}
      />

      {/* Ambient blob */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none z-0 opacity-[0.04] blur-[100px]"
        style={{ background: "radial-gradient(ellipse, var(--gold) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">

        {/* ── CTA banner ── */}
        <div
          className="my-10 sm:my-16 rounded-2xl p-8 sm:p-10 md:p-14 text-center relative overflow-hidden"
          style={{
            backgroundColor: "rgba(201,169,97,0.05)",
            border: "1px solid var(--border-hover)",
            boxShadow: "var(--glow-sm)",
          }}
        >
          {/* Corner accents — hidden on mobile to reduce clutter */}
          <div className="hidden sm:block absolute top-0 left-0 w-16 h-16 pointer-events-none">
            <div className="absolute top-4 left-4 w-6 h-px" style={{ backgroundColor: "var(--gold)", opacity: 0.5 }} />
            <div className="absolute top-4 left-4 w-px h-6" style={{ backgroundColor: "var(--gold)", opacity: 0.5 }} />
          </div>
          <div className="hidden sm:block absolute top-0 right-0 w-16 h-16 pointer-events-none">
            <div className="absolute top-4 right-4 w-6 h-px" style={{ backgroundColor: "var(--gold)", opacity: 0.5 }} />
            <div className="absolute top-4 right-4 w-px h-6" style={{ backgroundColor: "var(--gold)", opacity: 0.5 }} />
          </div>
          <div className="hidden sm:block absolute bottom-0 left-0 w-16 h-16 pointer-events-none">
            <div className="absolute bottom-4 left-4 w-6 h-px" style={{ backgroundColor: "var(--gold)", opacity: 0.5 }} />
            <div className="absolute bottom-4 left-4 w-px h-6" style={{ backgroundColor: "var(--gold)", opacity: 0.5 }} />
          </div>
          <div className="hidden sm:block absolute bottom-0 right-0 w-16 h-16 pointer-events-none">
            <div className="absolute bottom-4 right-4 w-6 h-px" style={{ backgroundColor: "var(--gold)", opacity: 0.5 }} />
            <div className="absolute bottom-4 right-4 w-px h-6" style={{ backgroundColor: "var(--gold)", opacity: 0.5 }} />
          </div>

          <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-3 sm:mb-4" style={{ color: "var(--gold)" }}>
            Ready to build?
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
            Let's turn your idea into<br />
            <span style={{
              background: "var(--gradient-primary)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              something real.
            </span>
          </h2>
          <p className="text-sm mb-6 sm:mb-8 max-w-md mx-auto" style={{ color: "var(--text-muted)" }}>
            Book a free 20-minute discovery call. No pitch, no pressure just an honest conversation about what you're building.
          </p>

          {/* Buttons — always row, stacked only if truly needed */}
          <div className="flex flex-row items-center justify-center gap-3 flex-wrap">
            <a
              href="https://cal.com/bagora-agency/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm font-bold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] whitespace-nowrap"
              style={{ color: "var(--bg-deep)" }}
            >
              Book a Discovery Call
            </a>
            <Link
              href="/form-inquiry"
              className="btn-secondary text-sm font-medium px-6 sm:px-8 py-3 sm:py-3.5 rounded-full whitespace-nowrap"
            >
              Send a Brief
            </Link>
          </div>
        </div>

        {/* ── Main footer grid ── */}
        {/*
          Mobile:  brand full-width on top, then 3 nav columns in a 3-col grid
          Desktop: 4-column layout (brand + 3 nav columns)
        */}
        <div className="pb-10 sm:pb-12">

          {/* Brand row — full width on all sizes, above nav columns */}
          <div className="mb-8 sm:mb-0 sm:hidden">
{/* ── Logo ── */}
<Link href="/" className="flex items-center">
  <svg width="180" height="54" viewBox="0 0 520 160" xmlns="http://www.w3.org/2000/svg">
    
    {/* ── Icon Container (Left Symbol) ── */}
    <g transform="translate(10, 10)">

      {/* Corner Nodes (Network Points) */}
      <circle cx="18" cy="18" r="7" fill="var(--gold)"/>   {/* Top-left node */}
      <circle cx="118" cy="18" r="7" fill="var(--gold)"/>  {/* Top-right node */}
      <circle cx="18" cy="118" r="7" fill="var(--gold)"/>  {/* Bottom-left node */}
      <circle cx="118" cy="118" r="7" fill="var(--gold)"/> {/* Bottom-right node */}

      {/* Center Node (Core / AI Brain) */}
      <circle cx="68" cy="68" r="7" fill="var(--gold)"/>

      {/* Outer Frame Lines (Square Structure) */}
      <line x1="18" y1="18" x2="118" y2="18" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round"/>  {/* Top edge */}
      <line x1="18" y1="18" x2="18" y2="118" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round"/>  {/* Left edge */}
      <line x1="18" y1="118" x2="118" y2="118" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round"/> {/* Bottom edge */}

      {/* Diagonal Connections (Network / Data Flow) */}
      <line x1="18" y1="18" x2="68" y2="68" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round"/>   {/* TL → Center */}
      <line x1="118" y1="18" x2="68" y2="68" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round"/>  {/* TR → Center */}
      <line x1="18" y1="118" x2="68" y2="68" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round"/>  {/* BL → Center */}
      <line x1="118" y1="118" x2="68" y2="68" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round"/> {/* BR → Center */}

      

      {/* Curved Paths (Flow / AI Processing Layers) */}
      <path 
        d="M18 18 Q80 18 80 43 Q80 68 18 68" 
        fill="none" 
        stroke="var(--gold)" 
        strokeWidth="6" 
        strokeLinecap="round"
      /> {/* Top curved flow */}

      <path 
        d="M18 68 Q90 68 90 93 Q90 118 18 118" 
        fill="none" 
        stroke="var(--gold)" 
        strokeWidth="6" 
        strokeLinecap="round"
      /> {/* Bottom curved flow */}

      {/* Small Arrow Indicators (Code / Direction) */}
      <path d="M52 38 L44 43 L52 48" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> {/* Left arrow top */}
      <path d="M72 38 L80 43 L72 48" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> {/* Right arrow top */}

      <path d="M52 88 L44 93 L52 98" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> {/* Left arrow bottom */}
      <path d="M72 88 L80 93 L72 98" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> {/* Right arrow bottom */}

      {/* Main Diagonal Slash (Signature / Energy / Movement) */}
      <line 
        x1="22" y1="112" 
        x2="108" y2="26" 
        stroke="var(--gold)" 
        strokeWidth="5" 
        strokeLinecap="round"
      />

      {/* Arrow Head (Direction / Growth) */}
      <polygon points="108,26 92,28 106,42" fill="var(--gold)"/>

    </g>

    {/* ── Brand Text ── */}
    <text 
      x="178" 
      y="72" 
      fontSize="38" 
      fontWeight="700" 
      letterSpacing="2" 
      fill="var(--gold)"
    >
      BAGORA
    </text>

    <text 
      x="178" 
      y="118" 
      fontSize="38" 
      fontWeight="700" 
      letterSpacing="2" 
      fill="var(--gold)"
    >
      AGENCY
    </text>

  </svg>
</Link>
            <p className="text-sm leading-relaxed mb-4 max-w-[280px]" style={{ color: "var(--text-muted)" }}>
              Premium Web, App and AI development agency. We build things that work and look exceptional.
            </p>
            <div className="flex items-center gap-2.5">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300"
                  style={{ backgroundColor: "rgba(201,169,97,0.08)", border: "1px solid var(--border)", color: "var(--text-muted)" }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns — 3 cols on mobile, 4 cols on desktop */}
          <div className="grid grid-cols-3 md:grid-cols-[2fr_1fr_1fr_1fr] gap-6 sm:gap-10">

            {/* Brand column — desktop only */}
            <div className="hidden md:block">
            {/* ── Logo ── */}
<Link href="/" className="flex items-center">
  <svg width="180" height="54" viewBox="0 0 520 160" xmlns="http://www.w3.org/2000/svg">
    
    {/* ── Icon Container (Left Symbol) ── */}
    <g transform="translate(10, 10)">

      {/* Corner Nodes (Network Points) */}
      <circle cx="18" cy="18" r="7" fill="var(--gold)"/>   {/* Top-left node */}
      <circle cx="118" cy="18" r="7" fill="var(--gold)"/>  {/* Top-right node */}
      <circle cx="18" cy="118" r="7" fill="var(--gold)"/>  {/* Bottom-left node */}
      <circle cx="118" cy="118" r="7" fill="var(--gold)"/> {/* Bottom-right node */}

      {/* Center Node (Core / AI Brain) */}
      <circle cx="68" cy="68" r="7" fill="var(--gold)"/>

      {/* Outer Frame Lines (Square Structure) */}
      <line x1="18" y1="18" x2="118" y2="18" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round"/>  {/* Top edge */}
      <line x1="18" y1="18" x2="18" y2="118" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round"/>  {/* Left edge */}
      <line x1="18" y1="118" x2="118" y2="118" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round"/> {/* Bottom edge */}

      {/* Diagonal Connections (Network / Data Flow) */}
      <line x1="18" y1="18" x2="68" y2="68" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round"/>   {/* TL → Center */}
      <line x1="118" y1="18" x2="68" y2="68" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round"/>  {/* TR → Center */}
      <line x1="18" y1="118" x2="68" y2="68" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round"/>  {/* BL → Center */}
      <line x1="118" y1="118" x2="68" y2="68" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round"/> {/* BR → Center */}

      

      {/* Curved Paths (Flow / AI Processing Layers) */}
      <path 
        d="M18 18 Q80 18 80 43 Q80 68 18 68" 
        fill="none" 
        stroke="var(--gold)" 
        strokeWidth="6" 
        strokeLinecap="round"
      /> {/* Top curved flow */}

      <path 
        d="M18 68 Q90 68 90 93 Q90 118 18 118" 
        fill="none" 
        stroke="var(--gold)" 
        strokeWidth="6" 
        strokeLinecap="round"
      /> {/* Bottom curved flow */}

      {/* Small Arrow Indicators (Code / Direction) */}
      <path d="M52 38 L44 43 L52 48" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> {/* Left arrow top */}
      <path d="M72 38 L80 43 L72 48" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> {/* Right arrow top */}

      <path d="M52 88 L44 93 L52 98" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> {/* Left arrow bottom */}
      <path d="M72 88 L80 93 L72 98" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> {/* Right arrow bottom */}

      {/* Main Diagonal Slash (Signature / Energy / Movement) */}
      <line 
        x1="22" y1="112" 
        x2="108" y2="26" 
        stroke="var(--gold)" 
        strokeWidth="5" 
        strokeLinecap="round"
      />

      {/* Arrow Head (Direction / Growth) */}
      <polygon points="108,26 92,28 106,42" fill="var(--gold)"/>

    </g>

    {/* ── Brand Text ── */}
    <text 
      x="178" 
      y="72" 
      fontSize="38" 
      fontWeight="700" 
      letterSpacing="2" 
      fill="var(--gold)"
    >
      BAGORA
    </text>

    <text 
      x="178" 
      y="118" 
      fontSize="38" 
      fontWeight="700" 
      letterSpacing="2" 
      fill="var(--gold)"
    >
      AGENCY
    </text>

  </svg>
</Link>
              <p className="text-sm leading-relaxed mb-6 max-w-[220px]" style={{ color: "var(--text-muted)" }}>
                Premium Web, App and AI development agency. We build things that work and look exceptional.
              </p>
              <div className="flex items-center gap-3">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
                    style={{ backgroundColor: "rgba(201,169,97,0.08)", border: "1px solid var(--border)", color: "var(--text-muted)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "var(--gold)";
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--border-hover)";
                      (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(201,169,97,0.12)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                      (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(201,169,97,0.08)";
                    }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Nav columns */}
            {Object.entries(NAV_LINKS).map(([group, links]) => (
              <div key={group}>
                <p className="text-[10px] font-bold tracking-[0.16em] uppercase mb-3 sm:mb-4" style={{ color: "var(--gold)" }}>
                  {group}
                </p>
                <ul className="flex flex-col gap-2 sm:gap-2.5">
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="text-[12px] sm:text-sm transition-colors duration-200"
                        style={{ color: "var(--text-muted)" }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text)"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"; }}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-3 py-5 sm:py-6 text-center sm:text-left"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p className="text-xs" style={{ color: "var(--text-dim)" }}>
            © {currentYear} Bagora Agency. All rights reserved.
          </p>
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
              <span className="text-xs" style={{ color: "var(--text-dim)" }}>Available for new projects</span>
            </div>
            <span className="text-xs hidden sm:block" style={{ color: "var(--text-dim)" }}>·</span>
            <p className="text-xs" style={{ color: "var(--text-dim)" }}>Built by Bagora 🚀</p>
          </div>
        </div>

      </div>
    </footer>
  );
}