import React from "react";
import { Link } from "react-scroll";
import { navLinksData } from "@/constants/Constants";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

const Nav = () => {
  return (
    <nav className="backdrop-blur-lg sticky bottom-10 z-50 h-12 w-48 rounded-3xl mx-auto flex justify-between items-center gap-3">
      <ul className="flex items-center gap-5 mx-auto">
        {navLinksData.map(({ _id, icon, link, title }) => (
          <Tippy animation={"scale"} content={title} key={_id}>
            <li
              key={_id}
              className="cursor-pointer hover:text-gray-700 duration-300"
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {icon}
              </Link>
            </li>
          </Tippy>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
