
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
    { code: 'es', label: '🇪🇸 Español' },
    { code: 'en', label: '🇬🇧 English' },
    { code: 'ca', label: '🏴 Català' }
  ];

  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4" />
      <Select value={language} onValueChange={(value) => setLanguage(value as 'es' | 'en' | 'ca')}>
        <SelectTrigger className="w-[130px] h-8 text-sm">
          <SelectValue placeholder="Idioma" />
        </SelectTrigger>
        <SelectContent>
          {languageOptions.map((option) => (
            <SelectItem key={option.code} value={option.code}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSwitcher;
