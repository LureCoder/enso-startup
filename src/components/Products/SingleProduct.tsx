import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import { t18n } from "@/i18n";
import AnimatedText from "@/components/Common/AnimatedText";

const SingleProduct = ({ product, language }: { product: Product; language: string }) => {
  const { id, slug, image, category, features } = product;

  const postIndex = id - 1;

  const title = t18n(`products.items.${postIndex}.title`, language);
  const description = t18n(`products.items.${postIndex}.description`, language);

  const translatedCategory = t18n(`products.categories.${category}`, language);

  return (
    <>
      <div className="group shadow-one hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark relative overflow-hidden rounded-xs bg-white duration-300">
        <Link
          href={`/products/${slug}`}
          className="relative block aspect-37/22 w-full"
        >
          <span className="bg-primary absolute top-6 right-6 z-20 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white capitalize">
            <AnimatedText>{translatedCategory}</AnimatedText>
          </span>
          <Image src={image} alt="product" fill />
        </Link>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3>
            <Link
              href={`/products/${slug}`}
              className="hover:text-primary dark:hover:text-primary mb-4 block text-xl font-bold text-black sm:text-2xl dark:text-white"
            >
              <AnimatedText>{title}</AnimatedText>
            </Link>
          </h3>
          <p className="border-body-color/10 text-body-color mb-6 border-b pb-6 text-base font-medium dark:border-white/10">
            <AnimatedText>{description}</AnimatedText>
          </p>
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {features.map((feature, index) => (
                <span
                  key={index}
                  className="bg-gray-light dark:bg-gray-dark rounded-xs px-3 py-1 text-xs font-medium text-black dark:text-white"
                >
                  <AnimatedText>
                    {t18n(`products.features.${feature}`, language)}
                  </AnimatedText>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
