import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
  isMono?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  showText = true,
  className = '',
  isMono = false,
}) => {
  const sizeMap = {
    sm: { icon: 26, textClass: 'text-sm' },
    md: { icon: 34, textClass: 'text-base' },
    lg: { icon: 44, textClass: 'text-lg' },
    xl: { icon: 60, textClass: 'text-2xl' },
  };

  const { icon, textClass } = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Precision Geometric Brand Symbol inspired by Adrian Web Services monochrome identity */}
      <div 
        className="relative flex items-center justify-center shrink-0" 
        style={{ width: icon, height: icon }}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm transition-transform duration-300 hover:scale-105"
        >
          {/* Subtle Outer Precision Frame */}
          <rect
            x="3"
            y="3"
            width="94"
            height="94"
            rx="18"
            className="stroke-white/15"
            strokeWidth="3.5"
          />
          {/* Internal Geometric Monogram 'AWS' */}
          {/* 'A' geometric apex */}
          <path
            d="M50 18L26 76H38L50 46L62 76H74L50 18Z"
            fill="currentColor"
            className="text-white"
          />
          {/* Center Mint Beam / Precision Accent */}
          <path
            d="M38 58H62L59 66H41L38 58Z"
            fill={isMono ? '#FFFFFF' : '#A3FFCB'}
          />
          {/* Subtle Dynamic Geometric Node */}
          <circle
            cx="50"
            cy="34"
            r="3"
            fill={isMono ? '#FFFFFF' : '#A3FFCB'}
          />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col tracking-tight leading-none">
          <span className={`font-display font-bold tracking-wider text-white uppercase ${textClass}`}>
            Adrian
          </span>
          <span className="text-[10px] tracking-[0.25em] text-[#9DA3AF] uppercase font-mono mt-0.5">
            Web Services
          </span>
        </div>
      )}
    </div>
  );
};
