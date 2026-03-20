"use client";

import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { useEffect, useState } from "react";
import { t18n } from "@/i18n";

const ContactPage = () => {
  // Get current locale - default to 'en' on server, then update from localStorage on client
  const [language, setLanguage] = useState('en');
  
  // Update language from localStorage after hydration
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedLanguage = localStorage.getItem('language');
      if (storedLanguage) {
        setLanguage(storedLanguage);
      }
      
      // Listen for language changes using custom event
      const handleLanguageChange = () => {
        const newLanguage = localStorage.getItem('language') || 'en';
        setLanguage(newLanguage);
      };
      
      window.addEventListener('languageChange', handleLanguageChange);
      
      return () => {
        window.removeEventListener('languageChange', handleLanguageChange);
      };
    }
  }, []);

  return (
    <>
      <Breadcrumb
        pageName={t18n('contact.breadcrumb.pageName', language)}
        description={t18n('contact.breadcrumb.description', language)}
        language={language}
      />

      <Contact />
    </>
  );
};

export default ContactPage;