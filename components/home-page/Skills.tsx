'use client'
import { motion, useAnimation } from "framer-motion"
import { useState } from "react"

export default function Skills() {
  return (
    <div className="flex flex-col self-center font-text text-white px-5 mt-20">
      <h3 className="text-s">These are the things I know...</h3>
      <div className="self-center grid grid-cols-4 md:grid-cols-7 lg:grid-cols-10 gap-10 my-10">
        <div className="flex items-center justify-center">
          <IconSkill img="langs/react.svg" name="React"/>
        </div>
        <div className="flex items-center justify-center">
          <IconSkill img="langs/tailwind.svg" name="Tailwind"/>
        </div>
        <div className="flex items-center justify-center">
          <IconSkill img="langs/framer.svg" name="Framer"/>
        </div>
        <div className="flex items-center justify-center">
          <IconSkill img="langs/c++.svg" name="C++"/>
        </div>
        <div className="flex items-center justify-center">
          <IconSkill img="langs/java.svg" name="Java"/>
        </div>
        <div className="flex items-center justify-center">
          <IconSkill img="langs/c-sharp.svg" name="C#"/>
        </div>
        <div className="flex items-center justify-center">
          <IconSkill img="softwares/figma.svg" name="Figma"/>
        </div>
        <div className="flex items-center justify-center">
          <IconSkill img="softwares/illustrator.svg" name="Illustrator"/>
        </div>
        <div className="flex items-center justify-center">
          <IconSkill img="softwares/git.svg" name="Git"/>
        </div>
        <div className="flex items-center justify-center">
          <IconSkill img="softwares/docker.svg" name="Docker"/>
        </div>
      </div>
      <h3 className="text-right text-s">...and I&apos;m planning to study</h3>
      <div className="grid grid-cols-4 gap-4 my-10">
        <div></div>
        <div className="flex items-center justify-center">
          <IconSkill img="upcoming/rust.svg" name="Rust"/>
        </div>
        <div className="flex items-center justify-center">
          <IconSkill img="upcoming/swift.svg" name="Swift"/>
        </div>
        <div></div>
      </div>
    </div>
  )
}

function IconSkill({ img, name }: {img: string, name: string}) {

  const rotateAnimation = name === "React" ? {
    rotate: [0, 360],
    transition: {
      duration: 6,
      ease: 'linear',
      repeat: Infinity
    }
  } : {}

  const [opacity, setOpacity] = useState<number>(0)

  return (
    <div className="flex flex-col min-w-fit"
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
    >
      <div className="relative overflow-visible hover:scale-105">
        <motion.img src={`/svg/${img}`} alt="language icon" width={64} height={64} title="Language Icon"
          animate={rotateAnimation}
        />
        <img className={`absolute top-0 left-0 blur-lg -z-10`} title="Language Icon"
          src={`/svg/${img}`} alt="language icon" width={64} height={64}
        />
      </div>
      <motion.span className="text-center pt-3"
        animate={{ opacity: opacity, transition: { duration: .5 }}}
      >
        {name}
      </motion.span>
    </div>
  )
}