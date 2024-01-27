import LordIcon from "@/app/LordIcon";
import { motion } from "framer-motion";
import React from "react";

export function ResumeTitle({icon, children, state}: {icon: any, children: React.ReactNode, state?: string}) {
  return (
    <div className="flex justify-center w-full py-3 my-2 border-y-2 border-white">
      <motion.h3 className="flex items-center justify-center text-center text-s md:text-m"
        // onHoverStart={() => iconRef.current?.playFromBeginning()}
      >
        <span className="pr-2">{children}</span>
        <LordIcon size={40} data={icon} state={state} />
        {/* <Player ref={iconRef} icon={icon} size={40} /> */}
      </motion.h3>
    </div>
  )
}