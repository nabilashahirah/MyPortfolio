"use client";
import { Brain, Glasses, Layers, Database } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { SKILL_CLUSTERS } from "@/lib/constants";

const ICONS = [Brain, Glasses, Layers, Database];
const LANGUAGES = ["Python", "Dart", "JavaScript", "TypeScript", "C#", "Java", "SQL", "HTML / CSS"];

export default function Fingerprint() {
  return (
    <section className="sec" id="skills">
      <Reveal>
        <span className="eyebrow">Skills &amp; stack</span>
        <h2 className="h2">Four disciplines, <span className="g">one builder</span></h2>
        <p className="lead">
          Every skill group below comes from a project I shipped. Each card names that project.
        </p>
      </Reveal>

      <div className="bento">
        {SKILL_CLUSTERS.map((c, i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <Reveal key={c.label} delay={i * 90}>
              <div className="card" style={{ height: "100%" }}>
                <div className="ic"><Icon size={24} strokeWidth={1.8} /></div>
                <h3>{c.label}</h3>
                <p style={{ marginBottom: 18 }}>
                  <span className="mono" style={{ fontSize: 11.5, letterSpacing: 1, color: "var(--rose)" }}>USED IN →</span>{" "}
                  {c.project}
                </p>
                <div className="chips">
                  {c.skills.map((s) => <span className="chip" key={s}>{s}</span>)}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={100}>
        <div className="card" style={{ marginTop: 20, padding: "20px 26px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px 18px" }}>
          <span className="eyebrow" style={{ margin: 0 }}>Languages</span>
          <div className="chips">
            {LANGUAGES.map((l) => <span className="chip" key={l}>{l}</span>)}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
