import React, { useEffect, useState } from 'react'

const Tabs = () => {
  const [a,b]=useState()
  useEffect(()=>{
    b('one')
  },[])

  const col1={
    color:'red',
    backgroundColor:'green',
    fontSize:'30px'
  }
  const col2={
    color:'green',
    backgroundColor:'pink',
    fontSize:'40px'
  }
  const col3={
    color:'blue',
    backgroundColor:'red',
    fontSize:'50px'
  }
  return (
    <div>

      <button onClick={()=>{b('one')}} style={{backgroundColor:a==='one'?'red':'green'}}>first</button>
      <button onClick={()=>{b('two')}} style={{fontSize:a==='two'?'50px':''}}>sec</button>
      <button onClick={()=>{b('three')}} style={{backgroundColor:a==='three'?"pink":''}}>th</button>


      {
        a==='one'?<div style={col1}> first is here</div>:<></>
      }
      {
        a==='two'?<div style={col2}>sec is here</div>:<></>
      }
      {
        a==='three'?<div style={col3}>th is here</div>:<></>
      }








    </div>
  )
}

export default Tabs
