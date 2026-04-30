"use client";

import React, { useEffect, useState } from 'react';
import styles from './NavigationDots.module.css';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'why-choose-us', label: 'Why Us' },
  { id: 'technologies', label: 'Tech' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'testimonials', label: 'Reviews' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
];

export default function NavigationDots() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const container = document.querySelector('.scroll-container');
    const observer = new IntersectionObserver(handleIntersect, {
      root: container,
      threshold: 0.5,
    });

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    const container = document.querySelector('.scroll-container');
    if (element && container) {
      container.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={styles.dotsContainer}>
      {sections.map(({ id, label }) => (
        <a 
          key={id}
          href={`#${id}`}
          onClick={(e) => scrollTo(id, e)}
          className={`${styles.dotWrapper} ${activeSection === id ? styles.active : ''}`}
          aria-label={label}
        >
          <span className={styles.label}>{label}</span>
          <span className={styles.dot}></span>
        </a>
      ))}
    </div>
  );
}
