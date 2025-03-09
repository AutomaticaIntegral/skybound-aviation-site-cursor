
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="relative h-[85vh] flex items-center overflow-hidden">
      {/* Enhanced Hero Background with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-dark/90 to-charcoal-dark/70 z-10"></div>
        <div 
          className="absolute inset-0 z-0 transform scale-[1.02] transition-transform duration-[30000ms] ease-linear hover:scale-[1.08] animate-subtle-float"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1543078468-d0ad660d6148?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.9)'
          }}
        >
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-skyblue/10 to-transparent opacity-40 animate-pulse-slow"></div>
        </div>
      </div>
      
      {/* Improved Hero Content with Enhanced Glassmorphism */}
      <div className="container mx-auto px-4 relative z-20 flex items-center justify-start h-full">
        <div className="max-w-3xl backdrop-blur-xl p-8 rounded-xl bg-gradient-to-r from-charcoal-dark/90 to-charcoal-dark/80 border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.4)] animate-fade-in ring-1 ring-white/10">
          <h1 className="text-white mb-6 text-5xl md:text-6xl font-bold tracking-wider leading-tight">
            Pioneering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-skyblue to-skyblue-light animate-pulse-gradient">Future</span> of Aviation
          </h1>
          <p className="text-white/90 text-xl md:text-2xl mb-12 font-light leading-relaxed animate-fade-in-delay-1">
            Delivering innovative aerospace solutions with precision, reliability, and cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-delay-2">
            <Button 
              className="bg-skyblue hover:bg-skyblue-dark text-white px-8 py-7 text-lg rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 group"
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-skyblue text-skyblue backdrop-blur-sm bg-white/5 hover:bg-white/20 hover:text-white px-8 py-7 text-lg rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              About Olmo Aviation
            </Button>
          </div>
        </div>
      </div>

      {/* Animated Accent Element */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-charcoal-dark/80 to-transparent z-10"></div>
    </section>
  );
};

export default HeroSection;
