"use client";
import { motion } from "framer-motion";
import {
  fadeUpVariants,
  slideRightVariants,
  staggerContainer,
  VIEWPORT_ONCE,
} from "@/lib/animations";
import GradientText from "@/components/ui/GradientText";

const STACK = ["React", "Node.js", "Express", "MongoDB", "Python", "OpenAI API", "Tailwind CSS"];

const HIGHLIGHTS = [
  {
    icon: "ðŸ ",
    label: "Course Discovery",
    color: "#1E9BC4",
    detail: "Browse and explore e-learning courses with detailed information and community ratings.",
  },
  {
    icon: "â­",
    label: "Peer Reviews",
    color: "#E8729A",
    detail: "Community-driven course reviews and ratings to help learners make informed decisions.",
  },
  {
    icon: "ðŸ¤–",
    label: "AI Content Check",
    color: "#7ECDE8",
    detail: "AI validates review content for quality, relevance, and appropriateness before publishing.",
  },
];

const STORY = [
  {
    step: "Challenge",
    icon: "âš¡",
    color: "#1E9BC4",
    text: "E-learning platforms lack transparent, reliable peer reviews. Learners struggle to assess course quality, while platforms face spam and low-quality review submissions.",
  },
  {
    step: "Process",
    icon: "âš™ï¸",
    color: "#E8729A",
    text: "Built a full-stack course review platform with a structured submission flow. Integrated an AI layer that analyses review content for quality, relevance, and appropriateness before it goes live.",
    arch: ["Course Listing", "Review Submission", "AI Content Check", "Publish / Reject"],
  },
  {
    step: "Result",
    icon: "ðŸ†",
    color: "#7ECDE8",
    text: "A complete course review ecosystem â€” clean discovery, structured peer feedback, and AI-powered content integrity that keeps the platform trustworthy.",
  },
];

const SCREENSHOTS = [
  { src: "/ELrate.png",        alt: "ELrate Home Page",       label: "Home",           sub: "Course discovery",        dot: "#1E9BC4" },
  { src: "/ELrate%20(1).png",  alt: "ELrate Course Reviews",  label: "Course Reviews", sub: "Peer ratings & feedback", dot: "#E8729A" },
  { src: "/ELrate%20(2).png",  alt: "ELrate Add Review + AI", label: "Add Review",     sub: "AI content validation",   dot: "#7ECDE8" },
];

