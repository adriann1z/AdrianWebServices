import React, { useState } from 'react';
import { MessageSquare, LayoutTemplate, Code2, Rocket, HeartHandshake, CheckCircle2 } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: "Let's Talk",
      summary: 'Discovery & Vision',
      description: 'We discuss your business, your target customers, your goals and what your website needs to achieve.',
      icon: MessageSquare,
      timelineHint: 'Day 1–2',
    },
    {
      number: '02',
      title: 'The Design',
      summary: 'Bespoke Mockup',
      description: 'I create a modern, bespoke visual concept tailored specifically to your brand for your review and feedback.',
      icon: LayoutTemplate,
      timelineHint: 'Day 3–5',
    },
    {
      number: '03',
      title: 'The Build',
      summary: 'Fast Code & Polish',
      description: 'Your website is professionally developed, optimized for mobile screens, and tested thoroughly across modern browsers.',
      icon: Code2,
      timelineHint: 'Week 2',
    },
    {
      number: '04',
      title: 'Go Live',
      summary: 'Domain & Launch',
      description: 'Once everything is approved, your domain and SSL security are configured, and your new website is launched live to the world.',
      icon: Rocket,
      timelineHint: 'Launch Day',
    },
    {
      number: '05',
      title: 'Ongoing Support',
      summary: 'Managed Website Care',
      description: 'If you choose the £20/mo managed plan, I personally handle hosting, security, backups and any content updates you request.',
      icon: HeartHandshake,
      timelineHint: 'Continuous',
    },
  ];

  return (
    <section className="py-24 bg-[#08090B] relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-mono tracking-widest text-[#A3FFCB] uppercase">
            <span>Structured & Stress-Free</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            From an idea to an incredible website.
          </h2>

          <p className="text-base sm:text-lg text-[#9DA3AF] leading-relaxed">
            No endless jargon or confusing technical checklists. A clear, personal 5-stage progression from our initial conversation to your live site.
          </p>
        </div>

        {/* Desktop Horizontal Process Strip */}
        <div className="hidden lg:grid grid-cols-5 gap-4 relative">
          {/* Subtle Connecting Line */}
          <div className="absolute top-10 left-12 right-12 h-[2px] bg-white/10 -z-0" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = activeStep === idx;

            return (
              <div
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between relative bg-[#111318] ${
                  isSelected
                    ? 'border-[#A3FFCB] shadow-[0_10px_30px_rgba(163,255,203,0.1)] -translate-y-1'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <div>
                  {/* Step Top Bar */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-[#A3FFCB] text-[#08090B]'
                          : 'bg-white/5 text-white border border-white/10'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-[#A3FFCB]">
                      Stage {step.number}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-white mb-1">
                    {step.title}
                  </h3>
                  
                  <span className="text-[11px] font-mono text-[#9DA3AF] block mb-3">
                    {step.summary}
                  </span>

                  <p className="text-xs text-[#9DA3AF] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/10 text-[10px] font-mono text-white/50">
                  {step.timelineHint}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile / Tablet Vertical Flow */}
        <div className="lg:hidden space-y-6 relative">
          <div className="absolute top-6 bottom-6 left-6 w-[2px] bg-white/10 -z-0" />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="pl-14 relative bg-[#111318] p-6 rounded-2xl border border-white/10"
              >
                <div className="absolute left-3 top-6 -translate-x-1/2 w-10 h-10 rounded-xl bg-[#A3FFCB] text-[#08090B] flex items-center justify-center shadow-lg">
                  <Icon className="w-4 h-4" />
                </div>

                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs text-[#A3FFCB]">Stage {step.number}</span>
                  <span className="font-mono text-[10px] text-white/50">{step.timelineHint}</span>
                </div>

                <h3 className="font-display text-lg font-bold text-white mb-1">
                  {step.title}
                </h3>
                
                <p className="text-xs text-[#9DA3AF] leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
