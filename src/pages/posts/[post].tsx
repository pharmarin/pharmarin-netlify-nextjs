import PostLayout from "components/PostLayout";
import { parseISO } from "date-fns";
import postsRepo from "lib/postsRepo";
import { marked } from "marked";
import { GetStaticPaths, InferGetStaticPropsType } from "next";
import React from "react";

const Post: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ post }) => {
  return (
    <PostLayout
      categories={post.categories}
      content={post.content}
      date={parseISO(post.date)}
      featuredImage={post.featuredImage}
      slug={post.slug}
      tags={post.tags}
      title={post.title}
    />
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: postsRepo
      .getPosts()
      .map((post) => ({ params: { post: post.slug } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const slug = params.post as string;
  const post = postsRepo.getPost(slug);

  //TODO : -> pour une flèche

  return {
    props: {
      post: {
        ...post,
        content: marked.parse(post.content),
      },
    },
  };
};

export default Post;
