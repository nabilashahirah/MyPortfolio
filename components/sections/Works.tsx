"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { VIEWPORT_ONCE } from "@/lib/animations";
import GradientText from "@/components/ui/GradientText";

interface Award    { emoji: string; label: string; color: string; }
interface Img      { src: string; alt: string; }
interface Project  {
  id: string; name: string; type: string; award: Award | null;
  problem: string; impact: string[]; stack: string[];
  images: Img[]; accentColor: string; isEnterprise?: boolean;
}
interface Category { id: string; label: string; projects: Project[]; }

const CATEGORIES: Category[] = [
  {
    id: "mobile",
    label: "Mobile",
    projects: [
      {
        id: "toothymate",
        name: "ToothyMate",
        type: "AI · AR · Oral Health",
        award: { emoji: "🥈", label: "Silver Award · iFYP 2026", color: "#E8729A" },
        problem: "Children with dental conditions have no early-detection tools — plaque, calculus and cavities go unnoticed until they worsen.",
        impact: ["On-device AI detects plaque, calculus & cavity via MobileNetV2", "AR tooth scanning designed for kids + AI chatbot for personalised guidance", "Industry collaboration with Klinik Pergigian Dr Karthi — validated by dental practitioners"],
        stack: ["Flutter", "TFLite", "MobileNetV2", "ARCore", "Firebase", "Python"],
        images: [
          { src: "/ToothymateAR.png", alt: "ToothyMate AR education" },
          { src: "/ToothymateAi.png", alt: "ToothyMate AI chatbot" },
        ],
        accentColor: "#E8729A",
      },
      {
        id: "elrate",
        name: "ELrate",
        type: "Full-Stack · AI · EdTech",
        award: { emoji: "▶", label: "Live on Google Play Store", color: "#34A853" },
        problem: "E-learning platforms lack reliable peer reviews — learners can't assess course quality and platforms are flooded with spam submissions.",
        impact: ["AI validates every review for quality before it goes live", "Shipped as a live Android app — published on Google Play Store"],
        stack: ["Flutter", "Node.js", "Firebase", "Google Cloud Platform"],
        images: [
          { src: "/ELrate.png",       alt: "ELrate home" },
          { src: "/ELrate%20(1).png", alt: "ELrate course reviews" },
          { src: "/ELrate%20(2).png", alt: "ELrate add review" },
        ],
        accentColor: "#34A853",
      },
      {
        id: "cardioverse",
        name: "CardioVerse",
        type: "AR · 3D · Medical Education",
        award: { emoji: "🥈", label: "Silver Medal · I-PICTL 2025", color: "#1E9BC4" },
        problem: "Medical students can't visualise 3D cardiac anatomy from flat textbooks — no interactive spatial tool existed for ECG placement and heart physiology.",
        impact: ["Real-time AR cardiac visualisation — live 3D heart overlay on mobile", "Built with UPM Faculty of Medicine · Top 3, Multimedia Digital Colloquium 2025"],
        stack: ["Unity", "ARCore", "C#", "Blender", "Vuforia"],
        images: [
          { src: "/Cardioverse.png", alt: "CardioVerse start screen" },
          { src: "/Cardioverse.gif", alt: "CardioVerse AR view" },
        ],
        accentColor: "#1E9BC4",
      },
    ],
  },
  {
    id: "web",
    label: "Web",
    projects: [
      {
        id: "delligence",
        name: "Delligence",
        type: "Full-Stack · Clinic SaaS",
        award: null,
        problem: "Small clinics manage patient queues, appointments and analytics on paper — no unified real-time system existed.",
        impact: ["Real-time patient queue via WebSocket — zero page refresh needed", "Appointment booking + operational analytics dashboard"],
        stack: ["React", "FastAPI", "MongoDB", "Python", "WebSocket"],
        images: [
          { src: "/DelligenceDashboard.png", alt: "Delligence dashboard" },
        ],
        accentColor: "#E8B4CB",
      },
      {
        id: "ilmora",
        name: "Ilmora",
        type: "Web App · School Administration",
        award: null,
        problem: "School administration is fully paper-based — registration, attendance and reporting are scattered and slow.",
        impact: ["End-to-end student registration and profile management", "Automated attendance tracking · sole architect & developer"],
        stack: ["Blazor WebAssembly", "ASP.NET Core", ".NET", "PostgreSQL", "C#"],
        images: [
          { src: "/IlmoraDashboard.png", alt: "Ilmora dashboard" },
        ],
        accentColor: "#7ECDE8",
      },
    ],
  },
];

