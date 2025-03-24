import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const Title = ({ text }) => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.7 }}
      className="flex justify-center gap-2 items-center mt-3 "
    >
      <p className="prata-regular text-cyan-200 text-2xl font-black outline-none border-none rounded px-3 py-2 border bg-gradient-to-r from-orange-600 to-fuchsia-700">
        {text}
      </p>
    </motion.div>
  );
};

export default Title;
