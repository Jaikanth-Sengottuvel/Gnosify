"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function GlobalClickEffect() {
  const [clicks, setClicks] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      // Don't intercept UI buttons, just add visual effect
      const newClick = { id: Date.now(), x: e.clientX, y: e.clientY };
      setClicks((prev) => [...prev, newClick]);
      
      // Cleanup after animation finishes
      setTimeout(() => {
        setClicks((prev) => prev.filter(c => c.id !== newClick.id));
      }, 1000);
    };

    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, []);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: 9999 }}>
      <AnimatePresence>
        {clicks.map(click => (
          <motion.div
            key={click.id}
            initial={{ 
              scale: 0, 
              opacity: 0.8,
              x: click.x - 20, // Center the 40px circle
              y: click.y - 20
            }}
            animate={{ 
              scale: [0, 4, 8], 
              opacity: [0.8, 0.4, 0] 
            }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{
              position: 'absolute',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              border: '2px solid rgba(78, 181, 208, 0.8)',
              backgroundColor: 'transparent'
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
