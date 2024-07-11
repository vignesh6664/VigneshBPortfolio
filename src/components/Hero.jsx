import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/projects/boyprofile.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -150, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

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

const Hero = () => {
  return (
    <div className=" border-b border-neutral-900 pb-4 lg:mb-36">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className=" pb-16 mt-4 ml-8 text-4xl font-thin tracking-tight lg:-ml-2 lg:mt-16 lg:text-6xl"
            >
              Vignesh
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="ml-8 lg:-ml-1 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              variants={FloatIconsVarient(2.5)}
              initial="initial"
              animate="animate"
              className="w-[420px]"
              src={profilePic}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
