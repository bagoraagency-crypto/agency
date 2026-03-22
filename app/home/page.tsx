"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";

import avatarImg1 from "@/public/assets/avatar1.png";
import avatarImg2 from "@/public/assets/avatar2.png";
import avatarImg3 from "@/public/assets/avatar3.png";
import avatarImg4 from "@/public/assets/avatar4.png";
import avatarImg5 from "@/public/assets/avatar5.png";
import Timeline from "../components/Timeline";
import Services from "../components/Services";
import SocialProof from "../components/Socialproof";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";

const AVATARS = [avatarImg1, avatarImg2, avatarImg3, avatarImg4, avatarImg5];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width)  * 100,
          y: ((e.clientY - rect.top)  / rect.height) * 100,
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <Navbar />

      <div
        ref={containerRef}
        className="relative flex flex-col min-h-screen overflow-hidden"
        style={{ backgroundColor: "var(--bg)" }}
      >
        {/* Grid background */}
        <div className="grid-bg absolute inset-0 z-0 pointer-events-none" />

        {/* Noise overlay */}
        <div className="noise-overlay absolute inset-0 z-0 pointer-events-none" />

        {/* Mouse-follow spotlight */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none transition-all duration-100"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, rgba(201,169,97,0.06) 0%, transparent 60%)`,
          }}
        />

        {/* Blob — top left */}
        <div className="blob-1 blob-gold-1 absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none z-0 opacity-[0.07] blur-[120px]" />

        {/* Blob — bottom right */}
        <div className="blob-2 blob-gold-2 absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none z-0 opacity-[0.06] blur-[120px]" />

        {/* ── Content ── */}
        <main className="relative z-[2] flex flex-col items-center justify-center text-center flex-1 max-w-[1200px] mx-auto w-full px-4 sm:px-6 pt-28 sm:pt-44 pb-16 sm:pb-24">

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 mb-6 sm:mb-8 text-[10px] sm:text-[11px] font-medium tracking-[0.08em] uppercase"
            style={{
              backgroundColor: "rgba(201,169,97,0.08)",
              border: "1px solid var(--border)",
              color: "var(--text-muted)",
            }}
          >
            <span className="dot-glow w-1.5 h-1.5 rounded-full flex-shrink-0" />
            Web &amp; App Development Agency
          </div>

          {/* Headline — smaller on mobile */}
          <h1
            className="mb-5 sm:mb-6"
            style={{
              fontFamily: "var(--font-syne), Syne, sans-serif",
              fontSize: "clamp(1.75rem, 7vw, 4rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-1px",
              background: "linear-gradient(to right, #ffffff, #888888)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Your Premium Pass To
            <br />
            <span className="gradient-text">Web, App &amp; AI Solutions</span>
            <br />
            That Scale!
          </h1>

          {/* Social proof */}
          <div className="flex flex-col items-center mb-7 sm:mb-9">
            <div className="flex items-center mb-2.5 sm:mb-3">
              {AVATARS.map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt="Customer"
                  width={32}
                  height={32}
                  className="rounded-full object-cover -ml-2 sm:-ml-2.5 first:ml-0"
                  style={{
                    border: "2px solid var(--bg)",
                    boxShadow: "0 0 0 1px var(--border)",
                  }}
                />
              ))}
            </div>
            <div className="flex gap-0.5 mb-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-yellow-400 text-sm sm:text-base">★</span>
              ))}
            </div>
            <p className="text-[12px] sm:text-[13px]" style={{ color: "var(--text-muted)" }}>
              Loved by 100+ clientele
            </p>
          </div>

          {/* Tagline */}
          <div className="mb-8 sm:mb-10">
            <p
              className="text-[15px] sm:text-[18px] font-medium mb-1.5 sm:mb-2"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              Fast. Scalable. Built to convert.
            </p>
            <p
              className="text-[13px] sm:text-[15px] leading-relaxed max-w-[320px] sm:max-w-lg mx-auto"
              style={{ color: "var(--text-muted)" }}
            >
              We design and develop websites and apps that grow with your business, from landing pages to fully fledged platforms. 🚀
            </p>
          </div>

          {/* CTA Buttons — always in one row, smaller on mobile */}
          <div className="flex flex-row items-center gap-2 sm:gap-3 mt-2 w-full justify-center">
            <Link
              href="/form-inquiry"
              className="btn-primary cta-pulse inline-block px-5 sm:px-7 py-3 sm:py-3.5 rounded-full font-semibold text-[13px] sm:text-[15px] text-center transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] whitespace-nowrap"
              style={{ color: "var(--bg-deep)" }}
            >
              Get Started
            </Link>
            <a
              href="https://cal.com/bagora-agency-pfnups/secret"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-block px-5 sm:px-7 py-3 sm:py-3.5 rounded-full font-semibold text-[13px] sm:text-[15px] text-center whitespace-nowrap"
            >
              Book a Call
            </a>
          </div>

        </main>

        {/* Bottom glow line */}
        <div className="glow-line relative z-[2] w-full h-px mt-auto" />
      </div>

      <Timeline />
      <Services />
      <SocialProof />
      <Pricing />
      <Footer />
    </>
  );
}