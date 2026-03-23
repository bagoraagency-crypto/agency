"use client";

import { useState, useRef, useEffect } from "react";

function AvatarRohan({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="24" cy="24" r="24" fill="#C9A961"/>
      <circle cx="24" cy="19" r="9" stroke="#0B1F3A" strokeWidth="1.8" fill="none"/>
      <path d="M15 17c0-5 4-9 9-9s9 4 9 9" stroke="#0B1F3A" strokeWidth="2" strokeLinecap="round" fill="none"/>
      <circle cx="20.5" cy="18" r="1.5" fill="#0B1F3A"/>
      <circle cx="27.5" cy="18" r="1.5" fill="#0B1F3A"/>
      <path d="M20 22c1.5 2 6.5 2 8 0" stroke="#0B1F3A" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      <path d="M11 38c0-7 6-11 13-11s13 4 13 11" stroke="#0B1F3A" strokeWidth="1.8" fill="none"/>
      <path d="M21 27l3 4 3-4" stroke="#0B1F3A" strokeWidth="1.4" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}
function AvatarArjun({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="24" cy="24" r="24" fill="#C9A961"/>
      <circle cx="24" cy="19" r="9" stroke="#0B1F3A" strokeWidth="1.8" fill="none"/>
      <path d="M16 22c0 6 3 8 8 8s8-2 8-8" stroke="#0B1F3A" strokeWidth="1.8" fill="#0B1F3A" fillOpacity="0.1"/>
      <circle cx="20.5" cy="17.5" r="1.5" fill="#0B1F3A"/>
      <circle cx="27.5" cy="17.5" r="1.5" fill="#0B1F3A"/>
      <path d="M18.5 14.5h4M25.5 14.5h4" stroke="#0B1F3A" strokeWidth="2" strokeLinecap="round"/>
      <path d="M20 21.5c1-1 2-1 4 0c2-1 3-1 4 0" stroke="#0B1F3A" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
      <path d="M11 38c0-7 6-11 13-11s13 4 13 11" stroke="#0B1F3A" strokeWidth="1.8" fill="none"/>
    </svg>
  );
}
function AvatarKabir({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="24" cy="24" r="24" fill="#C9A961"/>
      <circle cx="24" cy="19" r="9" stroke="#0B1F3A" strokeWidth="1.8" fill="none"/>
      <rect x="16" y="16" width="6" height="4.5" rx="2" stroke="#0B1F3A" strokeWidth="1.5" fill="none"/>
      <rect x="26" y="16" width="6" height="4.5" rx="2" stroke="#0B1F3A" strokeWidth="1.5" fill="none"/>
      <path d="M22 18.2h4" stroke="#0B1F3A" strokeWidth="1.2"/>
      <path d="M16 18.2h-2M32 18.2h2" stroke="#0B1F3A" strokeWidth="1.2" strokeLinecap="round"/>
      <circle cx="19" cy="18" r="1" fill="#0B1F3A"/>
      <circle cx="29" cy="18" r="1" fill="#0B1F3A"/>
      <path d="M20 22.5c1.5 2 6.5 2 8 0" stroke="#0B1F3A" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      <path d="M15 16c0-4.5 4-8 9-8s9 3.5 9 8" stroke="#0B1F3A" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      <path d="M11 38c0-7 6-11 13-11s13 4 13 11" stroke="#0B1F3A" strokeWidth="1.8" fill="none"/>
    </svg>
  );
}
function AvatarDrSameer({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="24" cy="24" r="24" fill="#C9A961"/>
      <circle cx="24" cy="19" r="9" stroke="#0B1F3A" strokeWidth="1.8" fill="none"/>
      <circle cx="20.5" cy="18" r="1.5" fill="#0B1F3A"/>
      <circle cx="27.5" cy="18" r="1.5" fill="#0B1F3A"/>
      <path d="M20 22c1.5 2 6.5 2 8 0" stroke="#0B1F3A" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      <path d="M15.5 15c0-4.5 3.5-8 8.5-8s8.5 3.5 8.5 8" stroke="#0B1F3A" strokeWidth="2" fill="none"/>
      <path d="M11 38c0-7 6-11 13-11s13 4 13 11" stroke="#0B1F3A" strokeWidth="1.8" fill="none"/>
      <path d="M21 27l3 5 3-5" stroke="#0B1F3A" strokeWidth="1.4" strokeLinejoin="round" fill="none"/>
      <path d="M18 30 Q15 33 16 36" stroke="#0B1F3A" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
      <circle cx="16" cy="37" r="1.5" stroke="#0B1F3A" strokeWidth="1.2" fill="none"/>
    </svg>
  );
}
function AvatarMehul({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="24" cy="24" r="24" fill="#C9A961"/>
      <circle cx="24" cy="19" r="9" stroke="#0B1F3A" strokeWidth="1.8" fill="none"/>
      <path d="M15 16 Q16 10 24 10 Q32 10 33 16" stroke="#0B1F3A" strokeWidth="1.8" fill="none"/>
      <path d="M20 10 Q20 14 17 16" stroke="#0B1F3A" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
      <circle cx="20.5" cy="18" r="1.5" fill="#0B1F3A"/>
      <circle cx="27.5" cy="18" r="1.5" fill="#0B1F3A"/>
      <path d="M21 22c1 1.5 5 1.5 6 0" stroke="#0B1F3A" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      <path d="M22 27l2 3 2-3-1-3h-2z" stroke="#0B1F3A" strokeWidth="1.3" strokeLinejoin="round" fill="#0B1F3A" fillOpacity="0.12"/>
      <path d="M11 38c0-7 6-11 13-11s13 4 13 11" stroke="#0B1F3A" strokeWidth="1.8" fill="none"/>
      <path d="M20 27l-3 5M28 27l3 5" stroke="#0B1F3A" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}

const AVATAR_COMPONENTS = [AvatarRohan, AvatarArjun, AvatarKabir, AvatarDrSameer, AvatarMehul];

const STATS = [
  { target: 120, suffix: "+", decimals: 0, label: "Projects Delivered"  },
  { target: 98,  suffix: "%", decimals: 0, label: "Client Satisfaction" },
  { target: 4.9, suffix: "★", decimals: 1, label: "Average Rating"      },
  { target: 3,   suffix: "x", decimals: 0, label: "Avg. ROI Increase"   },
] as const;

const TESTIMONIALS = [
  {
    id: 1,
    name: "Medi",
    role: "Founder",
    company: "CoreCharge Nutrition",
    rating: 5,
    text: "Bagora built us a full e-commerce platform from scratch. Within the first month of going live, our online orders tripled and we finally stopped losing customers to competitors with better websites. The site is fast, clean, and our customers love it.",
  },
  {
    id: 2,
    name: "Arjun Bora",
    role: "Owner",
    company: "Restopia Homestay",
    rating: 5,
    text: "Before Bagora, guests couldn't even find us online. Now we rank on Google and our booking inquiries went up 60% in the first two months. The website looks exactly like what a premium homestay should, warm, trustworthy, and easy to navigate.",
  },
  {
    id: 3,
    name: "Kabir Nair",
    role: "Co-Founder",
    company: "Old Man Studio",
    rating: 5,
    text: "We sell handcrafted furniture and needed a site that matched the premium feel of our products. Bagora delivered something we're genuinely proud to share with customers. Our average order value went up after the redesign, people trust the brand more now.",
  },
  {
    id: 4,
    name: "Dr. Sameer Kulkarni",
    role: "Principal Dentist",
    company: "Smile Clinic",
    rating: 5,
    text: "We were relying entirely on word of mouth before. Bagora built us a professional website and helped us set up Google My Business. In three months we had 40+ new patient inquiries directly from the website. Couldn't be happier.",
  },
  {
    id: 5,
    name: "Mehul Shah",
    role: "Director",
    company: "Valuation Lab",
    rating: 5,
    text: "Our old site was embarrassing for a firm that publishes research on companies like Adani and Ambani. Bagora built us something that finally matches the credibility of our work. The reports section is clean, the navigation is intuitive, and the whole thing loads in under 2 seconds.",
  },
] as const;

const CASE_STUDIES = [
  {
    id: 1,
    client: "CoreCharge Nutrition",
    url: "https://www.corechargenutrition.in",
    category: "E-Commerce",
    headline: "Built a supplement e-commerce store. 3x orders in month one.",
    description: "CoreCharge Nutrition needed a full online store to sell their authentic supplements directly to customers across India. We built a fast, mobile-first e-commerce platform with product filtering, a verified brand system, secure checkout, and a QR-based authenticity verification feature.",
    metrics: [
      { label: "Online Orders",   before: "Manual / 0",  after: "3x per month" },
      { label: "Page Load Speed", before: "0 (offline)", after: "1.3s"         },
      { label: "SEO",             before: "0% presence", after: "200%"         },
    ],
    tags: ["Next.js", "E-Commerce", "Stripe", "Mobile-First"],
  },
  {
    id: 2,
    client: "Restopia Homestay",
    url: "https://www.restopiahotels.com",
    category: "Hospitality Website",
    headline: "Booking inquiries up 60%. Guwahati homestay now ranks on Google.",
    description: "Restopia Homestay had no digital presence and relied entirely on referrals. We built a warm, professional website with a gallery, room pages, and a contact-to-book flow, then optimised for local SEO so guests searching in Guwahati could actually find them.",
    metrics: [
      { label: "Booking Inquiries", before: "0 (offline)", after: "+60% Month 2" },
      { label: "Google Ranking",    before: "Not indexed",  after: "Page 1 Local" },
      { label: "Avg. Time on Site", before: "N/A",          after: "3m 12s"       },
    ],
    tags: ["Next.js", "Local SEO", "Responsive Design"],
  },
  {
    id: 3,
    client: "Old Man Studio",
    url: "https://oldmanstudio.vercel.app",
    category: "E-Commerce",
    headline: "Premium furniture brand. AOV increased post-launch.",
    description: "Old Man Studio creates handcrafted, premium furniture and needed a website that matched the quality of their products. We built a rich, editorial e-commerce experience with high-quality product showcases, a custom collections layout, and an ordering flow optimised for high-value purchases.",
    metrics: [
      { label: "Avg. Order Value",   before: "Baseline", after: "+28%"              },
      { label: "Bounce Rate",        before: "68%",       after: "41%"               },
      { label: "Product Page Views", before: "Low",       after: "+3.4x per session" },
    ],
    tags: ["Next.js", "E-Commerce", "Editorial Design"],
  },
  {
    id: 4,
    client: "Smile Clinic",
    url: "https://dentistwebsite1.vercel.app",
    category: "Healthcare Website",
    headline: "40+ new patient inquiries in 3 months from zero digital presence.",
    description: "A busy dental clinic relying entirely on word of mouth needed a credible online presence. We built a clean, trust-focused website with service pages, a patient FAQ, before/after results, and a simple appointment request form, then set up Google My Business to drive local discovery.",
    metrics: [
      { label: "New Inquiries",     before: "0 (offline)",  after: "40+ in 3 mo." },
      { label: "Google Visibility", before: "None",          after: "Local Pack"    },
      { label: "Appointment Fills", before: "Word of mouth", after: "Web + WOM"     },
    ],
    tags: ["Next.js", "Local SEO", "Healthcare UX"],
  },
  {
    id: 5,
    client: "Valuation Lab",
    url: "https://www.valuationlab.in",
    category: "Research & Finance",
    headline: "Research portal for institutional-grade valuation reports.",
    description: "Valuation Lab publishes in-depth valuation reports on major Indian conglomerates. Their old site didn't reflect the credibility of their research. We rebuilt it with a structured reports library, clean typography, and a fast CMS so the content could speak for itself.",
    metrics: [
      { label: "Load Time",          before: "4.8s",      after: "1.1s"        },
      { label: "Report Page Views",  before: "Baseline",  after: "+180%"       },
      { label: "Newsletter Signups", before: "Few/month", after: "+4x Month 1" },
    ],
    tags: ["Next.js", "CMS", "Finance UX", "SEO"],
  },
  {
    id: 6,
    client: "DermaCare Clinic",
    url: "https://dermatologist2.vercel.app",
    category: "Healthcare Website",
    headline: "Multi-service dermatology clinic goes digital. Leads up immediately.",
    description: "A dermatology clinic with multiple treatments needed a site that clearly communicated each service and built trust with new patients. We built a modern healthcare website with dedicated service pages, before/after galleries, and a consultation request flow.",
    metrics: [
      { label: "Consultation Requests", before: "Walk-ins only", after: "+35 online/mo." },
      { label: "Service Page Views",    before: "None",           after: "1.2k/month"     },
      { label: "Avg. Session Duration", before: "N/A",            after: "2m 45s"         },
    ],
    tags: ["Next.js", "Healthcare UX", "Conversion Optimisation"],
  },
  {
    id: 7,
    client: "Swaad Indian Kitchen",
    url: "https://menu-nine-kohl.vercel.app",
    category: "Digital Menu",
    headline: "Replaced paper menus with a scannable digital system and admin panel.",
    description: "Swaad Indian Kitchen wanted to move to a QR-based digital menu that staff could update in real time. We built a customer-facing menu with categories and images, plus a full admin panel where staff can add, edit, or remove items without any developer help.",
    metrics: [
      { label: "Menu Update Time",  before: "Days (reprint)",   after: "Less than 2 min" },
      { label: "Items Showcased",   before: "Limited (print)",  after: "Full menu"        },
      { label: "Staff Dependency",  before: "Developer needed", after: "Self-service"     },
    ],
    tags: ["Next.js", "Admin Panel", "QR Menu", "Real-time"],
  },
] as const;

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 12 12" fill="none">
          <path d="M6 1l1.3 2.6L10 4l-2 1.9.5 2.7L6 7.4 3.5 8.6 4 5.9 2 4l2.7-.4L6 1z"
            fill="var(--gold)" stroke="var(--gold)" strokeWidth="0.5" />
        </svg>
      ))}
    </div>
  );
}

