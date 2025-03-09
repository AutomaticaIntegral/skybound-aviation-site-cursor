
import React from 'react';
import { Shield, Users, Target, Award } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="container-section bg-gradient-to-b from-white to-gray-50">
      <h2 className="section-title">About Olmo Aviation</h2>
      <p className="section-subtitle">
        A global leader in aerospace innovation with over two decades of experience 
        delivering cutting-edge solutions for commercial and defense applications.
      </p>
      
      <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
        <div className="space-y-6 animate-slide-in-bottom" style={{ animationDelay: "0.2s" }}>
          <h3 className="text-2xl font-bold mb-4 text-charcoal-dark">Our Mission & Vision</h3>
          <p className="mb-4 text-lg">
            At Olmo Aviation, we're committed to advancing the frontiers of aerospace technology 
            through innovation, precision engineering, and unwavering commitment to quality.
          </p>
          <p className="mb-6 text-lg">
            Our vision is to shape the future of aviation by developing sustainable, efficient, 
            and revolutionary aerospace solutions that transform how people and goods move across the globe.
          </p>
          
          <div className="grid grid-cols-2 gap-8 mt-10">
            <div className="flex flex-col items-center text-center transform transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-skyblue to-skyblue-light text-white flex items-center justify-center mb-4 shadow-md">
                <Shield className="h-8 w-8" />
              </div>
              <h4 className="font-bold text-lg">Safety First</h4>
            </div>
            <div className="flex flex-col items-center text-center transform transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-skyblue to-skyblue-light text-white flex items-center justify-center mb-4 shadow-md">
                <Users className="h-8 w-8" />
              </div>
              <h4 className="font-bold text-lg">Expert Team</h4>
            </div>
            <div className="flex flex-col items-center text-center transform transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-skyblue to-skyblue-light text-white flex items-center justify-center mb-4 shadow-md">
                <Target className="h-8 w-8" />
              </div>
              <h4 className="font-bold text-lg">Precision</h4>
            </div>
            <div className="flex flex-col items-center text-center transform transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-skyblue to-skyblue-light text-white flex items-center justify-center mb-4 shadow-md">
                <Award className="h-8 w-8" />
              </div>
              <h4 className="font-bold text-lg">Excellence</h4>
            </div>
          </div>
        </div>
        
        <div className="relative animate-slide-in-bottom" style={{ animationDelay: "0.4s" }}>
          <div className="rounded-lg overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-[1.02]">
            <img 
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
              alt="Aerospace engineering team" 
              className="w-full h-auto"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg md:max-w-xs">
            <p className="font-bold text-2xl text-skyblue">20+ Years</p>
            <p className="text-charcoal">Of aerospace industry excellence and innovation</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
