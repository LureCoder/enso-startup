import { useState, useEffect } from "react";
import { getLanguageFromCookie } from "@/utils/languageCookie";

export function useLanguage() {
  // Always start with 'en' to match server-side rendering
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    // Get user's preferred language from browser settings
    const getBrowserLanguage = () => {
      const browserLang = navigator.language || navigator.languages?.[0] || 'en';
      const langCode = browserLang.split('-')[0].toLowerCase();
      // Only use supported languages
      return ['en', 'zh'].includes(langCode) ? langCode : 'en';
    };

    // Read language from cookie/localStorage after hydration
    const cookieLanguage = getLanguageFromCookie();
    if (cookieLanguage && cookieLanguage !== 'en') {
      setLanguage(cookieLanguage);
    } else {
      const storedLanguage = localStorage.getItem('language');
      if (storedLanguage) {
        setLanguage(storedLanguage);
      } else {
        // Use browser's language if no stored preference
        const browserLanguage = getBrowserLanguage();
        setLanguage(browserLanguage);
        localStorage.setItem('language', browserLanguage);
      }
    }

    // Listen for language changes using custom event
    const handleLanguageChange = () => {
      const newLanguage = getLanguageFromCookie() || localStorage.getItem('language') || getBrowserLanguage();
      setLanguage(newLanguage);
    };

    window.addEventListener('languageChange', handleLanguageChange);

    return () => {
      window.removeEventListener('languageChange', handleLanguageChange);
    };
  }, []);

  return language;
}
