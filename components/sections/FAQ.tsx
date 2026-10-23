"use client";
import { useState, type ReactNode } from "react";
import Reveal from "@/components/ui/Reveal";
import { LINKS } from "@/components/ui/Brand";

const QA: { q: string; a: ReactNode }[] = [
  {
    q: "What kind of roles are you looking for?",
    a: "I'm open to software and AI engineering roles, and I'm just as keen on Software Tester (QA), Business Analyst and System Analyst roles. All of them involve understanding a real problem and making sure the system actually solves it.",
  },
  {
    q: "Why software testing, business analysis or systems analysis?",
    a: "Every project I've built started with a real user's problem: dental practitioners for ToothyMate, the UPM Faculty of Medicine for CardioVerse, and a real client for Perak Karate. I enjoy that side of the work: gathering requirements, mapping how a process works today, and checking the finished system really does the job. My completed data-science internship at Datamicron Systems added the data analysis and reporting side.",
  },
  {
    q: "Have you shipped anything real, or just class projects?",
    a: "Yes, real. I built perakkarate.com for a karate academy with 8 centres across Perak, and it's live now. ELrate is live on the Google Play Store. ToothyMate was validated with dental practitioners at Klinik Pergigian Dr Karthi, scored 97.38 on usability testing with 21 users, and won a Gold Medal at I-PICTL 2026. CardioVerse was built with the UPM Faculty of Medicine. I was the sole architect and developer of Ilmora, and during my Datamicron internship I built Syntra, an internal registry lookup tool.",
  },
  {
    q: "What's your academic background?",
    a: "I have a Bachelor of Computer Science (Multimedia Computing) from Universiti Putra Malaysia, with a CGPA of 3.67 and four Dean's List awards.",
  },
  {
    q: "Do you work better solo or in a team?",
    a: "Both. I've built whole systems alone, like Ilmora, and I've led people as president of a 200-member club (membership grew 40%) and as college representative for 1,000+ residents. I'm comfortable owning a codebase and coordinating people.",
  },
  {
    q: "Do you take freelance projects?",
    a: (
      <>
        Yes. I build business and organisation websites (like{" "}
        <a href="https://perakkarate.com" target="_blank" rel="noopener noreferrer">perakkarate.com</a>), landing pages,
        small web apps and dashboards, and portfolio websites.{" "}
        <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer">Message me on WhatsApp</a> and tell me about your idea.
      </>
    ),
  },
  {
    q: "How do I get in touch?",
    a: (
      <>
        Email me at <a href={LINKS.email}>{LINKS.emailText}</a>, message me on{" "}
        <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>, or{" "}
        <a href={LINKS.cv} target="_blank" rel="noopener noreferrer">download my CV</a>. I usually reply within a day.
      </>
    ),
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="sec center" id="faq">
      <Reveal>
        <span className="eyebrow">FAQ</span>
        <h2 className="h2">Questions <span className="g">recruiters ask</span></h2>
        <p className="lead">Quick answers to the questions I get most often.</p>
      </Reveal>

      <Reveal delay={100}>
        <div className="faq">
          {QA.map((item, i) => (
            <div className={`qa ${open === i ? "open" : ""}`} key={item.q}>
              <button className="q" aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)}>
                {item.q}
                <span className="pm">+</span>
              </button>
              <div className="a"><div><p>{item.a}</p></div></div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
