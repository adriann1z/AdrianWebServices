import React, { useState } from 'react';
import { WebsiteStyle } from '../types';
import { Sparkles, Check, ArrowRight, Eye, RefreshCw, Layout, Smartphone, Monitor } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface InteractiveStyleSwitcherProps {
  onSelectStyle: (styleName: string) => void;
}

export const InteractiveStyleSwitcher: React.FC<InteractiveStyleSwitcherProps> = ({ onSelectStyle }) => {
  const [activeStyle, setActiveStyle] = useState<WebsiteStyle>('minimal');
  const [deviceView, setDeviceView] = useState<'desktop' | 'mobile'>('desktop');

  const styleConfigs = {
    minimal: {
      name: 'Minimal',
      badge: 'Editorial & Clean',
      description: 'Clean stark layouts, refined Swiss grid, elegant monochrome typography and generous whitespace for contemporary brands.',
      primaryColor: '#000000',
      accentColor: '#171717',
    },
    luxury: {
      name: 'Luxury',
      badge: 'High-End & Editorial',
      description: 'Deep obsidian surfaces, warm champagne-gold metallic accents, bespoke serif typography and high-touch sophistication.',
      primaryColor: '#C9A86A',
      accentColor: '#1C1917',
    },
    bold: {
      name: 'Bold',
      badge: 'High-Impact & Dynamic',
      description: 'Electrifying neon contrasts, oversized display lettering, dynamic asymmetrical geometry and high-conversion energy.',
      primaryColor: '#A3FFCB',
      accentColor: '#0D1117',
    },
  };

  return (
    <section id="switcher" className="py-24 bg-[#08090B] relative overflow-hidden border-t border-white/10">
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#A3FFCB]/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-mono tracking-widest text-[#A3FFCB] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Live Demonstration</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            One business. Endless possibilities.
          </h2>

          <p className="text-base sm:text-lg text-[#9DA3AF] leading-relaxed">
            Instead of telling you I can build beautiful websites, test it live. Watch how the exact same business transforms instantly across three completely distinct design philosophies.
          </p>
        </div>

        {/* Style Selector Buttons (Interactive Segmented Control) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-[#111318] p-2 sm:p-3 rounded-2xl border border-white/10 max-w-4xl mx-auto">
          {/* 3 Style Pills */}
          <div className="grid grid-cols-3 gap-2 w-full sm:w-auto">
            {(['minimal', 'luxury', 'bold'] as WebsiteStyle[]).map((style) => (
              <button
                key={style}
                onClick={() => setActiveStyle(style)}
                className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap ${
                  activeStyle === style
                    ? 'bg-white text-black shadow-lg scale-[1.02]'
                    : 'text-[#9DA3AF] hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="uppercase tracking-wider">{style}</span>
                {activeStyle === style && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />}
              </button>
            ))}
          </div>

          {/* Device viewport toggle */}
          <div className="flex items-center gap-2 self-end sm:self-auto text-xs text-[#9DA3AF]">
            <span className="text-[11px] font-mono mr-1">View:</span>
            <button
              onClick={() => setDeviceView('desktop')}
              className={`p-1.5 rounded-md transition-colors ${
                deviceView === 'desktop' ? 'bg-white/15 text-white' : 'text-[#9DA3AF] hover:text-white'
              }`}
              title="Desktop View"
              aria-label="Desktop view"
            >
              <Monitor className="w-4 h-4" />
            </button>
            <button
              onClick={() => setDeviceView('mobile')}
              className={`p-1.5 rounded-md transition-colors ${
                deviceView === 'mobile' ? 'bg-white/15 text-white' : 'text-[#9DA3AF] hover:text-white'
              }`}
              title="Mobile View"
              aria-label="Mobile view"
            >
              <Smartphone className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Realistic Browser Container */}
        <div className="max-w-5xl mx-auto transition-all duration-300">
          <div
            className={`mx-auto bg-[#111318] rounded-2xl border border-white/15 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden transition-all duration-500 ${
              deviceView === 'mobile' ? 'max-w-sm ring-8 ring-white/10' : 'w-full'
            }`}
          >
            {/* Realistic Browser / OS Header */}
            <div className="bg-[#191C22] px-4 py-3 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
              </div>
              <div className="bg-[#08090B] px-4 py-1 rounded-md text-[11px] font-mono text-[#9DA3AF] flex items-center gap-2 border border-white/5 truncate max-w-[280px]">
                <span className="text-[#A3FFCB]">https://</span>
                <span>lumina-lincoln.co.uk</span>
              </div>
              <div className="text-[11px] font-mono text-white/50 hidden sm:block">
                {styleConfigs[activeStyle].name} Edition
              </div>
            </div>

            {/* Live Interactive Preview Canvas */}
            <div className="relative min-h-[460px] sm:min-h-[520px] transition-colors duration-500 overflow-hidden">
              <AnimatePresence mode="wait">
                
                {/* 1. MINIMAL THEME */}
                {activeStyle === 'minimal' && (
                  <motion.div
                    key="minimal"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 sm:p-10 bg-[#FAFAFA] text-[#0A0A0A] font-sans h-full flex flex-col justify-between"
                  >
                    {/* Minimal Nav */}
                    <div className="flex items-center justify-between border-b border-black/10 pb-4">
                      <span className="text-lg font-bold tracking-tighter uppercase font-mono">
                        LUMINA ARCHITECTURE
                      </span>
                      <div className="hidden sm:flex items-center gap-6 text-xs uppercase tracking-widest text-black/60 font-mono">
                        <span>Projects</span>
                        <span>Practice</span>
                        <span>Lincoln Studio</span>
                      </div>
                      <span className="text-xs uppercase font-mono underline cursor-pointer">
                        Enquire
                      </span>
                    </div>

                    {/* Minimal Hero Content */}
                    <div className="my-8 sm:my-12 max-w-2xl">
                      <p className="text-xs uppercase tracking-[0.25em] text-neutral-500 font-mono mb-3">
                        Residential & Spatial Design · Established 2018
                      </p>
                      <h3 className="text-3xl sm:text-5xl font-light tracking-tight leading-tight text-neutral-900 mb-6">
                        Purity of light, <br />
                        <span className="font-semibold italic font-serif">honest British stone.</span>
                      </h3>
                      <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-lg mb-8">
                        We design quiet, light-filled homes and bespoke extensions across Lincolnshire with architectural discipline and tactile natural finishes.
                      </p>

                      <div className="flex items-center gap-4">
                        <button className="px-6 py-2.5 bg-black text-white text-xs uppercase font-mono tracking-wider hover:bg-neutral-800 transition-colors">
                          View 2026 Portfolio
                        </button>
                        <button className="px-4 py-2 text-xs uppercase font-mono tracking-wider text-neutral-600 hover:text-black">
                          Studio Bio →
                        </button>
                      </div>
                    </div>

                    {/* Minimal Footer Strip */}
                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-black/10 text-xs font-mono text-neutral-500">
                      <div>
                        <span className="block text-black font-semibold">01 / Residential</span>
                        Bespoke New Builds
                      </div>
                      <div>
                        <span className="block text-black font-semibold">02 / Extensions</span>
                        Glass & Oak Pavilion
                      </div>
                      <div>
                        <span className="block text-black font-semibold">03 / Planning</span>
                        Lincoln Heritage Consent
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* 2. LUXURY THEME */}
                {activeStyle === 'luxury' && (
                  <motion.div
                    key="luxury"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 sm:p-10 bg-[#121110] text-[#EDE8E1] h-full flex flex-col justify-between relative overflow-hidden"
                  >
                    {/* Ambient Gold Sheen */}
                    <div className="absolute top-0 right-0 w-80 h-80 bg-[#C9A86A]/10 blur-[100px] pointer-events-none" />

                    {/* Luxury Nav */}
                    <div className="flex items-center justify-between border-b border-[#C9A86A]/20 pb-4 relative z-10">
                      <div className="flex flex-col">
                        <span className="text-base sm:text-lg font-serif tracking-[0.15em] text-[#E8DFD3] uppercase">
                          LUMINA PRIVATE
                        </span>
                        <span className="text-[9px] font-mono tracking-[0.3em] text-[#C9A86A] uppercase">
                          Bespoke Architectural Atelier
                        </span>
                      </div>
                      <div className="hidden sm:flex items-center gap-6 text-xs tracking-widest text-[#BDB5A9] font-serif uppercase">
                        <span>The Collection</span>
                        <span>Heritage</span>
                        <span>Private Commission</span>
                      </div>
                      <button className="px-4 py-1.5 border border-[#C9A86A]/60 text-[#C9A86A] text-xs font-serif uppercase tracking-widest hover:bg-[#C9A86A] hover:text-black transition-colors">
                        Consultation
                      </button>
                    </div>

                    {/* Luxury Hero Content */}
                    <div className="my-8 sm:my-10 max-w-2xl relative z-10">
                      <span className="inline-block text-xs font-serif italic text-[#C9A86A] mb-3">
                        Excellence in Heritage Architecture & Interior Living
                      </span>
                      <h3 className="text-3xl sm:text-5xl font-serif text-[#F4EFEA] tracking-tight leading-[1.15] mb-5">
                        Architectural poetry <br />
                        <span className="text-[#C9A86A] italic">etched in bronze & timber.</span>
                      </h3>
                      <p className="text-sm sm:text-base text-[#B0A79A] leading-relaxed max-w-lg mb-8 font-serif">
                        Curating bespoke country estates, private sanctuaries and discreet heritage restorations for discerning UK clients.
                      </p>

                      <div className="flex items-center gap-4">
                        <button className="px-6 py-3 bg-[#C9A86A] text-[#121110] text-xs font-serif font-semibold uppercase tracking-[0.2em] shadow-lg hover:bg-[#deb975] transition-colors">
                          Arrange Private Viewing
                        </button>
                        <span className="text-xs font-serif italic text-[#9B9386]">
                          By private appointment only
                        </span>
                      </div>
                    </div>

                    {/* Luxury Footer Strip */}
                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#C9A86A]/20 text-xs text-[#A39A8E] relative z-10">
                      <div>
                        <span className="text-[#C9A86A] font-serif block">Private Estates</span>
                        Lincolnshire & Cotswolds
                      </div>
                      <div>
                        <span className="text-[#C9A86A] font-serif block">Restorations</span>
                        Grade II Listed Specialist
                      </div>
                      <div>
                        <span className="text-[#C9A86A] font-serif block">Materials</span>
                        Handcrafted Limestone
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* 3. BOLD THEME */}
                {activeStyle === 'bold' && (
                  <motion.div
                    key="bold"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 sm:p-10 bg-[#08090B] text-white h-full flex flex-col justify-between relative overflow-hidden"
                  >
                    {/* Vibrant Accent Flare */}
                    <div className="absolute top-0 right-0 w-72 h-72 bg-[#A3FFCB]/15 blur-[90px] pointer-events-none" />

                    {/* Bold Nav */}
                    <div className="flex items-center justify-between border-b-2 border-white/20 pb-4 relative z-10">
                      <div className="flex items-center gap-2">
                        <span className="bg-[#A3FFCB] text-black text-xs font-black px-2 py-0.5 rounded uppercase font-mono">
                          LUMINA
                        </span>
                        <span className="text-sm font-black tracking-tight uppercase">
                          STUDIO / ARCHITECTURE
                        </span>
                      </div>
                      <div className="hidden sm:flex items-center gap-4 text-xs font-mono uppercase text-[#9DA3AF]">
                        <span className="hover:text-[#A3FFCB] cursor-pointer">Work</span>
                        <span className="hover:text-[#A3FFCB] cursor-pointer">Labs</span>
                        <span className="hover:text-[#A3FFCB] cursor-pointer">Lincoln HQ</span>
                      </div>
                      <button className="px-4 py-1.5 bg-[#A3FFCB] text-black font-bold text-xs uppercase hover:bg-white transition-colors">
                        Launch Project ↗
                      </button>
                    </div>

                    {/* Bold Hero Content */}
                    <div className="my-8 sm:my-10 max-w-2xl relative z-10">
                      <div className="inline-block bg-white/10 px-3 py-1 text-xs font-mono text-[#A3FFCB] border border-[#A3FFCB]/30 mb-4">
                        DISRUPTIVE SPATIAL DESIGN // UK
                      </div>
                      <h3 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight uppercase leading-[0.98] mb-6">
                        BUILD BOLD. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A3FFCB] to-[#00D26A]">
                          STAND APART.
                        </span>
                      </h3>
                      <p className="text-sm sm:text-base text-[#9DA3AF] font-medium leading-relaxed max-w-lg mb-8">
                        We build high-energy spaces, bold commercial venues and modern retail headquarters engineered to make an impression.
                      </p>

                      <div className="flex flex-wrap items-center gap-4">
                        <button className="px-7 py-3 bg-[#A3FFCB] text-black font-black text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(163,255,203,0.4)] hover:bg-white transition-all">
                          See Bold Case Studies ↗
                        </button>
                        <span className="text-xs font-mono text-[#9DA3AF]">
                          Zero Boring Templates.
                        </span>
                      </div>
                    </div>

                    {/* Bold Footer Strip */}
                    <div className="grid grid-cols-3 gap-4 pt-6 border-t-2 border-white/20 text-xs font-mono relative z-10">
                      <div>
                        <span className="text-[#A3FFCB] font-bold block">14+ AWARDS</span>
                        UK Spatial Honors
                      </div>
                      <div>
                        <span className="text-[#A3FFCB] font-bold block">3.2X IMPACT</span>
                        Footfall Elevation
                      </div>
                      <div>
                        <span className="text-[#A3FFCB] font-bold block">LINCOLN HQ</span>
                        Nationwide Delivery
                      </div>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Closing Reinforcement */}
        <div className="mt-12 text-center">
          <p className="text-lg font-medium text-white mb-3">
            "Your brand deserves a design that's uniquely yours."
          </p>
          <p className="text-sm text-[#9DA3AF] max-w-xl mx-auto mb-6">
            Whether you need clean and clinical, understated luxury, or high-octane modern impact, your website will be custom crafted to match your exact business positioning.
          </p>
          <button
            onClick={() => onSelectStyle(activeStyle)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm font-semibold transition-all border border-white/15"
          >
            <span>Discuss This Style For Your Business</span>
            <ArrowRight className="w-4 h-4 text-[#A3FFCB]" />
          </button>
        </div>

      </div>
    </section>
  );
};
