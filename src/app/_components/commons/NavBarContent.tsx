import Link from "next/link";

export default function NavigationBarContent() {
  return (
    <>
      <div className="flex ml-3">
        <img src="favicon-32x32.png" alt="Gabriel logo" />
        <Link className="self-center" href="/">Gabriel Carballo</Link>
      </div>
      <div className="flex justify-between space-x-4 mr-5">
        <Link href="/about" prefetch={true} >About Me</Link>
        <Link href="/contacts" prefetch={true} >Contact Me</Link>
        <Link href="/experiments" prefetch={true} >Experiments</Link>
        <Link href="/thoughts" prefetch={true} >Thoughts</Link>
        <Link href="/work" prefetch={true} >Work</Link>
      </div>
    </>
  )
}