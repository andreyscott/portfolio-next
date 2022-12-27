const Home = ({ pageInfo, experiences, skill, projects, socials }: Props) => {

      <Header socials={socials} />
      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
    </section>
      {/* About */}
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>
      <section id="skills" className="snap-center">        
        <Skiller />
      </section>
      {/* Experience */}
      <section id="experience"  >
        <WorkExperience experiences={experiences} />
      </section>
      {/* <section id="skills" className="snap-start">
        <Skills skills={skill} />
      </section> */}

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe pageInfo={pageInfo} />
      </section>
}



{project?.technologies?.map((technology) => (
  // eslint-disable-next-line react/jsx-no-undef
  <Image
    className="h-10 w-10"
    key={technology._id}
    src={technology.image}
    alt='some text here'
    width={44}
    height={44}
  />
))}