
import React from 'react';
import { Shield, Users, Target, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="container-section bg-gradient-to-b from-white to-gray-50">
      <h2 className="section-title">{t('about.title')}</h2>
      <p className="section-subtitle">
        {t('about.subtitle')}
      </p>
      
      <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
        <div className="space-y-6 animate-slide-in-bottom" style={{ animationDelay: "0.2s" }}>
          <h3 className="text-2xl font-bold mb-4 text-charcoal-dark">{t('about.mission')}</h3>
          <p className="mb-4 text-lg">
            {t('about.paragraph1')}
          </p>
          <p className="mb-6 text-lg">
            {t('about.paragraph2')}
          </p>
          
          <div className="grid grid-cols-2 gap-8 mt-10">
            <div className="flex flex-col items-center text-center transform transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-skyblue to-skyblue-light text-white flex items-center justify-center mb-4 shadow-md">
                <Shield className="h-8 w-8" />
              </div>
              <h4 className="font-bold text-lg">{t('about.values.safety')}</h4>
            </div>
            <div className="flex flex-col items-center text-center transform transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-skyblue to-skyblue-light text-white flex items-center justify-center mb-4 shadow-md">
                <Users className="h-8 w-8" />
              </div>
              <h4 className="font-bold text-lg">{t('about.values.team')}</h4>
            </div>
            <div className="flex flex-col items-center text-center transform transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-skyblue to-skyblue-light text-white flex items-center justify-center mb-4 shadow-md">
                <Target className="h-8 w-8" />
              </div>
              <h4 className="font-bold text-lg">{t('about.values.precision')}</h4>
            </div>
            <div className="flex flex-col items-center text-center transform transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-skyblue to-skyblue-light text-white flex items-center justify-center mb-4 shadow-md">
                <Award className="h-8 w-8" />
              </div>
              <h4 className="font-bold text-lg">{t('about.values.excellence')}</h4>
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
            <p className="font-bold text-2xl text-skyblue">{t('about.yearsExperience')}</p>
            <p className="text-charcoal">{t('about.experienceText')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
