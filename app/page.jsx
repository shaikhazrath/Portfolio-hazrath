"use client";
import ProjectCard from "@/components/main/ProjectCard";
import React, { useEffect, useState } from "react";
import {
  AiFillHtml5,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineEllipsis
} from 'react-icons/ai';
import { RiTwitterXFill } from 'react-icons/ri'
import {
  BiLogoCss3,
  BiLogoDjango,
  BiLogoFigma,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoPython,
  BiLogoReact
} from 'react-icons/bi'
import { SiExpress } from 'react-icons/si'
import { DiNodejs } from 'react-icons/di'
import { Button } from "@/components/ui/button";
import { Client, Databases } from "appwrite";



export default function Home() {
  const [data, setData] = useState()
  const client = new Client();

  const databases = new Databases(client);

  client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('653a72aebcbe98687a11') // Your project ID
    ;
  useEffect(() => {
    const getData = async () => {
      const promise = await databases.listDocuments('653a72facfce6dd28c1d', '653a73174e8bf756313d');
      setData(promise.documents)
    }
    getData()


  }, [])


  return (
    <main>
      <nav className="flex justify-between px-4 md:px-10 py-4 md:pt-5 items-center">
        <h1 className="md:text-3xl font-semibold uppercase">Sk hazrath</h1>
      </nav>
      {/* hero section */}
      <section className="px-4 md:px-16 py-4 md:pt-5">
        <div className="flex flex-col md:flex-row items-center">
          <img className="w-full md:w-1/2 lg:w-1/4 rounded-md mb-4 md:mb-0" src="heroimage.jpeg" alt="Your Image" />
          <div className="md:w-1/2 md:pl-8 space-y-4">
            <h1 className="font-extrabold text-4xl md:text-7xl">Hey, I'm a Developer.</h1>
            <p className="text-textmain text-lg md:text-xl">Web Developer with a Passion for Pixels and a Curious AI Mind, crafting digital experiences and exploring the future of AI, one code at a time. 🌐🤖🚀</p>
            <Button>My Resume</Button>
          </div>
        </div>
      </section>
      {/* projects */}
      <section className="px-4 md:px-10 py-4 md:pt-5">
        <h1 className="text-3xl font-semibold uppercase">Projects</h1>
   <div className='flex  justify-around '> 
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-28'>
          {data ? (
              {data.map((item) => (
              <
                <ProjectCard key={item.$id} p={item} />
              ))}
          ) : (
            <p>Loading.....</p>
          )}
        </div>
        </div>
                
      </section>
      {/* about */}
      <section className="px-4 md:px-10 py-4 md:pt-5">
        <h1 className="text-3xl font-semibold uppercase">About</h1>
        <p className="font-medium text-lg pt-5 pb-4">
          I'm Hazrath, a dynamic full-stack developer with extensive experience in Python (Django), JavaScript (React, React Native, Express, Node.js, and MongoDB), and Figma design.
          I have a passion for building high-performing applications, both large and small, and thrive on solving complex problems for my clients. As a tech enthusiast, I'm on an exciting journey of continuous learning, with a keen interest in the fascinating world of artificial intelligence (AI) and its potential to revolutionize the digital landscape.
          I stay at the forefront of the latest technologies, design trends, and AI developments, constantly expanding my knowledge and skillset to deliver cutting-edge solutions. In addition to my programming expertise, I'm also skilled in using Figma to create beautiful, intuitive designs that prioritize user experience.
          Please explore my portfolio to view my latest work and get in touch if you're interested in collaborating on a project, whether it's web development, mobile apps, or an AI-driven innovation. I look forward to hearing from you!
        </p>

        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-8 gap-2 pt-4 pb-4">
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
      <hr className="my-4 md:my-10" />
      <div className="flex items-center pb-3 flex-col md:flex-row justify-center gap-2">
        <h1 className="font-light text-sm text-center p-4">Thank you for visiting my portfolio connect with me through
        </h1>
        <div className="flex gap-4">
        <a href="https://www.instagram.com/shaik.hazrath.ali/">
          <AiFillInstagram size={20} />
        </a>
        <a href="https://www.linkedin.com/in/shaik-hazrath-856349253/">
          <AiFillLinkedin size={20} />
        </a>
        <a href="https://twitter.com/shaikhazrathali">
          <RiTwitterXFill size={20} />
        </a>
        </div>
     
      </div>



      <div className="fixed right-0 top-1/3 z-50 bg-transparent flex flex-col space-y-1">
        <AiOutlineEllipsis size={25} />
        <a href="https://www.instagram.com/shaik.hazrath.ali/">
          <AiFillInstagram size={25} />
        </a>
        <AiOutlineEllipsis size={25} />
        <a href="https://www.linkedin.com/in/shaik-hazrath-856349253/">
          <AiFillLinkedin size={25} />
        </a>
        <AiOutlineEllipsis size={25} />
        <a href="https://twitter.com/shaikhazrathali">
          <RiTwitterXFill size={25} />
        </a>
        <AiOutlineEllipsis size={25} />
      </div>
    </main>
  )
}
