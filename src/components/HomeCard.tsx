import Link from "next/link";
import React from "react";

const HomeCard: React.FC<{ link: string; title: string }> = ({
  link,
  title,
}) => {
  return (
    <Link href={link}>
      <a className="flex justify-center items-center rounded-lg shadow-lg hover:bg-gray-50 w-48 h-48">
        <span className="text-gray-700 text-center">{title}</span>
      </a>
    </Link>
  );
};

export default HomeCard;
