import { homePage } from './contents/home-page'
import { projectPage } from './contents/project-page'
import { companyPage } from './contents/company-page'
import { contactPage } from './contents/contact-page'

export function getPageContent(name: string) {
  switch (name) {
    case 'home.tsx':
      return homePage
    case 'projects.tsx':
      return projectPage
    case 'my-company.tsx':
      return companyPage
    case 'textme.md':
      return contactPage
    default:
      return `page not found :(\npage not found :(\n`
  }
}