import Link from "next/link"
import Head from "next/head"


export default function NotFound(){
  return (
    <>
    <Head>
      <title>
      404 - Page not found
      </title>
    </Head>
    <h1>Whoops, seems like you are on a page that does not exist</h1>
    <Link href="/" prefetch={true}>Go to Home</Link>
    </>
  )
}