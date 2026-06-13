"use client";
import { motion } from "framer-motion";
import {
  fadeUpVariants,
  slideRightVariants,
  staggerContainer,
  VIEWPORT_ONCE,
} from "@/lib/animations";
import GradientText from "@/components/ui/GradientText";

const STACK = ["Flutter", "TensorFlow", "MobileNetV2", "ARCore", "Firebase", "Python", "Chatbot API"];

const HIGHLIGHTS = [
  {
    icon: "ðŸ“±",
    label: "AR Education for Kids",
    color: "#1E9BC4",
    detail: "Interactive AR experience designed for children â€” makes oral health fun and engaging through gamified tooth scanning.",
  },
  {
    icon: "ðŸ§ ",
    label: "AI Detection",
    color: "#E8729A",
    detail: "MobileNetV2 model classifies plaque, calculus, and cavity with high accuracy on-device.",
  },
  {
    icon: "ðŸ’¬",
    label: "AI Chatbot",
    color: "#7ECDE8",
    detail: "Integrated AI chatbot provides personalised oral health advice and brushing guidance.",
  },
];

const STORY = [
  {
    step: "Challenge",
    icon: "âš¡",
    color: "#1E9BC4",
    text: "Dental conditions like plaque, calculus, and cavities affect millions but go undetected until they worsen â€” especially in children who lack awareness of oral hygiene.",
  },
  {
    step: "Process",
    icon: "âš™ï¸",
    color: "#E8729A",
    text: "Trained a MobileNetV2 model on dental imaging datasets, deployed it on-device via TensorFlow Lite, layered ARCore for live tooth detection overlays, and integrated an AI chatbot for personalised guidance.",
    arch: ["Data Collection", "Model Training", "TFLite Deploy", "AR Overlay", "Chatbot"],
  },
  {
    step: "Result",
    icon: "ðŸ†",
    color: "#7ECDE8",
    text: "A complete AI + AR smart oral health companion â€” engaging, accessible, and educational. Recognised with a Silver Award at iFYP 2026.",
    award: true,
  },
];

