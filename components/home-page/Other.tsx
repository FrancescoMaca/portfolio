'use client'

import { motion } from "framer-motion"

export default function Other() {
  return (
    <div className="text-white pb-16 lg:pb-20 md:mt-10">
      <h2 className="text-center text-xs lg:text-s md:pb-5">You can find me on the different socials</h2>
      <div className="relative flex justify-center gap-10 my-5">
        <a href="https://www.instagram.com/franky_maca/" target="_blank">
          <img src="/svg/socials/instagram.svg" alt="instagram logo" width={64} height={64}  title="Instagram Icon"/>
        </a>
        <a href="https://github.com/FrancescoMaca/" target="_blank">
          <img src="/svg/socials/github.svg" alt="github logo" width={64} height={64}  title="GitHub Icon"/>
        </a>
        <a href="https://leetcode.com/FrankyMaca/" target="_blank">
          <img src="/svg/socials/leetcode.svg" alt=" logo" width={64} height={64}  title="LeetCode Icon"/>
        </a>
      </div>
      <p className="text-center md:text-xs">
        I am currently grinding on challenges on
        <motion.span className="text-transparent bg-clip-text pl-1"
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
        >LeetCode</motion.span>
        , so it will be a while before it gets interesting :)
      </p>
    </div>
  )
}