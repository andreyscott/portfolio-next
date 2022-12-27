import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { type } from "os";



type Experience = {
  id: number;
  jobTitle: string;
  company: string;
  companyImage: any;
  dateStarted: string;
  dateEnded: string;
  isCurrentlyWorkingHere: boolean;
  technologies: any[];
  points: string[];
};   

export default function ExperienceCard ({ experience }: { experience: Experience }) {

  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[96vw] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#4ff924]/80 overflow-x-hidden">
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={experience?.companyImage}
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{experience?.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{experience?.company}</p>
        <div className="flex space-x-2 my-2">
          {/* tech used */}
          {experience?.technologies?.map((technology) => (
            <Image
              key={technology._id}
              className="h-10 w-10 rounded-full"
              src={technology.image}
              alt=""
              width={44}
              height={44}
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg max-h-[50%] pr-5 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#4ff924]/80">
          {experience?.points?.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}