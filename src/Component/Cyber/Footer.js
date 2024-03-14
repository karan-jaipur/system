import React from 'react'
import '../Cyber/Cybersec.css'

const Footer = () => {
  return (
    <div className='py-5' style={{backgroundColor:'rgb(17, 25, 39)',color:'white'}}>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3 col-md-12 col-sm-12'>
            <div className='d-flex align-items-center'>
              <div style={{fontSize:'30px'}} className='aa'>TIPS-G</div>
              <div><button className='aa text-black'>Cyber-Security</button></div>
            </div>
            <div>
              <div className='a100'><i class="fa-solid fa-phone"></i>+91 7020609101</div>
              <div className='a100'><i class="fa-solid fa-location-dot"></i>101-201-301, Chanda Tower, Girnar Colony, Gandhi Path Road, Vaishali Nagar, Jaipur - 302021</div>
            </div>
          </div>
          <div className='col-lg-3 col-md-12 col-sm-12 i500'>
            <div>All Courses</div>
            <div>Specialized Courses</div>
            <div>Certifications</div>
            <div>Services</div>
            <div>Contact Us</div>
          </div>
          <div className='col-lg-3 col-md-12 col-sm-12 i500'>
            <div>About Us</div>
            <div>News and Blog </div>
            <div>Franchise</div>
            <div>Testimonials</div>
            <div>FAQ</div>
          </div>
          
          <div className='col-lg-3 col-md-12 col-sm-12'>
            <div className='d-flex align-items-center gap-2'>
            <div className='aaa '>Sign In</div>
            <div><button className='aaa text-black'>Get Enrolled</button></div>
            </div>
            <div className='a100'><u>Download Application</u></div>
            <div className='d-flex align-items-center gap-4 text-black'>
              <div style={{fontSize:'30px',color:'rgb(77, 232, 22)',padding:'3px'}}><i class="fa-solid fa-play"></i></div>
              <div style={{fontSize:'30px',color:'rgb(77, 232, 22)',padding:'3px'}}><i class="fa-brands fa-app-store-ios"></i></div>
            </div>
            <div className='a100'>Follow Us :</div>
            <div className='d-flex align-items-center gap-4 text-black'>
              <div style={{fontSize:'20px',color:'rgb(77, 232, 22)',padding:'3px'}}><i class="fa-brands fa-instagram"></i></div>
              <div style={{fontSize:'20px',color:'rgb(77, 232, 22)',padding:'3px'}}><i class="fa-brands fa-facebook"></i></div>
              <div style={{fontSize:'20px',color:'rgb(77, 232, 22)',padding:'3px'}}><i class="fa-brands fa-linkedin"></i></div>
              <div style={{fontSize:'20px',color:'rgb(77, 232, 22)',padding:'3px'}}><i class="fa-brands fa-youtube"></i></div>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
        <div className='col-lg-3 col-md-12 col-sm-12 a100'>2023 © TIPS-G Cybersecurity</div>
        <div className='col-lg-2 col-md-12 col-sm-12 a100'>Terms of Service</div>
        <div className='col-lg-2 col-md-12 col-sm-12 a100'>Privacy Policy</div>
        <div className='col-lg-2 col-md-12 col-sm-12 a100'>Acceptable Use Policy</div>
        <div className='col-lg-1 col-md-12 col-sm-12 a100'>FAQ</div>
        </div>
      </div>
    </div>
  )
}

export default Footer
