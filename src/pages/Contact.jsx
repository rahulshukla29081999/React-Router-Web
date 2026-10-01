import React from "react";
import { useNavigate } from "react-router-dom";
const Contact = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Contact Us</h1>
      <div className="contact-buttons">
        <button
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition shadow-sm cursor-pointer"
          onClick={() => navigate("info")}
        >
          Contact Info
        </button>
        <button
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition shadow-sm cursor-pointer"
          onClick={() => navigate("form")}
        >
          Contact Form
        </button>
      </div>
    </div>
  );
};

export default Contact;
