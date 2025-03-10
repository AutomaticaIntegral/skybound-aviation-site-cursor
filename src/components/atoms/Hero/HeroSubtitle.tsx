import React from 'react';

interface HeroSubtitleProps {
  text: string;
  className?: string;
}

const HeroSubtitle = ({ 
  text,
  className = '' 
}: HeroSubtitleProps) => {
  const baseClasses = "text-white/90 text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 font-light leading-relaxed";
  const combinedClasses = `${baseClasses} ${className}`;
  
  return (
    <p className={combinedClasses}>
      {text}
    </p>
  );
};

export default HeroSubtitle; 