"use client";
import { useState } from "react";
import Reveal from "@/components/ui/Reveal";

interface Award    { emoji: string; label: string; color: string; }
interface Img      { src: string; alt: string; }
interface Project  {
  id: string; name: string; type: string; award: Award | null;
  problem: string; impact: string[]; stack: string[];
  images: Img[]; accentColor: string; isEnterprise?: boolean; link?: string;
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
        award: { emoji: "🥇", label: "Gold Medal · I-PICTL 2026", color: "#F5C518" },
        problem: "Children with dental conditions have no early-detection tools — plaque, calculus and cavities go unnoticed until they worsen.",
        impact: ["On-device AI detects plaque, calculus & cavity via MobileNetV2, with 90.0% classification accuracy", "Usability testing with 21 users scored 97.38 on the System Usability Scale", "AR tooth scanning designed for kids + AI chatbot for personalised guidance", "Industry collaboration with Klinik Pergigian Dr Karthi — validated by dental practitioners", "Also won the Silver Award at iFYP 2026 (FSKTM innovation showcase)"],
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
        id: "syntra",
        name: "Syntra",
        type: "Internship · Datamicron · Internal Tool",
        award: { emoji: "💼", label: "Datamicron Internship", color: "#F5C76B" },
        problem: "Looking up a record in a third-party registry meant writing curl commands by hand, which was slow and needed technical know-how.",
        impact: ["Replaced manual curl commands: enter an ID and get the matching registry record in profile, table or raw views", "Built the middleware that calls the registry API, with configurable endpoints and headers", "Defensive parser that handles missing or inconsistently typed fields", "API Manager to save, run and map API configurations to tables, plus an API Tester"],
        stack: ["Blazor", ".NET", "C#", "REST APIs", "JSON"],
        images: [
          { src: "/Syntra.png", alt: "Syntra API Manager screen" },
        ],
        accentColor: "#F5C76B",
      },
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
  {
    id: "freelance",
    label: "Freelance",
    projects: [
      {
        id: "perakkarate",
        name: "Perak Legends Karate Academy",
        type: "Freelance · Client Website · Next.js",
        award: { emoji: "▶", label: "Live · perakkarate.com", color: "#FF2E88" },
        problem: "A karate academy with 8 centres across Perak needed one place where parents and students could find a centre, follow belt progression, see results and book a trial class.",
        impact: ["Official academy website, live at perakkarate.com", "Covers 8 centres, an interactive belt progression chart, a Hall of Fame, coach profiles and an FAQ", "One-tap WhatsApp trial-class booking, plus Instagram and TikTok links"],
        stack: ["Next.js", "React", "Cloudflare"],
        images: [
          { src: "/PerakKarate.png", alt: "Perak Legends Karate Academy website" },
        ],
        accentColor: "#FF2E88",
        link: "https://perakkarate.com",
      },
    ],
  },
];

function Shots({ project }: { project: Project }) {
  const wide = project.images.length === 1;
  return (
    <div className="mock neon tilt">
      <div className="wbar">
        <i /><i /><i />
        <span className="ttl">{project.id}.app</span>
        {project.award?.label.startsWith("Live") && <span className="lv"><span className="dot" /> LIVE</span>}
      </div>
      <div className={`mb n${project.images.length}`}>
        {project.images.map((img) => (
          <div key={img.src} className={`shot ${wide ? "wide" : ""}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img.src} alt={img.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}

function Feature({ project, reverse }: { project: Project; reverse: boolean }) {
  const { award } = project;
  return (
    <div className={`feature ${reverse ? "rev" : ""}`}>
      <Reveal className="ftext">
        {award && (
          award.label.startsWith("Live") ? (
            <span className="live" style={{ marginBottom: 16 }}><span className="dot" /> {award.label}</span>
          ) : (
            <span className="tagp" style={{ color: "#F5C76B", background: "rgba(245,199,107,.1)", border: "1px solid rgba(245,199,107,.3)", marginBottom: 16 }}>
              {award.emoji} {award.label}
            </span>
          )
        )}
        <h3>{project.name}</h3>
        <div className="ftype" style={{ color: "var(--rose)" }}>{project.type}</div>
        <p className="fd">{project.problem}</p>
        <ul className="feat">
          {project.impact.map((i) => <li key={i}>{i}</li>)}
        </ul>
        <div className="chips">
          {project.stack.map((t) => <span className="chip" key={t}>{t}</span>)}
        </div>
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn sm" style={{ marginTop: 20 }}>
            Visit live site ↗
          </a>
        )}
      </Reveal>
      <Reveal delay={120}>
        <Shots project={project} />
      </Reveal>
    </div>
  );
}

const FILTERS = [{ id: "all", label: "All" }, ...CATEGORIES.map(({ id, label }) => ({ id, label }))];

export default function Works() {
  const [filter, setFilter] = useState("all");
  const projects = CATEGORIES.filter((c) => filter === "all" || c.id === filter).flatMap((c) => c.projects);

  return (
    <section className="sec" id="work">
      <Reveal>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24, flexWrap: "wrap", marginBottom: 64 }}>
          <div>
            <span className="eyebrow">Selected work</span>
            <h2 className="h2">Products that solve <span className="g">real problems</span></h2>
            <p className="lead" style={{ marginBottom: 0 }}>
              Each project started with a problem someone actually had. Some won awards, one is live on
              the Play Store, and one is a client site that&apos;s live right now.
            </p>
          </div>
          <div className="tabs" role="tablist">
            {FILTERS.map((f) => (
              <button key={f.id} role="tab" aria-selected={filter === f.id} className={filter === f.id ? "on" : ""} onClick={() => setFilter(f.id)}>
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      <div key={filter}>
        {projects.map((p, i) => <Feature key={p.id} project={p} reverse={i % 2 === 1} />)}
      </div>
    </section>
  );
}
