"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import styles from './PortfolioPreview.module.css';

const projects = [
  {
    name: 'TechLaunch Platform',
    category: 'AI SaaS Product',
    description: 'A full-scale AI-powered SaaS platform with intelligent analytics dashboard, automated reporting, and real-time collaboration features built for a Series-A startup.',
    tags: ['Next.js', 'Python', 'TensorFlow', 'PostgreSQL'],
    color: '#1B5780',
    result: '3x faster time-to-insight',
  },
  {
    name: 'RetailPro E-Commerce',
    category: 'E-Commerce Platform',
    description: 'Custom e-commerce platform with AI-driven product recommendations, inventory automation, and multi-payment gateway integration processing 10,000+ daily orders.',
    tags: ['React', 'Node.js', 'MongoDB', 'AWS'],
    color: '#4EB5D0',
    result: '40% increase in conversions',
  },
  {
    name: 'HealthBridge App',
    category: 'Healthcare Automation',
    description: 'End-to-end healthcare workflow automation system with patient management, appointment scheduling, automated billing, and HIPAA-compliant data pipelines.',
    tags: ['TypeScript', 'Docker', 'PostgreSQL', 'GraphQL'],
    color: '#0f3a5a',
    result: '70% reduction in manual work',
  },
  {
    name: 'ShopNest Mobile App',
    category: 'Mobile Application',
    description: 'Cross-platform iOS and Android shopping app with AR try-on, real-time inventory sync, and personalised AI recommendations — 4.8 stars on both app stores.',
    tags: ['React Native', 'Node.js', 'AWS', 'AI/ML'],
    color: '#0c8a6e',
    result: '4.8 ★ on App Store & Play Store',
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function PortfolioPreview() {
  return (
    <section className={`section-padding ${styles.portfolioSection}`} id="portfolio">
      <div className="container">
        <motion.div
          className={styles.intro}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <h2 className="section-title">
            Our <span className="gradient-text">Work</span>
          </h2>
          <p className="section-subtitle">
            Real projects, real results. A glimpse into what we've built for our clients.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className={styles.card}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeUp}
              transition={{ delay: i * 0.1 } as any}
              style={{ '--accent': project.color } as React.CSSProperties}
            >
              <div className={styles.cardTop}>
                <div className={styles.category}>{project.category}</div>
                <ArrowUpRight size={20} className={styles.arrow} />
              </div>
              <h3 className={styles.name}>{project.name}</h3>
              <p className={styles.description}>{project.description}</p>
              <div className={styles.result}>
                <span className={styles.resultBadge}>✦ {project.result}</span>
              </div>
              <div className={styles.tags}>
                {project.tags.map((tag, j) => (
                  <span key={j} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href="/contact" className={styles.ctaBtn}>
            Start Your Project <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
