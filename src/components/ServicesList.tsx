"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import {
  Code2, Palette, TrendingUp, ShoppingCart,
  Laptop, Search, Share2, Smartphone,
  Bot, Gauge, Server, ShieldCheck,
  ArrowRight, Check
} from "lucide-react";
import styles from './ServicesList.module.css';

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const services = [
  {
    id: "web-development",
    icon: Code2,
    title: "Web Development",
    features: [
      "Custom-built websites tailored to your business needs",
      "Scalable architecture for future growth",
      "High-performance and fast-loading pages",
      "Secure development with best practices",
      "SEO-friendly structure for better visibility",
      "Integration with APIs, payment systems, and third-party tools"
    ]
  },
  {
    id: "website-design-ui-ux",
    icon: Palette,
    title: "Website Design (UI/UX)",
    features: [
      "Modern, clean, and user-friendly interface design",
      "Mobile-first and fully responsive layouts",
      "Focus on user experience and engagement",
      "Wireframing and prototyping before development",
      "Consistent design system and branding",
      "Conversion-focused design strategies"
    ]
  },
  {
    id: "digital-marketing",
    icon: TrendingUp,
    title: "Digital Marketing",
    features: [
      "Data-driven marketing strategies",
      "Multi-channel campaigns (Google, social media, etc.)",
      "Performance tracking and analytics",
      "Lead generation and conversion optimization",
      "Content planning and campaign management",
      "Continuous optimization based on results"
    ]
  },
  {
    id: "e-commerce-development",
    icon: ShoppingCart,
    title: "E-Commerce Development",
    features: [
      "Custom online store development",
      "Secure payment gateway integration",
      "User-friendly product and checkout flow",
      "Inventory and order management systems",
      "Mobile-optimized shopping experience",
      "Performance optimization for high traffic"
    ]
  },
  {
    id: "software-development",
    icon: Laptop,
    title: "Software Development",
    features: [
      "Custom business applications development",
      "Scalable and modular architecture",
      "Integration with existing systems",
      "Automation of business processes",
      "High security and reliability",
      "Ongoing support and enhancements"
    ]
  },
  {
    id: "seo-services",
    icon: Search,
    title: "SEO Services",
    features: [
      "Keyword research and strategy planning",
      "On-page and technical SEO optimization",
      "Website performance improvements",
      "Content optimization for search engines",
      "Link-building strategies",
      "Continuous monitoring and reporting"
    ]
  },
  {
    id: "social-media-marketing",
    icon: Share2,
    title: "Social Media Marketing (SMO)",
    features: [
      "Social media strategy development",
      "Content creation and scheduling",
      "Audience engagement and growth",
      "Paid campaign management",
      "Performance analytics and insights",
      "Brand awareness and positioning"
    ]
  },
  {
    id: "mobile-app-development",
    icon: Smartphone,
    title: "Mobile App Development",
    features: [
      "Cross-platform (Android & iOS) app development",
      "Intuitive and user-friendly UI/UX",
      "High performance and scalability",
      "API and backend integration",
      "App testing and deployment",
      "Post-launch support and updates"
    ]
  },
  {
    id: "ai-automation",
    icon: Bot,
    title: "AI & Automation",
    features: [
      "AI-powered workflow automation",
      "Chatbots and intelligent assistants",
      "Data analysis and predictive systems",
      "LLM integration for smart applications",
      "Process optimization and efficiency improvement",
      "Custom AI solutions tailored to business needs"
    ]
  },
  {
    id: "website-speed-optimization",
    icon: Gauge,
    title: "Website Speed Optimization",
    features: [
      "Performance analysis and bottleneck detection",
      "Code and asset optimization",
      "Image and media compression",
      "Caching and CDN implementation",
      "Core Web Vitals improvement",
      "Faster load times across devices"
    ]
  },
  {
    id: "hosting-services",
    icon: Server,
    title: "Hosting Services",
    features: [
      "Secure and reliable hosting setup",
      "High uptime and performance monitoring",
      "Domain and server management",
      "Backup and recovery solutions",
      "Scalable hosting infrastructure",
      "Ongoing maintenance and support"
    ]
  },
  {
    id: "maintenance-support",
    icon: ShieldCheck,
    title: "Maintenance & Support",
    features: [
      "Regular updates and bug fixes",
      "Performance monitoring and optimization",
      "Security updates and protection",
      "Technical support and troubleshooting",
      "Feature updates and improvements",
      "Long-term system stability management"
    ]
  }
];

export default function ServicesList() {
  return (
    <section className={styles.servicesListSection}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.badge}>WHAT WE DO</span>
          <h1 className={styles.mainHeading}>Our <span className="gradient-text">Expertise</span></h1>
          <p className={styles.subHeading}>
            Explore our specialized digital solutions designed to help your business grow, scale, and stay ahead.
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
              <div className={styles.cardHeader} id={service.id}>
                <div className={styles.iconBox}>
                  <service.icon size={28} />
                </div>
                <div className={styles.cardNumber}>{(idx + 1).toString().padStart(2, '0')}</div>
              </div>
              
              <div className={styles.cardContent}>
                <h3>{service.title}</h3>
                <ul className={styles.featureList}>
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx}>
                      <Check size={14} className={styles.checkIcon} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.cardFooter}>
                <a href="/contact" className={styles.learnMore}>
                  Get Started <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
