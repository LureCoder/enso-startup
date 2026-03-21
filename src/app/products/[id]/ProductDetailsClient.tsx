"use client";

import Image from "next/image";
import Link from "next/link";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";
import { t18n } from "@/i18n";
import { useLanguage } from "@/hooks/useLanguage";
import AnimatedText from "@/components/Common/AnimatedText";

// Add heartbeat animation styles
const styles = `
  @keyframes heartbeat {
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1);
    }
    75% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.type = 'text/css';
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}

interface GalleryItem {
  image: string;
  url: string;
}

interface Product {
  id: number;
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  category: string;
  image: string;
  gallery: GalleryItem[];
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
          <div>
            <ImageGallery
              items={product.gallery.map((galleryItem) => ({
                original: galleryItem.image,
                thumbnail: galleryItem.image
              }))}
              showThumbnails={true}
              showFullscreenButton={true}
              showPlayButton={false}
              autoPlay={false}
              renderCustomControls={() => {
                if (product.gallery.length > 0 && product.gallery[0].url) {
                  return (
                    <button
                      className="image-gallery-custom-link-button"
                      onClick={() => window.open(product.gallery[0].url, '_blank')}
                      style={{
                        position: 'absolute',
                        right: '60px',
                        bottom: '16px',
                        zIndex: 10,
                        background: 'rgba(0, 0, 0, 0.5)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '50%',
                        width: '32px',
                        height: '32px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        animation: 'heartbeat 2s ease-in-out infinite'
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                      </svg>
                    </button>
                  );
                }
                return null;
              }}
            />
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
