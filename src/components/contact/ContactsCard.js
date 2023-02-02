import React from "react";
import Image from "next/image";

const ContactsCard = ({ src, des, method, cta, email }) => {
  return (
    <aside>
      <div className="w-full px-5 py-12 my-10 rounded-lg shadow-lg flex flex-col items-center text-center tracking-wide">
        <div>
          <Image
            src={src}
            className="w-20 h-20"
            alt="media image"
            placeholder="blur"
          />
        </div>
        <div>
          <h2 className="text-2xl dark:text-gray-400">{method}</h2>
          <p className="text-md lg:text-lg dark:text-gray-100 mb-4">{des}</p>
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href={
                email ? "mailto:jsaique11@gmail.com" : "https://m.me/johnsaique"
              }
              className="text-teal-500 text-md lg:text-xl hover:text-cyan-400 "
            >
              {email ? email : cta}
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default ContactsCard;
