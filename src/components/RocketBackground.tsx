import React from 'react';
import { Rocket } from 'lucide-react';

const flights = [
  { top: '12%', duration: '27s', delay: '-9s', size: 18 },
  { top: '34%', duration: '34s', delay: '-24s', size: 14 },
  { top: '58%', duration: '31s', delay: '-5s', size: 20 },
  { top: '79%', duration: '38s', delay: '-19s', size: 16 },
  { top: '94%', duration: '29s', delay: '-16s', size: 14 },
];

export const RocketBackground: React.FC = () => (
  <div className="rocket-background" aria-hidden="true">
    {flights.map((flight, index) => (
      <div
        key={index}
        className="rocket-flight"
        style={{ top: flight.top, animationDuration: flight.duration, animationDelay: flight.delay }}
      >
        <span className="rocket-trail" />
        <Rocket width={flight.size} height={flight.size} strokeWidth={1.5} />
      </div>
    ))}
  </div>
);
