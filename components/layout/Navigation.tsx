"use client";
import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { LINKS } from "@/components/ui/Brand";

const NAV_LINKS = [
  { label: "Work",       id: "work" },
  { label: "About",      id: "about" },
  { label: "Skills",     id: "skills" },
  { label: "Leadership", id: "leadership" },
  { label: "Awards",     id: "awards" },
  { label: "FAQ",        id: "faq" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Highlight the section currently in the middle of the viewport */
  useEffect(() => {
    const observers = NAV_LINKS.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-45% 0px -50% 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <>
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <a href="#top" className="wm" onClick={() => setOpen(false)}>
          Nabila<span className="acc">.</span>
        </a>

        <div className="nav-links">
          {NAV_LINKS.map((l) => (
            <a key={l.id} href={`#${l.id}`} className={`nl ${active === l.id ? "on" : ""}`}>
              {l.label}
            </a>
          ))}
          <a href={LINKS.cv} target="_blank" rel="noopener noreferrer" className="btn sm hide-sm">
            <Download size={15} /> CV
          </a>
          <a href="#connect" className="btn sm primary">Let&apos;s talk</a>
          <button className="nav-burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mmenu">
          {NAV_LINKS.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href={LINKS.cv} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Download CV</a>
        </div>
      )}
    </>
  );
}
