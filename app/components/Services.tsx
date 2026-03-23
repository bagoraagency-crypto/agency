"use client";

import { useState, useRef, useEffect } from "react";

const SERVICES = [
  {
    id: 1,
    number: "01",
    title: "Web Development",
    short: "Fast, scalable websites built to convert.",
    description:
      "From marketing sites to complex web platforms, we craft pixel perfect, performant experiences. Every line of code is written with speed, accessibility, and SEO in mind.",
    deliverables: ["Landing Pages", "SaaS Platforms", "E Commerce", "CMS Integration"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="4" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 20h8M12 18v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 11l-2 1 2 1M17 11l2 1-2 1M12 9l-1 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 2,
    number: "02",
    title: "App Development",
    short: "Native & cross platform apps that users love.",
    description:
      "We build iOS, Android, and cross platform mobile apps with clean architecture and intuitive UX. Designed for scale from day one whether you're pre launch or post product market fit.",
    deliverables: ["iOS & Android", "React Native", "PWA", "App Store Launch"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="7" y="2" width="10" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="17" r="1" fill="currentColor" />
        <path d="M10 5h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 3,
    number: "03",
    title: "UI/UX Design",
    short: "Interfaces that feel inevitable.",
    description:
      "Great design is invisible. We obsess over every interaction, every micro animation, every transition so your users move through your product effortlessly and come back for more.",
    deliverables: ["Figma Prototypes", "Design Systems", "User Research", "Brand Identity"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="8" cy="16" r="3" stroke="currentColor" strokeWidth="1.5" />
        <rect x="13" y="13" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: 4,
    number: "04",
    title: "WordPress/Shopify",
    short: "Powerful, easy to manage CMS sites.",
    description:
      "Custom CMS themes, plugins, and full site builds that are fast, secure, and easy for your team to manage no developer needed for day to day updates.",
    deliverables: ["Custom Themes", "Plugin Development", "WooCommerce", "Site Migration"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 12h4M18 12h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 2c-2 3-3 6-3 10s1 7 3 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 2c2 3 3 6 3 10s-1 7-3 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 5,
    number: "05",
    title: "SEO & Performance",
    short: "Visibility and speed both, not either.",
    description:
      "We optimize your site from the ground up Core Web Vitals, technical SEO, structured data, and content strategy so you rank higher and load faster than your competition.",
    deliverables: ["Core Web Vitals", "Technical SEO", "Analytics Setup", "Page Speed"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 17l4-6 4 3 4-8 4 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="19" cy="5" r="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: 6,
    number: "06",
    title: "AI Agents",
    short: "Intelligent automation built into your product.",
    description:
      "We design and build custom AI agents and automations from chatbots and copilots to fully autonomous workflows. Powered by the latest LLMs and integrated directly into your existing stack.",
    deliverables: ["Custom Chatbots", "LLM Integration", "Workflow Automation", "RAG Systems"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="7" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 7V5a4 4 0 018 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="9" cy="13" r="1.5" fill="currentColor" />
        <circle cx="15" cy="13" r="1.5" fill="currentColor" />
        <path d="M9 17c1 1 5 1 6 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
] as const;

export default function Services() {
  const [hoveredId, setHoveredId]     = useState<number | null>(null);
  const [expandedId, setExpandedId]   = useState<number | null>(null);
  /* Mobile scroll-driven active index — mirrors Timeline logic */
  const [mobileActiveId, setMobileActiveId] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  /* Scroll listener — only runs on mobile (window.innerWidth < 640) */
  useEffect(() => {
    const onScroll = () => {
      if (window.innerWidth >= 640) return; // desktop: do nothing

      let closestId: number | null = null;
      let minDist = Infinity;

      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        const r    = el.getBoundingClientRect();
        const mid  = r.top + r.height / 2;
        const dist = Math.abs(mid - window.innerHeight / 2);
        if (dist < minDist) {
          minDist   = dist;
          closestId = SERVICES[i].id;
        }
      });

      setMobileActiveId(closestId);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll(); // run once on mount
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      className="relative w-full py-16 sm:py-32 overflow-hidden"
      style={{ backgroundColor: "var(--bg)" }}
    >
      {/* Grid bg */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(var(--gradient-grid) 1px, transparent 1px),
            linear-gradient(90deg, var(--gradient-grid) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Ambient blob */}
      <div
        className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full pointer-events-none z-0 opacity-[0.05] blur-[120px]"
        style={{
          background: "radial-gradient(circle, var(--gold) 0%, transparent 70%)",
          transform: "translateY(-50%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">

        {/* ── Section header ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 sm:gap-8 mb-10 sm:mb-20">
          <div>
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <span className="w-8 h-px" style={{ backgroundColor: "var(--gold)" }} />
              <span className="text-xs font-semibold tracking-[0.18em] uppercase" style={{ color: "var(--gold)" }}>
                What We Do
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight"
              style={{
                background: "linear-gradient(to right, #ffffff, #888888)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Services built for
              <br />
              <span style={{
                background: "var(--gradient-primary)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                real businesses.
              </span>
            </h2>
          </div>
          <p className="text-sm leading-relaxed max-w-xs" style={{ color: "var(--text-muted)" }}>
            Every service we offer is designed to move the needle. Not just check a box. We build things that scale.
          </p>
        </div>

        {/* ── Service cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {SERVICES.map((service, i) => {
            const isHovered  = hoveredId === service.id;
            const isExpanded = expandedId === service.id;
            /* On mobile: active = scroll-driven. On desktop: active = hover */
            const isMobileActive = mobileActiveId === service.id;
            const isActive = isHovered || isExpanded || isMobileActive;

            return (
              <div
                key={service.id}
                ref={(el) => { cardRefs.current[i] = el; }}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setExpandedId(isExpanded ? null : service.id)}
                className="relative rounded-2xl overflow-hidden cursor-pointer"
                style={{
                  minHeight: "300px",
                  padding: "22px",
                  backgroundColor: isActive
                    ? "rgba(201,169,97,0.08)"
                    : "rgba(255,255,255,0.02)",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: isActive ? "var(--border-hover)" : "var(--border)",
                  boxShadow: isActive ? "var(--glow-sm)" : "none",
                  transition: "background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
                  willChange: "box-shadow, border-color, background-color",
                }}
              >
                {/* Corner number watermark */}
                <span
                  className="absolute top-3 right-4 text-4xl sm:text-5xl font-extrabold select-none pointer-events-none leading-none"
                  style={{
                    color: isActive ? "rgba(201,169,97,0.12)" : "rgba(255,255,255,0.04)",
                    transition: "color 0.3s ease",
                  }}
                >
                  {service.number}
                </span>

                {/* Icon */}
                <div
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center mb-4 sm:mb-5"
                  style={{
                    background: isActive ? "var(--gradient-primary)" : "rgba(201,169,97,0.1)",
                    color: isActive ? "var(--bg-deep)" : "var(--gold)",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: isActive ? "transparent" : "var(--border)",
                    transition: "background 0.3s ease, color 0.3s ease, border-color 0.3s ease",
                  }}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3
                  className="text-base sm:text-lg font-bold mb-1"
                  style={{
                    color: isActive ? "var(--text)" : "rgba(255,255,255,0.85)",
                    transition: "color 0.3s ease",
                  }}
                >
                  {service.title}
                </h3>

                {/* Short tagline */}
                <p className="text-[11px] sm:text-xs mb-3 sm:mb-4" style={{ color: "var(--gold-dim)" }}>
                  {service.short}
                </p>

                {/* Divider */}
                <div
                  className="w-full h-px mb-3 sm:mb-4"
                  style={{
                    backgroundColor: isActive ? "var(--border-hover)" : "var(--border)",
                    transition: "background-color 0.3s ease",
                  }}
                />

                {/* Description + deliverables */}
                <div className="relative">

                  {/* Description */}
                  <div
                    style={{
                      opacity: isActive ? 0 : 1,
                      transform: isActive ? "translateY(-6px)" : "translateY(0px)",
                      transition: "opacity 0.25s ease, transform 0.25s ease",
                      pointerEvents: isActive ? "none" : "auto",
                    }}
                  >
                    <p className="text-[12px] sm:text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      {service.description}
                    </p>
                    <div className="flex items-center gap-1.5 mt-4" style={{ color: "var(--gold-dim)" }}>
                      <span className="text-[10px] sm:text-[11px] font-medium">
                        <span className="sm:hidden">Tap</span>
                        <span className="hidden sm:inline">Hover</span>
                        {" "}to see deliverables
                      </span>
                      <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                        <path d="M6 2v8M2 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>

                  {/* Deliverables */}
                  <div
                    className="absolute inset-0"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? "translateY(0px)" : "translateY(8px)",
                      transition: "opacity 0.3s ease 0.05s, transform 0.3s ease 0.05s",
                      pointerEvents: isActive ? "auto" : "none",
                    }}
                  >
                    <p
                      className="text-[10px] font-semibold tracking-[0.14em] uppercase mb-3"
                      style={{ color: "var(--gold)" }}
                    >
                      Deliverables
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.deliverables.map((d) => (
                        <span
                          key={d}
                          className="text-[11px] font-medium px-2.5 sm:px-3 py-1 rounded-full"
                          style={{
                            backgroundColor: "rgba(201,169,97,0.1)",
                            borderWidth: "1px",
                            borderStyle: "solid",
                            borderColor: "var(--border)",
                            color: "var(--gold-dim)",
                          }}
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* ── Bottom CTA strip ── */}
        <div
          className="mt-10 sm:mt-16 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-6"
          style={{
            backgroundColor: "rgba(201,169,97,0.05)",
            border: "1px solid var(--border)",
          }}
        >
          <div>
            <p className="text-base sm:text-lg font-bold mb-1" style={{ color: "var(--text)" }}>
              Not sure what you need?
            </p>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              Book a free 30 min call and we will figure it out together.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0 w-full sm:w-auto">
            <a
              href="https://cal.com/bagora-agency-pfnups/secret"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex-1 whitespace-nowrap sm:flex-none text-sm font-semibold px-5 sm:px-6 py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] text-center"
              style={{ color: "var(--bg-deep)" }}
            >
              Book a Free Call
            </a>
            <a
              href="/form-inquiry"
              className="btn-secondary flex-1 sm:flex-none text-sm font-medium px-5 sm:px-6 py-3 rounded-full text-center"
            >
              Get a Quote
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}