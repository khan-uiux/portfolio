import { MdOutlineDateRange } from "react-icons/md";

function TimeLine({degree, school, para, responsibilities}) {

    const paraStyle = {
        display : para ? 'block' : 'none',
    }

    const isResponsibility = {
        display : responsibilities ? 'block' : 'none'
    }

  return (
    <div className="timeline-content">
        <div className="mb-1">
            <h6 className="degree-name">{degree ? degree : <></>}</h6>
            { school && <div className="duration"><span style={{display:"flex", margin:"5px 0px"}}> {<MdOutlineDateRange />} </span>{school}</div> }
        </div>
        <p className="normal-para" style={paraStyle}>{para}</p>
        <ul style={isResponsibility} className="resp-ul">
           { responsibilities && responsibilities.map((li, index) => {
            return <li key={index}>{li}</li>
           }) }
        </ul>
    </div>
  )
}

export default TimeLine