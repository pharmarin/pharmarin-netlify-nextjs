import CategoriesList from "components/CategoriesList";
import TagList from "components/TagList";
import { CategoryType } from "lib/categoriesRepo";
import { TagType } from "lib/tagsRepo";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

const Card: React.FC<{
  categories?: CategoryType[];
  content?: string;
  horizontal?: boolean;
  link: string;
  subtitle?: string;
  tags?: TagType[];
  featuredImage?: string;
  title: string;
}> = ({
  categories,
  content,
  horizontal,
  link,
  subtitle,
  tags,
  featuredImage,
  title,
}) => {
    return (
      <div className="rounded overflow-hidden shadow-lg">
        <Link href={link}>
          <a className={twMerge("flex", horizontal ? "flex-row" : "flex-col")}>
            {featuredImage && (
              <Image
                alt={title}
                className={twMerge(
                  "h-max-40",
                  horizontal
                    ? "aspect-square h-20 w-20 rounded !p-4"
                    : "w-full object-cover rounded-t"
                )}
                src={featuredImage}
              />
            )}

            <div className="px-6 py-4">
              <div className="font-bold text-xl">{title}</div>
              {subtitle && <div className="italic text-lg mb-2">{subtitle}</div>}
              {content && <p className="text-gray-700 text-base">{content}</p>}
            </div>
          </a>
        </Link>

        {(categories || tags) && (
          <div className="mt-4">
            <CategoriesList className="px-6" categories={categories} />
            <TagList className="px-6 mb-4" tags={tags} />
          </div>
        )}
      </div>
    );
  };

export default Card;
