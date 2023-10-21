import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Francesco\' Code Chronacles',
  description: 'My Beautiful Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-lighter-dark-gray overflow-x-hidden'>
      <body>{children}</body>
    </html>
  )
}
