import { PiHandbagDuotone } from 'react-icons/pi'
import TimeLine from '../Common/TimeLine'
import ComponentTitle from '../ComponentTitle/ComponentTitle'
import './SharesPoint.css'

function SharesPoint() {
  return (
    <div className="sharespoint-container">
      <ComponentTitle title="Microsoft SharesPoint" />
      <div className="content">
        <p>Microsoft SharePoint is a powerful collaboration and content management platform used to build intranets, manage documents, and streamline workflows within organizations. It enhances team productivity by providing centralized access to files, communication, and task automation. Ideal for enterprises, SharePoint is commonly used for internal portals, knowledge sharing, and project coordination.</p>
      </div>

      <ComponentTitle title = "What I Can Do with SharePoint" />

      <div className="timeline">
          <TimeLine
            responsibilities={["Build internal websites for departments or projects with custom layouts and branding.", "Organize, share, and manage documents with version control and access permissions.", "Create and maintain data lists like tasks, contacts, or assets using custom views and filters.", "Build modern, responsive pages using web parts for news, quick links, events, and more.", "Enable real-time collaboration on files and projects, improving team efficiency."]}  />

        </div>

        <p style={{marginTop:"30px", fontSize:"14px", fontWeight:"300", letterSpacing:".3px"}}>While I haven't worked directly on SharePoint projects before, I have a solid foundation in web technologies and a strong understanding of collaborative platforms. With just 2–3 training sessions or guidance on your existing structure, I am confident in independently handling SharePoint-related tasks efficiently. My quick adaptability and problem-solving mindset ensure I can contribute without steep learning curves.</p>
    </div>
  )
}

export default SharesPoint