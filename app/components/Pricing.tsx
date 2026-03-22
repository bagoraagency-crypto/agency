"use client";

import { useState } from "react";
import Link from "next/link";

const PLANS = [
  {
    id: 1,
    name: "Starter",
    tag: "For early-stage founders",
    price: 299,
    description: "Everything you need to launch a professional web presence and start converting visitors into customers.",
    bestFor: [
      "Landing pages",
      "Portfolio websites",
      "Business brochure sites",
      "Restaurant or café websites",
      "Local service websites",
    ],
    cta: "Get Started",
    ctaHref: "/form-inquiry",
    featured: false,
    features: [
      { text: "Custom Design",                        included: true  },
      { text: "Standard 6 page website",              included: true  },
      { text: "Regional SEO setup",                   included: true  },
      { text: "Mobile responsive design",             included: true  },
      { text: "Contact form integration",             included: true  },
      { text: "1 revision round",                     included: true  },
      { text: "2 weeks delivery",                     included: true  },
      { text: "Lifetime support retainer",            included: true  },
      { text: "Minimal backend or API development",   included: true  },
      { text: "Dedicated project manager",            included: false },
    ],
  },
  {
    id: 2,
    name: "Growth",
    tag: "Most popular",
    price: 999,
    description: "A full stack product build for startups and scale ups that need a robust, scalable digital product.",
    bestFor: [
      "E-commerce stores",
      "SaaS platforms",
      "Dynamic web applications",
      "Booking and reservation systems",
      "Membership and subscription sites",
    ],
    cta: "Start Building",
    ctaHref: "/form-inquiry",
    featured: true,
    features: [
      { text: "Full custom web or app application",          included: true  },
      { text: "Premium UI/UX design with Figma prototype",   included: true  },
      { text: "Mobile responsive design",                    included: true  },
      { text: "Advanced SEO and performance",                included: true  },
      { text: "Complex Backend and API development",         included: true  },
      { text: "Auth, payments and integrations",             included: true  },
      { text: "5 revision rounds",                           included: true  },
      { text: "4 to 6 weeks delivery",                       included: true  },
      { text: "Lifetime support retainer",                   included: true  },
      { text: "Dedicated project manager",                   included: true  },
      { text: "Deployment and cloud infrastructure setup",   included: true  },
    ],
  },
  {
    id: 3,
    name: "Enterprise",
    tag: "For established businesses",
    price: null,
    description: "Bespoke engagements for complex products, large teams, and ongoing development partnerships.",
    bestFor: [
      "Large scale web platforms",
      "Mobile apps (iOS and Android)",
      "AI powered products",
      "Multi tenant SaaS applications",
      "Ongoing product development",
    ],
    cta: "Book a Call",
    ctaHref: "https://cal.com/bagora-agency-pfnups/secret",
    featured: false,
    features: [
      { text: "Everything in Growth",          included: true  },
      { text: "Dedicated project manager",     included: true  },
      { text: "Custom architecture design",    included: true  },
      { text: "Ongoing support retainer",      included: true  },
      { text: "Priority response SLA",         included: true  },
      { text: "Monthly strategy sessions",     included: true  },
      { text: "Team augmentation available",   included: true  },
      { text: "NDA and white label options",   included: true  },
      { text: "Unlimited revision rounds",     included: true  },
      { text: "Custom delivery timeline",      included: true  },
    ],
  },
] as const;

