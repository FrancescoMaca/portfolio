import { motion } from "framer-motion";


export default function Hero() {

  return (
    <div className="mt-16 text-white">
      <h1 className="uppercase text-center text-s">
        Hello, I'm Francesco
      </h1>
      <h2 className="text-center text-xs">
        Frontend Engineer - Student
      </h2>
      <div className="mt-8">
        <img src="/illustration/me.webp" alt="hero image" />
      </div>
      <div className="flex justify-center my-4 text-black">
        <div className="text-xs w-fit px-2 py-1 bg-light-gray rounded-xl border-b-4 border-black">
          Get to know me!
        </div>
      </div>
    </div>
  )
}