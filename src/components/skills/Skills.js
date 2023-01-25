import React from "react";
import Image from "next/legacy/image";
import { design } from "@/assets/icons";
import { code } from "@/assets/icons";
import { consulting } from "@/assets/icons";

const Skills = () => {
  return (
    <section>
      <div>
        <h3 className="text-3xl py-1 dark:text-gray-400">My Skills</h3>
        <p className="text-md py-2 leading-8 text-gray-800 md:text-xl dark:text-gray-100">
          Since im begining a new journey as a Coder, Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Cum saepe architecto
          <span className="text-teal-500"> laboriosam</span> laboriosam dolore
          nemo dolorum <span className="text-teal-500"> atque</span> atque magni
          sit
        </p>
        <p className="text-md py-2 leading-8 text-gray-800 md:text-xl dark:text-gray-100">
          vero blanditiis eum, distinctio qui voluptates fugiat officiis
          explicabo minus placeat facilis!
        </p>
      </div>
      <div className="lg:flex gap-10">
        <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1">
          <Image src={code} width={100} height={100} />
          <h3 className="pt-8 pb-2 text-lg font-medium dark:text-gray-100">
            Programing Skills
          </h3>
          <p className="py-2 dark:text-gray-100">I love learning new skills</p>
          <h4 className="py-5 text text-teal-600">My toolbox</h4>
          <p className="py-1 text-gray-800 dark:text-gray-100">Javascript</p>
          <p className="py-1 text-gray-800 dark:text-gray-100">React</p>
          <p className="py-1 text-gray-800 dark:text-gray-100">Git</p>
          <p className="py-1 text-gray-800 dark:text-gray-100">Parcel</p>
        </div>

        <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1">
          <Image src={design} width={100} height={100} />
          <h3 className="pt-8 pb-2 text-lg font-medium dark:text-gray-100">
            Beautiful Designs
          </h3>
          <p className="py-2 dark:text-gray-100">
            I love creating beautiful designs{" "}
          </p>
          <h4 className="py-5 text text-teal-600">Design tools I use</h4>
          <p className="py-1 text-gray-800 dark:text-gray-100">Blender</p>
          <p className="py-1 text-gray-800 dark:text-gray-100">Nomad</p>
        </div>

        <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1">
          <Image src={consulting} width={100} height={100} />
          <h3 className="pt-8 pb-2 text-lg font-medium dark:text-gray-100">
            Beautiful Designs
          </h3>
          <p className="py-2 dark:text-gray-100">
            I love creating beautiful designs
          </p>
          <h4 className="py-5 text text-teal-600">Design tools I use</h4>
          <p className="py-1 text-gray-800 dark:text-gray-100">Blender</p>
          <p className="py-1 text-gray-800 dark:text-gray-100">Nomad</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
