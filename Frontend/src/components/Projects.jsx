import React, { useState, useEffect } from "react";
import Title from "./Title";
import axios from "axios";
const backendUrl = import.meta.env.VITE_BACKEND_URL; // Access backend URL from .env

import { toast } from "react-toastify";

const Projects = () => {
  const [projects, setProjects] = useState([]); // Initialize with an empty array

  // Fetch the projects data from the backend when the component mounts
  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");

      if (response.data.success) {
        setProjects(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div id="projects" className="mt-3">
      <Title text={"PROJECTS"} />
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
        {/* Check if projects exist before trying to map */}
        {projects.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 shadow-[0_0_10px_rgba(0,0,0,0.15)] shadow-black py-3 px-4"
          >
            <img
              src={item.image} // Ensure the image URL is correct
              alt={item.name}
              className="w-full lg:w-3/4 h-48 mx-auto mt-2"
              
            />
            <p className="text-xl text-center text-red-500">{item.name}</p>
            <p className="text-slate-400 text-center">{item.about}</p>
            <div className="flex flex-wrap gap-2 mt-2 px-2">
              {item.stacks.map((stack, index) => (
                <p
                  key={index}
                  className="bg-gray-400 hover:bg-slate-100 text-black px-2 py-1 rounded"
                >
                  {stack}
                </p>
              ))}
            </div>
            <a
              href={item.url}
              target="_blank"
              className="px-3 mt-3 py-2 bg-black text-white cursor-pointer rounded-md hover:bg-white hover:text-black w-1/2 text-xl text-center mx-auto"
            >
              visit
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
