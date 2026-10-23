"use client";
import { useEffect, useState } from "react";
import { LINKS, WhatsappIcon } from "@/components/ui/Brand";

/* Floating WhatsApp button for freelance enquiries. Appears once the visitor
   scrolls past the hero so it doesn't crowd the first screen. */
export default function WhatsAppBubble() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={LINKS.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className={`wa-bubble ${show ? "on" : ""}`}
      aria-label="Chat with Nabila on WhatsApp"
      tabIndex={show ? 0 : -1}
    >
      <span className="wa-tip">Freelance project? Chat with me</span>
      <span className="wa-ring" aria-hidden />
      <WhatsappIcon size={28} />
    </a>
  );
}
