import React from 'react'
import Footer from './Footer'
import Navgood from './Navgood'

const Contact = () => {
  return (
    <div>
      <Navgood/>
      <div className='container-fluid ' >
        <div className='row' style={{height:'90vh'}}>
          <div className='col-lg-6 col-md-12 col-sm-12'>
            <img className='w-100 h-100' src='https://systumm.com/wp-content/uploads/2023/11/CG-scaled.jpg'/>
          </div>
          <div className='col-lg-6 col-md-12 col-sm-12'>
            <h3>Contact</h3>
            <h6>For any queries regarding systumm.com please mail us at </h6>
            <p className='pb-5 text-primary'>help@systumm.com</p>
            <h6>Gurgaon</h6>
            <p className=' text-primary'>help@systumm.com</p>
            
          
        </div>
      </div>
      </div>
        <Footer/>


















    </div>
  )
}

export default Contact
