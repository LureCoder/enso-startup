"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { t18n } from "@/i18n";
import AnimatedText from "@/components/Common/AnimatedText";
import { useLanguage } from "@/hooks/useLanguage";

const ErrorPage = () => {
  // Use custom hook for language management
  const language = useLanguage();

  return (
    <>
      <section className="relative z-10 pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[400px] text-center">
                <h2 className="mb-8 text-[50px] font-bold leading-none text-black dark:text-white sm:text-[80px]">
                  404
                </h2>
                <h3 className="mb-3 text-2xl font-bold leading-tight text-black dark:text-white sm:text-3xl sm:leading-tight">
                  <AnimatedText>
                    {t18n('404.title', language)}
                  </AnimatedText>
                </h3>
                <p className="mb-7 text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark">
                  <AnimatedText>
                    {t18n('404.description', language)}
                  </AnimatedText>
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-semibold text-white duration-300 hover:bg-primary/90"
                >
                  <AnimatedText>
                    {t18n('404.goHome', language)}
                  </AnimatedText>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;