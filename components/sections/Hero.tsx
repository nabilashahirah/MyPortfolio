"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ROLES = [
  { label: "AI Engineer",    color: "#1E9BC4" },
  { label: "AR Developer",   color: "#9B6FD4" },
  { label: "Full-Stack Dev", color: "#E8729A" },
  { label: "Data Scientist", color: "#34A853" },
];

const STACK = ["Next.js", "React", "Python", "Flutter"];

/* Card glow cycles in sync with role cycling (4 × 2.8s = 11.2s) */
const CARD_GLOWS = [
  "0 24px 72px rgba(30,100,160,0.20), 0 0 0 1.5px rgba(30,155,196,0.22)",
  "0 24px 72px rgba(155,111,212,0.20), 0 0 0 1.5px rgba(155,111,212,0.24)",
  "0 24px 72px rgba(232,114,154,0.20), 0 0 0 1.5px rgba(232,114,154,0.22)",
  "0 24px 72px rgba(52,168,83,0.16), 0 0 0 1.5px rgba(52,168,83,0.20)",
  "0 24px 72px rgba(30,100,160,0.20), 0 0 0 1.5px rgba(30,155,196,0.22)",
];

const CONTACTS = [
  {
    short: "Email",
    href: "mailto:nnabila.salim@gmail.com",
    color: "#E8729A",
    icon: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" /><polyline points="2,4 12,13 22,4" />
      </svg>
    ),
  },
  {
    short: "LinkedIn",
    href: "https://linkedin.com/in/nabila-shahirah-7a76b4243",
    color: "#1E9BC4",
    icon: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    short: "GitHub",
    href: "https://github.com/nabilashahirah",
    color: "#5A9AB0",
    icon: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
];

const PARTICLES = [
  { id: 0,  x: 7,  y: 18, size: 3, delay: 0,   dur: 7,  c: 0 },
  { id: 1,  x: 14, y: 62, size: 2, delay: 1.5, dur: 9,  c: 1 },
  { id: 2,  x: 21, y: 38, size: 3, delay: 0.8, dur: 8,  c: 2 },
  { id: 3,  x: 29, y: 75, size: 2, delay: 2.2, dur: 6,  c: 0 },
  { id: 4,  x: 36, y: 52, size: 4, delay: 0.3, dur: 10, c: 1 },
  { id: 5,  x: 43, y: 28, size: 2, delay: 1.8, dur: 7,  c: 2 },
  { id: 6,  x: 5,  y: 84, size: 3, delay: 1.1, dur: 8,  c: 1 },
  { id: 7,  x: 17, y: 12, size: 2, delay: 0.5, dur: 9,  c: 0 },
  { id: 8,  x: 33, y: 68, size: 4, delay: 2.5, dur: 7,  c: 2 },
  { id: 9,  x: 47, y: 42, size: 2, delay: 0.7, dur: 11, c: 0 },
  { id: 10, x: 54, y: 57, size: 3, delay: 1.3, dur: 6,  c: 1 },
  { id: 11, x: 63, y: 22, size: 2, delay: 2.0, dur: 8,  c: 2 },
  { id: 12, x: 39, y: 47, size: 4, delay: 0.2, dur: 9,  c: 0 },
  { id: 13, x: 11, y: 72, size: 2, delay: 1.7, dur: 7,  c: 1 },
  { id: 14, x: 50, y: 33, size: 3, delay: 0.9, dur: 10, c: 2 },
  { id: 15, x: 25, y: 88, size: 2, delay: 2.3, dur: 8,  c: 1 },
  { id: 16, x: 67, y: 16, size: 3, delay: 0.6, dur: 6,  c: 0 },
  { id: 17, x: 58, y: 80, size: 2, delay: 1.4, dur: 9,  c: 2 },
];
const PC = ["rgba(30,155,196,0.55)", "rgba(232,114,154,0.55)", "rgba(126,205,232,0.60)"];

