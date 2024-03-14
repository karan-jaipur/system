import React from 'react'
// import RahulFirst from './RahulFirst'
import { NavLink } from 'react-router-dom'

const Rahulnav = () => {
  return (
    <div className='container' style={{ width:'80vw'}}>



        <div>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container">
                    <a class="navbar-brand fs-3 a" href="#"><NavLink style={{textDecoration:"none"}}  to='/'><h4 style={{color:'black'}}>Rahul <span style={{color:'rgb(20, 184, 166)'}}> Seth</span></h4></NavLink></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarScroll">
                        <ul class="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll" >
                            <li class="nav-item">
                                <a class="nav-link active b" aria-current="page" href="#"><NavLink style={{textDecoration:"none"}}  to='/'><h6 style={{color:'black',borderBottom:'2px solid rgb(20, 184, 166)'}}>Home</h6></NavLink></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active b" href="#"><NavLink style={{textDecoration:"none"}}  to='/guest'><h6 style={{color:'rgb(139, 143, 152)'}}>Guestbook</h6></NavLink></a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link active b"><NavLink style={{textDecoration:"none"}}  to='/project'><h6 style={{color:'rgb(139, 143, 152)'}}>Projects</h6></NavLink></a>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <button class="btn btn-outline-primary" type="submit"><i class="fa-solid fa-moon"></i></button>
                        </form>
                    </div>
                </div>
            </nav>

        </div>
 
      
    </div>
  )
}

export default Rahulnav
