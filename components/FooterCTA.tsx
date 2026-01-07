import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export const FooterCTA: React.FC = () => {
  return (
    <section className="relative w-full bg-royal-onyx py-32 overflow-hidden">
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 w-full h-full opacity-5 bg-damask pointer-events-none mix-blend-screen bg-repeat"></div>
      
      {/* Gradient Overlay for Vignette Effect */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-royal-onyx/90 pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        
        {/* Main Headline */}
        <h2 className="font-playfair text-5xl md:text-7xl text-royal-soft-white mb-6 leading-tight">
          Begin Your <br />
          <span className="italic text-royal-gold">Royal Journey.</span>
        </h2>

        {/* Subtext */}
        <p className="font-montserrat text-gray-400 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
          For reservations or private event inquiries, our concierge is at your service to craft your perfect stay.
        </p>

        {/* CTA Button */}
        <a 
          href="mailto:reservations@royalmandaya.com"
          className="bg-royal-gold text-royal-onyx px-12 py-5 text-sm md:text-base font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors duration-300 shadow-[0_20px_40px_rgba(197,160,89,0.2)]"
        >
          Contact the Concierge
        </a>

        {/* Direct Details Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 pt-16 border-t border-white/10">
          
          <div className="flex flex-col items-center gap-3">
            <div className="text-royal-gold mb-1"><MapPin size={20} /></div>
            <span className="text-royal-gold text-xs uppercase tracking-widest font-bold">Visit</span>
            <span className="text-gray-300 font-montserrat text-sm leading-relaxed max-w-[200px]">
              J. Palma Gil St, Poblacion District, Davao City
            </span>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="text-royal-gold mb-1"><Phone size={20} /></div>
            <span className="text-royal-gold text-xs uppercase tracking-widest font-bold">Call</span>
            <span className="text-gray-300 font-montserrat text-sm">
              (082) 225-8888
            </span>
          </div>

          <div className="flex flex-col items-center gap-3">
             <div className="text-royal-gold mb-1"><Mail size={20} /></div>
            <span className="text-royal-gold text-xs uppercase tracking-widest font-bold">Email</span>
            <span className="text-gray-300 font-montserrat text-sm">
              info@royalmandaya.com
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};