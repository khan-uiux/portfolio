import { useContext, useState } from "react"
import { PortfolioContext } from "../../Context/Context"

function LiSnippet({onSelect, tabLink, name, icon, currntPage}) {

  const {activeSection} = useContext(PortfolioContext)

  return (
    <>
        <li onClick={() => onSelect(tabLink)} className={`${activeSection === tabLink ? 'activeTab' : ''}`}>
            <div className="center-text">
                <div className='text'>{name}</div>
                <div className="icon">{icon}</div>
            </div>
        </li>
    </>
  )
}

export default LiSnippet