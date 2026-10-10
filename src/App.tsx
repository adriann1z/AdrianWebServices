import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InteractiveStyleSwitcher } from './components/InteractiveStyleSwitcher';
import { ShowcaseGallery } from './components/ShowcaseGallery';
import { BeforeAfterComparison } from './components/BeforeAfterComparison';
import { BentoServices } from './components/BentoServices';
import { PricingSection } from './components/PricingSection';
import { ProcessTimeline } from './components/ProcessTimeline';
import { AboutFounder } from './components/AboutFounder';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqAccordion } from './components/FaqAccordion';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { LegalModal } from './components/LegalModal';
import { ProjectItem } from './types';
import { RocketBackground } from './components/RocketBackground';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'cookies' | null>(null);
  const [selectedProjectType, setSelectedProjectType] = useState<string>('New Website');

  const scrollToContact = (projectType = 'New Website') => {
    setSelectedProjectType(projectType);
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToWork = () => {
    const el = document.getElementById('work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#08090B] text-[#F7F8FA] selection:bg-[#A3FFCB]/25 selection:text-[#A3FFCB] flex flex-col font-sans">
      <RocketBackground />
      {/* SECTION 5: FLOATING TOP NAVIGATION */}
      <Navbar onOpenContact={() => scrollToContact('New Website')} />

      <main className="flex-1">
        {/* SECTION 2: THE HERO */}
        <Hero
          onOpenMockup={() => scrollToContact('Free Initial Mockup')}
          onExploreWork={scrollToWork}
        />

        {/* SECTION 16: SPECIAL INTERACTIVE FEATURE — LIVE WEBSITE STYLE SWITCHER */}
        <InteractiveStyleSwitcher
          onSelectStyle={(styleName) =>
            scrollToContact(`Design Style Consultation (${styleName.toUpperCase()})`)
          }
        />

        {/* SECTION 6: INTERACTIVE SHOWCASE — THE WEBSITE EXPERIENCE */}
        <ShowcaseGallery
          onSelectProject={(proj) => setSelectedProject(proj)}
          onRequestCustomMockup={() => scrollToContact('Free Initial Mockup')}
        />

        {/* SECTION 7: BEFORE & AFTER COMPARISON */}
        <BeforeAfterComparison
          onTransformWebsite={() => scrollToContact('Website Redesign')}
        />

        {/* SECTION 8: SERVICES — BENTO GRID */}
        <BentoServices
          onSelectService={(serviceName) =>
            scrollToContact(`Service: ${serviceName}`)
          }
        />

        {/* SECTION 9: PRICING & MANAGED WEBSITE CARE */}
        <PricingSection
          onSelectTier={(tierName) => scrollToContact(`Pricing Plan: ${tierName}`)}
        />

        {/* SECTION 10: THE PROCESS — TIMELINE */}
        <ProcessTimeline />

        {/* SECTION 11: ABOUT THE FOUNDER */}
        <AboutFounder />

        <ReviewsSection />

        {/* SECTION 12: FAQ ACCORDION */}
        <FaqAccordion />

        {/* SECTION 13: CONTACT SECTION — CONVERSION FOCUSED */}
        <ContactSection initialProjectType={selectedProjectType} />
      </main>

      {/* SECTION 14: FOOTER */}
      <Footer
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenCookies={() => setLegalModalType('cookies')}
        onOpenContact={() => scrollToContact('General Inquiry')}
      />

      {/* MODALS */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestSimilar={(projectName) =>
          scrollToContact(`Similar to ${projectName}`)
        }
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
