import './ComponentTitle.css'

function ComponentTitle(props) {
  return (
    <div className="title">
        <h6>{props.title}</h6>
        <hr />
    </div>
  )
}

export default ComponentTitle