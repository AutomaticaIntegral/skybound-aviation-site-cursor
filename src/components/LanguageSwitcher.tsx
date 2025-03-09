
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const languageOptions = [
    { code: 'es', label: 'Español', flag: 'https://flagcdn.com/es.svg' },
    { code: 'en', label: 'English', flag: 'https://flagcdn.com/gb.svg' },
    { code: 'ca', label: 'Català', flag: 'https://flagcdn.com/es-ct.svg' }
  ];

  const currentLanguage = languageOptions.find(option => option.code === language);

  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4" />
      <Select value={language} onValueChange={(value) => setLanguage(value as 'es' | 'en' | 'ca')}>
        <SelectTrigger className="w-[130px] h-8 text-sm">
          <SelectValue>
            <div className="flex items-center gap-2">
              <img 
                src={currentLanguage?.flag} 
                alt={currentLanguage?.label} 
                className="h-3 w-4 object-cover"
              />
              <span>{currentLanguage?.label}</span>
            </div>
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {languageOptions.map((option) => (
            <SelectItem key={option.code} value={option.code}>
              <div className="flex items-center gap-2">
                <img 
                  src={option.flag} 
                  alt={option.label} 
                  className="h-3 w-4 object-cover"
                />
                <span>{option.label}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSwitcher;
