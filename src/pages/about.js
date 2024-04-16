import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import { useMotionValue, useSpring, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value)
        ref.current.textContent = latest.toFixed(0);
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>About | Fatin Nooraina</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light/75">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid px-32 xl:p-0 xl:w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-5 flex flex-col items-start justify-start xl:col-span-8 md:order-1">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                About Me
              </h2>
              <p className="font-medium ">
                Hi, I am Fatin Nooraina, a fullstack web developer with a
                passion for creating beautiful, functional, and user-centered
                digital experiences. With almost 2 years of experience in the
                field. I am always looking for new and innovative ways to bring
                my creative ideas to life.
              </p>
              <p className=" my-4 font-medium">
                After graduated as an mechatronic engineer, I have decided to
                take the leap to pursue a career in software engineering. I have
                enrolled in a full-time immersive software development programs
                at Udemy, then I am up-skilling myself in new technologies
                through Youtube tutorials.
              </p>
              <p className="font-medium">
                Having just graduated from this rigorous program, I can say that
                applying to a coding bootcamp has been the best decision I have
                ever made in my life. I love to learn new technologies and flex
                my creativity to create amazing things.
              </p>
            </div>
            <div className="col-span-3 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-2">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  {" "}
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-xl font-bold capitalize text-dark/75 dark:text-light/75 xl:text-center md:order-3 sm:text-base xs:text-sm">
                  projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={1} />+
                </span>
                <h2 className="text-xl font-bold capitalize text-dark/75 dark:text-light/75 xl:text-center md:order-3 sm:text-base xs:text-sm">
                  {" "}
                  years of experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
