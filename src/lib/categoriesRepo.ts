import taxonomiesRepo from "lib/taxonomies";

export type CategoryType = {
  readonly slug: string;
  readonly name: string;
};

const tagsRepo = taxonomiesRepo<CategoryType>("categories");

export default {
  getAllCategories: tagsRepo.getList,
  getCategoriesFromSlugs: tagsRepo.getAll,
};
