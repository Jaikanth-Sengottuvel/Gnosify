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
    desc: "Intelligence is baked into every layer — not bolted on later. Our AI integrations reduce manual work by up to 70%, so your team can focus on what actually grows your business.",
    icon: <Brain size={28} />
  },
  {
    title: "100% Custom — Zero Templates",
    desc: "Every line of code is written for your business. No off-the-shelf themes, no bloated page builders — just clean, purpose-built solutions that outperform generic alternatives.",
    icon: <Settings size={28} />
  },
  {
    title: "Fast Delivery, No Surprises",
    desc: "We ship production-ready features in 2–4 week sprints with daily updates. Clear timelines, no scope creep, and CI/CD pipelines that make deployments a non-event.",
    icon: <Zap size={28} />
  },
  {
    title: "Built for 10x Growth",
    desc: "Our architecture handles traffic spikes, product pivots, and scale-ups without rewrites. Clients have grown 10x user volume with zero unplanned downtime.",
    icon: <Maximize size={28} />
  },
  {
    title: "Direct Team Collaboration",
    desc: "You talk to the engineers building your product — no account managers in between. Weekly calls, shared dashboards, and 100% transparent progress tracking throughout.",
    icon: <Users size={28} />
  },
  {
    title: "Lifetime Support Commitment",
    desc: "Our relationship does not end at go-live. We provide proactive monitoring, security patches, and performance optimizations — with a guaranteed 24-hour response SLA.",
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
