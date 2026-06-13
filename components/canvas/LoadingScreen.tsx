"use client";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  isVisible: boolean;
}

export default function LoadingScreen({ isVisible }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="loading"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: "#08213A" }}
        >
          {/* Aurora blobs */}
          <motion.div
            className="absolute pointer-events-none"
            style={{
              top: "-20%", left: "-10%", width: "65%", height: "80%",
              background: "radial-gradient(ellipse 60% 55% at 35% 45%, rgba(30,155,196,0.14) 0%, transparent 70%)",
              filter: "blur(60px)", borderRadius: "50%",
            }}
            animate={{ x: [0, 20, 0], y: [0, -14, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute pointer-events-none"
            style={{
              bottom: "-15%", right: "-10%", width: "60%", height: "75%",
              background: "radial-gradient(ellipse 58% 52% at 65% 60%, rgba(232,114,154,0.12) 0%, transparent 70%)",
              filter: "blur(60px)", borderRadius: "50%",
            }}
            animate={{ x: [0, -16, 0], y: [0, 12, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />

          {/* Dot grid */}
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }} />

          {/* Center content */}
          <div className="relative z-10 flex flex-col items-center" style={{ gap: "20px" }}>

            {/* Name: clip-reveal from below */}
            <div style={{ overflow: "hidden" }}>
              <motion.h1
                initial={{ y: 72 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontFamily: "var(--font-syne)", fontWeight: 800,
                  fontSize: "clamp(32px, 6.5vw, 76px)",
                  letterSpacing: "-0.04em", textTransform: "uppercase",
                  background: "linear-gradient(128deg, #1E9BC4 0%, #9B6FD4 44%, #E8729A 100%)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                  margin: 0, lineHeight: 1,
                }}
              >
                Nabila Shahirah
              </motion.h1>
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.60 }}
              style={{
                fontFamily: "var(--font-inter)", fontSize: "9.5px", fontWeight: 600,
                letterSpacing: "0.22em", textTransform: "uppercase",
                color: "rgba(255,255,255,0.28)",
                margin: 0,
              }}
            >
              Engineering Intelligence · Shaping Experience
            </motion.p>

            {/* Progress bar */}
            <div style={{
              width: "180px", height: "1px",
              background: "rgba(255,255,255,0.07)",
              borderRadius: "999px", overflow: "hidden",
              marginTop: "4px",
            }}>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 2.0, delay: 0.45, ease: [0.4, 0, 0.2, 1] }}
                style={{
                  height: "100%",
                  background: "linear-gradient(90deg, #1E9BC4, #9B6FD4, #E8729A)",
                  transformOrigin: "left",
                  borderRadius: "999px",
                }}
              />
            </div>
          </div>

          {/* Bottom label */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            style={{
              position: "absolute", bottom: "28px",
              fontFamily: "var(--font-inter)", fontSize: "9px", fontWeight: 500,
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: "rgba(255,255,255,0.15)",
              margin: 0,
            }}
          >
            Portfolio · 2026
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
