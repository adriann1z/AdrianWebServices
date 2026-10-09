import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BrandLogo } from './BrandLogo';

interface CinematicIntroProps {
  onComplete: () => void;
}

export const CinematicIntro: React.FC<CinematicIntroProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if user has already visited in this session for instant response
    const hasVisited = sessionStorage.getItem('aws_visited');
    const timerDuration = hasVisited ? 600 : 1000;

    const timer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('aws_visited', 'true');
      setTimeout(onComplete, 300);
    }, timerDuration);

    const handleSkip = () => {
      setIsVisible(false);
      sessionStorage.setItem('aws_visited', 'true');
      onComplete();
    };

    window.addEventListener('keydown', handleSkip);
    window.addEventListener('click', handleSkip);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleSkip);
      window.removeEventListener('click', handleSkip);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#08090B] pointer-events-auto cursor-pointer"
          aria-live="polite"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute w-72 h-72 rounded-full bg-[#A3FFCB]/5 blur-3xl pointer-events-none" />

          {/* Centered Minimal Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-4"
          >
            <BrandLogo size="lg" showText={true} />

            {/* Precision traveling thin line */}
            <div className="w-48 h-[1.5px] bg-white/10 rounded-full overflow-hidden mt-2 relative">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 0.85, ease: 'easeInOut' }}
                className="w-1/2 h-full bg-[#A3FFCB] shadow-[0_0_8px_#A3FFCB]"
              />
            </div>
            
            <p className="text-[11px] font-mono tracking-widest text-[#9DA3AF]/60 uppercase mt-1">
              Lincoln · United Kingdom
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
