"use client";

import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";
import { t18n } from "@/i18n";
import { useLanguage } from "@/hooks/useLanguage";

const Blog = () => {
  // Use custom hook for language management
  const language = useLanguage();

  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title={t18n('blog.title', language)}
          paragraph={t18n('blog.description', language)}
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogData.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} language={language} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
