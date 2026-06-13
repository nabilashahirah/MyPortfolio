"use client";
import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainer, VIEWPORT_ONCE } from "@/lib/animations";
import { SKILL_CLUSTERS } from "@/lib/constants";
import GradientText from "@/components/ui/GradientText";

const LANGUAGES = ["Python", "Dart", "JavaScript", "TypeScript", "C#", "Java", "SQL", "HTML / CSS"];

export default function Fingerprint() {
  return (
    <section
      id="fingerprint"
      className="relative overflow-hidden"
      style={{
        background: "#F7F3FF",
        paddingTop: "clamp(72px, 10vh, 120px)",
        paddingBottom: "clamp(72px, 10vh, 120px)",
        paddingLeft: "24px",
        paddingRight: "24px",
      }}
    >
      {/* Subtle background bloom */}
      <div className="absolute pointer-events-none" style={{
        top: 0, right: 0, width: "50%", height: "100%",
        background: "radial-gradient(ellipse 60% 50% at 85% 30%, rgba(155,111,212,0.05) 0%, rgba(232,114,154,0.03) 60%, transparent 85%)",
      }} />
      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "radial-gradient(rgba(30,120,180,0.04) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_ONCE}
            transition={{ duration: 0.6 }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
              <div style={{ width: 28, height: 1.5, background: "linear-gradient(90deg, #9B6FD4, #E8729A)" }} />
              <span style={{
                fontFamily: "var(--font-inter)", fontSize: "10px", fontWeight: 600,
                letterSpacing: "0.12em", textTransform: "uppercase", color: "#9B6FD4",
              }}>Technical Stack</span>
            </div>
            <h2 style={{
              fontFamily: "var(--font-syne)", fontWeight: 800,
              fontSize: "clamp(32px, 5vw, 56px)",
              letterSpacing: "-0.025em", lineHeight: 1.05,
              color: "#0B2840", margin: 0,
            }}>
              Skills &{" "}
              <GradientText from="#9B6FD4" via="#E8729A" to="#1E9BC4">
                Stack
              </GradientText>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_ONCE}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: "var(--font-dm-sans)", fontSize: "clamp(13px, 1.1vw, 15px)",
              color: "#1A5068", lineHeight: 1.7, maxWidth: "380px",
            }}
          >
            Each cluster represents tools used in a real project — not a checkbox, a track record.
          </motion.p>
        </div>

        {/* Skill cluster cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="grid md:grid-cols-2 gap-5 mb-6"
        >
          {SKILL_CLUSTERS.map((cluster, i) => (
            <motion.div
              key={i}
              variants={fadeUpVariants}
              style={{
                borderRadius: "20px",
                background: "#FFFFFF",
                border: "1px solid rgba(30,120,180,0.08)",
                overflow: "hidden",
                boxShadow: "0 2px 16px rgba(30,100,160,0.05)",
              }}
              whileHover={{ y: -3, boxShadow: "0 8px 32px rgba(30,100,160,0.10)", transition: { duration: 0.22 } }}
            >
              {/* Accent bar */}
              <div style={{
                height: "3px",
                background: `linear-gradient(90deg, ${cluster.color}, ${cluster.color}44)`,
              }} />

              <div style={{ padding: "22px 24px 24px" }}>
                {/* Cluster label row */}
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "14px" }}>
                  <div>
                    <h3 style={{
                      fontFamily: "var(--font-space-grotesk)", fontWeight: 700,
                      fontSize: "15px", color: "#0B2840", marginBottom: "4px",
                    }}>
                      {cluster.label}
                    </h3>
                  </div>
                  <div style={{
                    width: "36px", height: "36px", borderRadius: "10px", flexShrink: 0,
                    background: `${cluster.color}14`,
                    border: `1px solid ${cluster.color}28`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <div style={{
                      width: "12px", height: "12px", borderRadius: "50%",
                      background: cluster.color,
                    }} />
                  </div>
                </div>

                {/* Skill pills */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
                  {cluster.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{
                        background: `${cluster.color}14`,
                        borderColor: `${cluster.color}50`,
                        color: cluster.color,
                        transition: { duration: 0.15 },
                      }}
                      style={{
                        fontFamily: "var(--font-inter)", fontSize: "11.5px", fontWeight: 500,
                        padding: "5px 13px", borderRadius: "999px", cursor: "default",
                        background: "rgba(30,120,180,0.05)",
                        border: "1px solid rgba(30,120,180,0.10)",
                        color: "#2A6880",
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Languages band */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          style={{
            borderRadius: "16px",
            background: "linear-gradient(135deg, rgba(30,155,196,0.04) 0%, rgba(155,111,212,0.04) 50%, rgba(232,114,154,0.03) 100%)",
            border: "1px solid rgba(30,120,180,0.09)",
            padding: "18px 24px",
            display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0",
          }}
        >
          <span style={{
            fontFamily: "var(--font-space-grotesk)", fontSize: "10px", fontWeight: 700,
            letterSpacing: "0.10em", textTransform: "uppercase",
            color: "#9B6FD4", marginRight: "20px", flexShrink: 0,
          }}>
            Languages
          </span>
          {LANGUAGES.map((lang, i) => (
            <span key={lang} style={{ display: "flex", alignItems: "center" }}>
              <span style={{
                fontFamily: "var(--font-space-grotesk)", fontSize: "13px", fontWeight: 500,
                color: "#1A5068",
              }}>
                {lang}
              </span>
              {i < LANGUAGES.length - 1 && (
                <span style={{ margin: "0 12px", color: "rgba(30,120,180,0.2)", fontSize: "12px" }}>·</span>
              )}
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
