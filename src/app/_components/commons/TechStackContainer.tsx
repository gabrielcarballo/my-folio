import TechStackContent from './TechStackContent';
import { useState } from "react"
import styles from '../css/TechStack.module.css'
import ToggleCollapse from './Polygon'


export default function TechStackContainer() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }


  return (
    <>
      <p onClick={toggleCollapse} >
        <ToggleCollapse divText="Tech Stack" isCollapsed={isCollapsed} />
      {isCollapsed && <TechStackContent />}
      </p>
    </>
  )
}

