import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNodejsLine } from "react-icons/ri";
import { RiJavascriptLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";

const FloatIconsVarient = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
const Skills = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.9 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={FloatIconsVarient(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-600 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={FloatIconsVarient(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-600 p-4"
        >
          <RiTailwindCssFill className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={FloatIconsVarient(2.9)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-600 p-4"
        >
          <RiNodejsLine className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={FloatIconsVarient(2.3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-600 p-4"
        >
          <RiJavascriptLine className="text-7xl text-yellow-500" />
        </motion.div>
        <motion.div
          variants={FloatIconsVarient(2.7)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-600 p-4"
        >
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={FloatIconsVarient(2.9)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-600 p-4"
        >
          <TbSql className="text-7xl text-red-700" />
        </motion.div>
        <motion.div
          variants={FloatIconsVarient(2.3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-600 p-4"
        >
          <BiLogoPostgresql className="text-7xl text-sky-500" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
