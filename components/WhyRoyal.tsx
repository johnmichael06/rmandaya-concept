import React from 'react';
import { Shield, MapPin, UserCheck } from 'lucide-react';
import { WhyRoyalItemProps } from '../types';

const FeatureItem: React.FC<WhyRoyalItemProps> = ({ Icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6">
    <div className="w-16 h-16 rounded-full bg-royal-gold/10 flex items-center justify-center text-royal-gold mb-6">
      <Icon size={32} />
    </div>
    <h3 className="font-playfair text-xl text-royal-onyx mb-3">{title}</h3>
    <p className="font-montserrat text-sm text-gray-500 leading-relaxed max-w-xs">
      {description}
    </p>
  </div>
);

export const WhyRoyal: React.FC = () => {
  return (
    <section className="bg-white border-t border-gray-100 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          <FeatureItem 
            Icon={MapPin}
            title="Prime Poblacion Location"
            description="Located at the nexus of culture and commerce, putting you steps away from city hall and key business centers."
          />
          <FeatureItem 
            Icon={UserCheck}
            title="Legendary Concierge"
            description="Our 'Royal Butler' service ensures your every need is met with discretion, efficiency, and warmth."
          />
          <FeatureItem 
            Icon={Shield}
            title="Secure & Private"
            description="The trusted choice for dignitaries, offering top-tier security protocols and private access options."
          />
        </div>
      </div>
    </section>
  );
};