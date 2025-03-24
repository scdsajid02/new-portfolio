import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Title from "./Title";
const About = () => {
  return (
    <div className="">
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className="flex gap-2 flex-col sm:flex-row sm:items-center items-center pb-2 mb-4"
      >
        <p className="sm:pr-4 text-3xl sm:text-4xl font-bold">
          Connect with me :
        </p>
        <a href="https://github.com/scdsajid02" target="_blank">
          <img
            src="https://cdn-icons-png.flaticon.com/128/733/733609.png"
            alt=""
            className="w-10 h-10"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/shaik-sajid-6080b2247/"
          target="_blank"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/61/61109.png"
            alt=""
            className="w-10 h-10"
          />
        </a>
      </motion.div>
      <div id="about" className="">
        <Title text={"ABOUT"} />
        <div className="flex flex-col gap-7 md:flex-row mt-5 w-full mb-4 sm:mb-6 md:mb-8 xl:h-screen xl:mb-0">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="md:w-1/2 text-justify flex flex-col items-center justify-center"
          >
            <h1 className="text-3xl mb-2 sm:text-4xl md:text-5xl lg:text-6xl font-semibold">
              Hello! My name is Sajid
            </h1>
            <p className="text-xl md:text-2xl w-full text-gray-500">
              I am a self-taught programmer with a passion for learning and
              exploring new technologies. I have a strong background in FrontEnd
              Development and improving full-stack development and am always
              eager to expand my skillset and take on new challenges. In my free
              time, I enjoy sipping on a cup of tea (or coffee) and watching a
              game of cricket. As a dedicated and driven individual, I am
              constantly seeking out opportunities to grow and improve as a
              programmer.
            </p>
            <div className="grid grid-cols-7 gap-3 mt-5 pb-4">
              <img
                src="https://cdn-icons-png.flaticon.com/128/174/174854.png"
                alt=""
                className="w-10 h-10"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/128/732/732190.png"
                alt=""
                className="w-10 h-10"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png"
                alt=""
                className="w-10 h-10"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/128/3459/3459528.png"
                alt=""
                className="w-10 h-10"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/128/5968/5968322.png"
                alt=""
                className="w-10 h-10"
              />
              <img
                src="https://img.icons8.com/?size=100&id=2ZOaTclOqD4q&format=png&color=000000"
                alt=""
                className="w-10 h-10"
              />
              <img
                src="https://img.icons8.com/?size=160&id=8rKdRqZFLurS&format=png"
                alt=""
                className="w-10 h-10"
              />
            </div>
          </motion.div>
          <div className="md:w-1/2">
            <motion.img
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              src="https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_1280.png"
              alt=""
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
