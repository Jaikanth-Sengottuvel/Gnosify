"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: 'Aryan Mehta',
    role: 'Founder, TechLaunch India',
    text: "Gnosify transformed our startup's digital presence completely. Their AI-first approach delivered a product that scaled effortlessly from day one. The team was incredibly responsive and invested in our success.",
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'CEO, RetailPro Solutions',
    text: "Our e-commerce platform was built with incredible attention to detail. Sales increased by 40% within the first 3 months post-launch. Gnosify delivered beyond what we expected — highly recommend them.",
    rating: 5,
  },
  {
    name: 'Ravi Nair',
    role: 'Director, HealthBridge Technologies',
    text: "The automation solution Gnosify built cut our manual processing time by 70%. Their team is highly skilled, transparent about their process, and genuinely invested in your business outcomes.",
    rating: 5,
  },
  {
    name: 'Neha Gupta',
    role: 'Marketing Head, EduSpark',
    text: "Brilliant SEO and digital marketing strategy. We went from page 4 to page 1 on Google in under 90 days. Organic traffic tripled and our lead quality improved dramatically. Exceptional results.",
    rating: 5,
  },
  {
    name: 'Sameer Joshi',
    role: 'CTO, FinVault Technologies',
    text: "Gnosify's custom software solution integrated seamlessly with our existing systems. Zero downtime migration, clean architecture, and their post-launch support has been outstanding throughout.",
    rating: 5,
  },
  {
    name: 'Kavya Reddy',
    role: 'Co-Founder, ShopNest',
    text: "The mobile app they built has a 4.8-star rating on both app stores. The UX is flawless and the performance is rock solid even under heavy load. Couldn't be more satisfied.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const visible = [
    testimonials[current],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ];

  return (
    <section className={`section-padding ${styles.testimonialsSection}`} id="testimonials">
      <div className="container">
        <motion.div
          className={styles.intro}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="section-title">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="section-subtitle">
            Real results from real businesses. Here's what our clients have to say about working with Gnosify.
          </p>
        </motion.div>

        <div className={styles.carouselWrapper}>
          <div className={styles.cards}>
            <AnimatePresence mode="popLayout">
              {visible.map((t, i) => (
                <motion.div
                  key={`${current}-${i}`}
                  className={`${styles.card} ${i === 0 ? styles.featured : ''}`}
                  initial={{ opacity: 0, x: 60, scale: 0.96 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -60, scale: 0.96 }}
                  transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Quote size={28} className={styles.quoteIcon} />
                  <p className={styles.text}>{t.text}</p>
                  <div className={styles.stars}>
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <div className={styles.author}>
                    <div className={styles.avatar}>
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className={styles.name}>{t.name}</div>
                      <div className={styles.role}>{t.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className={styles.controls}>
            <button className={styles.btn} onClick={prev} aria-label="Previous">
              <ChevronLeft size={22} />
            </button>
            <div className={styles.dots}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button className={styles.btn} onClick={next} aria-label="Next">
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
