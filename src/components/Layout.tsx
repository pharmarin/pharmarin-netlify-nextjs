import Head from "next/head";
import React from "react";
import { twMerge } from "tailwind-merge";
import Navbar from "./Navbar";

const Layout: React.FC<{ className?: string }> = ({ children, className }) => {
  return (
    <div className="root">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <nav>
        <Navbar />
      </nav>
      <main>
        <div className={twMerge("container mx-auto px-4 mb-4 " + className)}>
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
