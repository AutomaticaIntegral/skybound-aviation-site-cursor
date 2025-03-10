import React, { ReactNode } from 'react';
import { Button } from '@/components/ui/button';

interface PrimaryButtonProps {
  children: ReactNode;
  fullWidthOnMobile?: boolean;
  withIcon?: boolean;
  onClick?: () => void;
}

const PrimaryButton = ({ 
  children, 
  fullWidthOnMobile = true,
  withIcon = false,
  onClick 
}: PrimaryButtonProps) => {
  return (
    <Button 
      onClick={onClick}
      className={`
        bg-skyblue hover:bg-skyblue-dark text-white 
        px-6 sm:px-8 py-6 sm:py-7 text-base sm:text-lg 
        rounded-md shadow-lg hover:shadow-xl 
        transition-all duration-300 transform 
        hover:-translate-y-1 hover:scale-105 
        ${withIcon ? 'group' : ''} 
        ${fullWidthOnMobile ? 'w-full sm:w-auto' : ''}
      `}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton; 