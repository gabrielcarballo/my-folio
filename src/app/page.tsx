import Head from "next/head"
import { Metadata } from "next"
import SimpleAbout from "./_components/commons/SimpleAbout"
import Header from "./_components/commons/Header"


const metadata: Metadata = {
  title: 'My Folio Home',
  description: 'My Portfolio Home Page',
}


export default function Home() {
  return (
    <>
    <main>
      <h1>Hello World with Next.js!</h1>
      <Header />
      <SimpleAbout />
    </main>
    <footer>
    </footer>
    </>
  )
}
