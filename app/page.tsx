"use client";
import { useState, useEffect } from "react";
import LoadingScreen from "@/components/canvas/LoadingScreen";
import Navigation from "@/components/layout/Navigation";
import Hero from "@/components/sections/Hero";
import Works from "@/components/sections/Works";
import Command from "@/components/sections/Command";
import Fingerprint from "@/components/sections/Fingerprint";
import Weight from "@/components/sections/Weight";
import Connect from "@/components/sections/Connect";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 2600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen isVisible={!loaded} />
      <Navigation />
      <main>
        <Hero />
        <Works />
        <Fingerprint />
        <Command />
        <Weight />
        <Connect />
      </main>
    </>
  );
}


