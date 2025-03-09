
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const languageOptions = [
    { code: 'es', label: '🇪🇸 Español' },
    { code: 'en', label: '🇬🇧 English' },
    { code: 'ca', label: '🏴 Català' }
  ];

  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4" />
      <div className="flex space-x-2">
        {languageOptions.map((option) => (
          <Button
            key={option.code}
            variant={language === option.code ? 'default' : 'ghost'}
            size="sm"
            className={`px-2 py-1 text-xs ${language === option.code ? 'bg-skyblue hover:bg-skyblue-dark' : ''}`}
            onClick={() => setLanguage(option.code as 'es' | 'en' | 'ca')}
          >
            {option.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
