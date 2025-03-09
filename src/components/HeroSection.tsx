
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-20 overflow-hidden">
      {/* Hero Background with Enhanced Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-dark/90 to-charcoal-dark/70 z-10"></div>
        <div className="absolute inset-0 z-0 transform scale-[1.02] transition-transform duration-[30000ms] ease-linear hover:scale-[1.08] animate-subtle-float">
          <img 
            src="https://images.unsplash.com/photo-1543078468-d0ad660d6148?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Aircraft in flight" 
            className="object-cover w-full h-full filter brightness-90"
          />
        </div>
      </div>
      
      {/* Hero Content with Enhanced Animations */}
      <div className="container mx-auto px-4 relative z-20 py-40 md:py-48 lg:py-56">
        <div className="max-w-3xl backdrop-blur-sm p-8 rounded-lg bg-gradient-to-r from-charcoal-dark/30 to-transparent">
          <h1 className="text-white mb-4 opacity-0 animate-[fade-in_0.8s_ease-out_forwards] text-5xl md:text-6xl font-bold tracking-tight">
            Pioneering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-skyblue to-skyblue-light">Future</span> of Aviation
          </h1>
          <p className="text-white/90 text-xl md:text-2xl mb-10 font-light opacity-0 animate-[fade-in_0.8s_ease-out_0.3s_forwards]">
            Delivering innovative aerospace solutions with precision, reliability, and cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-[fade-in_0.8s_ease-out_0.6s_forwards]">
            <Button className="bg-skyblue hover:bg-skyblue-dark text-white px-8 py-7 text-lg rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-skyblue text-skyblue backdrop-blur-sm bg-white/5 hover:bg-white/20 hover:text-white px-8 py-7 text-lg rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
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
