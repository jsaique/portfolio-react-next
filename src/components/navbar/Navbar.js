import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { RiSunFill } from "react-icons/ri";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <header id="home">
      <div className="py-10 mb-12 flex justify-between sticky">
        <h1 className="text-xl font-burtons uppercase dark:text-gray-100">
          Jass
        </h1>
        <ul className="flex items-center">
          <Tippy
            animation={"scale"}
            content={darkMode ? "Dark mode" : "Light mode"}
          >
            <li
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-2xl "
            >
              {darkMode ? (
                <BsFillMoonStarsFill />
              ) : (
                <RiSunFill className="dark:fill-gray-100" />
              )}
            </li>
          </Tippy>
          <li>
            <Tippy animation={"scale"} content={"Download CV"}>
              <a
                className="bg-gradient-to-r from-cyan-500 to-teal-500 dark:text-gray-100 px-4 py-2 rounded-md ml-8"
                href="cv.pdf"
                download="cv.pdf"
              >
                Resume
              </a>
            </Tippy>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
