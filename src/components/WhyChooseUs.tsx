"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Brain, Settings, Zap, Maximize, Users, LifeBuoy } from 'lucide-react';
import styles from './WhyChooseUs.module.css';

const fadeRightVariant: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

const features = [
  {
    title: "AI-Driven by Design",
    desc: "Intelligence is built into every solution, not added later. We build systems that naturally think and adapt.",
    icon: <Brain size={28} />
  },
  {
    title: "Truly Customized Approach",
    desc: "No templates. Every solution is tailored from scratch focusing on your unique business logic and goals.",
    icon: <Settings size={28} />
  },
  {
    title: "Fast Execution",
    desc: "Rapid agile development paired with continuous integration pipelines for swift, safe deployments.",
    icon: <Zap size={28} />
  },
  {
    title: "Built to Scale",
    desc: "Enterprise-grade architecture designed for long-term growth, fault tolerance, and absolute flexibility.",
    icon: <Maximize size={28} />
  },
  {
    title: "Hands-on Collaboration",
    desc: "We work directly with your team at every stage, maintaining total transparency of our process.",
    icon: <Users size={28} />
  },
  {
    title: "Beyond Delivery Support",
    desc: "Post-launch continuous maintenance, infrastructure upgrades, and product performance optimization.",
    icon: <LifeBuoy size={28} />
  }
];

export default function WhyChooseUs() {
  return (
    <section className={`section-padding ${styles.whySection}`} id="why-choose-us">
      <div className={`container ${styles.layout}`}>
        
        <div className={styles.stickySide}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">The Gnosify <br/><span className="gradient-text">Advantage</span></h2>
            <p className="section-subtitle" style={{ marginBottom: "2rem" }}>
              We go beyond traditional development. We combine innovation and deep understanding to build systems that scale with you.
            </p>
          </motion.div>
        </div>

        <div className={styles.scrollingSide}>
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "0px" }}
              variants={fadeRightVariant}
              className={styles.featureCard}
              style={{ '--card-top': `calc(100px + ${idx * 30}px)` } as React.CSSProperties}
            >
              <div className={styles.iconWrapper}>{feature.icon}</div>
              <div className={styles.textWrapper}>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
