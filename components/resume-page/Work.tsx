'use client'
import { ResumeTitle } from "./ResumeUtils";

type TimeSpan = {
  from: string,
  to: string
}
type ExperienceProps = {
  position: string,
  company: string,
  date: TimeSpan
}
export default function Work() {
  return (
    <div className="">
      <ResumeTitle>Work Experience</ResumeTitle>
      <Experience props={{
        position: 'Coding Teacher',
        company: 'TheCoderSchool, Sarasota FL',
        date: {
          from: 'Oct. 2022',
          to: 'Oct. 2023'
        }
      }}>
        I am a teacher at an after-school program in Sarasota, where I instruct kidsaged 7 to 18 in game development. My students start with Scratch and progress to more advanced tools like Roblox Level Editor, Unity, and robot programming as they develop their skills.
      </Experience>
      <hr className="text-light-gray my-5"/>
      <Experience props={{
        position: 'Web Developer (Internship)',
        company: 'I.T.I. Bearzi, Udine IT',
        date: {
          from: 'Nov. 2018',
          to: 'Dec. 2018'
        }
      }}>
        The school I attended allowed me to do a month-long internship as a web developer. I had the chance to work with ThreeJS and React to create a game in a web page.
      </Experience>
      <hr className="text-light-gray my-5"/>
      <Experience props={{
        position: 'Electrician (Internship)',
        company: 'DOMO 360, Tavagnacco IT',
        date: {
          from: 'Nov. 2018',
          to: 'Dec. 2018'
        }
      }}>
        During my time at school, I was given the chance to work with a local home automation company. Alongside the owners, I worked on installing automation systems throughout the region, gaining valuable experience and expanding my knowledge in this field.
      </Experience>
      <hr className="text-light-gray my-5"/>
      <Experience props={{
        position: 'Electrician (Internship)',
        company: 'FMI Impianti, Tavagnacco IT',
        date: {
          from: 'May 2018',
          to: 'Jun. 2018'
        }
      }}>
        The school I attended provided me with the chance to work as a civil electrician in my region. I had the responsibility maintain, create, and expand electrical systems. I also had the opportunity to work with air conditioning systems.      </Experience>
    </div>
  )
}

function Experience({ props, children }: { props: ExperienceProps, children: React.ReactNode }) {
  return (
    <div className="mt-5">
      <h2 className="text-xs font-bold">
        {props.position}
      </h2>
      <h3 className="text-light-gray">
        {props.company}
      </h3>
      <h4 className="text-light-gray">
        {props.date.from} - {props.date.to}
      </h4>
      <p className="mt-3">
        {children}
      </p>
    </div>
  )
}