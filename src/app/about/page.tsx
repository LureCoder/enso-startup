"use client";

import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { useEffect, useState } from "react";
import { t18n } from "@/i18n";
import { useLanguage } from "@/hooks/useLanguage";

const AboutPage = () => {
  // Use custom hook for language management
  const language = useLanguage();

  return (
    <>
      <Breadcrumb
        pageName={t18n('about.breadcrumb.pageName', language)}
        description={t18n('about.breadcrumb.description', language)}
        language={language}
      />

      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;