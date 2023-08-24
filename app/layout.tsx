import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'

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
      <Head><link id="theme-link" rel="stylesheet" href="/themes/lara-light-blue/theme.css" /></Head>
      <body className={inter.className}>
        {children}
        </body>
    </html>
  )
}
