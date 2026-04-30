"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InteractiveGrid from "@/components/InteractiveGrid";
import { motion, Variants } from "framer-motion";
import { 
  Zap, 
  Heart, 
  TrendingUp, 
  Users, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Mail, 
  BookOpen, 
  CheckCircle2, 
  ChevronRight,
  ClipboardCheck,
  MessageSquare,
  Search,
  Check
} from "lucide-react";
import styles from "./careers.module.css";
import PageHero from "@/components/PageHero";

const perks = [
  { 
    icon: <Zap size={24} />, 
    title: "Fast-Paced Growth", 
    desc: "Work on real-world projects across web, mobile, and modern technologies that challenge and improve your skills continuously." 
  },
  { 
    icon: <Heart size={24} />, 
    title: "People-First Culture", 
    desc: "We value balance, ownership, and respect. Every team member has a voice and the freedom to contribute ideas." 
  },
  { 
    icon: <BookOpen size={24} />, 
    title: "Learning & Development", 
    desc: "We support continuous learning through practical experience, resources, and exposure to evolving technologies." 
  },
  { 
    icon: <Users size={24} />, 
    title: "Small, Focused Team", 
    desc: "Work closely with a driven team where your contributions directly impact projects and company growth." 
  },
];

const cultureValues = [
  "We prioritize clarity over complexity",
  "We focus on building real, usable products",
  "We communicate openly and directly",
  "We value ownership and accountability",
  "We adapt quickly and improve continuously",
];

const openings = [
  {
    title: "Senior Full-Stack Engineer",
    type: "Full-Time",
    location: "Remote / Hybrid",
    skills: ["Next.js", "Node.js", "TypeScript", "PostgreSQL"],
    desc: "Build and deliver scalable full-stack applications for client projects. You will design system architecture, develop features end-to-end, and collaborate closely with the core team.",
  },
  {
    title: "AI / ML Engineer",
    type: "Full-Time",
    location: "Remote / Hybrid",
    skills: ["Python", "TensorFlow", "LLM APIs", "FastAPI"],
    desc: "Develop AI-driven features including LLM integrations, automation workflows, and data pipelines for real-world applications.",
  },
  {
    title: "UI/UX Designer",
    type: "Full-Time",
    location: "Remote / Hybrid",
    skills: ["Figma", "Prototyping", "Design Systems", "User Research"],
    desc: "Lead the design process from research and wireframes to production-ready UI for web and mobile applications.",
  },
  {
    title: "Digital Marketing Specialist",
    type: "Full-Time",
    location: "Remote / Hybrid",
    skills: ["SEO", "Google Ads", "Meta Ads", "Analytics"],
    desc: "Plan and execute performance-driven marketing campaigns across multiple channels, focusing on growth and measurable results.",
  },
  {
    title: "React Native Developer",
    type: "Full-Time",
    location: "Remote / Hybrid",
    skills: ["React Native", "TypeScript", "iOS", "Android"],
    desc: "Develop high-quality cross-platform mobile applications with a focus on performance, usability, and scalability.",
  },
];

