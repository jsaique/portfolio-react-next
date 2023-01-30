import React from "react";
import Image from "next/legacy/image";
import { design } from "@/assets/icons";
import { code } from "@/assets/icons";
import { consulting } from "@/assets/icons";

const SkillsCard = () => {
  return (
    <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1">
      <Image src={code} width={100} height={100} />
      <h3 className="pt-8 pb-2 text-lg font-medium dark:text-gray-400">
        Programing Skills
      </h3>
      <p className="py-2 dark:text-gray-100">I love learning new skills</p>
      <h4 className="py-5 text text-teal-600">My toolbox</h4>
      <p className="py-1 text-gray-800 dark:text-gray-100">Javascript</p>
      <p className="py-1 text-gray-800 dark:text-gray-100">React</p>
      <p className="py-1 text-gray-800 dark:text-gray-100">Git</p>
      <p className="py-1 text-gray-800 dark:text-gray-100">Parcel</p>
    </div>
  );
};

export default SkillsCard;
