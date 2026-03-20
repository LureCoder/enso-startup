import { useState, useEffect } from "react";
import { getLanguageFromCookie } from "@/utils/languageCookie";

export function useLanguage() {
  // Always start with 'en' to match server-side rendering
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    // Read language from cookie/localStorage after hydration
    const cookieLanguage = getLanguageFromCookie();
    if (cookieLanguage && cookieLanguage !== 'en') {
      setLanguage(cookieLanguage);
    } else {
      const storedLanguage = localStorage.getItem('language');
      if (storedLanguage) {
        setLanguage(storedLanguage);
      }
    }

    // Listen for language changes using custom event
    const handleLanguageChange = () => {
      const newLanguage = getLanguageFromCookie() || localStorage.getItem('language') || 'en';
      setLanguage(newLanguage);
    };

    window.addEventListener('languageChange', handleLanguageChange);

    return () => {
      window.removeEventListener('languageChange', handleLanguageChange);
    };
  }, []);

  return language;
}
