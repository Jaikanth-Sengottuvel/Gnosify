"use client";

import React, { useRef } from 'react';
import { motion, Variants } from 'framer-motion';
import styles from './Services.module.css';
import { 
  Rocket, 
  Layers, 
  Target, 
  Cpu, 
  Shield, 
  BarChart3,
  ArrowRight
} from 'lucide-react';

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

// ── NEW HOME-SPECIFIC CAPABILITIES (Different from the 12 detailed services) ──────────────────
const capabilities = [
  {
    title: "Next-Gen Product Development",
    desc: "We engineer high-performance web and mobile applications designed to scale. From architecture to deployment, we build products that last.",
    icon: <Rocket size={48} />,
    number: "01"
  },
  {
    title: "User-Centric UI/UX Design",
    desc: "Our design philosophy centers on user experience. We create intuitive, stunning interfaces that drive engagement and improve conversion rates.",
    icon: <Layers size={48} />,
    number: "02"
  },
  {
    title: "AI-Powered Business Automation",
    desc: "Transform your workflows with custom AI solutions. We integrate intelligent automation and LLMs to increase efficiency and reduce manual effort.",
    icon: <Cpu size={48} />,
    number: "03"
  },
  {
    title: "Data-Driven Digital Strategy",
    desc: "Scale your brand with performance marketing and SEO. We use data analytics to build strategies that put you ahead of the competition.",
    icon: <Target size={48} />,
    number: "04"
  },
  {
    title: "Secure Enterprise Infrastructure",
    desc: "Robust hosting and cloud solutions with 24/7 monitoring. We ensure your digital assets are safe, fast, and always accessible.",
    icon: <Shield size={48} />,
    number: "05"
  },
  {
    title: "Scalable E-Commerce Ecosystems",
    desc: "Building the future of online retail. We develop feature-rich, secure e-commerce stores optimized for speed and seamless transactions.",
    icon: <BarChart3 size={48} />,
    number: "06"
  }
];

type Capability = typeof capabilities[0];

function CapabilityCard({ capability, variants }: { capability: Capability; variants: Variants }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const isFlipping = useRef(false);
  const currentY = useRef(0);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isFlipping.current || !cardRef.current || !iconRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const fromLeft = e.clientX < rect.left + rect.width / 2;
    const flipDelta = fromLeft ? 360 : -360;
    const target = currentY.current + flipDelta;

    isFlipping.current = true;

    iconRef.current.animate(
      [
        { transform: `perspective(600px) rotateY(${currentY.current}deg)` },
        { transform: `perspective(600px) rotateY(${target}deg)` },
      ],
      { duration: 600, easing: "ease-in-out", fill: "forwards" }
    ).onfinish = () => {
      currentY.current = target % 360;
      isFlipping.current = false;
    };
  };

  return (
    <motion.div
      ref={cardRef}
      variants={variants}
      className={styles.card}
      onMouseEnter={handleMouseEnter}
    >
      <span className={styles.cardNumber}>{capability.number}</span>

      <div ref={iconRef} className={styles.iconWrapper} style={{ display: 'inline-block' }}>
        {capability.icon}
      </div>

      <h3>{capability.title}</h3>
      <p>{capability.desc}</p>
      
      <a href="/services" className={styles.readMore}>
        Explore Expertise <ArrowRight size={16} />
      </a>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section className={`section-padding ${styles.servicesSection}`} id="services">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px" }}
          variants={fadeUpVariant}
          className={styles.intro}
        >
          <h2 className="section-title">Core <span className="gradient-text">Capabilities</span></h2>
          <p className="section-subtitle">
            We combine engineering excellence with creative strategy to deliver high-impact digital solutions that empower businesses to lead.
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {capabilities.map((cap, index) => (
            <CapabilityCard key={index} capability={cap} variants={fadeUpVariant} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
