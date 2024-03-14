import React from 'react'
import Four from './Four'

const Sec = (props) => {
  return (
    <div>
      <h1>second {props.name()}</h1>
      {/* <img src={props.name} /> */}
      <Four age={props.name} />
    </div>
  )
}

export default Sec
