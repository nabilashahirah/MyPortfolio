"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUpVariants, staggerContainer, VIEWPORT_ONCE } from "@/lib/animations";
import { AWARDS } from "@/lib/constants";
import GradientText from "@/components/ui/GradientText";

const AWARD_PHOTOS = [
  { src: "/Award/award1.jpg", alt: "Award moment 1" },
  { src: "/Award/award2.jpg", alt: "Award moment 2" },
  { src: "/Award/award3.jpg", alt: "Award moment 3" },
  { src: "/Award/award4.jpg", alt: "Award moment 4" },
  { src: "/Award/award5.jpg", alt: "Award moment 5" },
];

const MEDAL_ICONS: Record<string, string> = {
  "Gold Medal Volunteer Leadership Award": "🥇",
  "Silver Award": "🥈",
  "Silver Medal": "🥈",
  "Top 3 Jury's Choice": "🏆",
  "Best Director Award": "🎖",
  "Volunteer Leadership Award": "🌟",
};

function AwardSlideshow() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const go = useCallback((next: number, dir: number) => {
    setDirection(dir);
    setCurrent(next);
  }, []);

  const prev = () => go((current - 1 + AWARD_PHOTOS.length) % AWARD_PHOTOS.length, -1);
  const next = useCallback(() => go((current + 1) % AWARD_PHOTOS.length, 1), [current, go]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 4000);
    return () => clearInterval(t);
  }, [paused, next]);

  return (
    <div
      style={{ position: "relative" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Main slide */}
      <div style={{
        position: "relative", height: "360px", borderRadius: "18px", overflow: "hidden",
        background: "rgba(255,255,255,0.60)",
        border: "1px solid rgba(232,114,154,0.12)",
        boxShadow: "0 8px 32px rgba(232,114,154,0.10), 0 2px 8px rgba(30,100,160,0.06)",
      }}>
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={current}
            custom={direction}
            initial={{ opacity: 0, x: direction * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -60 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={AWARD_PHOTOS[current].src}
              alt={AWARD_PHOTOS[current].alt}
              style={{
                maxWidth: "100%", maxHeight: "100%",
                width: "auto", height: "auto",
                objectFit: "contain",
                display: "block",
                borderRadius: "10px",
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Counter */}
        <div style={{
          position: "absolute", top: "12px", right: "12px", zIndex: 10,
          fontFamily: "var(--font-space-grotesk)", fontSize: "10px", fontWeight: 700,
          letterSpacing: "0.08em", color: "#E8729A",
          background: "rgba(255,240,248,0.85)", backdropFilter: "blur(6px)",
          padding: "4px 10px", borderRadius: "999px",
          border: "1px solid rgba(232,114,154,0.18)",
        }}>
          {current + 1} / {AWARD_PHOTOS.length}
        </div>

        {/* Arrows */}
        {([["←", prev, "left"], ["→", next, "right"]] as const).map(([label, fn, side]) => (
          <button
            key={side}
            onClick={() => fn()}
            style={{
              position: "absolute", top: "50%", [side]: "12px",
              transform: "translateY(-50%)", zIndex: 10,
              width: "34px", height: "34px", borderRadius: "50%",
              border: "1px solid rgba(232,114,154,0.22)", cursor: "pointer",
              background: "rgba(255,240,248,0.85)", backdropFilter: "blur(8px)",
              color: "#E8729A", fontSize: "14px", fontWeight: 700,
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "background 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(232,114,154,0.18)")}
            onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,240,248,0.85)")}
          >
            {label}
          </button>
        ))}

        {/* Progress bar */}
        {!paused && (
          <motion.div
            key={`bar-${current}`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 4, ease: "linear" }}
            style={{
              position: "absolute", bottom: 0, left: 0, right: 0, height: "2.5px",
              background: "linear-gradient(90deg, #E8729A, #C9A6E8, #1E9BC4)",
              transformOrigin: "left", zIndex: 10,
            }}
          />
        )}
      </div>

      {/* Thumbnail strip */}
      <div style={{
        display: "flex", gap: "8px", marginTop: "10px", justifyContent: "center",
      }}>
        {AWARD_PHOTOS.map((photo, i) => (
          <button
            key={i}
            onClick={() => go(i, i > current ? 1 : -1)}
            style={{
              width: "52px", height: "40px", borderRadius: "8px", overflow: "hidden",
              border: i === current ? "2px solid #E8729A" : "2px solid transparent",
              padding: 0, cursor: "pointer",
              opacity: i === current ? 1 : 0.45,
              transition: "all 0.25s ease",
              flexShrink: 0,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photo.src}
              alt={photo.alt}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Weight() {
  return (
    <section
      id="weight"
      className="relative overflow-hidden"
      style={{
        background: "#FFF0F8",
        paddingTop: "clamp(72px, 10vh, 120px)",
        paddingBottom: "clamp(72px, 10vh, 120px)",
        paddingLeft: "24px",
        paddingRight: "24px",
      }}
    >
      {/* Background bloom */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(232,114,154,0.07) 0%, transparent 65%)",
      }} />
      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "radial-gradient(rgba(232,114,154,0.06) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_ONCE}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "clamp(36px, 6vh, 56px)" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
            <div style={{ width: 28, height: 1.5, background: "linear-gradient(90deg, #E8729A, #F2B8D4)" }} />
            <span style={{
              fontFamily: "var(--font-inter)", fontSize: "10px", fontWeight: 600,
              letterSpacing: "0.12em", textTransform: "uppercase", color: "#E8729A",
            }}>Recognition</span>
          </div>
          <h2 style={{
            fontFamily: "var(--font-syne)", fontWeight: 800,
            fontSize: "clamp(32px, 5vw, 56px)",
            letterSpacing: "-0.025em", lineHeight: 1.05,
            color: "#0B2840", margin: 0,
          }}>
            Awards &{" "}
            <GradientText from="#E8729A" via="#C9A6E8" to="#1E9BC4">
              Achievements
            </GradientText>
          </h2>
        </motion.div>

        {/* Two-column: slideshow left, award cards right */}
        <div className="flex flex-col lg:flex-row gap-10 items-start">

          {/* Slideshow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT_ONCE}
            transition={{ duration: 0.6 }}
            style={{ width: "100%", maxWidth: "420px", flexShrink: 0 }}
          >
            <AwardSlideshow />
          </motion.div>

          {/* Award cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            style={{ flex: 1, display: "flex", flexDirection: "column", gap: "10px" }}
          >
            {AWARDS.map((award, i) => (
              <motion.div
                key={i}
                variants={fadeUpVariants}
                whileHover={{ y: -2, boxShadow: "0 8px 28px rgba(232,114,154,0.13)", transition: { duration: 0.2 } }}
                style={{
                  padding: "14px 18px",
                  borderRadius: "14px",
                  background: "rgba(255,255,255,0.82)",
                  border: "1px solid rgba(232,114,154,0.10)",
                  backdropFilter: "blur(8px)",
                  boxShadow: "0 2px 10px rgba(232,114,154,0.06)",
                  display: "flex", gap: "12px", alignItems: "flex-start",
                }}
              >
                {/* Icon + year */}
                <div style={{
                  flexShrink: 0, display: "flex", flexDirection: "column",
                  alignItems: "center", gap: "4px",
                }}>
                  <div style={{
                    width: "38px", height: "38px", borderRadius: "10px",
                    background: `${award.color}15`,
                    border: `1px solid ${award.color}28`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "18px",
                  }}>
                    {MEDAL_ICONS[award.title] ?? "🏅"}
                  </div>
                  <span style={{
                    fontFamily: "var(--font-space-grotesk)", fontSize: "9px", fontWeight: 700,
                    letterSpacing: "0.06em", color: award.color,
                  }}>
                    {award.year}
                  </span>
                </div>

                {/* Content */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{
                    fontFamily: "var(--font-space-grotesk)", fontWeight: 700,
                    fontSize: "12.5px", color: award.color, marginBottom: "2px",
                  }}>
                    {award.title}
                  </p>
                  <p style={{
                    fontFamily: "var(--font-inter)", fontSize: "11.5px", fontWeight: 500,
                    color: "#0B2840", marginBottom: "3px", lineHeight: 1.4,
                  }}>
                    {award.event}
                  </p>
                  <p style={{
                    fontFamily: "var(--font-dm-sans)", fontSize: "11px",
                    color: "#5A8AAA", lineHeight: 1.5,
                  }}>
                    {award.competition}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
