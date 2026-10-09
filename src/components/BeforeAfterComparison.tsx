import React, { useState, useRef, useCallback, useEffect } from 'react';
import { ArrowLeftRight, Sparkles, AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';

interface BeforeAfterComparisonProps {
  onTransformWebsite: () => void;
}

export const BeforeAfterComparison: React.FC<BeforeAfterComparisonProps> = ({ onTransformWebsite }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        handleMove(e.clientX);
      }
    };

    if (isDragging) {
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('mousemove', handleGlobalMouseMove);
    }
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleGlobalMouseMove);
    };
  }, [isDragging, handleMove]);

  // Keyboard navigation for accessibility
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === 'ArrowRight') {
      setSliderPosition((prev) => Math.min(100, prev + 5));
    }
  };

  return (
    <section className="py-24 bg-[#08090B] border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-mono tracking-widest text-[#A3FFCB] uppercase">
            <ArrowLeftRight className="w-3.5 h-3.5" />
            <span>The Power of a Modern Redesign</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Same business. Completely different impression.
          </h2>

          <p className="text-base sm:text-lg text-[#9DA3AF]">
            Drag the slider to see how modern web standards, spatial balance and typography transform client trust in seconds.
          </p>
        </div>

        {/* Comparison Interactive Viewport */}
        <div className="max-w-5xl mx-auto">
          {/* Status Label Indicators */}
          <div className="flex items-center justify-between mb-3 text-xs font-mono px-2">
            <span className="flex items-center gap-1.5 text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded">
              <AlertTriangle className="w-3.5 h-3.5" />
              BEFORE — Outdated & Forgettable
            </span>
            <span className="flex items-center gap-1.5 text-[#A3FFCB] bg-[#A3FFCB]/10 border border-[#A3FFCB]/20 px-3 py-1 rounded">
              <CheckCircle2 className="w-3.5 h-3.5" />
              AFTER — Modern & Professional
            </span>
          </div>

          {/* Draggable Frame */}
          <div
            ref={containerRef}
            tabIndex={0}
            role="slider"
            aria-label="Before and after website redesign comparison"
            aria-valuenow={sliderPosition}
            aria-valuemin={0}
            aria-valuemax={100}
            onKeyDown={handleKeyDown}
            onTouchMove={handleTouchMove}
            className="relative h-[480px] sm:h-[540px] rounded-2xl overflow-hidden border border-white/20 select-none cursor-ew-resize focus:outline-none focus:ring-2 focus:ring-[#A3FFCB] shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
          >
            {/* RIGHT SIDE: MODERN AFTER REDESIGN (Full container base) */}
            <div className="absolute inset-0 bg-[#0E1015] p-6 sm:p-10 flex flex-col justify-between overflow-hidden">
              {/* Modern Nav */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-[#A3FFCB] flex items-center justify-center font-bold text-black text-xs">
                    M
                  </div>
                  <span className="font-display font-bold text-white text-sm sm:text-base tracking-tight">
                    MILLER CLINIC
                  </span>
                </div>
                <div className="hidden sm:flex items-center gap-6 text-xs text-[#9DA3AF]">
                  <span>Treatments</span>
                  <span>Results</span>
                  <span>Lincoln Practice</span>
                </div>
                <button className="px-4 py-1.5 bg-[#A3FFCB] text-[#08090B] font-semibold text-xs rounded-md">
                  Book Online ↗
                </button>
              </div>

              {/* Modern Hero Content */}
              <div className="my-auto max-w-xl">
                <span className="inline-block text-[11px] font-mono tracking-widest text-[#A3FFCB] uppercase mb-2">
                  Lincolnshire's Advanced Skin Clinic
                </span>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white leading-tight mb-4">
                  Natural aesthetic balance, backed by medical precision.
                </h3>
                <p className="text-sm sm:text-base text-[#9DA3AF] leading-relaxed mb-6">
                  Doctor-led cosmetic injectables, medical skincare and laser dermatology in central Lincoln.
                </p>
                <div className="flex items-center gap-3">
                  <button className="px-5 py-2.5 bg-white text-black font-semibold text-xs rounded-lg hover:bg-neutral-200">
                    Explore Treatments
                  </button>
                  <span className="text-xs font-mono text-white/60">
                    ★ 5.0 (140+ Patient Reviews)
                  </span>
                </div>
              </div>

              {/* Modern Footer Metrics */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10 text-xs">
                <div>
                  <span className="text-[#A3FFCB] font-mono font-bold block">12+ Years</span>
                  <span className="text-[#9DA3AF]">Clinical Experience</span>
                </div>
                <div>
                  <span className="text-[#A3FFCB] font-mono font-bold block">GMC Registered</span>
                  <span className="text-[#9DA3AF]">Doctor Led Care</span>
                </div>
                <div>
                  <span className="text-[#A3FFCB] font-mono font-bold block">Bespoke Plan</span>
                  <span className="text-[#9DA3AF]">Tailored to You</span>
                </div>
              </div>
            </div>

            {/* LEFT SIDE: OUTDATED BEFORE (Clipped by sliderPosition) */}
            <div
              className="absolute inset-0 bg-[#E8EEF5] text-blue-950 p-6 sm:p-10 flex flex-col justify-between overflow-hidden border-r-2 border-red-400"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              {/* Outdated 2012 Nav */}
              <div className="bg-[#1E3A8A] text-white p-3 rounded-none flex items-center justify-between border-b-4 border-yellow-400">
                <div>
                  <span className="font-serif font-bold text-base sm:text-lg">
                    DR. MILLER'S BEAUTY CLINIC LTD
                  </span>
                  <span className="block text-[10px] text-yellow-300">
                    Est. 2008 - Call 01522 555 123 Today!
                  </span>
                </div>
                <div className="hidden sm:flex items-center gap-2 text-[11px] underline">
                  <span>Home</span>
                  <span>About</span>
                  <span>Prices</span>
                  <span>Contact</span>
                </div>
              </div>

              {/* Outdated 2012 Cluttered Content */}
              <div className="my-auto max-w-lg bg-white/90 p-5 border-2 border-blue-900 shadow-sm">
                <div className="bg-yellow-200 text-red-700 px-2 py-0.5 text-xs font-bold mb-2 inline-block">
                  *** 2014 SPECIAL OFFER - CLICK HERE ***
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-black text-blue-900 leading-snug mb-2">
                  Welcome To Dr Miller Aesthetic Clinic in Lincoln!
                </h3>
                <p className="text-xs text-neutral-800 mb-4 leading-normal">
                  We do botox, fillers, skin peels and mole checks. Please fill our PDF form and fax or email back. We are open Monday to Friday 9am till 4pm.
                </p>
                <div className="flex flex-col gap-2">
                  <button className="bg-gradient-to-b from-blue-500 to-blue-800 text-white font-bold text-xs py-2 px-4 rounded shadow border border-blue-900">
                    Click Here To Email Us Your Details &gt;&gt;
                  </button>
                  <span className="text-[10px] text-neutral-500 italic">
                    Best viewed on Internet Explorer 8 (1024x768 resolution)
                  </span>
                </div>
              </div>

              {/* Outdated Cluttered Badges */}
              <div className="bg-neutral-200 p-2 text-[10px] border border-neutral-400 flex justify-between">
                <span>Copyright © 2012 Dr Miller Aesthetics</span>
                <span>Hit counter: 004128</span>
              </div>
            </div>

            {/* Draggable Divider Line & Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] z-30 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div
                onMouseDown={handleMouseDown}
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-black shadow-2xl flex items-center justify-center pointer-events-auto cursor-ew-resize border-2 border-[#08090B] transition-transform hover:scale-110 active:scale-95"
              >
                <ArrowLeftRight className="w-4 h-4 text-neutral-900" />
              </div>
            </div>

          </div>

          {/* Interactive helper prompt */}
          <p className="text-center text-xs font-mono text-[#9DA3AF] mt-3">
            ← Drag slider horizontally or use keyboard arrows to inspect difference →
          </p>
        </div>

        {/* Section Conversion Strip */}
        <div className="text-center mt-12">
          <p className="text-xl font-bold text-white mb-2">
            "Your business might be brilliant. Your website should show it."
          </p>
          <p className="text-sm text-[#9DA3AF] max-w-lg mx-auto mb-6">
            An outdated website actively sends prospective clients straight to your competitors. Let's fix that.
          </p>
          <button
            onClick={onTransformWebsite}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#A3FFCB] hover:bg-[#8affbf] text-[#08090B] font-semibold text-sm rounded-lg transition-all duration-200 shadow-[0_0_20px_rgba(163,255,203,0.3)]"
          >
            <span>Let's Transform Your Website</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
