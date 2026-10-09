import React from 'react';
import { BrandLogo } from './BrandLogo';
import { ArrowUpRight, Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenCookies: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenCookies,
  onOpenContact,
}) => {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#050608] border-t border-white/10 pt-20 pb-12 relative overflow-hidden">
      
      {/* Background ambient light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-[#A3FFCB]/5 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand & Purpose (Col 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <BrandLogo size="lg" className="mb-4" />
              <p className="text-base text-[#9DA3AF] max-w-sm mb-6 leading-relaxed">
                Thoughtfully designed. Professionally developed. Personally managed.
              </p>
              <p className="text-xs font-mono text-[#9DA3AF] leading-relaxed max-w-xs">
                Independent web design & development studio based in Lincoln, UK. Bespoke websites without intimidating agency prices.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-[#A3FFCB]">
              <span className="w-2 h-2 rounded-full bg-[#A3FFCB] shadow-[0_0_8px_#A3FFCB]" />
              <span>Accepting New Client Projects for {currentYear}</span>
            </div>
          </div>

          {/* Quick Navigation (Col 2) */}
          <div className="lg:col-span-2">
            <span className="text-xs font-mono uppercase tracking-widest text-white/50 block mb-4">
              Explore
            </span>
            <ul className="space-y-2.5 text-sm text-[#9DA3AF]">
              <li>
                <button
                  onClick={() => scrollTo('home')}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('work')}
                  className="hover:text-white transition-colors"
                >
                  Selected Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('switcher')}
                  className="hover:text-white transition-colors"
                >
                  Style Switcher
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('services')}
                  className="hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('pricing')}
                  className="hover:text-white transition-colors"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('about')}
                  className="hover:text-white transition-colors"
                >
                  About Adrian
                </button>
              </li>
            </ul>
          </div>

          {/* Core Services (Col 2) */}
          <div className="lg:col-span-2">
            <span className="text-xs font-mono uppercase tracking-widest text-white/50 block mb-4">
              Services
            </span>
            <ul className="space-y-2.5 text-sm text-[#9DA3AF]">
              <li>
                <button
                  onClick={() => scrollTo('services')}
                  className="hover:text-white transition-colors"
                >
                  Bespoke Web Design
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('services')}
                  className="hover:text-white transition-colors"
                >
                  Frontend Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('services')}
                  className="hover:text-white transition-colors"
                >
                  Website Redesigns
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('pricing')}
                  className="hover:text-white transition-colors"
                >
                  Managed Care (£20/mo)
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('services')}
                  className="hover:text-white transition-colors"
                >
                  Local SEO Foundations
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details (Col 3) */}
          <div className="lg:col-span-3">
            <span className="text-xs font-mono uppercase tracking-widest text-white/50 block mb-4">
              Direct Contact
            </span>
            <ul className="space-y-3 text-sm text-[#9DA3AF]">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#A3FFCB] shrink-0" />
                <a href="tel:07828767631" className="text-white hover:text-[#A3FFCB] transition-colors">
                  07828 767631
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#A3FFCB] shrink-0" />
                <a href="mailto:adrixnwrx@gmail.com" className="text-white hover:text-[#A3FFCB] transition-colors font-mono text-xs">
                  adrixnwrx@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#A3FFCB] shrink-0 mt-0.5" />
                <span>Lincoln, Lincolnshire, United Kingdom</span>
              </li>
            </ul>

            <div className="mt-6">
              <button
                onClick={onOpenContact}
                className="w-full py-2.5 px-4 bg-white/10 hover:bg-white/15 text-white text-xs font-semibold rounded-lg border border-white/10 flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Request Free Mockup</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#A3FFCB]" />
              </button>
            </div>
          </div>

        </div>

        {/* Oversized Typographic Wordmark Treatment */}
        <div className="py-12 select-none overflow-hidden">
          <div className="text-[clamp(2.5rem,8vw,7.5rem)] font-display font-black tracking-tighter text-white/[0.04] uppercase leading-none whitespace-nowrap text-center">
            ADRIAN WEB SERVICES
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/5 text-xs text-[#9DA3AF]">
          <div className="flex items-center gap-2">
            <span>© {currentYear} Adrian Web Services. Founded by Adrian Wrezel.</span>
          </div>

          <div className="flex items-center gap-6 font-mono text-[11px]">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors"
            >
              Privacy Policy (Draft)
            </button>
            <button
              onClick={onOpenCookies}
              className="hover:text-white transition-colors"
            >
              Cookie Policy (Draft)
            </button>
            <span>Lincoln, UK</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
