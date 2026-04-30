"use client";
import React, { useEffect, useRef } from 'react';
import styles from './InteractiveGrid.module.css';

const CUBE_SIZE = 28;
const GAP = 2;
const STEP = CUBE_SIZE + GAP;
const REPULSION_RADIUS = 120;
const MAX_PUSH = 22;
const LERP_SPEED = 0.10; // 0→1: lower = smoother/slower easing

export default function InteractiveGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const targetMouseRef = useRef({ x: -9999, y: -9999 }); // raw mouse pos
  const smoothMouseRef = useRef({ x: -9999, y: -9999 }); // lerped mouse pos
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Track raw mouse on the scroll container
    const scrollContainer = document.querySelector('.scroll-container') ?? window;

    const handleMouseMove = (e: Event) => {
      const me = e as MouseEvent;
      targetMouseRef.current = { x: me.clientX, y: me.clientY };
    };
    const handleMouseLeave = () => {
      targetMouseRef.current = { x: -9999, y: -9999 };
    };

    scrollContainer.addEventListener('mousemove', handleMouseMove as EventListener);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave as EventListener);

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;

      // Lerp smoothed mouse toward raw target each frame
      smoothMouseRef.current.x += (targetMouseRef.current.x - smoothMouseRef.current.x) * LERP_SPEED;
      smoothMouseRef.current.y += (targetMouseRef.current.y - smoothMouseRef.current.y) * LERP_SPEED;

      const mx = smoothMouseRef.current.x;
      const my = smoothMouseRef.current.y;

      ctx.clearRect(0, 0, W, H);

      const cols = Math.ceil(W / STEP) + 1;
      const rows = Math.ceil(H / STEP) + 1;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          // Centre of this cube
          const cx = c * STEP + CUBE_SIZE / 2;
          const cy = r * STEP + CUBE_SIZE / 2;

          // Vector from mouse → cube centre
          const dx = cx - mx;
          const dy = cy - my;
          const dist = Math.sqrt(dx * dx + dy * dy);

          let offsetX = 0;
          let offsetY = 0;
          let borderAlpha = 0.06;
          let fillAlpha = 0;

          if (dist < REPULSION_RADIUS && dist > 0) {
            // Smooth ease-out curve: stronger near center, fades at edge
            const t = (REPULSION_RADIUS - dist) / REPULSION_RADIUS;
            const force = t * t; // quadratic falloff = smoother wave
            const push = force * MAX_PUSH;

            offsetX = (dx / dist) * push;
            offsetY = (dy / dist) * push;
            borderAlpha = 0.06 + force * 0.45;
            fillAlpha = force * 0.12;
          }

          const x = c * STEP + offsetX;
          const y = r * STEP + offsetY;

          // Subtle cyan glow fill on affected cubes
          if (fillAlpha > 0.005) {
            ctx.fillStyle = `rgba(78, 181, 208, ${fillAlpha.toFixed(3)})`;
            ctx.fillRect(x, y, CUBE_SIZE, CUBE_SIZE);
          }

          // Border stroke
          ctx.strokeStyle = `rgba(27, 87, 128, ${borderAlpha.toFixed(3)})`;
          ctx.lineWidth = 1;
          ctx.strokeRect(x + 0.5, y + 0.5, CUBE_SIZE - 1, CUBE_SIZE - 1);
        }
      }

      frameRef.current = requestAnimationFrame(draw);
    };

    frameRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener('resize', resize);
      scrollContainer.removeEventListener('mousemove', handleMouseMove as EventListener);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave as EventListener);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.gridCanvas} />;
}
