"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import styles from './PageHero.module.css';
import WaterButton from './WaterButton';
import Link from 'next/link';

interface PageHeroProps {
  title: string;
  subtitle: string;
  image: string;
  badge?: string;
  primaryBtnText?: string;
  primaryBtnLink?: string;
  secondaryBtnText?: string;
  secondaryBtnLink?: string;
}

export default function PageHero({
  title,
  subtitle,
  image,
  badge,
  primaryBtnText = "Get a Quote",
  primaryBtnLink = "/contact",
  secondaryBtnText = "View Services",
  secondaryBtnLink = "/services"
}: PageHeroProps) {
  
  const titleVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const paragraphVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.bgWrapper}>
        <div className={styles.gridOverlay}></div>
        <div className={styles.blob1}></div>
        <div className={styles.blob2}></div>
      </div>
      
      <div className={`container ${styles.contentContainer}`}>
        <div className={styles.textContent}>
          {badge && (
            <motion.span 
              className={styles.badge}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {badge}
            </motion.span>
          )}
          
          <div className={styles.titleWrapper}>
            <motion.h1 
              variants={titleVariants}
              initial="hidden"
              animate="visible"
            >
              {title.split(" ").map((word, i) => (
                ["Digital", "Innovation", "Intelligence", "Success", "Services", "Growth", "Future", "Ahead", "Great", "Solutions"].includes(word.replace(/[^a-zA-Z]/g, "")) ? 
                <span key={i} className="gradient-text">{word} </span> : 
                <span key={i}>{word} </span>
              ))}
            </motion.h1>
          </div>

          <motion.p 
            variants={paragraphVariants}
            initial="hidden"
            animate="visible"
          >
            {subtitle}
          </motion.p>

          <motion.div 
            className={styles.buttonGroup}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Link href={primaryBtnLink}>
              <WaterButton variant="primary">{primaryBtnText}</WaterButton>
            </Link>
            <Link href={secondaryBtnLink}>
              <WaterButton variant="secondary">{secondaryBtnText}</WaterButton>
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className={styles.fullRightImage}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <img 
          src={image} 
          alt={title} 
        />
      </motion.div>
    </section>
  );
}