/* Sparkles — 4-pointed stars that twinkle */
const SPARKLES = [
  { id: 0,  x: 8,  y: 20, size: 10, delay: 0,    dur: 2.4, color: "#1E9BC4" },
  { id: 1,  x: 19, y: 55, size: 7,  delay: 0.7,  dur: 3.0, color: "#E8729A" },
  { id: 2,  x: 32, y: 30, size: 9,  delay: 1.4,  dur: 2.6, color: "#9B6FD4" },
  { id: 3,  x: 45, y: 70, size: 6,  delay: 0.3,  dur: 2.8, color: "#1E9BC4" },
  { id: 4,  x: 57, y: 18, size: 11, delay: 1.1,  dur: 3.2, color: "#E8729A" },
  { id: 5,  x: 66, y: 48, size: 7,  delay: 0.5,  dur: 2.5, color: "#7ECDE8" },
  { id: 6,  x: 74, y: 82, size: 8,  delay: 1.8,  dur: 2.9, color: "#9B6FD4" },
  { id: 7,  x: 13, y: 88, size: 6,  delay: 2.1,  dur: 2.7, color: "#E8729A" },
  { id: 8,  x: 40, y: 10, size: 9,  delay: 0.9,  dur: 3.1, color: "#1E9BC4" },
  { id: 9,  x: 60, y: 65, size: 7,  delay: 0.2,  dur: 2.3, color: "#7ECDE8" },
  { id: 10, x: 80, y: 35, size: 8,  delay: 1.6,  dur: 2.8, color: "#E8729A" },
  { id: 11, x: 23, y: 42, size: 6,  delay: 2.4,  dur: 3.0, color: "#9B6FD4" },
];

