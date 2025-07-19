import TypewriterComponent from '../TypweWriter/Typewriter'
import { FaLinkedin } from "react-icons/fa6";
import { LuDribbble } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { FaLink } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { FaBriefcase } from 'react-icons/fa';
import { MdWifiCalling3 } from "react-icons/md";

import Resume from '../../assets/irfan-khan-resume.pdf'
import './Hero.css'
import SocialSnippet from '../Common/SocialSnippet';

function Hero() {
  return (
    <div className="hero-content">
      <h1>Irfan Khan</h1>
      <TypewriterComponent />
      <div className="social-media">
        <SocialSnippet 
          link="https://www.linkedin.com/in/irfanoptimistic/" 
          icon={<FaLinkedin 
          className='social-icon' />} />

        <SocialSnippet 
          link="https://dribbble.com/irfanUIUXDesigner" 
          icon={<LuDribbble 
          className='social-icon' />} />

        <SocialSnippet 
          link="mailto:irfaoptimistic@gmail.com"
          icon={<MdOutlineEmail 
          className='social-icon' />} />

          <SocialSnippet 
          link="https://in.pinterest.com/irfanoptimistic/"
          icon={<FaPinterestP 
          className='social-icon' />} />

          <SocialSnippet 
          link="https://www.naukri.com/mnjuser/profile?id=&altresid"
          icon={<FaBriefcase 
          className='social-icon' />} />

          <SocialSnippet 
          link="tel:7838957053"
          icon={<MdWifiCalling3 
          className='social-icon' />} />
      </div>
      <div className="line-design"></div>
      <div className="bottom-links">
        <a href={Resume} target='_blank'>
          <div className="resume-services">
            <div className="outer">
              <div className="inner-icon">
                <FaLink />
              </div>
            </div>
            <p className='download-cv'>Download my CV</p>
          </div>
        </a>

        <a href="mailto:irfaoptimistic@gmail.com">
          <div className="resume-services">
            <div className="outer">
              <div className="inner-icon">
                <FaLink />
              </div>
            </div>
            <p className='download-cv'>Contact Me</p>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Hero