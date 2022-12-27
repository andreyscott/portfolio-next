import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import SoundBar from "./Soundbar/";
import { type } from "os";


type Props = {
  dataSocials: {
    _id: string;
    url: string;
  }[];
};






export default function Header({ dataSocials }: Props) {
  return (
    <header className="sticky top-0 px-5 md:px-7 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        {/* Social Icons */}
        {dataSocials?.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            className='hover:-mb-4 hover:text-primary-500 transition duration-300 ease-in-out'
            fgColor="gray"
            bgColor="transparent"
            style={{ height: 45, width: 45 }}

          />
        ))}
     
      </motion.div>

      <motion.div
          initial={{ x: -500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-row items-center"
          >
            <div className="pt-2" >
              <SoundBar />
            </div>
          </motion.div>

      <Link href="#contact">
        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-row items-center text-gray-300 cursor-pointer"
        >
          <div>
   
          </div>

          <SocialIcon
            className="cursor-pointer hover:-mb-4"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
          <p className="uppercase hover:-mb-4 transition duration-300 ease-in-out hidden md:inline-flex text-sm text-gray-400">
            Get In Touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
}
