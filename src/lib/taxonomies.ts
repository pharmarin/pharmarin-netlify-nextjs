import requireDir from "require-dir";
import postsRepo from "./postsRepo";

type Taxonomy = { name: string; slug: string };

export const includesTaxonomy = <T extends Taxonomy>(
  tagList: T[],
  tag: string
) => {
  return tagList.flatMap((tag) => tag.slug).includes(tag);
};

const taxonomiesRepo = <T extends Taxonomy>(taxonomy: string) => {
  const getList = (): T[] => {
    const tags = requireDir(`${global.__basedir}/../../../content/${taxonomy}`); // CWD = .next lors de l'exécution...
    return Object.values(tags);
  };

  const getAll = (slugs: string[] = []): T[] => {
    return getList().filter((tag) => slugs.includes(tag.slug));
  };

  const getOne = (slug: string): T => {
    return getList().find((tag) => tag.slug === slug);
  };

  const countPosts = (slug: string): number => {
    return postsRepo
      .getPosts()
      .filter((post) => includesTaxonomy(post.tags, slug)).length;
  };

  return {
    getList,
    getAll,
    getOne,
    countPosts,
    includesTaxonomy,
  };
};

export default taxonomiesRepo;
