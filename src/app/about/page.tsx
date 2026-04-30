"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InteractiveGrid from "@/components/InteractiveGrid";
import { motion, Variants } from "framer-motion";
import { 
  Target, 
  Lightbulb, 
  Sparkles, 
  ArrowRight, 
  Rocket, 
  ShieldCheck, 
  Users, 
  Zap, 
  Search, 
  Code2, 
  Layout, 
  Smartphone, 
  Bot, 
  TrendingUp, 
  Settings,
  CheckCircle2
} from "lucide-react";
import styles from "./about.module.css";
import PageHero from "@/components/PageHero";

const coreValues = [
  { icon: Sparkles, title: "Innovation", desc: "We continuously improve and explore new solutions" },
  { icon: Target, title: "Excellence", desc: "We focus on quality and performance" },
  { icon: Users, title: "Transparency", desc: "Clear and honest communication" },
  { icon: TrendingUp, title: "Client Success", desc: "Your growth is our goal" },
  { icon: Lightbulb, title: "Continuous Learning", desc: "We evolve with technology" },
  { icon: Zap, title: "Agility", desc: "Fast and adaptive execution" },
];

const services = [
  { icon: Code2, title: "Web Development" },
  { icon: Layout, title: "UI/UX Design" },
  { icon: Smartphone, title: "Mobile Apps" },
  { icon: Bot, title: "AI & Automation" },
  { icon: Search, title: "SEO & Digital Marketing" },
  { icon: Settings, title: "Custom Software" },
];

const processSteps = [
  { number: "01", title: "Discover", desc: "Understand business goals" },
  { number: "02", title: "Plan", desc: "Strategy and architecture" },
  { number: "03", title: "Build", desc: "Develop scalable solution" },
  { number: "04", title: "Launch", desc: "Deploy and optimize" },
  { number: "05", title: "Support", desc: "Continuous improvement" },
];

const stats = [
  { value: "6+", label: "Projects Delivered" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "2+", label: "Years Team Experience" },
  { value: "12", label: "Services Offered" },
];

const differentiators = [
  "Practical and scalable solutions",
  "Focus on real business outcomes",
  "Clean development approach",
  "Transparent communication",
  "Long-term support",
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export default function AboutPage() {
  return (
    <main style={{ background: "var(--background)", minHeight: "100vh" }}>
      <InteractiveGrid />
      <Navbar />

      <PageHero 
        badge="Who We Are"
        title="Building Digital Solutions That Drive Real Growth"
        subtitle="Gnosify is a modern digital solutions company focused on building scalable, high-performance websites, applications, and intelligent systems for startups and growing businesses."
        image="/about_team.png"
      />

      {/* 2. COMPANY INTRO (Split Layout) */}
      <section className={styles.introSection}>
        <div className={`container ${styles.splitGrid}`}>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.introText}
          >
            <span className={styles.sectionLabel}>About Gnosify</span>
            <h2 className="section-title">Founded to <span className="gradient-text">Empower</span> Businesses</h2>
            <p>
              Founded in May 2026, Gnosify helps businesses turn ideas into reliable digital products using modern 
              technologies and structured development approaches.
            </p>
            <p>
              We focus on building solutions that are not just visually appealing, but scalable, efficient, 
              and built for real-world performance.
            </p>
          </motion.div>
          <motion.div 
            className={styles.introVisual}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className={styles.visualBox}>
              <div className={styles.floatingCard}>
                <Rocket className={styles.icon} />
                <span>Next-Gen Tech</span>
              </div>
              <img src="/about_team.png" alt="Team collaborating" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. MISSION & VISION */}
      <section className={styles.mvSection}>
        <div className="container">
          <div className={styles.mvGrid}>
            <motion.div 
              className={styles.mvCard}
              whileHover={{ y: -10 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className={styles.iconBox}><Target size={32} /></div>
              <h3>Our Mission</h3>
              <p>To help businesses grow through scalable and reliable digital solutions.</p>
            </motion.div>
            <motion.div 
              className={styles.mvCard}
              whileHover={{ y: -10 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
            >
              <div className={styles.iconBox}><Lightbulb size={32} /></div>
              <h3>Our Vision</h3>
              <p>To become a trusted technology partner by delivering impactful digital products.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. CORE VALUES */}
      <section className={styles.valuesSection}>
        <div className="container">
          <div className={styles.centredHeader}>
            <h2 className="section-title">Our <span className="gradient-text">Core Values</span></h2>
            <p className="section-subtitle">The principles that guide our work and relationships.</p>
          </div>
          <div className={styles.valuesGrid}>
            {coreValues.map((v, i) => (
              <motion.div 
                key={i} 
                className={styles.valueCard}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: i * 0.05 }}
              >
                <v.icon size={28} className={styles.vIcon} />
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. OUR JOURNEY */}
      <section className={styles.journeySection}>
        <div className="container">
          <motion.div 
            className={styles.journeyContent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="section-title">Our <span className="gradient-text">Journey</span></h2>
            <div className={styles.journeyText}>
              <p>
                Gnosify was founded in 2026 with a clear goal — to bridge the gap between business ideas and 
                practical technology execution. We started by working with startups and small businesses, 
                focusing on delivering reliable websites and applications.
              </p>
              <p>
                As we grew, we expanded into AI-based automation, custom software, and digital marketing — 
                allowing us to provide complete end-to-end solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. WHAT WE DO */}
      <section className={styles.wwdSection}>
        <div className="container">
          <div className={styles.centredHeader}>
            <h2 className="section-title">What <span className="gradient-text">We Do</span></h2>
            <p className="section-subtitle">We provide complete digital solutions to help businesses grow and scale.</p>
          </div>
          <div className={styles.wwdGrid}>
            {services.map((s, i) => (
              <motion.div 
                key={i} 
                className={styles.wwdItem}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: i * 0.05 }}
              >
                <s.icon size={20} />
                <span>{s.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PROCESS SECTION */}
      <section className={styles.processSection}>
        <div className="container">
          <h2 className={`section-title ${styles.centredHeader}`}>Our <span className="gradient-text">Process</span></h2>
          <div className={styles.processGrid}>
            {processSteps.map((step, i) => (
              <motion.div 
                key={i} 
                className={styles.processStep}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: i * 0.1 }}
              >
                <div className={styles.stepHeader}>
                  <span className={styles.stepNumber}>{step.number}</span>
                  {i < processSteps.length - 1 && <div className={styles.stepLine} />}
                </div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. STATS SECTION */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map((s, i) => (
              <motion.div 
                key={i} 
                className={styles.statItem}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className={styles.statValue}>{s.value}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. WHY CHOOSE US */}
      <section className={styles.whySection}>
        <div className="container">
          <div className={styles.splitGrid}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="section-title">Why <span className="gradient-text">Choose Us</span></h2>
              <div className={styles.checklist}>
                {differentiators.map((d, i) => (
                  <div key={i} className={styles.checkItem}>
                    <CheckCircle2 size={20} className={styles.checkIcon} />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className={styles.whyVisual}>
              <div className={styles.trustBadge}>
                <ShieldCheck size={40} />
                <span>Trusted Partner</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CTA SECTION */}
      <section className={styles.ctaSection}>
        <div className="container">
          <motion.div 
            className={styles.ctaCard}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2>Let’s Build Something <span className="gradient-text">Great Together</span></h2>
            <p>Whether you're starting or scaling, we help you move forward with confidence.</p>
            <a href="/contact" className={styles.primaryBtn}>Get a Quote <ArrowRight size={18} /></a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
