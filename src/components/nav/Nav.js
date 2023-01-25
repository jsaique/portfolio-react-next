import React from "react";
import { AiOutlineHome, AiOutlineMessage } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { GrProjects, GrContact } from "react-icons/gr";
import { GoProject } from "react-icons/go";

const Nav = () => {
  return (
    <nav className="backdrop-blur-lg sticky bottom-10 z-50 h-12 w-48 rounded-3xl mx-auto flex justify-between items-center gap-3">
      <ul className="flex items-center gap-5 mx-auto">
        <li>
          <a href="#home">
            <AiOutlineHome className="text-2xl dark:fill-teal-500" />
          </a>
        </li>
        <li>
          <a href="#skills">
            <BiBook className="text-2xl dark:fill-teal-500" />
          </a>
        </li>
        <li>
          <a href="#portfolio">
            <GoProject className="text-2xl dark:fill-teal-500" />
          </a>
        </li>
        <li>
          <a href="#contact">
            <AiOutlineMessage className="text-2xl dark:fill-teal-500" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
