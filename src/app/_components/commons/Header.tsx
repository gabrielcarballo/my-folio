import React from "react";
import { ReactNode } from "react";
import NavBarContent from "./NavBarContent";


const Header = (): ReactNode => {
  return (
  <>
    <nav className="bg-neutral-900 mb-10">
      <NavBarContent />
    </nav>
  </>
)
  }

export default Header;