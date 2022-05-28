import { TagType } from "lib/tagsRepo";
import { kebabCase } from "lodash";
import Link from "next/link";
import React from "react";

const TagList: React.FC<{ className?: string; tags?: TagType[] }> = ({
  className,
  tags,
}) => {
  if (!tags) {
    return null;
  }

  return (
    <div className={"flex flex-wrap " + className}>
      {tags.map((tag) => (
        <Link key={tag.slug} href={"/tags/" + kebabCase(tag.slug)}>
          <a className="bg-gray-200 rounded-full mb-1 px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #{tag.name}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default TagList;
