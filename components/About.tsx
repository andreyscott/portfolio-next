import { motion } from "framer-motion";
import React from "react";
// import { urlFor } from "../sanity";
// import { PageInfo } from "../typings";



export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-5 md:px-10 justify-center md:justify-evenly mx-auto items-center space-y-10 md:space-y-0"
    >
      <h3 className="absolute top-10 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        // src={urlFor(pageInfo?.profilePic).url()}
        src='/images/about.jpg'
        className="mb-15 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-3xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#4ff924]/50">little</span>{" "}
          background
        </h4>
        <div className="text-gray-300 w-96 md:w-[520px] text-lg">
        <p className="text-sm md:text-base px-10 md:px-0">
          I am a self-taught developer with a passion for creating beautiful
          websites and applications. I have been working with web development for
          over a year now and I am always looking for new opportunities to
          improve my skills and learn new things.


        </p>
        </div>
      </div>
    </motion.div>
  );
}
