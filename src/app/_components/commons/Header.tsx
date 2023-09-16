import Head from "next/head";
import Link from "next/link";
import React from "react";
import { ReactNode } from "react";


const Header = (): ReactNode => {
  return (
  <>
        <nav>
          <Link href="/" >
          {/* <img src="toplace" alt="Gabriel logo" /> */}
          </Link>
          <Link href="/about" prefetch={true}>
            About Me,
          </Link>
          <Link href="/contacts" prefetch={true}>
            Contact Me
          </Link>
        </nav>
  </>
)
  }

export default Header;