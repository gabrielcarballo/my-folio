import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: '404 - Page not found',
  description: 'Page does not exist',
}



export default function NotFound(){
  return (
    <>
    <h1>Whoops, seems like you are on a page that does not exist</h1>
    <Link href="/" prefetch={true}>Go to Home</Link>
    </>
  )
}