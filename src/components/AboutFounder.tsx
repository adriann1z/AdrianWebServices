import React from 'react';
import { Award, GraduationCap, UserCheck } from 'lucide-react';
import technologyImage from '../assets/images/technology-circuit-board.png';

export const AboutFounder: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#08090B] relative overflow-hidden border-t border-white/10">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Technology artwork and credentials */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-md">
              
              <img
                src={technologyImage}
                alt="Detailed graphite microprocessor with illuminated mint-green circuit pathways"
                width={1024}
                height={1280}
                loading="lazy"
                decoding="async"
                className="block w-full aspect-[4/5] object-cover rounded-lg"
              />

              {/* Verified Credentials Pills */}
              <div className="mt-6 border-t border-white/10">
                <div className="flex items-center gap-3 py-5 border-b border-white/10 text-sm">
                  <GraduationCap className="w-4 h-4 text-[#A3FFCB] shrink-0" />
                  <span className="text-white font-medium">
                    First-Class Honours BSc Computer Science
                  </span>
                </div>
                <div className="flex items-center gap-3 py-5 border-b border-white/10 text-sm">
                  <UserCheck className="w-4 h-4 text-[#A3FFCB] shrink-0" />
                  <span className="text-white font-medium">
                    Direct communication, from first conversation to launch
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
