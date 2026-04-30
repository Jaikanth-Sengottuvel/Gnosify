"use client";

import { useEffect } from 'react';

export default function TextAnimationObserver() {
  useEffect(() => {
    // Collect all animation variants
    const selectors = [
      '.anim-fade-slide',
      '.anim-scale-pop',
      '.anim-blur-reveal',
      '.anim-clip-wipe',
      '.anim-parallax-lift'
    ];

    const elements = document.querySelectorAll(selectors.join(', '));
    
    // Check if we are inside a scroll-snap container
    const scrollContainer = document.querySelector('.scroll-container') || window;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger animation
            entry.target.classList.add('is-visible');
            // Unobserve to play exactly once per slide
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: scrollContainer instanceof Element ? scrollContainer : null,
        threshold: 0.15, // Trigger as soon as 15% of the text is inside
        rootMargin: "0px 0px -40px 0px" // Slight buffer
      }
    );

    elements.forEach((el) => observer.observe(el));

    // Cleanup observer
    return () => observer.disconnect();
  }, []);

  return null;
}
