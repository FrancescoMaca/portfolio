'use client'
import { motion } from "framer-motion"
import Link from "next/link"

export default function SwondiPage() {
  return (
    <div className="relative flex flex-col h-screen pt-16 px-5 text-white overflow-hidden">
      <Background />
      <h1 className="text-center text-s md:text-m whitespace-nowrap">— Swondi —</h1>
      <div className="self-center flex flex-col mt-10 w-full max-w-5xl">
        <div className="flex justify-center my-10">
          <img src="/svg/swondi/logo.svg" alt="swondi icon" width={128} height={128} />
        </div>
        <hr />
        <p className="text-xxs md:text-xs py-5">
          In august 2023 I founded a company called Swondi. My goal is to make Swondi innovate the field of
          web development, allowing anyone to create a website that is esthetically good and in a short amount of time.
          I'm not going to write the usual "we are the best" or "we are the fastest" because I don't want to be like
          all the other companies out there. I will say though, that I am going to innovate the web development field.
        </p>
        <hr />
        <motion.button className="self-center p-2 mt-5 text-black text-xs bg-light-gray border-b-4 border-black rounded-lg"
          whileHover={{
            translateY: '5px'
          }}
        >
          <Link href="https://swondi.com" className="flex items-center justify-center">
            Visit Swondi
          </Link>
        </motion.button>
      </div>
      
    </div>
  )
}

function Background() {
  
  const particleColors = ['#583C87', '#E45A84', '#FFACAC'];
  const particleSize = 20;
  const animationDuration = '6s';
  const amount = 20;

  const getRandomValue = (max: number) => Math.floor(Math.random() * max);
  const getRandomColor = () => particleColors[getRandomValue(particleColors.length)];

  const particles = [...Array(amount)].map((_, index) => (
    <motion.span
      key={index}
      className={`absolute w-20 h-20 rounded-full blur-3xl`}
      style={{
        backgroundColor: getRandomColor(),
        top: `${getRandomValue(100)}%`,
        left: `${getRandomValue(100)}%`,
        animationDuration: `${(getRandomValue(60) / 10) * 1}s, ${animationDuration}`,
        animationDelay: `-${(getRandomValue(70) / 10) * 1}s`,
        transformOrigin: `${getRandomValue(50) - 25}vw ${getRandomValue(50) - 25}vh`,
        boxShadow: `${particleSize * 2 * (Math.random() > 0.5 ? -1 : 1)} 0 ${(Math.random() + 0.5) * particleSize * 0.5} currentColor`,
      }}
      initial={{
        opacity: 0,
        transform: 'translate3d(0, 0, 1px) rotate(0deg)',
      }}
      animate={{
        opacity: 1,
        transform: 'translate3d(0, 0, 1px) rotate(360deg)',
      }}
      transition={{
        duration: parseFloat(animationDuration),
        ease: 'linear',
        repeat: Infinity,
      }}
    />
  ));

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
      {particles}
    </div>
  )
}