import React from 'react'
// import Landing2 from './Landing2'
import { NavLink } from 'react-router-dom'
// import Landing1 from './Landing1'
// import Landinglast from './Landinglast'


const Landing = () => {
  return (
    <div>
      {/* ----------------------tinjo nav-------- */}
      <nav class="navbar bg-body-tertiary " >
        <div className="container">
          <a class="navbar-brand"><NavLink style={{textDecoration:"none"}} to='/'><i class="fa-solid fa-lines-leaning"></i></NavLink></a>
          <div class="d-flex gap-4" role="search">
            <NavLink style={{textDecoration:"none"}} to='/Tinjoblog'><h6>Blog</h6></NavLink>
            <NavLink style={{textDecoration:"none"}} to='/Tinjowork'><h6>Work</h6></NavLink>

          </div>
        </div>
      </nav>
      {/* <Landing1 />
      <Landing2 />
      <Landinglast /> */}







      {/* --------------------Landind navbar---------------------------- */}
      {/* <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav  mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
        
      </ul>
      <a class="navbar-brand mx-auto" href="#">Navbar</a>
      <form class="d-flex" role="search">
        <button style={{padding:"9px 80px 9px 80px",backgroundColor:'rgb(17, 27, 71)',color:'white'}} type="submit">But Now</button>
      </form>
    </div>
  </div>
</nav> */}
    </div>
  )
}

export default Landing
