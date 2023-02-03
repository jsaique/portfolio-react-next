import React from "react";
import Image from "next/image";
import { BsGithub, BsGlobe } from "react-icons/bs";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

const PortfolioCard = ({ title, des, src }) => {
  return (
    <div>
      <div className="w-full p-4 my-10 xl:px-12 h-auto xl:py-10 rounded-lg shadow-lg flex flex-col group">
        <div className="w-full h-[80%] overflow-hidden rounded-lg">
          <Image
            className="w-full object-cover group-hover:scale-110 duration-300 cursor-pointer"
            src={src}
            alt="project image"
            placeholder="blur"
          />
        </div>
        <div className="-w-full mt-5 flex flex-col gap-6">
          <div>
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-medium dark:text-gray-200">
                {title}
              </h3>
              <div className="flex gap-2">
                <Tippy animation={"scale"} content={"Code"}>
                  <a href="#">
                    <BsGithub className="text-2xl text-gray-600 hover:text-teal-600 duration-300 cursor-pointer dark:text-gray-100 dark:hover:text-teal-400" />
                  </a>
                </Tippy>
                <Tippy animation={"scale"} content={"Demo"}>
                  <a href="#">
                    <BsGlobe className="text-2xl text-gray-600 hover:text-teal-600 duration-300 cursor-pointer dark:text-gray-100 dark:hover:text-teal-400" />
                  </a>
                </Tippy>
              </div>
            </div>
            <p className="mt-3 text-md tracking-wide hover:text-gray-800 dark:text-gray-100 dark:hover:text-gray-300">
              {des}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
