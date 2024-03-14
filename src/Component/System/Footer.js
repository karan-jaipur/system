import React from 'react'

const Footer = () => {
  return (
    <div className='py-5' style={{backgroundColor:'rgb(226, 234, 255)'}}>
    <div className='container py-5'>
      <div className='text-center'>Important Links</div>
      <div className='container py-3'>
        <div className='row'>
          <div className='col-lg-1 col-md-12 col-sm-12'></div>
          <div className='col-lg-2 col-md-12 col-sm-12 co'>Privacy Policy</div>
          <div className='col-lg-2 col-md-12 col-sm-12 co'>Refund and Returns Policy</div>
          <div className='col-lg-2 col-md-12 col-sm-12 co'>Contact Us</div>
          <div className='col-lg-2 col-md-12 col-sm-12 co'>Terms & Conditions</div>
          <div className='col-lg-2 col-md-12 col-sm-12 co'>Shipping Policy</div>
          <div className='col-lg-1 col-md-12 col-sm-12'></div>
        </div>
      </div>
    </div>
    <div className='d-flex justify-content-center gap-5'>
      <div className='font'><i class="fa-brands fa-twitter"></i></div>
      <div className='font'><i class="fa-brands fa-facebook"></i></div>
      <div className='font'><i class="fa-brands fa-instagram"></i> </div>
    </div>
    <div className='text-center pt-3'><p>© 2023 Systumm Clothing. Built with 3 by NickFlix.in</p></div>








    </div>
  )
}

export default Footer
