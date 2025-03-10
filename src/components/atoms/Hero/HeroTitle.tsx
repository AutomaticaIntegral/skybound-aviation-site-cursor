import React from 'react';

interface HeroTitleProps {
  title: string;
  highlightIndex?: number;
  className?: string;
}

const HeroTitle = ({ 
  title,
  highlightIndex = 1,
  className = '' 
}: HeroTitleProps) => {
  const baseClasses = "text-white mb-4 sm:mb-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-wider leading-tight";
  const combinedClasses = `${baseClasses} ${className}`;
  
  const words = title.split(' ');
  
  return (
    <h1 className={combinedClasses}>
      {words.map((word, i, arr) => 
        i === highlightIndex ? (
          <span key={i} className="text-transparent bg-clip-text bg-gradient-to-r from-skyblue to-skyblue-light animate-pulse-gradient">
            {word}{' '}
          </span>
        ) : (
          <span key={i}>{word}{i < arr.length - 1 ? ' ' : ''}</span>
        )
      )}
    </h1>
  );
};

export default HeroTitle; 