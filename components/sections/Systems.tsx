"use client";
import { motion } from "framer-motion";
import {
  fadeUpVariants,
  staggerContainer,
  VIEWPORT_ONCE,
} from "@/lib/animations";
import GradientText from "@/components/ui/GradientText";

const SYSTEMS = [
  {
    id: "delligence",
    number: "01",
    title: "Delligence",
    subtitle: "Clinic Operation Management Platform",
    role: "Full-Stack Developer",
    challenge:
      "Small clinics operate critical workflows — patient queues, appointment booking, and analytics — on paper or disconnected tools. No unified system existed.",
    architecture: "React → FastAPI (Python) → MongoDB → WebSocket",
    outcomes: [
      "Real-time live queue tracking",
      "Patient appointment booking",
      "Operational analytics dashboard",
      "Production full-stack deployment",
    ],
    stack: ["React", "FastAPI", "MongoDB", "Python", "WebSocket"],
    color: "#E8B4CB",
    bg: "rgba(126,205,232,0.06)",
    border: "rgba(126,205,232,0.12)",
  },
  {
    id: "ilmora",
    number: "02",
    title: "Ilmora",
    subtitle: "School Administration System",
    role: "Sole Architect & Developer",
    challenge:
      "School administration remains paper-heavy. Student registration, attendance tracking, and reporting require a unified, reliable, and scalable platform.",
    architecture: "Blazor WebAssembly → ASP.NET Core → PostgreSQL",
    outcomes: [
      "End-to-end student registration",
      "Attendance tracking system",
      "Administrative dashboard & reporting",
      "Independent full architecture design",
    ],
    stack: ["Blazor", "ASP.NET Core", ".NET", "PostgreSQL", "C#"],
    color: "#7ECDE8",
    bg: "rgba(126,205,232,0.06)",
    border: "rgba(126,205,232,0.12)",
  },
  {
    id: "datamicron",
    number: "03",
    title: "Enterprise Analytics",
    subtitle: "Immigration Investigation System",
    role: "Data Science Intern · Datamicron Systems",
    challenge:
      "A large-scale government immigration investigation required advanced analytics, machine learning research, and end-to-end system validation at enterprise scale.",
    architecture: "ML Pipeline → Analytics Engine → Investigation Dashboard",
    outcomes: [
      "Contributed to large-scale immigration analytics",
      "Two independent full-stack system builds",
      "ML research and system validation",
      "Cross-functional stakeholder collaboration",
    ],
    stack: ["Python", "Machine Learning", "Data Analytics", "SQL", "Power BI"],
    color: "#F2B8D4",
    bg: "rgba(100,180,220,0.06)",
    border: "rgba(100,180,220,0.12)",
    isEnterprise: true,
  },
];

