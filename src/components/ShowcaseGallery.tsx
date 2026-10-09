import React, { useState } from 'react';
import { ProjectItem } from '../types';
import { ExternalLink, Layers, ArrowUpRight, Check, Eye } from 'lucide-react';
import { motion } from 'motion/react';

interface ShowcaseGalleryProps {
  onSelectProject: (project: ProjectItem) => void;
  onRequestCustomMockup: () => void;
}

export const showcaseProjects: ProjectItem[] = [
  {
    id: 'harley-skin',
    name: 'The Harley Skin Clinic',
    category: 'Beauty & Aesthetics',
    shortDesc: 'Refined medical aesthetics clinic with interactive treatment selector, luxury editorial typography and direct consultation booking.',
    fullDesc: 'Designed to elevate patient trust for a premium UK skin and aesthetics clinic. Featuring serene neutral stone palettes, bespoke treatment navigation, pricing clarity, and frictionless mobile appointment requests.',
    services: ['Bespoke UI/UX Design', 'Full-Stack Development', 'Mobile Optimization', 'SEO Foundations'],
    image: '/src/assets/images/showcase_aesthetics_clinic_1791569647176.jpg',
    clientType: 'Private Medical Aesthetics Clinic',
    techStack: ['React 19', 'Tailwind CSS', 'Booking API', 'Responsive Layouts'],
    liveFeatures: ['Treatment Catalog', 'Practitioner Credentials', 'Online Consultation Flow', 'Google Reviews Integration'],
  },
  {
    id: 'elton-croft',
    name: 'Elton & Croft Architectural Joinery',
    category: 'Trades & Architecture',
    shortDesc: 'Contemporary craftsmanship portfolio showcasing bespoke oak staircases, heritage panelling and high-value residential carpentry.',
    fullDesc: 'Crafted for an elite British architectural workshop where photographic impact and tactile trust are paramount. Displays high-resolution timber craftsmanship, case study walkthroughs, and clear inquiry triggers.',
    services: ['Website Redesign', 'Responsive Engineering', 'High-Res Asset Optimisation', 'Local SEO'],
    image: '/src/assets/images/showcase_trades_bespoke_1791569656115.jpg',
    clientType: 'Bespoke Joinery & Carpentry Workshop',
    techStack: ['TypeScript', 'Tailwind CSS', 'Fast Image Delivery', 'Accessible Form Controls'],
    liveFeatures: ['Full-Width Project Masonry', 'Workshop Journal', 'Custom Quote Consultation', 'Local UK Schema'],
  },
  {
    id: 'arthur-grant',
    name: 'Arthur & Grant Chartered Accountants',
    category: 'Professional Services',
    shortDesc: 'Modern financial advisory and chartered accountancy portal with clean data-driven design, fee transparency and client portal access.',
    fullDesc: 'Replaces outdated corporate accountancy templates with a crisp, authoritative web presence. Highlights tax advisory specialisms, real partner credentials, and instant discovery call scheduling.',
    services: ['Digital Strategy', 'Frontend Architecture', 'Corporate Redesign', 'Cloud Hosting'],
    image: '/src/assets/images/showcase_accountancy_pro_1791569667192.jpg',
    clientType: 'Chartered Accountancy & Tax Advisory',
    techStack: ['React', 'Modern Typography Scale', 'Client Portal Gateway', 'SSL Edge Security'],
    liveFeatures: ['Tax Efficiency Calculator', 'Team Directory', 'Insight Library', 'Encrypted Document Portal Gateway'],
  },
  {
    id: 'aura-platform',
    name: 'Aura Interactive Studio',
    category: 'Bespoke Web Application',
    shortDesc: 'Fluid, high-performance dark mode digital studio application with dynamic lighting, responsive cards and smooth micro-interactions.',
    fullDesc: 'Built for forward-thinking creative practices requiring ultra-fast page speed, fluid transitions, and a modern dark aesthetic that commands immediate attention.',
    services: ['Web Application Development', 'Interactive 3D UI', 'Managed Maintenance', 'Performance Tuning'],
    image: '/src/assets/images/hero_web_showcase_1791569635989.jpg',
    clientType: 'Creative Technology Studio',
    techStack: ['Motion React', 'CSS Matrix 3D', 'Vite', 'Edge Caching'],
    liveFeatures: ['3D Perspective Tilt', 'Dynamic Dark Theme', 'Instant Search Filter', 'Micro-interactions'],
  },
];

