import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import featured1 from "../../public/images/projects/speedy-eats.png";
import featured2 from "../../public/images/projects/moonflix-main.png";
import project1 from "../../public/images/projects/uniq-blog.png";
import project2 from "../../public/images/projects/simon-game.png";
import TransitionEffect from "@/components/TransitionEffect";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between rounded-3xl
      border border-solid border-dark bg-light shadow-2xl p-12 relative dark:bg-dark dark:border-light
      lg:flex-col lg:p-8 xs:rounded-2xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2.5rem] 
      bg-dark dark:bg-light rounded-br-4xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50px, 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2 dark:text-light"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-base">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center ">
          <Link
            href={github}
            target="_blank"
            className="w-10 hover:opacity-75 dark:text-light"
          >
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light dark:bg-light 
            dark:text-dark p-2 px-6 text-lg font-semibold hover:opacity-75
            sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl
      border border-solid border-dark bg-light dark:bg-dark 
      dark:border-light shadow-2xl p-6 relative xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2.5rem] 
      bg-dark dark:bg-light rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50px, 50vw"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span
          className="text-primary dark:text-primaryDark font-medium text-xl
        lg:text-lg md:text-base"
        >
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2 dark:text-light"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="rounded-lg text-dark dark:text-light text-lg font-medium hover:opacity-75 md:text-base"
          >
            Visit Project
          </Link>
          <Link
            href={github}
            target="_blank"
            className="w-8 hover:opacity-75 dark:text-light md:w-6"
          >
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Project | Fatin Nooraina</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type="Featured Project"
                title="SpeedyEats"
                summary="Food Ordering Application Project is developed utilizing MongoDB, Espress, ReactJS, NodeJS (MERN Stack), TypeScript and Tailwind CSS. The app allows users to browse food items, add to shopping cart, place orders, pay with integrated Stripe for card payments and check status of orders.
                Admin allows to manage orders. The app is designed to be user-friendly, with a clean and modern interface."
                img={featured1}
                link="https://mern-food-frontend-d5ib.onrender.com/"
                github="https://github.com/Atyn97/mern-food-frontend"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Website Project"
                title="Uniq Blog Application"
                img={project1}
                link="https://uniq-blog-app.vercel.app/"
                github="https://github.com/Atyn97/uniq-blog-app"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Game Project"
                title="Simon Game"
                img={project2}
                link="https://atyn97.github.io/Simon-game/"
                github="https://github.com/Atyn97/Simon-game?tab=readme-ov-file"
              />
            </div>
            <div className="col-span-12 sm:col-span-12">
              <FeaturedProject
                type="Featured Project"
                title="Moonflix"
                summary="The Moonflix app is a stream service application that uses ReactJS, NextJS 14, TypeScript, MongoDB, Prisma, NextAuthJS, and Tailwind CSS. It allows users to stream movies online. The app also has authentication and authorization features using Next Auth and custom hooks."
                img={featured2}
                link="https://moonflix-six.vercel.app/"
                github="https://github.com/Atyn97/moonflix"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
