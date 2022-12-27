import React from "react";
import { motion } from "framer-motion";
// import { Project } from "../typings";
import { urlFor } from "../sanity";
import Link from "next/link";
// import { Image } from "../typings";

type Props = {
  projects: any;
  
};

// interface Image {
//   _type: "image";
//   asset: {
//     _ref: string;
//     _type: "reference";
//   };
// }

const ProjectsData = [
  {
    id: 1,
    title: "Portfolio",
    description:
      "This is my portfolio website. I built it using Next.js, Sanity.io, Framer Motion, Tailwind CSS, and TypeScript.",
    image: "/images/portfolio.png",
    github: " ",
    linkToBuild: "https://github.com/andreyscott",
    technologies: ["Next.js", "Sanity.io", "Framer Motion", "Tailwind CSS", "TypeScript"],
    priority: 1,
  },
  {
    id: 2,
    title: "BBC News Clone",
    description:
      "This is a clone of the BBC News website. I built it using Next.js, Tailwind CSS, and TypeScript.",
    image: "/images/bbc-news.png",
    github: " ",
    linkToBuild: "https://github.com/andreyscott",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    priority: 2,
  },
  {
    id: 3,
    title: "Netflix Clone",
    description:
      "This is a clone of the Netflix website. I built it using Next.js, Tailwind CSS, and TypeScript.",
    image: "/images/netflix.png",
    github: " ",
    linkToBuild: "https://github.com/andreyscott",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    priority: 3,
  },
];


export default function Projects({ projects }: Props) {
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#4ff924]/80 scrollbar-thin">
        {/* projects */}
        {projects?.map((project:{
          title: string;
          image: any;
          linkToBuild: string;
          description: string;
          technologies: Array<string>;
          priority: number;
        }, i: number) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-16 md:p-30 xl:p-44 h-screen"
          >
            {/* <Link href={project?.linkToBuild}> */}
            <Link href='/'>
              <motion.img
                initial={{ y: -300, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2 }}
                // viewport={{ once: true }}
                src={project?.image}
                alt=""
                className="max-h-[50%] md:max-h-[60%] xl:max-h-[55%] cursor-pointer hover:grayscale"
              />
            </Link>
            <div className="space-y-5 md:space-y-10 px-0 md:px-10 max-w-6xl">
              {/* <Link href={project?.linkToBuild}> */}
              <Link href='/'>
                <h4 className="text-3xl md:text-4xl font-semibold text-center cursor-pointer hover:text-[#4ff924] transition-all">
                  <span className="underline decoration-[#4ff924]/50">
                    Case Study {i + 1} of {projects.length}:
                  </span>{" "}
                  {project?.title}
                </h4>
              </Link>

              <div className="flex items-center space-x-2 justify-center">  
               
              </div>

              <p className="text-lg text-center md:text-left">
                {project?.description}
                              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#f70a3757]/50 left-0 h-[500px] -skew-y-12" />
    </div>
  );
}
