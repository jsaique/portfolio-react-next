import React from "react";
import Image from "next/legacy/image";
import { design } from "@/assets/icons";
import { code } from "@/assets/icons";
import { consulting } from "@/assets/icons";

const Skills = () => {
  return (
    <section id="skills">
      <div>
        <h3 className="text-3xl py-1 dark:text-gray-400">My Skills</h3>
        <p className="text-md py-2 leading-8 text-gray-800 md:text-xl dark:text-gray-100">
          Hello everyone, I am a self-taught developer who has a passion for
          technology and a drive to continuously improve my skills. I have honed
          my abilities through online courses, tutorials, and practical
          projects, and I am <span className="text-teal-500">confident</span> in
          my ability to create innovative{" "}
          <span className="text-teal-500">solutions</span> to complex problems.
        </p>
        <p className="text-md py-2 leading-8 text-gray-800 md:text-xl dark:text-gray-100">
          As a self-taught developer, I bring a{" "}
          <span className="text-teal-500">unique</span> perspective to the table
          and am always eager to take on new{" "}
          <span className="text-teal-500">challenges</span> and continue to
          expand my knowledge.
        </p>
      </div>
      <div className="lg:flex gap-10">
        <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1">
          <Image src={code} width={100} height={100} />
          <h3 className="pt-8 pb-2 text-lg font-medium dark:text-gray-400">
            Programing Skills
          </h3>
          <p className="py-2 dark:text-gray-100">I love learning new skills</p>
          <h4 className="py-5 text text-teal-600">My toolbox</h4>
          <p className="py-1 text-gray-800 dark:text-gray-100">Javascript</p>
          <p className="py-1 text-gray-800 dark:text-gray-100">React</p>
          <p className="py-1 text-gray-800 dark:text-gray-100">Tailwind</p>
          <p className="py-1 text-gray-800 dark:text-gray-100">Git</p>
          <p className="py-1 text-gray-800 dark:text-gray-100">Parcel</p>
        </div>

        <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1">
          <Image src={design} width={100} height={100} />
          <h3 className="pt-8 pb-2 text-lg font-medium dark:text-gray-400">
            Beautiful Designs
          </h3>
          <p className="py-2 dark:text-gray-100">
            I love creating beautiful artwork
          </p>
          <h4 className="py-5 text text-teal-600">Design tools I use</h4>
          <p className="py-1 text-gray-800 dark:text-gray-100">
            <span className="text-red-500">In progress - </span> Blender
          </p>
          <p className="py-1 text-gray-800 dark:text-gray-100">Nomad</p>
          <p className="py-1 text-gray-800 dark:text-gray-100">Procreate</p>
        </div>

        <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1">
          <Image src={consulting} width={100} height={100} />
          <h3 className="pt-8 pb-2 text-lg font-medium dark:text-gray-400">
            Bonus Skills
          </h3>
          <p className="py-2 dark:text-gray-100">Skills I mastered</p>
          <h4 className="py-5 text text-teal-600">My skills</h4>
          <p className="py-1 text-gray-800 dark:text-gray-100">
            Excellent in problem-solving
          </p>
          <p className="py-1 text-gray-800 dark:text-gray-100">Fast learner</p>
          <p className="py-1 text-gray-800 dark:text-gray-100">
            Detail oriented
          </p>
          <p className="py-1 text-gray-800 dark:text-gray-100">
            Strong analytical skills
          </p>
          <p className="py-1 text-gray-800 dark:text-gray-100">
            Positive attitude
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
