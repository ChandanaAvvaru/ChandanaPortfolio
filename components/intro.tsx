"use client"
import React, { useEffect } from 'react'
import photo from '../public/Portfolio.jpg'
import Image from "next/image"
import {motion} from 'framer-motion'
import Link from 'next/link'
import {BsArrowRight, BsLinkedin} from 'react-icons/bs'
import {HiDownload} from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa'
import { useSectionInView } from '@/lib/hooks'
export default function Intro() {

    const {ref} = useSectionInView('Home', 0.5)

    function setActiveSection(name: any) {
        throw new Error('Function not implemented.')
    }

    function setTimeOfLastClick(arg0: number) {
        throw new Error('Function not implemented.')
    }

//     const{ref, inView} = useInView({threshold:0.5})
//   const {setActiveSection, timeOfLastClick} = useActiveSectionContext()

//  useEffect(() =>{
//   if(inView && Date.now()-timeOfLastClick >1000){
//     setActiveSection("Home")
//   }
//  },[inView, setActiveSection, timeOfLastClick ])
  return (
    <section ref={ref} id="home" className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
        <div className='flex items-center justify-center'>
            <div className='relative'>
                <motion.div
                initial={{opacity: 0 , scale: 0}}
                animate={{opacity: 1, scale:1}}
                transition={{
                    type:"tween",
                    duration:0.2
                }}>
                <Image src = {photo} alt="Chandana Photo" width="500" height="150" quality="100" priority={true} className='h-28.5 w-28.5 rounded-full border-[0.35rem] border-white shadow-xl'></Image>
                </motion.div>
                <motion.span className='absolute bottom-0 right-24 text-4xl' initial={{opacity: 0, scale: 0}} animate={{opacity:1, scale:1}} transition={{
                    type: "spring", stiffness: 125, delay: 0.1, duration:0.7
                }}>👋</motion.span>
            </div>
        </div>
        <motion.h1 className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
        initial={{opacity: 0, y:100}}
        animate={{opacity:1,y:0}}>
        <span>Hi there!,</span>{" "}
  I’m Chandana, a Master’s student in Computer Science at{" "}
  <span className="font-bold">Pennsylvania State University</span>,{" "}
  currently working as a{" "}
  <span className="font-bold">Front-End Tools Intern at Intel</span> and pursuing my research thesis on machine learning–driven scientific figure captioning (SCI-CAP).
  I bring 3 years of full-stack experience at Optum - UnitedHealth Group as a Software Engineer, and have a strong academic background focused on machine learning and full-stack development.
  <br />
  I am actively looking for{" "}
  <span className="font-bold">
    full-time software engineering or research-oriented roles where I can contribute to innovative, impactful solutions.
  </span>
        </motion.h1>
        <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
        initial={{opacity: 0, y:100}}
        animate={{opacity:1, y:0}}
        transition={{delay:0.1}}>
            <Link  href="#contact" className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'>Contact me here
            <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition'  onClick={() => {setActiveSection("Contact")
                    setTimeOfLastClick(Date.now())}}/>{" "}</Link>
            <a className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack' href="/SaiChandanaPriyaAvvaruResume.pdf" download>Download CV<HiDownload className='opacity-60 group-hover:translate-y-1 transition'/></a>
            <a className='bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full hover:text-gray-950 focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack' href="https://www.linkedin.com/in/saichandanapriya/" target="_blank">
                <BsLinkedin />
            </a>
            <a className='bg-white text-gray-700 p-4 text-[1.35rem] flex items-center gap-2 hover:text-gray-950 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack' href="https://github.com/ChandanaAvvaru" target="_blank">
                <FaGithubSquare />
            </a>
        </motion.div>
    </section>
  )
}
