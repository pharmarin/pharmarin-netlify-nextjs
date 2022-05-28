import taxonomiesRepo from "lib/taxonomies";

export type TagType = {
  readonly slug: string;
  readonly name: string;
};

const tagsRepo = taxonomiesRepo<TagType>("tags");

export default {
  getAllTags: tagsRepo.getList,
  getTagFromSlug: tagsRepo.getOne,
  getTagsFromSlugs: tagsRepo.getAll,
};
