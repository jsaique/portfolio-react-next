import { AiOutlineHome, AiOutlineMessage } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { GoProject } from "react-icons/go";

export const navLinksData = [
  {
    _id: 1001,
    link: "home",
    icon: (
      <AiOutlineHome className="text-2xl dark:fill-teal-500 dark:hover:fill-gray-50" />
    ),
  },
  {
    _id: 1002,
    link: "skills",
    icon: (
      <BiBook className="text-2xl dark:fill-teal-500 dark:hover:fill-gray-50" />
    ),
  },
  {
    _id: 1003,
    link: "portfolio",
    icon: (
      <GoProject className="text-2xl dark:fill-teal-500 dark:hover:fill-gray-50" />
    ),
  },
  {
    _id: 1004,
    link: "contact",
    icon: (
      <AiOutlineMessage className="text-2xl dark:fill-teal-500 dark:hover:fill-gray-50" />
    ),
  },
];
