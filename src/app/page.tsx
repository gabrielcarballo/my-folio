import Head from "next/head"
import { Metadata } from "next"
import SimpleAbout from "./_components/commons/SimpleAbout"


export const metadata: Metadata = {
  title: 'My Folio Home',
  description: 'My Portfolio Home Page',
}


export default function Home() {
  return (
    <>
    <h1>Hello World with Next.js!</h1>
    <SimpleAbout />
    </>
  )
}
