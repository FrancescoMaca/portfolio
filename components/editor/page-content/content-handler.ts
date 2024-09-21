import { homePage } from './contents/home-page'
import { projectPage } from './contents/project-page'
import { companyPage } from './contents/company-page'
import { contactPage } from './contents/contact-page'
import { dockerfileContent } from './contents/dockerfile-content'

export function getPageContent(name: string) {
  switch (name) {
    case 'page.tsx':
      return homePage
    case 'project-page.tsx':
      return projectPage
    case 'company-page.tsx':
      return companyPage
    case 'contact-page.tsx':
      return contactPage
    case 'Dockerfile':
      return dockerfileContent
    default:
      return `page not found :(\npage not found :(\n`
  }
}

export function getPageLanguage(name: string) {
  switch(name.split('.').pop().toLowerCase()) {
    case 'tsx':
      return 'typescript'
    case 'dockerfile':
      return 'dockerfile'
    default:
      return 'plaintext'
  }
}