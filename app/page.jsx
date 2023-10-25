"use client";
import ProjectCard from "@/components/main/ProjectCard";
import React, { useState } from "react";
import { AiFillHtml5, AiFillInstagram, AiFillLinkedin, AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineEllipsis } from 'react-icons/ai';
import { RiTwitterXFill } from 'react-icons/ri'
import { BiLogoCss3, BiLogoDjango, BiLogoFigma, BiLogoJavascript, BiLogoMongodb, BiLogoPython, BiLogoReact } from 'react-icons/bi'
import { SiExpress } from 'react-icons/si'
import { DiNodejs } from 'react-icons/di'
import { Button } from "@/components/ui/button";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <main>
      <nav className="flex justify-between px-10 pt-5 items-center">
        <h1 className=" md:text-3xl  font-semibold uppercase">Sk hazrath
          <div className=" h-1 w-24 bg-black"></div>
        </h1>
      </nav>
      {/* hero section */}
      <section className="flex justify-around flex-col-reverse md:flex-row px-16 items-center h-screen">
        <div className="md:w-1/2 line space-y-5">
          <h1 className=" font-extrabold  md:text-7xl ">Hey,  i’m  Developer.</h1>
          <p className=" md:w-3/4  text-textmain md:text-xl">Web Developer with a Passion for Pixels and a Curious AI Mind, crafting digital experiences and exploring the future of AI, one code at a time. 🌐🤖🚀</p>
          <Button>My Resume</Button>
        </div>
        <img className="w-full md:w-1/2 lg:w-1/4 rounded-md" src="heroimage.jpeg" alt="Your Image" />
      </section>
      {/* projects  */}
      <section className="px-10 pt-5">
        <h1 className=" text-3xl  font-semibold uppercase">Projects
          <div className=" h-1 w-24 bg-black"></div>
        </h1>
        <div className="m-10 grid grid-cols-1 md:grid-cols-4 gap-4 ">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </section>
      {/* about  */}
      <section className="px-10 pt-5">
        <h1 className=" text-3xl  font-semibold uppercase">About
          <div className=" h-1 w-16 bg-black"></div>
        </h1>
        <p className="md:p-10 p-2 font-medium text-lg">
          Welcome to my portfolio website! I'm Hazrath, a dynamic full-stack developer with extensive experience in Python (Django), JavaScript (React, React Native, Express, Node.js, and MongoDB), and Figma design.
          I have a passion for building high-performing applications, both large and small, and thrive on solving complex problems for my clients. As a tech enthusiast, I'm on an exciting journey of continuous learning, with a keen interest in the fascinating world of artificial intelligence (AI) and its potential to revolutionize the digital landscape.
          I stay at the forefront of the latest technologies, design trends, and AI developments, constantly expanding my knowledge and skillset to deliver cutting-edge solutions. In addition to my programming expertise, I'm also skilled in using Figma to create beautiful, intuitive designs that prioritize user experience.
          Please explore my portfolio to view my latest work and get in touch if you're interested in collaborating on a project, whether it's web development, mobile apps, or an AI-driven innovation. I look forward to hearing from you!
        </p>
<div className="flex items-center gap-4">
<h1 className=" text-lg font-semibold">Languages Frame-works and Tools i know
        </h1>
        <AiOutlineArrowRight/>
</div>
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-15 gap-2 m-4">
          <AiFillHtml5 size={40} />
          <BiLogoCss3 size={40} />
          <BiLogoJavascript size={40} />
          <BiLogoFigma size={40} />
          <BiLogoMongodb size={40} />
          <SiExpress size={40} />
          <BiLogoReact size={40} />
          <DiNodejs size={40} />
          <BiLogoPython size={40} />
          <BiLogoDjango size={40} />
        </div>
      </section>
      <hr className="m-10" />
      <h1 className=" font-light text-sm text-center p-4 ">Thank you for visiting my portfolio</h1>
      <div className="fixed right-0 top-1/3 z-50 bg-transparent flex flex-col space-y-1">
        <AiOutlineEllipsis size={25} />
        <AiFillInstagram size={25} />
        <AiOutlineEllipsis size={25} />
        <AiFillLinkedin size={25} />
        <AiOutlineEllipsis size={25} />
        <RiTwitterXFill size={25} />
        <AiOutlineEllipsis size={25} />
      </div>
    </main>
  )
}
