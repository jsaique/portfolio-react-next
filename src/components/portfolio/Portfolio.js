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
        <p className="text-md py-2 leading-8 text-gray-800 md:text-xl dark:text-gray-100">
          vero blanditiis eum, distinctio qui voluptates fugiat officiis
          explicabo minus placeat facilis!
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
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
          src={web3}
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
