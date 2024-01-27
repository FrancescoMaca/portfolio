'use client'
import Certifications from "@/components/resume-page/Certifications";
import Courses from "@/components/resume-page/Courses";
import Head from "@/components/resume-page/Head";
import Skills from "@/components/resume-page/Skills";
import Work from "@/components/resume-page/Work";
import { ResumeTitle } from "@/components/resume-page/utils";
import { motion } from "framer-motion";
import Link from "next/link";

import projectIcon from '@/public/icons/projects.json'

export default function ResumePage() {
  return (
    <div className="mt-16 text-white px-5 h-fit pb-20">
      <Head />
      <Work />
      <Skills />
      <div className="flex flex-col">
        <ResumeTitle icon={projectIcon}>Projects</ResumeTitle>
        <p className="my-5 text-center md:text-xs">
          In the .pdf version of my resume you can find a list of all the projects I have worked on, including the ones I am currently working on. <br/>
        </p>
        <span className="self-center md:text-xs mb-5">If you want to check out my projects, click <Link className="underline" href="/showcase">here</Link></span>
      </div>
      <Courses />
      <Certifications />
      <div className="flex flex-col">
        <p className="my-5 md:text-xs">
          All certifications are available on request. <br/>
          To download the .pdf version of my resume, click the button below.
        </p>
        <div className="flex justify-center items-center text-black">
        <motion.div className="w-fit px-2 py-1 my-3 border-b-4 bg-light-gray rounded-lg"
          whileHover={{
            translateY: '5px',
            borderColor: '#222',
            transition: { duration: 0.5, stiffness: 100, damping: 10}
          }}
        >
          <Link href={"/documents/Francesco Macaluso - Resume.pdf"}><span>Download .pdf</span></Link>
        </motion.div>
        </div>
      </div>
    </div>
  )
}