const hiringSteps = [
  { icon: Search, title: "Application Review", desc: "We review your profile and experience." },
  { icon: MessageSquare, title: "Initial Discussion", desc: "A short conversation to understand your skills and goals." },
  { icon: ClipboardCheck, title: "Technical / Skill Evaluation", desc: "A practical task or discussion based on the role." },
  { icon: Users, title: "Final Interview", desc: "Discussion with the core team." },
  { icon: CheckCircle2, title: "Offer & Onboarding", desc: "Welcome to Gnosify." },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export default function CareersPage() {
  return (
    <main style={{ background: "var(--background)", minHeight: "100vh" }}>
      <InteractiveGrid />
      <Navbar />

      <PageHero 
        badge="Join Our Team"
        title="Be Part of Our Global Journey"
        subtitle="Be part of a growing team building real-world digital solutions across web, mobile, and emerging technologies."
        image="/careers_hero.png"
        primaryBtnText="Apply Now"
        primaryBtnLink="#positions"
        secondaryBtnText="Contact Us"
        secondaryBtnLink="/contact"
      />

      {/* 2. WHY JOIN US */}
      <section className={styles.perksSection}>
        <div className="container">
          <div className={styles.centredHeader}>
            <h2 className="section-title">Why Join <span className="gradient-text">Gnosify?</span></h2>
          </div>
          <div className={styles.perksGrid}>
            {perks.map((perk, i) => (
              <motion.div
                key={i}
                className={styles.perkCard}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: i * 0.1 }}
              >
                <div className={styles.perkIcon}>{perk.icon}</div>
                <h3>{perk.title}</h3>
                <p>{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WORK CULTURE SNAPSHOT */}
      <section className={styles.cultureSection}>
        <div className="container">
          <motion.div 
            className={styles.cultureCard}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className={styles.cultureContent}>
              <h2 className="section-title">How <span className="gradient-text">We Work</span></h2>
              <div className={styles.cultureList}>
                {cultureValues.map((v, i) => (
                  <div key={i} className={styles.cultureItem}>
                    <div className={styles.checkIcon}><Check size={18} /></div>
                    <span>{v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.cultureVisual}>
              <div className={styles.visualBadge}>
                <span>People-First Culture</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. OPEN POSITIONS */}
      <section className={styles.openingsSection} id="positions">
        <div className="container">
          <div className={styles.centredHeader}>
            <h2 className="section-title">Open <span className="gradient-text">Positions</span></h2>
          </div>
          <div className={styles.openingsList}>
            {openings.map((job, i) => (
              <motion.div
                key={i}
                className={styles.jobCard}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: i * 0.05 }}
              >
                <div className={styles.jobMain}>
                  <div className={styles.jobHeader}>
                    <h3 className={styles.jobTitle}>{job.title}</h3>
                    <div className={styles.jobMeta}>
                      <span><Clock size={14} /> {job.type}</span>
                      <span><MapPin size={14} /> {job.location}</span>
                    </div>
                  </div>
                  <p className={styles.jobDesc}>{job.desc}</p>
                  <div className={styles.jobSkills}>
                    {job.skills.map((skill, j) => (
                      <span key={j} className={styles.skillTag}>{skill}</span>
                    ))}
                  </div>
                </div>
                <div className={styles.jobActions}>
                  <a
                    href={`mailto:contact@gnosify.in?subject=Application: ${job.title}`}
                    className={styles.applyBtn}
                  >
                    Apply Now <ArrowRight size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. APPLICATION PROCESS */}
      <section className={styles.processSection}>
        <div className="container">
          <div className={styles.centredHeader}>
            <h2 className="section-title">Our Hiring <span className="gradient-text">Process</span></h2>
          </div>
          <div className={styles.processGrid}>
            {hiringSteps.map((step, i) => (
              <motion.div 
                key={i} 
                className={styles.processStep}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: i * 0.1 }}
              >
                <div className={styles.stepIconBox}>
                  <step.icon size={28} />
                  {i < hiringSteps.length - 1 && <div className={styles.stepConnector} />}
                </div>
                <div className={styles.stepContent}>
                  <span className={styles.stepNumber}>Step {i + 1}</span>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. OPEN APPLICATION */}
      <section className={styles.openApplicationSection}>
        <div className="container">
          <motion.div 
            className={styles.openApplicationCard}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className={styles.mailIconBox}>
              <Mail size={40} />
            </div>
            <div className={styles.oaContent}>
              <h3>Don&apos;t See a Matching Role?</h3>
              <p>
                We&apos;re always open to talented individuals who are passionate about building impactful 
                digital products. If you believe you can contribute to our team, we&apos;d love to hear from you.
              </p>
              <a href="mailto:contact@gnosify.in?subject=Open Application" className={styles.openBtn}>
                Send Open Application <ChevronRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. FINAL CTA SECTION */}
      <section className={styles.ctaSection}>
        <div className="container">
          <motion.div 
            className={styles.ctaCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Start Your Journey <span className="gradient-text">With Us</span></h2>
            <p>Join a team where your work matters, your ideas are valued, and your growth is supported.</p>
            <div className={styles.ctaBtns}>
              <a href="#positions" className={styles.primaryBtn}>Apply Now</a>
              <a href="/contact" className={styles.secondaryBtn}>Contact Us</a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
