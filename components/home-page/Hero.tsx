'use client'
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
        <img src="/illustration/me.svg" alt="hero image" />
      </div>
      <div className="flex justify-center my-4 text-black">
        <button className="text-xs w-fit px-2 py-1 bg-light-gray rounded-xl border-b-4 border-black hover:translate-y-1 hover:border-dark"
          onClick={() => document.getElementById("about-me").scrollIntoView({ behavior: "smooth"})}
        >
          Get to know me!
        </button>
      </div>
    </div>
  )
}