import React from "react";
import aboutImg from "../assets/projects/aboutImage.png";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const FloatIconsVarient = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -20],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.9 }}
        className="my-20 text-center text-4xl"
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.9 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <motion.div
            variants={FloatIconsVarient(2.5)}
            initial="initial"
            animate="animate"
            className="flex items-center justify-center"
          >
            <img
              className="rounded-2xl "
              width={250}
              height={250}
              src={aboutImg}
              alt=""
            />
          </motion.div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.9 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
