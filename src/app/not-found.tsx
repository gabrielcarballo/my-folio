import Link from "next/link"
import { Metadata } from "next"
import Head from "next/head"
import Header from "./_components/commons/Header"



export const metadata: Metadata = {
  title: '404 - Page not found',
  description: 'Page does not exist',

}


export default function NotFound(){
  return (
    <html lang="en">
      <main>
        <Header />
      </main>
      <body></body>
    </html>
  )
} 