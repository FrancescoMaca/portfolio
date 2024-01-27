import { Player } from "@lordicon/react";
import { useRef } from "react";
import { motion } from "framer-motion";

export function ResumeTitle({icon, children}: {icon: any, children: React.ReactNode}) {
  const iconRef = useRef<Player>(null)

  return (
    <div className="flex justify-center w-full py-3 my-2 border-y-2 border-white">
      <motion.h3 className="flex items-center justify-center text-center text-s md:text-m"
        onHoverStart={() => iconRef.current?.playFromBeginning()}
      >
        <span className="pr-2">{children}</span>
        <Player ref={iconRef} icon={icon} size={40} />
      </motion.h3>
    </div>
  )
}