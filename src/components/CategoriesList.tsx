import { CategoryType } from "lib/categoriesRepo";
import { kebabCase } from "lodash";
import Link from "next/link";
import React from "react";

const CategoriesList: React.FC<{
  categories?: CategoryType[];
  className?: string;
}> = ({ categories, className }) => {
  if (!categories) {
    return null;
  }

  return (
    <div className={"flex flex-wrap " + className}>
      {categories.map((category) => (
        <Link
          key={category.slug}
          href={"/categories/" + kebabCase(category.slug)}
        >
          <a className="bg-orange-600 rounded-full mb-1 px-3 py-1 text-sm font-semibold text-orange-100 mr-2">
            {category.name}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default CategoriesList;
