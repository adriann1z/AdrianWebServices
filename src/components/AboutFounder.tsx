import React from 'react';
import { Award, GraduationCap, MapPin, CheckCircle2, UserCheck, Terminal, Heart } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

export const AboutFounder: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#08090B] relative overflow-hidden border-t border-white/10">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-[#A3FFCB]/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Founder Portrait & Credentials Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-md bg-[#111318] rounded-2xl border border-white/15 p-6 shadow-2xl relative group">
              
              {/* Elegant Portrait Frame Placeholder for Adrian's Photo */}
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-gradient-to-b from-[#191C22] to-[#0D0F13] border border-white/10 flex flex-col items-center justify-center p-6 text-center group-hover:border-[#A3FFCB]/40 transition-colors">
                
                {/* Architectural Developer Motif / Monogram */}
                <div className="w-24 h-24 rounded-2xl bg-[#08090B] border border-white/15 shadow-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                  <BrandLogo size="lg" showText={false} />
                </div>

                <div className="font-display font-bold text-xl text-white mb-1">
                  Adrian Wrezel
                </div>
                <div className="text-xs font-mono text-[#A3FFCB] uppercase tracking-wider mb-4">
                  Founder & Full-Stack Developer
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[11px] text-[#9DA3AF] mb-4">
                  <MapPin className="w-3.5 h-3.5 text-[#A3FFCB]" />
                  <span>Lincoln, United Kingdom</span>
                </div>

                {/* Upload Placeholder Badge note */}
                <div className="mt-auto px-4 py-2 rounded-lg bg-black/40 border border-white/5 text-[10px] font-mono text-white/50">
                  [Adrian Wrezel Portrait Frame · Ready for Photo Upload]
                </div>
              </div>

              {/* Verified Credentials Pills */}
              <div className="mt-6 space-y-2.5">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-[#191C22] border border-white/5 text-xs">
                  <GraduationCap className="w-4 h-4 text-[#A3FFCB] shrink-0" />
                  <span className="text-white font-medium">
                    First-Class Honours BSc Computer Science
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-[#191C22] border border-white/5 text-xs">
                  <UserCheck className="w-4 h-4 text-[#A3FFCB] shrink-0" />
                  <span className="text-white font-medium">
                    Direct 1-on-1 Communication (No Junior Account Handlers)
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Founder Story & Approach */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-4 text-xs font-mono tracking-widest text-[#A3FFCB] uppercase">
              <Award className="w-3.5 h-3.5" />
              <span>Personal Service · Lincoln UK</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              A real developer. <br />
              A personal service.
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-[#9DA3AF] leading-relaxed mb-8">
              <p>
                I'm <strong className="text-white font-semibold">Adrian</strong>, a Lincoln-based web developer and first-class Computer Science graduate.
              </p>
              <p>
                I started <strong className="text-white font-semibold">Adrian Web Services</strong> with a simple goal: to give businesses access to beautifully designed, professionally developed websites without the inflated costs or impersonal experience of a large agency.
              </p>
              <p>
                I work directly with my clients, from our first conversation through to the finished website. And for businesses that prefer to leave the technical side to someone else, I offer straightforward ongoing management and support.
              </p>
            </div>

            {/* Technical Craft Specialties */}
            <div className="pt-6 border-t border-white/10">
              <span className="text-xs font-mono uppercase tracking-widest text-[#9DA3AF] block mb-3">
                Core Technical Disciplines:
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  'React & TypeScript',
                  'High-Performance UI/UX',
                  'Tailwind CSS',
                  'Responsive Engineering',
                  'Local SEO & Schema.org',
                  'Secure Cloud Hosting',
                  'Conversion Optimisation',
                ].map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg bg-[#111318] border border-white/10 text-xs font-mono text-white/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
