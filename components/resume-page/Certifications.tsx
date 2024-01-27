import { ResumeTitle } from "./utils"
import certifiateIcon from '@/public/icons/certificate.json'


export default function Certifications() {
  return (
    <div className="my-10">
      <ResumeTitle icon={certifiateIcon} state="hover-pinch">
        Certifications
      </ResumeTitle>
      <ul className="list-inside list-disc my-10">
        <Certification>MikroTik Certified Network Associate (MTCNA)</Certification>
        <Certification>UX/UI Design Course Certification</Certification>
        <Certification>HTML/CSS Course Certification</Certification>
      </ul>
    </div>
  )
}

function Certification({children}: {children: React.ReactNode}) {
  return (
    <li className="my-3 md:text-xs">
      {children}
    </li>
  )
}