export type WebsiteStyle = 'minimal' | 'luxury' | 'bold';

export interface ProjectItem {
  id: string;
  name: string;
  category: 'Beauty & Aesthetics' | 'Trades & Architecture' | 'Professional Services' | 'Bespoke Web Application';
  shortDesc: string;
  fullDesc: string;
  services: string[];
  image: string;
  metrics?: string;
  clientType: string;
  techStack: string[];
  liveFeatures: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ServiceBentoItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  spanClass: string;
  iconName: string;
}
