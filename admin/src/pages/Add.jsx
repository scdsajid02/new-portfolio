import React from "react";
import { assets } from "../assets/assets";
import { useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
const Add = ({ token }) => {
  const [image, setImage] = useState(false);

  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [url, setUrl] = useState("");

  const [stacks, setStacks] = useState([]);
  
  const [newStack, setNewStack] = useState(""); 

  const handleAddStack = () => {
    if (newStack && !stacks.includes(newStack)) {
      setStacks((prevStacks) => [...prevStacks, newStack]);
      setNewStack(""); // Clear the input field after adding
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    
    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("about", about);
      formData.append("url", url);
      formData.append("stacks", JSON.stringify(stacks));

      image && formData.append("image", image);

      const response = await axios.post(
        backendUrl + "/api/product/add",
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setName("");
        setAbout("");
        setImage(false);

        setUrl("");
        setStacks([]);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col w-full items-start gap-3"
    >
      <div>
        <p className="mb-2">Upload Image</p>

        <div className="flex gap-2">
          <label htmlFor="image">
            <img
              className="w-20"
              src={!image ? assets.upload_area : URL.createObjectURL(image)}
              alt=""
            />
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              id="image"
              hidden
            />
          </label>
        </div>
      </div>

      <div className="w-full">
        <p className="mb-2">Project Name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Project Name"
          required
        />
      </div>
      <div className="w-full">
        <p className="mb-2">Project Description</p>
        <textarea
          onChange={(e) => setAbout(e.target.value)}
          value={about}
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Write Project Description"
          required
        />
      </div>
      <div className="w-full">
        <p className="mb-2">Project Url</p>
        <input
          onChange={(e) => setUrl(e.target.value)}
          value={url}
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Project Url"
          required
        />
      </div>
      <div className="w-full">
        <p className="mb-2">Project Stacks</p>
        <div className="flex gap-3">
          <input
            value={newStack}
            onChange={(e) => setNewStack(e.target.value)}
            className="w-full max-w-[500px] px-3 py-2"
            type="text"
            placeholder="Enter Stack (e.g., React)"
          />
          <button
            type="button"
            onClick={handleAddStack}
            className="bg-black text-white px-4 py-2"
          >
            Add Stack
          </button>
        </div>
        <div className="mt-2">
          <p className="font-bold">Current Stacks:</p>
          <ul>
            {stacks.map((stack, index) => (
              <li key={index} className="text-gray-600">
                {stack}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button type="submit" className="w-28 py-3 mt-4 bg-black text-white">
        ADD
      </button>
    </form>
  );
};

export default Add;
