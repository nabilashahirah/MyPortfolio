"use client";
import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainer, VIEWPORT_ONCE } from "@/lib/animations";

const CONTACTS = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" /><polyline points="2,4 12,13 22,4" />
      </svg>
    ),
    label: "Email",
    value: "nnabila.salim@gmail.com",
    href: "mailto:nnabila.salim@gmail.com",
    color: "#E8729A",
    glow: "rgba(232,114,154,0.18)",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: "LinkedIn",
    value: "nabila-shahirah",
    href: "https://linkedin.com/in/nabila-shahirah-7a76b4243",
    color: "#1E9BC4",
    glow: "rgba(30,155,196,0.18)",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    label: "GitHub",
    value: "nabilashahirah",
    href: "https://github.com/nabilashahirah",
    color: "#9B6FD4",
    glow: "rgba(155,111,212,0.18)",
  },
];

export default function Connect() {
  return (
    <section
      id="connect"
      className="relative overflow-hidden"
      style={{
        background: "#08213A",
        paddingTop: "clamp(80px, 12vh, 140px)",
        paddingBottom: "clamp(48px, 8vh, 80px)",
        paddingLeft: "24px",
        paddingRight: "24px",
      }}
    >
      {/* Aurora blobs */}
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.18, 0.28, 0.18] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute pointer-events-none"
        style={{
          top: "-10%", left: "10%", width: "500px", height: "400px", borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(30,155,196,0.22) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.15, 0.24, 0.15] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute pointer-events-none"
        style={{
          bottom: "10%", right: "5%", width: "420px", height: "350px", borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(232,114,154,0.20) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.10, 0.18, 0.10] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute pointer-events-none"
        style={{
          top: "30%", right: "25%", width: "300px", height: "280px", borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(155,111,212,0.16) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="text-center"
        >

          {/* Availability chip */}
          <motion.div
            variants={fadeUpVariants}
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "6px 16px", borderRadius: "999px", marginBottom: "32px",
              background: "rgba(74,222,128,0.10)",
              border: "1px solid rgba(74,222,128,0.22)",
            }}
          >
            <motion.span
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              style={{
                width: "7px", height: "7px", borderRadius: "50%",
                background: "#4ADE80", flexShrink: 0, display: "block",
              }}
            />
            <span style={{
              fontFamily: "var(--font-space-grotesk)", fontSize: "12px", fontWeight: 500,
              color: "rgba(255,255,255,0.75)",
            }}>
              Open to full-time roles · Available from <span style={{ color: "#4ADE80", fontWeight: 700 }}>September 2026</span>
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={fadeUpVariants}
            style={{
              fontFamily: "var(--font-syne)", fontWeight: 800,
              fontSize: "clamp(40px, 7.5vw, 88px)",
              letterSpacing: "-0.03em", lineHeight: 0.95,
              marginBottom: "20px",
            }}
          >
            <span style={{ color: "rgba(255,255,255,0.95)" }}>
              {"Let's build"}
              <br />{"something"}
            </span>
            <br />
            <span style={{
              background: "linear-gradient(135deg, #E8729A 0%, #9B6FD4 45%, #1E9BC4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              worth remembering.
            </span>
          </motion.h2>

          {/* Subline */}
          <motion.p
            variants={fadeUpVariants}
            style={{
              fontFamily: "var(--font-dm-sans)", fontSize: "clamp(14px, 1.2vw, 16px)",
              color: "rgba(255,255,255,0.45)", lineHeight: 1.65,
              maxWidth: "440px", margin: "0 auto 52px",
            }}
          >
            Whether it&apos;s a product idea, a collaboration, or just a conversation — reach out, I&apos;d love to connect.
          </motion.p>

          {/* Contact cards */}
          <motion.div
            variants={staggerContainer}
            style={{
              display: "flex", flexWrap: "wrap", gap: "12px",
              justifyContent: "center", marginBottom: "64px",
            }}
          >
            {CONTACTS.map((c) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                variants={fadeUpVariants}
                whileHover={{ y: -4, boxShadow: `0 12px 36px ${c.glow}`, transition: { duration: 0.2 } }}
                style={{
                  display: "flex", alignItems: "center", gap: "14px",
                  padding: "16px 24px", borderRadius: "16px", textDecoration: "none",
                  background: "rgba(255,255,255,0.05)",
                  border: `1px solid ${c.color}28`,
                  backdropFilter: "blur(10px)",
                  minWidth: "220px",
                }}
              >
                <div style={{
                  width: "40px", height: "40px", borderRadius: "10px", flexShrink: 0,
                  background: `${c.color}18`, border: `1px solid ${c.color}30`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--font-space-grotesk)", fontSize: "14px",
                  fontWeight: 700, color: c.color,
                }}>
                  {c.icon}
                </div>
                <div style={{ textAlign: "left" }}>
                  <p style={{
                    fontFamily: "var(--font-space-grotesk)", fontSize: "10px", fontWeight: 700,
                    letterSpacing: "0.08em", textTransform: "uppercase",
                    color: c.color, marginBottom: "2px",
                  }}>{c.label}</p>
                  <p style={{
                    fontFamily: "var(--font-inter)", fontSize: "12.5px", fontWeight: 500,
                    color: "rgba(255,255,255,0.70)",
                  }}>{c.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VIEWPORT_ONCE}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: "28px",
            display: "flex", flexWrap: "wrap",
            alignItems: "center", justifyContent: "space-between", gap: "12px",
          }}
        >
          <span style={{
            fontFamily: "var(--font-syne)", fontWeight: 800,
            fontSize: "18px", letterSpacing: "-0.02em",
            background: "linear-gradient(135deg, #E8729A, #1E9BC4)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>NS</span>

          <p style={{
            fontFamily: "var(--font-dm-sans)", fontSize: "12px",
            color: "rgba(255,255,255,0.28)", textAlign: "center",
          }}>
            Nur Nabila Shahirah · Computer Science · UPM 2026
          </p>

          <p style={{
            fontFamily: "var(--font-space-grotesk)", fontSize: "11px",
            color: "rgba(255,255,255,0.22)",
          }}>
            Built with Next.js
          </p>
        </motion.div>
      </div>
    </section>
  );
}
