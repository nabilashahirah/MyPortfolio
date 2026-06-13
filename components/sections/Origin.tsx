"use client";
import { motion } from "framer-motion";
import {
  fadeUpVariants,
  staggerContainer,
  VIEWPORT_ONCE,
} from "@/lib/animations";
import GradientText from "@/components/ui/GradientText";

export default function Origin() {
  return (
    <section
      id="origin"
      className="relative py-28 md:py-40 px-6 overflow-hidden"
      style={{ background: "#FFF0F8" }}
    >
      {/* Subtle center glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 60%, rgba(126,205,232,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="text-center"
        >
          {/* Section label */}
          <motion.div
            variants={fadeUpVariants}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div
              className="w-8 h-px"
              style={{ background: "rgba(126,205,232,0.3)" }}
            />
            <span
              className="text-xs font-medium tracking-[0.1em] uppercase"
              style={{ color: "#0B2840", fontFamily: "var(--font-space-grotesk)" }}
            >
              09 — Origin
            </span>
            <div
              className="w-8 h-px"
              style={{ background: "rgba(126,205,232,0.3)" }}
            />
          </motion.div>

          {/* Name */}
          <motion.h2
            variants={fadeUpVariants}
            className="font-black tracking-tight mb-8"
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(36px, 6vw, 64px)",
              color: "#0B2840",
            }}
          >
            Nur Nabila{" "}
            <GradientText>Shahirah</GradientText>
          </motion.h2>

          {/* Personal statement */}
          <motion.div
            variants={fadeUpVariants}
            className="mb-10"
          >
            <p
              className="text-lg md:text-xl leading-[1.8] max-w-3xl mx-auto"
              style={{
                color: "#1A5068",
                fontFamily: "var(--font-dm-sans)",
              }}
            >
              I grew up curious about how things work — which led me from
              Agricultural Science to Computer Science, from lecture halls to
              award stages, from code editors to community halls in Ulu Kinta.
            </p>
          </motion.div>

          <motion.div variants={fadeUpVariants} className="mb-12">
            <p
              className="text-base leading-[1.9] max-w-2xl mx-auto"
              style={{
                color: "#0B2840",
                fontFamily: "var(--font-dm-sans)",
              }}
            >
              I build because I want the technology I leave behind to still be
              running, still helping people, long after I&apos;ve moved on to the
              next problem. That&apos;s the standard I hold my work to.
            </p>
          </motion.div>

          {/* Highlights row */}
          <motion.div
            variants={fadeUpVariants}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {[
              "UPM Class of 2026",
              "Multimedia Computing",
              "Kuala Lumpur, Malaysia",
              "Available September 2026",
            ].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full text-sm"
                style={{
                  background: "rgba(255,255,255,0.65)",
                  border: "1px solid rgba(255,255,255,0.75)",
                  color: "#1A5068",
                  fontFamily: "var(--font-space-grotesk)",
                }}
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Quick links */}
          <motion.div
            variants={fadeUpVariants}
            className="flex flex-wrap justify-center gap-6"
          >
            {[
              {
                label: "GitHub",
                href: "https://github.com/nabilashahirah",
                color: "#7ECDE8",
              },
              {
                label: "LinkedIn",
                href: "https://linkedin.com/in/nabila-shahirah-7a76b4243",
                color: "#F2B8D4",
              },
              {
                label: "Email",
                href: "mailto:nnabila.salim@gmail.com",
                color: "#E8B4CB",
              },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-sm font-medium transition-opacity duration-200 hover:opacity-100"
                style={{
                  color: link.color,
                  fontFamily: "var(--font-space-grotesk)",
                  opacity: 0.7,
                }}
              >
                {link.label} →
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}




