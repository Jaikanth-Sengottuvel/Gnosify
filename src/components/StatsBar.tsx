"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './StatsBar.module.css';

function CountUp({ end, suffix = '' }: { end: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);
  const [count, setCount] = useState(0);

  // Use native IntersectionObserver with the custom scroll-container as root.
  // framer-motion useInView defaults to the browser viewport, which never fires
  // when the page uses a custom overflow-y scroll container.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const root = document.querySelector('.scroll-container') as Element | null;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { root, threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let current = 0;
    const steps = 60;
    const increment = end / steps;
    const interval = 1800 / steps;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, interval);
    return () => clearInterval(timer);
  }, [started, end]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { label: 'Projects Delivered', value: 6, suffix: '+' },
  { label: 'Client Satisfaction', value: 100, suffix: '%' },
  { label: 'Years of Experience', value: 2, suffix: '+' },
  { label: 'Services Offered', value: 12, suffix: '' },
];

export default function StatsBar() {
  return (
    <section className={styles.statsSection}>
      <div className="container">
        <div className={styles.grid}>
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className={styles.statItem}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={styles.number}>
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <div className={styles.label}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
