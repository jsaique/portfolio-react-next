import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const ContactsForm = () => {
  const initialValues = { name: "", email: "", subject: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  //Getting the key and value of the form
  const handleChange = (e) => {
    const { name, value } = e.target;
    //[name] will assign the name to the key when typing in that form "same for other forms"
    setFormValues({ ...formValues, [name]: value });
    // console.log(formValues);
  };

  //Form
  const form = useRef();

  //EmailJS
  const sendEmail = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setSubmitted(true);

    if (formValues.email && formValues.subject && formValues.message) {
      emailjs
        .sendForm(
          "service_dcrgcsk",
          "template_9jg5whq",
          form.current,
          "DovzGJEX_b7hIpw4A"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      form.current.reset();
    }
  };

  // useEffect(() => {
  //   // console.log(formErrors);
  //   if (Object.keys(formErrors).length === 0 && submitted) {
  //     // console.log(formValues);
  //   }
  // }, [formErrors]);

  //Form validation
  const validate = (values) => {
    const errors = {};
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!values.name) {
      errors.name = "* Name is required";
    }
    if (!values.email) {
      errors.email = "* Email is required";
    }
    if (!regex.test(values.email)) {
      errors.email = "* Enter a valid email";
    }
    if (!values.subject) {
      errors.subject = "* Subject is required";
    }
    if (!values.message) {
      errors.message = "* Write a message";
    }
    return errors;
  };

  return (
    <div className="my-10 flex flex-col lg:w-[65%]">
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
        <input
          onChange={handleChange}
          className="w-[100%] p-6 rounded-lg bg-transparent border-2 border-teal-600 dark:text-gray-100"
          type="text"
          name="name"
          placeholder="Your Name"
        />
        <p className="text-sm font-medium text-red-500">{formErrors.name}</p>
        <input
          onChange={handleChange}
          className="w-[100%] p-6 rounded-lg bg-transparent border-2 border-teal-600 dark:text-gray-100"
          type="email"
          name="email"
          placeholder="Your Email"
        />
        <p className="text-sm font-medium text-red-500">{formErrors.email}</p>
        <input
          onChange={handleChange}
          className="w-[100%] p-6 rounded-lg bg-transparent border-2 border-teal-600 dark:text-gray-100"
          type="text"
          name="subject"
          placeholder="Subject"
        />
        <p className="text-sm font-medium text-red-500">{formErrors.subject}</p>
        <textarea
          onChange={handleChange}
          className="w-[100%] p-6 rounded-lg bg-transparent border-2 border-teal-600 dark:text-gray-100 resize-none"
          name="message"
          rows="7"
          placeholder="Your Message"
        ></textarea>
        <p className="text-sm font-medium text-red-500">{formErrors.message}</p>
        {Object.keys(formErrors).length === 0 && submitted ? (
          <p className="text-lg font-semibold text-green-500 text-center">
            {formValues.name} your message has been sent!
          </p>
        ) : (
          ""
        )}
        <button
          className="w-36 mx-auto bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 rounded-lg active:bg-teal-800 dark:text-gray-100"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactsForm;