export default function SocialProof() {
  const [activeCase, setActiveCase]   = useState(0);
  const [ticker, setTicker]           = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const autoPaused  = useRef(false);

  const goTo = (index: number) => {
    if (index === ticker) return;
    setIsAnimating(true);
    setTimeout(() => { setTicker(index); setIsAnimating(false); }, 280);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (!autoPaused.current) {
        setIsAnimating(true);
        setTimeout(() => {
          setTicker((t) => (t + 1) % TESTIMONIALS.length);
          setIsAnimating(false);
        }, 280);
      }
    }, 4000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  const pauseAuto = () => { autoPaused.current = true; };
  const ActiveAvatar = AVATAR_COMPONENTS[ticker];

  /* ── Animated counters — trigger once when stats bar enters viewport ── */
  const statsRef    = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState(STATS.map(() => 0));
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1800;
          const steps    = 60;
          const interval = duration / steps;
          let step = 0;
          const timer = setInterval(() => {
            step++;
            const eased = 1 - Math.pow(1 - step / steps, 3);
            setCounts(STATS.map((s) => {
              const raw = eased * s.target;
              return s.decimals > 0
                ? Math.min(parseFloat(raw.toFixed(s.decimals)), s.target)
                : Math.min(Math.round(raw), s.target);
            }));
            if (step >= steps) clearInterval(timer);
          }, interval);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative w-full py-16 sm:py-32 overflow-hidden"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(var(--gradient-grid) 1px, transparent 1px), linear-gradient(90deg, var(--gradient-grid) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute -left-40 top-1/3 w-[500px] h-[500px] rounded-full pointer-events-none z-0 opacity-[0.05] blur-[120px]"
        style={{ background: "radial-gradient(circle, var(--gold) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">

        {/* ── Section label ── */}
        <div className="flex items-center gap-3 mb-3 sm:mb-4">
          <span className="w-8 h-px" style={{ backgroundColor: "var(--gold)" }} />
          <span className="text-xs font-semibold tracking-[0.18em] uppercase" style={{ color: "var(--gold)" }}>
            Social Proof
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6 mb-10 sm:mb-20">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight"
            style={{ background: "linear-gradient(to right, #ffffff, #888888)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
          >
            Trusted by teams<br />
            <span style={{ background: "var(--gradient-primary)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              that move fast.
            </span>
          </h2>
          <p className="text-sm leading-relaxed max-w-xs" style={{ color: "var(--text-muted)" }}>
            Real results from real clients. No vanity metrics, just outcomes that matter to growing businesses.
          </p>
        </div>

        {/* ── Stats bar — animated counters ── */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-px mb-10 sm:mb-20 rounded-2xl overflow-hidden"
          style={{ border: "1px solid var(--border)" }}
        >
          {STATS.map((stat, i) => (
            <div key={stat.label}
              className="flex flex-col items-center justify-center py-5 sm:py-8 px-3 sm:px-4 text-center"
              style={{ backgroundColor: "rgba(201,169,97,0.04)", borderRight: i < STATS.length - 1 ? "1px solid var(--border)" : "none" }}
            >
              <span
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-1 tabular-nums"
                style={{ background: "var(--gradient-primary)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
              >
                {stat.decimals > 0 ? counts[i].toFixed(stat.decimals) : counts[i]}{stat.suffix}
              </span>
              <span className="text-[10px] sm:text-xs tracking-wide uppercase" style={{ color: "var(--text-muted)" }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* ── Testimonials ── */}
        <div className="mb-14 sm:mb-24">
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <span className="text-sm font-semibold" style={{ color: "var(--text)" }}>Client Testimonials</span>
            <div className="flex-1 h-px" style={{ backgroundColor: "var(--border)" }} />
          </div>

          {/* Featured testimonial */}
          <div
            className="rounded-2xl p-6 sm:p-8 md:p-10 mb-4 sm:mb-6"
            style={{ backgroundColor: "rgba(201,169,97,0.06)", border: "1px solid var(--border-hover)", boxShadow: "var(--glow-sm)", minHeight: "200px" }}
          >
            <div style={{ opacity: isAnimating ? 0 : 1, transform: isAnimating ? "translateY(8px)" : "translateY(0)", transition: "opacity 0.28s ease, transform 0.28s ease" }}>
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <ActiveAvatar size={40} />
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-sm" style={{ color: "var(--text)" }}>{TESTIMONIALS[ticker].name}</p>
                  <p className="text-xs truncate" style={{ color: "var(--text-muted)" }}>
                    {TESTIMONIALS[ticker].role} · {TESTIMONIALS[ticker].company}
                  </p>
                </div>
                <StarRating count={TESTIMONIALS[ticker].rating} />
              </div>
              <svg width="24" height="18" viewBox="0 0 32 24" fill="none" className="mb-3 sm:mb-4 opacity-35">
                <path d="M0 24V14C0 6.268 4.924 1.46 14.772 0L16 2.8C11.196 3.932 8.524 6.492 8 10.48H14V24H0zm18 0V14C18 6.268 22.924 1.46 32.772 0L34 2.8C29.196 3.932 26.524 6.492 26 10.48H32V24H18z" fill="var(--gold)" />
              </svg>
              <p className="text-[13px] sm:text-base md:text-lg leading-relaxed font-medium" style={{ color: "rgba(255,255,255,0.85)" }}>
                "{TESTIMONIALS[ticker].text}"
              </p>
            </div>
          </div>

          {/* Mini cards — 2 on mobile, 4 on desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
            {TESTIMONIALS.filter((_, i) => i !== ticker).slice(0, 4).map((t) => {
              const idx = TESTIMONIALS.findIndex((x) => x.id === t.id);
              const MiniAvatar = AVATAR_COMPONENTS[idx];
              return (
                <button
                  key={t.id}
                  onClick={() => { pauseAuto(); goTo(idx); }}
                  className="text-left rounded-xl p-3 sm:p-4 transition-all duration-300"
                  style={{ backgroundColor: "rgba(255,255,255,0.02)", borderWidth: "1px", borderStyle: "solid", borderColor: "var(--border)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,169,97,0.35)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; }}
                >
                  <div className="flex items-center gap-2 sm:gap-2.5 mb-1.5 sm:mb-2">
                    <MiniAvatar size={28} />
                    <div className="min-w-0">
                      <p className="text-[11px] sm:text-xs font-semibold leading-tight truncate" style={{ color: "var(--text)" }}>{t.name}</p>
                      <p className="text-[9px] sm:text-[10px] truncate" style={{ color: "var(--text-muted)" }}>{t.company}</p>
                    </div>
                  </div>
                  <p className="text-[10px] sm:text-[11px] leading-relaxed line-clamp-2" style={{ color: "var(--text-muted)" }}>"{t.text}"</p>
                </button>
              );
            })}
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-5 sm:mt-6">
            {TESTIMONIALS.map((_, i) => (
              <button key={i} onClick={() => { pauseAuto(); goTo(i); }}
                className="rounded-full transition-all duration-300"
                style={{ width: i === ticker ? "20px" : "6px", height: "6px", backgroundColor: i === ticker ? "var(--gold)" : "var(--border)" }}
              />
            ))}
          </div>
        </div>

        {/* ── Case Studies ── */}
        <div>
          <div className="flex items-center gap-3 mb-5 sm:mb-8">
            <span className="text-sm font-semibold" style={{ color: "var(--text)" }}>Case Studies</span>
            <div className="flex-1 h-px" style={{ backgroundColor: "var(--border)" }} />
          </div>

          {/* Tabs — horizontally scrollable on mobile */}
          <div className="flex gap-2 mb-5 sm:mb-8 overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap scrollbar-none"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            {CASE_STUDIES.map((cs, i) => (
              <button key={cs.id} onClick={() => setActiveCase(i)}
                className="text-xs font-semibold px-3 sm:px-4 py-2 rounded-full transition-all duration-300 flex-shrink-0"
                style={{
                  backgroundColor: activeCase === i ? "var(--gold)" : "rgba(201,169,97,0.08)",
                  color: activeCase === i ? "var(--bg-deep)" : "var(--gold-dim)",
                  borderWidth: "1px", borderStyle: "solid",
                  borderColor: activeCase === i ? "var(--gold)" : "var(--border)",
                }}>
                {cs.client}
              </button>
            ))}
          </div>

          {/* Active case study */}
          {CASE_STUDIES.map((cs, i) => (
            <div key={cs.id} className="rounded-2xl overflow-hidden"
              style={{ display: activeCase === i ? "block" : "none", borderWidth: "1px", borderStyle: "solid", borderColor: "var(--border-hover)", backgroundColor: "rgba(201,169,97,0.06)" }}>

              {/* Mobile: stacked. Desktop: 3 columns */}
              <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.9fr_1fr]">

                {/* Col 1: Description */}
                <div className="p-5 sm:p-8 border-b lg:border-b-0 lg:border-r" style={{ borderColor: "var(--border)" }}>
                  <div className="flex items-center gap-2 mb-3 sm:mb-4">
                    <span className="text-[10px] font-semibold tracking-[0.14em] uppercase px-3 py-1 rounded-full"
                      style={{ backgroundColor: "rgba(201,169,97,0.12)", color: "var(--gold)", border: "1px solid var(--border)" }}>
                      {cs.category}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold leading-snug mb-3 sm:mb-4" style={{ color: "var(--text)" }}>{cs.headline}</h3>
                  <p className="text-[13px] sm:text-sm leading-relaxed mb-4 sm:mb-6" style={{ color: "var(--text-muted)" }}>{cs.description}</p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {cs.tags.map((tag) => (
                      <span key={tag} className="text-[10px] sm:text-[11px] font-medium px-2.5 sm:px-3 py-1 rounded-full"
                        style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid var(--border)", color: "var(--text-muted)" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Col 2: Metrics */}
                <div className="p-5 sm:p-8 border-b lg:border-b-0 lg:border-r" style={{ borderColor: "var(--border)" }}>
                  <p className="text-[10px] font-semibold tracking-[0.14em] uppercase mb-4 sm:mb-6" style={{ color: "var(--gold)" }}>Results</p>
                  <div className="flex flex-col gap-4 sm:gap-5">
                    {cs.metrics.map((m) => (
                      <div key={m.label}>
                        <p className="text-[11px] sm:text-xs mb-2" style={{ color: "var(--text-muted)" }}>{m.label}</p>
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="flex-1 text-center py-1.5 sm:py-2 rounded-lg text-[10px] sm:text-xs font-semibold"
                            style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid var(--border)", color: "var(--text-dim)", textDecoration: "line-through" }}>
                            {m.before}
                          </div>
                          <svg width="12" height="12" viewBox="0 0 16 16" fill="none" style={{ color: "var(--gold)", flexShrink: 0 }}>
                            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <div className="flex-1 text-center py-1.5 sm:py-2 rounded-lg text-[10px] sm:text-xs font-bold"
                            style={{ background: "var(--gradient-primary)", color: "var(--bg-deep)" }}>
                            {m.after}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Col 3: Live preview — hidden on mobile, visible on desktop */}
                <div className="hidden lg:flex p-8 flex-col gap-4 group">
                  <p className="text-[10px] font-semibold tracking-[0.14em] uppercase" style={{ color: "var(--gold)" }}>Live Preview</p>
                  <div className="relative rounded-xl overflow-hidden flex-1 border transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(201,169,97,0.08)]"
                    style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-deep)" }}>
                    <div className="flex items-center gap-1.5 px-3 py-2 border-b"
                      style={{ backgroundColor: "rgba(255,255,255,0.03)", borderColor: "var(--border)" }}>
                      <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                      <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                      <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                      <span className="ml-2 text-[10px] truncate flex-1 text-white/40">{cs.url}</span>
                    </div>
                    <div className="relative w-full aspect-[16/10] overflow-hidden">
                      <iframe
                        src={cs.url}
                        title={`${cs.client} website preview`}
                        className="absolute top-0 left-0 w-[250%] h-[250%]"
                        style={{ transform: "scale(0.4)", transformOrigin: "top left", border: "none", pointerEvents: "none" }}
                        loading="lazy"
                        sandbox="allow-scripts allow-same-origin"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                  <a href={cs.url} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-xs font-semibold py-2.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                    style={{ backgroundColor: "rgba(201,169,97,0.1)", border: "1px solid var(--border)", color: "var(--gold)" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border-hover)"; (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(201,169,97,0.15)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(201,169,97,0.1)"; }}>
                    View Live Project
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 10L10 2M10 2H5M10 2v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>

                {/* Mobile: simple visit link instead of iframe */}
                <div className="lg:hidden p-5 border-t" style={{ borderColor: "var(--border)" }}>
                  <a href={cs.url} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-xs font-semibold py-3 rounded-xl w-full"
                    style={{ backgroundColor: "rgba(201,169,97,0.1)", border: "1px solid var(--border)", color: "var(--gold)" }}>
                    View Live Project
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 10L10 2M10 2H5M10 2v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div
          className="mt-10 sm:mt-16 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-6"
          style={{ backgroundColor: "rgba(201,169,97,0.05)", border: "1px solid var(--border)" }}
        >
          <div>
            <p className="text-base sm:text-lg font-bold mb-1" style={{ color: "var(--text)" }}>Want results like these?</p>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>Lets talk about your project. No commitment, no pressure.</p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0 w-full sm:w-auto">
            <a href="https://cal.com/bagora-agency-pfnups/secret" target="_blank" rel="noopener noreferrer"
              className="btn-primary whitespace-nowrap flex-1 sm:flex-none text-sm font-semibold px-5 sm:px-6 py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] text-center"
              style={{ color: "var(--bg-deep)" }}>
              Book a Free Call
            </a>
            <a href="/form-inquiry"
              className="btn-secondary flex-1 sm:flex-none text-sm font-medium px-5 sm:px-6 py-3 rounded-full text-center">
              Start a Project
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}