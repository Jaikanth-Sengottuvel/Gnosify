"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import {
  Code2, Palette, TrendingUp, ShoppingCart,
  Laptop, Search, Share2, Smartphone,
  Bot, Gauge, Server, ShieldCheck,
  ArrowRight
} from "lucide-react";
import styles from './ServicesOverview.module.css';

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "We build fast, scalable, and secure web applications tailored to your business goals.",
    link: "/services#web-development"
  },
  {
    icon: Palette,
    title: "Website Design (UI/UX)",
    description: "We create modern, user-friendly designs that enhance experience and strengthen your brand identity.",
    link: "/services#website-design-ui-ux"
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "We drive growth through data-driven strategies that increase visibility, traffic, and conversions.",
    link: "/services#digital-marketing"
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Development",
    description: "We develop secure and high-performing online stores optimized for seamless shopping experiences.",
    link: "/services#e-commerce-development"
  },
  {
    icon: Laptop,
    title: "Software Development",
    description: "We build custom software solutions that streamline operations and improve business efficiency.",
    link: "/services#software-development"
  },
  {
    icon: Search,
    title: "SEO Services",
    description: "We improve search rankings and drive organic traffic with effective SEO strategies.",
    link: "/services#seo-services"
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "We grow your brand presence and engagement across social platforms with strategic campaigns.",
    link: "/services#social-media-marketing"
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "We develop high-performance mobile apps with seamless user experience across devices.",
    link: "/services#mobile-app-development"
  },
  {
    icon: Bot,
    title: "AI & Automation",
    description: "We create intelligent systems that automate workflows and enhance business productivity.",
    link: "/services#ai-automation"
  },
  {
    icon: Gauge,
    title: "Website Speed Optimization",
    description: "We optimize your website for faster loading, better performance, and improved user experience.",
    link: "/services#website-speed-optimization"
  },
  {
    icon: Server,
    title: "Hosting Services",
    description: "We provide secure and reliable hosting solutions with high uptime and performance.",
    link: "/services#hosting-services"
  },
  {
    icon: ShieldCheck,
    title: "Maintenance & Support",
    description: "We ensure your systems run smoothly with continuous updates, monitoring, and support.",
    link: "/services#maintenance-support"
  }
];

export default function ServicesOverview() {
  return (
    <section className={styles.servicesSection}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.badge}>SERVICES OVERVIEW</span>
          <h2 className={styles.mainHeading}>Comprehensive <span className="gradient-text">Solutions</span></h2>
          <p className={styles.subHeading}>
            Empowering your business with cutting-edge digital services designed for growth and excellence.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className={styles.serviceCard}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUpVariant}
              transition={{ delay: (idx % 3) * 0.1 }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconBox}>
                  <service.icon size={28} />
                </div>
                <div className={styles.cardNumber}>{(idx + 1).toString().padStart(2, '0')}</div>
              </div>
              
              <div className={styles.cardContent}>
                <h3>{service.title}</h3>
                <p className={styles.description}>{service.description}</p>
              </div>

              <div className={styles.cardFooter}>
                <a href={service.link} className={styles.readMore}>
                  Read More <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