export default function Toothymate() {
  return (
    <section
      id="toothymate"
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(150deg, #FFF0F8 0%, #FFF4F0 50%, #EFF8FF 100%)",
        paddingTop: "clamp(72px, 10vh, 120px)",
        paddingBottom: "clamp(72px, 10vh, 120px)",
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "0%", right: "0%",
          width: "55%", height: "100%",
          background:
            "radial-gradient(ellipse 65% 60% at 80% 50%, rgba(232,114,154,0.10) 0%, rgba(126,205,232,0.07) 60%, transparent 85%)",
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
          <div style={{ width: 32, height: 1.5, background: "linear-gradient(90deg, #E8729A, #7ECDE8)" }} />
          <span style={{
            fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 600,
            letterSpacing: "0.12em", textTransform: "uppercase", color: "#C4799A",
          }}>
            Featured Project Â· AI + AR
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
            Toothy
            <GradientText from="#E8729A" via="#1E9BC4" to="#7ECDE8">Mate</GradientText>
          </h2>
          <p style={{
            fontFamily: "var(--font-inter)", fontSize: "clamp(15px, 1.5vw, 18px)",
            color: "#2A6880", lineHeight: 1.65, maxWidth: "520px",
          }}>
            AI-powered smart oral health companion combining augmented reality
            tooth detection with an intelligent chatbot for personalised dental guidance.
          </p>
        </motion.div>

        {/* â”€â”€ Main grid: story left, images right â”€â”€ */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* LEFT: Story + highlights */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className="flex flex-col"
            style={{ gap: "28px" }}
          >
            {/* Highlight pills */}
            <motion.div variants={fadeUpVariants} className="flex flex-col gap-3">
              {HIGHLIGHTS.map((h) => (
                <div
                  key={h.label}
                  className="flex items-start gap-4 p-4 rounded-2xl"
                  style={{
                    background: "rgba(255,255,255,0.80)",
                    border: "1px solid rgba(30,120,180,0.10)",
                    boxShadow: "0 2px 12px rgba(30,120,180,0.05)",
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${h.color}18`, border: `1px solid ${h.color}30` }}
                  >
                    <span style={{ fontSize: "18px" }}>{h.icon}</span>
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: "13px", fontWeight: 700, color: "#0B2840", marginBottom: "3px" }}>
                      {h.label}
                    </p>
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: "12px", color: "#5A9AB0", lineHeight: 1.55 }}>
                      {h.detail}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Challenge â†’ Process â†’ Result */}
            {STORY.map((item) => (
              <motion.div
                key={item.step}
                variants={fadeUpVariants}
                className="pl-5"
                style={{
                  borderLeft: `2px solid ${item.color}`,
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span style={{ fontSize: "15px" }}>{item.icon}</span>
                  <span style={{
                    fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 700,
                    letterSpacing: "0.10em", textTransform: "uppercase", color: item.color,
                  }}>
                    {item.step}
                  </span>
                </div>
                <p style={{
                  fontFamily: "var(--font-inter)", fontSize: "14px",
                  color: "#1A5068", lineHeight: 1.7,
                }}>
                  {item.text}
                </p>

                {item.arch && (
                  <div className="flex items-center gap-2 flex-wrap mt-3">
                    {item.arch.map((s, idx) => (
                      <span key={s} className="flex items-center gap-2">
                        <span style={{
                          fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 500,
                          background: "rgba(255,255,255,0.90)",
                          border: "1px solid rgba(30,120,180,0.14)",
                          borderRadius: "999px", padding: "3px 10px", color: "#1A5068",
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

                {item.award && (
                  <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full mt-3"
                    style={{
                      background: "linear-gradient(135deg, rgba(232,114,154,0.12), rgba(126,205,232,0.12))",
                      border: "1px solid rgba(232,114,154,0.22)",
                    }}
                  >
                    <span style={{ fontFamily: "var(--font-inter)", fontSize: "12px", fontWeight: 700, color: "#0B2840" }}>
                      ðŸ¥ˆ Silver Award Â· iFYP 2026
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
                    borderRadius: "999px", padding: "4px 12px", color: "#2A6880",
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: Two image cards */}
          <motion.div
            variants={slideRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute pointer-events-none" style={{
              inset: "-10%",
              background: "radial-gradient(ellipse 65% 55% at 50% 50%, rgba(232,114,154,0.16) 0%, rgba(126,205,232,0.10) 55%, transparent 80%)",
              filter: "blur(28px)",
            }} />

            {/* Award badge */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={VIEWPORT_ONCE}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -top-4 left-0 z-20 flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                background: "rgba(255,255,255,0.92)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(232,114,154,0.28)",
                boxShadow: "0 4px 20px rgba(232,114,154,0.15)",
              }}
            >
              <span style={{ fontSize: "14px" }}>ðŸ¥ˆ</span>
              <div>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "12px", fontWeight: 700, color: "#0B2840", lineHeight: 1.2 }}>Silver Award</p>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "10px", color: "#5A9AB0" }}>iFYP 2026 Â· UPM</p>
              </div>
            </motion.div>

            {/* Image cards */}
            <div className="flex gap-4 pt-8">

              {/* AR image */}
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
                  src="/ToothymateAR.png"
                  alt="ToothyMate AR View"
                  style={{ width: "100%", height: "auto", display: "block", mixBlendMode: "multiply" }}
                />
                <div className="px-4 py-3 flex items-center gap-2" style={{ borderTop: "1px solid rgba(30,120,180,0.08)" }}>
                  <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#1E9BC4", boxShadow: "0 0 5px #1E9BC4" }} />
                  <div>
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 600, color: "#0B2840" }}>AR Education</p>
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: "10px", color: "#5A9AB0", marginTop: "2px" }}>Interactive for children</p>
                  </div>
                </div>
              </motion.div>

              {/* AI image */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT_ONCE}
                transition={{ duration: 0.8, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="flex-1 rounded-3xl overflow-hidden self-end"
                style={{
                  background: "#FFFFFF",
                  boxShadow: "0 16px 48px rgba(30,100,160,0.12), 0 2px 8px rgba(30,100,160,0.06)",
                  border: "1px solid rgba(30,120,180,0.10)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/ToothymateAi.png"
                  alt="ToothyMate AI & Chatbot"
                  style={{ width: "100%", height: "auto", display: "block", mixBlendMode: "multiply" }}
                />
                <div className="px-4 py-3 flex items-center gap-2" style={{ borderTop: "1px solid rgba(30,120,180,0.08)" }}>
                  <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#E8729A", boxShadow: "0 0 5px #E8729A" }} />
                  <div>
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 600, color: "#0B2840" }}>AI + Chatbot</p>
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: "10px", color: "#5A9AB0", marginTop: "2px" }}>Smart dental guidance</p>
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

