"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { t18n } from "@/i18n";
import AnimatedText from "@/components/Common/AnimatedText";

const SignupPage = () => {
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
      <section className="relative z-10 overflow-hidden pt-36 pb-16 md:pb-20 lg:pt-[180px] lg:pb-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="relative mx-auto max-w-[500px] overflow-hidden rounded-lg bg-white px-8 py-10 shadow-one dark:bg-gray-dark sm:p-[55px]">
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  <AnimatedText>
                    {t18n('signup.title', language)}
                  </AnimatedText>
                </h3>
                <p className="mb-7 text-base font-medium text-body-color dark:text-body-color-dark">
                  <AnimatedText>
                    {t18n('signup.description', language)}
                  </AnimatedText>
                </p>
                <form>
                  <div className="mb-6">
                    <label className="mb-2 block text-sm font-medium text-black dark:text-white">
                      <AnimatedText>
                        {t18n('signup.name', language)}
                      </AnimatedText>
                    </label>
                    <input
                      type="text"
                      placeholder={t18n('signup.namePlaceholder', language)}
                      className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="mb-2 block text-sm font-medium text-black dark:text-white">
                      <AnimatedText>
                        {t18n('signup.email', language)}
                      </AnimatedText>
                    </label>
                    <input
                      type="email"
                      placeholder={t18n('signup.emailPlaceholder', language)}
                      className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="mb-2 block text-sm font-medium text-black dark:text-white">
                      <AnimatedText>
                        {t18n('signup.password', language)}
                      </AnimatedText>
                    </label>
                    <input
                      type="password"
                      placeholder={t18n('signup.passwordPlaceholder', language)}
                      className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white"
                    />
                  </div>
                  <div className="mb-6">
                    <button className="flex w-full items-center justify-center rounded-md bg-primary px-9 py-4 text-base font-semibold text-white duration-300 hover:bg-primary/90">
                      <AnimatedText>
                        {t18n('signup.signupButton', language)}
                      </AnimatedText>
                    </button>
                  </div>
                </form>
                <p className="text-center text-base font-medium text-body-color dark:text-body-color-dark">
                  <AnimatedText>
                    {t18n('signup.alreadyHaveAccount', language)}
                  </AnimatedText>
                  {" "}
                  <a href="/signin" className="text-primary hover:underline">
                    <AnimatedText>
                      {t18n('signup.signin', language)}
                    </AnimatedText>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignupPage;