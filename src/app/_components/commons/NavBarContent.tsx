import Link from "next/link";

export default function NavigationBar () {
  return (
    <>
      <Link href="/" >
          <img src="public/favicon-32x32.png" alt="Gabriel logo" />
          </Link>
          <Link href="/about" prefetch={true}>
            About Me
          </Link>
          <Link href="/contacts" prefetch={true}>
            Contact Me
          </Link>
    </>
  )
}