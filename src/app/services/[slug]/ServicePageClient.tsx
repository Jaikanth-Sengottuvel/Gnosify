"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InteractiveGrid from "@/components/InteractiveGrid";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, ChevronDown } from "lucide-react";
import type { ServiceData } from "@/lib/services-data";
import { servicesData } from "@/lib/services-data";
import Link from "next/link";
import { useState } from "react";
import styles from "./service.module.css";

export default function ServicePageClient({ service }: { service: ServiceData }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main style={{ background: "var(--background)", minHeight: "100vh" }}>
      <InteractiveGrid />
      <Navbar />

      {/* Hero */}
      <section className={styles.hero} style={{ "--accent": service.accentColor } as React.CSSProperties}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href="/services" className={styles.breadcrumb}>
              ← All Services
            </Link>
            <h1 className={styles.heroTitle}>{service.title}</h1>
            <p className={styles.heroTagline}>{service.tagline}</p>
            <p className={styles.heroDesc}>{service.description}</p>
            <a href="/contact" className={styles.heroBtn}>
              Get a Free Consultation <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className={styles.featuresSection}>
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            What&apos;s <span className="gradient-text">Included</span>
          </motion.h2>
          <div className={styles.featuresGrid}>
            {service.features.map((f, i) => (
              <motion.div
                key={i}
                className={styles.featureCard}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <CheckCircle2 size={22} className={styles.featureIcon} style={{ color: service.accentColor }} />
                <div>
                  <h3 className={styles.featureName}>{f.title}</h3>
                  <p className={styles.featureDesc}>{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className={styles.processSection}>
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            How We <span className="gradient-text">Work</span>
          </motion.h2>
          <div className={styles.processSteps}>
            {service.process.map((step, i) => (
              <motion.div
                key={i}
                className={styles.stepCard}
                initial={{ opacity: 0, x: -32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className={styles.stepNumber} style={{ background: service.accentColor }}>
                  {step.step}
                </div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className={styles.faqSection}>
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Common <span className="gradient-text">Questions</span>
          </motion.h2>
          <div className={styles.faqList}>
            {service.faqs.map((faq, i) => (
              <motion.div
                key={i}
                className={styles.faqItem}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <button
                  className={styles.faqQ}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={20}
                    style={{
                      transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                      flexShrink: 0,
                    }}
                  />
                </button>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className={styles.faqA}
                  >
                    {faq.a}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className={styles.otherSection}>
        <div className="container">
          <h2 className="section-title">
            Explore Other <span className="gradient-text">Services</span>
          </h2>
          <div className={styles.otherGrid}>
            {servicesData
              .filter((s) => s.slug !== service.slug)
              .slice(0, 4)
              .map((s, i) => (
                <Link href={`/services/${s.slug}`} key={i} className={styles.otherCard}>
                  <span className={styles.otherTitle}>{s.title}</span>
                  <ArrowRight size={16} className={styles.otherArrow} />
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaBanner}>
        <div className="container">
          <motion.div
            className={styles.ctaInner}
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2>Ready to get started with <span className="gradient-text">{service.title}?</span></h2>
            <p>Tell us about your project and we&apos;ll design the perfect solution for you.</p>
            <a href="/contact" className={styles.ctaBtn}>
              Get a Free Consultation <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
