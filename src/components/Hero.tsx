"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import styles from './Hero.module.css';
import WaterButton from './WaterButton';

const slides = [
  {
    title: "Build Smarter. Scale Faster.",
    subtitle: "Gnosify delivers AI-powered websites, automation, and digital solutions that cut costs, attract customers, and help your business grow — faster than you thought possible."
  },
  {
    title: "Your Digital Growth Partner",
    subtitle: "From custom web applications to intelligent AI automation, we turn your vision into a high-performance product — built for results, not just aesthetics."
  },
  {
    title: "AI-Driven Digital Innovation",
    subtitle: "We combine deep technical expertise with an AI-first mindset to build scalable, future-proof solutions for startups and growing businesses across India."
  }
];

const GRADIENT_WORDS = ["Smarter.", "Faster.", "Digital", "AI-Driven", "Growth"];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const titleVariants: Variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, x: 100, transition: { duration: 0.5, ease: "easeInOut" } }
  };

  const paragraphVariants: Variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, x: 100, transition: { duration: 0.4, ease: "easeInOut" } }
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
          <div className={styles.sliderContainer}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                className={styles.slideText}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className={styles.titleWrapper}>
                  <motion.h1 variants={titleVariants}>
                    {slides[currentSlide].title.split(" ").map((word, i) => (
                      GRADIENT_WORDS.includes(word)
                        ? <span key={i} className="gradient-text">{word} </span>
                        : <span key={i}>{word} </span>
                    ))}
                  </motion.h1>
                </div>
                <motion.p variants={paragraphVariants}>
                  {slides[currentSlide].subtitle}
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div
            className={styles.buttonGroup}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <WaterButton variant="primary">Our Services</WaterButton>
            <WaterButton variant="secondary">Contact Us</WaterButton>
          </motion.div>
        </div>
      </div>

      <motion.div
        className={styles.fullRightImage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero5.png"
          alt="Gnosify IT Consulting Team"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </motion.div>
    </section>
  );
}
