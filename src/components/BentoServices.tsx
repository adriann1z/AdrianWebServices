import React, { useState } from 'react';
import { 
  Palette, 
  Code2, 
  RefreshCcw, 
  Server, 
  Smartphone, 
  Search, 
  ArrowUpRight, 
  Check, 
  Activity, 
  Zap,
  Layers,
  Sparkles
} from 'lucide-react';

interface BentoServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const BentoServices: React.FC<BentoServicesProps> = ({ onSelectService }) => {
  const [activeTabDev, setActiveTabDev] = useState<'code' | 'preview'>('preview');
  const [responsiveDevice, setResponsiveDevice] = useState<'phone' | 'tablet' | 'desktop'>('phone');
  const [designGridActive, setDesignGridActive] = useState(true);

  return (
    <section id="services" className="py-24 bg-[#08090B] relative overflow-hidden border-t border-white/10">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#A3FFCB]/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-mono tracking-widest text-[#A3FFCB] uppercase">
            <Layers className="w-3.5 h-3.5" />
            <span>Core Capabilities & Bento Grid</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Everything your website needs. <br className="hidden sm:inline" />
            Nothing it doesn't.
          </h2>

          <p className="text-base sm:text-lg text-[#9DA3AF] leading-relaxed">
            No bloated themes or monthly plugin breakages. Every site is engineered from scratch with clean modern technologies, rock-solid security and uncompromising speed.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* CARD 1: WEBSITE DESIGN (Span 7) */}
          <div className="md:col-span-7 bg-[#111318] rounded-2xl border border-white/10 p-6 sm:p-8 flex flex-col justify-between group hover:border-white/20 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-[#A3FFCB]">01. Strategy & UI</span>
                <button
                  onClick={() => setDesignGridActive(!designGridActive)}
                  className="text-[11px] font-mono text-[#9DA3AF] hover:text-white px-2 py-1 rounded bg-white/5 border border-white/5 transition-colors"
                >
                  {designGridActive ? 'Hide Wireframe Grid' : 'Show Wireframe Grid'}
                </button>
              </div>

              <h3 className="font-display text-2xl font-bold text-white mb-2">
                Website Design
              </h3>
              <p className="text-sm text-[#9DA3AF] leading-relaxed mb-6">
                Distinctive, modern designs made specifically for your business and customers. No pre-bought templates.
              </p>
            </div>

            {/* Interactive Layout Assembling Visual */}
            <div className={`p-4 rounded-xl bg-[#08090B] border border-white/10 relative overflow-hidden transition-all duration-300 ${designGridActive ? 'bg-tech-grid' : ''}`}>
              <div className="flex items-center justify-between mb-3 text-xs text-[#9DA3AF] font-mono border-b border-white/10 pb-2">
                <span className="text-white font-semibold">Bespoke Layout Blueprint</span>
                <span className="text-[#A3FFCB]">Precision Spacing</span>
              </div>
              <div className="space-y-2">
                {/* Simulated Header Bar */}
                <div className="h-6 w-full rounded bg-white/10 flex items-center justify-between px-3">
                  <div className="w-12 h-2 rounded bg-white/30" />
                  <div className="flex gap-2">
                    <div className="w-8 h-1.5 rounded bg-white/20" />
                    <div className="w-8 h-1.5 rounded bg-white/20" />
                  </div>
                </div>
                {/* Simulated Hero Split */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="col-span-2 h-20 rounded bg-white/5 p-2 flex flex-col justify-center gap-1.5 border border-white/5">
                    <div className="w-3/4 h-3 rounded bg-[#A3FFCB]/40" />
                    <div className="w-1/2 h-2 rounded bg-white/20" />
                    <div className="w-16 h-4 rounded bg-[#A3FFCB] mt-1" />
                  </div>
                  <div className="col-span-1 h-20 rounded bg-white/10 border border-white/5 flex items-center justify-center">
                    <Palette className="w-5 h-5 text-[#A3FFCB]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-[#9DA3AF]">Tailored to UK Small Businesses</span>
              <button
                onClick={() => onSelectService('Website Design')}
                className="text-xs font-semibold text-white hover:text-[#A3FFCB] flex items-center gap-1"
              >
                Learn More <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* CARD 2: WEBSITE DEVELOPMENT (Span 5) */}
          <div className="md:col-span-5 bg-[#111318] rounded-2xl border border-white/10 p-6 sm:p-8 flex flex-col justify-between group hover:border-white/20 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-[#A3FFCB]">02. Engineering</span>
                <div className="flex items-center gap-1 bg-white/5 p-0.5 rounded text-[10px] font-mono">
                  <button
                    onClick={() => setActiveTabDev('preview')}
                    className={`px-2 py-0.5 rounded transition-colors ${activeTabDev === 'preview' ? 'bg-[#A3FFCB] text-black font-semibold' : 'text-[#9DA3AF]'}`}
                  >
                    UI
                  </button>
                  <button
                    onClick={() => setActiveTabDev('code')}
                    className={`px-2 py-0.5 rounded transition-colors ${activeTabDev === 'code' ? 'bg-[#A3FFCB] text-black font-semibold' : 'text-[#9DA3AF]'}`}
                  >
                    Code
                  </button>
                </div>
              </div>

