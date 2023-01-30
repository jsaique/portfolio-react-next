import React from "react";
import Image from "next/image";

const ContactsCard = ({ src, des, method, cta, email }) => {
  return (
    <div>
      <div className="w-full p-5 my-10 rounded-lg shadow-lg flex flex-col items-center text-center tracking-wide md:w-52">
        <div>
          <Image
            src={src}
            className="w-20 h-20
          "
          />
        </div>
        <div>
          <h2 className="text-2xl dark:text-gray-400">{method}</h2>
          <p className="dark:text-gray-100">{des}</p>
          <div>
            <a
              target="_blank"
              href={
                email ? "mailto:jsaique11@gmail.com" : "https://m.me/johnsaique"
              }
              className="text-teal-500 hover:text-cyan-400 "
            >
              {email ? email : cta}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsCard;
