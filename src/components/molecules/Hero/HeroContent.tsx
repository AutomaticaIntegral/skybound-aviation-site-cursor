import React from 'react';
import { HeroTitle, HeroSubtitle } from '@/components/atoms/Hero';
import { PrimaryButton, SecondaryButton } from '@/components/atoms/Button';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface HeroContentProps {
  className?: string;
}

const HeroContent = ({ className = '' }: HeroContentProps) => {
  const { t } = useLanguage();
  
  const baseClasses = "max-w-3xl backdrop-blur-xl p-6 sm:p-8 rounded-xl bg-gradient-to-r from-charcoal-dark/90 to-charcoal-dark/80 border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.4)] ring-1 ring-white/10 w-full sm:w-auto";
  const combinedClasses = `${baseClasses} ${className}`;
  
  return (
    <div className={combinedClasses}>
      <HeroTitle title={t('hero.title')} />
      <HeroSubtitle text={t('hero.subtitle')} />
      
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full">
        <PrimaryButton withIcon>
          {t('hero.exploreButton')}
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </PrimaryButton>
        
        <SecondaryButton>
          {t('hero.aboutButton')}
        </SecondaryButton>
      </div>
    </div>
  );
};

export default HeroContent; 