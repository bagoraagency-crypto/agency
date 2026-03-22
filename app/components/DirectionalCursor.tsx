"use client";
import { useDirectionalCursor } from "../hooks/useDirectionalCursor";

export default function DirectionalCursor() {
  const { pos, angle } = useDirectionalCursor();

  return (
    <div
      className="pointer-events-none fixed z-[9999] -translate-x-1/2 -translate-y-1/2"
      style={{ left: pos.x, top: pos.y, transition: "transform 0.08s ease-out" }}
    >
      <svg
        width="32" height="32" viewBox="0 0 32 32"
        style={{ transform: `rotate(${angle}deg)`, transition: "transform 0.08s ease-out" }}
      >
        <circle cx="16" cy="16" r="2.5" fill="var(--gold)" opacity="0.8"/>
        <polygon points="16,3 12,13 16,10 20,13" fill="var(--gold)"/>
      </svg>
    </div>
  );
}