import React from 'react'

function ServiceCard(props) {
  return (
    <div className="card">
        <div className="icon">
            {props.icon}
        </div>
        <div className="body-content">
        <h3>{props.serviceName}</h3>
        <p>{props.description}</p>
        </div>
    </div>
  )
}

export default ServiceCard