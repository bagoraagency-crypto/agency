import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Bagora Agency",
  description:
    "Web development, app development, UI/UX design, API & backend, SEO, and ongoing maintenance. Everything you need to build and grow a digital product.",
};

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discovery Call",
    description: "We start with a free 30-minute call to understand your goals, timeline, and budget. No pitch just an honest conversation.",
  },
  {
    number: "02",
    title: "Proposal & Scope",
    description: "Within 48 hours we send a detailed proposal with scope, timeline, tech stack, and fixed pricing. No surprises later.",
  },
  {
    number: "03",
    title: "Design & Build",
    description: "We design and develop in sprints with regular check-ins. You see progress every week not just at the end.",
  },
  {
    number: "04",
    title: "Launch & Hand-off",
    description: "We handle deployment, write documentation, and train your team. You own everything code, designs, accounts.",
  },
] as const;

const TECH_STACK = [
  {
    category: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "ShadCN UI", "Zustand"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo", "iOS", "Android", "PWA", "Flutter"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "Go", "Express", "NestJS", "REST", "GraphQL"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MongoDB", "Supabase", "Redis", "Prisma"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Vercel", "Docker", "CI/CD", "Kubernetes", "GitHub Actions"],
  },
  {
    category: "AI & Agents",
    items: ["AI Agents", "OpenAI", "LangChain", "RAG", "Vector Databases", "Pinecone", "Prompt Engineering", "Automation Workflows"],
  },
  {
    category: "Design",
    items: ["Figma", "Design Systems", "Prototyping", "User Research"],
  },
] as const;

export default function ServicesPage() {
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
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none z-0 opacity-[0.05] blur-[120px]"
          style={{ background: "radial-gradient(circle, var(--gold) 0%, transparent 70%)" }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6 sm:mb-8 text-xs" style={{ color: "var(--text-muted)" }}>
            <Link href="/" className="hover:text-white transition-colors duration-200">Home</Link>
            <span style={{ color: "var(--text-dim)" }}>›</span>
            <span style={{ color: "var(--gold)" }}>Services</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-end">
            <div>
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <span className="w-8 h-px" style={{ backgroundColor: "var(--gold)" }} />
                <span className="text-xs font-semibold tracking-[0.18em] uppercase" style={{ color: "var(--gold)" }}>
                  What We Do
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
                Everything you need<br />
                <span style={{
                  background: "var(--gradient-primary)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  to build and grow.
                </span>
              </h1>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                From your first landing page to a full-scale platform we cover every layer of the stack and every stage of the product lifecycle.
              </p>
            </div>

            {/* CTA buttons — row on all sizes */}
            <div className="flex flex-row gap-3 lg:justify-end">
              <a
                href="https://cal.com/bagora-agency-pfnups/secret"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex-1 lg:flex-none text-sm font-bold px-5 sm:px-6 py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5 text-center whitespace-nowrap"
                style={{ color: "var(--bg-deep)" }}
              >
                Book a Free Call
              </a>
              <Link
                href="/form-inquiry"
                className="btn-secondary flex-1 lg:flex-none text-sm font-medium px-5 sm:px-6 py-3 rounded-full text-center whitespace-nowrap"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Services cards ── */}
      <Services />

      {/* ── How we work ── */}
      <section
        className="relative w-full py-16 sm:py-24 overflow-hidden"
        style={{ backgroundColor: "var(--bg)", borderTop: "1px solid var(--border)" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-3 sm:mb-4">
            <span className="w-8 h-px" style={{ backgroundColor: "var(--gold)" }} />
            <span className="text-xs font-semibold tracking-[0.18em] uppercase" style={{ color: "var(--gold)" }}>
              How We Work
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
            From first call to<br />
            <span style={{
              background: "var(--gradient-primary)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              live product.
            </span>
          </h2>

          {/* Steps — 2 cols on mobile, 4 on desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {PROCESS_STEPS.map((step, i) => (
              <div
                key={step.number}
                className="relative rounded-2xl p-4 sm:p-6"
                style={{
                  backgroundColor: "rgba(255,255,255,0.02)",
                  border: "1px solid var(--border)",
                }}
              >
                {/* Connector line — desktop only */}
                {i < PROCESS_STEPS.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-10 -right-2.5 w-5 h-px z-10"
                    style={{ backgroundColor: "var(--border)" }}
                  />
                )}
                <span
                  className="text-3xl sm:text-4xl font-extrabold mb-3 sm:mb-4 block leading-none"
                  style={{ color: "rgba(201,169,97,0.15)" }}
                >
                  {step.number}
                </span>
                <h3 className="text-xs sm:text-sm font-bold mb-1.5 sm:mb-2" style={{ color: "var(--text)" }}>
                  {step.title}
                </h3>
                <p className="text-[11px] sm:text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech stack ── */}
      <section
        className="relative w-full py-16 sm:py-24 overflow-hidden"
        style={{ backgroundColor: "var(--bg)", borderTop: "1px solid var(--border)" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6 mb-10 sm:mb-14">
            <div>
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <span className="w-8 h-px" style={{ backgroundColor: "var(--gold)" }} />
                <span className="text-xs font-semibold tracking-[0.18em] uppercase" style={{ color: "var(--gold)" }}>
                  Tech Stack
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
                Tools we trust.<br />
                <span style={{
                  background: "var(--gradient-primary)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  Not just what's trending.
                </span>
              </h2>
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "var(--text-muted)" }}>
              We use battle-tested technologies chosen for reliability, performance, and maintainability not hype.
            </p>
          </div>

          {/* Tech grid — 2 cols on mobile, 3 on desktop */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {TECH_STACK.map(({ category, items }) => (
              <div
                key={category}
                className="rounded-2xl p-4 sm:p-6"
                style={{
                  backgroundColor: "rgba(255,255,255,0.02)",
                  border: "1px solid var(--border)",
                }}
              >
                <p
                  className="text-[10px] font-bold tracking-[0.16em] uppercase mb-3 sm:mb-4"
                  style={{ color: "var(--gold)" }}
                >
                  {category}
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="text-[10px] sm:text-xs font-medium px-2 sm:px-3 py-1 sm:py-1.5 rounded-full"
                      style={{
                        backgroundColor: "rgba(201,169,97,0.07)",
                        border: "1px solid var(--border)",
                        color: "rgba(255,255,255,0.7)",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
              Ready to Start?
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
              Not sure which service<br />
              <span style={{
                background: "var(--gradient-primary)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                you need? Let's figure it out.
              </span>
            </h2>
            <p className="text-sm mb-6 sm:mb-8 max-w-md mx-auto" style={{ color: "var(--text-muted)" }}>
              Book a free call and we'll tell you exactly what we'd build, how long it would take, and what it would cost. No fluff, no obligation.
            </p>
            <div className="flex flex-row items-center justify-center gap-3 flex-wrap">
              <a
                href="https://cal.com/bagora-agency-pfnups/secret"
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