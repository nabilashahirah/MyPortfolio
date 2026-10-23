import { memo, type CSSProperties } from "react";

function NextLogo() {
  return (
    <svg viewBox="0 0 180 180" width="48" height="48" aria-hidden>
      <defs>
        <linearGradient id="nx-a" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff" /><stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="nx-b" x1="121" y1="54" x2="120.8" y2="106.9" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff" /><stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <circle cx="90" cy="90" r="88" fill="#000" stroke="#fff" strokeOpacity=".35" strokeWidth="3" />
      <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#nx-a)" />
      <rect x="115" y="54" width="12" height="72" fill="url(#nx-b)" />
    </svg>
  );
}

function ReactLogo() {
  return (
    <svg viewBox="-11.5 -10.23 23 20.46" width="48" height="48" aria-hidden className="spin-slow">
      <circle r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

function FastApiLogo() {
  return (
    <svg viewBox="0 0 24 24" width="48" height="48" aria-hidden>
      <circle cx="12" cy="12" r="11.5" fill="#009688" />
      <path d="M13.4 3.6 6.3 13.6h5.1l-1 6.8 7.3-10.1h-5.2z" fill="#fff" />
    </svg>
  );
}

const ITEMS = [
  { name: "Next.js", Logo: NextLogo, glow: "rgba(255,255,255,.35)", pos: "p1", depth: 26, dur: 6.5, delay: 0 },
  { name: "React", Logo: ReactLogo, glow: "rgba(97,218,251,.45)", pos: "p2", depth: -34, dur: 7.5, delay: 1.2 },
  { name: "FastAPI", Logo: FastApiLogo, glow: "rgba(0,150,136,.55)", pos: "p3", depth: 20, dur: 6, delay: 0.6 },
];

/* Floating tech-stack logos around the hero. Mouse parallax comes from the
   --px/--py variables BackgroundFX sets on .hero. */
function StackFly() {
  return (
    <div className="stackfly" aria-label="Main stack: Next.js, React, FastAPI">
      {ITEMS.map(({ name, Logo, glow, pos, depth, dur, delay }) => (
        <div key={name} className={`fly ${pos}`} style={{ "--depth": depth } as CSSProperties}>
          <div className="fly-in" style={{ animationDuration: `${dur}s`, animationDelay: `${delay}s`, "--glow": glow } as CSSProperties}>
            <div className="fly-tile"><Logo /></div>
            <span className="fly-label">{name}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default memo(StackFly);
