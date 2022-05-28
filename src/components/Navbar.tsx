import { PlusIcon } from "@heroicons/react/solid";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="container mx-auto px-4 mb-6 py-4 space-x-2 flex justify-between items-center bg-white">
      <div className="relative transition ease-in-out transform hover:scale-110">
        <div className="absolute h-full w-full rounded-xl bg-gray-300 transform -rotate-6"></div>
        <div className="absolute h-full w-full rounded-xl shadow-md bg-gradient-to-r from-blue-500 to-green-400"></div>
        <Link href="/">
          <a
            className="relative flex flex-row items-center px-4 py-1 space-x-2 text-xl text-white"
            rel="home"
          >
            <PlusIcon className="h-5 w-5 text-white" />
            <span>Pharmacie</span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
