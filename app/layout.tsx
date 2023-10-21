import type { Metadata } from 'next'
import './globals.css'
import TreeView from '@/components/shared/tree-view'
import TabContainer from '@/components/shared/tab-container'
import Tab from '@/components/shared/tab'

export const metadata: Metadata = {
  title: 'Francesco\' Code Chronacles',
  description: 'My Beautiful Portfolio',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className='bg-lighter-dark-gray overflow-x-hidden'>
      <body className='fixed top-0 left-0 flex w-full h-full'>
        <div className="h-screen flex-2 bg-blue-200">
          <TreeView/>
        </div>
        <div className="relative flex-1 overscroll-none overflow-y-scroll">
          <TabContainer>
            <Tab title='home-page.tsx'></Tab>
            <Tab title='project-page.tsx'></Tab>
            <Tab title='contact-page.tsx'></Tab>
            <Tab title='test-page.tsx'></Tab>
          </TabContainer>
          <div className="m-5 h-[300vh]">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
