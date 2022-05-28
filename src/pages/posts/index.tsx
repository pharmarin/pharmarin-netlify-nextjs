import { GetStaticProps } from "next";
import Layout from "../../components/Layout";
import BasicMeta from "../../components/meta/BasicMeta";
import PostList from "../../components/PostList";
import config from "../../lib/config";
import { listPostContent, PostType } from "../../lib/postsRepo";
import { TagType } from "../../lib/tagsRepo";

type Props = {
  posts: PostType[];
  tags: TagType[];
};
export default function Index({ posts }: Props) {
  const url = "/posts";
  const title = "All posts";
  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      <PostList posts={posts} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = listPostContent(1, config.posts_per_page);

  return {
    props: {
      posts,
    },
  };
};