const FAQ_CATEGORIES = [
  {
    category: "Web Development",
    faqs: [
      { q: "What technologies do you use to build websites?", a: "We primarily build with Next.js, React, and TypeScript on the frontend, paired with Node.js, Python, or Go on the backend depending on the project. For databases we use PostgreSQL, MongoDB, or Supabase. We always recommend the right tool for the job and not whatever is trending." },
      { q: "How long does it take to build a website?", a: "A standard marketing website takes 2 to 4 weeks. A full web application typically takes 6 to 12 weeks depending on complexity. We give you a detailed timeline before we start, and we stick to it." },
      { q: "Will my website be mobile friendly?", a: "Every website we build is fully responsive out of the box. We design and test across all major screen sizes including mobile, tablet, and desktop before handing anything over." },
      { q: "Do you build e-commerce websites?", a: "Yes. We build custom e-commerce solutions using Shopify, WooCommerce, or fully custom storefronts with Stripe. We handle product management, payment processing, inventory, and checkout flows." },
      { q: "Can you rebuild or redesign my existing website?", a: "Absolutely. We do full redesigns and rebuilds regularly. We will audit your current site first, identify what is working and what is not, and scope the rebuild accordingly. Content migration is included." },
    ],
  },
  {
    category: "App Development",
    faqs: [
      { q: "Do you build iOS and Android apps?", a: "Yes. We build native iOS, native Android, and cross platform apps using React Native. For most startups we recommend React Native as it ships to both platforms from a single codebase, cutting time and cost significantly." },
      { q: "Can you build an MVP quickly?", a: "That is our speciality. We have taken apps from zero to App Store in as little as 8 weeks. We scope tightly, cut non essential features, and move fast. Then we add complexity after you have validated the core product." },
      { q: "Do you handle App Store submission?", a: "Yes. We handle the full App Store and Play Store submission process including app metadata, screenshots, review guidelines compliance, and resubmissions if needed." },
      { q: "What happens if there are bugs after launch?", a: "All plans include a post launch support window for bug fixes. We also offer monthly retainer plans for ongoing maintenance and new feature development after the initial build." },
    ],
  },
  {
    category: "UI/UX Design",
    faqs: [
      { q: "Do you offer design only services without development?", a: "Yes. We offer standalone UI/UX design engagements including wireframes, prototypes, and full design systems in Figma which you can hand off to your own developers or bring back to us to build." },
      { q: "What does your design process look like?", a: "We start with discovery to understand your users and goals, then move to wireframes and information architecture, then high fidelity mockups, and finally an interactive Figma prototype. We involve you at every stage for feedback before finalising." },
      { q: "Do you create design systems?", a: "Yes. Every project gets a component based design system. This means consistent typography, spacing, colors, and components that make future updates faster and cheaper for everyone." },
      { q: "Can you improve an existing design without rebuilding from scratch?", a: "Yes. We offer design audits and targeted UX improvements. We identify the highest impact changes and implement those without touching what is already working." },
    ],
  },
  {
    category: "Working With Us",
    faqs: [
      { q: "How do we communicate during a project?", a: "Every project gets a dedicated Slack channel. You will have direct access to your project lead with no account managers or ticket systems. We do weekly syncs via Loom or video call and share progress updates every few days." },
      { q: "Do you sign NDAs?", a: "Yes, always. We treat your ideas and business information as confidential from the very first conversation. NDA signing is standard before any scoping begins." },
      { q: "What do you need from us to get started?", a: "A brief, even a rough one. We will send you a short questionnaire covering your goals, target users, timeline, and budget. From there we will schedule a discovery call and put together a detailed proposal within 48 hours." },
      { q: "Do you work with non technical founders?", a: "All the time. You do not need to know how to code to work with us. We translate technical decisions into plain language and make sure you are always in the loop without overwhelming you with jargon." },
      { q: "What if I am not happy with the work?", a: "We build in structured revision rounds so you can give feedback at every stage and not just at the end. If something is genuinely not right, we fix it. We have never had a client leave unhappy, and we intend to keep it that way." },
    ],
  },
] as const;

