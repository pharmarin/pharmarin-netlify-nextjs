import ArchiveGrid from "components/ArchiveGrid";
import React from "react";
import { PostType } from "../lib/postsRepo";

const PostList = ({ posts }: { posts: PostType[] }) => {
  return (
    <ArchiveGrid
      posts={posts.map((post) => ({
        id: post.slug,
        categories: post.categories,
        featuredImage: post.featuredImage,
        link: post.fullPath,
        tags: post.tags,
        title: post.title,
      }))}
    />
  );
};

export default PostList;
