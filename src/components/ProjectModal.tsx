import React from 'react';
import { X, Check, ArrowRight, Layers, Cpu, ExternalLink } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onRequestSimilar: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onRequestSimilar,
}) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="bg-[#111318] border border-white/20 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="sticky top-0 bg-[#191C22]/95 backdrop-blur-md px-6 py-4 border-b border-white/10 flex items-center justify-between z-10">
          <div>
            <span className="text-[11px] font-mono text-[#A3FFCB] uppercase tracking-wider block">
              {project.category} · Concept Specification
            </span>
            <h3 className="font-display font-bold text-white text-xl">
              {project.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-[#9DA3AF] hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Main Image Asset */}
          <div className="relative aspect-video rounded-xl overflow-hidden bg-black border border-white/10">
            <img
              src={project.image}
              alt={project.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Overview & Architecture */}
          <div>
            <h4 className="text-sm font-mono uppercase text-[#9DA3AF] tracking-wider mb-2">
              Project Architecture
            </h4>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed">
              {project.fullDesc}
            </p>
          </div>

          {/* Core Features & Deliverables */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
            <div>
              <h4 className="text-xs font-mono uppercase text-[#A3FFCB] tracking-wider mb-3">
                Live Features & Flows:
              </h4>
              <ul className="space-y-2 text-xs text-[#9DA3AF]">
                {project.liveFeatures.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#A3FFCB]" />
                    <span className="text-white">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase text-[#A3FFCB] tracking-wider mb-3">
                Engineered Tech Stack:
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded bg-[#08090B] border border-white/10 text-[11px] font-mono text-white/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Trigger */}
          <div className="p-5 rounded-xl bg-[#08090B] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
            <div>
              <span className="text-xs font-bold text-white block">
                Like the direction of this project?
              </span>
              <span className="text-xs text-[#9DA3AF]">
                I can craft a tailored concept for your business.
              </span>
            </div>

            <button
              onClick={() => {
                onClose();
                onRequestSimilar(project.name);
              }}
              className="px-5 py-2.5 bg-[#A3FFCB] text-[#08090B] font-semibold text-xs rounded-lg hover:bg-[#8affbf] transition-all flex items-center gap-2 whitespace-nowrap"
            >
              <span>Request Similar Design</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
