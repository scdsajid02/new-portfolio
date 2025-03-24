import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Title from "./Title";

const backendUrl = import.meta.env.VITE_BACKEND_URL; // Ensure your .env contains the backend URL

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Initialize Toast


  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(backendUrl + "/api/contact/submit", {
        name,
        email,
        message,
      });

      if (response.data.success) {
        toast.success("Message sent successfully!", { position: "top-center" });
        setName("");
        setEmail("");
        setMessage("");
      } else {
        toast.error(response.data.message, { position: "top-center" });
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.", {
        position: "top-center",
      });
    }
  };

  return (
    <div id="contact">
      <Title text={"CONTACT"} />
      <div className="mt-7">
        <form
          onSubmit={onSubmitHandler}
          className="flex flex-col justify-center pb-9 items-center gap-4"
        >
          <input
            type="text"
            className="bg-black text-gray-400 px-3 py-2 rounded"
            placeholder="Name"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type="email"
            className="bg-black text-gray-400 px-3 py-2 rounded"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <textarea
            className="bg-black text-gray-400 px-3 py-2 mx-2 w-full md:w-1/2 h-32 rounded"
            placeholder="Message"
            required
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            maxLength={2000}
          />
          <button
            type="submit"
            className="text-white bg-gray-600 cursor-pointer hover:text-black hover:bg-white px-3 py-2 w-1/2 md:w-1/4 rounded-full"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
