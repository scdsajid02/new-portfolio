import React from "react";
import main from "../../assets/main.jpeg";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const Home = () => {
  return (
    <div>
      <div id="home" className="flex flex-col gap-3 md:flex-row mt-5 w-full mb-4 sm:mb-6 md:mb-8 xl:h-screen xl:mb-0">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="w-full md:w-1/2 flex flex-col gap-2  justify-center py-10  sm:py-0"
        >
          <h1 className="prata-regular text-4xl lg:text-5xl  font-bold mb-5">
            Welcome to my <br />
            <span className="prata-regular font-extrabold bg-gradient-to-r from-orange-600 to-fuchsia-600 bg-clip-text text-transparent inline-block">
              Portfolio!
            </span>
          </h1>
          <p className="text-lg mb-3">
            I am a{" "}
            <span className="bg-teal-700 text-black rounded p-1">MERN</span>{" "}
            stack developer skilled in React.js, Node.js, Express.js, and
            MongoDB. I build responsive UIs with Tailwind CSS and develop
            secure, scalable APIs.
          </p>
          <p className="text-lg mb-3">
            Passionate about creating interactive, high-performance web
            applications. Open to Frontend & Full Stack Developer roles!
          </p>
          <div className="flex text-lg flex-col md:flex-row sm:justify-center md:items-center  gap-2 md:gap-4 mt-3">
            <a
              href="#contact"
              className="px-3 flex items-center justify-center gap-1 md:hover:text-gray-700 text-center py-2 rounded-lg bg-gradient-to-r from-fuchsia-600 to-orange-600 text-black text-xl"
            >
              <p>Hire me</p>
              <img
                src="https://cdn.pixabay.com/photo/2016/09/05/10/50/app-1646214_1280.png"
                alt=""
                className="w-5 h-5 pt-1"
              />
            </a>
            <a
              href="https://docs.google.com/document/d/1d1-vuFQyMLnJ2Wtnu1uqLA734EBq5RbVe92zgG0SOO4/edit?usp=sharing"
              target="_blank"
              className="px-3 flex gap-1 items-center justify-center md:hover:text-gray-700  w-1/2 sm:w-[160px] py-2 rounded-lg bg-gradient-to-r from-fuchsia-600 to-orange-600 text-black text-xl"
            >
              <p>My Resume</p>
              <img
                src="https://cdn.pixabay.com/photo/2016/09/05/10/50/app-1646214_1280.png"
                alt=""
                className="w-5 h-5 pt-1"
              />
            </a>
          </div>
        </motion.div>
        <div className="w-full md:w-1/2 flex md:justify-center md:items-center">
          <motion.img
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            src={main}
            alt=""
            className=" rounded-md md:mt-6  md:saturate-0 hover:border border-purple-400 p-1 hover:saturate-100"
          />
        </div>
      </div>
     
    </div>
  );
};

export default Home;
