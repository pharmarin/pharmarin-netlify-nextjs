import Card from "components/Card";
import { CategoryType } from "lib/categoriesRepo";
import { TagType } from "lib/tagsRepo";
import React from "react";

const ArchiveGrid: React.FC<{
  horizontal?: boolean;
  posts: {
    id: string;
    categories?: CategoryType[];
    content?: string;
    link: string;
    subtitle?: string;
    tags?: TagType[];
    featuredImage?: string;
    title: string;
  }[];
}> = ({ horizontal, posts }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {posts &&
        posts.map((post) => (
          <article key={post.id} id={"tease-" + post.id}>
            <Card
              categories={post.categories}
              featuredImage={post.featuredImage}
              horizontal={horizontal}
              link={post.link}
              tags={post.tags}
              subtitle={post.subtitle}
              title={post.title}
            />
          </article>
        ))}
    </div>
  );
};

export default ArchiveGrid;
