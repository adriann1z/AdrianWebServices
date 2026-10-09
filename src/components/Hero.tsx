import React, { useState, useRef, useEffect } from 'react';
import { ArrowUpRight, ArrowDown, Sparkles, CheckCircle2, ShieldCheck, Cpu } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenMockup: () => void;
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenMockup, onExploreWork }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      // Normalize to -1 ... 1
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      setMousePos({ x: Math.max(-1, Math.min(1, x)), y: Math.max(-1, Math.min(1, y)) });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseenter', () => setIsHovered(true));
      container.addEventListener('mouseleave', () => {
        setIsHovered(false);
        setMousePos({ x: 0, y: 0 });
      });
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const rotateX = isHovered ? -mousePos.y * 12 : 0;
  const rotateY = isHovered ? mousePos.x * 14 : 0;

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-[92vh] pt-32 pb-20 flex items-center overflow-hidden bg-[#08090B] bg-tech-grid"
    >
      {/* Ambient Lighting Gradients */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#A3FFCB]/5 blur-[120px] rounded-full pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute -top-32 right-10 w-[500px] h-[500px] bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Small Eyebrow Text */}
            <div className="inline-flex items-center gap-2 mb-6 text-xs font-mono tracking-widest text-[#9DA3AF] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#A3FFCB] shadow-[0_0_8px_#A3FFCB]" />
              <span>Independent Web Design & Development Studio · Lincoln, UK</span>
            </div>

            {/* Massive Statement Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl xl:text-[4rem] font-bold text-white tracking-tight leading-[1.08] mb-6 text-balance">
              YOUR BUSINESS DESERVES A{' '}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#A3FFCB] via-[#E2FFF0] to-[#A3FFCB] drop-shadow-[0_0_25px_rgba(163,255,203,0.3)]">
                BETTER WEBSITE.
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#A3FFCB] to-transparent opacity-80" />
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-[#9DA3AF] max-w-2xl font-normal leading-relaxed mb-8">
              I design and develop modern, high-performing websites that make your business look exceptional, build trust and turn visitors into enquiries.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <button
                onClick={onOpenMockup}
                className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold tracking-wide text-[#08090B] bg-[#A3FFCB] rounded-lg transition-all duration-200 hover:bg-[#8affbf] hover:shadow-[0_0_25px_rgba(163,255,203,0.4)] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Get Your Free Website Mockup</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                onClick={onExploreWork}
                className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium tracking-wide text-white bg-[#111318] hover:bg-[#191C22] border border-white/10 hover:border-white/20 rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A3FFCB]"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4 text-[#9DA3AF] group-hover:text-white transition-transform duration-200 group-hover:translate-y-0.5" />
              </button>
            </div>

            {/* Subtle Trust Strip */}
            <div className="pt-6 border-t border-white/10 w-full flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#9DA3AF]">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#A3FFCB]" />
                Custom built
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#A3FFCB]" />
                Mobile ready
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#A3FFCB]" />
                Fully managed
              </span>
              <span className="text-white/40 hidden sm:inline">|</span>
              <span className="text-white/70 font-mono">Websites from £295 · Managed from £20/mo</span>
            </div>

          </div>

          {/* Right Column: 3D Interactive Floating Mockup Scene */}
          <div className="lg:col-span-5 relative perspective-[1200px] flex items-center justify-center">
            
            {/* Main Interactive Floating Surface */}
            <motion.div
              style={{
                transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`,
                transition: isHovered ? 'transform 0.15s ease-out' : 'transform 0.6s ease-out',
              }}
              className="relative w-full max-w-[540px] rounded-2xl p-2 bg-[#111318]/90 border border-white/15 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_30px_rgba(163,255,203,0.1)] backdrop-blur-xl group cursor-pointer"
              onClick={onExploreWork}
            >
              {/* Browser Header Bar */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 bg-[#08090B]/60 rounded-t-xl text-xs text-[#9DA3AF]">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                </div>
                <div className="font-mono text-[10px] text-white/60 bg-white/5 px-2.5 py-0.5 rounded border border-white/5 truncate max-w-[200px]">
                  adrianwebservices.co.uk/showcase
                </div>
                <div className="flex items-center gap-1 text-[10px] text-[#A3FFCB] font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A3FFCB]" />
                  99.9%
                </div>
              </div>

              {/* Main Realistic Mockup Image */}
              <div className="relative aspect-video rounded-b-xl overflow-hidden bg-[#08090B]">
                <img
                  src="/src/assets/images/hero_web_showcase_1791569635989.jpg"
                  alt="Adrian Web Services interactive digital portfolio interface"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Glowing Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-transparent to-transparent opacity-60" />

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <div className="bg-[#08090B]/85 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/10 text-xs">
                    <span className="font-semibold text-white">Live Client Architecture</span>
                    <span className="text-[#9DA3AF] ml-2 font-mono text-[10px]">· 0.4s load</span>
                  </div>
                  <div className="bg-[#A3FFCB]/20 text-[#A3FFCB] border border-[#A3FFCB]/40 px-2 py-1 rounded text-[11px] font-mono">
                    Interactive Preview
                  </div>
                </div>
              </div>

              {/* Suspended Secondary Floating Badge 1 - Top Right */}
              <div 
                className="hidden sm:flex absolute -top-5 -right-5 items-center gap-2 px-3 py-2 bg-[#191C22]/95 border border-white/20 rounded-lg shadow-xl backdrop-blur-md text-xs transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                style={{ transform: `translateZ(40px)` }}
              >
                <Cpu className="w-4 h-4 text-[#A3FFCB]" />
                <div>
                  <div className="font-semibold text-white">100 / 100</div>
                  <div className="text-[10px] text-[#9DA3AF]">Core Web Vitals</div>
                </div>
              </div>

              {/* Suspended Secondary Floating Badge 2 - Bottom Left */}
              <div 
                className="hidden sm:flex absolute -bottom-6 -left-6 items-center gap-2.5 px-3.5 py-2.5 bg-[#191C22]/95 border border-white/20 rounded-lg shadow-2xl backdrop-blur-md text-xs transition-transform duration-300 group-hover:-translate-x-1 group-hover:translate-y-1"
                style={{ transform: `translateZ(50px)` }}
              >
                <ShieldCheck className="w-4 h-4 text-[#A3FFCB]" />
                <div>
                  <div className="font-medium text-white">Lincolnshire Local Support</div>
                  <div className="text-[10px] text-[#9DA3AF]">Direct Developer Access</div>
                </div>
              </div>

            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
