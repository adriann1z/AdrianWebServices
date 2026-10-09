import React, { useState } from 'react';
import { Check, ArrowRight, ShieldCheck, HelpCircle, Sparkles, Calculator } from 'lucide-react';

interface PricingSectionProps {
  onSelectTier: (tierName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectTier }) => {
  const [showCalculator, setShowCalculator] = useState(false);
  const [pageCount, setPageCount] = useState<string>('single');
  const [hasBooking, setHasBooking] = useState(false);
  const [hasCopywriting, setHasCopywriting] = useState(false);
  const [needsManaged, setNeedsManaged] = useState(true);

  // Dynamic estimate calculation
  const calculateEstimate = () => {
    let base = 295;
    if (pageCount === 'multi-small') base += 250; // £545 (3-5 pages)
    if (pageCount === 'multi-large') base += 550; // £845 (6-10 pages)
    if (hasBooking) base += 140;
    if (hasCopywriting) base += 120;
    return base;
  };

  return (
    <section id="pricing" className="py-24 bg-[#08090B] relative overflow-hidden border-t border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#A3FFCB]/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-mono tracking-widest text-[#A3FFCB] uppercase">
            <span>Transparent Pricing · No Agency Markup</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Exceptional websites. Straightforward pricing.
          </h2>

          <p className="text-base sm:text-lg text-[#9DA3AF] leading-relaxed">
            Beautiful, professional websites shouldn't require an enormous £10,000 agency budget. Transparent pricing designed specifically for UK independent businesses.
          </p>

          <div className="mt-4">
            <button
              onClick={() => setShowCalculator(!showCalculator)}
              className="inline-flex items-center gap-2 text-xs font-mono text-[#A3FFCB] hover:underline"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>{showCalculator ? 'Hide Interactive Project Estimator' : 'Try Interactive Project Cost Estimator'}</span>
            </button>
          </div>
        </div>

        {/* Optional Interactive Cost Estimator Drawer */}
        {showCalculator && (
          <div className="mb-14 p-6 sm:p-8 bg-[#111318] rounded-2xl border border-[#A3FFCB]/30 max-w-3xl mx-auto shadow-2xl transition-all">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-[#A3FFCB]" />
                <h3 className="font-display font-bold text-white text-lg">Instant Project Estimator</h3>
              </div>
              <span className="text-xs font-mono text-[#9DA3AF]">Tailored Lincoln / UK Scope</span>
            </div>

            <div className="space-y-6">
              {/* Scope Selection */}
              <div>
                <label className="block text-xs font-mono uppercase text-[#9DA3AF] mb-3">
                  Scope & Page Structure:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    onClick={() => setPageCount('single')}
                    className={`p-3 rounded-xl border text-left text-xs transition-all ${
                      pageCount === 'single'
                        ? 'bg-[#A3FFCB]/10 border-[#A3FFCB] text-white'
                        : 'bg-[#191C22] border-white/10 text-[#9DA3AF] hover:text-white'
                    }`}
                  >
                    <span className="font-bold block text-sm">One-Page Landing</span>
                    <span className="text-[11px] opacity-80">Ideal for lead gen & trades</span>
                  </button>

                  <button
                    onClick={() => setPageCount('multi-small')}
                    className={`p-3 rounded-xl border text-left text-xs transition-all ${
                      pageCount === 'multi-small'
                        ? 'bg-[#A3FFCB]/10 border-[#A3FFCB] text-white'
                        : 'bg-[#191C22] border-white/10 text-[#9DA3AF] hover:text-white'
                    }`}
                  >
                    <span className="font-bold block text-sm">3–5 Core Pages</span>
                    <span className="text-[11px] opacity-80">Home, About, Services, Contact</span>
                  </button>

                  <button
                    onClick={() => setPageCount('multi-large')}
                    className={`p-3 rounded-xl border text-left text-xs transition-all ${
                      pageCount === 'multi-large'
                        ? 'bg-[#A3FFCB]/10 border-[#A3FFCB] text-white'
                        : 'bg-[#191C22] border-white/10 text-[#9DA3AF] hover:text-white'
                    }`}
                  >
                    <span className="font-bold block text-sm">6–10 Pages</span>
                    <span className="text-[11px] opacity-80">Full multi-service portal</span>
                  </button>
                </div>
              </div>

              {/* Add-ons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="flex items-center gap-3 p-3 bg-[#191C22] rounded-xl border border-white/10 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hasBooking}
                    onChange={(e) => setHasBooking(e.target.checked)}
                    className="w-4 h-4 rounded accent-[#A3FFCB]"
                  />
                  <div>
                    <span className="text-sm font-semibold text-white block">Interactive Booking Integration</span>
                    <span className="text-[11px] text-[#9DA3AF]">Calendly / Fresha / custom flow</span>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3 bg-[#191C22] rounded-xl border border-white/10 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hasCopywriting}
                    onChange={(e) => setHasCopywriting(e.target.checked)}
                    className="w-4 h-4 rounded accent-[#A3FFCB]"
                  />
                  <div>
                    <span className="text-sm font-semibold text-white block">Professional Copy Assistance</span>
                    <span className="text-[11px] text-[#9DA3AF]">Tailored polish for your content</span>
                  </div>
                </label>
              </div>

              {/* Estimate Result Bar */}
              <div className="p-4 bg-[#08090B] rounded-xl border border-[#A3FFCB]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono text-[#9DA3AF] block">Estimated Project Build:</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-bold font-display text-white">
                      £{calculateEstimate()}
                    </span>
                    <span className="text-xs text-[#A3FFCB] font-mono">one-off investment</span>
                  </div>
                </div>

                <button
                  onClick={() => onSelectTier(`Custom Scope Estimate (~£${calculateEstimate()})`)}
                  className="w-full sm:w-auto px-5 py-2.5 bg-[#A3FFCB] text-[#08090B] font-semibold text-xs rounded-lg hover:bg-[#8affbf] transition-all"
                >
                  Discuss This Estimate With Adrian ↗
                </button>
              </div>
            </div>
          </div>
        )}

        {/* The Two Main Service Packages */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* PACKAGE 1: WEBSITE DESIGN & BUILD */}
          <div className="bg-[#111318] rounded-2xl border border-white/15 p-8 sm:p-10 flex flex-col justify-between relative group hover:border-white/30 transition-all duration-300">
            <div>
              {/* Header Label */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#9DA3AF]">
                  Bespoke Creation
                </span>
                <span className="text-[11px] font-mono text-[#A3FFCB] bg-[#A3FFCB]/10 border border-[#A3FFCB]/20 px-2.5 py-0.5 rounded">
                  One-Off Investment
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
                Website Design & Build
              </h3>
              
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-xs font-mono text-[#9DA3AF]">From</span>
                <span className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight">
                  £295
                </span>
                <span className="text-xs font-mono text-[#9DA3AF]">one-off</span>
              </div>

              <p className="text-sm text-[#9DA3AF] leading-relaxed mb-8">
                A custom-designed, fast and mobile-ready website built to elevate your business credibility and convert prospects into inquiries.
              </p>

              {/* Deliverables List */}
              <ul className="space-y-3.5 mb-8 text-sm text-[#F7F8FA]">
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#A3FFCB] shrink-0 mt-0.5" />
                  <span>Bespoke design tailored specifically to your business</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#A3FFCB] shrink-0 mt-0.5" />
                  <span>Fluid mobile-responsive development (phones, tablets, desktops)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#A3FFCB] shrink-0 mt-0.5" />
                  <span>Validated contact forms & clear conversion call-to-actions</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#A3FFCB] shrink-0 mt-0.5" />
                  <span>Essential SEO setup & Google snippet structured data</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#A3FFCB] shrink-0 mt-0.5" />
                  <span>Professional launch assistance & domain deployment</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#A3FFCB] shrink-0 mt-0.5" />
                  <span>Personal guidance from Adrian throughout the entire build</span>
                </li>
              </ul>
            </div>

            <div>
              {/* Transparency note */}
              <p className="text-xs text-[#9DA3AF] mb-6 border-t border-white/10 pt-4 font-mono leading-relaxed">
                * Note: The final price depends on project scope and page count. £295 represents the starting price for focused websites, not an open-ended rate for all complex enterprise applications.
              </p>

              <button
                onClick={() => onSelectTier('Website Design & Build (From £295)')}
                className="w-full py-3.5 bg-white text-[#08090B] font-semibold text-sm rounded-lg hover:bg-neutral-200 transition-all duration-200 flex items-center justify-center gap-2 group-hover:shadow-lg"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* PACKAGE 2: OPTIONAL FULLY MANAGED WEBSITE CARE */}
          <div className="bg-[#111318] rounded-2xl border-2 border-[#A3FFCB]/40 p-8 sm:p-10 flex flex-col justify-between relative group hover:border-[#A3FFCB] transition-all duration-300 shadow-[0_0_40px_rgba(163,255,203,0.08)]">
            
            {/* Spotlight Tag */}
            <div className="absolute -top-3.5 right-8 bg-[#A3FFCB] text-[#08090B] font-mono text-[11px] font-bold px-3 py-1 rounded uppercase tracking-wider shadow-md">
              Most Popular Convenience
            </div>

            <div>
              {/* Header Label */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#A3FFCB]">
                  Ongoing Peace of Mind
                </span>
                <span className="text-[11px] font-mono text-[#9DA3AF]">
                  Cancel Anytime
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
                Fully Managed Website Care
              </h3>
              
              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight">
                  £20
                </span>
                <span className="text-sm font-mono text-[#A3FFCB]">/ month</span>
              </div>

              <p className="text-sm text-[#9DA3AF] leading-relaxed mb-3">
                <strong className="text-white">"You run your business. I'll take care of your website."</strong>
              </p>
              <p className="text-xs text-[#9DA3AF] mb-8 leading-relaxed">
                Zero need to learn WordPress, fiddle with hosting dashboards, or worry about security patches. A completely hands-off experience.
              </p>

              {/* Deliverables List */}
              <ul className="space-y-3.5 mb-8 text-sm text-[#F7F8FA]">
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#A3FFCB] shrink-0 mt-0.5" />
                  <span>Ultra-fast, high-uptime cloud website hosting included</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#A3FFCB] shrink-0 mt-0.5" />
                  <span>Domain management & renewal within agreed plan terms</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#A3FFCB] shrink-0 mt-0.5" />
                  <span>Routine technical maintenance, SSL renewals & security monitoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#A3FFCB] shrink-0 mt-0.5" />
                  <span>Text, price, photo & contact updates by request (within fair use)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#A3FFCB] shrink-0 mt-0.5" />
                  <span>Direct, personal developer support via email or phone</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#A3FFCB] shrink-0 mt-0.5" />
                  <span>Peace of mind: Never worry about your website breaking</span>
                </li>
              </ul>
            </div>

            <div>
              {/* Transparency note */}
              <p className="text-xs text-[#9DA3AF] mb-6 border-t border-white/10 pt-4 font-mono leading-relaxed">
                * Note: Complex structural redesigns, heavy custom feature development, or external third-party subscriptions are quoted separately.
              </p>

              <button
                onClick={() => onSelectTier('Managed Website Care (£20/month)')}
                className="w-full py-3.5 bg-[#A3FFCB] text-[#08090B] font-semibold text-sm rounded-lg hover:bg-[#8affbf] transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(163,255,203,0.3)]"
              >
                <span>Add Managed Care to Your Website</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
