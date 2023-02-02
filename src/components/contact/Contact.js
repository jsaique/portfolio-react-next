import React from "react";
import { AiOutlineMail, AiFillLinkedin } from "react-icons/ai";
import { FaFacebookMessenger } from "react-icons/fa";
import { email, messenger } from "../../assets/icons";
import ContactsCard from "./ContactsCard";
import ContactsForm from "./ContactsForm";

const Contact = () => {
  return (
    <section id="contact">
      <h2 className="text-3xl py-1 text-center dark:text-gray-400">
        Get in touch
      </h2>
      <h3 className="text-xl text-center mb-2 dark:text-gray-100">
        Let me know what you think
      </h3>
      <div className="w-full">
        <div className="w-full h-auto lg:flex lg:justify-between gap-10">
          <div>
            <ContactsCard
              src={email}
              method="Email"
              des="Send me an email"
              email="Click Here"
            />
            <ContactsCard
              src={messenger}
              method="Messenger"
              des="Facebook direct message"
              cta="Send a message"
            />
          </div>
          <ContactsForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
