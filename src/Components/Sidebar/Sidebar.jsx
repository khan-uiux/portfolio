import { IoHomeOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { IoCodeWorkingSharp } from "react-icons/io5";
import { RiContactsLine } from "react-icons/ri";
import { FaSquareWebAwesomeStroke } from "react-icons/fa6";


import UserImage from '../../assets/user-image.png'

import './Sidebar.css'
import LiSnippet from "../Common/LiSnippet";

function Sidebar({onSelect}) {
  
  return (
    <div className="sidebar">
      <div className="profile-image">
        <img src={UserImage} alt="" />
      </div>
      <div className="name-detail">
        <h3>Irfan Khan</h3>
        <p className="role">Front-end Developer</p>
      </div>
      <nav className='main-nav'>
        <ul>
          <LiSnippet name="Home" icon={<IoHomeOutline />} tabLink="home" onSelect={onSelect} />
          <LiSnippet name="About" icon={<FiUser />} tabLink="about" onSelect={onSelect} />
          <LiSnippet name="Services" icon={<FaSquareWebAwesomeStroke />} tabLink="services" onSelect={onSelect} />
          <LiSnippet name="SharesPoint Exp" icon={<FaSquareWebAwesomeStroke />} tabLink="sharespoint" onSelect={onSelect} />
          <LiSnippet name="Work & Experience" icon={<IoCodeWorkingSharp />} tabLink="portfolio" onSelect={onSelect} />
          <LiSnippet name="Contact" icon={<RiContactsLine />} tabLink="contact" onSelect={onSelect} />
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar