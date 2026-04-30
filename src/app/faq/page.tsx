"use client";

import Navbar from "@/components/Navbar";
import DetailedFAQ from "@/components/DetailedFAQ";
import Footer from "@/components/Footer";
import InteractiveGrid from "@/components/InteractiveGrid";

export default function FAQPage() {
  return (
    <main style={{ background: 'var(--background)' }}>
      <InteractiveGrid />
      <Navbar />
      <DetailedFAQ />
      <Footer />
    </main>
  );
}
