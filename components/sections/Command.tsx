"use client";
import { useEffect, useState } from "react";
import Reveal from "@/components/ui/Reveal";
import { LEADERSHIP_TIMELINE } from "@/lib/constants";

const LEADERSHIP_PHOTOS = Array.from({ length: 10 }, (_, i) => `/Leadership/leadership${i + 1}.jpg`);
const AWARD_PHOTOS = ["/Award/ipictl2026-gold.png", ...Array.from({ length: 5 }, (_, i) => `/Award/award${i + 1}.jpg`)];

/* Two counter-scrolling rows of photos; click one to enlarge. */
function PhotoWall() {
  const [zoom, setZoom] = useState<string | null>(null);

  useEffect(() => {
    if (!zoom) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setZoom(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [zoom]);

  const rows = [
    LEADERSHIP_PHOTOS.slice(0, 5).concat(AWARD_PHOTOS.slice(0, 2)),
    LEADERSHIP_PHOTOS.slice(5).concat(AWARD_PHOTOS.slice(2)),
  ];

  return (
    <>
      <div className="wall" style={{ marginTop: 56 }}>
        {rows.map((row, r) => (
          <div className="wrow" key={r}>
            <div className={`wtrack ${r === 1 ? "rev" : ""}`}>
              {[...row, ...row].map((src, i) => (
                <button className="wph" key={i} onClick={() => setZoom(src)} aria-label="Enlarge photo" tabIndex={i >= row.length ? -1 : 0}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt="" loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {zoom && (
        <div className="lightbox" onClick={() => setZoom(null)} role="dialog" aria-modal="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={zoom} alt="Leadership and awards moment" />
        </div>
      )}
    </>
  );
}

export default function Command() {
  return (
    <section id="leadership" style={{ position: "relative" }}>
      <div className="sec" style={{ paddingBottom: 0 }}>
        <Reveal>
          <span className="eyebrow">Leadership</span>
          <h2 className="h2">Leading people, <span className="g">not just projects</span></h2>
          <p className="lead">
            I&apos;ve been a college representative, a club president and an international exchange delegate,
            each time with more people relying on me.
          </p>
        </Reveal>

        <div className="steps">
          {LEADERSHIP_TIMELINE.map((item, i) => (
            <Reveal key={item.role + item.org} delay={(i % 3) * 90}>
              <div className={`step ${item.isHighlight ? "hl" : ""}`} style={{ height: "100%" }}>
                <div className="sn">{String(i + 1).padStart(2, "0")}</div>
                <span className="yr">{item.year}</span>
                <h4>{item.role}</h4>
                <p className="org">{item.org}</p>
                <p>{item.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <PhotoWall />
    </section>
  );
}
