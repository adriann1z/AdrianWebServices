import React, { useEffect, useRef } from 'react';
import { Rocket } from 'lucide-react';

const flights = Array.from({ length: 18 }, (_, index) => 16 + (index % 3) * 3);

export const RocketBackground: React.FC = () => {
  const elements = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let width = window.innerWidth;
    let height = window.innerHeight;
    const rockets = flights.map((size) => {
      const angle = Math.random() * Math.PI * 2;
      const speed = 18 + Math.random() * 22;
      return { x: Math.random() * width, y: Math.random() * height, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, size };
    });
    const contacts = new Set<string>();
    let frame = 0;
    let previous = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      rockets.forEach((rocket) => {
        rocket.x = Math.min(rocket.x, width);
        rocket.y = Math.min(rocket.y, height);
      });
    };

    const animate = (time: number) => {
      const delta = previous ? Math.min((time - previous) / 1000, 0.05) : 0;
      previous = time;
      const count = width < 768 ? 10 : rockets.length;
      for (let i = 0; i < count; i++) {
        const rocket = rockets[i];
        rocket.x += rocket.vx * delta;
        rocket.y += rocket.vy * delta;
        const radius = rocket.size / 2;
        if (rocket.x < radius || rocket.x > width - radius) {
          rocket.vx *= -1;
          rocket.x = Math.max(radius, Math.min(width - radius, rocket.x));
        }
        if (rocket.y < radius || rocket.y > height - radius) {
          rocket.vy *= -1;
          rocket.y = Math.max(radius, Math.min(height - radius, rocket.y));
        }
      }

      // Reverse once per contact, allowing the rockets to separate before another collision.
      for (let i = 0; i < count; i++) {
        for (let j = i + 1; j < count; j++) {
          const a = rockets[i];
          const b = rockets[j];
          const key = `${i}-${j}`;
          const distance = Math.hypot(a.x - b.x, a.y - b.y);
          if (distance < (a.size + b.size) / 2 + 4) {
            if (!contacts.has(key)) {
              a.vx *= -1;
              a.vy *= -1;
              b.vx *= -1;
              b.vy *= -1;
              contacts.add(key);
            }
          } else {
            contacts.delete(key);
          }
        }
      }
      rockets.forEach((rocket, index) => {
        const element = elements.current[index];
        if (element) {
          element.style.transform = `translate(${rocket.x}px, ${rocket.y}px) rotate(${Math.atan2(rocket.vy, rocket.vx)}rad)`;
        }
      });
      frame = requestAnimationFrame(animate);
    };

    const updatePlayback = () => {
      cancelAnimationFrame(frame);
      previous = 0;
      if (!document.hidden && !reducedMotion.matches) frame = requestAnimationFrame(animate);
    };
    updatePlayback();
    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', updatePlayback);
    reducedMotion.addEventListener('change', updatePlayback);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', updatePlayback);
      reducedMotion.removeEventListener('change', updatePlayback);
    };
  }, []);

  return (
  <div className="rocket-background" aria-hidden="true">
    {flights.map((size, index) => (
      <div
        key={index}
        className="rocket-flight"
        ref={(element) => { elements.current[index] = element; }}
        style={{ width: size, height: size }}
      >
        <span className="rocket-trail" />
        <Rocket width={size} height={size} strokeWidth={1.8} />
      </div>
    ))}
  </div>
  );
};
