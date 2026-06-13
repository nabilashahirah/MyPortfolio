"use client";
import { motion } from "framer-motion";
import {
  fadeUpVariants,
  slideLeftVariants,
  staggerContainer,
  VIEWPORT_ONCE,
} from "@/lib/animations";
import GradientText from "@/components/ui/GradientText";

const STACK = ["Unity", "ARCore", "ARKit", "C#", "Blender", "Vuforia"];

const STORY = [
  {
    step: "Challenge",
    icon: "âš¡",
    color: "#1E9BC4",
    text: "Cardiac anatomy is complex and abstract â€” medical students and patients struggle to truly understand heart structure from flat 2D textbooks or diagrams alone.",
  },
  {
    step: "Process",
    icon: "âš™ï¸",
    color: "#E8729A",
    text: "Built an end-to-end AR pipeline using Unity and ARCore, integrating high-fidelity 3D cardiac models with real-time marker tracking and interactive touch controls.",
    arch: ["Unity Engine", "ARCore + Vuforia", "3D Cardiac Models", "Mobile App"],
  },
  {
    step: "Result",
    icon: "ðŸ†",
    color: "#7ECDE8",
    text: "A fully functional augmented reality cardiac education app â€” bringing the human heart to life in real space. Recognised with a Silver Medal at I-PICTL 2025.",
    award: true,
  },
];

