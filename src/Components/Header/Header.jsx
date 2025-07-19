import { IoIosSunny } from "react-icons/io";
import { IoIosMoon } from "react-icons/io";

import './Header.css'
import { useContext } from "react";
import { PortfolioContext } from "../../Context/Context";

function Header() {
  
  const {theme, toggleTheme} = useContext(PortfolioContext)

  return (
    <div className="header">
      <div className="outer-box">
        <div className="inner-box" onClick={toggleTheme}>
          { theme === 'dark' ? <IoIosMoon /> : <IoIosSunny /> }
        </div>
      </div>
    </div>
  )
}

export default Header