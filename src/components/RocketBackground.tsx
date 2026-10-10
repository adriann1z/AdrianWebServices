import React, { useEffect, useRef } from 'react';
import { Rocket } from 'lucide-react';

const flights = [32, 28, 36, 30, 28];

export const RocketBackground: React.FC = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const flightRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let animations: Animation[] = [];
    const startFlights = () => {
      animations.forEach((animation) => animation.cancel());
      animations = [];
      if (reducedMotion.matches) return;
      const width = window.innerWidth;
      const height = window.innerHeight;
      const directions = Array.from({ length: 8 }, (_, index) => index * Math.PI / 4);
      for (let i = directions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [directions[i], directions[j]] = [directions[j], directions[i]];
      }
      flightRefs.current.forEach((element, index) => {
        if (!element) return;
        const angle = directions[index];
        const dx = Math.cos(angle);
        const dy = Math.sin(angle);
        const cx = width * (0.2 + Math.random() * 0.6);
        const cy = height * (0.2 + Math.random() * 0.6);
        const horizontal = Math.abs(dx) > 0.001;
        const vertical = Math.abs(dy) > 0.001;
        const before = Math.min(
          horizontal ? (dx > 0 ? cx : width - cx) / Math.abs(dx) : Infinity,
          vertical ? (dy > 0 ? cy : height - cy) / Math.abs(dy) : Infinity,
        ) + 100;
        const after = Math.min(
          horizontal ? (dx > 0 ? width - cx : cx) / Math.abs(dx) : Infinity,
          vertical ? (dy > 0 ? height - cy : cy) / Math.abs(dy) : Infinity,
        ) + 100;
        const distance = before + after;
        const amplitude = 48 + Math.random() * 32;
        const cycles = 2.5 + Math.random();
        const phase = Math.random() * Math.PI * 2;
        const keyframes = Array.from({ length: 121 }, (_, step) => {
          const progress = step / 120;
          const waveAngle = phase + progress * cycles * Math.PI * 2;
          const wave = Math.sin(waveAngle) * amplitude;
          const x = cx + dx * (progress * distance - before) - dy * wave;
          const y = cy + dy * (progress * distance - before) + dx * wave;
          const slope = Math.cos(waveAngle) * amplitude * cycles * Math.PI * 2;
          const heading = Math.atan2(dy * distance + dx * slope, dx * distance - dy * slope);
          return { transform: `translate(${x}px, ${y}px) rotate(${heading}rad)` };
        });
        const duration = distance / (30 + Math.random() * 20) * 1000;
        animations.push(element.animate(keyframes, {
          duration, iterations: Infinity, easing: 'linear', delay: -Math.random() * duration,
        }));
      });
      updateVisibility();
    };
    const updateVisibility = () => {
      animations.forEach((animation) => document.hidden ? animation.pause() : animation.play());
    };
    startFlights();
    window.addEventListener('resize', startFlights);
    reducedMotion.addEventListener('change', startFlights);
    document.addEventListener('visibilitychange', updateVisibility);
    return () => {
      animations.forEach((animation) => animation.cancel());
      window.removeEventListener('resize', startFlights);
      reducedMotion.removeEventListener('change', startFlights);
      document.removeEventListener('visibilitychange', updateVisibility);
    };
  }, []);

  useEffect(() => {
    let frame = 0;
    const updateMask = () => {
      frame = 0;
      const background = backgroundRef.current;
      if (!background) return;
      const width = window.innerWidth;
      const height = window.innerHeight;
      const selector = [
        'header', '[role="dialog"]', '[class*="fixed"][class*="z-50"]',
        'main h1', 'main h2', 'main h3', 'main p', 'main span',
        'main button', 'main a', 'main img', 'main figure', 'main li',
        'main label', 'main input', 'main textarea', 'main select',
        'main [class*="rounded"]', 'footer',
      ].join(',');
      const holes = Array.from(document.querySelectorAll(selector)).flatMap((element) => {
        const rect = element.getBoundingClientRect();
        if (!rect.width || !rect.height || rect.bottom < 0 || rect.top > height) return [];
        return [`<rect x="${rect.left - 5}" y="${rect.top - 5}" width="${rect.width + 10}" height="${rect.height + 10}" fill="black"/>`];
      }).join('');
      // A mask combines overlapping content regions without exposing intersections.
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"><defs><mask id="content" maskUnits="userSpaceOnUse" x="0" y="0" width="${width}" height="${height}"><rect width="100%" height="100%" fill="white"/>${holes}</mask></defs><rect width="100%" height="100%" fill="white" mask="url(#content)"/></svg>`;
      const mask = `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
      background.style.maskImage = mask;
      background.style.setProperty('-webkit-mask-image', mask);
      background.style.visibility = 'visible';
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(updateMask);
    };
    const resizeObserver = new ResizeObserver(schedule);
    const mutationObserver = new MutationObserver(schedule);
    document.querySelectorAll('main, header, footer').forEach((element) => {
      resizeObserver.observe(element);
      mutationObserver.observe(element, { subtree: true, childList: true, attributes: true, characterData: true });
    });
    const root = document.getElementById('root');
    if (root) mutationObserver.observe(root, { subtree: true, childList: true });
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    window.addEventListener('load', schedule);
    schedule();
    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      window.removeEventListener('load', schedule);
    };
  }, []);

  return (
  <div ref={backgroundRef} className="rocket-background" aria-hidden="true" style={{ visibility: 'hidden' }}>
    {flights.map((size, index) => (
      <div
        key={index}
        className="rocket-flight"
        ref={(element) => { flightRefs.current[index] = element; }}
        style={{ width: size, height: size }}
      >
        <span className="rocket-trail" />
        <Rocket width={size} height={size} strokeWidth={1.5} />
      </div>
    ))}
  </div>
  );
};
