'use client'
import TechStackContent from './TechStackContent';
import { useState } from "react"
import Polygon from './Polygon'


export default function TechStackContainer() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <>
      <Polygon divText="My Tech Stack" isCollapsed={isCollapsed} onClick={toggleCollapse} />
      {isCollapsed && <TechStackContent />}
    </>
  )
}