function CheckIcon({ included }: { included: boolean }) {
  if (included) {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
        <circle cx="8" cy="8" r="7" fill="var(--gold)" opacity="0.15" />
        <path d="M5 8l2 2 4-4" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
      <circle cx="8" cy="8" r="7" fill="rgba(255,255,255,0.04)" />
      <path d="M6 10l4-4M10 10L6 6" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function DotIcon() {
  return (
    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1" style={{ backgroundColor: "var(--gold)", opacity: 0.7 }} />
  );
}

export default function Pricing() {
  const [openFaq, setOpenFaq]     = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      className="relative w-full py-16 sm:py-32 overflow-hidden"
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
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none z-0 opacity-[0.05] blur-[120px]"
        style={{ background: "radial-gradient(ellipse, var(--gold) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">

        {/* ── Section header ── */}
        <div className="flex items-center gap-3 mb-3 sm:mb-4">
          <span className="w-8 h-px" style={{ backgroundColor: "var(--gold)" }} />
          <span className="text-xs font-semibold tracking-[0.18em] uppercase" style={{ color: "var(--gold)" }}>
            Pricing
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6 mb-10 sm:mb-14">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight"
            style={{
              background: "linear-gradient(to right, #ffffff, #888888)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Simple, transparent<br />
            <span style={{
              background: "var(--gradient-primary)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              pricing.
            </span>
          </h2>
          <p className="text-sm leading-relaxed max-w-xs" style={{ color: "var(--text-muted)" }}>
            No hidden fees, no surprise invoices. Pick a plan that fits where you are and upgrade when you are ready.
          </p>
        </div>

        {/* ── Pricing cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-12 sm:mb-20">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className="relative rounded-2xl flex flex-col transition-all duration-300"
              style={{
                backgroundColor: plan.featured ? "rgba(201,169,97,0.07)" : "rgba(255,255,255,0.02)",
                border: `1px solid ${plan.featured ? "var(--border-hover)" : "var(--border)"}`,
                boxShadow: plan.featured ? "var(--glow-sm)" : "none",
              }}
            >
              {plan.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span
                    className="text-[10px] font-bold tracking-[0.14em] uppercase px-4 py-1.5 rounded-full"
                    style={{ background: "var(--gradient-primary)", color: "var(--bg-deep)" }}
                  >
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-5 sm:p-7 flex flex-col flex-1">

                {/* Plan name + tag */}
                <div className="mb-4 sm:mb-6">
                  <p
                    className="text-[10px] font-semibold tracking-[0.14em] uppercase mb-1.5 sm:mb-2"
                    style={{ color: plan.featured ? "var(--gold)" : "var(--text-muted)" }}
                  >
                    {plan.tag}
                  </p>
                  <h3 className="text-xl sm:text-2xl font-extrabold" style={{ color: "var(--text)" }}>
                    {plan.name}
                  </h3>
                </div>

                {/* Price */}
                <div className="mb-4 sm:mb-5">
                  {plan.price ? (
                    <div className="flex items-end gap-1">
                      <span
                        className="text-3xl sm:text-4xl font-extrabold leading-none"
                        style={{
                          background: "var(--gradient-primary)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        ${plan.price.toLocaleString()}
                      </span>
                      <span className="text-sm mb-1" style={{ color: "var(--text-muted)" }}>/ project</span>
                    </div>
                  ) : (
                    <span
                      className="text-2xl sm:text-3xl font-extrabold"
                      style={{
                        background: "var(--gradient-primary)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      Custom
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-[13px] sm:text-sm leading-relaxed mb-4 sm:mb-5" style={{ color: "var(--text-muted)" }}>
                  {plan.description}
                </p>

                {/* Best for */}
                <div
                  className="rounded-xl p-3 sm:p-4 mb-4 sm:mb-6"
                  style={{ backgroundColor: "rgba(201,169,97,0.06)", border: "1px solid var(--border)" }}
                >
                  <p className="text-[10px] font-bold tracking-[0.14em] uppercase mb-2 sm:mb-3" style={{ color: "var(--gold)" }}>
                    Best for
                  </p>
                  <ul className="flex flex-col gap-1.5 sm:gap-2">
                    {plan.bestFor.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <DotIcon />
                        <span className="text-[11px] sm:text-xs leading-snug" style={{ color: "var(--text-muted)" }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Divider */}
                <div className="w-full h-px mb-4 sm:mb-6" style={{ backgroundColor: "var(--border)" }} />

                {/* Features */}
                <ul className="flex flex-col gap-2.5 sm:gap-3 mb-6 sm:mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f.text} className="flex items-center gap-2.5 sm:gap-3">
                      <CheckIcon included={f.included} />
                      <span
                        className="text-[12px] sm:text-sm"
                        style={{ color: f.included ? "rgba(255,255,255,0.8)" : "var(--text-dim)" }}
                      >
                        {f.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                {plan.ctaHref.startsWith("http") ? (
                  <a
                    href={plan.ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center py-3 sm:py-3.5 rounded-full text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.01]"
                    style={plan.featured
                      ? { background: "var(--gradient-primary)", color: "var(--bg-deep)", boxShadow: "var(--glow-sm)" }
                      : { backgroundColor: "rgba(201,169,97,0.08)", color: "var(--gold)", border: "1px solid var(--border)" }}
                  >
                    {plan.cta}
                  </a>
                ) : (
                  <Link
                    href={plan.ctaHref}
                    className="w-full text-center py-3 sm:py-3.5 rounded-full text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.01]"
                    style={plan.featured
                      ? { background: "var(--gradient-primary)", color: "var(--bg-deep)", boxShadow: "var(--glow-sm)" }
                      : { backgroundColor: "rgba(201,169,97,0.08)", color: "var(--gold)", border: "1px solid var(--border)" }}
                  >
                    {plan.cta}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

  {/* ── Trust strip ── */}
<div
  className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-4 sm:gap-8 py-5 sm:py-6 px-5 sm:px-8 rounded-2xl mb-14 sm:mb-24"
  style={{ backgroundColor: "rgba(201,169,97,0.04)", border: "1px solid var(--border)" }}
>
  {[
    {
      label: "Secure payments via Stripe",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="11" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M7 11V7a5 5 0 0110 0v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      label: "NDA available on request",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M6 3h9l3 3v15H6z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M15 3v4h4" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      label: "Satisfaction guarantee",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      label: "Global clients welcome",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
          <path d="M3 12h18M12 3c3 4 3 14 0 18M12 3c-3 4-3 14 0 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
  ].map(({ icon, label }) => (
    <div key={label} className="flex items-center gap-2 text-white/70">
      <span className="flex items-center justify-center">{icon}</span>
      <span className="text-[11px] sm:text-xs font-medium" style={{ color: "var(--text-muted)" }}>
        {label}
      </span>
    </div>
  ))}
</div>

        {/* ── FAQ section ── */}
        <div className="max-w-3xl mx-auto">

          <div className="flex items-center gap-3 mb-3 sm:mb-4">
            <span className="w-8 h-px" style={{ backgroundColor: "var(--gold)" }} />
            <span className="text-xs font-semibold tracking-[0.18em] uppercase" style={{ color: "var(--gold)" }}>
              FAQ
            </span>
          </div>
          <h3
            className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-7 sm:mb-10 tracking-tight"
            style={{
              background: "linear-gradient(to right, #ffffff, #888888)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Everything you want to know.
          </h3>

          {/* Category tabs — scrollable on mobile */}
          <div
            className="flex gap-2 mb-6 sm:mb-8 overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {FAQ_CATEGORIES.map((cat, i) => (
              <button
                key={cat.category}
                onClick={() => { setActiveTab(i); setOpenFaq(null); }}
                className="text-xs font-semibold px-3 sm:px-4 py-2 rounded-full transition-all duration-300 flex-shrink-0"
                style={{
                  backgroundColor: activeTab === i ? "var(--gold)" : "rgba(201,169,97,0.08)",
                  color: activeTab === i ? "var(--bg-deep)" : "var(--gold-dim)",
                  border: `1px solid ${activeTab === i ? "var(--gold)" : "var(--border)"}`,
                }}
              >
                {cat.category}
              </button>
            ))}
          </div>

          {/* FAQ accordion */}
          <div className="flex flex-col gap-2.5 sm:gap-3">
            {FAQ_CATEGORIES[activeTab].faqs.map((faq, i) => {
              const key  = `${activeTab}-${i}`;
              const isOpen = openFaq === key;
              return (
                <div
                  key={key}
                  className="rounded-xl overflow-hidden transition-all duration-300"
                  style={{
                    backgroundColor: isOpen ? "rgba(201,169,97,0.06)" : "rgba(255,255,255,0.02)",
                    border: `1px solid ${isOpen ? "var(--border-hover)" : "var(--border)"}`,
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : key)}
                    className="w-full flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 text-left"
                  >
                    <span className="text-[13px] sm:text-sm font-semibold pr-3 sm:pr-4" style={{ color: "var(--text)" }}>
                      {faq.q}
                    </span>
                    <svg
                      width="16" height="16" viewBox="0 0 16 16" fill="none"
                      className="flex-shrink-0 transition-transform duration-300"
                      style={{ color: "var(--gold)", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                    >
                      <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <div
                    className="overflow-hidden"
                    style={{ maxHeight: isOpen ? "300px" : "0px", transition: "max-height 0.4s cubic-bezier(0.22,1,0.36,1)" }}
                  >
                    <p className="px-4 sm:px-6 pb-4 sm:pb-5 text-[13px] sm:text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Still have questions */}
          <div
            className="mt-8 sm:mt-10 rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            style={{ backgroundColor: "rgba(201,169,97,0.05)", border: "1px solid var(--border)" }}
          >
            <div>
              <p className="text-sm font-bold mb-0.5" style={{ color: "var(--text)" }}>Still have questions?</p>
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                Book a free call and we will answer everything in 30 minutes.
              </p>
            </div>
            <a
              href="https://cal.com/bagora-agency-pfnups/secret"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto text-center text-sm font-semibold px-6 py-2.5 rounded-full flex-shrink-0 transition-all duration-300 hover:-translate-y-0.5"
              style={{ color: "var(--bg-deep)" }}
            >
              Book a Free Call
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}