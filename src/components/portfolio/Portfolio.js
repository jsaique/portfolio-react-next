import React from "react";
import Image from "next/image";
import { web1 } from "@/assets/icons";
import { web2 } from "@/assets/icons";
import { web3 } from "@/assets/icons";
import { web4 } from "@/assets/icons";
import { web5 } from "@/assets/icons";
import { web6 } from "@/assets/icons";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div>
        <h3 className="text-3xl py-1 dark:text-gray-400">Portfolio</h3>
        <p className="text-md py-2 leading-8 text-gray-800 md:text-xl dark:text-gray-100">
          Since im begining a new journey as a Coder, Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Cum saepe architecto
          <span className="text-teal-500"> laboriosam</span> laboriosam dolore
          nemo dolorum <span className="text-teal-500"> atque</span> atque magni
          sit
        </p>
        <p className="text-md py-2 leading-8 text-gray-800 md:text-xl dark:text-gray-100">
          vero blanditiis eum, distinctio qui voluptates fugiat officiis
          explicabo minus placeat facilis!
        </p>
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div className="basis-1/3 flex-1">
          <Image
            src={web1}
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            sizes="100vw"
            alt="web1"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            src={web2}
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            sizes="100vw"
            alt="web2"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            src={web3}
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            sizes="100vw"
            alt="web3"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            src={web4}
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            sizes="100vw"
            alt="web4"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            src={web5}
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            sizes="100vw"
            alt="web5"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            src={web6}
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            sizes="100vw"
            alt="web6"
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