export default function Systems() {
  return (
    <section
      id="systems"
      className="relative py-28 md:py-40 px-6 overflow-hidden"
      style={{ background: "#FFF0F8" }}
    >
      {/* Background gradient */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: 0,
          right: 0,
          width: "50%",
          height: "60%",
          background:
            "radial-gradient(ellipse 60% 50% at 80% 80%, rgba(126,205,232,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={VIEWPORT_ONCE}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
          <div
            className="w-8 h-px"
            style={{ background: "rgba(126,205,232,0.4)" }}
          />
          <span
            className="text-xs font-medium tracking-[0.1em] uppercase"
            style={{ color: "#E8B4CB", fontFamily: "var(--font-space-grotesk)" }}
          >
            05 — Systems
          </span>
        </motion.div>

        <motion.h2
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="font-black tracking-tight mb-4"
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: "clamp(32px, 5vw, 52px)",
            color: "#0B2840",
          }}
        >
          Production{" "}
          <GradientText from="#E8B4CB" via="#7ECDE8" to="#F2B8D4">
            Systems.
          </GradientText>
        </motion.h2>

        <motion.p
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="max-w-2xl mb-16 leading-relaxed"
          style={{
            color: "#1A5068",
            fontFamily: "var(--font-dm-sans)",
            fontSize: "1rem",
          }}
        >
          Not academic exercises. Deployed, functional systems built end-to-end
          — from architecture decisions and database design through to
          production UI.
        </motion.p>

        {/* System cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="grid md:grid-cols-3 gap-6"
        >
          {SYSTEMS.map((sys) => (
            <motion.article
              key={sys.id}
              variants={fadeUpVariants}
              className="relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300"
              style={{
                background: sys.bg,
                border: `1px solid ${sys.border}`,
              }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
            >
              {/* Card header */}
              <div
                className="px-6 pt-6 pb-5"
                style={{ borderBottom: `1px solid ${sys.border}` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <span
                    className="text-xs font-medium"
                    style={{
                      color: sys.color,
                      fontFamily: "var(--font-space-grotesk)",
                      opacity: 0.6,
                    }}
                  >
                    {sys.number}
                  </span>
                  {sys.isEnterprise && (
                    <span
                      className="text-xs px-2 py-0.5 rounded-full font-medium"
                      style={{
                        background: "rgba(100,180,220,0.1)",
                        border: "1px solid rgba(100,180,220,0.2)",
                        color: "#F2B8D4",
                        fontFamily: "var(--font-space-grotesk)",
                      }}
                    >
                      Enterprise
                    </span>
                  )}
                </div>

                <h3
                  className="font-black text-xl tracking-tight mb-1"
                  style={{
                    fontFamily: "var(--font-syne)",
                    color: "#0B2840",
                  }}
                >
                  {sys.title}
                </h3>
                <p
                  className="text-xs mb-2"
                  style={{ color: "#1A5068", fontFamily: "var(--font-dm-sans)" }}
                >
                  {sys.subtitle}
                </p>
                <p
                  className="text-xs font-medium"
                  style={{ color: sys.color, fontFamily: "var(--font-space-grotesk)", opacity: 0.8 }}
                >
                  {sys.role}
                </p>
              </div>

              {/* Card body */}
              <div className="px-6 py-5 flex flex-col gap-5 flex-1">
                {/* Challenge */}
                <div>
                  <p
                    className="text-xs font-medium tracking-[0.15em] uppercase mb-2"
                    style={{ color: sys.color, fontFamily: "var(--font-space-grotesk)", opacity: 0.7 }}
                  >
                    Challenge
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#1A5068", fontFamily: "var(--font-dm-sans)" }}
                  >
                    {sys.challenge}
                  </p>
                </div>

                {/* Architecture */}
                <div>
                  <p
                    className="text-xs font-medium tracking-[0.15em] uppercase mb-2"
                    style={{ color: sys.color, fontFamily: "var(--font-space-grotesk)", opacity: 0.7 }}
                  >
                    Architecture
                  </p>
                  <p
                    className="text-xs rounded-lg px-3 py-2"
                    style={{
                      background: "rgba(30,120,180,0.07)",
                      border: "1px solid rgba(30,120,180,0.12)",
                      color: "#1A5068",
                      fontFamily: "var(--font-space-grotesk)",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {sys.architecture}
                  </p>
                </div>

                {/* Outcomes */}
                <div>
                  <p
                    className="text-xs font-medium tracking-[0.15em] uppercase mb-2"
                    style={{ color: sys.color, fontFamily: "var(--font-space-grotesk)", opacity: 0.7 }}
                  >
                    Delivered
                  </p>
                  <div className="flex flex-col gap-2">
                    {sys.outcomes.map((o, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div
                          className="w-1 h-1 rounded-full mt-1.5 shrink-0"
                          style={{ background: sys.color, opacity: 0.6 }}
                        />
                        <p
                          className="text-xs leading-relaxed"
                          style={{
                            color: "#1A5068",
                            fontFamily: "var(--font-dm-sans)",
                          }}
                        >
                          {o}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stack tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto pt-4" style={{ borderTop: `1px solid ${sys.border}` }}>
                  {sys.stack.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-full text-xs"
                      style={{
                        background: "rgba(255,255,255,0.85)",
                        border: "1px solid rgba(30,120,180,0.13)",
                        color: "#1A5068",
                        fontFamily: "var(--font-space-grotesk)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}



