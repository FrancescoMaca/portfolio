import React from "react"
import { ResumeTitle } from "./utils"
import coursesIcon from '@/public/icons/courses.json'

export default function Couses() {

  return (
    <div>
      <ResumeTitle icon={coursesIcon} state="hover-closed">Courses</ResumeTitle>
      <ul className="my-10 md:text-xs">
        <Course type="In-Class">UX/UI Design <span className="text-light-gray">(offered by SCF)</span></Course>
        <Course type="In-Class">Android Development Course <span className="text-light-gray">(20 hours)</span></Course>
        <Course type="In-Class">Data Abaktsus Course <span className="text-light-gray">(20 hours)</span></Course>
        <Course type="In-Class">Game Development Course with C++ <span className="text-light-gray">(10 hours)</span></Course>
        <Course type="Online">LUISS preparation Course for IOI</Course>
        <Course type="Online">CS50&apos;s Introduction to Computer Science <span className="text-light-gray">(10 weeks)</span></Course>
      </ul>
    </div>
  )
}

function Course({type, children}: {type: string, children: React.ReactNode}) {
  return (
    <li className="flex text-xxs my-3">
      <span className="w-fit text-light-gray whitespace-nowrap">{type}</span>
      <span className="px-2">&bull;</span>
      <span className="">{children}</span>
    </li>
  )
}