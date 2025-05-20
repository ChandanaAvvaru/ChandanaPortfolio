import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import wordanalyticsImg from "@/public/wordanalytics.png";
import qualityOfleaf from "@/public/qualityOfleaf.jpeg"
import NST from "@/public/NST.png"
import optumRx from "@/public/optumRx.jpg"
import CrowdAI from "@/public/CrowdAI.png" 

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor's",
    location: "India, Vijayawada",
    description:
      "I have graduated with bachelor's degree in computer science from PVPSIT, learned all topics required and got industry ready.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Software Engineer",
    location: "India, Hyderabad",
    description:
      "I worked as a Software Engineer for 3 years at Optum, where my work was mainly focused on front-end development and at times devops and backend.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2023",
  },
  {
    title: "Master's",
    location: "United States, State College",
    description:
      "Currently I am pursuing master's in computer science at penn state university, where my concentration is on Machine Learning, Full Stack Development.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - present",
  },
   {
    title: "Front-End Tools Intern",
    location: "United States, Austin, Texas",
    description:
      "At Intel, I'm developing an automated emulation dashboard using GitHub APIs to dynamically display repository information in a clean and customizable format.",
    icon: React.createElement(CgWorkAlt),
    date: "2025 - present",
  }
] as const;

export const projectsData = [
  {
    title: "SCI-CAP",
    description:
      "I am developing and deploying a machine learning model that generates captions for scientific figures. This project includes leveraging LLMS and full stack development.", 
    tags: ["Machine Learning", "Azure Cloud", "Full Stack Development"],
    imageUrl: CrowdAI,
  },
  {
    title: "Member Portal - Optum",
    description:
      "I worked as a full-stack developer on this project for 3 years. People in US use this website to manage their medical finances",
    tags: ["React", "Next.js", "CosmosDB", "Storybook", "Node.js"],
    imageUrl: optumRx,
  },
  {
    title: "Detection of Qualiy of Leaf",
    description:
      "Using this model we can find the melady in the leaf which can be helpful to farmers that can help them in using the appropriate medicine.",
    tags: ["Python", "Numpy", "keras", "Pandas"],
    imageUrl: qualityOfleaf,
  },
  {
    title: "Neural Style Transfer",
    description:
      "Using this model one can apply any style to a normal image making style transfer easier",
    tags: ["Python", "Tensorflow", "Pytorch"],
    imageUrl: NST,
  },
] as const;

export const skillsData = [
  "C",
  "Java",
  "Python",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Angular.js", 
  "Spring",
  "Material UI", 
  "Storybook", 
  "HTML" ,
  "CSS",
  "Git",
  "GitHub", 
  "Docker",
  "Tailwind",
  "MongoDB",
  "MySQL",
  "Cosmos DB",
  "Redux",
  "GraphQL",
  "Express",
  "Framer Motion",
  "Visual Studio", 
  "Postman",
  "Android Studio",
  "Jest",
  "Cucumber",
  "Cypress", 
  "Accelq",
  "Azure",
  "Scrum",
  "Rally"
 
] as const;