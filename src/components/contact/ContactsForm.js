import React from "react";

const ContactsForm = () => {
  return (
    <div className="my-10">
      <form action="" className="flex flex-col gap-6">
        <input
          className="w-[100%] p-6 rounded-lg bg-transparent border-2 border-teal-600 dark:text-gray-100"
          type="text"
          name="name"
          placeholder="Your Full Name"
          required
        />

        <input
          className="w-[100%] p-6 rounded-lg bg-transparent border-2 border-teal-600 dark:text-gray-100"
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />

        <textarea
          className="w-[100%] p-6 rounded-lg bg-transparent border-2 border-teal-600 dark:text-gray-100"
          name="message"
          rows="7"
          placeholder="Your Message"
          required
        ></textarea>

        <button
          className="w-36 mx-auto bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 rounded-lg dark:text-gray-100"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactsForm;
