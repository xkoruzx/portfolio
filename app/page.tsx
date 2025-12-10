"use client";

import { useState, useEffect } from "react";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Vault } from "@/components/Vault";
import { Footer } from "@/components/Footer";
import { ContactModal } from "@/components/ContactModal";
import { Preloader } from "@/components/Preloader";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);

  // Manage body scroll
  useEffect(() => {
    if (showPreloader) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showPreloader]);

  return (
    <main className="bg-background min-h-screen relative">
      <AnimatePresence mode="wait">
        {showPreloader && <Preloader key="preloader" onFinish={() => setShowPreloader(false)} />}
      </AnimatePresence>

      <Hero onContactClick={() => setIsContactOpen(true)} />
      <Skills />
      <Projects />
      <Experience />
      <Vault />
      <Footer />

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </main>
  );
}
