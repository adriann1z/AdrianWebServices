import React, { useRef, useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, ArrowUpRight, Copy, Check, AlertCircle } from 'lucide-react';

interface ContactSectionProps {
  initialProjectType?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialProjectType = 'New Website',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    website: '',
    projectType: initialProjectType,
    message: '',
    wantsMockup: true,
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [submitError, setSubmitError] = useState('');
  const [copied, setCopied] = useState(false);
  const submitting = useRef(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Direct business phone number provided in requirements
  const BUSINESS_PHONE = '07828 767631';
  // Configurable email endpoint / address
  const BUSINESS_EMAIL = 'adrixnwrx@gmail.com'; // User's email or adrian@adrianwebservices.co.uk

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim()) errs.message = 'Please tell me a little about your project.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting.current) return;
    if (!validate()) return;
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim();
    if (!accessKey) {
      setSubmitError('Enquiries are temporarily unavailable. Please email or call Adrian directly.');
      setFormStatus('error');
      return;
    }
    const botcheck = new FormData(e.currentTarget).get('botcheck');
    if (botcheck) return;
    submitting.current = true;
    setSubmitError('');
    setFormStatus('sending');
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        signal: AbortSignal.timeout(20000),
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Website Enquiry: ${formData.businessName || formData.name}`,
          from_name: 'Adrian Web Services',
          name: formData.name.trim(),
          email: formData.email.trim(),
          replyto: formData.email.trim(),
          business_name: formData.businessName,
          phone: formData.phone,
          website: formData.website,
          project_type: formData.projectType,
          message: formData.message.trim(),
          free_mockup: formData.wantsMockup ? 'Yes' : 'No',
          botcheck: '',
        }),
      });
      const result = await response.json();
      if (!response.ok || result.success !== true) throw new Error('Submission failed');
      setFormStatus('success');
      setFormData({ name: '', businessName: '', email: '', phone: '', website: '',
        projectType: initialProjectType, message: '', wantsMockup: true });
    } catch {
      setSubmitError('We could not confirm your enquiry was sent. Please try again or email Adrian directly.');
      setFormStatus('error');
    } finally {
      submitting.current = false;
    }
  };

  const handleCopySummary = async () => {
    const text =
      `Website Inquiry for Adrian Web Services\n` +
      `Name: ${formData.name}\n` +
      `Business: ${formData.businessName}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Project Type: ${formData.projectType}\n` +
      `Mockup Requested: ${formData.wantsMockup ? 'Yes' : 'No'}\n` +
      `Details: ${formData.message}`;

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      setSubmitError('Could not copy the enquiry. Please email Adrian directly.');
      setFormStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#08090B] relative overflow-hidden border-t border-white/10">
      {/* Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-[#A3FFCB]/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Massive Statement Headline */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-mono tracking-widest text-[#A3FFCB] uppercase">
            <Send className="w-3.5 h-3.5" />
            <span>Start Your Project</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-4 text-balance">
            LET'S BUILD SOMETHING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A3FFCB] via-[#E2FFF0] to-[#A3FFCB]">
              EXCEPTIONAL.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#9DA3AF] leading-relaxed">
            Have a website in mind? Whether you're starting from scratch or ready for a complete redesign, I'd love to hear about your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Details & Direct Reassurance Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Direct Phone Card */}
              <div className="p-6 rounded-2xl bg-[#111318] border border-white/10 hover:border-white/20 transition-all">
                <span className="text-xs font-mono uppercase tracking-widest text-[#9DA3AF] block mb-2">
                  Call or WhatsApp
                </span>
                <a
                  href={`tel:${BUSINESS_PHONE.replace(/\s+/g, '')}`}
                  className="font-display text-2xl font-bold text-white hover:text-[#A3FFCB] transition-colors flex items-center gap-2"
                >
                  <Phone className="w-5 h-5 text-[#A3FFCB]" />
                  <span>{BUSINESS_PHONE}</span>
                </a>
                <span className="text-xs text-[#9DA3AF] block mt-2">
                  Direct mobile to Adrian · Mon–Sat 9am–6pm
                </span>
              </div>

              {/* Direct Email Card */}
              <div className="p-6 rounded-2xl bg-[#111318] border border-white/10 hover:border-white/20 transition-all">
                <span className="text-xs font-mono uppercase tracking-widest text-[#9DA3AF] block mb-2">
                  Direct Email
                </span>
                <a
                  href={`mailto:${BUSINESS_EMAIL}`}
                  className="font-mono text-base font-bold text-white hover:text-[#A3FFCB] transition-colors flex items-center gap-2 break-all"
                >
                  <Mail className="w-5 h-5 text-[#A3FFCB] shrink-0" />
                  <span>{BUSINESS_EMAIL}</span>
                </a>
                <span className="text-xs text-[#9DA3AF] block mt-2">
                  Typical response within 2–4 business hours
                </span>
              </div>

              {/* Location Card */}
              <div className="p-6 rounded-2xl bg-[#111318] border border-white/10">
                <span className="text-xs font-mono uppercase tracking-widest text-[#9DA3AF] block mb-2">
                  Studio Base
                </span>
                <div className="flex items-center gap-2 text-white font-medium text-base">
                  <MapPin className="w-5 h-5 text-[#A3FFCB]" />
                  <span>Lincoln, United Kingdom</span>
                </div>
                <span className="text-xs text-[#9DA3AF] block mt-2">
                  In-person meetings across Lincolnshire · Remote nationwide across the UK
                </span>
              </div>

            </div>

            {/* Direct Reassurance Note */}
            <div className="mt-8 p-6 rounded-2xl bg-[#191C22]/80 border border-white/10 text-xs text-[#9DA3AF] space-y-2">
              <div className="text-white font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#A3FFCB]" />
                Zero Pressure, Direct Conversation
              </div>
              <p>
                You speak directly with the developer building your site. No pushy sales reps, no jargon, and no surprise agency fees.
              </p>
            </div>
          </div>

          {/* Contact & Free Mockup Form Column */}
          <div className="lg:col-span-7 bg-[#111318] p-8 sm:p-10 rounded-2xl border border-white/15 shadow-2xl relative">
            
            {formStatus === 'success' && (
              <div role="status" className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3 text-xs text-white">
                <CheckCircle2 className="w-5 h-5 text-[#A3FFCB] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-sm font-semibold text-white">Enquiry sent</strong>
                  Thank you. Adrian will get back to you at the email address you provided.
                </div>
              </div>
            )}

            {formStatus === 'error' && (
              <div role="alert" className="mb-6 p-4 rounded-lg border border-red-400/30 bg-red-400/10 text-sm text-red-200 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{submitError}</span>
              </div>
            )}

            {copied && (
              <div className="mb-6 p-3 rounded-lg bg-[#A3FFCB]/10 border border-[#A3FFCB]/30 text-xs text-[#A3FFCB] flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>Inquiry copied to clipboard! You can paste it directly to adrixnwrx@gmail.com</span>
              </div>
            )}

            <form onSubmit={handleSubmit} aria-busy={formStatus === 'sending'} className="space-y-5">
              <input type="text" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
              <fieldset disabled={formStatus === 'sending'} className="space-y-5 border-0 p-0 m-0 min-w-0">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Your Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase text-[#9DA3AF] mb-1.5">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className={`w-full px-4 py-3 bg-[#08090B] border rounded-lg text-sm text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-[#A3FFCB] transition-colors ${
                      errors.name ? 'border-red-500' : 'border-white/10 focus:border-white/30'
                    }`}
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>

                {/* Business Name */}
                <div>
                  <label htmlFor="businessName" className="block text-xs font-mono uppercase text-[#9DA3AF] mb-1.5">
                    Business Name
                  </label>
                  <input
                    id="businessName"
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    placeholder="e.g. Lincoln Aesthetics Ltd"
                    className="w-full px-4 py-3 bg-[#08090B] border border-white/10 rounded-lg text-sm text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-[#A3FFCB] focus:border-white/30 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase text-[#9DA3AF] mb-1.5">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="sarah@example.co.uk"
                    className={`w-full px-4 py-3 bg-[#08090B] border rounded-lg text-sm text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-[#A3FFCB] transition-colors ${
                      errors.email ? 'border-red-500' : 'border-white/10 focus:border-white/30'
                    }`}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>

                {/* Phone (optional) */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-mono uppercase text-[#9DA3AF] mb-1.5">
                    Phone (optional)
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="07123 456789"
                    className="w-full px-4 py-3 bg-[#08090B] border border-white/10 rounded-lg text-sm text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-[#A3FFCB] focus:border-white/30 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Existing Website */}
                <div>
                  <label htmlFor="website" className="block text-xs font-mono uppercase text-[#9DA3AF] mb-1.5">
                    Existing Website (optional)
                  </label>
                  <input
                    id="website"
                    type="text"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    placeholder="www.mybusiness.co.uk"
                    className="w-full px-4 py-3 bg-[#08090B] border border-white/10 rounded-lg text-sm text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-[#A3FFCB] focus:border-white/30 transition-colors"
                  />
                </div>

                {/* What Do You Need? */}
                <div>
                  <label htmlFor="projectType" className="block text-xs font-mono uppercase text-[#9DA3AF] mb-1.5">
                    What Do You Need?
                  </label>
                  <select
                    id="projectType"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 bg-[#08090B] border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#A3FFCB] focus:border-white/30 transition-colors"
                  >
                    <option value="New Website">Brand New Website (From £295)</option>
                    <option value="Redesign">Modern Website Redesign</option>
                    <option value="Managed Maintenance">£20/mo Managed Hosting & Care</option>
                    <option value="Mobile Optimization">Mobile Optimization / Speed Fix</option>
                    <option value="Other">Custom Web Project</option>
                  </select>
                </div>
              </div>

              {/* Tell Me About Your Project */}
              <div>
                <label htmlFor="message" className="block text-xs font-mono uppercase text-[#9DA3AF] mb-1.5">
                  Tell Me About Your Project *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about what your business does, what you want the website to achieve, and any specific ideas you have..."
                  className={`w-full px-4 py-3 bg-[#08090B] border rounded-lg text-sm text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-[#A3FFCB] transition-colors ${
                    errors.message ? 'border-red-500' : 'border-white/10 focus:border-white/30'
                  }`}
                />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
              </div>

              {/* Complimentary Free Mockup Checkbox */}
              <label className="flex items-start gap-3 p-3.5 rounded-xl bg-[#08090B] border border-[#A3FFCB]/30 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.wantsMockup}
                  onChange={(e) => setFormData({ ...formData, wantsMockup: e.target.checked })}
                  className="w-4 h-4 rounded mt-0.5 accent-[#A3FFCB]"
                />
                <div className="text-xs">
                  <span className="font-semibold text-white block">
                    Yes, prepare a free initial website mockup for my business
                  </span>
                  <span className="text-[#9DA3AF]">
                    Complimentary initial concept with zero upfront obligation.
                  </span>
                </div>
              </label>

              {/* Primary Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-[#A3FFCB] hover:bg-[#8affbf] text-[#08090B] font-semibold text-sm rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(163,255,203,0.3)] active:scale-[0.99]"
              >
                <span>{formStatus === 'sending' ? 'Sending...' : "Let's Get Started"}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-between text-[11px] font-mono text-[#9DA3AF] pt-2">
                <span>Direct response from Adrian</span>
                <button
                  type="button"
                  onClick={handleCopySummary}
                  className="hover:text-white underline"
                >
                  Or copy inquiry text
                </button>
              </div>

              </fieldset>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
