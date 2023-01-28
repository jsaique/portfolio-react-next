import React from "react";
import { web1, web2, web3, web4, web5, web6 } from "@/assets/icons";
import PortfolioCard from "./PortfolioCard";

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
        <p className="text-md py-2 mb-6 leading-8 text-gray-800 md:text-xl dark:text-gray-100">
          vero blanditiis eum, distinctio qui voluptates fugiat officiis
          explicabo minus placeat facilis!
        </p>
      </div>
      {/* <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap bg-red-500">
        <div className="basis-1/3 flex-1">
          <PortfolioCard
            title="Comming Soon"
            des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicado quibusdam voluptate sapiente voluptatibus harum quidem!"
            src={web1}
          />
        </div>
        <div className="basis-1/3 flex-1">
          <PortfolioCard
            title="Comming Soon"
            des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicado quibusdam voluptate sapiente voluptatibus harum quidem!"
            src={web2}
          />
        </div>
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl: grid- cols-3 gap-10">
        <PortfolioCard
          title="Coming Soon"
          des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicado quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={web1}
        />
        <PortfolioCard
          title="Coming Soon"
          des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicado quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={web2}
        />
        <PortfolioCard
          title="Coming Soon"
          des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicado quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={web5}
        />
        <PortfolioCard
          title="Coming Soon"
          des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicado quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={web4}
        />
      </div>
    </section>
  );
};

export default Portfolio;
