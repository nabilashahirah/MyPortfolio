"use client";
import { ArrowRight, Mail, Download } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { GithubIcon, LinkedinIcon, WhatsappIcon, LINKS } from "@/components/ui/Brand";

export default function Connect() {
  return (
    <section id="connect" style={{ paddingTop: 40 }}>
      <Reveal className="ctaband">
        <span className="pill"><span className="dot" /> Open to new opportunities</span>
        <h2>Let&apos;s build something <span className="g">worth remembering.</span></h2>
        <p>
          A role, a product idea, a collaboration, or just a chat: reach out and I&apos;ll reply.
        </p>
        <div className="cta">
          <a href={LINKS.email} className="btn primary">Say hello <ArrowRight size={18} /></a>
          <a href={LINKS.cv} target="_blank" rel="noopener noreferrer" className="btn"><Download size={17} /> Download CV</a>
        </div>
        <div className="contacts">
          <a href={LINKS.email}><Mail size={16} /> {LINKS.emailText}</a>
          <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer"><LinkedinIcon /> nabila-shahirah</a>
          <a href={LINKS.github} target="_blank" rel="noopener noreferrer"><GithubIcon /> nabilashahirah</a>
          <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer"><WhatsappIcon size={16} /> WhatsApp</a>
        </div>
      </Reveal>

      <footer className="foot">
        <span className="wm" style={{ fontSize: 20 }}>Nabila<span className="acc">.</span></span>
        <span>Nur Nabila Shahirah · Computer Science · UPM 2026</span>
        <span className="mono" style={{ fontSize: 12 }}>Built with Next.js</span>
      </footer>
    </section>
  );
}
