"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './ServiceOverview.module.css';
import { Globe, TrendingUp, Cpu } from 'lucide-react';

interface OverviewProps {
  title: string;
  subtitle: string;
  description: string;
  icon: 'web' | 'marketing' | 'ai';
  id: string;
}

const icons = {
  web: <Globe size={180} />,
  marketing: <TrendingUp size={180} />,
  ai: <Cpu size={180} />,
};

export default function ServiceOverview({ title, subtitle, description, icon, id }: OverviewProps) {
  return (
    <section className={styles.overviewSection} id={id}>
      <div className={`container ${styles.content}`}>
        <motion.div 
          className={styles.textContent}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className={styles.category}>{title}</div>
          <h2 className={styles.mainTitle}>
            {subtitle.split(" ").map((word, i) => (
              ["Scalable", "Digital", "Data-Driven", "Visibility", "Intelligent", "Operations", "Smarter"].includes(word) ? 
              <span key={i} className="gradient-text">{word} </span> : 
              <span key={i}>{word} </span>
            ))}
          </h2>
          <p className={styles.description}>{description}</p>
          
          <div className={styles.badges}>
            <span className={styles.badge}>Innovative</span>
            <span className={styles.badge}>Scalable</span>
            <span className={styles.badge}>Efficient</span>
          </div>
        </motion.div>

        <motion.div 
          className={styles.visualContent}
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className={styles.iconWrapper}>
            {icons[icon]}
            <div className={styles.glow}></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
