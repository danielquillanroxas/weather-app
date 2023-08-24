import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Weather App.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link id="theme-link" rel="stylesheet" href="/themes/lara-dark-blue/theme.css"></link>
      </head>
      <body>
        {children}
        </body>
    </html>
  )
}
