import React from 'react';

interface HeroBackgroundProps {
  imageUrl: string;
  className?: string;
}

const HeroBackground = ({ 
  imageUrl,
  className = '' 
}: HeroBackgroundProps) => {
  return (
    <div className={`absolute inset-0 z-0 w-full ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal-dark/90 to-charcoal-dark/70 z-10"></div>
      <div 
        className="absolute inset-0 z-0 transform scale-[1.02] transition-transform duration-[30000ms] ease-linear hover:scale-[1.08] animate-subtle-float"
        style={{
          backgroundImage: `url('${imageUrl}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.9)'
        }}
      >
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-skyblue/10 to-transparent opacity-40 animate-pulse-slow"></div>
      </div>
    </div>
  );
};

export default HeroBackground; 