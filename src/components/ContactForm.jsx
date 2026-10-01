import React from "react";

const ContactForm = () => {
  return (
    <div>
      <form>
        <input
          className="border-2 border-black bg-white p-3 w-full rounded-md outline-none"
          type="text"
          id="name"
          name="name"
          placeholder="Name"
        />
        <br />
        <input
          className="border-2 border-black bg-white p-3 w-full rounded-md outline-none"
          type="email"
          placeholder="Email"
          id="email"
          name="email"
        />
        <br />
        <textarea
          className="border-2 border-black bg-white p-3 w-full rounded-md outline-none"
          id="message"
          name="message"
          placeholder="Message"
        ></textarea>
        <br />
        <button
          className="border-2 border-black bg-white p-3 w-full rounded-md outline-none"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
