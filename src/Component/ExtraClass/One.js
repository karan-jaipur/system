import React from 'react'
import Sec from '../ExtraClass/Sec'
// import a from '../Asssets/Group 50@2x.png'

function newi() {
  return(
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
)
}
const One = () => {
  const style ={
    backgroundColor:'red',
    color:"green"
    
  }

  
  return (
    <div>
      <h1 style={style} >
     
      </h1>
      {/* <img  src={a}/> */}
      <Sec name={newi} />
    </div>
  )
}

export default One
