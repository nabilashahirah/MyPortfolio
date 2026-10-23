"use client";
import { useEffect, useRef } from "react";

/*
 * Fixed background layer: floating colour orbs, a slow particle network,
 * a scroll-progress bar, plus page-wide pointer effects (card spotlight
 * and button ripple) so individual sections don't need their own handlers.
 */
export default function BackgroundFX() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  /* Particle network */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    /* phones: skip the particle network entirely (CSS hides the canvas too) */
    if (window.matchMedia("(hover: none), (max-width: 900px)").matches) return;

    let w = 0, h = 0, raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    type P = { x: number; y: number; vx: number; vy: number };
    let pts: P[] = [];

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.round(Math.min(70, (w * h) / 22000));
      pts = Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i];
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 130) {
            ctx.strokeStyle = `rgba(255,110,180,${0.14 * (1 - d / 130)})`;
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
        ctx.fillStyle = "rgba(255,170,215,.55)";
        ctx.beginPath(); ctx.arc(a.x, a.y, 1.3, 0, Math.PI * 2); ctx.fill();
      }
      if (!reduce) raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  /* Scroll progress + spotlight + ripple */
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (barRef.current) barRef.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    };
    const fine = window.matchMedia("(pointer: fine)").matches && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let tilted: HTMLElement | null = null;
    let magnet: HTMLElement | null = null;
    const onMove = (e: PointerEvent) => {
      const t = e.target as Element | null;
      const card = t?.closest?.(".card") as HTMLElement | null;
      if (card) {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${e.clientX - r.left}px`);
        card.style.setProperty("--my", `${e.clientY - r.top}px`);
      }
      if (!fine) return;

      /* 3D tilt toward the pointer */
      const tilt = t?.closest?.(".tilt, .card, .step") as HTMLElement | null;
      if (tilted && tilted !== tilt) tilted.style.transform = "";
      tilted = tilt;
      if (tilt) {
        const r = tilt.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        tilt.style.transform = `perspective(900px) rotateX(${(-py * 7).toFixed(2)}deg) rotateY(${(px * 7).toFixed(2)}deg) translateY(-6px)`;
      }

      /* magnetic buttons */
      const btn = t?.closest?.(".btn") as HTMLElement | null;
      if (magnet && magnet !== btn) magnet.style.translate = "";
      magnet = btn;
      if (btn) {
        const r = btn.getBoundingClientRect();
        btn.style.translate = `${(e.clientX - r.left - r.width / 2) * 0.22}px ${(e.clientY - r.top - r.height / 2) * 0.3}px`;
      }

      /* hero spotlight */
      const hero = document.querySelector(".hero") as HTMLElement | null;
      if (hero) {
        const r = hero.getBoundingClientRect();
        hero.style.setProperty("--hx", `${e.clientX - r.left}px`);
        hero.style.setProperty("--hy", `${e.clientY - r.top + 80}px`);
        hero.style.setProperty("--px", ((e.clientX / window.innerWidth) - 0.5).toFixed(3));
        hero.style.setProperty("--py", ((e.clientY / window.innerHeight) - 0.5).toFixed(3));
      }
    };
    const onClick = (e: MouseEvent) => {
      const btn = (e.target as Element | null)?.closest?.(".btn") as HTMLElement | null;
      if (!btn) return;
      const r = btn.getBoundingClientRect();
      const s = document.createElement("span");
      s.className = "rip";
      s.style.left = `${e.clientX - r.left}px`;
      s.style.top = `${e.clientY - r.top}px`;
      btn.appendChild(s);
      setTimeout(() => s.remove(), 650);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    document.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <>
      <div ref={barRef} className="progress" style={{ transform: "scaleX(0)" }} />
      <div className="grain" aria-hidden />
      <div className="bgfx" aria-hidden>
        <div className="orb o1" />
        <div className="orb o2" />
        <div className="orb o3" />
        <canvas ref={canvasRef} />
      </div>
    </>
  );
}
