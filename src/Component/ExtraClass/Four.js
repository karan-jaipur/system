import React from 'react'
import Three from './Three'

const Four = ({age}) => {
  return (
    <div>
      <h1>third{age()}</h1>
      {/* <img src={age}/> */}
      {/* <Three th='fouth' /> */}
      <Three afs={age}/>
    </div>
  )
}

export default Four
