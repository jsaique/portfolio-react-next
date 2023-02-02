import { AiOutlineHome, AiOutlineMessage } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { GoProject } from "react-icons/go";

export const navLinksData = [
  {
    _id: 1001,
    title: "Home",
    link: "home",
    icon: (
      <AiOutlineHome className="text-2xl dark:fill-teal-500 dark:hover:fill-gray-50" />
    ),
  },
  {
    _id: 1002,
    title: "Skills",
    link: "skills",
    icon: (
      <BiBook className="text-2xl dark:fill-teal-500 dark:hover:fill-gray-50" />
    ),
  },
  {
    _id: 1003,
    title: "Portfolio",
    link: "portfolio",
    icon: (
      <GoProject className="text-2xl dark:fill-teal-500 dark:hover:fill-gray-50" />
    ),
  },
  {
    _id: 1004,
    title: "Contact",
    link: "contact",
    icon: (
      <AiOutlineMessage className="text-2xl dark:fill-teal-500 dark:hover:fill-gray-50" />
    ),
  },
];