export default function Elrate() {
  return (
    <section
      id="elrate"
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(150deg, #EFF8FF 0%, #FFF8F0 40%, #FFF0F8 100%)",
        paddingTop: "clamp(72px, 10vh, 120px)",
        paddingBottom: "clamp(72px, 10vh, 120px)",
      }}
    >
      {/* Ambient glow */}
      <div className="absolute pointer-events-none" style={{
        top: "0%", right: "0%", width: "55%", height: "100%",
        background: "radial-gradient(ellipse 65% 60% at 85% 45%, rgba(126,205,232,0.10) 0%, rgba(126,205,232,0.08) 60%, transparent 85%)",
      }} />

      <div className="max-w-7xl mx-auto px-6">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_ONCE}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-14"
        >
          <div style={{ width: 32, height: 1.5, background: "linear-gradient(90deg, #7ECDE8, #7ECDE8)" }} />
          <span style={{
            fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 600,
            letterSpacing: "0.12em", textTransform: "uppercase", color: "#C4799A",
          }}>
            Featured Project Â· Full-Stack + AI
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
            lineHeight: 0.95, letterSpacing: "-0.03em", color: "#0B2840", marginBottom: "16px",
          }}>
            EL
            <GradientText from="#1E9BC4" via="#E8729A" to="#7ECDE8">rate</GradientText>
          </h2>
          <p style={{
            fontFamily: "var(--font-inter)", fontSize: "clamp(15px, 1.5vw, 18px)",
            color: "#2A6880", lineHeight: 1.65, maxWidth: "520px",
          }}>
            An e-learning course review platform where community peer reviews
            meet AI content validation â€” keeping feedback honest, relevant, and trustworthy.
          </p>
        </motion.div>

        {/* â”€â”€ Main grid: story left, screenshots right â”€â”€ */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* LEFT: Story */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className="flex flex-col"
            style={{ gap: "28px" }}
          >
            {/* Feature highlights */}
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
                style={{ borderLeft: `2px solid ${item.color}` }}
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
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "14px", color: "#1A5068", lineHeight: 1.7 }}>
                  {item.text}
                </p>
                {item.arch && (
                  <div className="flex items-center gap-2 flex-wrap mt-3">
                    {item.arch.map((s, idx) => (
                      <span key={s} className="flex items-center gap-2">
                        <span style={{
                          fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 500,
                          background: "rgba(255,255,255,0.90)", border: "1px solid rgba(30,120,180,0.14)",
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
              </motion.div>
            ))}

            {/* Stack */}
            <motion.div variants={fadeUpVariants}>
              <p style={{
                fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 600,
                letterSpacing: "0.08em", textTransform: "uppercase", color: "#5A9AB0", marginBottom: "10px",
              }}>
                Built with
              </p>
              <div className="flex flex-wrap gap-2">
                {STACK.map((tag) => (
                  <span key={tag} style={{
                    fontFamily: "var(--font-inter)", fontSize: "12px", fontWeight: 500,
                    background: "rgba(255,255,255,0.85)", border: "1px solid rgba(30,120,180,0.14)",
                    borderRadius: "999px", padding: "4px 12px", color: "#2A6880",
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: Screenshots */}
          <motion.div
            variants={slideRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className="relative flex flex-col gap-4"
          >
            {/* Glow */}
            <div className="absolute pointer-events-none" style={{
              inset: "-10%",
              background: "radial-gradient(ellipse 65% 55% at 50% 40%, rgba(126,205,232,0.14) 0%, rgba(126,205,232,0.10) 55%, transparent 80%)",
              filter: "blur(28px)",
            }} />

            {/* Top: Home page â€” full width */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_ONCE}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl overflow-hidden"
              style={{
                background: "#FFFFFF",
                boxShadow: "0 16px 48px rgba(30,100,160,0.11), 0 2px 8px rgba(30,100,160,0.06)",
                border: "1px solid rgba(30,120,180,0.10)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={SCREENSHOTS[0].src}
                alt={SCREENSHOTS[0].alt}
                style={{ width: "100%", height: "auto", display: "block", mixBlendMode: "multiply" }}
              />
              <div className="px-4 py-3 flex items-center gap-2" style={{ borderTop: "1px solid rgba(30,120,180,0.08)" }}>
                <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: SCREENSHOTS[0].dot, boxShadow: `0 0 5px ${SCREENSHOTS[0].dot}` }} />
                <div>
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 600, color: "#0B2840" }}>{SCREENSHOTS[0].label}</p>
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: "10px", color: "#5A9AB0", marginTop: "2px" }}>{SCREENSHOTS[0].sub}</p>
                </div>
              </div>
            </motion.div>

            {/* Bottom row: Course Review + Add Review */}
            <div className="grid grid-cols-2 gap-4">
              {SCREENSHOTS.slice(1).map((shot, idx) => (
                <motion.div
                  key={shot.src}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT_ONCE}
                  transition={{ duration: 0.75, delay: 0.2 + idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-3xl overflow-hidden"
                  style={{
                    background: "#FFFFFF",
                    boxShadow: "0 12px 36px rgba(30,100,160,0.10), 0 2px 8px rgba(30,100,160,0.05)",
                    border: "1px solid rgba(30,120,180,0.10)",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={shot.src}
                    alt={shot.alt}
                    style={{ width: "100%", height: "auto", display: "block", mixBlendMode: "multiply" }}
                  />
                  <div className="px-3 py-2.5 flex items-center gap-2" style={{ borderTop: "1px solid rgba(30,120,180,0.08)" }}>
                    <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: shot.dot, boxShadow: `0 0 5px ${shot.dot}` }} />
                    <div>
                      <p style={{ fontFamily: "var(--font-inter)", fontSize: "10px", fontWeight: 600, color: "#0B2840" }}>{shot.label}</p>
                      <p style={{ fontFamily: "var(--font-inter)", fontSize: "9px", color: "#5A9AB0", marginTop: "1px" }}>{shot.sub}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

