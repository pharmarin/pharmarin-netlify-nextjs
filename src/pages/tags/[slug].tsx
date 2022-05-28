import Layout from "components/Layout";
import BasicMeta from "components/meta/BasicMeta";
import TagPostList from "components/TagPostList";
import config from "lib/config";
import { listPostContent } from "lib/postsRepo";
import tagsRepo from "lib/tagsRepo";
import { GetStaticPaths, InferGetStaticPropsType } from "next";
import React from "react";

const TagsSingle: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ posts, tag }) => {
  const url = `/posts/tags/${tag}`;

  return (
    <Layout>
      <BasicMeta url={url} title={tag.name} />
      <TagPostList posts={posts} tag={tag} />
    </Layout>
  );
};

export default TagsSingle;

export const getStaticProps = async ({ params }) => {
  const slug = params.slug as string;

  const posts = listPostContent(1, config.posts_per_page, slug);
  const tag = tagsRepo.getTagFromSlug(slug);

  return { props: { posts, tag } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: tagsRepo.getAllTags().map((tag) => ({ params: { slug: tag.slug } })),
    fallback: false,
  };
};
