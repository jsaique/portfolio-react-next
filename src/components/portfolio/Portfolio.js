import React from "react";
import { web1, web2, web3, web4, web5, web6 } from "@/assets/icons";
import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div>
        <h3 className="text-3xl py-1 dark:text-gray-400">Portfolio</h3>
        <p className="text-md py-2 leading-8 text-gray-800 md:text-xl dark:text-gray-100">
          This is where I showcase the work that I have done as a self-taught
          developer. These projects are a testament to my skills, creativity,
          and determination to continuously learn and improve.
        </p>
        <p className="text-md py-2 leading-8 text-gray-800 md:text-xl dark:text-gray-100">
          Take a look at my projects and feel free to reach out to me with any
          questions.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <PortfolioCard
          title="Space Tourism - Comming Soon"
          des="This is a Frontend Mentor project."
          src={web1}
        />
        <PortfolioCard
          title="Coming Soon"
          des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicado quibusdam voluptate quidem!"
          src={web2}
        />
      </div>
    </section>
  );
};

export default Portfolio;
