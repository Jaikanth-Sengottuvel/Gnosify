"use client";

import { useEffect } from 'react';

// Pure CSS ripple — zero React re-renders, zero framer-motion overhead.
// Injects a <div> directly into the DOM and removes it after the animation.
const RIPPLE_CSS = `
@keyframes _gnRipple {
  0%   { transform: scale(0);   opacity: 0.75; }
  60%  { transform: scale(4);   opacity: 0.3;  }
  100% { transform: scale(8);   opacity: 0;    }
}
._gnRippleEl {
  position: fixed;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid rgba(78, 181, 208, 0.8);
  background: transparent;
  pointer-events: none;
  z-index: 9999;
  animation: _gnRipple 0.65s ease-out forwards;
  will-change: transform, opacity;
}`;

export default function GlobalClickEffect() {
  useEffect(() => {
    if (!document.getElementById('_gn-ripple-style')) {
      const style = document.createElement('style');
      style.id = '_gn-ripple-style';
      style.textContent = RIPPLE_CSS;
      document.head.appendChild(style);
    }

    const handleClick = (e: MouseEvent) => {
      const el = document.createElement('div');
      el.className = '_gnRippleEl';
      el.style.left = `${e.clientX - 20}px`;
      el.style.top  = `${e.clientY - 20}px`;
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 700);
    };

    window.addEventListener('click', handleClick, { passive: true });
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return null;
}
