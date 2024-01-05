'use client'
import { motion, useAnimation } from "framer-motion"
import { useState } from "react"
import { bake_cookie, read_cookie } from 'sfcookies'

export default function ShowcasePage() {
  return (
    <div className="text-white px-5 min-h-screen">
      <h1 className="uppercase text-s my-16">My Showcase</h1>
      <div className="flex flex-col md:grid md:grid-cols-2 xl:grid-cols-3 gap-10">
        <Project name="EasyDiscord" img="/projects/easy-discord.webp" link="https://github.com/FrancescoMaca/Easy-Discord">
          EasyDiscord is an extention of Discord that will allow a user to create servers and bots fast and easily.
        </Project>
        <Project name="Cassius Disadventures" img="/projects/cassius.webp" link="https://github.com/FrancescoMaca/Le-Sventure-di-Cassius">
          Game engine created as a school project. Due to the limited time, we couldn't include all the features we wanted.
        </Project>
        <Project name="Maestrale's Restaurant" img="/projects/maestrales.webp" link="https://maestralerestaurant.com">
          The official website for Maestrale's Restaurant in Sarasota, FL.
        </Project>
        <EmptyProject />
        <div className="flex justify-center items-center">
          <button className="flex items-center py-3 px-4 text-xs text-black border-4 border-dark-white bg-light-gray rounded-full">
            <span>View More on</span>
            <span className="inline-block pl-2">
              <img src="/projects/github-button.svg" alt="github logo" width={32} />
            </span>
          </button>
        </div>
      </div>
      <h2 className="uppercase text-s my-16">Upcoming</h2>
      <div className="flex flex-col md:grid md:grid-cols-2 xl:grid-cols-3 gap-10 pb-20">
        <Project name="BookItNow" img="/projects/bookitnow.webp" link="https://github.com/Swondi/BookItNow">
          Streamline restaurant reservations, save costs, and enhance the guest experience with BookItNow—an intuitive and affordable reservation API.
        </Project>
        <Project name="Finance App" img="/projects/finance.webp" link="#">
          This is also a project that I wanted to do in order to manage my own expenses.
        </Project>
        <Project name="E-Commerce" img="/projects/maestrales.webp" link="#">
          I wanted to practice my skills with React and Next.js, so I decided to create an e-commerce website.
        </Project>
      </div>
    </div>
  )
}

function Project({name, img, link, children}: {name: string, img: string, link: string, children: React.ReactNode}) {

  const cookie = read_cookie(name)
  const [isFav, setFav] = useState<boolean>(cookie.length !== 0 ? JSON.parse(cookie as string).value : false)
  const favControls = useAnimation()
  const linkControls = useAnimation()

  const toggleFav = (_: React.MouseEvent) => {
    setFav(!isFav)
    favControls.start({
      translateY: ['0px', '5px', '0px'],
      transition: { duration: 0.2, stiffness: 100, damping: 10 }
    })

    bake_cookie(name, JSON.stringify({value: !isFav}))
  }

  const clickEffect = (_: React.MouseEvent) => {
    
    window.open(link, '_blank')

    linkControls.start({
      translateY: ['0px', '5px', '0px'],
      transition: { duration: 0.2, stiffness: 100, damping: 10 }
    })
  }

  return (
    <div className="relative flex flex-col justify-between w-full border-2 border-white rounded-xl p-5 md:p-10">
      {/* Blur border */}
      <div className="absolute top-0 left-0 w-full h-full border-2 border-white rounded-xl blur-md"/>
      <div>
        <h2 className="w-fit text-xs md:text-s">
          {name}
        </h2>
        <p className="md:text-xs my-5">
          {children}
        </p>
      </div>
      <div className="flex justify-between">
        <div className="relative flex justify-between z-0">
          <img src={img} alt="project image" className="absolute w-[96px] h-[96px] lg:w-[128px] lg:h-[128px] top-0 left-0 blur-xl rounded-xl -z-10"/>
          <img src={img} alt="project image" width={96} height={96} className="rounded-xl"/>
        </div>
        <div className="flex gap-5">
          <motion.button className="relative self-end px-2 py-1 border-2 border-b-4 border-white rounded-lg z-10" onClick={toggleFav} animate={favControls}>
            <motion.img src={`/svg/heart${isFav ? '-fill': ''}.svg`} alt="favourite icon"
              animate={{ scale: isFav ? [1.2, 1.4, 1.2, 1] : 1, transition: { duration: 0.5, stiffness: 100, damping: 10}}}
            />
            <img className={`absolute top-0 left-0 w-full h-full blur-md ${isFav ? '' : 'hidden'}`} src="/svg/heart-fill.svg" alt="github link" />
          </motion.button>
          <motion.button className="relative self-end px-2 py-1 border-2 border-b-4 border-white rounded-lg cursor-pointer z-10"
            onClick={clickEffect}
            animate={linkControls}
          >
            <img src="/svg/github.svg" alt="github link" />
          </motion.button>
        </div>
      </div>
    </div>
  )
}

function EmptyProject() {
  return (
    <div>

    </div>
  )
}