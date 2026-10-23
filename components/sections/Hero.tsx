"use client";
import { useEffect, useState } from "react";
import { ArrowRight, Download } from "lucide-react";
import { LINKS } from "@/components/ui/Brand";

const PHRASES = [
  "spot cavities early.",
  "teach the heart in AR.",
  "run clinics in real time.",
  "ship to the Play Store.",
  "win real clients.",
];

const SPARKS = [
  { l: "8%", t: "18%", d: 0, s: 18 }, { l: "88%", t: "12%", d: 0.8, s: 14 }, { l: "15%", t: "52%", d: 1.6, s: 12 },
  { l: "92%", t: "46%", d: 2.2, s: 20 }, { l: "4%", t: "78%", d: 1.1, s: 14 }, { l: "80%", t: "70%", d: 2.8, s: 12 },
  { l: "50%", t: "6%", d: 1.9, s: 10 }, { l: "30%", t: "30%", d: 0.4, s: 9 },
];

/* Each console line: [css class for prefix, prefix, body] */
type Line = [string, string, string];
const SCRIPT: Line[] = [
  ["dm", "$ ", "whoami"],
  ["hl", "", "nabila shahirah — CS (Multimedia Computing) · UPM '26"],
  ["dm", "$ ", "ls projects/"],
  ["hl", "", "toothymate  cardioverse  elrate  delligence  ilmora  perakkarate"],
  ["ag", "[toothymate] ", "MobileNetV2 on-device → plaque · calculus · cavity"],
  ["okk", "✓ ", "Silver Award · iFYP 2026"],
  ["ag", "[cardioverse] ", "ARCore + Unity → live 3D heart overlay"],
  ["okk", "✓ ", "Silver Medal · I-PICTL 2025"],
  ["ag", "[elrate] ", "AI review validation → Flutter + Firebase + GCP"],
  ["okk", "✓ ", "live on Google Play Store"],
  ["ag", "[delligence] ", "FastAPI + WebSocket → real-time patient queue"],
  ["ag", "[freelance] ", "perakkarate.com → 8-centre karate academy site"],
  ["okk", "✓ ", "live for a real client"],
  ["pk", "[now] ", "Data Science Intern @ Datamicron Systems"],
  ["dm", "$ ", "roles --open-to"],
  ["okk", "✓ ", "Software / AI Engineer · Software Tester · Business Analyst · System Analyst"],
];
const VISIBLE = 7;

function useTyped(words: string[]) {
  const [i, setI] = useState(0);
  const [n, setN] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i];
    let t: ReturnType<typeof setTimeout>;
    if (!del && n === word.length) t = setTimeout(() => setDel(true), 1700);
    else if (del && n === 0) t = setTimeout(() => { setDel(false); setI((x) => (x + 1) % words.length); }, 250);
    else t = setTimeout(() => setN((x) => x + (del ? -1 : 1)), del ? 28 : 55);
    return () => clearTimeout(t);
  }, [i, n, del, words]);

  return words[i].slice(0, n);
}

function Console() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const t = setTimeout(
      () => setCount((c) => (c >= SCRIPT.length ? 1 : c + 1)),
      count >= SCRIPT.length ? 3200 : 750
    );
    return () => clearTimeout(t);
  }, [count]);

  const start = Math.max(0, count - VISIBLE);
  const lines = SCRIPT.slice(start, count);

  return (
    <div className="console">
      <span className="hudc tl" /><span className="hudc tr" /><span className="hudc bl" /><span className="hudc br" />
      <div className="wbar">
        <i /><i /><i />
        <span className="ttl">nabila@upm: ~/portfolio</span>
        <span className="lv"><span className="dot" /> LIVE</span>
      </div>
      <div className="cbody" aria-live="off">
        {lines.map(([cls, pre, body], k) => (
          <div className="ln" key={start + k}>
            <span className={cls}>{pre}</span>
            <span className={cls === "okk" ? "okk" : ""}>{body}</span>
            {k === lines.length - 1 && <span className="caret-block" />}
          </div>
        ))}
      </div>
      <div className="cfoot">
        <span>Focus <b>AI · AR · Full-Stack</b></span>
        <span>CGPA <b>3.67</b></span>
        <span>Dean&apos;s List <b>3×</b></span>
        <span>Awards <b>6</b></span>
      </div>
    </div>
  );
}

export default function Hero() {
  const typed = useTyped(PHRASES);

  return (
    <header className="hero" id="top">
      <div className="hero-spot" aria-hidden />
      <div className="hero-name" aria-hidden>NABILA</div>
      {SPARKS.map((p, i) => (
        <span key={i} className="spark" aria-hidden style={{ left: p.l, top: p.t, fontSize: p.s, animationDelay: `${p.d}s` }}>✦</span>
      ))}
      <span className="pill">
        <span className="dot" /> Open to engineering, QA &amp; analyst roles
      </span>

      <h1>
        I build intelligent systems that{" "}
        <span className="typewrap g">{typed}</span>
        <span className="caret" />
      </h1>

      <p className="sub">
        I&apos;m <b style={{ color: "#fff" }}>Nabila Shahirah</b>, a Computer Science graduate from UPM.
        I build software systems, integrate AI, and train machine-learning models. My work has won awards
        in healthcare, education and enterprise.
      </p>

      <div className="cta">
        <a href="#work" className="btn primary">
          View my work <ArrowRight size={17} />
        </a>
        <a href={LINKS.cv} target="_blank" rel="noopener noreferrer" className="btn">
          <Download size={17} /> Download CV
        </a>
      </div>

      <Console />

      <a href="#work" className="scrollcue">Scroll ↓</a>
    </header>
  );
}
