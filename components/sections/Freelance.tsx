"use client";
import { Building2, Rocket, LayoutDashboard, IdCard, ExternalLink } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { LINKS, WhatsappIcon } from "@/components/ui/Brand";

const SERVICES = [
  {
    icon: Building2,
    title: "Business & organisation websites",
    text: "A full website for your business, club or academy: about, services, locations, gallery and contact.",
    msg: "Hi Nabila! I'm interested in a website for my business / organisation.",
  },
  {
    icon: Rocket,
    title: "Landing pages",
    text: "One focused page for a product, event or campaign, built to get people to sign up, buy or message you.",
    msg: "Hi Nabila! I'm interested in a landing page.",
  },
  {
    icon: LayoutDashboard,
    title: "Small web apps & dashboards",
    text: "Booking, records, queues or reports: simple internal tools that replace spreadsheets and paperwork.",
    msg: "Hi Nabila! I'm interested in a small web app / dashboard.",
  },
  {
    icon: IdCard,
    title: "Portfolio websites",
    text: "A personal portfolio like this one, for students, job seekers and creatives who want to stand out.",
    msg: "Hi Nabila! I'm interested in a portfolio website.",
  },
];

const STEPS = [
  { n: "01", t: "Message me", d: "Tell me about your idea on WhatsApp." },
  { n: "02", t: "Plan & quote", d: "I suggest what to build and send you a quote." },
  { n: "03", t: "Build & launch", d: "I build it, you review it, and it goes live." },
];

export default function Freelance() {
  return (
    <section className="sec" id="freelance">
      <Reveal>
        <span className="eyebrow">Freelance</span>
        <h2 className="h2">Need a website? <span className="g">Let&apos;s build it.</span></h2>
        <p className="lead">
          Alongside full-time roles, I take on freelance web projects for businesses, organisations and
          individuals. Message me on WhatsApp and tell me what you have in mind.
        </p>
      </Reveal>

      <div className="bento four">
        {SERVICES.map((s, i) => (
          <Reveal key={s.title} delay={i * 80}>
            <a className="card svc" href={LINKS.waLink(s.msg)} target="_blank" rel="noopener noreferrer" style={{ height: "100%" }}>
              <div className="ic"><s.icon size={24} strokeWidth={1.8} /></div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <span className="svc-cta"><WhatsappIcon size={14} /> Ask about this</span>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={100}>
        <div className="fl-band">
          <a className="fl-case" href="https://perakkarate.com" target="_blank" rel="noopener noreferrer">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/PerakKarate.png" alt="Perak Legends Karate Academy website" loading="lazy" />
            <div className="fl-case-cap">
              <span className="live"><span className="dot" /> Live client site</span>
              <b>Perak Legends Karate Academy</b>
              <span>perakkarate.com <ExternalLink size={13} /></span>
            </div>
          </a>

          <div className="fl-side">
            <div className="fl-steps">
              {STEPS.map((s) => (
                <div key={s.n} className="fl-step">
                  <span className="fl-n">{s.n}</span>
                  <div><b>{s.t}</b><p>{s.d}</p></div>
                </div>
              ))}
            </div>
            <a className="btn wa" href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer">
              <WhatsappIcon size={19} /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
