"use client";

import { useEffect, useRef, useState } from "react";

const STEPS = [
  {
    id: 1,
    step: "01",
    title: "Discovery & Planning",
    description:
      "We begin by understanding your business goals, target audience, and project requirements. Our team conducts thorough research and creates a detailed project roadmap with timelines and milestones.",
    tags: ["Research", "Strategy", "Roadmap"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 8v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 2,
    step: "02",
    title: "Design & Development",
    description:
      "Our expert designers and developers work together to create an intuitive user interface and robust functionality. We use cutting-edge technologies to build scalable and secure web and mobile applications.",
    tags: ["UI/UX", "Frontend", "Backend"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="6" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 13l-3 2 3 2M18 13l3 2-3 2M14 11l-2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 3,
    step: "03",
    title: "Testing & Quality Assurance",
    description:
      "Rigorous testing is conducted to ensure your application is bug-free, secure, and performs optimally. We test across different devices, browsers, and scenarios to deliver a flawless user experience.",
    tags: ["QA", "Security", "Performance"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4L5 8v7c0 5 4 9 9 11 5-2 9-6 9-11V8L14 4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M10 14l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 4,
    step: "04",
    title: "Launch & Support",
    description:
      "We handle the deployment process and ensure a smooth launch of your application. Post-launch, we provide ongoing maintenance, updates, and technical support to keep your application running smoothly.",
    tags: ["Deployment", "Monitoring", "Support"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4l2 6h6l-5 4 2 6-5-3-5 3 2-6-5-4h6l2-6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
] as const;

export default function Timeline() {
  const sectionRef  = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lineProgress, setLineProgress] = useState(0);
  const cardRefs    = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const onScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const { top, height } = section.getBoundingClientRect();
      const progress = Math.min(Math.max(-top / (height - window.innerHeight), 0), 1);
      setLineProgress(progress);

      let closest = 0;
      let minDist  = Infinity;
      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        const r   = el.getBoundingClientRect();
        const mid = r.top + r.height / 2;
        const dist = Math.abs(mid - window.innerHeight / 2);
        if (dist < minDist) { minDist = dist; closest = i; }
      });
      setActiveIndex(closest);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full" style={{ backgroundColor: "var(--bg)" }}>

      {/* ── Scrolling marquee header ── */}
      <div className="w-full overflow-hidden border-y py-3 sm:py-4" style={{ borderColor: "var(--border)" }}>
        <div className="flex whitespace-nowrap" style={{ animation: "marquee 28s linear infinite" }}>
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-3 sm:gap-4 text-[32px] sm:text-[56px] font-extrabold tracking-tighter mr-6 sm:mr-10 select-none"
              style={{ color: "var(--text-dim)" }}
            >
              PROCESS
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full inline-block" style={{ backgroundColor: "var(--gold)" }} />
            </span>
          ))}
        </div>
      </div>

      {/* ── Section label ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 sm:pt-16 pb-6 sm:pb-8 flex items-center gap-4">
        <span className="w-8 h-px" style={{ backgroundColor: "var(--gold)" }} />
        <span className="text-xs font-semibold tracking-[0.18em] uppercase" style={{ color: "var(--gold)" }}>
          How We Work
        </span>
      </div>

      {/* ── Main layout ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-20 sm:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2px_1.6fr] gap-0">

          {/* Left: sticky panel — desktop only */}
          <div className="hidden lg:block">
            <div className="sticky top-1/3 pb-10">
              <h2 className="text-5xl font-extrabold tracking-tight mb-4 leading-tight" style={{ color: "var(--text)" }}>
                Our<br />
                <span style={{ color: "var(--gold)" }}>Process</span>
              </h2>
              <p className="text-sm leading-relaxed max-w-[260px]" style={{ color: "var(--text-muted)" }}>
                Four focused stages from your first idea to a live, supported product.
              </p>
              <div className="mt-10 flex flex-col gap-3">
                {STEPS.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => cardRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" })}
                    className="flex items-center gap-3 text-left transition-all duration-300"
                  >
                    <span
                      className="w-6 h-6 rounded-full border flex items-center justify-center text-[10px] font-bold transition-all duration-300"
                      style={{
                        borderColor: i === activeIndex ? "var(--gold)" : "var(--border)",
                        backgroundColor: i === activeIndex ? "var(--gold)" : "transparent",
                        color: i === activeIndex ? "var(--bg-deep)" : "var(--text-dim)",
                      }}
                    >
                      {s.id}
                    </span>
                    <span
                      className="text-sm font-medium transition-all duration-300"
                      style={{ color: i === activeIndex ? "var(--gold)" : "var(--text-dim)" }}
                    >
                      {s.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Center: animated line — desktop only */}
          <div className="hidden lg:flex justify-center">
            <div className="relative w-px h-full" style={{ backgroundColor: "var(--border)" }}>
              <div
                className="absolute top-0 left-0 w-full transition-none"
                style={{ height: `${lineProgress * 100}%`, background: "var(--gradient-primary)" }}
              />
              <div
                className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 transition-none"
                style={{
                  top: `calc(${lineProgress * 100}% - 6px)`,
                  borderColor: "var(--gold)",
                  backgroundColor: "var(--bg)",
                  boxShadow: "var(--glow-sm)",
                }}
              />
            </div>
          </div>

          {/* Right: cards — full width on mobile, right column on desktop */}
          <div className="flex flex-col gap-5 sm:gap-12 pl-0 lg:pl-12 pt-0 lg:pt-4">

            {/* Mobile: compact "Our Process" heading */}
            <div className="lg:hidden mb-2">
              <h2 className="text-3xl font-extrabold tracking-tight leading-tight" style={{ color: "var(--text)" }}>
                Our <span style={{ color: "var(--gold)" }}>Process</span>
              </h2>
              <p className="text-sm mt-2 leading-relaxed" style={{ color: "var(--text-muted)" }}>
                Four focused stages from idea to live product.
              </p>
            </div>

            {STEPS.map((step, i) => (
              <div
                key={step.id}
                ref={(el) => { cardRefs.current[i] = el; }}
                className="rounded-2xl transition-all duration-500"
                style={{
                  padding: "20px",
                  backgroundColor: i === activeIndex
                    ? "rgba(201,169,97,0.06)"
                    : "rgba(255,255,255,0.02)",
                  border: `1px solid ${i === activeIndex ? "var(--border-hover)" : "var(--border)"}`,
                  boxShadow: i === activeIndex ? "var(--glow-sm)" : "none",
                }}
              >
                {/* Card header */}
                <div className="flex items-start justify-between mb-4 sm:mb-6">
                  <div className="flex items-center gap-3 sm:gap-4">
                    {/* Icon — smaller on mobile */}
                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "var(--gradient-primary)", color: "var(--bg-deep)" }}
                    >
                      <span className="scale-[0.85] sm:scale-100">
                        {step.icon}
                      </span>
                    </div>
                    <div>
                      <p
                        className="text-[10px] sm:text-xs font-semibold tracking-[0.14em] uppercase mb-0.5 sm:mb-1"
                        style={{ color: "var(--gold)" }}
                      >
                        Step {step.step}
                      </p>
                      <h3
                        className="text-base sm:text-xl font-bold leading-tight"
                        style={{ color: "var(--text)" }}
                      >
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  {/* Watermark number — hidden on mobile */}
                  <span
                    className="text-6xl font-extrabold leading-none select-none hidden sm:block"
                    style={{ color: "var(--border)" }}
                  >
                    {step.step}
                  </span>
                </div>

                {/* Divider */}
                <div className="w-full h-px mb-4 sm:mb-6" style={{ backgroundColor: "var(--border)" }} />

                {/* Description — smaller text on mobile */}
                <p
                  className="text-[13px] sm:text-sm leading-relaxed mb-4 sm:mb-6"
                  style={{ color: "var(--text-muted)" }}
                >
                  {step.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase px-2.5 sm:px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: "rgba(201,169,97,0.1)",
                        border: "1px solid var(--border)",
                        color: "var(--gold-dim)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

    </section>
  );
}