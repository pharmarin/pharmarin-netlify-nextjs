import taxonomiesRepo from "lib/taxonomies";

export type TagType = {
  readonly slug: string;
  readonly name: string;
};

const tagsRepo = taxonomiesRepo<TagType>("tags");

const tagsRepoExport = {
  getAllTags: tagsRepo.getList,
  getTagFromSlug: tagsRepo.getOne,
  getTagsFromSlugs: tagsRepo.getAll,
};

export default tagsRepoExport;
