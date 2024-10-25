import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Francesco VS Code',
  description: 'This is my personal portfolio, to show who I am to the World Wide Web.',
  viewport: 'width=device-width, initial-scale=1.0',
  icons: {
    icon: [
      { url: '/favicon/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-64.png', sizes: '64x64', type: 'image/png' },
      { url: '/favicon/favicon-96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon/favicon-128.png', sizes: '128x128', type: 'image/png' },
      { url: '/favicon/favicon-256.png', sizes: '256x256', type: 'image/png' },
      { url: '/favicon/favicon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/favicon-128x128.png' },
    ],
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://frankymaca.me',
  },
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className='relative bg-dark font-text overscroll-none overflow-hidden'>
        {children}
      </body>
    </html>
  )
}