"use client";
import { useState } from "react";
import { Mail, Code2, Bug, BarChart3, Workflow } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { GithubIcon, LinkedinIcon, LINKS } from "@/components/ui/Brand";
import { STATS } from "@/lib/constants";

const FACTS = [
  { k: "Education", v: "B.CS (Multimedia Computing), UPM" },
  { k: "Currently", v: "Data Science Intern · Datamicron" },
  { k: "Focus", v: "AI · AR · Full-Stack systems" },
  { k: "Open to", v: "Engineering · QA testing · BA / SA roles" },
];

const ROLES = [
  { icon: Code2, title: "Software / AI Engineer", text: "Building products end to end: mobile, web, AI models and AR." },
  { icon: Bug, title: "Software Tester (QA)", text: "I've shipped to real users on the Play Store and a live client site, so I care about catching bugs before they do." },
  { icon: BarChart3, title: "Business Analyst", text: "Turning what stakeholders need into clear requirements, and turning data into decisions with Power BI and analytics." },
  { icon: Workflow, title: "System Analyst", text: "Mapping real workflows, like clinic queues and school admin, then designing the system around them." },
];

export function StatsBand() {
  return (
    <Reveal className="band">
      <div className="stats">
        {STATS.map((s) => (
          <div className="stat" key={s.label}>
            <div className="num"><AnimatedCounter value={s.value} suffix={s.suffix} /></div>
            <div className="lab">{s.label}</div>
            <div className="sl">{s.sub}</div>
          </div>
        ))}
      </div>
    </Reveal>
  );
}

export default function About() {
  const [photoErr, setPhotoErr] = useState(false);

  return (
    <section className="sec" id="about">
      <div className="about">
        <Reveal>
          <div className="mock">
            <div className="wbar"><i /><i /><i /><span className="ttl">profile.png</span></div>
            <div className="photo">
              {!photoErr ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src="/Nabila.png" alt="Nabila Shahirah" onError={() => setPhotoErr(true)} />
              ) : (
                <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span className="g" style={{ fontFamily: "var(--font-grotesk)", fontSize: 72, fontWeight: 700 }}>NS</span>
                </div>
              )}
              <div className="cap">
                <b>Nur Nabila Shahirah</b>
                <span>Computer Science · Universiti Putra Malaysia</span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <span className="eyebrow">About</span>
          <h2 className="h2">I don&apos;t stop at the model. <span className="g">I ship the whole product.</span></h2>
          <p className="lead" style={{ marginBottom: 0 }}>
            I take products from data to deployment: computer-vision models that run on a phone, AR apps for
            medical education, real-time web platforms for clinics and schools, and client websites like perakkarate.com. I&apos;ve also led as
            club president and college representative and run outreach programmes, so I&apos;m used to leading people as well as writing code.
          </p>

          <div className="kv">
            {FACTS.map((f) => (
              <div key={f.k}><small>{f.k}</small><span>{f.v}</span></div>
            ))}
          </div>

          <div className="contacts" style={{ justifyContent: "flex-start", marginTop: 22 }}>
            <a href={LINKS.email}><Mail size={16} /> Email</a>
            <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer"><LinkedinIcon /> LinkedIn</a>
            <a href={LINKS.github} target="_blank" rel="noopener noreferrer"><GithubIcon /> GitHub</a>
          </div>
        </Reveal>
      </div>

      <Reveal style={{ marginTop: 72 }}>
        <span className="eyebrow">Roles I&apos;m open to</span>
        <h3 className="h2" style={{ fontSize: "clamp(24px, 3vw, 34px)" }}>Builder, tester or analyst: <span className="g">I&apos;m keen on all of them.</span></h3>
      </Reveal>
      <div className="bento four">
        {ROLES.map((r, i) => (
          <Reveal key={r.title} delay={i * 80}>
            <div className="card" style={{ height: "100%" }}>
              <div className="ic"><r.icon size={24} strokeWidth={1.8} /></div>
              <h3>{r.title}</h3>
              <p>{r.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
