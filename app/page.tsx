"use client";
import { useState, useEffect } from "react";
import LoadingScreen from "@/components/canvas/LoadingScreen";
import BackgroundFX from "@/components/canvas/BackgroundFX";
import Navigation from "@/components/layout/Navigation";
import Hero from "@/components/sections/Hero";
import Tapes from "@/components/ui/Tapes";
import Cursor from "@/components/canvas/Cursor";
import About, { StatsBand } from "@/components/sections/About";
import Works from "@/components/sections/Works";
import Fingerprint from "@/components/sections/Fingerprint";
import Command from "@/components/sections/Command";
import Weight from "@/components/sections/Weight";
import FAQ from "@/components/sections/FAQ";
import Freelance from "@/components/sections/Freelance";
import WhatsAppBubble from "@/components/ui/WhatsAppBubble";
import Connect from "@/components/sections/Connect";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen isVisible={!loaded} />
      <BackgroundFX />
      <Cursor />
      <Navigation />
      <main>
        <Hero />
        <Tapes />
        <StatsBand />
        <Works />
        <About />
        <Fingerprint />
        <Command />
        <Weight />
        <Freelance />
        <FAQ />
        <Connect />
      </main>
      <WhatsAppBubble />
    </>
  );
}
