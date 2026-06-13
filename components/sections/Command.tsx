"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  fadeUpVariants,
  staggerContainer,
  VIEWPORT_ONCE,
} from "@/lib/animations";
import { LEADERSHIP_TIMELINE } from "@/lib/constants";
import GradientText from "@/components/ui/GradientText";

const GALLERY_IMAGES = [
  "/Leadership/leadership1.jpg",
  "/Leadership/leadership2.jpg",
  "/Leadership/leadership3.jpg",
  "/Leadership/leadership4.jpg",
  "/Leadership/leadership5.jpg",
  "/Leadership/leadership6.jpg",
  "/Leadership/leadership7.jpg",
  "/Leadership/leadership8.jpg",
  "/Leadership/leadership9.jpg",
  "/Leadership/leadership10.jpg",
];

function LeadershipSlideshow() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const go = useCallback((next: number, dir: number) => {
    setDirection(dir);
    setCurrent(next);
  }, []);

  const prev = () => go((current - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length, -1);
  const next = useCallback(() => go((current + 1) % GALLERY_IMAGES.length, 1), [current, go]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 3800);
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
        position: "relative", height: "340px", borderRadius: "18px", overflow: "hidden",
        background: "rgba(255,255,255,0.72)",
        border: "1px solid rgba(30,155,196,0.12)",
        boxShadow: "0 8px 32px rgba(30,100,160,0.08), 0 2px 8px rgba(30,100,160,0.04)",
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
              src={GALLERY_IMAGES[current]}
              alt={`Leadership moment ${current + 1}`}
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
          letterSpacing: "0.08em", color: "#1E9BC4",
          background: "rgba(240,248,255,0.88)", backdropFilter: "blur(6px)",
          padding: "4px 10px", borderRadius: "999px",
          border: "1px solid rgba(30,155,196,0.20)",
        }}>
          {current + 1} / {GALLERY_IMAGES.length}
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
              border: "1px solid rgba(30,155,196,0.22)", cursor: "pointer",
              background: "rgba(240,248,255,0.88)", backdropFilter: "blur(8px)",
              color: "#1E9BC4", fontSize: "14px", fontWeight: 700,
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "background 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(30,155,196,0.15)")}
            onMouseLeave={e => (e.currentTarget.style.background = "rgba(240,248,255,0.88)")}
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
            transition={{ duration: 3.8, ease: "linear" }}
            style={{
              position: "absolute", bottom: 0, left: 0, right: 0, height: "2.5px",
              background: "linear-gradient(90deg, #1E9BC4, #9B6FD4, #E8729A)",
              transformOrigin: "left", zIndex: 10,
            }}
          />
        )}
      </div>

      {/* Thumbnail strip */}
      <div style={{
        display: "flex", gap: "6px", marginTop: "10px", justifyContent: "center", flexWrap: "wrap",
      }}>
        {GALLERY_IMAGES.map((src, i) => (
          <button
            key={i}
            onClick={() => go(i, i > current ? 1 : -1)}
            style={{
              width: "44px", height: "36px", borderRadius: "7px", overflow: "hidden",
              border: i === current ? "2px solid #1E9BC4" : "2px solid transparent",
              padding: 0, cursor: "pointer",
              opacity: i === current ? 1 : 0.42,
              transition: "all 0.25s ease",
              flexShrink: 0,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`Thumb ${i + 1}`}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Command() {
  return (
    <section
      id="command"
      className="relative overflow-hidden"
      style={{
        background: "#F0F8FF",
        paddingTop: "clamp(72px, 10vh, 120px)",
        paddingBottom: "clamp(72px, 10vh, 120px)",
        paddingLeft: "24px",
        paddingRight: "24px",
      }}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 70% 55% at 20% 50%, rgba(30,155,196,0.07) 0%, transparent 65%)",
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "radial-gradient(rgba(30,120,180,0.04) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* ── Header row ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_ONCE}
            transition={{ duration: 0.6 }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
              <div style={{ width: 28, height: 1.5, background: "linear-gradient(90deg, #1E9BC4, #9B6FD4)" }} />
              <span style={{
                fontFamily: "var(--font-inter)", fontSize: "10px", fontWeight: 600,
                letterSpacing: "0.12em", textTransform: "uppercase", color: "#1E9BC4",
              }}>Leadership</span>
            </div>
            <h2 style={{
              fontFamily: "var(--font-syne)", fontWeight: 800,
              fontSize: "clamp(32px, 5vw, 56px)",
              letterSpacing: "-0.025em", lineHeight: 1.05,
              color: "#0B2840", margin: 0,
            }}>
              Leadership{" "}
              <GradientText from="#1E9BC4" via="#9B6FD4" to="#E8729A">
                & Impact
              </GradientText>
            </h2>
            <p style={{
              fontFamily: "var(--font-dm-sans)", fontSize: "clamp(13px, 1.1vw, 15px)",
              color: "#1A5068", lineHeight: 1.7, maxWidth: "420px", marginTop: "10px",
            }}>
              From college rep to club president to international delegate — ownership, service, and scale.
            </p>
          </motion.div>

        </div>

        {/* ── Split body ── */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* LEFT — Slideshow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT_ONCE}
            transition={{ duration: 0.6 }}
            style={{ width: "100%", maxWidth: "400px", flexShrink: 0 }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
              <div style={{ width: 16, height: 1.5, background: "linear-gradient(90deg, #1E9BC4, #9B6FD4)" }} />
              <span style={{
                fontFamily: "var(--font-space-grotesk)", fontSize: "10px", fontWeight: 700,
                letterSpacing: "0.10em", textTransform: "uppercase", color: "#9BBCCC",
              }}>In the Field</span>
            </div>
            <LeadershipSlideshow />
          </motion.div>

          {/* RIGHT — Timeline */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            style={{ flex: 1, position: "relative" }}
          >
            {/* Vertical line */}
            <div style={{
              position: "absolute", left: "7px", top: "6px", bottom: "6px", width: "1px",
              background: "linear-gradient(to bottom, transparent, rgba(30,155,196,0.25) 8%, rgba(155,111,212,0.20) 50%, rgba(232,114,154,0.18) 85%, transparent)",
            }} />

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {LEADERSHIP_TIMELINE.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUpVariants}
                  style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}
                >
                  {/* Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.35, type: "spring", stiffness: 220 }}
                    style={{
                      marginTop: "14px", flexShrink: 0,
                      width: item.isHighlight ? 14 : 8,
                      height: item.isHighlight ? 14 : 8,
                      borderRadius: "50%",
                      background: item.isHighlight
                        ? "linear-gradient(135deg, #1E9BC4, #9B6FD4)"
                        : "rgba(30,120,180,0.25)",
                      boxShadow: item.isHighlight ? "0 0 10px rgba(30,155,196,0.5)" : "none",
                      zIndex: 1, position: "relative",
                    }}
                  />

                  {/* Card */}
                  <motion.div
                    style={{
                      flex: 1,
                      padding: "12px 16px", borderRadius: "14px",
                      background: item.isHighlight
                        ? "linear-gradient(135deg, rgba(30,155,196,0.08) 0%, rgba(155,111,212,0.05) 100%)"
                        : "rgba(255,255,255,0.75)",
                      border: item.isHighlight
                        ? "1px solid rgba(30,155,196,0.22)"
                        : "1px solid rgba(30,120,180,0.08)",
                      backdropFilter: "blur(8px)",
                      boxShadow: item.isHighlight
                        ? "0 4px 18px rgba(30,100,160,0.08)"
                        : "0 2px 8px rgba(30,100,160,0.04)",
                    }}
                    whileHover={{ y: -2, boxShadow: "0 6px 22px rgba(30,100,160,0.11)", transition: { duration: 0.2 } }}
                  >
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "8px" }}>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        {/* Year + role row */}
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "2px" }}>
                          <span style={{
                            fontFamily: "var(--font-space-grotesk)", fontSize: "9px", fontWeight: 700,
                            letterSpacing: "0.07em", color: item.isHighlight ? "#1E9BC4" : "#9BBCCC",
                            background: item.isHighlight ? "rgba(30,155,196,0.10)" : "rgba(30,120,180,0.07)",
                            padding: "2px 7px", borderRadius: "4px",
                          }}>{item.year}</span>
                        </div>
                        <h3 style={{
                          fontFamily: "var(--font-space-grotesk)", fontWeight: 700,
                          fontSize: "13px", color: "#0B2840", marginBottom: "1px",
                        }}>{item.role}</h3>
                        <p style={{
                          fontFamily: "var(--font-inter)", fontSize: "11.5px", fontWeight: 500,
                          color: item.isHighlight ? "#1E9BC4" : "#5A9AB0", marginBottom: "5px",
                        }}>{item.org}</p>
                        <p style={{
                          fontFamily: "var(--font-dm-sans)", fontSize: "12px",
                          color: "#1A5068", lineHeight: 1.58,
                        }}>{item.detail}</p>
                      </div>

                      {item.isHighlight && (
                        <span style={{
                          flexShrink: 0, fontSize: "8px", fontWeight: 700,
                          padding: "3px 8px", borderRadius: "5px",
                          letterSpacing: "0.10em", textTransform: "uppercase",
                          fontFamily: "var(--font-space-grotesk)",
                          background: "rgba(30,155,196,0.12)",
                          border: "1px solid rgba(30,155,196,0.28)",
                          color: "#1E9BC4",
                        }}>President</span>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
