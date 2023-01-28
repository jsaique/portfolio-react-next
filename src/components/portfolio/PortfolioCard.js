import React from "react";
import Image from "next/image";
import { BsGithub, BsGlobe } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const PortfolioCard = ({ title, des, src }) => {
  return (
    <div>
      {/* <div>
        <Image
          src={src}
          className="rounded-lg object-cover"
          width={"100%"}
          height={"100%"}
          sizes="100vw"
          alt="web1"
        />
      </div>
      <div>
        <div className="flex justify-between items-center">
          <h3>{title}</h3>
          <div className="flex gap-2">
            <a href="">
              <BsGithub />
            </a>
            <a href="">
              <BsGlobe />
            </a>
          </div>
        </div>
        <p>{des}</p>
      </div> */}
      {/* <div className="basis-1/3 flex-1">
        <Image
          src={src}
          className="rounded-lg object-cover"
          width={"100%"}
          height={"100%"}
          sizes="100vw"
          alt="web2"
        />
      </div>
      <div className="basis-1/3 flex-1">
        <Image
          src={src}
          className="rounded-lg object-cover"
          width={"100%"}
          height={"100%"}
          sizes="100vw"
          alt="web3"
        />
      </div>
      <div className="basis-1/3 flex-1">
        <Image
          src={src}
          className="rounded-lg object-cover"
          width={"100%"}
          height={"100%"}
          sizes="100vw"
          alt="web4"
        />
      </div>
      <div className="basis-1/3 flex-1">
        <Image
          src={src}
          className="rounded-lg object-cover"
          width={"100%"}
          height={"100%"}
          sizes="100vw"
          alt="web5"
        />
      </div>
      <div className="basis-1/3 flex-1">
        <Image
          src={src}
          className="rounded-lg object-cover"
          width={"100%"}
          height={"100%"}
          sizes="100vw"
          alt="web6"
        />
      </div> */}
      <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-lg flex flex-col group">
        <div className="w-full h-[80%] overflow-hidden rounded-lg">
          <Image
            className="w-full object-cover group-hover:scale-110 duration-300 cursor-pointer"
            src={src}
            alt=""
          />
        </div>
        <div className="-w-full mt-5 flex flex-col gap-6">
          <div>
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-normal dark:text-gray-200">
                {title}
              </h3>
              <div className="flex gap-2">
                <a href="#">
                  <BsGithub className="text-2xl text-gray-600 hover:text-teal-600 duration-300 cursor-pointer dark:text-gray-100 dark:hover:text-teal-400" />
                </a>
                <a href="#">
                  <BsGlobe className="text-2xl text-gray-600 hover:text-teal-600 duration-300 cursor-pointer dark:text-gray-100 dark:hover:text-teal-400" />
                </a>
              </div>
            </div>
            <p className="mt-3 tracking-wide hover:text-gray-800 dark:text-gray-100 dark:hover:text-gray-300">
              {des}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
