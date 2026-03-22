"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Testimonials", href: "/testimonials" },
  { label: "Services",     href: "/services"     },
  { label: "About Us",     href: "/about"        },
  { label: "Pricing",      href: "/pricing"      },
] as const;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 z-50 w-full backdrop-blur-md border-b"
      style={{ backgroundColor: "rgba(11,31,58,0.75)", borderColor: "var(--border)" }}
    >
      <nav className="flex items-center justify-between max-w-[1200px] mx-auto px-4 sm:px-6 py-3 sm:py-5">

        {/* ── Logo — smaller on mobile ── */}
        <Link href="/" className="flex items-center flex-shrink-0">
          {/* Desktop logo */}
          <svg className="hidden sm:block" width="180" height="54" viewBox="0 0 520 160" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(10, 10)">
              <circle cx="18" cy="18" r="7" fill="var(--gold)"/>
              <circle cx="118" cy="18" r="7" fill="var(--gold)"/>
              <circle cx="18" cy="118" r="7" fill="var(--gold)"/>
              <circle cx="118" cy="118" r="7" fill="var(--gold)"/>
              <circle cx="68" cy="68" r="7" fill="var(--gold)"/>
              <line x1="18" y1="18" x2="118" y2="18" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="18" y1="18" x2="18" y2="118" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="18" y1="118" x2="118" y2="118" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="18" y1="18" x2="68" y2="68" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="118" y1="18" x2="68" y2="68" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="18" y1="118" x2="68" y2="68" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="118" y1="118" x2="68" y2="68" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M18 18 Q80 18 80 43 Q80 68 18 68" fill="none" stroke="var(--gold)" strokeWidth="6" strokeLinecap="round"/>
              <path d="M18 68 Q90 68 90 93 Q90 118 18 118" fill="none" stroke="var(--gold)" strokeWidth="6" strokeLinecap="round"/>
              <path d="M52 38 L44 43 L52 48" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M72 38 L80 43 L72 48" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M52 88 L44 93 L52 98" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M72 88 L80 93 L72 98" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="22" y1="112" x2="108" y2="26" stroke="var(--gold)" strokeWidth="5" strokeLinecap="round"/>
              <polygon points="108,26 92,28 106,42" fill="var(--gold)"/>
            </g>
            <text x="178" y="72" fontSize="38" fontWeight="700" letterSpacing="2" fill="var(--gold)">BAGORA</text>
            <text x="178" y="118" fontSize="38" fontWeight="700" letterSpacing="2" fill="var(--gold)">AGENCY</text>
          </svg>

          {/* Mobile logo — icon + text, compact */}
          <svg className="block sm:hidden" width="120" height="36" viewBox="0 0 520 160" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(10, 10)">
              <circle cx="18" cy="18" r="7" fill="var(--gold)"/>
              <circle cx="118" cy="18" r="7" fill="var(--gold)"/>
              <circle cx="18" cy="118" r="7" fill="var(--gold)"/>
              <circle cx="118" cy="118" r="7" fill="var(--gold)"/>
              <circle cx="68" cy="68" r="7" fill="var(--gold)"/>
              <line x1="18" y1="18" x2="118" y2="18" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="18" y1="18" x2="18" y2="118" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="18" y1="118" x2="118" y2="118" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="18" y1="18" x2="68" y2="68" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="118" y1="18" x2="68" y2="68" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="18" y1="118" x2="68" y2="68" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="118" y1="118" x2="68" y2="68" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M18 18 Q80 18 80 43 Q80 68 18 68" fill="none" stroke="var(--gold)" strokeWidth="6" strokeLinecap="round"/>
              <path d="M18 68 Q90 68 90 93 Q90 118 18 118" fill="none" stroke="var(--gold)" strokeWidth="6" strokeLinecap="round"/>
              <path d="M52 38 L44 43 L52 48" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M72 38 L80 43 L72 48" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M52 88 L44 93 L52 98" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M72 88 L80 93 L72 98" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="22" y1="112" x2="108" y2="26" stroke="var(--gold)" strokeWidth="5" strokeLinecap="round"/>
              <polygon points="108,26 92,28 106,42" fill="var(--gold)"/>
            </g>
            <text x="178" y="72" fontSize="38" fontWeight="700" letterSpacing="2" fill="var(--gold)">BAGORA</text>
            <text x="178" y="118" fontSize="38" fontWeight="700" letterSpacing="2" fill="var(--gold)">AGENCY</text>
          </svg>
        </Link>

        {/* ── Desktop Nav Links ── */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <Link key={label} href={href} className="nav-link">
              {label}
            </Link>
          ))}
        </div>

        {/* ── Desktop CTA ── */}
        <div className="hidden md:flex items-center">
          <Link
            href="/form-inquiry"
            className="btn-primary text-sm font-semibold px-5 py-2.5 rounded-full"
            style={{ color: "var(--bg-deep)" }}
          >
            Get Started
          </Link>
        </div>

        {/* ── Mobile right side: CTA + Hamburger ── */}
        <div className="md:hidden flex items-center gap-2.5">
          <Link
            href="/form-inquiry"
            className="btn-primary text-xs font-semibold px-4 py-2 rounded-full"
            style={{ color: "var(--bg-deep)" }}
          >
            Get Started
          </Link>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex flex-col justify-center items-center gap-1.5 w-8 h-8 transition-colors duration-200"
            style={{ color: "var(--text-muted)" }}
            aria-label="Toggle menu"
          >
            <span className={`block h-px w-5 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block h-px w-5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px w-5 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>

      </nav>

      {/* ── Mobile Menu dropdown ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div
          className="flex flex-col gap-1 px-4 pb-5 backdrop-blur-md border-t"
          style={{ backgroundColor: "rgba(11,31,58,0.95)", borderColor: "var(--border)" }}
        >
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium py-3 border-b transition-colors duration-200"
              style={{ color: "var(--text-muted)", borderColor: "var(--border)" }}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

    </header>
  );
}