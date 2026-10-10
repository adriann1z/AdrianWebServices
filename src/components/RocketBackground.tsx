import React, { useEffect, useRef } from 'react';
import { Rocket } from 'lucide-react';

const flights = [
  { top: '12%', duration: '27s', delay: '-9s', size: 18 },
  { top: '34%', duration: '34s', delay: '-24s', size: 14 },
  { top: '58%', duration: '31s', delay: '-5s', size: 20 },
  { top: '79%', duration: '38s', delay: '-19s', size: 16 },
  { top: '94%', duration: '29s', delay: '-16s', size: 14 },
];

export const RocketBackground: React.FC = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);

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
    {flights.map((flight, index) => (
      <div
        key={index}
        className="rocket-flight"
        style={{ top: flight.top, animationDuration: flight.duration, animationDelay: flight.delay }}
      >
        <span className="rocket-trail" />
        <Rocket width={flight.size} height={flight.size} strokeWidth={1.5} />
      </div>
    ))}
  </div>
  );
};
