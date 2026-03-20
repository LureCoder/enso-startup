"use client";

import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import NewsLatterBox from "@/components/Contact/NewsLatterBox";
import Image from "next/image";
import { useEffect, useState } from "react";
import { t18n } from "@/i18n";
import AnimatedText from "@/components/Common/AnimatedText";

const BlogSidebarPage = () => {
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
      <section className="overflow-hidden pb-[120px] pt-[120px] dark:bg-gray-dark">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-8/12">
              <div className="mb-8 rounded-md bg-white p-6 shadow-one dark:bg-gray-dark sm:p-[55px] lg:mb-0 lg:px-8 xl:p-[55px]">
                <h2 className="mb-4 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                    <AnimatedText>
                      {t18n('blogDetails.title', language)}
                    </AnimatedText>
                  </h2>
                  <p className="mb-6 text-base font-medium text-body-color dark:text-body-color-dark">
                    <AnimatedText>
                      {t18n('blogDetails.description', language)}
                    </AnimatedText>
                  </p>
                  <div className="mb-6 flex items-center border-b border-body-color/10 pb-6 dark:border-white/10">
                    <Image
                      src="/images/blog/author-01.png"
                      alt="author"
                      width={50}
                      height={50}
                      className="mr-4 h-[50px] w-[50px] rounded-full"
                    />
                    <div>
                      <h4 className="text-base font-semibold text-black dark:text-white">
                        <AnimatedText>
                          {t18n('blogDetails.author', language)}
                        </AnimatedText>
                      </h4>
                      <p className="text-sm text-body-color dark:text-body-color-dark">
                        <AnimatedText>
                          {t18n('blogDetails.date', language)}
                        </AnimatedText>
                      </p>
                    </div>
                  </div>
                <SharePost />
                <TagButton text="Next.js" />
                <TagButton text="Tailwind" />
                <TagButton text="React" />
              </div>
            </div>
            <div className="w-full px-4 lg:w-4/12">
              <div className="mb-8 rounded-md bg-white p-6 shadow-one dark:bg-gray-dark sm:p-[55px] lg:mb-0 lg:px-8 xl:p-[55px]">
                <RelatedPost
                  image="/images/blog/author-01.png"
                  slug="/blog-details"
                  title="Related Post Title"
                  date="Jan 01, 2024"
                  language={language}
                />
                <NewsLatterBox />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSidebarPage;