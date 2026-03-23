"use client";

import { useState } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";

const SERVICE_OPTIONS = [
  "Web Development",
  "App Development",
  "UI/UX Design",
  "API & Backend",
  "SEO & Performance",
  "Maintenance & Support",
  "Not sure yet",
] as const;

const BUDGET_OPTIONS = [
  "Under $299",
  "$299 to $999",
  "$999 to $5,000",
  "$5,000+",
  "Let's discuss",
] as const;

const TIMELINE_OPTIONS = [
  "ASAP",
  "Within 2 weeks",
  "Within 1 month",
  "1 to 3 months",
  "3 to 6 months",
  "Flexible",
] as const;

type FormState = "idle" | "submitting" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  services: string[];
  budget: string;
  timeline: string;
  description: string;
  referral: string;
}

const INITIAL_FORM: FormData = {
  name: "",
  email: "",
  company: "",
  phone: "",
  services: [],
  budget: "",
  timeline: "",
  description: "",
  referral: "",
};

function InputField({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold tracking-wide uppercase" style={{ color: "var(--text-muted)" }}>
        {label}
        {required && <span className="ml-1" style={{ color: "var(--gold)" }}>*</span>}
      </label>
      {children}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  backgroundColor: "rgba(255,255,255,0.03)",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "var(--border)",
  color: "var(--text)",
  borderRadius: "10px",
  padding: "11px 14px",
  fontSize: "14px",
  width: "100%",
  outline: "none",
  transition: "border-color 0.2s ease",
};

const inputFocusStyle: React.CSSProperties = {
  borderColor: "var(--border-hover)",
};

function TextInput({
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{ ...inputStyle, ...(focused ? inputFocusStyle : {}) }}
    />
  );
}

function TextArea({
  value,
  onChange,
  placeholder,
  rows = 5,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  rows?: number;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={rows}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{
        ...inputStyle,
        resize: "vertical",
        ...(focused ? inputFocusStyle : {}),
      }}
    />
  );
}

export default function FormInquiry() {
  const [form, setForm]     = useState<FormData>(INITIAL_FORM);
  const [status, setStatus] = useState<FormState>("idle");
  const [step, setStep]     = useState(1);

  const set = (field: keyof FormData) => (value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const toggleService = (service: string) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const selectOption = (field: "budget" | "timeline") => (value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async () => {
    setStatus("submitting");
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name:    form.name,
          reply_to:     form.email,
          company:      form.company             || "Not provided",
          project_type: form.services.join(", ") || "Not specified",
          budget:       form.budget              || "Not specified",
          timeline:     form.timeline            || "Not specified",
          message:      form.description         || "No message",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("success");
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      alert("Something went wrong. Please email us directly at bagoraagency@gmail.com");
    }
  };

  const step1Valid = form.name.trim() && form.email.trim() && form.email.includes("@");
  const step2Valid = form.services.length > 0 && form.budget && form.timeline;
  const step3Valid = form.description.trim().length > 20;

  /* ── Success screen ── */
  if (status === "success") {
    return (
      <main
        className="min-h-screen flex items-center justify-center px-4 sm:px-6"
        style={{ backgroundColor: "var(--bg)" }}
      >
        <div className="text-center max-w-md">
          <div
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-5 sm:mb-6"
            style={{ background: "var(--gradient-primary)" }}
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M6 14l6 6 10-10" stroke="var(--bg-deep)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold mb-3" style={{ color: "var(--text)" }}>
            We got your brief!
          </h1>
          <p className="text-sm leading-relaxed mb-6 sm:mb-8" style={{ color: "var(--text-muted)" }}>
            Thanks, {form.name.split(" ")[0]}. We'll review your inquiry and get back to you within 24 hours. Check your inbox, we'll send a confirmation shortly.
          </p>
          <div className="flex flex-row gap-3 justify-center">
            <a
              href="https://cal.com/bagora-agency/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex-1 sm:flex-none text-sm font-bold px-5 sm:px-6 py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5 text-center whitespace-nowrap"
              style={{ color: "var(--bg-deep)" }}
            >
              Also Book a Call
            </a>
            <Link
              href="/"
              className="btn-secondary flex-1 sm:flex-none text-sm font-medium px-5 sm:px-6 py-3 rounded-full text-center whitespace-nowrap"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main
      className="relative min-h-screen w-full overflow-hidden pt-20 sm:pt-28 pb-16 sm:pb-24"
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
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none z-0 opacity-[0.04] blur-[120px]"
        style={{ background: "radial-gradient(ellipse, var(--gold) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">

        {/* ── Header ── */}
        <div className="text-center mb-8 sm:mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs mb-6 sm:mb-8 transition-colors duration-200"
            style={{ color: "var(--text-muted)" }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M8 2L4 6l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to Home
          </Link>

          <div className="flex items-center justify-center gap-3 mb-3 sm:mb-4">
            <span className="w-8 h-px" style={{ backgroundColor: "var(--gold)" }} />
            <span className="text-xs font-semibold tracking-[0.18em] uppercase" style={{ color: "var(--gold)" }}>
              Start a Project
            </span>
            <span className="w-8 h-px" style={{ backgroundColor: "var(--gold)" }} />
          </div>

          <h1
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-2 sm:mb-3"
            style={{
              background: "linear-gradient(to right, #ffffff, #888888)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Tell us about your project.
          </h1>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            Fill in the brief below. Takes about 3 minutes. We'll respond within 24 hours.
          </p>
        </div>

        {/* ── Step indicator ── */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-10">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2 sm:gap-3">
              <div className="flex items-center gap-1.5 sm:gap-2 transition-all duration-300">
                <div
                  className="w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300"
                  style={{
                    background: step >= s ? "var(--gradient-primary)" : "rgba(255,255,255,0.05)",
                    color: step >= s ? "var(--bg-deep)" : "var(--text-dim)",
                    border: step === s ? "none" : `1px solid ${step > s ? "transparent" : "var(--border)"}`,
                  }}
                >
                  {step > s ? (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2.5 6l3 3 4-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : s}
                </div>
                <span
                  className="text-[10px] sm:text-xs font-medium hidden sm:block"
                  style={{ color: step === s ? "var(--gold)" : "var(--text-dim)" }}
                >
                  {s === 1 ? "About You" : s === 2 ? "Project Details" : "Your Brief"}
                </span>
              </div>
              {s < 3 && (
                <div
                  className="w-8 sm:w-12 h-px transition-all duration-300"
                  style={{ backgroundColor: step > s ? "var(--gold)" : "var(--border)" }}
                />
              )}
            </div>
          ))}
        </div>

        {/* ── Form card ── */}
        <div
          className="rounded-2xl p-5 sm:p-8 md:p-10"
          style={{
            backgroundColor: "rgba(255,255,255,0.02)",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "var(--border)",
          }}
        >

          {/* ── Step 1: About You ── */}
          {step === 1 && (
            <div className="flex flex-col gap-4 sm:gap-6">
              <h2 className="text-base sm:text-lg font-bold" style={{ color: "var(--text)" }}>
                First, tell us about yourself.
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
                <InputField label="Full Name" required>
                  <TextInput value={form.name} onChange={set("name")} placeholder="Alex Johnson" />
                </InputField>
                <InputField label="Email Address" required>
                  <TextInput value={form.email} onChange={set("email")} placeholder="alex@company.com" type="email" />
                </InputField>
                <InputField label="Company or Brand Name">
                  <TextInput value={form.company} onChange={set("company")} placeholder="Acme Inc." />
                </InputField>
                <InputField label="Phone Number">
                  <TextInput value={form.phone} onChange={set("phone")} placeholder="+1 (555) 000 0000" type="tel" />
                </InputField>
              </div>

              <InputField label="How did you hear about us?">
                <TextInput value={form.referral} onChange={set("referral")} placeholder="Google, referral, social media..." />
              </InputField>
            </div>
          )}

          {/* ── Step 2: Project Details ── */}
          {step === 2 && (
            <div className="flex flex-col gap-5 sm:gap-8">
              <h2 className="text-base sm:text-lg font-bold" style={{ color: "var(--text)" }}>
                What are you looking to build?
              </h2>

              {/* Services */}
              <InputField label="Services Needed" required>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-1">
                  {SERVICE_OPTIONS.map((s) => {
                    const active = form.services.includes(s);
                    return (
                      <button
                        key={s}
                        onClick={() => toggleService(s)}
                        className="text-[11px] sm:text-xs font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all duration-200"
                        style={{
                          backgroundColor: active ? "var(--gold)" : "rgba(201,169,97,0.07)",
                          color: active ? "var(--bg-deep)" : "var(--gold-dim)",
                          border: `1px solid ${active ? "var(--gold)" : "var(--border)"}`,
                        }}
                      >
                        {s}
                      </button>
                    );
                  })}
                </div>
              </InputField>

              {/* Budget */}
              <InputField label="Estimated Budget" required>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-1">
                  {BUDGET_OPTIONS.map((b) => {
                    const active = form.budget === b;
                    return (
                      <button
                        key={b}
                        onClick={() => selectOption("budget")(b)}
                        className="text-[11px] sm:text-xs font-semibold py-2 sm:py-2.5 px-2 sm:px-3 rounded-xl transition-all duration-200 text-center"
                        style={{
                          backgroundColor: active ? "rgba(201,169,97,0.12)" : "rgba(255,255,255,0.02)",
                          color: active ? "var(--gold)" : "var(--text-muted)",
                          border: `1px solid ${active ? "var(--border-hover)" : "var(--border)"}`,
                        }}
                      >
                        {b}
                      </button>
                    );
                  })}
                </div>
              </InputField>

              {/* Timeline */}
              <InputField label="Desired Timeline" required>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-1">
                  {TIMELINE_OPTIONS.map((t) => {
                    const active = form.timeline === t;
                    return (
                      <button
                        key={t}
                        onClick={() => selectOption("timeline")(t)}
                        className="text-[11px] sm:text-xs font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all duration-200"
                        style={{
                          backgroundColor: active ? "rgba(201,169,97,0.12)" : "rgba(255,255,255,0.02)",
                          color: active ? "var(--gold)" : "var(--text-muted)",
                          border: `1px solid ${active ? "var(--border-hover)" : "var(--border)"}`,
                        }}
                      >
                        {t}
                      </button>
                    );
                  })}
                </div>
              </InputField>
            </div>
          )}

          {/* ── Step 3: Project Brief ── */}
          {step === 3 && (
            <div className="flex flex-col gap-4 sm:gap-6">
              <h2 className="text-base sm:text-lg font-bold" style={{ color: "var(--text)" }}>
                Tell us about your project.
              </h2>

              <InputField label="Project Description" required>
                <TextArea
                  value={form.description}
                  onChange={set("description")}
                  placeholder="Describe what you're building, who it's for, what problem it solves, and any specific features or requirements you have in mind. The more detail, the better."
                  rows={6}
                />
              </InputField>

              {/* Summary */}
              <div
                className="rounded-xl p-4 sm:p-5 flex flex-col gap-2.5 sm:gap-3"
                style={{ backgroundColor: "rgba(201,169,97,0.05)", border: "1px solid var(--border)" }}
              >
                <p className="text-[10px] font-bold tracking-[0.14em] uppercase" style={{ color: "var(--gold)" }}>
                  Your Summary
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 text-xs" style={{ color: "var(--text-muted)" }}>
                  <span><span style={{ color: "var(--text-dim)" }}>Name:</span> {form.name || "—"}</span>
                  <span><span style={{ color: "var(--text-dim)" }}>Email:</span> {form.email || "—"}</span>
                  <span><span style={{ color: "var(--text-dim)" }}>Services:</span> {form.services.join(", ") || "—"}</span>
                  <span><span style={{ color: "var(--text-dim)" }}>Budget:</span> {form.budget || "—"}</span>
                  <span><span style={{ color: "var(--text-dim)" }}>Timeline:</span> {form.timeline || "—"}</span>
                  {form.company && <span><span style={{ color: "var(--text-dim)" }}>Company:</span> {form.company}</span>}
                </div>
              </div>

              <p className="text-xs" style={{ color: "var(--text-dim)" }}>
                By submitting this form you agree to our{" "}
                <Link href="/privacy" className="underline" style={{ color: "var(--gold-dim)" }}>Privacy Policy</Link>
                {" "}and{" "}
                <Link href="/terms" className="underline" style={{ color: "var(--gold-dim)" }}>Terms of Service</Link>.
              </p>
            </div>
          )}

          {/* ── Navigation buttons ── */}
          <div className="flex items-center justify-between mt-7 sm:mt-10 pt-5 sm:pt-6" style={{ borderTop: "1px solid var(--border)" }}>
            <button
              onClick={() => setStep((s) => s - 1)}
              className="flex items-center gap-1.5 sm:gap-2 text-sm font-medium transition-colors duration-200"
              style={{
                color: step === 1 ? "transparent" : "var(--text-muted)",
                pointerEvents: step === 1 ? "none" : "auto",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M9 3L5 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back
            </button>

            {step < 3 ? (
              <button
                onClick={() => setStep((s) => s + 1)}
                disabled={step === 1 ? !step1Valid : !step2Valid}
                className="flex items-center gap-2 text-sm font-bold px-5 sm:px-7 py-2.5 sm:py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                style={{
                  background: "var(--gradient-primary)",
                  color: "var(--bg-deep)",
                  boxShadow: "var(--glow-sm)",
                }}
              >
                Continue
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!step3Valid || status === "submitting"}
                className="flex items-center gap-2 text-sm font-bold px-5 sm:px-7 py-2.5 sm:py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                style={{
                  background: "var(--gradient-primary)",
                  color: "var(--bg-deep)",
                  boxShadow: "var(--glow-sm)",
                }}
              >
                {status === "submitting" ? (
                  <>
                    <svg className="animate-spin" width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" strokeDasharray="8 8" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Submit Brief
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </>
                )}
              </button>
            )}
          </div>
        </div>

        {/* ── Prefer a call? ── */}
        <p className="text-center text-xs mt-5 sm:mt-6" style={{ color: "var(--text-dim)" }}>
          Prefer to talk?{" "}
          <a
            href="https://cal.com/bagora-agency/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="underline transition-colors duration-200"
            style={{ color: "var(--gold-dim)" }}
          >
            Book a free 30 min call instead
          </a>
        </p>

      </div>
    </main>
  );
}