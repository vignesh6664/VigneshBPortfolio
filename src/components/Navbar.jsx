import React from "react";
import { delay, motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
      <nav className="mb-20 -mt-6 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center lg:ml-4 ">
          <motion.h1
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className=" ml-2 w-10 text-2xl font-bold text-red-900"
          >
            <IoCodeSlash />
          </motion.h1>
        </div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="m-8 flex items-center justify-center gap-4 text-2xl cursor-pointer"
        >
          <FaLinkedin />
          <FaGithub />
          <FaInstagram />
        </motion.div>
      </nav>
    </>
  );
};

export default Navbar;
