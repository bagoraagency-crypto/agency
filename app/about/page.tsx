"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const STATS = [
  { value: "4.9",  label: "Average Rating"     },
  { value: "120+", label: "Projects Delivered"  },
  { value: "98%",  label: "Client Satisfaction" },
  { value: "3X",   label: "Avg. ROI Increase"   },
] as const;

const VALUES = [
  {
    title: "Craft over speed",
    description:
      "We'd rather take an extra day and ship something exceptional than rush and deliver something mediocre. Quality is non-negotiable.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2l2 6h6l-5 4 2 6-5-3.5L6 18l2-6-5-4h6L11 2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Radical transparency",
    description:
      "No smoke and mirrors. We tell you what's possible, what's realistic, and what something actually costs before you commit.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.4" />
        <path d="M11 7v4l3 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Clients as partners",
    description:
      "We don't take briefs and disappear. We work alongside you, explain our decisions, and treat your product like it's our own.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M7 11c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M3 19c0-2.8 3.6-5 8-5s8 2.2 8 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Ship, then improve",
    description:
      "We believe in getting real products in front of real users fast, then iterating based on what we learn. Done beats perfect.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 11h14M14 7l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
] as const;

const TEAM = [
  {
    name: "Om Paliwal",
    role: "Founder & CEO",
    bio: "Full stack developer with 8 years of experience. Previously built products at product backed startups. Obsessed with clean code and faster load times.",
    initials: "OP",
    skills: ["Next.js", "System Design", "Strategy"],
  },
  {
    name: "Anjali Rathore",
    role: "Lead Designer",
    bio: "Product designer who's shipped interfaces used by millions. Believes great design is invisible and you only notice it when it's missing.",
    initials: "AR",
    skills: ["Figma", "Design Systems", "UX Research"],
  },
  {
    name: "Ashwarya Pathak",
    role: "Backend Engineer",
    bio: "Infrastructure and API specialist. Has built systems that handle millions of requests per day. Loves PostgreSQL more than is probably healthy.",
    initials: "AP",
    skills: ["Node.js", "AWS", "PostgreSQL"],
  },
  {
    name: "Anish Mourya",
    role: "Frontend Engineer",
    bio: "Turns Figma files into pixel perfect, performant interfaces. Has a particular obsession with micro animations and accessibility.",
    initials: "AM",
    skills: ["React", "TypeScript", "Animation"],
  },
] as const;

const MILESTONES = [
  { year: "2021", event: "Bagora founded with a team of two in Mumbai." },
  { year: "2022", event: "Crossed our first 25 clients. Hired our first full time designer." },
  { year: "2023", event: "Expanded to a team of 8. Launched our first enterprise partnership." },
  { year: "2024", event: "120+ projects delivered. Opened remote positions across 4 countries." },
  { year: "2025", event: "Relaunched brand. Built dedicated mobile and SEO practices." },
] as const;

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <>
      <Navbar />

      <main
        ref={containerRef}
        className="relative w-full overflow-hidden"
        style={{ backgroundColor: "var(--bg)" }}
      >
        {/* Mouse spotlight */}
        <div
          className="pointer-events-none fixed inset-0 z-0 transition-all duration-100"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, rgba(201,169,97,0.04) 0%, transparent 60%)`,
          }}
        />

        {/* Grid bg */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(var(--gradient-grid) 1px, transparent 1px),
              linear-gradient(90deg, var(--gradient-grid) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* ── HERO ── */}
        <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 pb-16 sm:pb-24">
          <div
            className="absolute -top-20 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-[0.06] blur-[120px]"
            style={{ background: "radial-gradient(circle, var(--gold) 0%, transparent 70%)" }}
          />

          <div className="flex items-center gap-3 mb-4 sm:mb-5">
            <span className="w-8 h-px" style={{ backgroundColor: "var(--gold)" }} />
            <span className="text-xs font-semibold tracking-[0.18em] uppercase" style={{ color: "var(--gold)" }}>
              About Us
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 items-center">
            <div>
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight mb-4 sm:mb-6"
                style={{
                  background: "linear-gradient(to right, #ffffff, #888888)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                We build things<br />
                <span style={{
                  background: "var(--gradient-primary)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  that last.
                </span>
              </h1>
              <p className="text-sm sm:text-base leading-relaxed mb-6 sm:mb-8" style={{ color: "var(--text-muted)" }}>
                Bagora is a premium web and app development agency founded in 2021. We work with founders, startups, and growing businesses to design and build digital products that are fast, scalable, and built to convert.
              </p>
              <div className="flex flex-row items-center gap-3">
                <a
                  href="https://cal.com/bagora-agency-pfnups/secret"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm font-bold px-5 sm:px-6 py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
                  style={{ color: "var(--bg-deep)" }}
                >
                  Work With Us
                </a>
                <Link
                  href="/work"
                  className="btn-secondary text-sm font-medium px-5 sm:px-6 py-3 rounded-full whitespace-nowrap"
                >
                  See Our Work
                </Link>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {STATS.map(({ value, label }) => (
                <div
                  key={label}
                  className="rounded-2xl p-4 sm:p-6 flex flex-col gap-1"
                  style={{
                    backgroundColor: "rgba(201,169,97,0.05)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <span
                    className="text-2xl sm:text-3xl font-extrabold"
                    style={{
                      background: "var(--gradient-primary)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {value}
                  </span>
                  <span className="text-[10px] sm:text-xs tracking-wide uppercase" style={{ color: "var(--text-muted)" }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── STORY ── */}
        <section
          className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2px_1fr] gap-10 sm:gap-12">

            {/* Left: story */}
            <div>
              <div className="flex items-center gap-3 mb-4 sm:mb-5">
                <span className="w-8 h-px" style={{ backgroundColor: "var(--gold)" }} />
                <span className="text-xs font-semibold tracking-[0.18em] uppercase" style={{ color: "var(--gold)" }}>
                  Our Story
                </span>
              </div>
              <h2
                className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-5 sm:mb-6"
                style={{
                  background: "linear-gradient(to right, #ffffff, #888888)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Built out of frustration<br />with mediocre agencies.
              </h2>
              <div className="flex flex-col gap-3 sm:gap-4 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                <p>
                  Bagora started in 2021 when our founder Aryan kept seeing the same story play out. A client pays a significant sum to an agency, gets handed something slow, buggy, and impossible to maintain, then spends months cleaning up the mess.
                </p>
                <p>
                  We started with a simple premise: what if an agency actually cared about the code quality, the design craft, and the client's business outcomes and not just closing the deal and shipping the invoice?
                </p>
                <p>
                  Four years later, we've delivered over 120 projects across 15 countries, built a team of 12 specialists, and never once missed a deadline we committed to. That last part is the one we're most proud of.
                </p>
              </div>
            </div>

            {/* Divider — desktop only */}
            <div className="hidden lg:block w-px" style={{ backgroundColor: "var(--border)" }} />

            {/* Right: milestones */}
            <div>
              <div className="flex items-center gap-3 mb-4 sm:mb-5">
                <span className="w-8 h-px" style={{ backgroundColor: "var(--gold)" }} />
                <span className="text-xs font-semibold tracking-[0.18em] uppercase" style={{ color: "var(--gold)" }}>
                  Milestones
                </span>
              </div>
              <div className="relative flex flex-col gap-0">
                <div
                  className="absolute left-[30px] top-3 bottom-3 w-px"
                  style={{ backgroundColor: "var(--border)" }}
                />
                {MILESTONES.map(({ year, event }, i) => (
                  <div key={year} className="flex items-start gap-4 sm:gap-5 relative pb-5 sm:pb-7 last:pb-0">
                    <div className="flex-shrink-0 flex flex-col items-center" style={{ width: 60 }}>
                      <div
                        className="w-4 h-4 rounded-full z-10 flex-shrink-0"
                        style={{
                          background: i === MILESTONES.length - 1 ? "var(--gradient-primary)" : "var(--bg)",
                          border: `2px solid ${i === MILESTONES.length - 1 ? "var(--gold)" : "var(--border)"}`,
                          boxShadow: i === MILESTONES.length - 1 ? "var(--glow-sm)" : "none",
                        }}
                      />
                    </div>
                    <div className="pt-0">
                      <span className="text-xs font-bold tracking-wider" style={{ color: "var(--gold)" }}>
                        {year}
                      </span>
                      <p className="text-[13px] sm:text-sm mt-0.5 leading-relaxed" style={{ color: "var(--text-muted)" }}>
                        {event}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── VALUES ── */}
        <section
          className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <div className="flex items-center gap-3 mb-3 sm:mb-4">
            <span className="w-8 h-px" style={{ backgroundColor: "var(--gold)" }} />
            <span className="text-xs font-semibold tracking-[0.18em] uppercase" style={{ color: "var(--gold)" }}>
              What We Believe
            </span>
          </div>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-10 sm:mb-14"
            style={{
              background: "linear-gradient(to right, #ffffff, #888888)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Our values aren't on a wall.<br />
            <span style={{
              background: "var(--gradient-primary)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              They're in every line of code.
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl p-5 sm:p-7 transition-all duration-300 group hover:-translate-y-1"
                style={{
                  backgroundColor: "rgba(255,255,255,0.02)",
                  border: "1px solid var(--border)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border-hover)";
                  (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(201,169,97,0.04)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.02)";
                }}
              >
                <div
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center mb-4 sm:mb-5"
                  style={{ background: "var(--gradient-primary)", color: "var(--bg-deep)" }}
                >
                  {v.icon}
                </div>
                <h3 className="text-sm sm:text-base font-bold mb-1.5 sm:mb-2" style={{ color: "var(--text)" }}>
                  {v.title}
                </h3>
                <p className="text-[13px] sm:text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── TEAM ── */}
        <section
          className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6 mb-10 sm:mb-14">
            <div>
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <span className="w-8 h-px" style={{ backgroundColor: "var(--gold)" }} />
                <span className="text-xs font-semibold tracking-[0.18em] uppercase" style={{ color: "var(--gold)" }}>
                  The Team
                </span>
              </div>
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight"
                style={{
                  background: "linear-gradient(to right, #ffffff, #888888)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                The people behind<br />
                <span style={{
                  background: "var(--gradient-primary)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  the work.
                </span>
              </h2>
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "var(--text-muted)" }}>
              Small team. Big output. Every person at Bagora is a specialist and not a generalist stretched thin across six projects.
            </p>
          </div>

          {/* Team cards — 2 cols on mobile, 4 on desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl p-4 sm:p-6 flex flex-col transition-all duration-300"
                style={{
                  backgroundColor: "rgba(255,255,255,0.02)",
                  border: "1px solid var(--border)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border-hover)";
                  (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(201,169,97,0.05)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "var(--glow-sm)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.02)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {/* Avatar */}
                <div
                  className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center text-sm sm:text-lg font-extrabold mb-3 sm:mb-4 flex-shrink-0"
                  style={{ background: "var(--gradient-primary)", color: "var(--bg-deep)" }}
                >
                  {member.initials}
                </div>

                <h3 className="text-xs sm:text-sm font-bold mb-0.5" style={{ color: "var(--text)" }}>
                  {member.name}
                </h3>
                <p className="text-[10px] sm:text-xs mb-2 sm:mb-3" style={{ color: "var(--gold-dim)" }}>
                  {member.role}
                </p>
                <p className="text-[11px] sm:text-xs leading-relaxed mb-3 sm:mb-4 flex-1" style={{ color: "var(--text-muted)" }}>
                  {member.bio}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-1 sm:gap-1.5">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[9px] sm:text-[10px] font-medium px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full"
                      style={{
                        backgroundColor: "rgba(201,169,97,0.08)",
                        border: "1px solid var(--border)",
                        color: "var(--gold-dim)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <div
            className="rounded-2xl p-8 sm:p-10 md:p-16 text-center relative overflow-hidden"
            style={{
              backgroundColor: "rgba(201,169,97,0.05)",
              border: "1px solid var(--border-hover)",
              boxShadow: "var(--glow-sm)",
            }}
          >
            {/* Corner accents — desktop only */}
            {["top-4 left-4", "top-4 right-4", "bottom-4 left-4", "bottom-4 right-4"].map((pos) => (
              <div key={pos} className={`hidden sm:block absolute ${pos} w-5 h-5 pointer-events-none`}>
                <div className="absolute inset-0" style={{
                  borderTop: pos.includes("top") ? "1px solid var(--gold)" : "none",
                  borderBottom: pos.includes("bottom") ? "1px solid var(--gold)" : "none",
                  borderLeft: pos.includes("left") ? "1px solid var(--gold)" : "none",
                  borderRight: pos.includes("right") ? "1px solid var(--gold)" : "none",
                  opacity: 0.4,
                }} />
              </div>
            ))}

            <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-3 sm:mb-4" style={{ color: "var(--gold)" }}>
              Let's Build Together
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
              Like what you see?<br />
              <span style={{
                background: "var(--gradient-primary)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Let's talk about your project.
              </span>
            </h2>
            <p className="text-sm mb-6 sm:mb-8 max-w-md mx-auto" style={{ color: "var(--text-muted)" }}>
              Book a free 30 minute discovery call or send us a project brief. No pitch, no pressure.
            </p>
            <div className="flex flex-row items-center justify-center gap-3 flex-wrap">
              <a
                href="https://cal.com/bagora-agency/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm font-bold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] whitespace-nowrap"
                style={{ color: "var(--bg-deep)" }}
              >
                Book a Free Call
              </a>
              <Link
                href="/form-inquiry"
                className="btn-secondary text-sm font-medium px-6 sm:px-8 py-3 sm:py-3.5 rounded-full whitespace-nowrap"
              >
                Send a Brief
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer/>
    </>
  );
}