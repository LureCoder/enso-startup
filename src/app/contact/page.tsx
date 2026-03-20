"use client";

import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { useEffect, useState } from "react";
import { t18n } from "@/i18n";
import { useLanguage } from "@/hooks/useLanguage";

const ContactPage = () => {
  // Use custom hook for language management
  const language = useLanguage();

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