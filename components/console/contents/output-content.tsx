'use client'
import { clearLogs } from "@/components/redux/slices/console-slice";
import { ConsoleLogger } from "@/components/utils/console-logger";
import Image from "next/image";
import { useDispatch } from "react-redux";

export default function OutputContent() {
  const dispatch = useDispatch()

  return (
    <div className="relative h-full overflow-hidden text-xs md:text-sm">
      <ConsoleLogger />
      <button className="absolute p-1 top-4 right-4 bg-dark hover:bg-hover-dark rounded-md"
        onClick={() => dispatch(clearLogs())}
      >
        <Image src="/svg/ide/trash.svg" alt="Trashbin Icon" title="" width={20} height={20} />
      </button>
    </div>
  )
}