import { ResumeTitle } from "./utils"


export default function Certifications() {
  return (
    <div className="my-10">
      <ResumeTitle icon="resume-certificate.svg">
        Certifications
      </ResumeTitle>
      <ul className="list-inside list-disc">
        <Certification>MikroTik Certified Network Associate (MTCNA)</Certification>
        <Certification>UX/UI Design Course Certification</Certification>
        <Certification>HTML/CSS Course Certification</Certification>
      </ul>
    </div>
  )
}

function Certification({children}: {children: React.ReactNode}) {
  return (
    <li className="my-3">
      {children}
    </li>
  )
}