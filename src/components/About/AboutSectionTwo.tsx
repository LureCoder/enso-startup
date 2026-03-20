"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { t18n } from "@/i18n";
import AnimatedText from "@/components/Common/AnimatedText";

const AboutSectionTwo = () => {
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
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-25/24 max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  <AnimatedText>
                    {t18n('about.sectionTwo.bugFree', language)}
                  </AnimatedText>
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  <AnimatedText>
                    {t18n('about.sectionTwo.bugFreeDesc', language)}
                  </AnimatedText>
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  <AnimatedText>
                    {t18n('about.sectionTwo.premierSupport', language)}
                  </AnimatedText>
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  <AnimatedText>
                    {t18n('about.sectionTwo.premierSupportDesc', language)}
                  </AnimatedText>
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  <AnimatedText>
                    {t18n('about.sectionTwo.nextjs', language)}
                  </AnimatedText>
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  <AnimatedText>
                    {t18n('about.sectionTwo.nextjsDesc', language)}
                  </AnimatedText>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
