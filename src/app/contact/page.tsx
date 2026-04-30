"use client";

import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import InteractiveGrid from "@/components/InteractiveGrid";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";

export default function ContactPage() {
  return (
    <main style={{ background: 'var(--background)', minHeight: '100vh' }}>
      <InteractiveGrid />
      <Navbar />
      <PageHero 
        badge="Contact Us"
        title="Let's Build Something Great Together"
        subtitle="Have a project in mind? We'd love to hear from you. Our team is ready to help you navigate your digital transformation journey."
        image="/contact_hero.png"
      />
      <div className="container" style={{ paddingBottom: '100px' }}>
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <CTA />
        </motion.div>
      </div>
      <Footer />
    </main>
  );
}
