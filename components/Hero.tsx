/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Image from "next/image";
import React, { useState,useEffect } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { urlFor } from "../sanity";
// import { PageInfo } from "../typings";
import BackgroundCircles from "./BackgroundCircles";
import AnimatedLetters from './AnimatedLetters'


export default function Hero() {

  const [letterClass, setLetterClass] = useState('text-animate')

  const letterClassArray = []
  for (let i = 1; i <= 100; i++) {
    letterClassArray.push(`text-animate _${i}`)

  }
  

  const nameArray = 'Front-End Dev'.split('')
  const jobArray = 'Web Developer'.split('')
  const interestArray = 'AI Enthusiast'.split('')
  const enthusiastArray = 'React Dev'.split('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  const [text, count] = useTypewriter({
    words: [
      `Hi, The Name's Andrew`,
      "Guy-who-codes-in.tsx",
      "SomeOneWho-is-const-ant.jsx",
      "<LovesToRead />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center">
      <BackgroundCircles />
      <Image
        className="relative rounded-full mx-auto object-cover h-40 w-40"
        // src={urlFor(pageInfo?.heroImage).url()}
        src='/images/andrey.jpg'
        alt="Profile Image of Andrew"
        width={160}
        height={160}
        loading="eager"
        placeholder="blur"
        blurDataURL='/images/andrey.jpg'

      />
      <div className="z-20">
        <h2 className="text-4xl md:text-6xl flex items-center justify-center font-bold tracking-[10px]">
      

          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={16}
            />

        </h2>
        <h1 className="text-4xl lg:text-5xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#4ff924" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
