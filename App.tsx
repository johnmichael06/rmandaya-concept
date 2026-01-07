import React from 'react';
import { Hero } from './components/Hero';
import { FloatingCards } from './components/FloatingCards';
import { ModernGrid } from './components/ModernGrid';
import { CuratedCarousel } from './components/CuratedCarousel';
import { WhyRoyal } from './components/WhyRoyal';
import { FooterCTA } from './components/FooterCTA';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-montserrat min-h-screen flex flex-col relative overflow-x-hidden bg-royal-cream">
      <Navbar />
      
      <main className="flex-grow">
        {/* Wrapper for Hero and Floating Cards overlap */}
        <div className="relative w-full">
          <Hero />
          <FloatingCards />
        </div>

        <ModernGrid />
        
        <CuratedCarousel />
        
        <WhyRoyal />

        <FooterCTA />
      </main>

      <Footer />
    </div>
  );
};

export default App;