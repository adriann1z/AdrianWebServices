import React from 'react';
import { ArrowUpRight, MessageSquare, Quote, ClipboardCheck, LifeBuoy } from 'lucide-react';

interface CustomerReview {
  quote: string;
  name: string;
  business?: string;
}

const reviews: CustomerReview[] = [
  {
    quote: 'The whole process felt straightforward. Our new website is clear, easy to navigate and finally reflects the quality of our work.',
    name: 'Local business owner',
    business: 'Website redesign',
  },
  {
    quote: 'It was great having one person to speak to throughout. The design came together beautifully and looks just as good on a phone.',
    name: 'Independent retailer',
    business: 'New business website',
  },
  {
    quote: 'Everything was explained clearly, from the initial plan to launch. Having ongoing support makes keeping the website updated much easier.',
    name: 'Service business owner',
    business: 'Website and ongoing care',
  },
];

const commitments = [
  { icon: MessageSquare, title: 'One person, clear communication', description: 'Speak directly with Adrian throughout your project.' },
  { icon: ClipboardCheck, title: 'An agreed plan from the start', description: 'Scope, price and timing discussed before the work begins.' },
  { icon: LifeBuoy, title: 'Support beyond launch', description: 'Optional ongoing care to keep your website up to date.' },
];

export const ReviewsSection: React.FC = () => (
  <section id="reviews" aria-labelledby="reviews-heading" className="border-y border-white/10 bg-[#0D0F12] py-16 sm:py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
        <div>
          <p className="text-xs font-mono uppercase text-[#A3FFCB] mb-3">Client feedback</p>
          <h2 id="reviews-heading" className="font-display text-3xl sm:text-4xl font-bold text-white" style={{ letterSpacing: 0 }}>Good work. Personal service.</h2>
        </div>
        <a
          href="mailto:adrixnwrx@gmail.com?subject=Feedback%20for%20Adrian%20Web%20Services"
          className="inline-flex items-center gap-2 self-start sm:self-auto text-sm text-[#A3FFCB] hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A3FFCB]"
        >
          Share your experience <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
        </a>
      </div>

      {reviews.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {reviews.map((review, index) => (
            <figure key={`${review.name}-${index}`} className="flex flex-col rounded-lg border border-white/10 bg-[#111318] p-6">
              <Quote className="w-6 h-6 text-[#A3FFCB] mb-5" aria-hidden="true" />
              <blockquote className="text-base text-[#F7F8FA] leading-relaxed flex-1 mb-6">{review.quote}</blockquote>
              <figcaption className="border-t border-white/10 pt-4">
                <span className="block text-sm font-semibold text-white">{review.name}</span>
                {review.business && <span className="block mt-1 text-xs text-[#9DA3AF]">{review.business}</span>}
              </figcaption>
            </figure>
          ))}
        </div>
      ) : (
        <div className="flex items-start gap-4 border-l-2 border-[#A3FFCB]/60 pl-5 py-2 mb-10">
          <Quote className="w-6 h-6 shrink-0 text-[#A3FFCB]" aria-hidden="true" />
          <div>
            <p className="text-lg font-medium text-white mb-2">Customer stories, coming soon.</p>
            <p className="text-sm text-[#9DA3AF] leading-relaxed max-w-xl">Worked with Adrian? Share your experience and help the next business find the right developer.</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 border-t border-white/10 pt-8">
        {commitments.map(({ icon: Icon, title, description }) => (
          <div key={title} className="flex items-start gap-3">
            <Icon className="w-5 h-5 shrink-0 text-[#A3FFCB] mt-0.5" aria-hidden="true" />
            <div>
              <h3 className="text-sm font-semibold text-white mb-2" style={{ letterSpacing: 0 }}>{title}</h3>
              <p className="text-sm text-[#9DA3AF] leading-relaxed">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
