import React from 'react'

function TableRow(props) {
  return (
    <div className="row">
        <p className='name'>{props.name}</p>
        <p className='value'>{props.value}</p>
    </div>
  )
}

export default TableRow