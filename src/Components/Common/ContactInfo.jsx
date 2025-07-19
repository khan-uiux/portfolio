import React from 'react'

function ContactInfo(props) {
  return (
    <div className="contact-cards">
        <div className="contact-card">
        {props.icon}
        </div>
        <p>{props.value}</p>
    </div>
  )
}

export default ContactInfo