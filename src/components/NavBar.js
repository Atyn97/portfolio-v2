import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { MoonIcon, SunIcon } from "./Icons";
import { useThemeSwitch } from "./hooks/useThemeSwitcher";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`h-[1px] inline-block bg-dark 
        absolute left-0 -bottom-0.5 dark:bg-light
        group-hover:w-full trasition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}

      <span
        className={`h-[1px] inline-block bg-light dark:bg-dark  
        absolute left-0 -bottom-0.5 
        group-hover:w-full trasition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitch();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="w-full px-32 lg:px-16 md:px-8 py-8 font-medium flex items-center justify-between
    dark:text-light relative"
    >
      <button
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm -translate-y-0.5 transition-all duration-300 ease-out ${
            isOpen ? "rotate-45 translate-y-2.5" : ""
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm translate-y-0.5 transition-all duration-300 ease-out ${
            isOpen ? "-rotate-45 -translate-y-1.75" : ""
          }`}
        ></span>
      </button>
      <div className="absolute left-[50%] translate-x-[-50%]">
        <Logo />
      </div>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="ml-4" />
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] hidden lg:flex flex-col justify-between z-30 items-center fixed 
          top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/75 dark:bg-light/75 rounded-lg
          backdrop-blur-md py-32 "
        >
          <nav className="flex flex-col items-center justify-center">
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              className=""
              toggle={handleClick}
            />
          </nav>
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`rounded-full p-1 mt-5 mb-0 ${
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            }`}
            aria-label="theme-switcher"
          >
            {mode === "light" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-light"} />
            )}
          </button>
        </motion.div>
      ) : (
        ""
      )}

      <button
        onClick={() => setMode(mode === "light" ? "dark" : "light")}
        className={`rounded-full p-1 flex lg:hidden ${
          mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
        }`}
        aria-label="theme-switcher"
      >
        {mode === "light" ? (
          <SunIcon className={"fill-dark"} />
        ) : (
          <MoonIcon className={"fill-light"} />
        )}
      </button>
    </header>
  );
};

export default NavBar;
