"use client";

import React, { useState, MouseEvent } from 'react';
import styles from './Button.module.css';

interface WaterButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function WaterButton({ children, onClick, variant = 'primary', className = '' }: WaterButtonProps) {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Add ripple
    const newRipple = { x, y, id: Date.now() };
    setRipples((prev) => [...prev, newRipple]);
    
    // Clean up ripple after animation
    setTimeout(() => {
      setRipples((prev) => prev.filter(r => r.id !== newRipple.id));
    }, 600);

    if (onClick) onClick();
  };

  return (
    <button 
      className={`btn-reset ${styles.waterButton} ${variant === 'secondary' ? styles.secondary : ''} ${className}`}
      onClick={handleClick}
      suppressHydrationWarning
    >
      <span style={{ position: 'relative', zIndex: 2 }}>{children}</span>
      {ripples.map(r => (
        <span 
          key={r.id} 
          className={styles.ripple} 
          style={{ 
            left: r.x, 
            top: r.y,
            width: '100px',
            height: '100px',
            marginLeft: '-50px',
            marginTop: '-50px'
          }} 
        />
      ))}
    </button>
  );
}
