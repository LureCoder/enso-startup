"use client";

import { t18n } from "@/i18n";
import { useLanguage } from "@/hooks/useLanguage";
import AnimatedText from "@/components/Common/AnimatedText";

export default function ProductNotFound() {
  const language = useLanguage();

  return (
    <div className="container py-20 text-center">
      <h1 className="text-2xl font-bold text-black dark:text-white">
        <AnimatedText>{t18n("products.notFound", language)}</AnimatedText>
      </h1>
      <a
        href="/products"
        className="text-primary hover:text-primary/80 mt-4 inline-block transition"
      >
        <AnimatedText>{t18n("products.backToProducts", language)}</AnimatedText>
      </a>
    </div>
  );
}
