import { Metadata } from "next"
import SimpleAbout from "./_components/SimpleAbout"
import Header from "./_components/commons/Header"


const metadata: Metadata = {
  title: 'My Folio Home',
  description: 'My Portfolio Home Page',
}


export default function Home() {
  return (
    <>
      <Header />
      <main className="font-libre">
        <SimpleAbout />
      </main>
      <footer>
      </footer>
    </>
  )
}
