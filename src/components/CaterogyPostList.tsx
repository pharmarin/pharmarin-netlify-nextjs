import PostList from "components/PostList";
import Title from "components/Title";
import { CategoryType } from "lib/categoriesRepo";
import React from "react";
import { PostType } from "../lib/postsRepo";

const CategoryPostList: React.FC<{ posts: PostType[]; category: CategoryType }> = ({
  posts,
  category,
}) => {
  return (
    <div>
      <Title level={2}>
        <span className="text-black">Catégorie</span> {category.name}
      </Title>
      <PostList posts={posts} />
    </div>
  );
};

export default CategoryPostList;
