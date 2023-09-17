import Link from "next/link";

export default function NavigationBarContent() {
  return (
    <>
      <div className="flex">
        <img src="favicon-32x32.png" alt="Gabriel logo" />
        <span className="self-center">Gabriel Carballo</span>
      </div>
      <div className="flex justify-between space-x-2">
        <Link href="/about" prefetch={true} >
          About Me
        </Link>
        <Link href="/contacts" prefetch={true} >
          Contact Me
        </Link>
        <Link href="/experiments" prefetch={true} >
          Experiments
        </Link>
        <Link href="/thoughts" prefetch={true} >
          Thoughts
        </Link>
        <Link href="/work" prefetch={true} >
          Work
        </Link>
      </div>
    </>
  )
}