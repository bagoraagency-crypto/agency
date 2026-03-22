import { useEffect, useRef, useState } from "react";

export function useDirectionalCursor() {
  const [pos, setPos]     = useState({ x: -100, y: -100 });
  const [angle, setAngle] = useState(0);
  const lastPos = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      setPos({ x, y });

      if (lastPos.current) {
        const dx = x - lastPos.current.x;
        const dy = y - lastPos.current.y;
        if (Math.abs(dx) > 1.2 || Math.abs(dy) > 1.2) {
          const deg = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
          setAngle(deg);
        }
      }
      lastPos.current = { x, y };
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return { pos, angle };
}