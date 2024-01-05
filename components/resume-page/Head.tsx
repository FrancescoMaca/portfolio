'use client'
import { motion } from "framer-motion";


export default function ResumeHead() {

  return (
    <div className="flex flex-col items-center">
      <div className="w-fit">
        <motion.img src="/pictures/resume-picture.webp" alt="profile picture" className="rounded-full border-2 border-white" width={256} height={256} />
      </div>
      <h1 className="text-s md:text-m mt-5">Francesco Macaluso</h1>
      <h1 className="text-xs md:text-s">Frontend Developer & Student</h1>
      <div className="grid grid-cols-2 gap-5 text-xs my-10">
        <Link color="linear-gradient(to top, #0077B5, #0077B5)">Linked-In</Link>
        <Link delay={.5} color="linear-gradient(45deg, #6e5494, #4078c0)">GitHub</Link>
        <Link delay={1} color="linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)">Instagram</Link>
        <Link delay={1.5} color="linear-gradient(to top, #7289da,#7289da)">Discord</Link>
      </div>
    </div>
  )
}


function Link({ color, delay = 0, children }: { color: string, delay?: number, children: React.ReactNode }) {
  
  return (
    <motion.span className="px-3 py-2 rounded-xl border-2 border-b-4 border-white md:text-s text-transparent bg-clip-text"
      style={{ backgroundImage: `${color}`}}
      initial={{ opacity: 0, translateX: -20 }}
      whileHover={{
        translateY: '5px',
        transition: { duration: 0.5, stiffness: 100, damping: 10}
      }}
      whileInView={{
        opacity: 1,
        translateX: 0,
        transition: { duration: 1, delay: delay, ease: "easeInOut" }
      }}
      viewport={{ once: true }}
    >
        {children}
    </motion.span>
  )
}