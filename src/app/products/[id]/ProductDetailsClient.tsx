"use client";

import Image from "next/image";
import Link from "next/link";
import { t18n } from "@/i18n";
import { useLanguage } from "@/hooks/useLanguage";
import AnimatedText from "@/components/Common/AnimatedText";

interface Product {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  category: string;
  image: string;
  gallery: string[];
  features: string[];
  specifications: { label: string; value: string }[];
  benefits: string[];
}

export default function ProductDetailsClient({ product }: { product: Product }) {
  const language = useLanguage();

  const translatedCategory = t18n(
    `products.categories.${product.category}`,
    language
  );

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        {/* Breadcrumb */}
        <div className="mb-8">
          <nav className="text-sm">
            <Link href="/" className="text-body-color hover:text-primary">
              <AnimatedText>{t18n("header.home", language)}</AnimatedText>
            </Link>
            <span className="mx-2 text-body-color">/</span>
            <Link
              href="/products"
              className="text-body-color hover:text-primary"
            >
              <AnimatedText>
                {t18n("header.our products", language)}
              </AnimatedText>
            </Link>
            <span className="mx-2 text-body-color">/</span>
            <span className="text-primary">
              <AnimatedText>{product.title}</AnimatedText>
            </span>
          </nav>
        </div>

        {/* Product Title and Category */}
        <div className="mb-12 text-center">
          <span className="bg-primary/10 text-primary mb-4 inline-block rounded-full px-4 py-2 text-sm font-semibold capitalize">
            <AnimatedText>{translatedCategory}</AnimatedText>
          </span>
          <h1 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl lg:text-5xl">
            <AnimatedText>{product.title}</AnimatedText>
          </h1>
          <p className="text-body-color mx-auto max-w-2xl text-lg">
            <AnimatedText>{product.description}</AnimatedText>
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left Column - Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>
            {/* Gallery */}
            <div className="grid grid-cols-3 gap-4">
              {product.gallery.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-square overflow-hidden rounded-lg"
                >
                  <Image
                    src={image}
                    alt={`${product.title} - ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="space-y-8">
            {/* Full Description */}
            <div>
              <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                <AnimatedText>
                  {t18n("products.about", language) || "About This Product"}
                </AnimatedText>
              </h2>
              <p className="text-body-color text-base leading-relaxed">
                <AnimatedText>{product.fullDescription}</AnimatedText>
              </p>
            </div>

            {/* Features */}
            <div>
              <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                <AnimatedText>
                  {t18n("products.keyFeatures", language) || "Key Features"}
                </AnimatedText>
              </h2>
              <div className="flex flex-wrap gap-2">
                {product.features.map((feature, index) => (
                  <span
                    key={index}
                    className="bg-gray-light dark:bg-gray-dark rounded-xs px-4 py-2 text-sm font-medium text-black dark:text-white"
                  >
                    <AnimatedText>
                      {t18n(`products.features.${feature}`, language)}
                    </AnimatedText>
                  </span>
                ))}
              </div>
            </div>

            {/* Specifications */}
            <div>
              <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                <AnimatedText>
                  {t18n("products.specifications", language) ||
                    "Specifications"}
                </AnimatedText>
              </h2>
              <div className="border-body-color/10 rounded-lg border dark:border-white/10">
                {product.specifications.map((spec, index) => (
                  <div
                    key={index}
                    className={`flex justify-between px-4 py-3 ${
                      index !== product.specifications.length - 1
                        ? "border-body-color/10 border-b dark:border-white/10"
                        : ""
                    }`}
                  >
                    <span className="text-body-color font-medium">
                      <AnimatedText>{spec.label}</AnimatedText>
                    </span>
                    <span className="text-black dark:text-white font-semibold">
                      <AnimatedText>{spec.value}</AnimatedText>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16">
          <h2 className="mb-8 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
            <AnimatedText>
              {t18n("products.benefits", language) || "Benefits"}
            </AnimatedText>
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {product.benefits.map((benefit, index) => (
              <div
                key={index}
                className="shadow-one hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark rounded-lg bg-white p-6 duration-300"
              >
                <div className="bg-primary/10 text-primary mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-body-color text-base">
                  <AnimatedText>{benefit}</AnimatedText>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="bg-primary hover:bg-primary/90 inline-block rounded-lg px-8 py-4 text-base font-medium text-white transition duration-300"
          >
            <AnimatedText>
              {t18n("products.contactUs", language) ||
                "Contact Us for More Information"}
            </AnimatedText>
          </Link>
        </div>
      </div>
    </section>
  );
}
