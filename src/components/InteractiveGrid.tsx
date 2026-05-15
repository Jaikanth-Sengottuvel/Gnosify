"use client";
import React, { useEffect, useRef } from 'react';
import styles from './InteractiveGrid.module.css';

const CUBE_SIZE = 28;
const GAP = 2;
const STEP = CUBE_SIZE + GAP;
const REPULSION_RADIUS = 120;
const MAX_PUSH = 22;
const LERP_SPEED = 0.18;
const IDLE_THRESHOLD = 0.3;

const BORDER_BASE = 'rgba(27, 87, 128, 0.06)';

export default function InteractiveGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const staticCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const targetMouseRef = useRef({ x: -9999, y: -9999 });
  const smoothMouseRef = useRef({ x: -9999, y: -9999 });
  const prevSmoothRef = useRef({ x: -9999, y: -9999 });
  const frameRef = useRef<number>(0);
  const isIdleRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const scrollContainer = document.querySelector('.scroll-container') ?? window;

    const handleMouseMove = (e: Event) => {
      const me = e as MouseEvent;
      targetMouseRef.current = { x: me.clientX, y: me.clientY };
      isIdleRef.current = false;
    };
    const handleMouseLeave = () => {
      targetMouseRef.current = { x: -9999, y: -9999 };
      isIdleRef.current = false;
    };

    scrollContainer.addEventListener('mousemove', handleMouseMove as EventListener, { passive: true } as AddEventListenerOptions);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave as EventListener);

    const buildStaticCanvas = (W: number, H: number) => {
      const off = document.createElement('canvas');
      off.width = W;
      off.height = H;
      const octx = off.getContext('2d')!;
      const cols = Math.ceil(W / STEP) + 1;
      const rows = Math.ceil(H / STEP) + 1;
      octx.strokeStyle = BORDER_BASE;
      octx.lineWidth = 1;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          octx.strokeRect(c * STEP + 0.5, r * STEP + 0.5, CUBE_SIZE - 1, CUBE_SIZE - 1);
        }
      }
      return off;
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      staticCanvasRef.current = buildStaticCanvas(canvas.width, canvas.height);
      isIdleRef.current = false;
    };
    resize();
    window.addEventListener('resize', resize, { passive: true } as AddEventListenerOptions);

    const draw = () => {
      smoothMouseRef.current.x += (targetMouseRef.current.x - smoothMouseRef.current.x) * LERP_SPEED;
      smoothMouseRef.current.y += (targetMouseRef.current.y - smoothMouseRef.current.y) * LERP_SPEED;

      const mx = smoothMouseRef.current.x;
      const my = smoothMouseRef.current.y;
      const px = prevSmoothRef.current.x;
      const py = prevSmoothRef.current.y;
      const moved = Math.abs(mx - px) + Math.abs(my - py);

      if (moved < IDLE_THRESHOLD && isIdleRef.current) {
        frameRef.current = requestAnimationFrame(draw);
        return;
      }

      prevSmoothRef.current.x = mx;
      prevSmoothRef.current.y = my;

      const W = canvas.width;
      const H = canvas.height;

      ctx.clearRect(0, 0, W, H);
      if (staticCanvasRef.current) {
        ctx.drawImage(staticCanvasRef.current, 0, 0);
      }

      const influence = REPULSION_RADIUS + MAX_PUSH;
      const cMin = Math.max(0, Math.floor((mx - influence) / STEP));
      const cMax = Math.min(Math.ceil(W / STEP), Math.ceil((mx + influence) / STEP) + 1);
      const rMin = Math.max(0, Math.floor((my - influence) / STEP));
      const rMax = Math.min(Math.ceil(H / STEP), Math.ceil((my + influence) / STEP) + 1);

      const hasInfluence = mx > -9000 && my > -9000;

      if (hasInfluence) {
        ctx.lineWidth = 1;
        for (let r = rMin; r < rMax; r++) {
          for (let c = cMin; c < cMax; c++) {
            const cx = c * STEP + CUBE_SIZE / 2;
            const cy = r * STEP + CUBE_SIZE / 2;
            const dx = cx - mx;
            const dy = cy - my;
            const dist2 = dx * dx + dy * dy;

            if (dist2 >= REPULSION_RADIUS * REPULSION_RADIUS || dist2 === 0) continue;

            const dist = Math.sqrt(dist2);
            const t = (REPULSION_RADIUS - dist) / REPULSION_RADIUS;
            const force = t * t;
            const push = force * MAX_PUSH;
            const offsetX = (dx / dist) * push;
            const offsetY = (dy / dist) * push;
            const x = c * STEP + offsetX;
            const y = r * STEP + offsetY;
            const borderAlpha = 0.06 + force * 0.45;
            const fillAlpha = force * 0.12;

            ctx.clearRect(
              Math.min(c * STEP, x) - 1,
              Math.min(r * STEP, y) - 1,
              CUBE_SIZE + Math.abs(offsetX) + 3,
              CUBE_SIZE + Math.abs(offsetY) + 3
            );

            if (fillAlpha > 0.005) {
              ctx.fillStyle = `rgba(78,181,208,${fillAlpha.toFixed(3)})`;
              ctx.fillRect(x, y, CUBE_SIZE, CUBE_SIZE);
            }
            ctx.strokeStyle = `rgba(27,87,128,${borderAlpha.toFixed(3)})`;
            ctx.strokeRect(x + 0.5, y + 0.5, CUBE_SIZE - 1, CUBE_SIZE - 1);
          }
        }
      }

      isIdleRef.current = moved < IDLE_THRESHOLD;
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
