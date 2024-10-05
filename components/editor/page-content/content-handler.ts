import { homePage } from './contents/home-page'
import { projectPage } from './contents/project-page'
import { companyPage } from './contents/company-page'
import { contactPage } from './contents/contact-page'
import { dockerfileContent } from './contents/dockerfile-content'
import { notFoundContent } from './contents/not-found'

export interface PageContent {
  content: string;
  prettyContent?: string;
}

export function getEditorContent(name: string, goodFormat: boolean) {
  let pageContent: PageContent = notFoundContent
  
  switch (name) {
    case 'page.tsx':
      pageContent = homePage
      break
    case 'project-page.tsx':
      pageContent = projectPage
      break
    case 'company-page.tsx':
      pageContent = companyPage
      break
    case 'contact-page.tsx':
      pageContent = contactPage
      break
    case 'Dockerfile':
      pageContent = dockerfileContent
  }

  if (goodFormat) {
    return !!pageContent.prettyContent ? pageContent.prettyContent : pageContent.content
  }
  else {
    return pageContent.content
  }
}