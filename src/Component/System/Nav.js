import React from 'react'
import './Systemcss.css'
// import logo from '../Asssets/systemlogo.webp'
import Footer from './Footer'
import Map from './Map'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div>

      <div className='back'>
      <nav className="navbar navbar-expand-lg text-white shadow">
        <div className="container-fluid">
         {/* <img width={{width:"100%"}} src='https://systumm.com/wp-content/uploads/2023/11/image.webp'></img> */}
         <a class="navbar-brand" href="#">
      <img src="https://systumm.com/wp-content/uploads/2023/11/image.webp" alt="Bootstrap" width="200" height="60"/>
    </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse text-white navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0 align-items-center gap-3">
              <li className="nav-item">
                <NavLink style={{textDecoration:"none"}} to='/'>Home</NavLink>
              </li>

              <li className="nav-item dropdown ">
                <a className="nav-link dropdown-toggle active text-primary" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Shops
                </a>
                <ul className="dropdown-menu ">
                  <li><a className="dropdown-item" href="#"><h6>Categories</h6></a></li>
                  <li className='li'><NavLink style={{textDecoration:"none"}} to='/tshirt'>T-shirts</NavLink></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li className='li'> <NavLink style={{textDecoration:"none"}} to='/Hoddies'>Hoddies</NavLink></li>
                </ul>
              </li>
              <li className="nav-item ">
                <NavLink style={{textDecoration:"none"}} to='/About'>About</NavLink>
              </li>
              <li className="nav-item ">
                <NavLink style={{textDecoration:"none"}} to='/Contact'>Contact</NavLink>
              </li>
            </ul>
            <form className="d-flex gap-4 me-5"  >
              <h4 href="#" style={{ cursor: "pointer" }} ><NavLink style={{textDecoration:"none"}} to='/User'><i class="fa-solid fa-user"></i></NavLink></h4>
              <h4 href="#" style={{ cursor: "pointer" }} ><NavLink style={{textDecoration:"none"}} to='/Cart'><i class="fa-solid fa-bag-shopping"></i></NavLink></h4>

            </form>
          </div>
        </div>
      </nav>
      </div>
      <Map/>
      <Footer/>
    </div>
  )
}

export default Nav
