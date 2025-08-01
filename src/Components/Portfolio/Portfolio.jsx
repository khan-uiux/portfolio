import ComponentTitle from '../ComponentTitle/ComponentTitle'
import ExperienceCard from '../Common/ExperinceCard'

import { PiHandbagDuotone } from "react-icons/pi";

import './Portfolio.css'
import TimeLine from '../Common/TimeLine';

function Portfolio() {
  return (
    <section className="work-section">
      <ComponentTitle title="Live Projects" />
      <div className="experience-cards">
        <ExperienceCard projecTitle="PolicyX - Insurance Comparison Website" role="UI/UX Designer & Frontend Developer" skills="Photoshop, Figma, HTML, CSS, Bootstrap, JavaScript, Tailwind" link="https://www.policyx.com/" />

        <ExperienceCard projecTitle="Fab32 Dental Website" role="Frontend Developer" skills="HTML, CSS, Bootstrap, JavaScript, Tailwind" link="https://fab32dental.com/" />

        <ExperienceCard projecTitle="Sharescart - Stock Sharing Platform" role="UI/UX Designer & Frontend Developer" skills="Photoshop, HTML, CSS, Bootstrap, JavaScript, Tailwind" link="https://www.sharescart.com/" />

        <ExperienceCard projecTitle="Adosha Wellness" role="Graphic & Web Designer" skills="Photoshop, HTML, CSS, Bootstrap, JavaScript" link="https://adoshawellness.com/" />
      </div>

      <div className="title-heading">
        <ComponentTitle title="Learning Projects" />
      </div>
      <div className="experience-cards">
        <ExperienceCard projecTitle="Personal Portfolio" role="UI/UX Designer & Frontend Developer" skills="Figma, HTML, CSS, JavaScript, React.js" link="https://khan-uiux.github.io/portfolio/" />

        <ExperienceCard projecTitle="Fab32 Dental Website" role="Frontend Developer" skills="HTML, CSS, Bootstrap, JavaScript, Tailwind" link="https://fab32dental.com/" />

        <ExperienceCard projecTitle="Sharescart - Stock Sharing Platform" role="UI/UX Designer & Frontend Developer" skills="Photoshop, HTML, CSS, Bootstrap, JavaScript, Tailwind" link="https://www.sharescart.com/" />

        <ExperienceCard projecTitle="Adosha Wellness" role="Graphic & Web Designer" skills="Photoshop, HTML, CSS, Bootstrap, JavaScript" link="https://adoshawellness.com/" />
      </div>

      <div className="title-heading">
        <ComponentTitle title="Work Experience" />
      </div>

      <div className="timeline">
          <div className="outer-d">
            <div className="inner-d">
                <PiHandbagDuotone />
            </div>
          </div>
          <TimeLine 
            degree="UI/UX Designer & Frontend Developer" 
            school="policyX.com - Sep. 2022 - May 2025"
            responsibilities={["Designed user-centric web interfaces using Figma and Adobe XD.", "Developed reusable React.js components with Tailwind CSS.", "Collaborated with the backend team to integrate APIs and data.", "Improved page load speed and optimized design for accessibility."]}  />

            <TimeLine 
            degree="Graphic & Web Designer" 
            school="Haut IT Solutions - April 2022 - Sep. 2022"
            responsibilities={["Created responsive layouts using HTML5, CSS3, and jQuery.", "Converted wireframes into working web pages.", "Ensured cross-browser and mobile compatibility.", "Maintained clean code using Git and component-based architecture.", "Created business presentations and internal handbooks using Microsoft PowerPoint for sales and client communication."]} />

        </div>
    </section>
  )
}

export default Portfolio