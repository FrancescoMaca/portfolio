import Hero from "@/components/home-page/Hero"
import History from "@/components/home-page/History"
import Other from "@/components/home-page/Other"
import Skills from "@/components/home-page/Skills"

export default function Default() {
  return (
    <div className="flex flex-col">
      <Hero />
      <History />
      <Skills />
      <Other />
    </div>
  )
}
