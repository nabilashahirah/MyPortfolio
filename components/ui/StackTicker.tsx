"use client";
import { motion } from "framer-motion";
import { STACK_TAGS } from "@/lib/constants";

export default function StackTicker() {
  const doubled = [...STACK_TAGS, ...STACK_TAGS];

  return (
    <div
      className="w-full overflow-hidden py-5"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}
    >
      <motion.div
        className="flex gap-0 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
        style={{ willChange: "transform" }}
      >
        {doubled.map((tag, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-6 text-xs font-medium tracking-[0.1em] uppercase px-6"
            style={{
              color: "#0B2840",
              fontFamily: "var(--font-space-grotesk)",
            }}
          >
            {tag}
            <span
              style={{
                display: "inline-block",
                width: "3px",
                height: "3px",
                borderRadius: "50%",
                background: "#0B2840",
                flexShrink: 0,
              }}
            />
          </span>
        ))}
      </motion.div>
    </div>
  );
}



