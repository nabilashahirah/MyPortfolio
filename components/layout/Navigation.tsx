"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Works",      href: "#intelligence", id: "intelligence" },
  { label: "Skills",     href: "#fingerprint",  id: "fingerprint"  },
  { label: "Leadership", href: "#command",      id: "command"      },
  { label: "Awards",     href: "#weight",       id: "weight"       },
];

export default function Navigation() {
  const [scrolled, setScrolled]   = useState(false);
  const [active,   setActive]     = useState("");
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Active section via IntersectionObserver */
  useEffect(() => {
    const ids = [...NAV_LINKS.map(l => l.id), "connect"];
    const observers: IntersectionObserver[] = [];

    ids.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  /* Close mobile menu on link click */
  const handleNav = () => setMenuOpen(false);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 inset-x-0 z-50"
        style={{
          background: scrolled ? "rgba(255,255,255,0.90)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(30,120,180,0.08)" : "none",
          transition: "background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease",
        }}
      >
        <div
          style={{
            maxWidth: "1200px", margin: "0 auto",
            padding: "16px clamp(20px, 4vw, 48px)",
            display: "flex", alignItems: "center", justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <a href="#" style={{ textDecoration: "none" }}>
            <span style={{
              fontFamily: "var(--font-syne)", fontWeight: 800,
              fontSize: "clamp(17px, 2vw, 20px)", letterSpacing: "-0.02em",
              background: "linear-gradient(135deg, #1E9BC4, #E8729A)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              Nabila<span style={{ WebkitTextFillColor: "#0B2840", color: "#0B2840" }}>.</span>
            </span>
          </a>

          {/* Desktop links */}
          <nav style={{ display: "flex", alignItems: "center", gap: "clamp(20px, 3vw, 36px)" }}
               className="hidden md:flex">
            {NAV_LINKS.map(link => {
              const isActive = active === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily: "var(--font-inter)", fontSize: "13.5px", fontWeight: isActive ? 600 : 400,
                    textDecoration: "none", letterSpacing: "0.01em",
                    color: isActive ? "#1E9BC4" : scrolled ? "rgba(11,40,64,0.55)" : "rgba(11,40,64,0.60)",
                    position: "relative", paddingBottom: "3px",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#1E9BC4"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = isActive ? "#1E9BC4" : scrolled ? "rgba(11,40,64,0.55)" : "rgba(11,40,64,0.60)"}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      style={{
                        position: "absolute", bottom: 0, left: 0, right: 0, height: "1.5px",
                        background: "linear-gradient(90deg, #1E9BC4, #E8729A)",
                        borderRadius: "999px",
                      }}
                      transition={{ type: "spring", stiffness: 380, damping: 34 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* CTA */}
          <a
            href="#connect"
            className="hidden md:inline-flex"
            style={{
              fontFamily: "var(--font-inter)", fontSize: "13px", fontWeight: 600,
              padding: "9px 22px", borderRadius: "999px", textDecoration: "none",
              background: "linear-gradient(135deg, #1E9BC4, #E8729A)",
              color: "#FFFFFF", letterSpacing: "0.02em",
              boxShadow: "0 2px 12px rgba(30,155,196,0.25)",
              transition: "opacity 0.2s, transform 0.2s",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.opacity = "0.88";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.opacity = "1";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            Let&apos;s Talk
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
            style={{
              background: "none", border: "none", cursor: "pointer",
              padding: "8px", display: "flex", flexDirection: "column",
              gap: "5px", alignItems: "flex-end",
            }}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              style={{ display: "block", width: "22px", height: "1.5px", background: "#0B2840", borderRadius: "2px", transformOrigin: "center" }}
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              style={{ display: "block", width: "14px", height: "1.5px", background: "#0B2840", borderRadius: "2px" }}
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              style={{ display: "block", width: "22px", height: "1.5px", background: "#0B2840", borderRadius: "2px", transformOrigin: "center" }}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "fixed", top: "60px", left: 0, right: 0, zIndex: 49,
              background: "rgba(255,255,255,0.97)", backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(30,120,180,0.09)",
              padding: "16px clamp(20px, 4vw, 48px) 24px",
              display: "flex", flexDirection: "column", gap: "4px",
            }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={handleNav}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                style={{
                  fontFamily: "var(--font-inter)", fontSize: "16px", fontWeight: active === link.id ? 600 : 400,
                  color: active === link.id ? "#1E9BC4" : "#0B2840",
                  padding: "12px 0", textDecoration: "none",
                  borderBottom: "1px solid rgba(30,120,180,0.06)",
                }}
              >
                {link.label}
              </motion.a>
            ))}
            <a
              href="#connect"
              onClick={handleNav}
              style={{
                marginTop: "12px", fontFamily: "var(--font-inter)", fontSize: "14px", fontWeight: 600,
                padding: "12px 0", textDecoration: "none", textAlign: "center",
                background: "linear-gradient(135deg, #1E9BC4, #E8729A)",
                color: "#FFFFFF", borderRadius: "12px",
              }}
            >
              Let&apos;s Talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