export default function Intelligence() {
  return (
    <section
      id="intelligence"
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(150deg, #EFF8FF 0%, #FFF4F0 40%, #FFF0F8 100%)",
        paddingTop: "clamp(72px, 10vh, 120px)",
        paddingBottom: "clamp(72px, 10vh, 120px)",
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "0%", left: "0%",
          width: "60%", height: "100%",
          background:
            "radial-gradient(ellipse 70% 60% at 25% 50%, rgba(126,205,232,0.10) 0%, rgba(232,114,154,0.07) 60%, transparent 85%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_ONCE}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-14"
        >
          <div style={{ width: 32, height: 1.5, background: "linear-gradient(90deg, #7ECDE8, #E8729A)" }} />
          <span style={{
            fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 600,
            letterSpacing: "0.12em", textTransform: "uppercase", color: "#C4799A",
          }}>
            Featured Project Â· AR Development
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="mb-14"
        >
          <h2 style={{
            fontFamily: "var(--font-syne)", fontWeight: 800,
            fontSize: "clamp(44px, 7vw, 80px)",
            lineHeight: 0.95, letterSpacing: "-0.03em", color: "#0B2840",
            marginBottom: "16px",
          }}>
            Cardio
            <GradientText from="#1E9BC4" via="#E8729A" to="#7ECDE8">Verse</GradientText>
          </h2>
          <p style={{
            fontFamily: "var(--font-inter)", fontSize: "clamp(15px, 1.5vw, 18px)",
            color: "#2A6880", lineHeight: 1.65, maxWidth: "520px",
          }}>
            An augmented reality platform that brings cardiac anatomy to life â€”
            real-time 3D heart visualization for immersive medical education.
          </p>
        </motion.div>

        {/* â”€â”€ Main grid: images left, story right â”€â”€ */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* LEFT: Two image cards */}
          <motion.div
            variants={slideLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className="relative"
          >
            {/* Glow behind images */}
            <div className="absolute pointer-events-none" style={{
              inset: "-10%",
              background: "radial-gradient(ellipse 65% 55% at 50% 50%, rgba(126,205,232,0.18) 0%, rgba(232,114,154,0.12) 55%, transparent 80%)",
              filter: "blur(28px)",
            }} />

            {/* Award badge */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={VIEWPORT_ONCE}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -top-4 right-0 z-20 flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                background: "rgba(255,255,255,0.92)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(126,205,232,0.30)",
                boxShadow: "0 4px 20px rgba(126,205,232,0.18)",
              }}
            >
              <span style={{ fontSize: "14px" }}>ðŸ¥ˆ</span>
              <div>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "12px", fontWeight: 700, color: "#0B2840", lineHeight: 1.2 }}>Silver Medal</p>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "10px", color: "#5A9AB0" }}>I-PICTL 2025</p>
              </div>
            </motion.div>

            {/* Image cards side by side */}
            <div className="flex gap-4 pt-8">

              {/* PNG card â€” app start screen, taller */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT_ONCE}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex-1 rounded-3xl overflow-hidden"
                style={{
                  background: "#FFFFFF",
                  boxShadow: "0 16px 48px rgba(30,100,160,0.12), 0 2px 8px rgba(30,100,160,0.06)",
                  border: "1px solid rgba(30,120,180,0.10)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/Cardioverse.png"
                  alt="CardioVerse â€” App Start Screen"
                  style={{ width: "100%", height: "auto", display: "block", mixBlendMode: "multiply" }}
                />
                <div className="px-4 py-3" style={{ borderTop: "1px solid rgba(30,120,180,0.08)" }}>
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 600, color: "#0B2840", letterSpacing: "0.04em" }}>Start Screen</p>
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: "10px", color: "#5A9AB0", marginTop: "2px" }}>App entry point</p>
                </div>
              </motion.div>

              {/* GIF card â€” AR view, slightly shorter via padding-top offset */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT_ONCE}
                transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="flex-1 rounded-3xl overflow-hidden self-end"
                style={{
                  background: "#FFFFFF",
                  boxShadow: "0 16px 48px rgba(30,100,160,0.12), 0 2px 8px rgba(30,100,160,0.06)",
                  border: "1px solid rgba(30,120,180,0.10)",
                  marginBottom: "0px",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/Cardioverse.gif"
                  alt="CardioVerse â€” AR View"
                  style={{ width: "100%", height: "auto", display: "block", mixBlendMode: "multiply" }}
                />
                <div
                  className="px-4 py-3 flex items-center gap-2"
                  style={{ borderTop: "1px solid rgba(30,120,180,0.08)" }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: "#E8729A", boxShadow: "0 0 5px #E8729A" }}
                  />
                  <div>
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 600, color: "#0B2840", letterSpacing: "0.04em" }}>AR View</p>
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: "10px", color: "#5A9AB0", marginTop: "2px" }}>Live cardiac overlay</p>
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>

          {/* RIGHT: Challenge â†’ Process â†’ Result */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className="flex flex-col"
            style={{ gap: "28px" }}
          >
            {STORY.map((item, i) => (
              <motion.div
                key={item.step}
                variants={fadeUpVariants}
                className="relative pl-5"
                style={{
                  borderLeft: `2px solid`,
                  borderImage: i === 0
                    ? "linear-gradient(180deg, #7ECDE8, #E8729A) 1"
                    : i === 1
                    ? "linear-gradient(180deg, #E8729A, #7ECDE8) 1"
                    : "linear-gradient(180deg, #7ECDE8, #7ECDE8) 1",
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span style={{ fontSize: "16px" }}>{item.icon}</span>
                  <span style={{
                    fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 700,
                    letterSpacing: "0.10em", textTransform: "uppercase", color: item.color,
                  }}>
                    {item.step}
                  </span>
                </div>

                <p style={{
                  fontFamily: "var(--font-inter)", fontSize: "14px",
                  color: "#1A5068", lineHeight: 1.7, marginBottom: item.arch ? "12px" : "0",
                }}>
                  {item.text}
                </p>

                {/* Process architecture steps */}
                {item.arch && (
                  <div className="flex items-center gap-2 flex-wrap mt-3">
                    {item.arch.map((s, idx) => (
                      <span key={s} className="flex items-center gap-2">
                        <span style={{
                          fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 500,
                          background: "rgba(255,255,255,0.85)",
                          border: "1px solid rgba(30,120,180,0.14)",
                          borderRadius: "999px", padding: "3px 10px",
                          color: "#1A5068",
                        }}>
                          {s}
                        </span>
                        {idx < item.arch!.length - 1 && (
                          <span style={{ color: "#C4799A", fontSize: "10px" }}>â†’</span>
                        )}
                      </span>
                    ))}
                  </div>
                )}

                {/* Result award */}
                {item.award && (
                  <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full mt-3"
                    style={{
                      background: "linear-gradient(135deg, rgba(126,205,232,0.15), rgba(232,114,154,0.15))",
                      border: "1px solid rgba(126,205,232,0.25)",
                    }}
                  >
                    <span style={{ fontFamily: "var(--font-inter)", fontSize: "12px", fontWeight: 700, color: "#0B2840" }}>
                      ðŸ¥ˆ Silver Medal Â· I-PICTL 2025
                    </span>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Stack */}
            <motion.div variants={fadeUpVariants}>
              <p style={{
                fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 600,
                letterSpacing: "0.08em", textTransform: "uppercase", color: "#5A9AB0",
                marginBottom: "10px",
              }}>
                Built with
              </p>
              <div className="flex flex-wrap gap-2">
                {STACK.map((tag) => (
                  <span key={tag} style={{
                    fontFamily: "var(--font-inter)", fontSize: "12px", fontWeight: 500,
                    background: "rgba(255,255,255,0.85)",
                    border: "1px solid rgba(30,120,180,0.14)",
                    borderRadius: "999px", padding: "4px 12px",
                    color: "#2A6880",
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

