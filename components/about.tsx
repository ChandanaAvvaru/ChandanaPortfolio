"use client"
import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'

export default function About() {
  const {ref} = useSectionInView('About', 0.5)

//   const{ref, inView} = useInView({threshold:0.75})
//   const {setActiveSection, timeOfLastClick} = useActiveSectionContext()

//  useEffect(() =>{
//   if(inView && Date.now()-timeOfLastClick >1000){
//     setActiveSection("About")
//   }
//  },[inView, setActiveSection, timeOfLastClick ])
  return (
    <motion.section ref={ref} className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28' initial={{opacity: 0, y:100}} animate={{opacity:1, y:0}} transition={{delay:0.175}} id="about">
        <SectionHeading>About me</SectionHeading>
        <p className="mb-3">
        {/* After graduating with a degree in{" "}
        <span className="font-medium">Accounting</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
      <p>
        <span className="italic">When I am not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I am also
        learning how to play the guitar. */}

A dedicated, self-reliant woman with a passion to learn new things who is prepared to contribute to technology. Being the first-generation child in my family, I have struggled to get to where I am now. I went to Penn State to get a broader perspective on technology and to learn about the world outside of my comfort zone. I worked with Optum for three years, which gave me experience in technology and helped me understand the needs of the sector. Seeing anything on the screen astounds me and piques my curiosity about creating more of the same. Learning about new technologies would be wonderful. 

<span>If anything has to do with healthcare, I am more likely to be interested in it because I enjoy helping others by making their lives simpler. Additionally, because I would like to work on ML-related projects, I have designated ML as my concentration at Penn State. </span>

<span>When I am not working, I like to spend time with my family by chatting to them or going on trips. I am always ready for an adventure and I love to travel the world.</span>
      </p>
    </motion.section>
  )
}
