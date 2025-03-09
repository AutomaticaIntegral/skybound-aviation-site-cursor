
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

  // Usando una URL pública más directa para la bandera catalana
  const languageOptions = [
    { code: 'es', label: 'Español', flag: 'https://flagcdn.com/es.svg' },
    { code: 'en', label: 'English', flag: 'https://flagcdn.com/gb.svg' },
    { code: 'ca', label: 'Català', flag: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNTAgMTAwIj48cmVjdCB3aWR0aD0iMTUwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjRkNERDAzIi8+PHJlY3QgeT0iMTAiIHdpZHRoPSIxNTAiIGhlaWdodD0iMTAiIGZpbGw9IiNERTAwMzQiLz48cmVjdCB5PSIyMCIgd2lkdGg9IjE1MCIgaGVpZ2h0PSIxMCIgZmlsbD0iI0ZDREQUM0QiLz48cmVjdCB5PSIzMCIgd2lkdGg9IjE1MCIgaGVpZ2h0PSIxMCIgZmlsbD0iI0RFMDAzNCIvPjxyZWN0IHk9IjQwIiB3aWR0aD0iMTUwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjRkNERDAzIi8+PHJlY3QgeT0iNTAiIHdpZHRoPSIxNTAiIGhlaWdodD0iMTAiIGZpbGw9IiNERTAwMzQiLz48cmVjdCB5PSI2MCIgd2lkdGg9IjE1MCIgaGVpZ2h0PSIxMCIgZmlsbD0iI0ZDREQUM0QiLz48cmVjdCB5PSI3MCIgd2lkdGg9IjE1MCIgaGVpZ2h0PSIxMCIgZmlsbD0iI0RFMDAzNCIvPjxyZWN0IHk9IjgwIiB3aWR0aD0iMTUwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjRkNERDAzIi8+PHJlY3QgeT0iOTAiIHdpZHRoPSIxNTAiIGhlaWdodD0iMTAiIGZpbGw9IiNERTAwMzQiLz48L3N2Zz4=' }
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
