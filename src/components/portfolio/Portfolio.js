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
        {/* <PortfolioCard
          title="Space Tourism"
          des="This is one of the first Frontend Mentor project that I completed, I learned a lot of new skills from this project using (React and SCSS)."
          src={web1}
          code="https://github.com/jsaique/Space-Tourism"
          demo={"https://jass-space-tourism.netlify.app"}
        /> */}
        <PortfolioCard
          title="Thoughty App"
          des="A place where you can share your thoughts and others can put comments on it, If you have a typo on your post just go to 'My post' and edit it! (Built with Nextjs(React) and Firebase)."
          src={web2}
          code={"https://github.com/jsaique/thoughty-app"}
          demo={"https://thoughty-app.vercel.app"}
        />
        <PortfolioCard
          title="QR Code Generator"
          des="A web app where you can create your own QR code with a URL or a regular text be creative with it.(Built with React)"
          src={web3}
          code={"https://github.com/jsaique/qr-code-generator"}
          demo={"https://jassqrcodegenerator.netlify.app"}
        />
        {/* <PortfolioCard
          title="Comming soon"
          des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut suscipit ante, a fermentum nibh. Donec porttitor a ipsum et condimentum. Aliquam at eros ac turpis hendrerit aliquet quis et tellus. Cras sit amet rhoncus mauris."
          src={web4}
          code={"#"}
          demo={"#"}
        /> */}
      </div>
    </section>
  );
};

export default Portfolio;
