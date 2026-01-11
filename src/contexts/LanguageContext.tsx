import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '@/data/translations';

type Language = 'en' | 'fi' | 'bn' | 'no' | 'sv';

const supportedLanguages: Language[] = ['en', 'fi', 'bn', 'no', 'sv'];

const detectBrowserLanguage = (): Language => {
  const browserLang = navigator.language || (navigator as any).userLanguage;
  const langCode = browserLang.split('-')[0].toLowerCase();
  
  // Map browser language codes to supported languages
  const langMap: Record<string, Language> = {
    en: 'en',
    fi: 'fi',
    bn: 'bn',
    no: 'no',
    nb: 'no', // Norwegian Bokmål
    nn: 'no', // Norwegian Nynorsk
    sv: 'sv',
  };
  
  return langMap[langCode] || 'en';
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Check localStorage first, then detect from browser
    const saved = localStorage.getItem('preferred-language');
    if (saved && supportedLanguages.includes(saved as Language)) {
      return saved as Language;
    }
    return detectBrowserLanguage();
  });

  useEffect(() => {
    localStorage.setItem('preferred-language', language);
  }, [language]);

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
