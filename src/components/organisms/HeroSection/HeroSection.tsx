import React from 'react';
import { HeroBackground, HeroAccent } from '@/components/atoms/Hero';
import { HeroContent } from '@/components/molecules/Hero';

const HeroSection = () => {
  return (
    <section id="home" className="relative h-[85vh] flex items-center overflow-hidden w-full">
      {/* Enhanced Hero Background with Parallax Effect */}
      <HeroBackground 
        imageUrl="https://images.unsplash.com/photo-1543078468-d0ad660d6148?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
      />
      
      {/* Improved Hero Content with Enhanced Glassmorphism */}
      <div className="container mx-auto px-4 sm:px-6 relative z-20 flex items-center justify-start h-full w-full">
        <HeroContent />
      </div>

      {/* Animated Accent Element */}
      <HeroAccent />
    </section>
  );
};

export default HeroSection; 