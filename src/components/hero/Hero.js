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
      "an IT Guy",
      "a Designer",
    ],
    loop: true,
    typeSpeed: 40,
    deleteSpeed: 30,
    delaySpeed: 2000,
  });

  return (
    <section>
      <div className="text-center p-10">
        <h2 className="text-5xl py-2 text-teal-600 font-medium">
          John Aries Saique
        </h2>
        <h3 className="text-2xl py-2">
          Im <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle=" | "
            cursorColor="#14b8a6"
          />
        </h3>
        <p className="text-md py-5 leading-8 text-gray-800">
          I'm a self-taught software developer who is ready for to learn and
          accept more challenges. I love to create awesome projects.
        </p>
      </div>
      <div className="text-2xl text-gray-600 flex justify-center gap-16 py-3">
        <a href="#">
          <AiFillLinkedin />
        </a>
        <a href="#">
          <AiFillInstagram />
        </a>
        <a href="#">
          <AiFillGithub />
        </a>
      </div>
      <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
        <Image src={avatar2} layout="fill" objectFit="cover" />
      </div>
    </section>
  );
};

export default Hero;
