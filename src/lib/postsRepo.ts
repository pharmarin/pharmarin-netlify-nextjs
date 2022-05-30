import fs from "fs";
import matter from "gray-matter";
import yaml from "js-yaml";
import categoriesRepo, { CategoryType } from "lib/categoriesRepo";
import { includesTaxonomy } from "lib/taxonomies";
import path from "path";
import tagsRepo, { TagType } from "./tagsRepo";

const postsDirectory = path.join(process.cwd(), "content/posts");

type PostContentType = {
  categories?: CategoryType[];
  content: string;
  date: string;
  featuredImage?: string;
  fullPath: string;
  slug: string;
  tags?: TagType[];
  title: string;
};

export type PostType = Readonly<PostContentType>;

let postCache: PostType[];

const readFile = (fileName: string) => {
  const filePath = path.join(postsDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, "utf8");

  // Use gray-matter to parse the post metadata section
  const fileParsed = matter(fileContent, {
    engines: {
      yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
    },
  });

  return {
    content: fileParsed.content,
    ...fileParsed.data,
    categories: categoriesRepo.getCategoriesFromSlugs(
      fileParsed.data.categories
    ),
    tags: tagsRepo.getTagsFromSlugs(fileParsed.data.tags),
  } as PostContentType;
};

const fetchPosts = () => {
  if (postCache) {
    return postCache;
  }

  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames
    .filter((it) => it.endsWith(".md"))
    .map((fileName) => {
      // Read markdown file as string
      const { content, ...meta } = readFile(fileName);
      const slug = fileName.replace(/\.md$/, "");

      return {
        content,
        ...meta,
        featuredImage: meta.featuredImage
          ? ["/images/posts/", meta.featuredImage].join("")
          : null,
        fullPath: ["/posts/", slug].join(""),
        slug,
      };
    });

  // Sort posts by date
  postCache = allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
};

const getPosts = (): PostType[] => {
  fetchPosts();

  return postCache;
};

const getPost = (slug): PostType => {
  fetchPosts();

  return postCache.filter((post) => post.slug === slug)[0];
};

export function countPosts(tag?: string): number {
  return getPosts().filter(
    (it) =>
      !tag || (it.tags && it.tags.flatMap((tag) => tag.slug).includes(tag))
  ).length;
}

export function listPostContent(
  page: number,
  limit?: number,
  tag?: string
): PostType[] {
  const posts = getPosts().filter(
    (it) => !tag || (it.tags && includesTaxonomy(it.tags, tag))
  );

  return limit ? posts.slice((page - 1) * limit, page * limit) : posts;
}

const postsRepo = {
  getPosts,
  getPost,
};

export default postsRepo;
