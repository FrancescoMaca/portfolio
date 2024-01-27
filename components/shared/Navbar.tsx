'use client'
import { Player } from "@lordicon/react";
import { motion } from "framer-motion"
import Link from "next/link";
import { useRef, useState } from "react";
import mailIcon from '@/public/icons/email.json'

export default function Navbar() {

  const [isOpen, setIsOpen] = useState<boolean>(false)

  const emailRef = useRef<Player>(null)

  return (
    <div className="fixed top-0 left-[5%] md:left-[50%] md:-translate-x-1/2 w-[90%] max-w-3xl text-s rounded-b-3xl bg-light-gray z-50">
      <motion.div layout className="relative px-3 rounded-b-3xl bg-dark-white overflow-hidden"
        initial={{ height: '0px' }}
        animate={{ height: isOpen ? '430px' : '0px', transition: { duration: 0.5, stiffness: 100, damping: 10} }}
      >
        {/* Decorations */}
        <NavbarDecoration position="top-3 left-8"/>
        <NavbarDecoration position="bottom-3 right-8"/>
        <motion.div className="absolute bottom-3 left-8 p-2 bg-light-gray border-b-4 border-black rounded-lg"
          whileHover={{
            scale: 1.1,
          }}
        >
          <motion.a href={"mailto:francescomacalusobusiness@gmail.com"}
            onHoverStart={() => emailRef.current?.playFromBeginning()}
          >
            <Player ref={emailRef} icon={mailIcon} size={32} />
          </motion.a>
        </motion.div>
        <div className="flex flex-col items-center text-center">
          <NavbarButton cb={() => setIsOpen(false)} link="/">Home</NavbarButton>
          <NavbarButton cb={() => setIsOpen(false)} link="/showcase">Showcase</NavbarButton>
          <NavbarButton cb={() => setIsOpen(false)} link="/resume">Resume</NavbarButton>
          <NavbarButton cb={() => setIsOpen(false)} link="/contact-me">Contact Me</NavbarButton>
          <NavbarButton cb={() => setIsOpen(false)} link="/swondi">Swondi</NavbarButton>
        </div>
      </motion.div>
      <div className="flex justify-evenly w-full py-3"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
          <motion.img src="/svg/double-arrow-down.svg" alt="arrow down" height={16} width={16}
            animate={{
              rotate: isOpen ? 180 : 0,
              transition: { duration: 0.5, stiffness: 100, damping: 10 }        
            }}
          />
        </div>
        <div>
          <motion.img src="/svg/double-arrow-down.svg" alt="arrow down" height={16} width={16}
            animate={{
              rotate: isOpen ? 180 : 0,
              transition: { duration: 0.5, stiffness: 100, damping: 10 }        
            }}
          />
        </div>
      </div>
    </div>
  )
}

function NavbarButton({ children, link, cb }: { children: React.ReactNode, link: string, cb: () => void }) {
  return (
    <motion.div className="w-fit px-2 py-1 my-3 border-b-4 bg-light-gray rounded-lg"
      whileHover={{
        translateY: '5px',
        borderColor: '#C7C7C7',
        transition: { duration: 0.5, stiffness: 100, damping: 10}
      }}
    >
      <Link href={link} onClick={cb}><span>{children}</span></Link>
    </motion.div>
  )
}

function NavbarDecoration({position}: {position: string}) {

  const clickDown = (e: React.MouseEvent | React.TouchEvent) => {
    const source = e.target as HTMLDivElement
    source.classList.remove('border-b-4')
  }

  const clickUp = (e: React.MouseEvent | React.TouchEvent) => {
    const source = e.target as HTMLDivElement
    source.classList.add('border-b-4')
  }

  return (
    <div className={`absolute flex items-center ${position}`}>
      <div>
        <motion.div className="w-8 h-8 m-1 bg-light-gray border-b-4 border-black rounded-lg"
          onMouseDown={clickDown} onMouseUp={clickUp} onTouchStart={clickDown} onTouchEnd={clickUp}
          whileHover={{
            translateX: ['-1px', '1px', '-1px'],
            transition: { duration: 0.1, repeat: Infinity, }
          }}
        />
        <motion.div className="w-8 h-8 m-1 bg-light-gray border-b-4 border-black rounded-lg"
          onMouseDown={clickDown} onMouseUp={clickUp} onTouchStart={clickDown} onTouchEnd={clickUp}
          whileHover={{
            translateX: ['-1px', '1px', '-1px'],
            transition: { duration: 0.1, repeat: Infinity, }
          }}
        />
      </div>
      <div>
        <motion.div className="w-8 h-8 bg-light-gray border-b-4 border-black rounded-lg"
          onMouseDown={clickDown} onMouseUp={clickUp} onTouchStart={clickDown} onTouchEnd={clickUp}
          whileHover={{
            translateX: ['-1px', '1px', '-1px'],
            transition: { duration: 0.1, repeat: Infinity, }
          }}
        />
      </div>
    </div>
  )
}