
import pxImage from '../../assets/policyx.jpg'

function ExperinceCard({projecTitle, role, skills, link}) {
  return (
    <div className="card-main">
      <div className="card-body">
        <h3 className="project-title">{projecTitle}</h3>
        <p className='my-role'><span>Role :</span> {role}</p>
        <p className='my-role'><span>Skills Stack :</span> {skills}</p>
        <p className='my-role'><span>Live Link :</span> <a href={link} target='_blank'>{link}</a></p>
      </div>
    </div>
  )
}

export default ExperinceCard