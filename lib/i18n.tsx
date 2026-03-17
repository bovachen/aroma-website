'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Locale } from './config';
import { defaultLocale } from './config';
import type { Translations } from '@/locales/en';
import en from '@/locales/en';
import zh from '@/locales/zh';

const translations: Record<Locale, Translations> = { en, zh };

interface LanguageContextValue {
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  locale: defaultLocale,
  t: en,
  setLocale: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const saved = localStorage.getItem('aethel-locale') as Locale | null;
    if (saved && (saved === 'en' || saved === 'zh')) {
      setLocaleState(saved);
    }
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    localStorage.setItem('aethel-locale', l);
    document.documentElement.lang = l === 'zh' ? 'zh-CN' : 'en';
  };

  const t = translations[locale];

  return (
    <LanguageContext.Provider value={{ locale, t, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
