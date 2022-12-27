import { useEffect, useState } from 'react'
// import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { motion } from "framer-motion";

import WordCloud from './wordcloud'

const Skiller = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const skillsArray = 'Skills'.split('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container flex flex-col md:flex-row pt-20  skills-page">
        <motion.div
          initial={{ x: 400, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}

        className="text-zone flex flex-col items-center justify-center md:w-1/2 px-3">
          <h1 className='text-4xl md:text-6xl font-extrabold pb-3 tracking-widest'>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={skillsArray}
              idx={15}
            />
            <br />
          </h1>
          <p 
          className='px-2 leading-8 tracking-wide text-xl font-mono' >
            I love to keep a variety of tools in my tech stack. I also make sure
            to be pro at using one tool before moving on to the next. I keep
            myself up to date with the latest technologies around.
          </p>
          <p
          className='px-2 leading-8 tracking-wide text-xl font-mono'
          >
            Looking for a role in a company with the opportunity to work with
            the latest technologies on challenging and diverse projects.
          </p>
        </motion.div>

        <div  className='md:w-[53%] lg:w-[60%] p-0 mb-10 h-[580px] overflow-hidden'>
          <WordCloud />
        </div>
      </div>

      {/* <Loader type="pacman" /> */}
    </>
  )
}

export default Skiller
