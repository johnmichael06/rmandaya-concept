import React from "react";
// DELETE THIS LINE: import Image from 'next/image';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[90vh] bg-royal-onyx flex items-center justify-center overflow-hidden pb-40 pt-32">
      {/* --- BACKGROUND IMAGE LAYER --- */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* USE THIS NORMAL IMG TAG INSTEAD */}
        <img
          src="/images/royal-mandaya.jpg"
          alt="Royal Mandaya Hotel Exterior"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* The Dark Overlay Tint */}
        <div className="absolute inset-0 bg-royal-onyx/70 mix-blend-multiply"></div>
      </div>

      {/* --- Gold Pattern Overlay --- */}
      <div className="absolute inset-0 w-full h-full opacity-[0.06] bg-damask pointer-events-none mix-blend-screen bg-repeat z-10"></div>

      {/* --- Gradient --- */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-royal-onyx pointer-events-none z-10"></div>

      {/* --- Content --- */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center gap-8 mt-10">
        <span className="uppercase tracking-[0.4em] text-royal-gold text-xs md:text-sm font-semibold animate-fade-in-up">
          Welcome to Davao's Premier Heritage Address
        </span>

        <h1 className="font-playfair text-5xl md:text-7xl lg:text-[6rem] leading-[0.9] text-royal-soft-white animate-fade-in-up delay-100 drop-shadow-2xl">
          THE ROYAL <br />
          <span className="italic text-royal-gold">MANDAYA</span>
        </h1>

        <p className="font-montserrat text-gray-300 max-w-lg text-sm md:text-base leading-loose mt-4 animate-fade-in-up delay-200 drop-shadow-md">
          A sanctuary where Davao’s rich history meets contemporary luxury. The
          preferred choice for leaders and tastemakers.
        </p>

        <div className="mt-8 animate-fade-in-up delay-300">
          <button className="px-10 py-4 border border-royal-gold text-royal-gold bg-black/30 hover:bg-royal-gold hover:text-royal-onyx transition-all duration-300 uppercase tracking-[0.2em] text-xs font-bold backdrop-blur-md mb-20">
            Book Your Stay
          </button>
        </div>
      </div>
    </section>
  );
};
