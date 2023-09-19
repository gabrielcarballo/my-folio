import React from "react";
import { ReactNode } from "react";
import NavBarContent from "./NavBarContent";


const Header = (): ReactNode => {
  return (
  <>
    <nav className="font-poppins font-bold h-14 bg-neutral-900 mb-10 border-5 border-zinc-50">
      <NavBarContent />
    </nav>
  </>
)
  }

export default Header;