import React from 'react';
import { Crown, Utensils, BedDouble, ArrowRight } from 'lucide-react';
import { FeatureCardProps } from '../types';

const Card: React.FC<FeatureCardProps> = ({ title, description, Icon }) => (
  <div className="group relative bg-royal-cream p-10 shadow-[0_30px_60px_rgba(0,0,0,0.15)] border-t-[4px] border-royal-gold hover:-translate-y-3 transition-transform duration-500 ease-out flex flex-col h-full overflow-hidden">
    
    {/* Large BG Icon */}
    <div className="absolute -right-6 -top-6 p-4 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-500 rotate-12">
        <Icon size={140} className="text-royal-onyx" />
    </div>
    
    <div className="mb-8 inline-flex items-center justify-center w-16 h-16 rounded-full bg-royal-onyx/5 text-royal-gold group-hover:bg-royal-gold group-hover:text-royal-onyx transition-colors duration-300">
      <Icon size={32} strokeWidth={1.5} />
    </div>
    
    <h3 className="font-playfair text-2xl text-royal-onyx mb-4">
      {title}
    </h3>
    
    <p className="font-montserrat text-royal-dark-grey/70 text-sm leading-relaxed mb-8 flex-grow">
      {description}
    </p>

    <div className="flex items-center text-royal-onyx font-bold text-xs tracking-[0.2em] uppercase group-hover:text-royal-gold transition-colors cursor-pointer">
      Discover
      <ArrowRight size={14} className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
    </div>
  </div>
);

export const FloatingCards: React.FC = () => {
  const cards = [
    {
      title: "Grand Ballrooms",
      description: "Host your timeless events in our pillarless ballrooms, featuring crystal chandeliers and a capacity for 1,000 guests.",
      Icon: Crown
    },
    {
      title: "Luxury Suites",
      description: "Experience the Presidential standard. Panoramic views of Mt. Apo and the Davao Gulf from your private sanctuary.",
      Icon: BedDouble
    },
    {
      title: "Heritage Dining",
      description: "Kamayo Café serves a curated fusion of international gastronomy and the distinct, rich flavors of Davao.",
      Icon: Utensils
    }
  ];

  return (
    <section className="relative z-20 px-4 md:px-8 w-full max-w-7xl mx-auto -mt-32 mb-32">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div key={index} className="w-full">
            <Card {...card} />
          </div>
        ))}
      </div>
    </section>
  );
};