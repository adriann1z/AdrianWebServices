import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FaqItem } from '../types';

export const faqList: FaqItem[] = [
  {
    id: 'cost',
    question: 'How much does a website cost?',
    answer:
      'Website projects start from £295, with a tailored quote provided according to your specific requirements and scope. A straightforward landing page or focused local business website will be near the starting price, while multi-page platforms or complex interactive features are quoted transparently before any work starts.',
  },
  {
    id: 'timeline',
    question: 'How long does it take to build a website?',
    answer:
      "Timelines depend on the size and complexity of the project. Focused websites typically take between 1 to 2 weeks from initial concept to launch. I'll discuss an estimated completion date before work begins, and you'll always have direct updates along the way.",
  },
  {
    id: 'domain',
    question: 'Do I need to provide my own domain?',
    answer:
      'No. If you already have a domain, I can connect it seamlessly. If you do not have one yet, I can help arrange your domain and manage renewals as part of an agreed service package.',
  },
  {
    id: 'redesign',
    question: 'Can you redesign my existing website?',
    answer:
      'Absolutely. I can modernise your existing website while preserving important business information, SEO equity, branding assets and existing contact details.',
  },
  {
    id: 'manage',
    question: 'Can you manage my website for me?',
    answer:
      "Yes. My optional £20/month managed plan covers ultra-fast cloud hosting, routine maintenance, SSL renewals and agreed content updates, so you don't need to worry about the technical side at all.",
  },
  {
    id: 'ownership',
    question: 'Will I own my website?',
    answer:
      'Ownership, domain registration and handover arrangements are agreed clearly before the project begins. You retain full commercial ownership of your business content and assets.',
  },
  {
    id: 'email',
    question: 'Can I keep my existing business email?',
    answer:
      'In many cases, yes. Existing domain and email arrangements (such as Google Workspace or Microsoft 365) are reviewed before changes are made to avoid any unnecessary disruption to your daily operations.',
  },
  {
    id: 'lincoln-remote',
    question: 'Do you only work with businesses in Lincoln?',
    answer:
      "No. Although I'm proudly based in Lincoln and love meeting local Lincolnshire business owners, I work remotely with clients across the entire United Kingdom via video call, phone and email.",
  },
];

export const FaqAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('cost');

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 bg-[#08090B] relative overflow-hidden border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-mono tracking-widest text-[#A3FFCB] uppercase">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Clear Answers</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-base sm:text-lg text-[#9DA3AF]">
            Everything you need to know about pricing, process, domains and ongoing management.
          </p>
        </div>

        {/* Real Accordion Interaction */}
        <div className="space-y-3">
          {faqList.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="rounded-xl border border-white/10 bg-[#111318] transition-colors duration-200 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A3FFCB]"
                >
                  <span className="font-display text-base sm:text-lg font-semibold text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#9DA3AF] transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 text-[#A3FFCB]' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-1 text-sm text-[#9DA3AF] leading-relaxed border-t border-white/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
