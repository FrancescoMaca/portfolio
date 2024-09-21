import { homePage } from './contents/home-page'
import { projectPage } from './contents/project-page'
import { companyPage } from './contents/company-page'
import { contactPage } from './contents/contact-page'

export function getPageContent(name: string) {
  switch (name) {
    case 'home-page.tsx':
      return homePage
    case 'project-page.tsx':
      return projectPage
    case 'company-page.tsx':
      return companyPage
    case 'contact-page.tsx':
      return contactPage
    default:
      return `page not found :(\npage not found :(\n`
  }
}