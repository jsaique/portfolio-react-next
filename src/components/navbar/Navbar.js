import React from "react";
import { BsFillMoonStarsFill, BsSun } from "react-icons/bs";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <header className="">
      <div className="py-10 mb-12 flex justify-between">
        <h1 className="text-xl font-burtons uppercase dark:text-gray-100">
          Jass
        </h1>
        <ul className="flex items-center">
          <li>
            <BsFillMoonStarsFill
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-2xl dark:fill-gray-100"
            />
          </li>
          <li>
            <a
              className="bg-gradient-to-r from-cyan-500 to-teal-500 dark:text-gray-100 px-4 py-2 rounded-md ml-8"
              href="#"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
