import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Title from "./Title";
const Education = () => {
  return (
    <div className="">
      {/* call book */}
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className="w-full mb-3 flex flex-col items-center justify-center"
        id="education"
      >
        <p  className="text-center mt-2 text-xl">Want to talk?</p>

        <a
          href="https://calendly.com/sajidscd02/30min"
          target="_blank"
          className="text-center text-2xl mb-5 mt-3 w-5/6 bg-white py-2 text-black rounded-md hover:text-white hover:bg-black"
        >
          Book a call
        </a>
      </motion.div>
      <div className="">
        <Title text={"EDUCATION"} />
        <div className="flex flex-col mt-7 mb-12 gap-8 w-full">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="flex gap-3 md:justify-center"
          >
            <div className="flex flex-col items-center gap-1">
              <p className="bg-sky-500 rounded-full w-6 h-6 text-center">✔</p>
              <p className="w-1 h-full bg-lime-600"></p>
            </div>
            <div className="md:w-3/4  px-3 py-2 rounded shadow-lg shadow-black">
              <p className="text-balance md:text-lg text-center">
                I hold a B.Tech in Computer Science & Engineering from Vel Tech
                Dr. R. R. & Dr. S. R. University, Chennai. During my studies, I
                built a strong foundation in web development, data structures,
                and problem-solving. My passion for creating interactive web
                applications led me to specialize in the MERN stack, where I
                have developed and deployed full-stack projects featuring
                authentication, payment integration, and scalable APIs. I am
                eager to apply my skills and grow as a Full Stack Developer.
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="flex gap-3 md:justify-center"
          >
            <div className="flex flex-col items-center gap-1">
              <p className="bg-sky-500 rounded-full w-6 h-6 text-center">✔</p>
              <p className="w-1 h-full bg-lime-600"></p>
            </div>
            <div className="md:w-3/4  px-3 py-2 rounded shadow-lg shadow-black">
              <p className="text-balance md:text-lg text-center">
                I completed my Class 12 from Bhashyam Junior College, Tirupati,
                with a focus on Mathematics, Physics, and Chemistry (MPC). This
                foundation strengthened my analytical and problem-solving
                skills, which later helped me in programming and web
                development.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Education;
