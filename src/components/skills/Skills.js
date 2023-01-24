import React from "react";
import Image from "next/legacy/image";
import { design } from "@/assets/icons";
import { code } from "@/assets/icons";
import { consulting } from "@/assets/icons";

const Skills = () => {
  return (
    <section>
      <div>
        <h3 className="text-3xl" py-1>
          My Skills
        </h3>
        <p className="text-md py-2 leading-8 text-gray-800">
          Since im begining a new journey as a Coder, Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Cum saepe architecto
          <span className="text-teal-500"> laboriosam</span> laboriosam dolore
          nemo dolorum <span className="text-teal-500"> atque</span> atque magni
          sit
          <p className="text-md py-2 leading-8 text-gray-800">
            vero blanditiis eum, distinctio qui voluptates fugiat officiis
            explicabo minus placeat facilis!
          </p>
        </p>
      </div>
      <div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10">
          <Image src={design} width={100} height={100} />
          <h3 className="pt-8 pb-2 text-lg font-medium">Beautiful Designs</h3>
          <p className="py-2">I love creating beautiful designs </p>
          <h4 className="py-5 text text-teal-600">Design tools I use</h4>
          <p className="py-1 text-gray-800">Blender</p>
          <p className="py-1 text-gray-800">Nomad</p>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10">
          <Image src={code} width={100} height={100} />
          <h3 className="pt-8 pb-2 text-lg font-medium">Beautiful Designs</h3>
          <p className="py-2">I love creating beautiful designs </p>
          <h4 className="py-5 text text-teal-600">Design tools I use</h4>
          <p className="py-1 text-gray-800">Blender</p>
          <p className="py-1 text-gray-800">Nomad</p>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10">
          <Image src={consulting} width={100} height={100} />
          <h3 className="pt-8 pb-2 text-lg font-medium">Beautiful Designs</h3>
          <p className="py-2">I love creating beautiful designs </p>
          <h4 className="py-5 text text-teal-600">Design tools I use</h4>
          <p className="py-1 text-gray-800">Blender</p>
          <p className="py-1 text-gray-800">Nomad</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
