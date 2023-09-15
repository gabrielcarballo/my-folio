import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react';
import Header from './components/commons/Header';
import SimpleAbout from './components/About';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gabriel | Portfolio',
  description: 'Coded by Gabriel using Next.js and TailwindCSS',
  applicationName: 'Gabriel Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <Header /> */}
      <SimpleAbout />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
