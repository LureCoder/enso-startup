"use client";
import { useState, useEffect, useRef } from "react";
import { setLanguageCookie, getLanguageFromCookie } from "@/utils/languageCookie";

const LanguageToggler = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState('en');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Update language from cookie/localStorage after hydration
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // First try to read from cookie
      const cookieLanguage = getLanguageFromCookie();
      if (cookieLanguage && cookieLanguage !== 'en') {
        setLanguage(cookieLanguage);
      } else {
        // Fallback to localStorage
        const storedLanguage = localStorage.getItem('language');
        if (storedLanguage) {
          setLanguage(storedLanguage);
        }
      }
    }
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    if (typeof window !== 'undefined') {
      // Save to both cookie and localStorage
      setLanguageCookie(newLanguage);
      localStorage.setItem('language', newLanguage);
      // Trigger custom event for other components
      window.dispatchEvent(new Event('languageChange'));
    }
    setIsOpen(false);
  };

  const getLanguageLabel = () => {
    return language === 'en' ? 'EN' : '中';
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        aria-label="language toggler"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center text-black rounded-full cursor-pointer bg-gray-2 dark:bg-dark-bg h-9 w-9 dark:text-white md:h-14 md:w-14 transition-all duration-300 hover:scale-110 active:scale-95"
      >
        <span className="text-sm font-semibold md:text-base">
          {getLanguageLabel()}
        </span>
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute right-0 top-full mt-2 w-32 rounded-lg bg-white dark:bg-gray-dark shadow-lg transition-all duration-300 ${
          isOpen
            ? 'opacity-100 translate-y-0 visible'
            : 'opacity-0 -translate-y-2 invisible'
        }`}
      >
        <div className="py-2">
          <button
            onClick={() => handleLanguageChange('en')}
            className={`w-full px-4 py-2 text-left text-sm transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-700 ${
              language === 'en'
                ? 'text-primary font-semibold'
                : 'text-dark dark:text-white'
            }`}
          >
            English
          </button>
          <button
            onClick={() => handleLanguageChange('zh')}
            className={`w-full px-4 py-2 text-left text-sm transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-700 ${
              language === 'zh'
                ? 'text-primary font-semibold'
                : 'text-dark dark:text-white'
            }`}
          >
            中文
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageToggler;