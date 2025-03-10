import React from 'react';

interface HeroAccentProps {
  className?: string;
}

const HeroAccent = ({ className = '' }: HeroAccentProps) => {
  const baseClasses = "absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-charcoal-dark/80 to-transparent z-10";
  const combinedClasses = `${baseClasses} ${className}`;
  
  return (
    <div className={combinedClasses}></div>
  );
};

export default HeroAccent; 