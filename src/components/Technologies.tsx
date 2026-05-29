"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Technologies.module.css';

// All icons from devicons CDN — true original brand colours
const techs = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", category: "frontend" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", category: "frontend" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", category: "frontend" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", category: "frontend" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", category: "backend" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", category: "backend" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", category: "devops" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", category: "devops" },
  { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg", category: "devops" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", category: "backend" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", category: "backend" },
  { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg", category: "backend" },
  { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg", category: "ai-design" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg", category: "ai-design" },
  { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg", category: "backend" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", category: "frontend" },
  { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg", category: "devops" },
  { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg", category: "backend" },
  { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg", category: "devops" },
  { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg", category: "backend" },
  { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg", category: "ai-design" },
];

const Row = ({ items, direction }: { items: typeof techs; direction: "left" | "right" }) => (
  <motion.div
    className={styles.slideTrack}
    animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
    transition={{ ease: "linear", duration: 40, repeat: Infinity }}
  >
    {[...items, ...items, ...items, ...items].map((tech, i) => (
      <div key={i} className={styles.techItem}>
        <img
          src={tech.icon}
          alt={`${tech.name} icon`}
          width="32"
          height="32"
          style={{ objectFit: "contain", display: "block" }}
        />
        {tech.name}
      </div>
    ))}
  </motion.div>
);

export default function Technologies() {
  const half = Math.ceil(techs.length / 2);
  const row1 = techs.slice(0, half);
  const row2 = [...techs].slice(half, techs.length).reverse();
  const [activeTab, setActiveTab] = useState<string>("all");

  const categories = [
    { id: "all", label: "All" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "devops", label: "DevOps" },
    { id: "ai-design", label: "AI & Design" },
  ];

  const filteredTechs = activeTab === "all"
    ? techs
    : techs.filter(tech => tech.category === activeTab);

  return (
    <section className={styles.techSection}>
      <div className="container">
        <motion.div
          className={styles.intro}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="section-title">
            Technologies We <span className="gradient-text">Master</span>
          </h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            Cutting-edge tools powering our intelligent digital solutions.
          </motion.p>
        </motion.div>
      </div>

      {/* Desktop slider - hidden on mobile via CSS */}
      <div className={styles.desktopSlider}>
        <div className={styles.slider}>
          <Row items={row1} direction="left" />
          <Row items={row2} direction="right" />
        </div>
      </div>

      {/* Mobile interactive grid - hidden on desktop via CSS */}
      <div className={styles.mobileGrid}>
        <div className={styles.tabsContainer}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`${styles.tabBtn} ${activeTab === cat.id ? styles.activeTab : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <motion.div 
          layout 
          className={styles.gridContainer}
        >
          <AnimatePresence mode="popLayout">
            {filteredTechs.map((tech) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                key={tech.name}
                className={styles.mobileTechItem}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={tech.icon}
                  alt={`${tech.name} icon`}
                  width="28"
                  height="28"
                  style={{ objectFit: "contain", display: "block" }}
                />
                <span className={styles.mobileTechName}>{tech.name}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

