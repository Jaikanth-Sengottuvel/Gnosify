"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Target, Lightbulb, Sparkles } from 'lucide-react';
import styles from './AboutUs.module.css';

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function AboutUs() {
  const coreValues = ["Innovation", "Excellence", "Transparency", "Client Success", "Continuous Learning", "Agility"];

  return (
    <section className={`section-padding ${styles.aboutSection}`} id="about">
      <div className="container">
        <motion.div 
          className={styles.intro}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px" }}
          variants={fadeUpVariant}
        >
          <h2 className="section-title">Who We <span className="gradient-text">Are</span></h2>
          <p className="section-subtitle" style={{ maxWidth: '800px', fontSize: '1.4rem' }}>
            Gnosify is an AI-first digital solutions company focused on building innovative, scalable, and high-performance technology products. We help startups, businesses, and enterprises turn ideas into impactful digital solutions using cutting-edge technologies.
          </p>
        </motion.div>

        <motion.div 
          className={styles.bentoGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUpVariant} className={`${styles.bentoItem} ${styles.missionCard}`}>
            <div className={styles.cardHeader}>
              <div className={styles.iconBox}><Target size={26} /></div>
              <h3>Our Mission</h3>
            </div>
            <p>To empower businesses globally with intelligent, rigorously scalable, and future-ready digital solutions that shatter technological boundaries.</p>
          </motion.div>

          <motion.div variants={fadeUpVariant} className={`${styles.bentoItem} ${styles.visionCard}`}>
            <div className={styles.cardHeader}>
              <div className={styles.iconBox}><Lightbulb size={26} /></div>
              <h3>Our Vision</h3>
            </div>
            <p>To become a definitive global leader in AI-powered software engineering and enterprise digital transformation.</p>
          </motion.div>

          <motion.div variants={fadeUpVariant} className={`${styles.bentoItem} ${styles.valuesCard}`}>
            <div className={styles.cardHeader}>
              <div className={styles.iconBox}><Sparkles size={26} /></div>
              <h3>Core Values</h3>
            </div>
            <ul className={styles.valuesList}>
              {coreValues.map((value, i) => (
                <motion.li 
                  key={i} 
                  className={styles.valueBadge}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {value}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
