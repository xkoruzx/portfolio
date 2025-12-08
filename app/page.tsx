"use client";

import { useState } from "react";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Vault } from "@/components/Vault";
import { Footer } from "@/components/Footer";
import { ContactModal } from "@/components/ContactModal";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);

  return (
    <main className="min-h-screen bg-background text-text-main font-body selection:bg-primary/30 selection:text-white pb-20">
      <Navbar onContactClick={openContact} />
      <Hero onContactClick={openContact} />
      <Skills />
      <Projects />
      <Experience />
      <Vault />
      <Footer />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </main>
  );
}
