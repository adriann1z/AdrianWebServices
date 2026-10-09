import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Simple active section spy
      const sections = ['home', 'work', 'switcher', 'services', 'pricing', 'about', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#08090B]/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar 3-Zone Contract */}
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single Brand Lockup */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('home');
            }}
            className="whitespace-nowrap shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A3FFCB]"
            aria-label="Adrian Web Services Home"
          >
            <BrandLogo size="md" />
          </a>

          {/* Zone 2: 5 Concise Single-Line Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#9DA3AF]">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('home');
              }}
              className={`whitespace-nowrap transition-colors duration-200 hover:text-white ${
                activeSection === 'home' ? 'text-white' : ''
              }`}
            >
              Home
            </a>
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('work');
              }}
              className={`whitespace-nowrap transition-colors duration-200 hover:text-white ${
                activeSection === 'work' ? 'text-white' : ''
              }`}
            >
              Work
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('services');
              }}
              className={`whitespace-nowrap transition-colors duration-200 hover:text-white ${
                activeSection === 'services' ? 'text-white' : ''
              }`}
            >
              Services
            </a>
            <a
              href="#pricing"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('pricing');
              }}
              className={`whitespace-nowrap transition-colors duration-200 hover:text-white ${
                activeSection === 'pricing' ? 'text-white' : ''
              }`}
            >
              Pricing
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('about');
              }}
              className={`whitespace-nowrap transition-colors duration-200 hover:text-white ${
                activeSection === 'about' ? 'text-white' : ''
              }`}
            >
              About
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => {
                const target = document.getElementById('contact');
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth' });
                } else {
                  onOpenContact();
                }
              }}
              className="relative group inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wide text-[#08090B] bg-[#A3FFCB] rounded-md transition-all duration-200 hover:bg-[#8affbf] hover:shadow-[0_0_20px_rgba(163,255,203,0.35)] active:scale-[0.98] whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#9DA3AF] hover:text-white rounded-md border border-white/10 hover:border-white/20 focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#08090B]/98 backdrop-blur-xl border-b border-white/10 px-6 py-6 transition-all duration-200">
          <nav className="flex flex-col gap-4 text-base font-medium">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('home');
              }}
              className="text-white hover:text-[#A3FFCB] transition-colors py-1"
            >
              Home
            </a>
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('work');
              }}
              className="text-[#9DA3AF] hover:text-white transition-colors py-1"
            >
              Selected Work
            </a>
            <a
              href="#switcher"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('switcher');
              }}
              className="text-[#9DA3AF] hover:text-white transition-colors py-1"
            >
              Interactive Style Switcher
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('services');
              }}
              className="text-[#9DA3AF] hover:text-white transition-colors py-1"
            >
              Services & Bento
            </a>
            <a
              href="#pricing"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('pricing');
              }}
              className="text-[#9DA3AF] hover:text-white transition-colors py-1"
            >
              Pricing & Maintenance
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('about');
              }}
              className="text-[#9DA3AF] hover:text-white transition-colors py-1"
            >
              About Adrian
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('contact');
              }}
              className="text-[#9DA3AF] hover:text-white transition-colors py-1"
            >
              Contact & Free Mockup
            </a>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
              <span className="text-xs font-mono text-[#9DA3AF]">Lincoln, UK · 07828 767631</span>
              <button
                onClick={() => scrollTo('contact')}
                className="w-full text-center py-2.5 bg-[#A3FFCB] text-[#08090B] font-semibold text-sm rounded-md mt-1"
              >
                Get Free Website Mockup ↗
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