              <h3 className="font-display text-2xl font-bold text-white mb-2">
                Website Development
              </h3>
              <p className="text-sm text-[#9DA3AF] leading-relaxed mb-6">
                Fast, responsive and professionally built websites that work beautifully on every screen.
              </p>
            </div>

            {/* Interactive Code vs Component Preview */}
            <div className="p-4 rounded-xl bg-[#08090B] border border-white/10 min-h-[140px] flex items-center justify-center font-mono text-xs">
              {activeTabDev === 'code' ? (
                <div className="text-left w-full space-y-1 text-white/70">
                  <p><span className="text-[#A3FFCB]">export const</span> Page = () =&gt; &#123;</p>
                  <p className="pl-4 text-emerald-400">// Zero bloat, instant hydration</p>
                  <p className="pl-4"><span className="text-sky-300">return</span> &lt;<span className="text-[#A3FFCB]">SpeedGrade</span> score=&#123;100&#125; /&gt;</p>
                  <p>&#125;;</p>
                </div>
              ) : (
                <div className="w-full flex flex-col items-center justify-center p-2 text-center">
                  <div className="w-10 h-10 rounded-full bg-[#A3FFCB]/10 border border-[#A3FFCB]/30 flex items-center justify-center mb-2">
                    <Zap className="w-5 h-5 text-[#A3FFCB]" />
                  </div>
                  <span className="font-bold text-white text-sm">Ultra-Lightweight Bundle</span>
                  <span className="text-[11px] text-[#9DA3AF] mt-0.5">&lt; 0.5s First Contentful Paint</span>
                </div>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-[#9DA3AF]">React · TypeScript · Tailwind</span>
              <button
                onClick={() => onSelectService('Website Development')}
                className="text-xs font-semibold text-white hover:text-[#A3FFCB] flex items-center gap-1"
              >
                Learn More <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* CARD 3: WEBSITE REDESIGN (Span 4) */}
          <div className="md:col-span-4 bg-[#111318] rounded-2xl border border-white/10 p-6 sm:p-8 flex flex-col justify-between group hover:border-white/20 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-[#A3FFCB]">03. Modernisation</span>
                <RefreshCcw className="w-4 h-4 text-[#9DA3AF]" />
              </div>

              <h3 className="font-display text-xl font-bold text-white mb-2">
                Website Redesign
              </h3>
              <p className="text-sm text-[#9DA3AF] leading-relaxed mb-6">
                Turn an outdated online presence into something you'll be proud to share with every prospective client.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#08090B] border border-white/10 flex flex-col gap-2 text-xs font-mono">
              <div className="flex items-center justify-between text-neutral-500 line-through">
                <span>✕ Clunky 2015 Layout</span>
                <span>Laggy</span>
              </div>
              <div className="flex items-center justify-between text-[#A3FFCB] font-semibold">
                <span className="flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> 2026 Editorial Redesign
                </span>
                <span>Instant</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-[#9DA3AF]">Preserves Business Equity</span>
              <button
                onClick={() => onSelectService('Website Redesign')}
                className="text-xs font-semibold text-white hover:text-[#A3FFCB] flex items-center gap-1"
              >
                Details <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* CARD 4: HOSTING & MAINTENANCE (Span 4) */}
          <div className="md:col-span-4 bg-[#111318] rounded-2xl border border-white/10 p-6 sm:p-8 flex flex-col justify-between group hover:border-white/20 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-[#A3FFCB]">04. Fully Managed</span>
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#A3FFCB]">
                  <span className="w-2 h-2 rounded-full bg-[#A3FFCB] animate-pulse" />
                  <span>£20/mo</span>
                </div>
              </div>

              <h3 className="font-display text-xl font-bold text-white mb-2">
                Hosting & Maintenance
              </h3>
              <p className="text-sm text-[#9DA3AF] leading-relaxed mb-6">
                Your website stays online, maintained and updated without the technical hassle.
              </p>
            </div>

            {/* Live Uptime & SSL Animation */}
            <div className="p-4 rounded-xl bg-[#08090B] border border-white/10 space-y-2 text-xs font-mono">
              <div className="flex items-center justify-between">
                <span className="text-[#9DA3AF]">Global Uptime:</span>
                <span className="text-[#A3FFCB] font-bold">99.98%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#9DA3AF]">SSL Certificate:</span>
                <span className="text-white">Active (Auto-renew)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#9DA3AF]">Content Edits:</span>
                <span className="text-white">Personal WhatsApp/Email</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-[#9DA3AF]">Zero Tech Burden</span>
              <button
                onClick={() => onSelectService('Hosting & Maintenance')}
                className="text-xs font-semibold text-white hover:text-[#A3FFCB] flex items-center gap-1"
              >
                Details <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* CARD 5: MOBILE OPTIMISATION (Span 4) */}
          <div className="md:col-span-4 bg-[#111318] rounded-2xl border border-white/10 p-6 sm:p-8 flex flex-col justify-between group hover:border-white/20 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-[#A3FFCB]">05. Fluid Layouts</span>
                <Smartphone className="w-4 h-4 text-[#9DA3AF]" />
              </div>

              <h3 className="font-display text-xl font-bold text-white mb-2">
                Mobile Optimisation
              </h3>
              <p className="text-sm text-[#9DA3AF] leading-relaxed mb-6">
                Beautiful experiences on phones, tablets and desktops. Over 70% of UK traffic is mobile.
              </p>
            </div>

            {/* Responsive View Switcher */}
            <div className="p-3.5 rounded-xl bg-[#08090B] border border-white/10 text-xs flex flex-col items-center">
              <div className="flex gap-2 mb-2 font-mono text-[10px]">
                <button
                  onClick={() => setResponsiveDevice('phone')}
                  className={`px-2 py-1 rounded transition-colors ${responsiveDevice === 'phone' ? 'bg-white/20 text-white' : 'text-[#9DA3AF]'}`}
                >
                  Phone
                </button>
                <button
                  onClick={() => setResponsiveDevice('tablet')}
                  className={`px-2 py-1 rounded transition-colors ${responsiveDevice === 'tablet' ? 'bg-white/20 text-white' : 'text-[#9DA3AF]'}`}
                >
                  Tablet
                </button>
                <button
                  onClick={() => setResponsiveDevice('desktop')}
                  className={`px-2 py-1 rounded transition-colors ${responsiveDevice === 'desktop' ? 'bg-white/20 text-white' : 'text-[#9DA3AF]'}`}
                >
                  Desktop
                </button>
              </div>
              <div
                className={`h-12 bg-white/10 rounded border border-white/10 flex items-center justify-center transition-all duration-300 ${
                  responsiveDevice === 'phone'
                    ? 'w-16'
                    : responsiveDevice === 'tablet'
                    ? 'w-32'
                    : 'w-48'
                }`}
              >
                <span className="text-[10px] font-mono text-[#A3FFCB]">Fluid clamp()</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-[#9DA3AF]">44px Touch Targets</span>
              <button
                onClick={() => onSelectService('Mobile Optimisation')}
                className="text-xs font-semibold text-white hover:text-[#A3FFCB] flex items-center gap-1"
              >
                Details <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* CARD 6: SEO FOUNDATIONS (Full width span 12) */}
          <div className="md:col-span-12 bg-[#111318] rounded-2xl border border-white/10 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 group hover:border-white/20 transition-all duration-300">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-xs text-[#A3FFCB]">06. Discovery & Search</span>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                  Schema.org Structured Data
                </span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-2">
                SEO Foundations & Local UK Authority
              </h3>
              <p className="text-sm text-[#9DA3AF] leading-relaxed">
                Built with the essential technical foundations to help Google and Bing understand your business: semantic HTML5, fast server-side response times, open graph tags, and local schema markup.
              </p>
            </div>

            {/* Google Snippet Live Card Preview */}
            <div className="w-full md:w-auto md:min-w-[360px] p-4 rounded-xl bg-[#08090B] border border-white/10 font-sans text-xs">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-4 h-4 rounded-full bg-[#A3FFCB]/20 flex items-center justify-center text-[10px] text-[#A3FFCB]">
                  G
                </div>
                <span className="text-[11px] text-[#9DA3AF] font-mono">yourbusiness.co.uk › lincoln</span>
              </div>
              <div className="text-sky-400 font-semibold text-sm hover:underline cursor-pointer mb-1">
                Your Business Lincoln | Bespoke Services
              </div>
              <div className="text-[#9DA3AF] text-xs line-clamp-2">
                Award-winning customer service in Lincolnshire. Fast booking, certified team, and verified 5.0 Google client rating...
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
