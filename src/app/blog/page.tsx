"use client";

import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { useEffect, useState } from "react";
import { t18n } from "@/i18n";
import { useLanguage } from "@/hooks/useLanguage";

const Blog = () => {
  // Use custom hook for language management
  const language = useLanguage();

  return (
    <>
      <Breadcrumb
        pageName={t18n('blog.breadcrumb.pageName', language)}
        description={t18n('blog.breadcrumb.description', language)}
        language={language}
      />

      <section className="pb-[120px] pt-[120px] dark:bg-gray-dark">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} language={language} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;