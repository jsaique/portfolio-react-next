import React from "react";
import Image from "next/image";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { avatar2 } from "@/assets/icons";

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "a Self-Taught.",
      "a Coder.",
      "a Software Developer.",
      "a Problem Solver",
      "a Designer",
    ],
    loop: true,
    typeSpeed: 40,
    deleteSpeed: 30,
    delaySpeed: 2000,
  });

  return (
    <section id="home">
      <div className="text-center p-10">
        <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
          John Aries Saique
        </h2>
        <h3 className="text-2xl py-2 md:text-3xl dark:text-gray-400">
          Im <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle=" | "
            cursorColor="#14b8a6"
          />
        </h3>
        <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-100">
          I'm a self-taught software developer who is ready for to learn and
          accept more challenges. I love to create awesome projects.
        </p>
      </div>
      <div className="text-4xl text-gray-600 flex justify-center gap-16 py-3 dark:text-gray-400">
        <a href="#">
          <AiFillLinkedin className="hover:text-teal-600 duration-300" />
        </a>
        <a href="#">
          <AiFillInstagram className="hover:text-teal-600 duration-300" />
        </a>
        <a href="#">
          <AiFillGithub className="hover:text-teal-600 duration-300" />
        </a>
      </div>
      <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden object-cover md:h-96 md:w-96">
        <Image
          src={avatar2}
          placeholder="blur"
          fill
          sizes="width: 20rem, height: 20rem"
          className="object-cover"
          alt="Johns Avatar"
        />
      </div>
    </section>
  );
};

export default Hero;
