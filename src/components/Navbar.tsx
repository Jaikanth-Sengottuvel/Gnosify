"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Blog', href: '/blog' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const scrollContainer = document.querySelector('.scroll-container') || window;

    const handleScroll = (e: any) => {
      const currentScrollY = e.target.scrollTop ?? window.scrollY;
      setScrolled(currentScrollY > 50);
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
      } else if (currentScrollY < lastScrollY) {
        setHidden(false);
      }
      setLastScrollY(currentScrollY);
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: hidden ? -150 : 0, opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
      >
        <div className={`container ${styles.navContainer}`}>
          <div className={styles.logoWrapper}>
            <a href="/">
              <img src="/logo.png" alt="Gnosify Logo" className={styles.logo} />
            </a>
          </div>

          <div className={styles.links} onMouseLeave={() => setHoveredIndex(null)}>
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className={styles.navLink}
                onMouseEnter={() => setHoveredIndex(index)}
              >
                {hoveredIndex === index && (
                  <motion.span
                    layoutId="navPill"
                    className={styles.navPill}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className={styles.navText}>{link.name}</span>
              </a>
            ))}
            <a href="/contact" className={styles.ctaButton}>Get a Quote</a>
          </div>

          <button
            className={styles.hamburger}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={styles.mobileLink}
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a href="/contact" className={styles.mobileCta} onClick={() => setMobileOpen(false)}>
              Get a Quote
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
