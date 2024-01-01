import Footer from '@/components/shared/Footer'
import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/shared/Navbar'

export const metadata: Metadata = {
  title: 'Francesco { Code Artist }',
  description: 'My Beautiful Portfolio',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <title>{"Francesco { Code Artist }"}</title>
        <meta name="description" content="This is my personal portfolio, to show who I am to the World Wide Web." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" sizes="32x32 64x64 96x96 128x128 256x256 512x512" href="/favicon/favicon-32.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon/favicon-128x128.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className='bg-gray font-text px-5'>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
