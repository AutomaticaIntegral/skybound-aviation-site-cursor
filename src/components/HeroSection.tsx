
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-20 overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-dark/80 to-charcoal-dark/60 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1543078468-d0ad660d6148?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Aircraft in flight" 
          className="object-cover w-full h-full"
        />
      </div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 relative z-20 py-32 md:py-44 lg:py-48">
        <div className="max-w-3xl">
          <h1 className="text-white mb-4 animate-fade-in">
            Pioneering the Future of Aviation
          </h1>
          <p className="text-white/90 text-xl md:text-2xl mb-8 animate-fade-in">
            Delivering innovative aerospace solutions with precision, reliability, and cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Button className="bg-skyblue hover:bg-skyblue-dark text-white px-6 py-6 text-lg">
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-charcoal-dark px-6 py-6 text-lg">
              About Olmo Aviation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
