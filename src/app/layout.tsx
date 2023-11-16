import './globals.css'
import type { Metadata } from 'next'
import { Libre_Baskerville, Poppins } from 'next/font/google'
import React from 'react';
import Header from './_components/commons/Header'

const libre = Libre_Baskerville({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-libre',
  weight: ['400'],
})

const poppins = Poppins({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '300'],
})

export const metadata: Metadata = {
  description: 'Gabriel Carballo Portfolio',
  icons: {
    icon: '/favicon-m.png',
  },
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${libre.variable}`}>{children}</body>
    </html>
  )
}
