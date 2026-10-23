"use client";
import Reveal from "@/components/ui/Reveal";
import { AWARDS } from "@/lib/constants";

const MEDAL_ICONS: Record<string, string> = {
  "Gold Medal": "🥇",
  "Gold Medal Volunteer Leadership Award": "🥇",
  "Silver Award": "🥈",
  "Silver Medal": "🥈",
  "Top 3 Jury's Choice": "🏆",
  "Best Director Award": "🎖",
  "Volunteer Leadership Award": "🌟",
};

export default function Weight() {
  const sorted = [...AWARDS].sort((a, b) => Number(b.year) - Number(a.year));

  return (
    <section className="sec" id="awards">
      <Reveal>
        <span className="eyebrow">Recognition</span>
        <h2 className="h2">Awards &amp; <span className="g">achievements</span></h2>
        <p className="lead">
          These awards were decided by outside judges, from innovation competitions to leadership honours.
        </p>
      </Reveal>

      <div className="bento three">
        {sorted.map((a, i) => (
          <Reveal key={a.title + a.year} delay={(i % 3) * 90}>
            <div className={`card award ${i === 0 ? "featured" : ""}`} style={{ height: "100%" }}>
              <div className="ic"><span className="medal">{MEDAL_ICONS[a.title] ?? "🏅"}</span></div>
              <span className="yr">{a.year}</span>
              <h3>{a.title}{i === 0 && <span className="badge-new">LATEST</span>}</h3>
              <p className="ev">{a.event}</p>
              <p style={{ fontSize: 13.5 }}>{a.competition}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
