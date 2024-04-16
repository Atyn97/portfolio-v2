import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark 
          dark:border-light dark:text-light font-medium text-lg
            sm:text-base"
    >
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6 md:py-4">
        <span className="md:text-base sm:text-sm">
          {new Date().getFullYear()} &copy; All Rights Reserved.
        </span>
        <div className="flex items-center lg:py-2 md:text-base sm:text-sm">
          Build with{" "}
          <span className="text-primary dark:text-primaryDark text-2xl px-1 md:text-base sm:text-sm">
            &hearts;
          </span>{" "}
          by&nbsp;
          <Link
            href="/"
            className="underline underline-offset-2 md:text-base sm:text-sm"
          >
            FatinNooraina
          </Link>
        </div>
        <Link
          href="mailto:fatinnooraina@gmail.com"
          className="underline underline-offset-2 md:text-base sm:text-sm"
        >
          Say Hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
