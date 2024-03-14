import React from 'react'
import '../Cyber/Cybersec.css'


const Nav = () => {
  return (
    <div>
      <div className='a'>
        <h5 style={{ backgroundColor: 'rgb(77, 232, 22)' }} className='text-center py-3'>New Batches are Starting Soon !</h5>
      </div>
      <div style={{backgroundColor:'rgb(17, 25, 39)'}}>
        <nav class="navbar navbar-expand-lg " >
          <div class="container-fluid">
            <a class="navbar-brand aa text-light" href="#">TIPS-G</a>
            <button className='aa text-black'>Cyber-Security</button>
            <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarNav">
              <ul class="navbar-nav mx-auto">
                <li class="nav-item">
                  <a class="nav-link  aaa text-light" aria-current="page" href="#">All Courses</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link aaa text-light" href="#">Specialized Courses</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link aaa text-light" href="#">Certifications</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link aaa text-light" href="#">Services</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link aaa text-light" href="#">Contact Us</a>
                </li>
                {/* <li class="nav-item">
                  <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                </li> */}
              </ul>
              <form class="d-flex mx-auto align-items-center gap-2 " role="search">
                <h5 className='aaa text-light'>Sign In</h5>
                  <button className='aaa text-black'  type="submit">Get Enrolled</button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Nav
