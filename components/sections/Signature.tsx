"use client";
import { motion } from "framer-motion";
import { STATS } from "@/lib/constants";
import {
  fadeUpVariants,
  staggerContainer,
  VIEWPORT_ONCE,
} from "@/lib/animations";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import GradientText from "@/components/ui/GradientText";

export default function Signature() {
  return (
    <section
      id="signature"
      className="relative py-28 md:py-36 px-6 overflow-hidden"
      style={{ background: "#F0F8FF" }}
    >
      {/* Divider line with glow */}
      <div className="flex justify-center mb-20">
        <div
          className="w-px h-24"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(126,205,232,0.5), transparent)",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VIEWPORT_ONCE}
          transition={{ duration: 0.6 }}
          className="text-xs font-medium tracking-[0.1em] uppercase mb-5 text-center"
          style={{ color: "#0B2840", fontFamily: "var(--font-space-grotesk)" }}
        >
          02 — Signature
        </motion.p>

        {/* Headline */}
        <motion.h2
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="font-black tracking-tight text-center mb-5"
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: "clamp(28px, 5vw, 52px)",
            color: "#0B2840",
          }}
        >
          Fresh title.{" "}
          <GradientText>Unusual depth.</GradientText>
        </motion.h2>

        <motion.p
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="text-center max-w-2xl mx-auto mb-20 leading-relaxed"
          style={{
            color: "#1A5068",
            fontFamily: "var(--font-dm-sans)",
            fontSize: "1.05rem",
          }}
        >
          Award-winning AI & AR systems. Enterprise internship. Two hundred
          members led. Five production deployments across four technology
          stacks.
        </motion.p>

        {/* Stats grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="grid grid-cols-2 md:grid-cols-3"
          style={{
            background: "rgba(255,255,255,0.025)",
            border: "1px solid rgba(255,255,255,0.75)",
            borderRadius: "24px",
            overflow: "hidden",
          }}
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeUpVariants}
              className="flex flex-col items-center justify-center py-10 px-6 text-center relative"
              style={{
                borderRight:
                  i % 2 !== 1 && i % 3 !== 2
                    ? "1px solid rgba(255,255,255,0.70)"
                    : "none",
                borderBottom:
                  i < 3 ? "1px solid rgba(255,255,255,0.70)" : "none",
              }}
            >
              {/* Number */}
              <div
                className="font-black tracking-tight mb-2 leading-none"
                style={{
                  fontFamily: "var(--font-syne)",
                  fontSize: "clamp(40px, 5vw, 60px)",
                  background: "linear-gradient(135deg, #F2B8D4, #7ECDE8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  duration={2.2}
                />
              </div>

              {/* Label */}
              <div
                className="text-sm font-semibold mb-1"
                style={{
                  color: "#0B2840",
                  fontFamily: "var(--font-space-grotesk)",
                }}
              >
                {stat.label}
              </div>

              {/* Sublabel */}
              <div
                className="text-xs leading-relaxed"
                style={{
                  color: "#0B2840",
                  fontFamily: "var(--font-dm-sans)",
                }}
              >
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom brand statement */}
        <motion.blockquote
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="text-center mt-16 max-w-3xl mx-auto"
        >
          <p
            className="text-lg md:text-xl leading-relaxed italic"
            style={{
              color: "#0B2840",
              fontFamily: "var(--font-dm-sans)",
            }}
          >
            &ldquo;Nabila builds intelligent systems at the intersection of
            machine learning, augmented reality, and full-stack engineering —
            deploying technology that operates in hospitals, schools, and
            enterprise environments.&rdquo;
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}



