'use client'
import { motion, useAnimation } from "framer-motion";

export default function History() {

  return (
    <div id="about-me" className="relative flex flex-col self-center w-full max-w-7xl md:mx-5 lg:mx-10 mt-5 lg:mt-20 text-white bg-gray rounded-3xl p-5">
      <h3 className="py-10 text-center text-s lg:text-m">MY JOURNEY</h3>
      <TimelineEntry year={2017}>
        I started my journey with game development, using mainly C# with Unity 2D, and C++
      </TimelineEntry>
      <TimelineEntry year={2018}>
        This year I halted school and spent one year mastering my knowledge about <TextInfo description="Data Structure and Algorithm">DSA</TextInfo> and hardware technologies
      </TimelineEntry>
      <TimelineEntry year={2020}>
        I was enrolled in an IT institute and continued my studies in Java as well as C
      </TimelineEntry>
      <TimelineEntry year={2022}>
        Moved to Florida and started my <TextInfo description="Associate Degree">AA Degree</TextInfo>. I also started web development with core technologies
      </TimelineEntry>
      <TimelineEntry year={2023} isLast>
        Learned React, Tailwind and softwares for automatic deployment such as Docker
      </TimelineEntry>
    </div>
  )
}

function TimelineEntry({year, children, isLast}: {year: number, children: React.ReactNode, isLast?: boolean}) {

  return (
    <div className="relative flex">
      <div className={`absolute top-0 left-9 w-1 h-full bg-dark ${isLast ? 'hidden' : ''}`}/>
      <motion.div className="relative px-2 pt-1 h-fit bg-dark rounded-lg z-10">
        <span className="text-s ">{year}</span>
      </motion.div>
      <div className="p-5 pt-0 pb-16 text-xs md:text-s">
        {children}
      </div>
    </div>
  )
}

function TextInfo({children, description}: {children: React.ReactNode, description: string}) {

  const descControls = useAnimation()
  
  return (
    <motion.div className="relative inline-block text-transparent bg-clip-text"
      initial={{ backgroundPosition: "0% 0%", backgroundSize: '300%',
        backgroundImage: 'linear-gradient(to right, #ff0000, #ecff00, #ffbd00, #ff0000)' 
      }}
      animate={{
        backgroundPosition: "300% 0%",
        transition: {
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }
      }}
      onMouseEnter={() => descControls.start({ opacity: 1 })}
      onMouseLeave={() => descControls.start({ opacity: 0 })}
    >
      <motion.div className="absolute text-center bottom-full right-0 w-52 p-2 h-fit text-white text-xs rounded-xl bg-dark opacity-0"
        style={{
          borderImage: 'linear-gradient(to right, #ff0000, #ecff00, #ffbd00, #ff0000)',
          borderWidth: 2, borderImageSlice: 1, borderImageWidth: 2
        }}
        initial={{
          borderRadius: 10,
        }}
        animate={descControls}
      >
        {description}
      </motion.div>
      <span>{children}</span>
    </motion.div>
  )
}