/* ─── Right panel: images ─────────────────────────────────────────── */
const PANEL_W   = "44%";
const IMG_H     = 210;

function ImagePanel({ images, accent }: { images: Img[]; accent: string }) {
  if (images.length === 0) {
    return (
      <div style={{
        width: "100%", flexShrink: 0,
        borderLeft: "1px solid rgba(30,120,180,0.06)",
        background: `linear-gradient(145deg, ${accent}10, ${accent}03)`,
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <div style={{
          width: 48, height: 48, borderRadius: "50%",
          background: `${accent}15`, border: `1.5px solid ${accent}30`,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <div style={{ width: 20, height: 1.5, background: accent, borderRadius: 2 }} />
        </div>
      </div>
    );
  }

  if (images.length === 2) {
    return (
      <div style={{
        width: "100%", flexShrink: 0,
        display: "flex", alignItems: "center", gap: "4px", padding: "12px 8px",
        borderLeft: "1px solid rgba(30,120,180,0.06)",
      }}>
        {images.map((img) => (
          <div key={img.src} style={{ flex: 1, height: `${IMG_H}px`, overflow: "hidden" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img.src} alt={img.alt} style={{
              width: "100%", height: "100%",
              objectFit: "contain", objectPosition: "top center",
              display: "block", mixBlendMode: "multiply",
            }} />
          </div>
        ))}
      </div>
    );
  }

  /* 3 images: all side by side, same size */
  return (
    <div style={{
      width: "100%", flexShrink: 0,
      display: "flex", alignItems: "center", gap: "10px", padding: "16px",
      borderLeft: "1px solid rgba(30,120,180,0.06)",
    }}>
      {images.map((img) => (
        <div key={img.src} style={{ flex: 1, minWidth: 0, height: `${IMG_H}px`, overflow: "hidden" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={img.src} alt={img.alt} style={{
            width: "100%", height: "100%",
            objectFit: "contain", objectPosition: "top center",
            display: "block", mixBlendMode: "multiply",
          }} />
        </div>
      ))}
    </div>
  );
}

/* ─── Project card (horizontal) ───────────────────────────────────── */
function ProjectCard({ project }: { project: Project }) {
  return (
    <div style={{
      display: "flex", minHeight: "240px",
      borderRadius: "18px", overflow: "hidden",
      background: "#FFFFFF",
      border: "1px solid rgba(30,120,180,0.09)",
      boxShadow: "0 4px 24px rgba(30,100,160,0.07), 0 1px 4px rgba(30,100,160,0.04)",
    }}>

      {/* LEFT: content */}
      <div style={{ flex: 1, padding: "28px 28px 24px", display: "flex", flexDirection: "column", gap: "14px" }}>

        {/* Type + badges */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
          <span style={{
            fontFamily: "var(--font-inter)", fontSize: "9px", fontWeight: 700,
            letterSpacing: "0.12em", textTransform: "uppercase", color: project.accentColor,
          }}>{project.type}</span>
          {project.isEnterprise && (
            <span style={{
              fontFamily: "var(--font-inter)", fontSize: "9px", fontWeight: 600,
              background: "rgba(100,180,220,0.15)", border: "1px solid rgba(100,180,220,0.3)",
              borderRadius: "999px", padding: "1.5px 8px", color: "#C47090",
            }}>Enterprise</span>
          )}
          {project.award && (
            <span style={{
              fontFamily: "var(--font-inter)", fontSize: "9px", fontWeight: 700,
              background: `${project.award.color}12`, border: `1px solid ${project.award.color}30`,
              borderRadius: "999px", padding: "1.5px 8px", color: project.award.color,
            }}>{project.award.emoji} {project.award.label}</span>
          )}
        </div>

        {/* Name */}
        <h3 style={{
          fontFamily: "var(--font-syne)", fontWeight: 800,
          fontSize: "clamp(20px, 1.8vw, 26px)", lineHeight: 1.05,
          letterSpacing: "-0.02em", color: "#0B2840", margin: 0,
        }}>{project.name}</h3>

        {/* Problem */}
        <div style={{ paddingLeft: "12px", borderLeft: `2px solid ${project.accentColor}50` }}>
          <p style={{
            fontFamily: "var(--font-inter)", fontSize: "9px", fontWeight: 700,
            letterSpacing: "0.10em", textTransform: "uppercase",
            color: project.accentColor, marginBottom: "5px",
          }}>Problem</p>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "12.5px", color: "#1A5068", lineHeight: 1.65, margin: 0 }}>
            {project.problem}
          </p>
        </div>

        {/* Impact */}
        <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
          {project.impact.map((item) => (
            <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
              <span style={{ color: project.accentColor, fontSize: "12px", flexShrink: 0, fontWeight: 700, marginTop: "1px" }}>✓</span>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "12.5px", color: "#1A5068", lineHeight: 1.55, margin: 0 }}>{item}</p>
            </div>
          ))}
        </div>

        {/* Stack */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "auto", paddingTop: "14px", borderTop: "1px solid rgba(30,120,180,0.07)" }}>
          {project.stack.map((tag) => (
            <span key={tag} style={{
              fontFamily: "var(--font-inter)", fontSize: "10px", fontWeight: 500,
              background: "#F0F8FF", border: "1px solid rgba(30,120,180,0.11)",
              borderRadius: "999px", padding: "2px 10px", color: "#2A6880",
            }}>{tag}</span>
          ))}
        </div>

      </div>

      {/* RIGHT: images — hidden on mobile */}
      <div className="hidden md:block" style={{ flexShrink: 0, width: PANEL_W }}>
        <ImagePanel images={project.images} accent={project.accentColor} />
      </div>

    </div>
  );
}

/* ─── Main ─────────────────────────────────────────────────────────── */
export default function Works() {
  const [active, setActive] = useState(0);
  const category = CATEGORIES[active];

  return (
    <section
      id="intelligence"
      className="relative overflow-hidden"
      style={{ background: "#FFFFFF", paddingTop: "clamp(72px,10vh,120px)", paddingBottom: "clamp(72px,10vh,120px)" }}
    >
      <div className="absolute pointer-events-none" style={{
        top: 0, left: 0, width: "55%", height: "100%",
        background: "radial-gradient(ellipse 55% 45% at 15% 40%, rgba(30,155,196,0.06) 0%, rgba(232,114,154,0.04) 60%, transparent 85%)",
      }} />

      <div className="max-w-6xl mx-auto px-6">

        {/* Header + tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_ONCE}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between gap-6 flex-wrap mb-10"
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
              <div style={{ width: 28, height: 1.5, background: "linear-gradient(90deg, #1E9BC4, #E8729A)" }} />
              <span style={{
                fontFamily: "var(--font-inter)", fontSize: "10px", fontWeight: 600,
                letterSpacing: "0.12em", textTransform: "uppercase", color: "#C4799A",
              }}>Selected Work</span>
            </div>
            <h2 style={{
              fontFamily: "var(--font-syne)", fontWeight: 800,
              fontSize: "clamp(36px, 5vw, 60px)", lineHeight: 0.95,
              letterSpacing: "-0.03em", color: "#0B2840",
            }}>
              Featured <GradientText from="#1E9BC4" via="#E8729A" to="#7ECDE8">Projects</GradientText>
            </h2>
          </div>

          <div style={{ display: "flex", gap: "8px", paddingBottom: "4px" }}>
            {CATEGORIES.map((cat, i) => (
              <button
                key={cat.id}
                onClick={() => setActive(i)}
                style={{
                  fontFamily: "var(--font-inter)", fontSize: "12px", fontWeight: 600,
                  padding: "8px 20px", borderRadius: "999px", border: "none", cursor: "pointer",
                  transition: "all 0.22s ease",
                  background: active === i ? "linear-gradient(135deg, #1E9BC4, #E8729A)" : "rgba(30,120,180,0.08)",
                  color: active === i ? "#FFFFFF" : "#2A6880",
                  boxShadow: active === i ? "0 3px 12px rgba(232,114,154,0.22)" : "none",
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: "flex", flexDirection: "column", gap: "14px" }}
          >
            {category.projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
