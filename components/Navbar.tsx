import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
    isScrolled 
      ? 'bg-royal-onyx/95 backdrop-blur-md py-4 shadow-lg' 
      : 'bg-transparent py-6'
  }`;

  const linkClasses = "text-white hover:text-royal-gold transition-colors text-xs tracking-[0.15em] uppercase font-medium";

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2 z-50">
           {/* Simple SVG Logo Placeholder */}
           <div className="w-8 h-8 bg-royal-gold rounded-sm flex items-center justify-center">
             <span className="font-playfair font-bold text-royal-onyx text-xl">R</span>
           </div>
           <span className={`font-playfair font-bold text-xl tracking-widest ${isScrolled ? 'text-white' : 'text-white'}`}>
             MANDAYA
           </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          <a href="#" className={linkClasses}>Home</a>
          <a href="#" className={linkClasses}>Rooms</a>
          <a href="#" className={linkClasses}>Dining</a>
          <a href="#" className={linkClasses}>Facilities</a>
          <a href="#" className={linkClasses}>Contact</a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
            <button className="bg-royal-gold text-royal-onyx px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors">
                Book Now
            </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-royal-onyx z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <a href="#" className="text-2xl font-playfair text-white hover:text-royal-gold">Home</a>
          <a href="#" className="text-2xl font-playfair text-white hover:text-royal-gold">Rooms</a>
          <a href="#" className="text-2xl font-playfair text-white hover:text-royal-gold">Dining</a>
          <a href="#" className="text-2xl font-playfair text-white hover:text-royal-gold">Events</a>
          <button className="mt-8 bg-royal-gold text-royal-onyx px-8 py-3 text-sm font-bold uppercase tracking-widest">
                Book Now
          </button>
        </div>
      </div>
    </nav>
  );
};