export const ShowcaseGallery: React.FC<ShowcaseGalleryProps> = ({
  onSelectProject,
  onRequestCustomMockup,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const categories = [
    'All',
    'Beauty & Aesthetics',
    'Trades & Architecture',
    'Professional Services',
    'Bespoke Web Application',
  ];

  const filteredProjects =
    selectedFilter === 'All'
      ? showcaseProjects
      : showcaseProjects.filter((p) => p.category === selectedFilter);

  return (
    <section id="work" className="py-24 bg-[#08090B] relative overflow-hidden">
      {/* Ambient background lighting */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#A3FFCB]/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3 text-xs font-mono tracking-widest text-[#9DA3AF] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#A3FFCB]" />
              <span>Selected Portfolio & Demonstrations</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Websites that make people stop scrolling.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#9DA3AF]">
              "Your website is often your first impression. Let's make it unforgettable."
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end text-xs font-mono text-[#9DA3AF]">
            <span className="bg-white/5 border border-white/10 px-3 py-1.5 rounded text-white/80">
              Honest Disclosure: Concepts & Architectural Prototypes
            </span>
            <span className="text-[11px] text-[#9DA3AF]/70 mt-1">
              Custom-built to illustrate industry-specific design capability.
            </span>
          </div>
        </div>

        {/* Category Filters (Segmented Controls) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-medium transition-all duration-200 whitespace-nowrap shrink-0 ${
                selectedFilter === cat
                  ? 'bg-white text-black font-semibold shadow-md'
                  : 'bg-[#111318] text-[#9DA3AF] hover:text-white hover:bg-white/5 border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-[#111318] rounded-2xl border border-white/10 hover:border-white/25 transition-all duration-300 overflow-hidden flex flex-col justify-between hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
            >
              {/* Browser Window Bar */}
              <div className="px-4 py-2.5 bg-[#191C22] border-b border-white/10 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
                  <span className="ml-2 font-mono text-[10px] text-[#9DA3AF]">
                    {project.category} · Concept Design
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#A3FFCB]">
                  Adrian Web Services
                </span>
              </div>

              {/* Large Immersive Preview with Hover Zoom */}
              <div 
                className="relative aspect-[16/10] overflow-hidden bg-[#08090B] cursor-pointer"
                onClick={() => onSelectProject(project)}
              >
                <img
                  src={project.image}
                  alt={`${project.name} design preview`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />

                {/* Hover Quick Action Indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#A3FFCB] text-[#08090B] font-semibold text-xs rounded-lg shadow-xl">
                    <Eye className="w-3.5 h-3.5" />
                    Inspect Details & Features
                  </span>
                </div>
              </div>

              {/* Card Meta & Details */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between bg-[#111318]">
                <div>
                  {/* Clean unboxed metadata per Zero-Pill discipline */}
                  <div className="flex items-center gap-2 text-xs font-mono text-[#9DA3AF] mb-2.5">
                    <span className="text-[#A3FFCB]">{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.clientType}</span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2.5 group-hover:text-[#A3FFCB] transition-colors">
                    {project.name}
                  </h3>

                  <p className="text-sm text-[#9DA3AF] leading-relaxed mb-6">
                    {project.shortDesc}
                  </p>

                  {/* Clean Services Provided List */}
                  <div className="flex flex-wrap items-center gap-2 mb-6">
                    {project.services.map((svc, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-mono text-white/70 bg-white/5 border border-white/5 px-2.5 py-1 rounded"
                      >
                        {svc}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Bar */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-[#A3FFCB] transition-colors focus:outline-none"
                  >
                    <span>View Project Specification</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>

                  <span className="text-[11px] font-mono text-[#9DA3AF]">
                    Concept Design
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Free Mockup Banner Strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#111318] via-[#191C22] to-[#111318] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-white mb-1">
              Want to see what your business could look like?
            </h4>
            <p className="text-sm text-[#9DA3AF]">
              I can prepare an initial custom design mockup for your business with zero upfront obligation.
            </p>
          </div>
          <button
            onClick={onRequestCustomMockup}
            className="px-6 py-3 bg-[#A3FFCB] hover:bg-[#8affbf] text-[#08090B] font-semibold text-xs rounded-lg transition-all duration-200 whitespace-nowrap shadow-[0_0_20px_rgba(163,255,203,0.3)] shrink-0"
          >
            Claim Your Free Mockup ↗
          </button>
        </div>

      </div>
    </section>
  );
};
