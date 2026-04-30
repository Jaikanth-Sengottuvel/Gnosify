"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);
const XIcon = () => (
  <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);
import styles from './Team.module.css';

const team = [
  {
    name: 'Rohan Verma',
    role: 'Founder & CEO',
    bio: 'Full-stack architect and AI enthusiast with 8+ years building scalable products for startups and enterprises across 3 continents.',
    initials: 'RV',
    color: '#1B5780',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Priya Nair',
    role: 'Head of Engineering',
    bio: 'Ex-Google engineer specializing in cloud-native architectures and high-performance distributed systems. TypeScript and Python expert.',
    initials: 'PN',
    color: '#4EB5D0',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Aditya Sharma',
    role: 'AI & ML Lead',
    bio: 'Machine learning researcher turned product builder. Led AI integrations for Fortune 500 companies before joining Gnosify.',
    initials: 'AS',
    color: '#0c8a6e',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Sneha Iyer',
    role: 'Head of Design',
    bio: 'Award-winning UX designer focused on creating intuitive digital experiences that convert visitors into loyal customers.',
    initials: 'SI',
    color: '#7c3aed',
    linkedin: '#',
    twitter: '#',
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Team() {
  return (
    <section className={styles.teamSection}>
      <div className="container">
        <motion.div
          className={styles.intro}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <h2 className="section-title">
            The People Behind <span className="gradient-text">Gnosify</span>
          </h2>
          <p className="section-subtitle">
            A tight-knit team of engineers, designers, and strategists obsessed with building things that work.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {team.map((member, i) => (
            <motion.div
              key={i}
              className={styles.card}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ delay: i * 0.1 } as any}
            >
              <div
                className={styles.avatar}
                style={{ background: `linear-gradient(135deg, ${member.color}, ${member.color}cc)` }}
              >
                {member.initials}
              </div>
              <div className={styles.info}>
                <h3 className={styles.name}>{member.name}</h3>
                <span className={styles.role}>{member.role}</span>
                <p className={styles.bio}>{member.bio}</p>
                <div className={styles.socials}>
                  <a href={member.linkedin} aria-label="LinkedIn" className={styles.socialLink}>
                    <LinkedinIcon />
                  </a>
                  <a href={member.twitter} aria-label="X" className={styles.socialLink}>
                    <XIcon />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
