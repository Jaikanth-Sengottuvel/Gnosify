"use client";

import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

import styles from './Footer.module.css';

const serviceLinks = [
  { name: 'Web Development', slug: 'web-development' },
  { name: 'Website Design', slug: 'website-design' },
  { name: 'Digital Marketing', slug: 'digital-marketing' },
  { name: 'E-Commerce Dev', slug: 'ecommerce-development' },
  { name: 'Software Dev', slug: 'software-development' },
  { name: 'SEO Services', slug: 'seo-services' },
  { name: 'SMO Services', slug: 'smo-services' },
  { name: 'Mobile App Dev', slug: 'mobile-app-development' },
  { name: 'AI & Automation', slug: 'ai-automation' },
  { name: 'Speed Optimisation', slug: 'speed-optimization' },
  { name: 'Hosting Services', slug: 'hosting-services' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Brand col */}
          <div className={styles.col}>
            <img src="/logo.png" alt="Gnosify Logo" style={{ height: '40px', marginBottom: '1.25rem' }} />
            <p className={styles.tagline}>
              An AI-first digital solutions company building innovative, scalable, and high-performance products for businesses worldwide.
            </p>
            <div className={styles.socials}>
              <a href="https://www.linkedin.com/company/gnosify.in/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"  className={styles.social}><LinkedinIcon /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.col}>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className={styles.col}>
            <h4>Services</h4>
            <div className={styles.servicesGrid}>
              <ul>
                {serviceLinks.slice(0, 6).map((s) => (
                  <li key={s.slug}><a href={`/services/${s.slug}`}>{s.name}</a></li>
                ))}
              </ul>
              <ul>
                {serviceLinks.slice(6).map((s) => (
                  <li key={s.slug}><a href={`/services/${s.slug}`}>{s.name}</a></li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className={styles.col}>
            <h4>Contact Us</h4>
            <ul className={styles.contactList}>
              <li>
                <Mail size={15} className={styles.contactIcon} />
                <a href="mailto:contact@gnosify.in">contact@gnosify.in</a>
              </li>
              <li>
                <Phone size={15} className={styles.contactIcon} />
                <a href="tel:+916003633316">+91 6003633316</a>
              </li>
            </ul>
            <a href="/contact" className={styles.ctaLink}>Get a Free Quote →</a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Gnosify. All rights reserved.</p>
          <div className={styles.bottomLinks}>
            <a href="/faq">FAQ</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
