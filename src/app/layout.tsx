import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react';
import Header from './_components/commons/Header';
import SimpleAbout from './_components/commons/SimpleAbout';
import Favicon from './1.ico'
import Head from 'next/head';

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
      <main>
        <Header />
      </main>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
