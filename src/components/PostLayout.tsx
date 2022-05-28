import CategoriesList from "components/CategoriesList";
import SingleTitle from "components/SingleTitle";
import TagList from "components/TagList";
import { CategoryType } from "lib/categoriesRepo";
import { TagType } from "lib/tagsRepo";
import React from "react";
import Layout from "./Layout";
import BasicMeta from "./meta/BasicMeta";

const PostLayout: React.FC<{
  categories?: CategoryType[];
  content?: string;
  date?: Date;
  featuredImage?: string;
  slug: string;
  tags?: TagType[];
  title?: string;
}> = ({ categories, content, date, featuredImage, slug, tags, title }) => {
  return (
    <Layout>
      <BasicMeta
        url={`/posts/${slug}`}
        title={title}
        keywords={tags.map((tag) => tag.name)}
      />
      <div className="content-wrapper mb-4">
        <article className="mx-auto max-w-3xl">
          <div className="flex flex-row sm:space-x-8">
            {featuredImage && (
              <div className="flex-none hidden sm:flex max-w-[30%]">
                <img
                  alt={title}
                  className="max-h-40 w-full object-cover rounded"
                  src={featuredImage}
                />
              </div>
            )}
            <div className="w-full">
              <section className="article-content w-full space-y-8">
                <SingleTitle date={date} title={title} />
                <CategoriesList categories={categories} />
                <div
                  className="article-body w-full prose"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
                <TagList tags={tags} />
              </section>
            </div>
          </div>
        </article>
      </div>
    </Layout>
  );
};

export default PostLayout;
