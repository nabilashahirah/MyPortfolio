"use client";
import { useEffect, useRef } from "react";

/* Neon pink cursor: a dot that tracks exactly and a ring that trails behind. */
export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    let x = window.innerWidth / 2, y = window.innerHeight / 2;
    let rx = x, ry = y, raf = 0;

    const onMove = (e: PointerEvent) => {
      x = e.clientX; y = e.clientY;
      if (dot.current) dot.current.style.transform = `translate(${x}px, ${y}px)`;
      const hot = (e.target as Element | null)?.closest?.("a, button, .wph");
      ring.current?.classList.toggle("big", !!hot);
    };
    const loop = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px)`;
      raf = requestAnimationFrame(loop);
    };
    loop();
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => { cancelAnimationFrame(raf); window.removeEventListener("pointermove", onMove); };
  }, []);

  return (
    <>
      <div ref={ring} className="cur-ring" aria-hidden />
      <div ref={dot} className="cur-dot" aria-hidden />
    </>
  );
}
