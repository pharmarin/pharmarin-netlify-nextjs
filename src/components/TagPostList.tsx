import PostList from "components/PostList";
import Title from "components/Title";
import { TagType } from "lib/tagsRepo";
import React from "react";
import { PostType } from "../lib/postsRepo";

const TagPostList: React.FC<{ posts: PostType[]; tag: TagType }> = ({
  posts,
  tag,
}) => {
  return (
    <div>
      <Title level={2}>
        <span className="text-black">Tag</span> {tag.name}
      </Title>
      <PostList posts={posts} />
    </div>
  );
};

export default TagPostList;
