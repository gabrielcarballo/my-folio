'use client'
import ContactBox from "@/app/contacts/components/commons/ContactBox";
import React from "react";
import TypeWritter, { ITypewriterProps } from 'react-ts-typewriter'
import TechStackContainer from "./TechStackContainer";



const typewriterProps: ITypewriterProps = {
  text: ['Gabriel Carballo', 'Developer', 'Researcher', 'Eternal Student', 'Lawyer', 'Entrepreneur', 'Gamer', 'Code Passionate', 'Gabriel Carballo']
    .map((text) => text.toUpperCase()),
  speed: 80,
  delay: 2000,
  cursor: true,
}

export default function SimpleAbout() {
  return (
    <>
      <h1 className="text-2xl mb-2">Hello, I'm &nbsp;</h1>
      <span className="font-bold text-3xl">
        <TypeWritter {...typewriterProps} />
      </span>
      <div>
        <h2 className="italic mb-2">
          Passionate full-stack developer with a keen interest in crafting disruptive interfaces,
          solving complex problems, and understanding the profound impact technology has on humanity,
          particularly within the healthcare field.
        </h2>
        <ContactBox />
      </div>
      <h2>My Tech Stack</h2>
      <TechStackContainer />
    </>
  )
}
