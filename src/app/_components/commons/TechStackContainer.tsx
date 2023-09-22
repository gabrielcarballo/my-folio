import TechStackContent from './TechStackContent';
import { useState } from "react"
import Polygon from './Polygon'


export default function TechStackContainer() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }


  return (
      <p onClick={toggleCollapse} >
        <Polygon divText="Tech Stack" isCollapsed={isCollapsed} />
      {isCollapsed && <TechStackContent />}
      </p>
  )
}

