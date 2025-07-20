import ComponentTitle from '../ComponentTitle/ComponentTitle'
import SkillStrip from '../Common/SkillStrip'
import TableRow from '../Common/TableRow'

import { IoSchoolOutline } from "react-icons/io5";
import './About.css'
import TimeLine from '../Common/TimeLine';

function About() {
  return (
    <section>
      <ComponentTitle title="About me" />
      <div className="about-me">
        <h2>Irfan Khan</h2>
        <p className='role'>UI/UX Developer & Front-end Developer</p>
        <p className="about-me">I'm a UI/UX Designer and Frontend Developer with 3+ years of experience in HTML, CSS, JavaScript, and Bootstrap, and 2+ years in Figma for modern, responsive UI design. I'm also skilled in React.js as a fresher, and can confidently build clean, interactive web interfaces.</p>
        <p className="about-me">My current CTC is ₹4.8 LPA. I'm seeking a role that allows me to grow as a hybrid designer-developer, and while my expected salary is around ₹6.5 LPA, I'm open to negotiation based on the learning opportunities and working environment.</p>
        <div className="about-detail">
          <div className="outer-layer">
            <div className="inner-layer">
              <TableRow name="Name" value="Irfan Khan" />
              <TableRow name="Phone" value="7838957053" />
            </div>
          </div>

          <div className="outer-layer">
            <div className="inner-layer">
              <TableRow name="Email" value="irfanoptimistic@gmail.com" />
              <TableRow name="Birth" value="5 Jan. 2002" />
            </div>
          </div>
        </div>
      </div>

      {/* skills  */}

      <div className="skills">
        <ComponentTitle title="Professional skills" />
        <div className="progress-bar">
          <div className="design-tools">
            <div className="tools">
              <SkillStrip lang="Figma" wide="90%" bgColor="rgba(255, 255, 255, .8)" isDark="#6c757d" />
              <SkillStrip lang="Adobe XD" wide="86%" bgColor="rgba(255, 255, 255, .8)" isDark="#6c757d" />
              <SkillStrip lang="Photoshop" wide="80%" bgColor="rgba(255, 255, 255, .8)" isDark="#6c757d" />
            </div>
            <div className="specialization">
              Design
            </div>
          </div>
          
          <div className="design-tools">
            <div className="tools">
              <SkillStrip lang="HTML" wide="90%" bgColor="#f56c6d" />
              <SkillStrip lang="CSS" wide="90%" bgColor="#f56c6d" />
              <SkillStrip lang="javaScript" wide="88%" bgColor="#f56c6d" />
              <SkillStrip lang="React.js" wide="80%" bgColor="#f56c6d" />
              <SkillStrip lang="Tailwind CSS" wide="79%" bgColor="#f56c6d" />
              <SkillStrip lang="jQuery" wide="70%" bgColor="#f56c6d" />
              <SkillStrip lang="Redux Toolkit" wide="80%" bgColor="#f56c6d" />
              <SkillStrip lang="Zustand" wide="80%" bgColor="#f56c6d" />
            </div>
            <div className="specialization">Coding</div>
          </div>

          <div className="design-tools">
            <div className="tools">
              <SkillStrip lang="Git" wide="80%" bgColor="rgba(255, 255, 255, .8)" isDark="#6c757d" />
              <SkillStrip lang="Basic SEO" wide="90%" bgColor="rgba(255, 255, 255, .8)" isDark="#6c757d" />
              <SkillStrip lang="Google Meet" wide="90%" bgColor="rgba(255, 255, 255, .8)" isDark="#6c757d" />
              <SkillStrip lang="Multi Tasking" wide="98%" bgColor="rgba(255, 255, 255, .8)" isDark="#6c757d" />
            </div>
            <div className="specialization">Other</div>
          </div>
        </div>
      </div>

      {/* education */}

      <div className="education">
        <ComponentTitle title="Education" />
        
        <div className="timeline">
          <div className="outer-d">
            <div className="inner-d">
                <IoSchoolOutline />
            </div>
          </div>
          <TimeLine degree="B.C.A (Bachelor of Computer Applications)" school="Gurugram University (2020 - 2023)" para="Gained a strong foundation in computer science, programming, and software development with a focus on practical applications." />

          <TimeLine degree="G.W.D.D (Graphics, Web Design & Development)" school="Arena Animation (2019 - 2021)" para="Specialized in UI/UX design, responsive web development, and front-end technologies. Learned tools like Photoshop, Illustrator, HTML, CSS, and JavaScript with hands-on project experience." />

        </div>
      </div>
      
    </section>
  )
}

export default About