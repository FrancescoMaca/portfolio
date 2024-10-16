import { homePage } from './contents/home-page'
import { projectPage } from './contents/project-page'
import { companyPage } from './contents/company-page'
import { contactPage } from './contents/contact-page'
import { dockerfileContent } from './contents/dockerfile-content'
import { notFoundContent } from './contents/not-found'
import { dotenvContent } from './contents/dotenv'
import { dotenvSampleContent } from './contents/dotenv-sample'
import { dockerignoreContent } from './contents/dockerignore'
import { eslintrcContent } from './contents/eslintrc'
import { gitignoreContent } from './contents/gitignore'
import { nextEnvContent } from './contents/next-env'
import { nextConfigContent } from './contents/next-config'
import { packageContent } from './contents/package'
import { yarnLockContent } from './contents/yarn-lock'
import { tsConfigContent } from './contents/ts-config'
import { readmeContent } from './contents/readme'
import { tailwindConfigContent } from './contents/tailwind-config'
import { postcssContent } from './contents/postcss'
import { deployContent } from './contents/deploy'

export interface PageContent {
  content: string;
  prettyContent?: string;
}

const contentMap: Record<string, PageContent> = {
  'page.tsx': homePage,
  'project-page.tsx': projectPage,
  'company-page.tsx': companyPage,
  'contact-page.tsx': contactPage,
  'Dockerfile': dockerfileContent,
  '.dockerignore': dockerignoreContent,
  '.env': dotenvContent,
  '.env.sample': dotenvSampleContent,
  '.eslintrc.json': eslintrcContent,
  '.gitignore': gitignoreContent,
  'next-env.d.ts': nextEnvContent,
  'next.config.js': nextConfigContent,
  'package.json': packageContent,
  'postcss.config.js': postcssContent,
  'README.md': readmeContent,
  'tailwind.config.ts': tailwindConfigContent,
  'tsconfig.json': tsConfigContent,
  'yarn.lock': yarnLockContent,
  'deploy.yml': deployContent
}

export function getEditorContent(name: string, goodFormat: boolean): string {
  let pageContent: PageContent = contentMap[name] ?? notFoundContent

  if (goodFormat) {
    return !!pageContent.prettyContent ? pageContent.prettyContent : pageContent.content
  }
  else {
    return pageContent.content
  }
}

export function contentHasPrettyOption(name: string): boolean {
  const pageContent = contentMap[name] ?? notFoundContent

  return !!pageContent.prettyContent
}