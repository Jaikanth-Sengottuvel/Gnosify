"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './ServicesSlider.module.css';
import Link from 'next/link';

const services = [
  { title: "Web Development", slug: "web-development", desc: "Build scalable and high-performance websites tailored to your goals." },
  { title: "Website Design", slug: "website-design", desc: "Visually appealing and user-friendly designs that reflect your brand." },
  { title: "Digital Marketing", slug: "digital-marketing", desc: "Grow your online presence through data-driven marketing strategies." },
  { title: "E-Commerce Development", slug: "ecommerce-development", desc: "Secure and feature-rich platforms optimized for sales and growth." },
  { title: "Software Development", slug: "software-development", desc: "Custom software solutions designed to streamline business processes." },
  { title: "SEO Services", slug: "seo-services", desc: "Improve search engine rankings with effective strategies and insights." },
  { title: "SMO Services", slug: "smo-services", desc: "Enhance brand presence and engagement across social media platforms." },
  { title: "Mobile Apps Development", slug: "mobile-app-development", desc: "Intuitive apps for Android and iOS that deliver seamless performance." },
  { title: "AI & Automation", slug: "ai-automation", desc: "Intelligent systems that streamline workflows and enable faster decisions." },
  { title: "Website Speed Optimization", slug: "speed-optimization", desc: "Optimize your website for faster loading times and better rankings." },
  { title: "Website Hosting Services", slug: "hosting-services", desc: "Reliable and secure hosting solutions for maximum uptime and speed." },
];

export default function ServicesSlider() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({
    target: targetRef,
    container: targetRef,
  });

  return (
    <section className={styles.sliderSection}>
      <div className="container">
        <div className={styles.header}>
          <h2 className="section-title">Our <span className="gradient-text">Services</span></h2>
          <p className="section-subtitle">Explore our wide range of digital solutions.</p>
        </div>
      </div>

      <div className={styles.scrollWrapper} ref={targetRef}>
        <div className={styles.cardsContainer}>
          {services.map((service, index) => (
            <Link href={`/services/${service.slug}`} key={index}>
              <motion.div 
                className={styles.card}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className={styles.cardNumber}>{(index + 1).toString().padStart(2, '0')}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <div className={styles.arrow}>→</div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
