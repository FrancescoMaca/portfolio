'use client'
import { motion } from "framer-motion";
import { ResumeTitle } from "./utils";
import skillsIcon from '@/public/icons/skills.json'

export default function Skills() {
  
  return (
    <div className="flex flex-col">
      <ResumeTitle icon={skillsIcon} >Skills</ResumeTitle>
      <p className="self-center w-fit mt-5 px-3 py-2 text-xxs md:text-xs bg-ligh-gray border-2 border-white rounded-lg">
        The highlighted are the ones I am currently mastering :)
      </p>
      <div className="flex flex-col mb-10">
        <div className="flex flex-col lg:flex-row mt-5">
          <div className="w-full md:px-10">
            <h2 className="px-5 my-5 md:text-s">Languages</h2>
            <Skill name="Italian" level={10} />
            <Skill name="English" level={8} />
            <Skill name="Spanish" level={4} highlight />
          </div>
          <div className="hidden lg:block w-full md:px-10">
            <h2 className="px-5 my-5 md:text-s">Programming Languages</h2>
            <Skill name="C# & C" level={8} />
            <Skill name="Java (jUnit, Gradle, Spring, JavaFX...) " level={8} />
            <Skill name="Web Dev & Related Technologies" level={9} highlight />
          </div>
          <div className="block lg:hidden w-full md:px-10">
            <h2 className="px-5 my-5 md:text-s">Soft Skills</h2>
            <SkillList>
              -Determined
              -Teamwork
              -Leadership
              -Problem Solving
              -Creativity
              -Communication
              -Adaptability
              -Time Management
              -Attention to Details
            </SkillList>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row mt-5">
          <div className="block lg:hidden w-full md:px-10">
            <h2 className="px-5 my-5 md:text-s">Programming Languages</h2>
            <Skill name="C# & C" level={8} />
            <Skill name="Java (jUnit, Gradle, Spring, JavaFX...) " level={8} />
            <Skill name="Web Dev & Related Technologies" level={9} highlight />
          </div>
          <div className="hidden lg:block w-full md:px-10">
            <h2 className="px-5 my-5 md:text-s">Soft Skills</h2>
            <SkillList>
              -Determined
              -Teamwork
              -Leadership
              -Problem Solving
              -Creativity
              -Communication
              -Adaptability
              -Time Management
              -Attention to Details
            </SkillList>
          </div>
          <div className="w-full md:px-10">
            <h2 className="px-5 my-5 md:text-s">Tools & Softwares</h2>
            <SkillList>
              -Redux
              -React (Js & Ts)
              -NextJS
              -Tailwind CCS
              -Git
              -Firebase
              -Linux
              -Regex
              -Docker
            </SkillList>
          </div>
        </div>
      </div>
    </div>
  )
}

function Skill({name, level, highlight}: {name: string, level: number, highlight?: boolean}) {

  const initialState = highlight ? {
    width: 0, backgroundPosition: `0% 0%`, backgroundSize: '300%',
    backgroundImage: 'linear-gradient(to right, #ff0000, #ecff00, #ffbd00, #ff0000)' 
  } : {
    width: 0
  }
  return (
    <div className="text-xxs my-2">
      <div className="">{name}</div>
      <div className="w-full h-6 border-2 border-black rounded-lg">
        <motion.div className={`h-full bg-light-gray rounded-lg`}
          initial={initialState}
          animate={{
            backgroundPosition: "300% 0%",
            transition: {
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }
          }}
          whileInView={{ width: `${level * 10}%`, transition: { duration: 1.5, delay: Math.random() * 1.5, type: 'spring', stiffness: 100, damping: 20 } }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  )
}

function SkillList({children}: {children: React.ReactNode}) {
  
  const skills = children.toString().split('-').slice(1)
    
  return (
    <ul className=" list-inside list-disc">
      {
        skills.map((skill, i) => {
          return (
            <li key={i} className="text-xxs md:text-xs my-1">
              {skill.trim()}
            </li>
          )
        })
      }
    </ul>
  )
}