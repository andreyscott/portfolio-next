import type { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image"
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skiller from "../components/Skills/";
// import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
// import { urlFor } from "../sanity";
// import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import {Social } from "../typings";
import { ProjectsData, dataSocials, experinceData } from "../data/data";
// import { fetchExperiences } from "../utils/fetchExperiences";
// import { fetchPageInfo } from "../utils/fetchPageInfo";
// import { fetchProjects } from "../utils/fetchProjects";
// import { fetchSkills } from "../utils/fetchSkills";


type Props = {
//   pageInfo: PageInfo;
//   experiences: Experience[];
//   skill: Skill[];
//   projects: Project[];
  socials: Social[];
};


const Home = ( { socials }: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#4ff924]/80">
      <Head>
        <title>Andrew Portfolio</title>
        <title>Home</title>
      </Head>

      <Header dataSocials={dataSocials}  />
      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
    </section>
      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-center">        
        <Skiller />
      </section>
      <section id="experience" className="snap-center" >
        <WorkExperience experiences={experinceData} />
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={ProjectsData} />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>



      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <Image
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src="/images/andrey.jpg"
              alt='this is an picture'
              width='30px'
              height='30px'
              loading="eager"
              placeholder="blur"
              blurDataURL="/images/andrey.jpg"

            />
          </div>
        </footer>
      </Link>
    </div>
  );
};


export default Home;

// export const getStaticProps: GetStaticProps<Props> = async () => {
//   const pageInfo: PageInfo = await fetchPageInfo();
//   const experiences: Experience[] = await fetchExperiences();
//   const skill: Skill[] = await fetchSkills();
//   const projects: Project[] = await fetchProjects();
  // const socials: Social[] = await fetchSocials();

  // return {
  //   props: {
//       pageInfo,
//       experiences,
//       skill,
//       projects,
      // socials,
    // },
//     // Next.js will attempt to re-generate the page:
//     // - When a request comes in
//     // - At most once every 10 seconds
    // revalidate: 10,
//   };
// };
