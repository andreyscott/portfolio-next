import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
// import { Experience } from "../typings";

type Props = {
  experiences : any;
};

export default function WorkExperience({ experiences }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row min-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-10 md:top-10 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="w-full h-[90%] flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#4ff924]/80">
        {experiences?.map((experience: { 
           id: number;
           jobTitle: string;
           company: string;
           companyImage: any;
           dateStarted: string;
           dateEnded: string;
           isCurrentlyWorkingHere: boolean;
           technologies: any[];
           points: string[];
         }) => (
          <ExperienceCard key={experience.id} 
          experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}
