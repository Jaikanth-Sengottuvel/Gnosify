"use client";

import Navbar from "@/components/Navbar";
import ServicesList from "@/components/ServicesList";
import Footer from "@/components/Footer";
import InteractiveGrid from "@/components/InteractiveGrid";
import PageHero from "@/components/PageHero";

export default function ServicesPage() {
  return (
    <main style={{ background: 'var(--background)' }}>
      <InteractiveGrid />
      <Navbar />
      <PageHero 
        badge="Our Expertise"
        title="Scaling Your Business with Future-Proof Digital Solutions"
        subtitle="From custom web applications to intelligent AI automation, we provide the technical expertise to turn your vision into a high-performance reality."
        image="/services_hero.png"
      />
      <ServicesList />
      <Footer />
    </main>
  );
}