/* Bubbles — translucent floating circles */
const BUBBLES = [
  { id: 0,  x: 10, y: 10, size: 18, delay: 0,    dur: 8,  bc: "rgba(30,155,196,0.18)",  br: "rgba(30,155,196,0.35)"  },
  { id: 1,  x: 22, y: 50, size: 12, delay: 1.2,  dur: 10, bc: "rgba(232,114,154,0.14)", br: "rgba(232,114,154,0.30)" },
  { id: 2,  x: 35, y: 20, size: 22, delay: 0.6,  dur: 9,  bc: "rgba(126,205,232,0.16)", br: "rgba(126,205,232,0.32)" },
  { id: 3,  x: 50, y: 60, size: 14, delay: 2.0,  dur: 11, bc: "rgba(155,111,212,0.14)", br: "rgba(155,111,212,0.28)" },
  { id: 4,  x: 62, y: 30, size: 20, delay: 0.4,  dur: 7,  bc: "rgba(30,155,196,0.12)",  br: "rgba(30,155,196,0.28)"  },
  { id: 5,  x: 75, y: 75, size: 16, delay: 1.7,  dur: 9,  bc: "rgba(232,114,154,0.15)", br: "rgba(232,114,154,0.28)" },
  { id: 6,  x: 15, y: 78, size: 10, delay: 0.9,  dur: 12, bc: "rgba(126,205,232,0.18)", br: "rgba(126,205,232,0.35)" },
  { id: 7,  x: 44, y: 40, size: 24, delay: 2.5,  dur: 8,  bc: "rgba(155,111,212,0.10)", br: "rgba(155,111,212,0.24)" },
  { id: 8,  x: 85, y: 55, size: 14, delay: 1.3,  dur: 10, bc: "rgba(30,155,196,0.15)",  br: "rgba(30,155,196,0.30)"  },
  { id: 9,  x: 68, y: 12, size: 18, delay: 0.2,  dur: 8,  bc: "rgba(232,114,154,0.12)", br: "rgba(232,114,154,0.26)" },
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const [photoErr, setPhotoErr] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setActive((i) => (i + 1) % ROLES.length), 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(155deg, #DFF2FC 0%, #EBF6FF 28%, #F5EEFF 58%, #FFE6F4 100%)",
      }}
    >
      {/* ── Dot grid ── */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "radial-gradient(rgba(30,120,180,0.06) 1px, transparent 1px)",
        backgroundSize: "30px 30px",
      }} />

      {/* ── Aurora blobs ── */}
      <motion.div className="absolute pointer-events-none" style={{
        top: "-22%", left: "-12%", width: "72%", height: "92%",
        background: "radial-gradient(ellipse 65% 65% at 35% 40%, rgba(30,155,196,0.26) 0%, rgba(126,205,232,0.13) 52%, transparent 75%)",
        filter: "blur(64px)", borderRadius: "50%",
      }}
        animate={{ x: [0, 28, 8, -18, 0], y: [0, -18, 14, -8, 0], scale: [1, 1.08, 0.95, 1.04, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div className="absolute pointer-events-none" style={{
        bottom: "-18%", right: "-12%", width: "68%", height: "88%",
        background: "radial-gradient(ellipse 62% 68% at 65% 65%, rgba(232,114,154,0.26) 0%, rgba(242,184,212,0.13) 52%, transparent 75%)",
        filter: "blur(64px)", borderRadius: "50%",
      }}
        animate={{ x: [0, -22, 12, 18, 0], y: [0, 14, -18, 8, 0], scale: [1, 0.93, 1.07, 0.97, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div className="absolute pointer-events-none" style={{
        top: "15%", right: "8%", width: "48%", height: "65%",
        background: "radial-gradient(ellipse 58% 58% at 50% 50%, rgba(126,205,232,0.20) 0%, transparent 70%)",
        filter: "blur(52px)", borderRadius: "50%",
      }}
        animate={{ x: [0, 14, -18, 6, 0], y: [0, -14, 18, -6, 0], scale: [1, 1.12, 0.88, 1.06, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />

      {/* ── Particles ── */}
      {PARTICLES.map((p) => (
        <motion.div key={p.id} className="absolute pointer-events-none rounded-full"
          style={{ left: `${p.x}%`, bottom: `${p.y * 0.85}%`, width: p.size, height: p.size, background: PC[p.c] }}
          animate={{ y: [0, -(55 + p.id * 7), -(110 + p.id * 6)], opacity: [0, 0.7, 0], scale: [0.4, 1, 0.2] }}
          transition={{ duration: p.dur, repeat: Infinity, delay: p.delay, ease: "easeOut" }}
        />
      ))}

      {/* ── Sparkles ── */}
      {SPARKLES.map((s) => (
        <motion.div key={s.id} className="absolute pointer-events-none"
          style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.size, height: s.size }}
          animate={{ opacity: [0, 1, 0.6, 1, 0], scale: [0, 1, 0.8, 1, 0], rotate: [0, 20, 0, -20, 0] }}
          transition={{ duration: s.dur, repeat: Infinity, delay: s.delay, ease: "easeInOut" }}
        >
          {/* Horizontal arm */}
          <div style={{
            position: "absolute", top: "50%", left: 0, right: 0,
            height: "1.5px", borderRadius: "2px",
            background: s.color, transform: "translateY(-50%)",
          }} />
          {/* Vertical arm */}
          <div style={{
            position: "absolute", left: "50%", top: 0, bottom: 0,
            width: "1.5px", borderRadius: "2px",
            background: s.color, transform: "translateX(-50%)",
          }} />
          {/* Diagonal arm 1 */}
          <div style={{
            position: "absolute", top: "50%", left: 0, right: 0,
            height: "1px", borderRadius: "2px",
            background: s.color, opacity: 0.6,
            transform: "translateY(-50%) rotate(45deg)",
          }} />
          {/* Diagonal arm 2 */}
          <div style={{
            position: "absolute", top: "50%", left: 0, right: 0,
            height: "1px", borderRadius: "2px",
            background: s.color, opacity: 0.6,
            transform: "translateY(-50%) rotate(-45deg)",
          }} />
        </motion.div>
      ))}

      {/* ── Bubbles ── */}
      {BUBBLES.map((b) => (
        <motion.div key={b.id} className="absolute pointer-events-none rounded-full"
          style={{
            left: `${b.x}%`, top: `${b.y}%`,
            width: b.size, height: b.size,
            background: b.bc,
            border: `1px solid ${b.br}`,
            backdropFilter: "blur(2px)",
          }}
          animate={{
            y: [0, -(40 + b.size * 2), -(90 + b.size * 3)],
            opacity: [0, 0.75, 0],
            scale: [0.6, 1, 0.7],
          }}
          transition={{ duration: b.dur, repeat: Infinity, delay: b.delay, ease: "easeInOut" }}
        />
      ))}

      {/* ── Content ── */}
      <div className="relative" style={{ flex: 1, paddingTop: "72px", zIndex: 1, display: "flex", flexDirection: "column" }}>
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row" style={{ flex: 1, padding: "0 clamp(20px, 4vw, 48px)" }}>

        {/* LEFT: copy */}
        <div className="flex flex-col justify-center w-full md:flex-1" style={{
          paddingRight: "clamp(12px, 2vw, 28px)",
          paddingTop: "clamp(16px, 3vh, 32px)",
          paddingBottom: "clamp(20px, 4vh, 48px)",
          gap: "clamp(14px, 2.2vh, 26px)",
        }}>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic",
              fontSize: "clamp(14px, 1.4vw, 18px)", color: "#C4799A" }}
          >
            Hey, I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.30, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-syne)", fontWeight: 800,
              fontSize: "clamp(42px, 6.8vw, 94px)",
              lineHeight: 0.89, letterSpacing: "-0.035em",
              margin: 0, color: "#0B2840", textTransform: "uppercase",
            }}
          >
            Nabila<br />
            <span style={{
              background: "linear-gradient(128deg, #1E9BC4 0%, #9B6FD4 44%, #E8729A 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              Shahirah
            </span>
          </motion.h1>

          {/* Live role badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.46 }}
          >
            <motion.div
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "7px 16px 7px 11px", borderRadius: "999px" }}
              animate={{
                background: `${ROLES[active].color}15`,
                boxShadow: `inset 0 0 0 1px ${ROLES[active].color}45`,
              }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <motion.div
                key={`dot-${active}`}
                initial={{ scale: 0.3 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                style={{ width: 7, height: 7, borderRadius: "50%", background: ROLES[active].color, flexShrink: 0 }}
              />
              <AnimatePresence mode="wait">
                <motion.span
                  key={active}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    fontSize: "clamp(12px, 1.1vw, 14px)",
                    fontWeight: 600, letterSpacing: "0.01em",
                    color: ROLES[active].color, whiteSpace: "nowrap",
                  }}
                >
                  {ROLES[active].label}
                </motion.span>
              </AnimatePresence>
            </motion.div>
          </motion.div>

          {/* One-liner */}
          <motion.p
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "clamp(13px, 1.1vw, 16px)",
              color: "#1A5068", lineHeight: 1.68, maxWidth: "430px",
            }}
          >
            Builds software systems, integrates AI solutions, and develops machine learning models.
          </motion.p>

          {/* Stack pills */}
          <motion.div
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.63 }}
            style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}
          >
            {STACK.map((tag) => (
              <span key={tag} style={{
                fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 600,
                padding: "4px 13px", borderRadius: "999px",
                background: "rgba(255,255,255,0.84)", border: "1px solid rgba(30,120,180,0.15)",
                color: "#1A5068", letterSpacing: "0.02em",
                boxShadow: "0 1px 6px rgba(30,120,180,0.06)",
              }}>{tag}</span>
            ))}
          </motion.div>

          {/* Inline proof */}
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.70 }}
            style={{ fontFamily: "var(--font-space-grotesk)", fontSize: "11.5px", color: "#9BBCCC", letterSpacing: "0.02em" }}
          >
            <span style={{ color: "#1E9BC4", fontWeight: 700 }}>CGPA 3.6</span>&ensp;·&ensp;
            <span style={{ color: "#9B6FD4", fontWeight: 700 }}>3× Dean&apos;s List</span>&ensp;·&ensp;
            <span style={{ color: "#E8729A", fontWeight: 700 }}>6 Awards</span>&ensp;·&ensp;
            <span style={{ color: "#34A853", fontWeight: 700 }}>200+</span> members led
          </motion.p>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.78 }}
            style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}
          >
            {/* Available pill */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "7px",
              padding: "7px 14px", borderRadius: "999px",
              background: "rgba(255,255,255,0.84)", border: "1px solid rgba(30,120,180,0.13)",
              boxShadow: "0 2px 12px rgba(30,120,180,0.07)",
            }}>
              <motion.span style={{ width: 7, height: 7, borderRadius: "50%", background: "#34A853", display: "block", flexShrink: 0 }}
                animate={{ boxShadow: ["0 0 0px #34A853", "0 0 8px #34A85370", "0 0 0px #34A853"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <span style={{ fontFamily: "var(--font-inter)", fontSize: "12px", fontWeight: 500, color: "#0B2840", whiteSpace: "nowrap" }}>
                Available now
              </span>
            </div>

            {/* View Work button */}
            <a
              href="#intelligence"
              style={{
                display: "inline-flex", alignItems: "center", gap: "7px",
                padding: "8px 22px", borderRadius: "999px",
                background: "linear-gradient(135deg, #1E9BC4 0%, #9B6FD4 50%, #E8729A 100%)",
                color: "#FFFFFF", fontFamily: "var(--font-space-grotesk)",
                fontSize: "12.5px", fontWeight: 600, letterSpacing: "0.05em",
                textDecoration: "none",
                boxShadow: "0 4px 20px rgba(155,111,212,0.35)",
                transition: "transform 0.22s ease, box-shadow 0.22s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-2px)";
                el.style.boxShadow = "0 8px 32px rgba(155,111,212,0.48)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "none";
                el.style.boxShadow = "0 4px 20px rgba(155,111,212,0.35)";
              }}
            >
              View Work
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </motion.div>

        </div>

        {/* RIGHT: single identity card */}
        <div className="hidden md:flex items-center justify-center flex-shrink-0" style={{
          paddingLeft: "clamp(16px, 2vw, 32px)",
          paddingBottom: "clamp(20px, 4vh, 48px)",
        }}>

          {/* Outer: entrance animation */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
            style={{ width: "clamp(230px, 84%, 340px)" }}
          >
            {/* Inner: continuous glow cycle */}
            <motion.div
              style={{ borderRadius: "24px", overflow: "hidden", background: "#FFFFFF" }}
              animate={{ boxShadow: CARD_GLOWS }}
              transition={{ duration: 11.2, repeat: Infinity, ease: "linear" }}
            >

              {/* ── Photo ── */}
              <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden", background: "linear-gradient(160deg, #EBF6FF, #FFF0F8)" }}>
                {!photoErr ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src="/Nabila.png"
                    alt="Nabila Shahirah"
                    onError={() => setPhotoErr(true)}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }}
                  />
                ) : (
                  <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{
                      fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "72px",
                      background: "linear-gradient(135deg, #1E9BC4, #E8729A)",
                      WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                      letterSpacing: "-0.04em",
                    }}>NS</span>
                  </div>
                )}
                {/* Bottom fade into card strip */}
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0, height: "32%", pointerEvents: "none",
                  background: "linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
                }} />
              </div>

              {/* ── Card footer ── */}
              <div style={{ padding: "14px 18px 18px" }}>
                <p style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "15px", color: "#0B2840", marginBottom: "2px" }}>
                  Nabila Shahirah
                </p>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "11px", color: "#9BBCCC", marginBottom: "14px" }}>
                  Fresh Grad · Computer Science · UPM
                </p>

                {/* Connect chips */}
                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                  {CONTACTS.map((c) => (
                    <a
                      key={c.short}
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      style={{
                        display: "inline-flex", alignItems: "center", gap: "5px",
                        padding: "5px 11px", borderRadius: "8px",
                        background: `${c.color}12`, border: `1px solid ${c.color}28`,
                        color: c.color, fontSize: "10.5px", fontWeight: 600,
                        fontFamily: "var(--font-space-grotesk)",
                        textDecoration: "none", transition: "opacity 0.18s",
                      }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.72"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
                    >
                      {c.icon}
                      {c.short}
                    </a>
                  ))}
                </div>
              </div>

            </motion.div>
          </motion.div>

        </div>
      </div>
      </div>

      {/* ── Animated wave ── */}
      <div className="relative" style={{ zIndex: 3 }}>
        <svg viewBox="0 0 1440 60" style={{ display: "block", width: "100%", height: "60px" }} preserveAspectRatio="none">
          <motion.path
            fill="#FFFFFF"
            animate={{
              d: [
                "M0,30 C240,56 480,6 720,30 C960,54 1200,8 1440,30 L1440,60 L0,60 Z",
                "M0,40 C240,8 480,58 720,22 C960,4 1200,56 1440,38 L1440,60 L0,60 Z",
                "M0,30 C240,56 480,6 720,30 C960,54 1200,8 1440,30 L1440,60 L0,60 Z",
              ],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>

    </section>
  );
}
