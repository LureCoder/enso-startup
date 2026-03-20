import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import { t18n } from "@/i18n";
import AnimatedText from "@/components/Common/AnimatedText";

const SingleBlog = ({ blog, language }: { blog: Blog; language: string }) => {
  const { id, image, author, tags, publishDate } = blog;
  
  // Calculate the index for the translation array
  const postIndex = id - 1;
  
  // Get the translated title and paragraph
  const title = t18n(`blog.posts.${postIndex}.title`, language);
  const paragraph = t18n(`blog.posts.${postIndex}.paragraph`, language);
  
  // Get the translated tag
  const translatedTag = tags.length > 0 ? t18n(`blog.tags.${tags[0]}`, language) : '';
  
  // Get the translated designation
  const translatedDesignation = author.designation ? t18n(`blog.designations.${author.designation}`, language) : '';
  
  return (
    <>
      <div className="group shadow-one hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark relative overflow-hidden rounded-xs bg-white duration-300">
        <Link
          href="/blog-details"
          className="relative block aspect-37/22 w-full"
        >
          <span className="bg-primary absolute top-6 right-6 z-20 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white capitalize">
            <AnimatedText>{translatedTag}</AnimatedText>
          </span>
          <Image src={image} alt="image" fill />
        </Link>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3>
            <Link
              href="/blog-details"
              className="hover:text-primary dark:hover:text-primary mb-4 block text-xl font-bold text-black sm:text-2xl dark:text-white"
            >
              <AnimatedText>{title}</AnimatedText>
            </Link>
          </h3>
          <p className="border-body-color/10 text-body-color mb-6 border-b pb-6 text-base font-medium dark:border-white/10">
            <AnimatedText>{paragraph}</AnimatedText>
          </p>
          <div className="flex items-center">
            <div className="border-body-color/10 mr-5 flex items-center border-r pr-5 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5 dark:border-white/10">
              <div className="mr-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image src={author.image} alt="author" fill />
                </div>
              </div>
              <div className="w-full">
                <h4 className="text-dark mb-1 text-sm font-medium dark:text-white">
                  <AnimatedText>
                    {t18n('blog.by', language)}
                  </AnimatedText>
                  {" "}
                  <AnimatedText>
                    {author.name}
                  </AnimatedText>
                </h4>
                <p className="text-body-color text-xs">
                  <AnimatedText>{translatedDesignation}</AnimatedText>
                </p>
              </div>
            </div>
            <div className="inline-block">
              <h4 className="text-dark mb-1 text-sm font-medium dark:text-white">
                <AnimatedText>{t18n('blog.date', language)}</AnimatedText>
              </h4>
              <p className="text-body-color text-xs">{publishDate}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
